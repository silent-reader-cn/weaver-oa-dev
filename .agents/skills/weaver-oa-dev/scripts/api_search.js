#!/usr/bin/env node
/**
 * 泛微OA (Ecology 9) 全量 538 个后端 REST API 快速检索工具 (Node.js 版)
 * 纯原生 Node.js 实现，零第三方依赖，绿色免安装
 *
 * 运行方式:
 *   node scripts/api_search.js 待办
 *   node scripts/api_search.js -m 工作流程
 *   node scripts/api_search.js -m 人力资源 -X POST
 */

const fs = require('fs');
const path = require('path');

// 统一采用相对当前脚本的本地路径，杜绝任何外部或绝对路径依赖
const RAW_JSON_PATH = path.join(__dirname, 'apis_dictionary.json');

function loadApis() {
  if (fs.existsSync(RAW_JSON_PATH)) {
    return JSON.parse(fs.readFileSync(RAW_JSON_PATH, 'utf8'));
  }
  console.error('错误: 找不到 API 索引文件 ' + RAW_JSON_PATH);
  return [];
}

function searchApis({ keyword = null, moduleName = null, method = null, limit = 20 }) {
  const apis = loadApis();
  const kw = keyword ? keyword.toLowerCase().trim() : null;
  const mod = moduleName ? moduleName.toLowerCase().trim() : null;
  const meth = method ? method.toUpperCase().trim() : null;

  const results = [];

  for (const api of apis) {
    const apiModule = api.module || '';
    const apiName = api.apiName || '';
    const apiPath = api.path || '';
    const apiMethod = api.method || '';

    if (mod && !apiModule.toLowerCase().includes(mod)) {
      continue;
    }

    if (meth && apiMethod.toUpperCase() !== meth) {
      continue;
    }

    if (kw) {
      const matchName = apiName.toLowerCase().includes(kw);
      const matchPath = apiPath.toLowerCase().includes(kw);
      const matchModule = apiModule.toLowerCase().includes(kw);
      if (!matchName && !matchPath && !matchModule) {
        continue;
      }
    }

    results.push(api);
  }

  console.log(`\n共检索到 ${results.length} 个匹配接口 (展示前 ${Math.min(limit, results.length)} 条):\n`);
  console.log(`${'序号'.padEnd(4)} | ${'模块'.padEnd(10)} | ${'方法'.padEnd(6)} | ${'接口路径'.padEnd(52)} | 接口名称`);
  console.log('-'.repeat(105));

  results.slice(0, limit).forEach((r, idx) => {
    const indexStr = String(idx + 1).padEnd(4);
    const modStr = r.module.padEnd(10);
    const methStr = r.method.padEnd(6);
    const pathStr = r.path.padEnd(52);
    console.log(`${indexStr} | ${modStr} | ${methStr} | ${pathStr} | ${r.apiName}`);
  });

  console.log('-'.repeat(105));
  if (results.length > limit) {
    console.log(`提示: 还有 ${results.length - limit} 条结果未展示，可通过缩小检索范围查看。\n`);
  } else {
    console.log('');
  }
}

function main() {
  const args = process.argv.slice(2);
  let keyword = null;
  let moduleName = null;
  let method = null;
  let limit = 20;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '-m' || arg === '--module') {
      moduleName = args[++i];
    } else if (arg === '-X' || arg === '--method') {
      method = args[++i];
    } else if (arg === '-n' || arg === '--limit') {
      limit = parseInt(args[++i], 10) || 20;
    } else if (!arg.startsWith('-')) {
      keyword = arg;
    }
  }

  if (!keyword && !moduleName && !method) {
    console.log('泛微OA 后端 REST API 快速检索工具 (Node.js 版)');
    console.log('用法:');
    console.log('  node scripts/api_search.js <关键词>');
    console.log('  node scripts/api_search.js -m <模块名> [-X <HTTP方法>]');
    console.log('\n示例:');
    console.log('  node scripts/api_search.js 待办');
    console.log('  node scripts/api_search.js -m 工作流程');
    console.log('  node scripts/api_search.js -m 人力资源 -X POST -n 10');
    return;
  }

  searchApis({ keyword, moduleName, method, limit });
}

main();
