---
name: weaver-oa-dev
description: >-
  泛微OA (Weaver E-Cology 9 / E9 / E8) 后端接口开发全功能指南与API手册。当需要进行泛微OA后端接口调用、E9 REST API对接、系统认证鉴权（AppID/Secret/RSA/AES/Token）、工作流程API（创建流程/流转/代办/已办）、人力资源组织架构同步（人员/部门/分部/岗位）、知识文档管理（上传/下载/创建文档）、考勤管理（打卡/请假/排班/加班/出差）、表单建模与自定义表单CRUD、门户组件开发、协作邮件、表单前端WfForm代码块开发、定时任务（CronJob/ScheduleTask）、WebService对接时使用此技能。
---

# 泛微OA (E-Cology 9) 后端接口开发 Skill

本技能收录了泛微 OA (Ecology 9) 官方开放的全部 **538** 个后端 REST 接口，并涵盖 E9 标准安全认证体系、数据加解密算法、JavaScript / Node.js 客户端 SDK、表单代码块（WfForm API）、常用数据库系统表结构及最佳实践。

---

## 1. 核心架构与认证流程 (Authentication Runbook)

泛微 E9 开放平台采用 **RSA 非对称加密 + AES 对称加密 + 动态 Token** 机制。每次与 OA 通信需遵循以下步骤：

1. **申请临时 Token 与服务端公钥**:
   - `POST /api/ec/dev/auth/applytoken` (参数: `appid`)
   - 响应取得 `token` (临时) 和 `spk` (服务端 RSA 公钥)。
2. **协商 AES 密钥并激活 Token**:
   - 本地生成 16 字节随机字符串作为 AES 密钥 `secret`。
   - 使用 RSA 公钥 (`spk`) 加密 `secret` 得到 `secretEncrypted` (模式: `RSA/ECB/PKCS1Padding`)。
   - `POST /api/ec/dev/auth/token` (参数: `appid`, `token`, `secret=secretEncrypted`)。
3. **携带凭据调用业务接口**:
   - 所有业务请求在 HTTP Header 中包含：
     - `appid`: 客户端注册的 AppID
     - `token`: 激活后的 Session Token
     - `userid`: 操作人用户 ID（如 `1` 代表管理员）
     - `Content-Type`: `application/json;charset=UTF-8` 或 `application/x-www-form-urlencoded`

> 详细认证算法、错误码及参数配置请查阅：[01_开发规范与安全认证](./references/01_auth_and_security.md)

---

## 2. 业务模块接口索引 (538 APIs)

所有接口文档已完成清洗，去除了内部冗余字段，标准化为 Markdown 格式：

| 业务模块 | 接口数 | 核心能力 | 详细文档 |
| :--- | :---: | :--- | :--- |
| **工作流程 (Workflow)** | 45 | 流程创建、流程流转、待办/已办列表、流程表单字段读写、抄送、签字意见 | [02_workflow_apis.md](./references/02_workflow_apis.md) |
| **人力资源 (HRM)** | 225 | 人员花名册维护、分部与部门组织架构、岗位与职务、权限角色、矩阵、离职调动 | [03_hrm_apis.md](./references/03_hrm_apis.md) |
| **知识管理 (Doc)** | 60 | 文档创建/编辑/读取、目录分类树、附件上传与下载、文档权限、文档版本 | [04_doc_knowledge_apis.md](./references/04_doc_knowledge_apis.md) |
| **考勤管理 (Attendance)** | 107 | 打卡记录、考勤报表、假期余额计算、请假/加班/出差/调休、排班班次 | [05_attendance_apis.md](./references/05_attendance_apis.md) |
| **表单建模 (Form Modeling)** | 19 | 低代码卡片数据保存/提交/删除、查询配置、字段联动、主子表数据管理 | [06_form_modeling_apis.md](./references/06_form_modeling_apis.md) |
| **门户管理 (Portal)** | 76 | 门户元素加载、菜单结构、快捷入口、数据中心元素、待办角标、多门户配置 | [07_portal_apis.md](./references/07_portal_apis.md) |
| **协作与邮件 (Cowork & Email)** | 6 | 协作交流列表、协作板块、邮件总数与未读统计、邮件列表及监控日志 | [08_cowork_and_email_apis.md](./references/08_cowork_and_email_apis.md) |
| **全量速查字典** | **538** | 538 个接口按路径、方法、模块的全量速查表 | [10_api_quick_index.md](./references/10_api_quick_index.md) |

---

## 3. 常用开发场景与执行指南

### 3.1 场景一：调用流程接口创建并流转流程
- **创建流程草稿/提交**: `POST /api/workflow/paService/doCreateRequest`
- **获取待办列表**: `POST /api/workflow/paService/getToDoWorkflowRequestList`
- **获取表单数据与资源**: `POST /api/workflow/paService/getRequestResources`
- **获取流转操作人**: `POST /api/workflow/paService/getRequestOperatorInfo`
- **Node.js 实战代码**: [workflow_integration.js](./examples/workflow_integration.js)

### 3.2 场景二：第三方组织架构与人员同步
- **部门管理**:
  - 查询部门: `/api/hrm/department/getDepartmentList`
  - 组织机构树: `/api/hrm/org/tree`
- **人员花名册**:
  - 人员列表: `/api/hrm/res/list`
  - 人员详情: `/api/hrm/resource/getResourceInfo`
- **Node.js 实战代码**: [hrm_organization_sync.js](./examples/hrm_organization_sync.js)

### 3.3 场景三：知识文档与富文本处理
- **创建文档**: `/api/doc/save/accForDoc`
- **获取文档富文本内容**: `/api/doc/detail/htmlContent`
- **文档列表**: `/api/doc/out/more/list`
- **Node.js 实战代码**: [doc_attachment_upload.js](./examples/doc_attachment_upload.js)

### 3.4 场景四：流程表单前端 JavaScript 开发 (`WfForm` API)
- 泛微 E9 流程表单代码块标准开发，支持字段联动、主子表动态计算、提交前拦截校验：
- **代码模板**: [form_custom_codeblock.js](./examples/form_custom_codeblock.js)

---

## 4. 开发工具与 JavaScript 脚本

| 工具文件 | 说明 | 运行方式 |
| :--- | :--- | :--- |
| [ecology_token_client.js](./scripts/ecology_token_client.js) | Node.js 版 E9 完整鉴权与 API 调用 SDK (零第三方依赖) | `node scripts/ecology_token_client.js` |
| [api_search.js](./scripts/api_search.js) | 538 个 API 命令行快速检索工具 (Node.js) | `node scripts/api_search.js [关键词] -m [模块]` |
| [ecology_token_client.py](./scripts/ecology_token_client.py) | Python 版 E9 鉴权与 API 调用 SDK | `python scripts/ecology_token_client.py` |
| [api_search.py](./scripts/api_search.py) | Python 版 API 命令行快速检索工具 | `python scripts/api_search.py [关键词]` |

---

## 5. 核心数据库表速查

- **人员表**: `HrmResource` (字段: `id`, `workcode`, `lastname`, `departmentid`, `subcompanyid1`, `mobile`, `status`)
- **部门表**: `HrmDepartment` (字段: `id`, `departmentname`, `departmentcode`, `supdepid`, `subcompanyid1`)
- **分部表**: `HrmSubCompany` (字段: `id`, `subcompanyname`, `subcompanycode`, `supsubcomid`)
- **流程主表**: `workflow_requestbase` (字段: `requestid`, `workflowid`, `requestname`, `status`, `creater`)
- **待办表**: `workflow_currentoperator` (字段: `requestid`, `userid`, `isremark`, `isprocessed`)
- **文档表**: `DocDetail` (字段: `id`, `docsubject`, `seccategory`, `doccreaterid`)
