#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
泛微OA (Ecology) 1,700 张核心数据库表快速检索工具 (Python 版)
"""

import sys
import os
import json
import argparse
import io

if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DB_DICT_PATH = os.path.join(SCRIPT_DIR, "db_dictionary.json")

def load_dict():
    if os.path.exists(DB_DICT_PATH):
        with open(DB_DICT_PATH, 'r', encoding='utf-8') as f:
            return json.load(f)
    print(f"错误: 找不到表字典索引文件 {DB_DICT_PATH}")
    return []

def search_tables(keyword=None, module_name=None, limit=20, show_detail=False):
    tables = load_dict()
    kw = keyword.lower().strip() if keyword else None
    mod = module_name.lower().strip() if module_name else None

    results = []

    for t in tables:
        tbl_name = t.get('tableName', '')
        m_name = t.get('module', '')
        cols = t.get('columns', [])

        if mod and mod not in m_name.lower():
            continue

        is_match = False
        matched_col = None

        if not kw:
            is_match = True
        elif kw in tbl_name.lower() or kw in m_name.lower():
            is_match = True
        else:
            for c in cols:
                c_name = c.get('name', '').lower()
                c_cn = c.get('cn', '').lower()
                c_memo = c.get('memo', '').lower()
                if kw in c_name or kw in c_cn or kw in c_memo:
                    is_match = True
                    matched_col = c
                    break

        if is_match:
            t_copy = dict(t)
            t_copy['matchedColumn'] = matched_col
            results.append(t_copy)

    print(f"\n共检索到 {len(results)} 张匹配数据表 (展示前 {min(limit, len(results))} 个):\n")
    print(f"{'序号':<4} | {'所属模块':<12} | {'数据库表名':<32} | 字段数 | 字段预览 / 匹配字段")
    print("-" * 110)

    for idx, r in enumerate(results[:limit], 1):
        preview = ", ".join([f"{c.get('name')}({c.get('cn', '-')})" for c in r.get('columns', [])[:3]])
        if r.get('matchedColumn'):
            mc = r['matchedColumn']
            preview = f"[匹配列: {mc.get('name')}({mc.get('cn')})] " + preview
        print(f"{idx:<4} | {r.get('module', ''):<12} | {r.get('tableName', ''):<32} | {str(r.get('columnCount', 0)):<6} | {preview}")

    print("-" * 110)

    if len(results) == 1 or show_detail:
        target = results[0]
        print(f"\n=== 数据表 [{target.get('tableName')}] 完整字段结构 ({target.get('module')}) ===")
        print("| 序号 | 列名 (Column) | 中文说明 | 数据类型 | 长度 | 允许空 | 备注 |")
        print("| :---: | :--- | :--- | :---: | :---: | :---: | :--- |")
        for idx, c in enumerate(target.get('columns', []), 1):
            print(f"| {idx:<3} | {c.get('name', '-'):<20} | {c.get('cn', '-'):<16} | {c.get('type', '-'):<10} | {str(c.get('len', '-')):<6} | {c.get('nullable', '-'):<4} | {c.get('memo', '-')} |")
        print("")
    elif len(results) > limit:
        print(f"提示: 还有 {len(results) - limit} 张表未展示，可通过指定具体表名查看完整字段定义。\n")

def main():
    parser = argparse.ArgumentParser(description="泛微OA 数据库表快速检索工具")
    parser.add_argument("keyword", nargs="?", default=None, help="搜索关键词 (表名、字段名、中文名)")
    parser.add_argument("-m", "--module", default=None, help="按模块过滤 (如: 工作流程, 人力资源)")
    parser.add_argument("-n", "--limit", type=int, default=20, help="限制展示条数 (默认20)")
    parser.add_argument("-d", "--detail", action="store_true", help="显示第一条结果的完整字段列表")

    args = parser.parse_args()

    if not args.keyword and not args.module:
        parser.print_help()
        return

    search_tables(args.keyword, args.module, args.limit, args.detail)

if __name__ == '__main__':
    main()
