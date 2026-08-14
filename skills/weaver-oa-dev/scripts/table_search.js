#!/usr/bin/env node
/**
 * 泛微OA (Ecology) 1,700 张核心数据库表快速检索工具 (Node.js 版)
 * 支持按表名（如 workflow_requestbase）、字段名（如 requestname）、模块名或中文描述检索
 * 运行方式:
 *   node scripts/table_search.js workflow_currentoperator
 *   node scripts/table_search.js 待办
 *   node scripts/table_search.js -m 人力资源
 */

const fs = require('fs');
const path = require('path');

const DB_DICT_PATH = path.join(__dirname, 'db_dictionary.json');

function loadDict() {
  if (fs.existsSync(DB_DICT_PATH)) {
    return JSON.parse(fs.readFileSync(DB_DICT_PATH, 'utf8'));
  }
  console.error('错误: 找不到表字典索引文件 ' + DB_DICT_PATH);
  return [];
}

function searchTables({ keyword = null, moduleName = null, limit = 20, showDetail = false }) {
  const tables = loadDict();
  const kw = keyword ? keyword.toLowerCase().trim() : null;
  const mod = moduleName ? moduleName.toLowerCase().trim() : null;

  const results = [];

  for (const t of tables) {
    const tableName = t.tableName || '';
    const module = t.module || '';
    const cols = t.columns || [];

    if (mod && !module.toLowerCase().includes(mod)) {
      continue;
    }

    let matchedColumn = null;
    let isMatch = false;

    if (!kw) {
      isMatch = true;
    } else if (tableName.toLowerCase().includes(kw) || module.toLowerCase().includes(kw)) {
      isMatch = true;
    } else {
      // Search inside columns
      for (const c of cols) {
        if (
          (c.name && c.name.toLowerCase().includes(kw)) ||
          (c.cn && c.cn.toLowerCase().includes(kw)) ||
          (c.memo && c.memo.toLowerCase().includes(kw))
        ) {
          isMatch = true;
          matchedColumn = c;
          break;
        }
      }
    }

    if (isMatch) {
      results.push({ ...t, matchedColumn });
    }
  }

  console.log(`\n共检索到 ${results.length} 张匹配数据表 (展示前 ${Math.min(limit, results.length)} 个):\n`);
  console.log(`${'序号'.padEnd(4)} | ${'所属模块'.padEnd(12)} | ${'数据库表名'.padEnd(32)} | 字段数 | 字段预览 / 匹配字段`);
  console.log('-'.repeat(110));

  results.slice(0, limit).forEach((r, idx) => {
    const indexStr = String(idx + 1).padEnd(4);
    const modStr = r.module.padEnd(12);
    const tableStr = r.tableName.padEnd(32);
    const countStr = String(r.columnCount).padEnd(6);
    let preview = r.columns
      .slice(0, 3)
      .map((c) => `${c.name}(${c.cn || '-'})`)
      .join(', ');
    if (r.matchedColumn) {
      preview = `[匹配列: ${r.matchedColumn.name}(${r.matchedColumn.cn})] ` + preview;
    }
    console.log(`${indexStr} | ${modStr} | ${tableStr} | ${countStr} | ${preview}`);
  });

  console.log('-'.repeat(110));

  // If user searched for an exact single table or requested detail, print its full schema
  if (results.length === 1 || showDetail) {
    const target = results[0];
    console.log(`\n=== 数据表 [${target.tableName}] 完整字段结构 (${target.module}) ===`);
    console.log(`| 序号 | 列名 (Column) | 中文说明 | 数据类型 | 长度 | 允许空 | 备注 |`);
    console.log(`| :---: | :--- | :--- | :---: | :---: | :---: | :--- |`);
    target.columns.forEach((c, idx) => {
      console.log(
        `| ${String(idx + 1).padEnd(3)} | ${(c.name || '-').padEnd(20)} | ${(c.cn || '-').padEnd(16)} | ${(c.type || '-').padEnd(10)} | ${(c.len || '-').padEnd(6)} | ${(c.nullable || '-').padEnd(4)} | ${c.memo || '-'} |`
      );
    });
    console.log('');
  } else if (results.length > limit) {
    console.log(`提示: 还有 ${results.length - limit} 张表未展示，可通过指定具体表名查看完整字段定义。\n`);
  }
}

function main() {
  const args = process.argv.slice(2);
  let keyword = null;
  let moduleName = null;
  let limit = 20;
  let showDetail = false;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '-m' || arg === '--module') {
      moduleName = args[++i];
    } else if (arg === '-n' || arg === '--limit') {
      limit = parseInt(args[++i], 10) || 20;
    } else if (arg === '-d' || arg === '--detail') {
      showDetail = true;
    } else if (!arg.startsWith('-')) {
      keyword = arg;
    }
  }

  if (!keyword && !moduleName) {
    console.log('泛微OA 数据库表快速检索工具 (Node.js 版)');
    console.log('用法:');
    console.log('  node scripts/table_search.js <表名或中文关键词>');
    console.log('  node scripts/table_search.js -m <模块名>');
    console.log('\n示例:');
    console.log('  node scripts/table_search.js workflow_currentoperator');
    console.log('  node scripts/table_search.js 考勤');
    console.log('  node scripts/table_search.js 审批意见 -d');
    return;
  }

  searchTables({ keyword, moduleName, limit, showDetail });
}

main();
