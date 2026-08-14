# 泛微OA (E-Cology 9) 后端接口开发知识库与 Skill

本项目已将泛微官方开放平台（`https://e-cloudstore.com/ec/api/applist/index.html#/`）全量 **538** 个后端 REST 接口下载并清洗，去除了前端展示与内部冗余字段，转换为规范的 Markdown 文档体系，并封装为标准的 **Antigravity 开发 Skill** 与 **JavaScript / Node.js** 开发工具集。

---

## 🌟 核心特性

- **完整覆盖**: 收录 8 大业务模块（工作流、人力资源、知识管理、考勤、表单建模、门户、协作、邮件）共 **538** 个官方后端 API。
- **纯净 Markdown**: 移除内部冗余字段（无用前端 DOM ID、空备注、冗余嵌套），规范化为标准的请求方法、路径、参数表、响应字段表及 JSON 示例。
- **开箱即用 Skill**: 符合 Antigravity Skill 标准规范，位于 `.agents/skills/weaver-oa-dev/`，支持 AI 辅助快速检索与精准代码生成。
- **实战 JS / Node.js 工具**: 提供完整的 Node.js E9 开放平台标准鉴权 SDK（基于 Node.js 原生 `crypto` 库实现 RSA 公钥加密协商与 AES 密钥绑定，零第三方依赖）。
- **表单 JS 代码块**: 包含泛微 E9 流程表单 `WfForm` JavaScript 标准代码块模版（字段监听联动、主子表实时计算、提交前拦截校验）。

---

## 📁 目录结构

```text
weaveroa/
├── .agents/
│   └── skills/
│       └── weaver-oa-dev/                   # Antigravity 专属 Skill
│           ├── SKILL.md                     # Skill 主入口与执行规范
│           ├── references/                  # 8 大业务模块接口文档及速查字典
│           │   ├── 01_auth_and_security.md  # 认证鉴权与安全规范 (RSA+AES+Token)
│           │   ├── 02_workflow_apis.md      # 工作流程 API (45个)
│           │   ├── 03_hrm_apis.md           # 人力资源与组织架构 API (225个)
│           │   ├── 04_doc_knowledge_apis.md # 知识文档管理 API (60个)
│           │   ├── 05_attendance_apis.md    # 考勤管理 API (107个)
│           │   ├── 06_form_modeling_apis.md # 表单建模 API (19个)
│           │   ├── 07_portal_apis.md        # 门户管理 API (76个)
│           │   ├── 08_cowork_and_email_apis.md # 协作与邮件 API (6个)
│           │   ├── 09_custom_backend_dev.md # 后端二次开发实战指南
│           │   └── 10_api_quick_index.md    # 538 个 API 端点速查字典
│           ├── scripts/                     # JavaScript / Node.js 核心脚本
│           │   ├── ecology_token_client.js  # Node.js 版 E9 鉴权与调用 SDK
│           │   ├── api_search.js            # Node.js 版 API 命令行快速检索工具
│           │   ├── ecology_token_client.py  # Python 版 E9 鉴权与调用 SDK
│           │   └── api_search.py            # Python 版 API 检索工具
│           └── examples/                    # JavaScript 二次开发实战示例
│               ├── workflow_integration.js  # 工作流创建与待办查询 (Node.js)
│               ├── hrm_organization_sync.js # 人力资源与组织架构同步 (Node.js)
│               ├── form_custom_codeblock.js # 表单前端 WfForm JS 联动与校验代码块
│               └── doc_attachment_upload.js # 知识文档创建与富文本处理 (Node.js)
├── docs/                                    # 离线 Markdown 文档库 (供阅读)
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
│   └── 10_API接口速查字典.md
└── README.md
```

---

## 🚀 JavaScript / Node.js 快速开始

### 1. 使用 Node.js 检索 API
```bash
# 检索工作流待办相关接口
node .agents/skills/weaver-oa-dev/scripts/api_search.js 待办

# 检索人力资源模块的 POST 接口
node .agents/skills/weaver-oa-dev/scripts/api_search.js -m 人力资源 -X POST

# 检索特定路径
node .agents/skills/weaver-oa-dev/scripts/api_search.js /api/doc
```

### 2. 使用 Node.js 客户端调用 E9 接口
```javascript
const EcologyClient = require('./.agents/skills/weaver-oa-dev/scripts/ecology_token_client');

// 1. 初始化客户端 (传入 OA 地址与后台注册的 AppID)
const client = new EcologyClient({
  baseUrl: 'http://oa.yourcompany.com:8088',
  appId: 'ERP_INTEGRATION_01',
  defaultUserId: '1'
});

async function main() {
  // 2. 发起流程待办列表查询 (底层自动完成 RSA/AES 握手鉴权与 Token 刷新)
  const todoList = await client.request({
    path: '/api/workflow/paService/getToDoWorkflowRequestList',
    method: 'POST',
    data: { pageSize: '20', pageNo: '1' }
  });

  console.log('待办流程数据:', todoList);
}

main();
```

---

## 📊 模块统计表

| 业务模块 | 接口数量 | 包含核心功能 |
| :--- | :---: | :--- |
| **工作流程** | 45 | 流程创建、流程流转、待办/已办列表、流程表单字段读写、抄送、退回、签字意见 |
| **人力资源** | 225 | 人员增删改查、部门/分部树、岗位/职务、权限角色、矩阵数据、离职调动日志 |
| **知识管理** | 60 | 文档新建/编辑/阅读、目录分类树、附件上传下载、文档版本、查看权限 |
| **考勤管理** | 107 | 考勤打卡数据、假期余额、请假/加班/出差/调休单据、排班班次、考勤汇总报表 |
| **表单建模** | 19 | 低代码卡片 CRUD、主子表提交、查询条件配置、字段联动规则、初始化列宽 |
| **门户管理** | 76 | 门户元素加载、菜单结构、快捷入口、数据中心元素、待办角标、多门户配置 |
| **协作与邮件** | 6 | 协作交流列表与板块、邮件总数与未读邮件统计、邮件列表与监控日志 |
| **总计** | **538** | 全量官方开放后端 REST 接口 |
