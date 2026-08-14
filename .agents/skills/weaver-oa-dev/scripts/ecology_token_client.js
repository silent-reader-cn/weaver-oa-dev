/**
 * 泛微OA (E-Cology 9) 开放平台标准认证与 API 调用客户端 (Node.js / JavaScript 版)
 * 功能：
 * 1. 自动完成 applytoken (获取临时 Token 与服务端 RSA 公钥)
 * 2. 自动生成 16 位 AES 对称密钥并通过 RSA 加密完成 token 激活
 * 3. 自动在 Header 中组装 appid, token, userid 调用业务接口
 * 4. 内置 Token 自动缓存、过期自动重新握手与请求重试
 * 5. 基于 Node.js 内置 crypto 与 http/https 模块，零第三方依赖！
 */

const crypto = require('crypto');
const http = require('http');
const https = require('https');
const { URL } = require('url');

class EcologyClient {
  /**
   * @param {Object} options
   * @param {string} options.baseUrl - 泛微 OA 服务地址 (如: http://oa.company.com:8088)
   * @param {string} options.appId - 在泛微后台注册的 AppID (如: ERP_INTEGRATION_01)
   * @param {string} [options.defaultUserId='1'] - 默认操作人 ID (1 代表系统管理员)
   * @param {boolean} [options.autoRefresh=true] - Token 过期是否自动刷新并重试
   */
  constructor({ baseUrl, appId, defaultUserId = '1', autoRefresh = true }) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.appId = appId;
    this.defaultUserId = defaultUserId;
    this.autoRefresh = autoRefresh;

    this.token = null;
    this.secret = null;
    this.expireTime = 0;
  }

  /**
   * 生成 16 字节随机字符串作为 AES 密钥
   */
  _generateSecret(length = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let secret = '';
    const randomBytes = crypto.randomBytes(length);
    for (let i = 0; i < length; i++) {
      secret += chars[randomBytes[i] % chars.length];
    }
    return secret;
  }

  /**
   * 使用服务端 RSA 公钥加密密钥 (RSA/ECB/PKCS1Padding)
   */
  _rsaEncrypt(plainText, spkBase64) {
    let pem = spkBase64.trim();
    if (!pem.startsWith('-----BEGIN')) {
      // 按照 64 字符换行格式化为标准 PEM
      const lines = pem.match(/.{1,64}/g) || [pem];
      pem = `-----BEGIN PUBLIC KEY-----\n${lines.join('\n')}\n-----END PUBLIC KEY-----`;
    }

    const buffer = Buffer.from(plainText, 'utf8');
    const encrypted = crypto.publicEncrypt(
      {
        key: pem,
        padding: crypto.constants.RSA_PKCS1_PADDING
      },
      buffer
    );
    return encrypted.toString('base64');
  }

  /**
   * 底层 HTTP 请求封装
   */
  _httpRequest({ urlStr, method = 'POST', headers = {}, body = null, timeout = 30000 }) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(urlStr);
      const isHttps = urlObj.protocol === 'https:';
      const transport = isHttps ? https : http;

      const reqHeaders = { ...headers };
      let bodyData = null;

      if (body) {
        if (typeof body === 'string' || Buffer.isBuffer(body)) {
          bodyData = body;
        } else {
          bodyData = JSON.stringify(body);
          reqHeaders['Content-Type'] = 'application/json; charset=UTF-8';
        }
        reqHeaders['Content-Length'] = Buffer.byteLength(bodyData);
      }

      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (isHttps ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: method.toUpperCase(),
        headers: reqHeaders,
        timeout
      };

      const req = transport.request(options, (res) => {
        let chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const raw = Buffer.concat(chunks).toString('utf8');
          try {
            const parsed = JSON.parse(raw);
            resolve(parsed);
          } catch (e) {
            resolve({ raw, status: res.statusCode === 200 ? '1' : '0' });
          }
        });
      });

      req.on('error', (err) => reject(err));
      req.on('timeout', () => {
        req.destroy();
        reject(new Error(`请求超时: ${urlStr}`));
      });

      if (bodyData) {
        req.write(bodyData);
      }
      req.end();
    });
  }

  /**
   * 申请临时 Token 与服务端 RSA 公钥
   */
  async applyToken() {
    const url = `${this.baseUrl}/api/ec/dev/auth/applytoken`;
    const formBody = `appid=${encodeURIComponent(this.appId)}`;
    const res = await this._httpRequest({
      urlStr: url,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: formBody
    });

    if (!res.status && String(res.code) !== '1') {
      throw new Error(`ApplyToken 失败: ${JSON.stringify(res)}`);
    }
    if (!res.token || !res.spk) {
      throw new Error(`ApplyToken 返回数据不完整: ${JSON.stringify(res)}`);
    }
    return { token: res.token, spk: res.spk };
  }

  /**
   * 激活 Token 并协商 AES 密钥
   */
  async activateToken(tempToken, spk) {
    const rawSecret = this._generateSecret(16);
    const secretEncrypted = this._rsaEncrypt(rawSecret, spk);

    const url = `${this.baseUrl}/api/ec/dev/auth/token`;
    const formBody = `appid=${encodeURIComponent(this.appId)}&token=${encodeURIComponent(tempToken)}&secret=${encodeURIComponent(secretEncrypted)}`;

    const res = await this._httpRequest({
      urlStr: url,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: formBody
    });

    if (!res.status && String(res.code) !== '1') {
      throw new Error(`Token 激活失败: ${JSON.stringify(res)}`);
    }

    this.token = tempToken;
    this.secret = rawSecret;
    this.expireTime = Date.now() + 5400 * 1000; // 缓存 1.5 小时
    console.log(`[EcologyClient] Token 获取并激活成功: ${this.token}`);
    return this.token;
  }

  /**
   * 获取当前有效 Token（若未初始化或已过期则自动刷新）
   */
  async getValidToken() {
    if (this.token && Date.now() < this.expireTime) {
      return this.token;
    }
    const { token: tempToken, spk } = await this.applyToken();
    return await this.activateToken(tempToken, spk);
  }

  /**
   * 发起业务接口请求
   * @param {Object} reqOptions
   * @param {string} reqOptions.path - 接口路径 (如: /api/workflow/paService/getToDoWorkflowRequestList)
   * @param {string} [reqOptions.method='POST'] - 请求方式 (GET, POST)
   * @param {Object} [reqOptions.params] - URL 查询参数
   * @param {Object} [reqOptions.data] - 请求体 JSON 数据或表单数据
   * @param {string} [reqOptions.userId] - 操作人 ID
   * @param {boolean} [reqOptions.isJson=true] - 是否为 JSON 格式提交
   */
  async request({ path, method = 'POST', params = null, data = null, userId = null, isJson = true }) {
    const token = await this.getValidToken();
    const uid = userId || this.defaultUserId;

    let targetUrl = `${this.baseUrl}/${path.replace(/^\/+/, '')}`;
    if (params) {
      const queryStr = Object.entries(params)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join('&');
      targetUrl += (targetUrl.includes('?') ? '&' : '?') + queryStr;
    }

    const headers = {
      appid: this.appId,
      token: token,
      userid: uid,
      'User-Agent': 'Weaver-Ecology-Node-SDK/1.0'
    };

    let bodyData = null;
    if (data !== null && data !== undefined) {
      if (isJson) {
        headers['Content-Type'] = 'application/json; charset=UTF-8';
        bodyData = typeof data === 'string' ? data : JSON.stringify(data);
      } else {
        headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        bodyData = Object.entries(data)
          .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
          .join('&');
      }
    }

    try {
      const res = await this._httpRequest({
        urlStr: targetUrl,
        method,
        headers,
        body: bodyData
      });

      // 检查 Token 是否过期 (code === "-1")
      if (String(res.code) === '-1' && this.autoRefresh) {
        console.warn('[EcologyClient] 检测到 Token 过期，正在重新激活并重试请求...');
        this.token = null; // 标记过期
        return await this.request({ path, method, params, data, userId, isJson });
      }

      return res;
    } catch (err) {
      return { status: '0', error: err.message };
    }
  }
}

module.exports = EcologyClient;

// 命令行直接运行测试演示
if (require.main === module) {
  console.log('=== 泛微 E9 Node.js 客户端演示 ===');
  console.log('使用示例:');
  console.log(`
const EcologyClient = require('./ecology_token_client');

async function main() {
  const client = new EcologyClient({
    baseUrl: 'http://oa.yourcompany.com',
    appId: 'ERP_INTEGRATION_01',
    defaultUserId: '1'
  });

  // 1. 获取待办流程列表
  const todoList = await client.request({
    path: '/api/workflow/paService/getToDoWorkflowRequestList',
    method: 'POST',
    data: { pageSize: '20', pageNo: '1' }
  });
  console.log('待办列表:', todoList);
}

main();
  `);
}
