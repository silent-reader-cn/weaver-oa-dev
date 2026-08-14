# 泛微OA (E-Cology 9) 后端接口开发知识库与 Skill

本项目已将泛微官方开放平台与云商店开发者文档（`https://e-cloudstore.com/`）全量 **538** 个后端 REST 接口及权威认证鉴权技术指南完整收录与清洗，转换为规范的 Markdown 文档体系，并封装为标准的 **Antigravity 开发 Skill** 与 **Node.js / JavaScript** 开发工具集。

---

## 🌟 核心特性

- **全量接口收录**: 覆盖 8 大业务模块（工作流、人力资源、知识管理、考勤、表单建模、门户、协作、邮件）共 **538** 个官方后端 API。
- **深度认证指南**: 完整收录官方三步认证流程（`regist` 注册 -> `applytoken` 申请 -> 业务调用），包含 RSA 密钥加密规范、RSA 加密 `userid` 身份绑定、彻底屏蔽 Cookie 防串号机制、Jar 包冲突处理与 Redis 缓存排查。
- **开箱即用 Skill**: 符合 Antigravity Skill 标准规范，位于 `.agents/skills/weaver-oa-dev/`，支持 AI 辅助快速检索与精准代码生成。
- **前端 JS 完整 API**: 收录官方完整的流程表单 `WfForm` 与建模表单 `ModeForm` JavaScript API 全功能手册。
- **实战 JS / Node.js 工具**: 提供原生 Node.js E9 开放平台标准鉴权 SDK（基于 Node.js 原生 `crypto` 库实现 RSA 密钥交换与自动 Token 维护，零第三方依赖）。

---

## 📁 目录结构

```text
weaveroa/
├── .agents/
│   └── skills/
│       └── weaver-oa-dev/                      # Antigravity 专属 Skill
│           ├── SKILL.md                        # Skill 主入口与执行规范
│           ├── references/                     # 接口文档与核心指南
│           │   ├── 01_auth_and_security.md     # 官方认证鉴权规范 (RSA+AES+Token+避坑指南)
│           │   ├── 02_workflow_apis.md         # 工作流程 API (45个)
│           │   ├── 03_hrm_apis.md              # 人力资源与组织架构 API (225个)
│           │   ├── 04_doc_knowledge_apis.md    # 知识文档管理 API (60个)
│           │   ├── 05_attendance_apis.md       # 考勤管理 API (107个)
│           │   ├── 06_form_modeling_apis.md    # 表单建模 API (19个)
│           │   ├── 07_portal_apis.md           # 门户管理 API (76个)
│           │   ├── 08_cowork_and_email_apis.md # 协作与邮件 API (6个)
│           │   ├── 09_custom_backend_dev.md    # 后端 Java 二次开发实战指南
│           │   ├── 10_api_quick_index.md       # 538 个 API 端点速查字典
│           │   ├── 11_wfform_frontend_api.md   # 流程表单前端 WfForm API 手册
│           │   ├── 12_modeform_frontend_api.md # 建模表单前端 ModeForm API 手册
│           │   └── 13_message_push_apis.md     # 消息中心与第三方推送开发指南
│           ├── scripts/                        # JavaScript / Node.js 核心脚本
│           │   ├── ecology_token_client.js     # Node.js 版 E9 鉴权与调用 SDK
│           │   ├── api_search.js               # Node.js 版 API 命令行快速检索工具
│           │   ├── ecology_token_client.py     # Python 版 E9 鉴权与调用 SDK
│           │   └── api_search.py               # Python 版 API 检索工具
│           └── examples/                       # JavaScript 实战开发示例
│               ├── workflow_integration.js     # 工作流创建与待办查询 (Node.js)
│               ├── hrm_organization_sync.js    # 人力资源与组织架构同步 (Node.js)
│               ├── form_custom_codeblock.js    # 表单前端 WfForm JS 联动与校验代码块
│               └── doc_attachment_upload.js    # 知识文档创建与富文本处理 (Node.js)
├── docs/                                       # 离线 Markdown 文档库 (供阅读)
│   ├── README.md
│   ├── 01_开发规范与安全认证.md
│   ├── 02_工作流程接口.md
│   ├── 03_人力资源接口.md
│   ├── 04_知识管理接口.md
│   ├── 05_考勤管理接口.md
│   ├── 06_表单建模接口.md
│   ├── 07_门户管理接口.md
│   ├── 08_协作与邮件接口.md
│   ├── 09_二次开发指南.md
│   ├── 10_API接口速查字典.md
│   ├── 11_流程表单前端WfForm接口.md
│   ├── 12_表单建模前端ModeForm接口.md
│   └── 13_消息中心与第三方推送.md
└── README.md
```

---

## 🚀 快速上手 (Node.js)

### 1. 命令行检索 API
```bash
# 检索工作流待办相关接口
node .agents/skills/weaver-oa-dev/scripts/api_search.js 待办

# 检索人力资源模块的 POST 接口
node .agents/skills/weaver-oa-dev/scripts/api_search.js -m 人力资源 -X POST
```

### 2. Node.js 客户端调用 E9 接口
```javascript
const EcologyClient = require('./.agents/skills/weaver-oa-dev/scripts/ecology_token_client');

// 初始化客户端
const client = new EcologyClient({
  baseUrl: 'http://oa.yourcompany.com:8088',
  appId: 'b59e05ced89f43d69ed7d6bdb6c57140',
  defaultUserId: '1'
});

async function main() {
  // 发起流程待办列表查询 (底层自动完成 RSA/AES 握手鉴权与 Token 刷新)
  const todoList = await client.request({
    path: '/api/workflow/paService/getToDoWorkflowRequestList',
    method: 'POST',
    data: { pageSize: '20', pageNo: '1' }
  });

  console.log('待办流程数据:', todoList);
}

main();
```
