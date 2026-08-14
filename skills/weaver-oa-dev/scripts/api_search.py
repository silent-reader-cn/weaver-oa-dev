#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
泛微OA (Ecology 9) 后端 REST API 快速检索工具 (Python 版)
"""

import sys
import os
import json
import argparse
import io

# 强制 UTF-8 输出
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
API_DICT_PATH = os.path.join(SCRIPT_DIR, "apis_dictionary.json")

def load_apis():
    if os.path.exists(API_DICT_PATH):
        with open(API_DICT_PATH, 'r', encoding='utf-8') as f:
            return json.load(f)
    print(f"错误: 找不到 API 数据文件 {API_DICT_PATH}")
    return []

def search_apis(keyword=None, module=None, method=None, limit=20):
    apis = load_apis()
    results = []
    
    kw = keyword.lower() if keyword else None
    mod = module.lower() if module else None
    meth = method.upper() if method else None

    for api in apis:
        api_mod = api.get('module', '')
        api_name = api.get('apiName', '')
        api_path = api.get('path', '')
        api_meth = api.get('method', '')

        if mod and mod not in api_mod.lower():
            continue
        if meth and api_meth.upper() != meth:
            continue
        if kw:
            if kw not in api_name.lower() and kw not in api_path.lower() and kw not in api_mod.lower():
                continue
        results.append(api)

    print(f"\n共检索到 {len(results)} 个匹配接口 (展示前 {min(limit, len(results))} 条):\n")
    print(f"{'序号':<4} | {'模块':<10} | {'方法':<6} | {'接口路径':<52} | 接口名称")
    print("-" * 105)

    for idx, r in enumerate(results[:limit], 1):
        print(f"{idx:<4} | {r.get('module', ''):<10} | {r.get('method', ''):<6} | {r.get('path', ''):<52} | {r.get('apiName', '')}")

    print("-" * 105)
    if len(results) > limit:
        print(f"提示: 还有 {len(results) - limit} 条结果未展示，可通过缩小检索范围查看。\n")
    else:
        print("")

def main():
    parser = argparse.ArgumentParser(description="泛微OA REST API 快速检索工具")
    parser.add_argument("keyword", nargs="?", default=None, help="搜索关键词 (支持接口名、路径、模块)")
    parser.add_argument("-m", "--module", default=None, help="按模块过滤 (如: 工作流程, 人力资源, 知识管理)")
    parser.add_argument("-X", "--method", default=None, help="按 HTTP 方法过滤 (GET, POST, PUT, DELETE)")
    parser.add_argument("-n", "--limit", type=int, default=20, help="限制显示条数 (默认20)")

    args = parser.parse_args()

    if not args.keyword and not args.module and not args.method:
        parser.print_help()
        return

    search_apis(args.keyword, args.module, args.method, args.limit)

if __name__ == '__main__':
    main()
