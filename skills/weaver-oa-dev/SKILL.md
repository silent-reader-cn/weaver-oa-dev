---
name: weaver-oa-dev
description: >-
  泛微OA (Weaver E-Cology 9 / E9 / E8) 后端接口开发全功能指南与API手册。当需要进行泛微OA后端接口调用、E9 REST API对接、系统认证鉴权（AppID/Secret/RSA/AES/Token）、工作流程API（创建流程/流转/代办/已办）、人力资源组织架构同步（人员/部门/分部/岗位）、知识文档管理（上传/下载/创建文档）、考勤管理（打卡/请假/排班/加班/出差）、表单建模与自定义表单CRUD、门户组件开发、协作邮件、表单前端WfForm代码块开发、定时任务（CronJob/ScheduleTask）、WebService对接时使用此技能。
---

# 泛微OA (E-Cology 9) 后端接口开发 Skill

本技能收录了泛微 OA (Ecology 9) 官方开放平台全部 **538** 个后端 REST 接口及云商店官方开发者技术文档，包含权威认证鉴权规范、RSA 密钥交换算法、防串号机制、前端表单代码块（WfForm / ModeForm API）、消息中心推送以及 Node.js / JavaScript 客户端 SDK。

---

## 1. 官方标准认证鉴权全流程 (Authentication Runbook)

泛微 E9 采用 **AppID + RSA 公钥加密 + Token 动态会话 + 用户身份密文** 机制。

### 1.1 三步认证调用标准流程
1. **第一步：注册应用并获取公钥密钥 (`POST /api/ec/dev/auth/regist`)**
   - 请求参数: `appid`（许可证号码/应用标识）, `cpcode`（公司编码，可为空）
   - 返回参数: `secret`（服务端密钥）, `spk`（服务端 RSA 公钥）
   - ⚠️ **注意**：该接口全局只需调用一次，请将 `secret` 与 `spk` 保存在配置文件中，严禁频繁重复调用！
2. **第二步：申请并激活 Token (`POST /api/ec/dev/auth/applytoken`)**
   - 使用 RSA 公钥 (`spk`) 加密第一步的 `secret` 得到密文（模式: `RSA/ECB/PKCS1Padding`）。
   - 在请求头或请求体中传入: `appid`, `secret=密文`, `time=3600`。
   - 返回会话凭证 `token`。
3. **第三步：携带 Token 调用业务接口**
   - 必须在 HTTP Header 中包含：
     - `token`: 有效动态令牌
     - `appid`: 应用标识
     - `userid`: **必须使用 RSA 公钥 (`spk`) 对操作人工号/用户ID加密**
     - `skipsession`: 是否跳过 Session 拦截（白名单接口传 `1`，默认 `0`）
     - `Content-Type`: `application/json; charset=utf-8` 或 `application/x-www-form-urlencoded; charset=utf-8`

### 1.2 官方避坑红线 (Crucial Pitfalls)
- 🔴 **彻底禁用 Cookie 传递**：第三方 HTTP 请求库必须屏蔽 Cookie。若携带旧 Session Cookie，OA 会强制沿用旧会话导致传入的 `userid` 失效发生“串号”！
- 🔴 **RSA 填充模式**：必须采用 `RSA/ECB/PKCS1Padding`。
- 🔴 **集群 Redis 缓存**：集群环境下 Token 依赖 Redis，若 Token 频繁超时失效需检查 Redis 共享或切换为 DB 存储。

> 完整认证手册与错误码排查：[01_开发规范与安全认证](./references/01_auth_and_security.md)

---

## 2. 接口与技术参考手册导航

| 模块名称 | 接口数 / 类型 | 核心内容 | 参考文档 |
| :--- | :---: | :--- | :--- |
| **开放平台安全认证** | 认证指南 | 三步握手、RSA/AES 算法、Cookie 屏蔽、白名单与 CORS | [01_auth_and_security.md](./references/01_auth_and_security.md) |
| **工作流程 (Workflow)** | 45 个 API | 流程创建、流程流转、待办/已办列表、流程表单字段读写、流转日志 | [02_workflow_apis.md](./references/02_workflow_apis.md) |
| **人力资源 (HRM)** | 225 个 API | 人员增删改查、部门/分部组织树、岗位与职务、权限角色、矩阵 | [03_hrm_apis.md](./references/03_hrm_apis.md) |
| **知识管理 (Doc)** | 60 个 API | 文档新建/编辑/阅读、目录分类树、附件上传下载、权限控制 | [04_doc_knowledge_apis.md](./references/04_doc_knowledge_apis.md) |
| **考勤管理 (Attendance)**| 107 个 API | 考勤打卡数据、假期余额、请假/加班/出差/调休、排班班次 | [05_attendance_apis.md](./references/05_attendance_apis.md) |
| **表单建模 (Form Modeling)**| 19 个 API | 低代码卡片 CRUD、主子表提交、查询条件配置、字段联动 | [06_form_modeling_apis.md](./references/06_form_modeling_apis.md) |
| **门户管理 (Portal)** | 76 个 API | 门户元素加载、菜单结构、快捷入口、数据中心元素、待办角标 | [07_portal_apis.md](./references/07_portal_apis.md) |
| **协作与邮件 (Cowork/Email)**| 6 个 API | 协作交流列表、板块管理、邮件总数与未读邮件刷新、监控日志 | [08_cowork_and_email_apis.md](./references/08_cowork_and_email_apis.md) |
| **后端二次开发指南** | Java/架构 | 自定义 Action、定时调度 BaseCronJob、JAX-RS REST 服务、RecordSet | [09_custom_backend_dev.md](./references/09_custom_backend_dev.md) |
| **全量速查字典** | 538 个 API | 全量端点按路径、方法、模块快速检索字典 | [10_api_quick_index.md](./references/10_api_quick_index.md) |
| **流程表单前端 API** | WfForm API | 流程表单字段监听、动态修改属性、主子表计算、提交前拦截 | [11_wfform_frontend_api.md](./references/11_wfform_frontend_api.md) |
| **表单建模前端 API** | ModeForm API | 建模卡片与查询列表前端 JS 扩展 API | [12_modeform_frontend_api.md](./references/12_modeform_frontend_api.md) |
| **消息中心推送** | 推送/通知 | E9 系统与第三方双向推送消息、待办消息状态同步 | [13_message_push_apis.md](./references/13_message_push_apis.md) |

---

## 3. Node.js 客户端开发与使用

在 `scripts/ecology_token_client.js` 中已集成完整的原生 Node.js SDK，自动完成 RSA 加密握手与 Cookie 隔离：

```javascript
const EcologyClient = require('./scripts/ecology_token_client');

// 初始化客户端
const client = new EcologyClient({
  baseUrl: 'http://oa.yourcompany.com:8088',
  appId: 'b59e05ced89f43d69ed7d6bdb6c57140',
  defaultUserId: '1' // 系统管理员或指定员工工号
});

async function main() {
  // 查询待办列表 (自动完成 Token 申请与 RSA userid 密文加密)
  const todoList = await client.request({
    path: '/api/workflow/paService/getToDoWorkflowRequestList',
    method: 'POST',
    data: { pageSize: '20', pageNo: '1' }
  });

  console.log('待办数据:', todoList);
}

main();
```
