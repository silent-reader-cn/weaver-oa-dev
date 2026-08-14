#!/usr/bin/env node
/**
 * 泛微OA (E-Cology 9) 538 个后端 REST API 快速检索工具 (JavaScript / Node.js 版)
 * 支持按关键词（中文名、URL路径、参数名、模块名）进行精确或模糊检索
 * 运行方式:
 *   node scripts/api_search.js 待办
 *   node scripts/api_search.js -m 人力资源 -X POST
 */

const fs = require('fs');
const path = require('path');

const RAW_JSON_PATH = path.resolve('C:/Users/Admin/.gemini/antigravity/brain/86c241ed-45ea-453f-a153-6d579096f1df/scratch/all_apis_raw.json');

function loadApis() {
  if (fs.existsSync(RAW_JSON_PATH)) {
    const raw = fs.readFileSync(RAW_JSON_PATH, 'utf8');
    return JSON.parse(raw);
  }
  console.error('错误: 找不到 API 数据源文件 ' + RAW_JSON_PATH);
  return [];
}

function searchApis({ keyword = null, moduleName = null, method = null, limit = 20 }) {
  const docs = loadApis();
  const kw = keyword ? keyword.toLowerCase().trim() : null;
  const mod = moduleName ? moduleName.toLowerCase().trim() : null;
  const meth = method ? method.toUpperCase().trim() : null;

  const results = [];

  for (const item of docs) {
    const data = item.data || {};
    const leaf = item.leaf || {};

    const title = data.title || leaf.name || '';
    const url = data.url || '';
    const category = leaf.category || '';
    const fullPath = leaf.full_path || '';
    const m = (data.method || data.methodSelect || (url.includes('paService') ? 'POST' : 'GET')).toUpperCase();
    const memo = data.memo || '';
    const params = (data.params || []).map((p) => p.name || '');

    if (mod && !category.toLowerCase().includes(mod) && !fullPath.toLowerCase().includes(mod)) {
      continue;
    }
    if (meth && meth !== m) {
      continue;
    }
    if (kw) {
      const match =
        title.toLowerCase().includes(kw) ||
        url.toLowerCase().includes(kw) ||
        memo.toLowerCase().includes(kw) ||
        params.some((p) => p.toLowerCase().includes(kw));
      if (!match) {
        continue;
      }
    }

    results.push({
      title,
      url,
      method: m,
      module: category,
      path: fullPath,
      paramsCount: params.length,
      memo
    });
  }

  console.log(`\n共检索到 ${results.length} 条匹配接口 (展示前 ${Math.min(limit, results.length)} 条):\n`);
  console.log(`${'序号'.padEnd(4)} | ${'模块'.padEnd(8)} | ${'Method'.padEnd(6)} | ${'接口名称'.padEnd(30)} | Endpoint 路径`);
  console.log('-'.repeat(100));

  results.slice(0, limit).forEach((r, idx) => {
    const indexStr = String(idx + 1).padEnd(4);
    const modStr = r.module.padEnd(8);
    const methStr = r.method.padEnd(6);
    const titleStr = (r.title.length > 28 ? r.title.slice(0, 25) + '...' : r.title).padEnd(30);
    console.log(`${indexStr} | ${modStr} | ${methStr} | ${titleStr} | ${r.url}`);
  });

  console.log('-'.repeat(100));
  if (results.length > limit) {
    console.log(`提示: 还有 ${results.length - limit} 条结果未展示，可通过指定更多检索条件缩小范围。\n`);
  }
}

// 参数解析
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
    console.log('泛微OA E9 API 快速检索工具 (Node.js 版)');
    console.log('用法:');
    console.log('  node scripts/api_search.js <关键词>');
    console.log('  node scripts/api_search.js -m <模块名> [-X GET|POST]');
    console.log('\n示例:');
    console.log('  node scripts/api_search.js 待办');
    console.log('  node scripts/api_search.js -m 知识管理');
    console.log('  node scripts/api_search.js /api/hrm');
    return;
  }

  searchApis({ keyword, moduleName, method, limit });
}

main();
