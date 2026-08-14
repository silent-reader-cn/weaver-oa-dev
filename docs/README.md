# 泛微OA (E-Cology 9) 后端接口开发文档库

本目录收录了泛微 OA (E-Cology 9) 官方开放的全部 **538** 个后端 REST 接口的结构化 Markdown 离线文档库。

---

## 📑 文档导航

1. **[01_开发规范与安全认证.md](./01_开发规范与安全认证.md)**
   - 泛微 E9 开放平台架构概览
   - RSA + AES + 动态 Token 握手鉴权流程
   - 请求头标准规范（appid, token, userid, spml-token）
   - 后台白名单与权限配置
2. **[02_工作流程接口.md](./02_工作流程接口.md)** (共 45 个接口)
   - 创建流程 (`doCreateRequest`)
   - 待办/已办/抄送/退回列表与统计
   - 流程表单字段数据读写与资源获取
   - 流程操作人与流转日志
3. **[03_人力资源接口.md](./03_人力资源接口.md)** (共 225 个接口)
   - 人员花名册与详细信息维护
   - 部门与分部组织机构树
   - 岗位、职务、矩阵与权限角色
   - 离职、调动与登录历史日志
4. **[04_知识管理接口.md](./04_知识管理接口.md)** (共 60 个接口)
   - 新建/编辑/查看文档
   - 目录分类树 (SecCategory/SubCategory)
   - 附件上传与下载关联
   - 文档权限与版本管理
5. **[05_考勤管理接口.md](./05_考勤管理接口.md)** (共 107 个接口)
   - 打卡数据与实时记录
   - 假期余额计算与台账
   - 请假、加班、出差、公出、调休
   - 排班管理与考勤汇总报表
6. **[06_表单建模接口.md](./06_表单建模接口.md)** (共 19 个接口)
   - 建模卡片数据保存/提交/删除
   - 查询列表配置与过滤
   - 字段属性联动与校验
7. **[07_门户管理接口.md](./07_门户管理接口.md)** (共 76 个接口)
   - 门户元素加载与布局数据
   - 菜单与快捷入口配置
   - 数据中心元素与待办角标
8. **[08_协作与邮件接口.md](./08_协作与邮件接口.md)** (共 6 个接口)
   - 协作交流列表与板块管理
   - 邮件总数与未读邮件刷新
   - 邮件列表与监控日志
9. **[09_二次开发指南.md](./09_二次开发指南.md)**
   - 流程节点自定义 Action (`weaver.interfaces.workflow.action.Action`)
   - 表单前端 `WfForm` JavaScript 代码块联动与校验
   - 自定义 RESTful WebService 开发 (JAX-RS)
   - 数据库访问工具与事务管理 (`RecordSet` / `RecordSetTrans`)
10. **[10_API接口速查字典.md](./10_API接口速查字典.md)**
    - 全量 538 个接口按模块与路径分类的综合速查表

---

## 🛠️ JavaScript / Node.js 脚本与工具

在 `.agents/skills/weaver-oa-dev/scripts/` 目录下提供了完整的 JS 脚本：
- `ecology_token_client.js`: Node.js 版 E9 标准认证与 API 调用客户端 (零第三方依赖)
- `api_search.js`: 538 个 API 命令行快速检索工具 (Node.js)
- `examples/workflow_integration.js`: 工作流创建与待办查询脚本
- `examples/hrm_organization_sync.js`: 人力资源与组织架构同步脚本
- `examples/form_custom_codeblock.js`: 表单前端 WfForm JS 联动代码块
- `examples/doc_attachment_upload.js`: 知识文档创建脚本
