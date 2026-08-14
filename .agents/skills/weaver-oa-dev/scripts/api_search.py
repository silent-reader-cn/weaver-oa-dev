#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
泛微OA (E-Cology 9) 538 个后端 REST API 快速检索工具
支持按关键词（中文名、URL路径、参数名、模块名）进行精确或模糊检索
"""

import os
import sys
import json
import io
import argparse

if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SCRATCH_JSON = os.path.join(r"C:\Users\Admin\.gemini\antigravity\brain\86c241ed-45ea-453f-a153-6d579096f1df\scratch\all_apis_raw.json")

def load_apis():
    if os.path.exists(SCRATCH_JSON):
        with open(SCRATCH_JSON, 'r', encoding='utf-8') as f:
            return json.load(f)
    print("错误: 找不到 API 数据源文件")
    return []

def search_apis(keyword=None, module=None, method=None, limit=20):
    docs = load_apis()
    results = []
    
    kw = keyword.lower().strip() if keyword else None
    mod = module.lower().strip() if module else None
    meth = method.upper().strip() if method else None

    for item in docs:
        data = item['data']
        leaf = item['leaf']
        
        title = data.get('title') or leaf.get('name') or ''
        url = data.get('url', '')
        category = leaf.get('category', '')
        full_path = leaf.get('full_path', '')
        m = (data.get('method') or data.get('methodSelect') or ('POST' if 'paService' in url else 'GET')).upper()
        memo = data.get('memo', '')
        params = [p.get('name', '') for p in data.get('params', [])]

        if mod and mod not in category.lower() and mod not in full_path.lower():
            continue
        if meth and meth != m:
            continue
        if kw:
            match = (
                kw in title.lower() or
                kw in url.lower() or
                kw in memo.lower() or
                any(kw in p.lower() for p in params)
            )
            if not match:
                continue

        results.append({
            'title': title,
            'url': url,
            'method': m,
            'module': category,
            'path': full_path,
            'params_count': len(params),
            'memo': memo
        })

    print(f"\n共检索到 {len(results)} 条匹配接口 (展示前 {min(limit, len(results))} 条):\n")
    print(f"{'序号':<4} | {'模块':<8} | {'Method':<6} | {'接口名称':<30} | {'Endpoint 路径'}")
    print("-" * 100)
    for idx, r in enumerate(results[:limit], 1):
        print(f"{idx:<4} | {r['module']:<8} | {r['method']:<6} | {r['title'][:28]:<30} | {r['url']}")
    print("-" * 100)
    if len(results) > limit:
        print(f"提示: 还有 {len(results) - limit} 条结果未展示，可通过 --limit 参数增加展示数量。")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="泛微OA E9 API 快速检索工具")
    parser.add_argument("keyword", nargs="?", default=None, help="搜索关键词 (支持接口名、URL路径、参数名)")
    parser.add_argument("-m", "--module", help="指定模块筛选 (如: 流程, 人力, 考勤, 知识, 表单, 门户)")
    parser.add_argument("-X", "--method", help="指定 HTTP Method (GET, POST)")
    parser.add_argument("-n", "--limit", type=int, default=20, help="最多显示条数 (默认 20)")
    
    args = parser.parse_args()
    if not args.keyword and not args.module and not args.method:
        parser.print_help()
        print("\n示例: python api_search.py 待办")
        print("示例: python api_search.py -m 人力资源 -X POST")
        print("示例: python api_search.py /api/workflow")
    else:
        search_apis(args.keyword, args.module, args.method, args.limit)
