# 泛微OA 工作流程 (Workflow) 后端接口文档

> **模块简介**：包含流程创建、待办/已办查询、流程流转、流程表单数据读写、抄送、签字意见等全套工作流API。
> **接口数量**：共收录 `45` 个后端 REST 接口。

## 目录导航

1. [流程实例：删除流程（对外） (`POST` `/api/workflow/paService/deleteRequest`)](#1-流程实例：删除流程（对外）)
2. [流程实例：强制归档（对外） (`POST` `/api/workflow/paService/doForceOver`)](#2-流程实例：强制归档（对外）)
3. [流程实例：强制收回（对外） (`POST` `/api/workflow/paService/doForceDrawBack`)](#3-流程实例：强制收回（对外）)
4. [流程实例：意见保存(对外) (`POST` `/api/workflow/paService/saveRequestLog`)](#4-流程实例：意见保存对外)
5. [流程实例：提交(对外) (`POST` `/api/workflow/paService/submitRequest`)](#5-流程实例：提交对外)
6. [流程实例：新建(对外) (`POST` `/api/workflow/paService/doCreateRequest`)](#6-流程实例：新建对外)
7. [流程实例：流程干预（对外） (`POST` `/api/workflow/paService/doIntervenor`)](#7-流程实例：流程干预（对外）)
8. [流程实例：流程撤回（对外） (`POST` `/api/workflow/paService/withdrawRequest`)](#8-流程实例：流程撤回（对外）)
9. [流程实例：获取流程信息（对外） (`GET` `/api/workflow/paService/getWorkflowRequest`)](#9-流程实例：获取流程信息（对外）)
10. [流程实例：获取流程图链接(对外) (`GET` `/api/workflow/paService/getRequestFlowChart`)](#10-流程实例：获取流程图链接对外)
11. [流程实例：获取流程意见（对外） (`GET` `/api/workflow/paService/getRequestLog`)](#11-流程实例：获取流程意见（对外）)
12. [流程实例：获取流程流转数据（对外） (`GET` `/api/workflow/paService/getRequestOperatorInfo`)](#12-流程实例：获取流程流转数据（对外）)
13. [流程实例：获取流程状态数据（对外） (`GET` `/api/workflow/paService/getRequestStatus`)](#13-流程实例：获取流程状态数据（对外）)
14. [流程实例：获取流程相关资源(对外) (`GET` `/api/workflow/paService/getRequestResources`)](#14-流程实例：获取流程相关资源对外)
15. [流程实例：转发、意见征询、转办(对外) (`POST` `/api/workflow/paService/forwardRequest`)](#15-流程实例：转发意见征询转办对外)
16. [流程实例：退回(对外) (`POST` `/api/workflow/paService/rejectRequest`)](#16-流程实例：退回对外)
17. [流程数据：办结流程列表 (对外) (`POST` `/api/workflow/paService/getProcessedWorkflowRequestList`)](#17-流程数据：办结流程列表-对外)
18. [流程数据：办结流程数量 (对外) (`POST` `/api/workflow/paService/getProcessedWorkflowRequestCount`)](#18-流程数据：办结流程数量-对外)
19. [流程数据：可创建流程类型数量 (对外) (`POST` `/api/workflow/paService/getCreateWorkflowTypeCount`)](#19-流程数据：可创建流程类型数量-对外)
20. [流程数据：可创建的流程列表 (对外) (`POST` `/api/workflow/paService/getCreateWorkflowList`)](#20-流程数据：可创建的流程列表-对外)
21. [流程数据：可创建的流程数量 (对外) (`POST` `/api/workflow/paService/getCreateWorkflowCount`)](#21-流程数据：可创建的流程数量-对外)
22. [流程数据：可创建的流程类型列表 (对外) (`POST` `/api/workflow/paService/getCreateWorkflowTypeList`)](#22-流程数据：可创建的流程类型列表-对外)
23. [流程数据：已办流程列表(不包含异构系统数据) (对外) (`POST` `/api/workflow/paService/getHandledWorkflowRequestList`)](#23-流程数据：已办流程列表不包含异构系统数据-对外)
24. [流程数据：已办流程列表(可选择是否包含异构系统数据) (对外) (`POST` `/api/workflow/paService/getHandledWorkflowRequestList4Ofs`)](#24-流程数据：已办流程列表可选择是否包含异构系统数据-对外)
25. [流程数据：已办流程数量(不包含异构系统数据)  (对外) (`POST` `/api/workflow/paService/getHandledWorkflowRequestCount`)](#25-流程数据：已办流程数量不包含异构系统数据--对外)
26. [流程数据：已办流程数量(可选择是否包含异构系统数据) (对外) (`POST` `/api/workflow/paService/getHandledWorkflowRequestCount4Ofs`)](#26-流程数据：已办流程数量可选择是否包含异构系统数据-对外)
27. [流程数据：待办 中抄送流程数量 (对外) (`POST` `/api/workflow/paService/getCCWorkflowRequestCount`)](#27-流程数据：待办-中抄送流程数量-对外)
28. [流程数据：待办中抄送流程列表 (对外) (`POST` `/api/workflow/paService/getCCWorkflowRequestList`)](#28-流程数据：待办中抄送流程列表-对外)
29. [流程数据：待办中退回流程列表 (对外) (`POST` `/api/workflow/paService/getBeRejectWorkflowRequestList`)](#29-流程数据：待办中退回流程列表-对外)
30. [流程数据：待办中退回流程数量 (对外) (`POST` `/api/workflow/paService/getBeRejectWorkflowRequestCount`)](#30-流程数据：待办中退回流程数量-对外)
31. [流程数据：待办列表数量 (对外) (`POST` `/api/workflow/paService/getToDoWorkflowRequestCount`)](#31-流程数据：待办列表数量-对外)
32. [流程数据：待办流程列表 (对外) (`POST` `/api/workflow/paService/getToDoWorkflowRequestList`)](#32-流程数据：待办流程列表-对外)
33. [流程数据：待处理流程列表 (对外) (`POST` `/api/workflow/paService/getDoingWorkflowRequestList`)](#33-流程数据：待处理流程列表-对外)
34. [流程数据：待处理流程数量 (对外) (`POST` `/api/workflow/paService/getDoingWorkflowRequestCount`)](#34-流程数据：待处理流程数量-对外)
35. [流程数据：待阅流程列表 (对外) (`POST` `/api/workflow/paService/getToBeReadWorkflowRequestList`)](#35-流程数据：待阅流程列表-对外)
36. [流程数据：待阅流程数量 (对外) (`POST` `/api/workflow/paService/getToBeReadWorkflowRequestCount`)](#36-流程数据：待阅流程数量-对外)
37. [流程数据：所发起流程列表 (对外) (`POST` `/api/workflow/paService/getMyWorkflowRequestList`)](#37-流程数据：所发起流程列表-对外)
38. [流程数据：所发起流程数量 (对外) (`POST` `/api/workflow/paService/getMyWorkflowRequestCount`)](#38-流程数据：所发起流程数量-对外)
39. [流程数据：所有流程列表 (对外) (`POST` `/api/workflow/paService/getAllWorkflowRequestList`)](#39-流程数据：所有流程列表-对外)
40. [流程数据：所有流程数量 (对外) (`POST` `/api/workflow/paService/getAllWorkflowRequestCount`)](#40-流程数据：所有流程数量-对外)
41. [流程数据：根据 tabids 来获取流程列表 (对外) (`POST` `/api/workflow/paService/getToDoRequestList`)](#41-流程数据：根据-tabids-来获取流程列表-对外)
42. [流程数据：根据tabids来获取流程数量 (对外) (`POST` `/api/workflow/paService/getToDoRequestCount`)](#42-流程数据：根据tabids来获取流程数量-对外)
43. [流程数据：流程签字意见 (对外) (`POST` `/api/workflow/paService/getWorkflowRequestLogs`)](#43-流程数据：流程签字意见-对外)
44. [流程数据：转发流程列表(只统计还在待办的) (对外) (`POST` `/api/workflow/paService/getForwardWorkflowRequestList`)](#44-流程数据：转发流程列表只统计还在待办的-对外)
45. [流程数据：转发流程数量(只统计还在待办的) (对外) (`POST` `/api/workflow/paService/getForwardWorkflowRequestCount`)](#45-流程数据：转发流程数量只统计还在待办的-对外)

---

## 接口详细说明

### 1. 流程实例：删除流程（对外）

> **补充说明**：流程删除

- **接口路径 (Endpoint)**: `/api/workflow/paService/deleteRequest`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：删除流程（对外）`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `otherParams` | `String` | 否 | {"ismonitor":"1"} | 如果以监控权限删除流程则需要传该参数，否则以流程权限判断 |
| `requestId` | `String` | **是** | 要删除的流程请求ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "errMsg": {}
}
```

---

### 2. 流程实例：强制归档（对外）

> **功能说明**：如果以监控权限强制归档流程，otherParams 需要传 {"ismonitor":"1"}

- **接口路径 (Endpoint)**: `/api/workflow/paService/doForceOver`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：强制归档（对外）`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `otherParams` | `String` | 否 | {"ismonitor":"1"} |  |
| `requestId` | `String` | **是** | 请求ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "errMsg": {}
}
```

---

### 3. 流程实例：强制收回（对外）

- **接口路径 (Endpoint)**: `/api/workflow/paService/doForceDrawBack`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：强制收回（对外）`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `otherParams` | `Json` | 否 | 其他参数，{"ismonitor":"1"} 用监控权限收回，默认以操作者权限 |  |
| `requestId` | `Int` | **是** | 请求ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "errMsg": {}
}
```

---

### 4. 流程实例：意见保存(对外)

> **补充说明**：流程当前操作人可以保存意见

- **接口路径 (Endpoint)**: `/api/workflow/paService/saveRequestLog`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：意见保存(对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `otherParams` | `String` | 否 | 其他扩展参数，比如意见相关流程、相关文档、附件等 |  |
| `remark` | `String` | **是** | 意见内容 |  |
| `requestId` | `String` | **是** | 需要保存意见的流程请求ID |  |
| `userId` | `String` | **是** | 操作人id | 该参数无效，取当前的登录人作为接口的调用者 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "errMsg": {}
}
```

---

### 5. 流程实例：提交(对外)

> **功能说明**：如果主表、明细表数据不传，就不会保存数据，只是做流程提交

> **补充说明**：restful流程提交接口

- **接口路径 (Endpoint)**: `/api/workflow/paService/submitRequest`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：提交(对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `detailData` | `Json` | 否 | 明细表数据，特殊参数说明："deleteAll":"1"(删除该流程原有明细)， "deleteKeys":"12,13"（删除该流程明细id=12，13d的明细行） | [     {         "tableDBName": "formtable_main_1356_dt1",           "deleteAl... |
| `mainData` | `String` | 否 | 主表数据，例子请参考新建流程接口说明 |  |
| `otherParams` | `Json` | 否 | 其他参数，比如src （动作类型 save表示只保存 ，submit 为提交 ，默认为提交）； judgeFormMustInput(验证表单字段必填，1为验证，默认不验证)； | {"src":"save"} |
| `remark` | `String` | 否 | 签字意见，默认意见若未设置则为空 |  |
| `requestId` | `Int` | **是** | 待提交的流程请求ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "errMsg": {}
}
```

---

### 6. 流程实例：新建(对外)

> **功能说明**：1、如果新建流程参数不符合规则、比如mainData 格式错误多个“}、]”则会提示参数错误，一般会提示workflowId为0
2、必填字段不允许为空
3、参数workflowId对应的流程要有该流程创建权限
4、主表、明细表中如果参数不正确（和路径表单字段 字段名称不一致，参数中多了都不允许正常新建流程，并且会提示异常参数）
5、附件上传说明，字段值格式如下：
      格式为 [{"fieldName":"字段数据库名称","fieldValue":字段值}]
      例如：附件上传字段的值为 fieldValue:[{"filePath":"上传的附件地址或者base64","fileName":"附件名称(包含附件类型)"}]
      除了附件上传，其余字段类型的字段值都为字段内容
6、otherParams参数为map，扩展参数暂时支持如下参数：
      isnextflow ：新建流程是否默认提交到第二节点，可选值为[0 ：不流转 1：流转 (默认)]
      delReqFlowFaild：新建流程失败是否默认删除流程，可选值为[0 ：不删除 1：删除 (默认)]
      requestSecLevel: "流程密级， 开启密级后生效， 默认公开",
      requestSecValidity:”保密期限，流程密级为秘密或机密时，通过改参数上传保密期限，不上传时取分级保护出的保密期限“
      isVerifyPer："是否验证用户创建流程权限，可选值为[0 ：不验证 1：验证 (默认)]"

> **补充说明**：restful新建流程接口，如果流程新建失败，请关注注意事项说明

- **接口路径 (Endpoint)**: `/api/workflow/paService/doCreateRequest`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：新建(对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `detailData` | `Json` | 否 | 明细表数据，例子请看注意事项 | [     {         "tableDBName": "formtable_main_1356_dt1",          "workflowR... |
| `mainData` | `Json` | **是** | 主表数据，例子请看注意事项 | [     {         "fieldName": "dhwb",          "fieldValue": {             "va... |
| `otherParams` | `Json` | 否 | 其他参数，比如messageType,isnextflow,requestSecLevel，delReqFlowFaild |  |
| `remark` | `String` | 否 | 签字意见，默认值流程默认意见若未设置则为空 |  |
| `requestLevel` | `String` | 否 | 紧急程度 |  |
| `requestName` | `String` | **是** | 流程标题 |  |
| `workflowId` | `Int` | **是** | 流程Id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `data` | `Json` | 接口状态为SUCCESS,则data中包含生成的requestid |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "data": {
    "requestid": 2966060
  },
  "errMsg": {}
}
```

---

### 7. 流程实例：流程干预（对外）

> **补充说明**：干预流程

- **接口路径 (Endpoint)**: `/api/workflow/paService/doIntervenor`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：流程干预（对外）`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `enableIntervenor` | `Bool` | 否 | 干预是否执行节点前附加操作 |  |
| `Intervenorid` | `String` | **是** | 干预节点接收人，多个人以","号隔开 |  |
| `remark` | `String` | 否 | 操作意见 |  |
| `requestId` | `Int` | **是** | 要干预的流程请求Id |  |
| `SignType` | `Int` | 否 | 会签类型 0 ：非会签 1：会签 2：依次逐个处理 |  |
| `submitNodeId` | `Int` | **是** | 目标节点ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "errMsg": {}
}
```

---

### 8. 流程实例：流程撤回（对外）

- **接口路径 (Endpoint)**: `/api/workflow/paService/withdrawRequest`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：流程撤回（对外）`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `isremind` | `String` | 否 | 是否提醒 0：不提醒 1：提醒 |  |
| `remark` | `String` | 否 | 撤回流程是提交的意见（非必填） |  |
| `requestId` | `String` | 否 | 请求id |  |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "errMsg": {}
}
```

---

### 9. 流程实例：获取流程信息（对外）

- **接口路径 (Endpoint)**: `/api/workflow/paService/getWorkflowRequest`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：获取流程信息（对外）`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `requestId` | `String` | **是** | 请求ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `currentNodeName` | `String` | 当前节点 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |
| `status` | `String` | 流程状态 |
| `workflowBaseInfo` | `Json` | 流程信息 |
| `workflowDetailTableInfos` | `Json` | 流程明细表数据 |
| `workflowMainTableInfo` | `Json` | 流程主表数据 |
| `workflowRequestLogs` | `Json` | 流程意见 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "data": {
    "canEdit": true,
    "canView": true,
    "createTime": "2019-12-31 14:51:13",
    "creatorId": "2978",
    "creatorName": "xf01",
    "currentNodeId": "3976",
    "currentNodeName": "审批3",
    "forwardButtonName": "转发",
    "lastOperateTime": "2019-12-31 14:51:13",
    "lastOperatorName": "",
    "messageType": "0",
    "mustInputRemark": true,
    "needAffirmance": false,
    "rejectButtonName": "",
    "remark": "",
    "requestId": "3038137",
    "requestLevel": "1",
    "requestName": "test-002",
    "status": "出口1",
    "subbackButtonName": "批准",
    "submitButtonName": "",
    "subnobackButtonName": "",
    "workflowBaseInfo": {
      "workflowId": "781",
      "workflowName": "JHY-自由加签",
      "workflowTypeId": "167",
      "workflowTypeName": "JHY-测试流程"
    },
    "workflowDetailTableInfos": [
      {
        "tableDBName": "formtable_main_1356_dt1",
        "tableFieldName": [
          "单行文本",
          "多人力",
          "下拉框"
        ],
        "tableTitle": "",
        "workflowRequestTableRecords": [
          {
            "recordOrder": 87,
            "workflowRequestTableFields": [
              {
                "browserurl": "",
                "edit": true,
                "fieldDBType": "varchar(100)",
                "fieldFormName": "field40119_0",
                "fieldHtmlType": "1",
                "fieldId": "40119",
                "fieldName": "dhwb",
                "fieldOrder": 0,
                "fieldShowName": "单行文本",
                "fieldShowValue": "第一行",
                "fieldType": "1",
                "fieldValue": "第一行",
                "filedHtmlShow": "<table style=\"width:100%;\"><tr><td style=\"width:99%;white-space:normal;\" align=\"left\"><input type=\"text\" name=\"field40119_0\" id=\"dhwb\" value=\"第一行\" ｏｎＣｈａｎｇｅ＝\"checkLength('field40119_0',100, '单行文本', '文本长度不能超过', '1个中文字符等于3个长度');\"/></td></tr></table>",
                "mand": false,
                "selectnames": [],
                "selectvalues": [],
                "view": true
              }
            ]
          },
          {
            "recordOrder": 88,
            "workflowRequestTableFields": [
              {
                "browserurl": "",
                "edit": true,
                "fieldDBType": "varchar(100)",
                "fieldFormName": "field40119_0",
                "fieldHtmlType": "1",
                "fieldId": "40119",
                "fieldName": "dhwb",
                "fieldOrder": 0,
                "fieldShowName": "单行文本",
                "fieldShowValue": "第2行",
                "fieldType": "1",
                "fieldValue": "第2行",
                "filedHtmlShow": "<table style=\"width:100%;\"><tr><td style=\"width:99%;white-space:normal;\" align=\"left\"><input type=\"text\" name=\"field40119_0\" id=\"dhwb\" value=\"第2行\" ｏｎＣｈａｎｇｅ＝\"checkLength('field40119_0',100, '单行文本', '文本长度不能超过', '1个中文字符等于3个长度');\"/></td></tr></table>",
                "mand": false,
                "selectnames": [],
                "selectvalues": [],
                "view": true
              }
            ]
          }
        ]
      }
    ],
    "workflowHtmlShow": [
      null,
      null
    ],
    "workflowHtmlTemplete": [
      null,
      null
    ],
    "workflowMainTableInfo": {
      "requestRecords": [
        {
          "recordOrder": 0,
          "workflowRequestTableFields": [
            {
              "edit": true,
              "fieldDBType": "",
              "fieldFormName": "requestname",
              "fieldHtmlType": "1",
              "fieldId": "-1",
              "fieldName": "requestname",
              "fieldOrder": -1,
              "fieldShowName": "标题",
              "fieldShowValue": "test-002",
              "fieldType": "",
              "fieldValue": "test-002",
              "filedHtmlShow": "<table style=\"width:100%;\"><tr><td style=\"width:99%;white-space:normal;\" align=\"left\"><input type=\"text\" name=\"requestname\" id=\"requestname\" value=\"test-002\" /></td><td><span id=\"requestname_ismandspan\" class=\"ismand\">!</span><input type=\"hidden\" id=\"ismandfield\" name=\"ismandfield\" value=\"requestname\"/></td></tr></table>",
              "mand": true,
              "view": true
            }
          ]
        }
      ],
      "tableDBName": "formtable_main_1356"
    },
    "workflowRequestLogs": [
      {
        "annexDocHtmls": "",
        "id": "922",
        "nodeId": "3974",
        "nodeName": "创建1",
        "operateDate": "2019-12-31",
        "operateTime": "14:51:13",
        "operateType": "提交",
        "operatorDept": "xf-部门0",
        "operatorId": "2978",
        "operatorName": "xf01",
        "receivedPersons": "xf01,xf02",
        "remark": "意见内容",
        "signDocHtmls": "",
        "signWorkFlowHtmls": ""
      }
    ]
  },
  "errMsg": {}
}
```

---

### 10. 流程实例：获取流程图链接(对外)

> **功能说明**：chartUrl : 流程图链接，如果是外部系统访问要加上单点参数token

> **补充说明**：返回流程地址，会校验权限，并拼接相关参数，返回的地址单独访问还需要加单点参数

- **接口路径 (Endpoint)**: `/api/workflow/paService/getRequestFlowChart`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：获取流程图链接(对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `otherParams` | `String` | 否 | 扩展参数 |  |
| `requestid` | `String` | **是** | 需要查看流程的请求ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `data` | `Json` | 返回的流程URL数据 |
| `errMsg` | `String` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "data": {
    "chartUrl": "/workflow/workflowDesign/readOnly-index.html?requestid=2984078&f_weaver_belongto_userid=2978&f_weaver_belongto_usertype=0&showE9Pic=1&isFromWfForm=true"
  },
  "errMsg": {}
}
```

---

### 11. 流程实例：获取流程意见（对外）

> **功能说明**：{
            "speechattachmentid": 0,
            "signdocids": "",
            "nodeattribute": "0",
            "speechAttachmente9": "",
            "operatorDept": "835",
            "tmpLogId": "922",
            "operatedate": "2019-12-31",
            "destnodeid": "3976",
            "receivedPersons": "xf01,xf02",
            "nodeid": "3974",
            "operator": "2978",
            "annexdocids": "",
            "handwrittensignid": "null",
            "signworkflowids": "",
            "agentorbyagentid": "-1",
            "iframeId": "FCKsigniframe922",
            "remarkHtml": "意见内容",
            "id": "922",
            "isMobile": "",
            "receivedPersonids": "2978,2979",
            "remarkLocation": "null",
            "operatetime": "14:51:13",
            "logid": "0",
            "operatortype": "0",
            "agenttype": "0",
            "nodename": "创建1",
            "isbranche": "0",
            "fulltextannotation": "",
            "logtype": "2"
        }

- **接口路径 (Endpoint)**: `/api/workflow/paService/getRequestLog`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：获取流程意见（对外）`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `otherParams` | `Json` | 否 | 其他参数，pageSize：一页显示多少条数据，pageNumber：查询第几页数据。pageSize默认为10,pageNumber默认为1 | {"pageSize":10,"pageNumber":1} |
| `requestId` | `String` | **是** | 请求ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `data` | `Json` | 意见列表 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "speechattachmentid": 0,
      "signdocids": "",
      "nodeattribute": "0",
      "speechAttachmente9": "",
      "operatorDept": "835",
      "tmpLogId": "922",
      "operatedate": "2019-12-31",
      "destnodeid": "3976",
      "receivedPersons": "xf01,xf02",
      "nodeid": "3974",
      "operator": "2978",
      "annexdocids": "",
      "handwrittensignid": "null",
      "signworkflowids": "",
      "agentorbyagentid": "-1",
      "iframeId": "FCKsigniframe922",
      "remarkHtml": "意见内容",
      "id": "922",
      "isMobile": "",
      "receivedPersonids": "2978,2979",
      "remarkLocation": "null",
      "operatetime": "14:51:13",
      "logid": "0",
      "operatortype": "0",
      "agenttype": "0",
      "nodename": "创建1",
      "isbranche": "0",
      "fulltextannotation": "",
      "logtype": "2"
    }
  ],
  "errMsg": {}
}
```

---

### 12. 流程实例：获取流程流转数据（对外）

> **功能说明**：id	int	记录主键
groupid	int	
nodeid	int	节点ID
nodeName	string	节点名称
userid	int	操作人ID
userType	int	0:内部用户 1：外部用户
userName	string	操作人名称
viewType	int	0:未查看 -1：已查看有反馈 -2：已查看
isremark	int	0 :节点操作人未提交，1：转发接收人未提交，2：已提交，4：已归档，8/9：抄送人 11：传阅
receivedate	string	接受日期
receivetime	string	接受时间
operatedate	string	操作日期
operatetime	string	操作时间

> **补充说明**：获取指定流程流转数据

- **接口路径 (Endpoint)**: `/api/workflow/paService/getRequestOperatorInfo`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：获取流程流转数据（对外）`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `requestid` | `String` | **是** | 请求ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `data` | `Json` | 流转数据 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "agentorbyagentid": -1,
      "agenttype": 0,
      "groupid": 0,
      "id": 839,
      "isremark": 0,
      "nodeName": "创建1",
      "nodeid": 3974,
      "operatedate": "2019-12-06",
      "operatetime": "20:09:40",
      "preisremark": 0,
      "receivedate": "2019-12-06",
      "receivetime": "20:09:38",
      "userName": "xf01",
      "userType": 0,
      "userid": 2978,
      "viewType": -2
    },
    {
      "agentorbyagentid": -1,
      "agenttype": 0,
      "groupid": 0,
      "id": 840,
      "isremark": 1,
      "nodeName": "创建1",
      "nodeid": 3974,
      "operatedate": "2019-12-09",
      "operatetime": "15:38:47",
      "preisremark": 1,
      "receivedate": "2019-12-07",
      "receivetime": "10:11:20",
      "userName": "xf01",
      "userType": 0,
      "userid": 2978,
      "viewType": -2
    }
  ],
  "errMsg": {}
}
```

---

### 13. 流程实例：获取流程状态数据（对外）

- **接口路径 (Endpoint)**: `/api/workflow/paService/getRequestStatus`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：获取流程状态数据（对外）`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `requestId` | `String` | **是** | 请求ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `creatertype` | `String` | 创建人类型 |
| `creatorId` | `Int` | 创建人ID |
| `currentNodeId` | `Int` | 当前节点ID |
| `currentNodeType` | `Int` | 当前节点类型 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |
| `isremark` | `Int` | 当前操作者状态值 |
| `status` | `String` | 流程状态 |
| `workflowBaseInfo` | `Json` | 流程信息 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "create": false,
    "creatertype": 0,
    "creatorId": "2978",
    "currentNodeId": "3976",
    "currentNodeType": "1",
    "currentOperateId": 1512,
    "eh_operatorMap": {},
    "handWrittenSign": 0,
    "isremark": 0,
    "languageid": 7,
    "mainTableInfoEntity": {
      "billid": -1356,
      "tableDbName": "formtable_main_1356"
    },
    "needAffirmance": false,
    "rejcetToType": 0,
    "rejectToNodeid": 0,
    "requestId": "3038137",
    "requestLevel": "0",
    "requestName": "test-002",
    "speechAttachment": 0,
    "status": "出口1",
    "submitToNodeid": 0,
    "takisremark": -1,
    "workflowBaseInfo": {
      "formId": "-1356",
      "isBill": "1",
      "ischangrejectnode": 0,
      "isrejectremind": 0,
      "isselectrejectnode": 0,
      "workflowName": "JHY-自由加签",
      "workflowTypeId": "167"
    },
    "workflowId": 781
  },
  "errMsg": {}
}
```

---

### 14. 流程实例：获取流程相关资源(对外)

> **功能说明**：{
            "createdate":  创建日期,
            "createrName": 资源创建人姓名,
            "createrid": 创建人ID,
            "createtime": 创建时间,
            "id": 资源ID,
            "name": 资源名称,
            "type":资源类型 1:相关流程 2：相关文档 3：相关附件，
            "downloadUrl": 资源下载链接，针对附件
        }

> **补充说明**：获取流程相关资源

- **接口路径 (Endpoint)**: `/api/workflow/paService/getRequestResources`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：获取流程相关资源(对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `requestid` | `String` | **是** | 请求ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `data` | `Json` | 资源数据 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "createdate": "2019-10-28",
      "createrName": "carol1",
      "createrid": 4250,
      "createtime": "18:58:43",
      "id": 2394,
      "name": "11",
      "type": 2
    },
    {
      "createdate": "2019-12-07",
      "createrName": "xf01",
      "createrid": 2978,
      "createtime": "10:10:51",
      "downloadUrl": "/weaver/weaver.file.FileDownload?fileid=a3fb41b8b158af54150e770d3251589e33790f8073b037d2dbaf118d128e05c403436a815caad95e02f71d97cb0ac12d80be1d27399150170&download=1&requestid=2775872",
      "id": 7541,
      "name": "WeChat_20191204084121.mp4",
      "type": 3
    },
    {
      "createdate": "2019-11-13",
      "createrName": "系统管理员",
      "createrid": 1,
      "createtime": "18:33:03",
      "id": 2493588,
      "name": "JHY-一般流程-系统管理员-2019-11-13",
      "type": 1
    }
  ],
  "errMsg": {}
}
```

---

### 15. 流程实例：转发、意见征询、转办(对外)

> **补充说明**：支持流程转发、意见征询、转办

- **接口路径 (Endpoint)**: `/api/workflow/paService/forwardRequest`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：转发、意见征询、转办(对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `forwardFlag` | `Int` | **是** | 标识1 : 转发 2：意见征询 3：转办 |  |
| `forwardResourceIds` | `String` | **是** | 接收人ID串，注意如果是转办 接收人只能是一个人 |  |
| `otherParams` | `String` | 否 | 其他扩展参数，比如意见相关流程、相关文档、附件等 | {"signdocids":"","signworkflowids":"","annexdocids":""} |
| `remark` | `String` | 否 | 意见内容 |  |
| `requestId` | `Int` | **是** | 转发的流程请求ID |  |
| `userId` | `Int` | **是** | 转发人Id | 该参数无效，取当前的登录人作为接口的调用者 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `errMsg` | `String` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "errMsg": {}
}
```

---

### 16. 流程实例：退回(对外)

> **功能说明**：默认是按出口退回，如果要自由退回，则需要指定退回节点

- **接口路径 (Endpoint)**: `/api/workflow/paService/rejectRequest`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程实例：退回(对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `otherParams` | `Json` | 否 | 其他参数，比如退回到指定节点 {"RejectToType":0,"RejectToNodeid":3974}，如果不传这2个参数默认是按出口退回； 后端设置自由选择时：可传入参数控制，{"isSubmitDirect":0}退回直达本节点，{"isSubmitDirect":1} 逐级审批； | {"RejectToType":0,"RejectToNodeid":3974} |
| `remark` | `String` | 否 | 签字意见 |  |
| `requestId` | `Int` | **是** | 退回的流程请求ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `code` | `String` | 返回数据状态 SUCCESS：成功，PARAM_ERROR：参数错误，NO_PERMISSION：无权限，SYSTEM_INNER_ERROR：程序异常，USER_EXCEPTION：用户异常 |
| `errMsg` | `Json` | 接口异常信息：例如状态为PARAM_ERROR 则返回错误参数信息 |

#### 响应示例 (Response Example)

```json
{
  "code": "SUCCESS",
  "errMsg": {}
}
```

---

### 17. 流程数据：办结流程列表 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user 的所有办结流程数据列表

- **接口路径 (Endpoint)**: `/api/workflow/paService/getProcessedWorkflowRequestList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：办结流程列表 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 10 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人名称 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点名称 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorId` | `String` | 最后操作人id |
| `lastOperatorName` | `String` | 最后操作人名称 |
| `receiveTime` | `String` | 接收时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `requestName` | `String` | 请求名称 |
| `status` | `String` | 路径状态 |
| `sysName` | `String` | 系统名称 开了统一待办才会显示，并且受后台统一待办设置显示全称，简称，或不显示名称 |
| `workflowBaseInfo` | `Json` | 流程基本信息 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2019-12-18 19:17:17",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "371847",
    "currentNodeName": "3",
    "lastOperateTime": "2019-12-19 00:16:29",
    "lastOperatorId": "21533",
    "lastOperatorName": "gny-two",
    "receiveTime": "2019-12-18 19:17:17",
    "requestId": "12481905",
    "requestLevel": "1",
    "requestName": "wwp-签字意见-gny-one-2019-12-18",
    "status": "2 至 3",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7667",
      "workflowId": "346664",
      "workflowName": "wwp-签字意见",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  }
]
```

---

### 18. 流程数据：办结流程数量 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user的所有办结流程数量

- **接口路径 (Endpoint)**: `/api/workflow/paService/getProcessedWorkflowRequestCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：办结流程数量 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |

#### 响应示例 (Response Example)

```json
1
```

---

### 19. 流程数据：可创建流程类型数量 (对外)

> **功能说明**：conditions :高级搜索条件  - wfTypeName : 流程类型名称。 - wfTypeIds :  流程类型ids(workflowtypeids)。 传入多个流程类型id时通过',' 号分隔

> **补充说明**：获取指定user可创建的流程类型数量

- **接口路径 (Endpoint)**: `/api/workflow/paService/getCreateWorkflowTypeCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：可创建流程类型数量 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfTypeIds":"1,2,3","wfTypeName":"test"} |

#### 响应示例 (Response Example)

```json
311
```

---

### 20. 流程数据：可创建的流程列表 (对外)

> **功能说明**：conditions : 高级搜索条件  - wfTypeName : 流程类型名称。  - wfName : 流程路径名称。 - wfTypeIds : 流程类型ids(workflowtypeIds)。 传入多个流程类型id时通过 ',' 号分隔 - wfIds : 流程路径ids(workflowids)。          传入多个流程路径id时通过',' 号分隔

> **补充说明**：获取指定user可创建的流程数据列表

- **接口路径 (Endpoint)**: `/api/workflow/paService/getCreateWorkflowList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：可创建的流程列表 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfIds":"1,2,3","wfName":"testname","wfTypeIds":"1,2,3,4,5","wfTypeName":"te... |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `formId` | `String` | 表单id |
| `workflowId` | `String` | 流程id |
| `workflowName` | `String` | 流程名称 |
| `workflowTypeId` | `String` | 流程类型id |
| `workflowTypeName` | `String` | 流程类型名称 |

#### 响应示例 (Response Example)

```json
[
  {
    "formId": "-6220",
    "workflowId": "272682",
    "workflowName": "测试-ys",
    "workflowTypeId": "62141",
    "workflowTypeName": "ys"
  },
  {
    "formId": "-7648",
    "workflowId": "336165",
    "workflowName": "测试手写签批-ys",
    "workflowTypeId": "62141",
    "workflowTypeName": "ys"
  },
  {
    "formId": "-6220",
    "workflowId": "273671",
    "workflowName": "测试模板保存-ys",
    "workflowTypeId": "62141",
    "workflowTypeName": "ys"
  }
]
```

---

### 21. 流程数据：可创建的流程数量 (对外)

> **功能说明**：conditions : 高级搜索条件  - wfTypeName : 流程类型名称。  - wfName : 流程路径名称。 - wfTypeIds : 流程类型ids(workflowtypeIds)。 传入多个流程类型id时通过 ',' 号分隔 - wfIds : 流程路径ids(workflowids)。          传入多个流程路径id时通过',' 号分隔

> **补充说明**：获取指定user可创建的流程数据数量

- **接口路径 (Endpoint)**: `/api/workflow/paService/getCreateWorkflowCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：可创建的流程数量 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfIds":"1,2,3","wfName":"testname","wfTypeIds":"1,2,3,4,5","wfTypeName":"te... |

#### 响应示例 (Response Example)

```json
2159
```

---

### 22. 流程数据：可创建的流程类型列表 (对外)

> **功能说明**：conditions :高级搜索条件  - wfTypeName : 流程类型名称。 - wfTypeIds :  流程类型ids(workflowtypeids)。 传入多个流程类型id时通过',' 号分隔

> **补充说明**：获取指定user可创建的流程类型列表

- **接口路径 (Endpoint)**: `/api/workflow/paService/getCreateWorkflowTypeList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：可创建的流程类型列表 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfTypeIds":"1,2,3","wfTypeName":"test"} |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `workflowTypeId` | `String` | 流程类型id |
| `workflowTypeName` | `String` | 流程类型名称 |

#### 响应示例 (Response Example)

```json
[
  {
    "workflowTypeId": "62141",
    "workflowTypeName": "ys"
  },
  {
    "workflowTypeId": "43642",
    "workflowTypeName": "BBB"
  }
]
```

---

### 23. 流程数据：已办流程列表(不包含异构系统数据) (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user的已办流程列表(不包含异构系统数据)

- **接口路径 (Endpoint)**: `/api/workflow/paService/getHandledWorkflowRequestList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：已办流程列表(不包含异构系统数据) (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 10 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人名称 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点名称 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorId` | `String` | 最后操作人id |
| `lastOperatorName` | `String` | 最后操作人名称 |
| `receiveTime` | `String` | 接受时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `requestName` | `String` | 请求名称 |
| `status` | `String` | 路程状态 |
| `sysName` | `String` | 系统名称 |
| `workflowBaseInfo` | `Json` | 流程基本信息 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2019-12-18 19:17:17",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "371847",
    "currentNodeName": "3",
    "lastOperateTime": "2019-12-19 00:16:29",
    "lastOperatorId": "21533",
    "lastOperatorName": "gny-two",
    "receiveTime": "2019-12-18 19:17:17",
    "requestId": "12481905",
    "requestLevel": "1",
    "requestName": "wwp-签字意见-gny-one-2019-12-18",
    "status": "2 至 3",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7667",
      "workflowId": "346664",
      "workflowName": "wwp-签字意见",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  },
  {
    "createTime": "2019-12-18 17:41:50",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "371846",
    "currentNodeName": "2",
    "lastOperateTime": "2019-12-18 17:41:50",
    "lastOperatorId": "21532",
    "lastOperatorName": "gny-one",
    "receiveTime": "2019-12-18 17:41:50",
    "requestId": "12474898",
    "requestLevel": "1",
    "requestName": "wwp-签字意见-gny-one-2019-12-18",
    "status": "1 至 2",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7667",
      "workflowId": "346664",
      "workflowName": "wwp-签字意见",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  }
]
```

---

### 24. 流程数据：已办流程列表(可选择是否包含异构系统数据) (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user的所有已办流程数据列表(可选择是否包含异构系统数据)

- **接口路径 (Endpoint)**: `/api/workflow/paService/getHandledWorkflowRequestList4Ofs`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：已办流程列表(可选择是否包含异构系统数据) (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 10 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人名称 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点名称 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorId` | `String` | 最后操作人id |
| `lastOperatorName` | `String` | 最后操作人名称 |
| `receiveTime` | `String` | 接收时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `requestName` | `String` | 请求标题 |
| `status` | `String` | 路径状态 |
| `sysName` | `String` | 系统名称 开了统一待办才会显示，并且受后台统一待办设置显示全称，简称，或不显示名称 |
| `workflowBaseInfo` | `Json` | 流程基本信息 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2019-12-18 19:17:17",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "371847",
    "currentNodeName": "3",
    "lastOperateTime": "2019-12-19 00:16:29",
    "lastOperatorId": "21533",
    "lastOperatorName": "gny-two",
    "receiveTime": "2019-12-18 19:17:17",
    "requestId": "12481905",
    "requestLevel": "1",
    "requestName": "wwp-签字意见-gny-one-2019-12-18",
    "status": "2 至 3",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7667",
      "workflowId": "346664",
      "workflowName": "wwp-签字意见",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  }
]
```

---

### 25. 流程数据：已办流程数量(不包含异构系统数据)  (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user的已办流程数量(不包含异构系统数据)

- **接口路径 (Endpoint)**: `/api/workflow/paService/getHandledWorkflowRequestCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：已办流程数量(不包含异构系统数据)  (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |

#### 响应示例 (Response Example)

```json
6
```

---

### 26. 流程数据：已办流程数量(可选择是否包含异构系统数据) (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user的已办流程数量(可选择是否包含异构系统数据)

- **接口路径 (Endpoint)**: `/api/workflow/paService/getHandledWorkflowRequestCount4Ofs`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：已办流程数量(可选择是否包含异构系统数据) (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |

#### 响应示例 (Response Example)

```json
6
```

---

### 27. 流程数据：待办 中抄送流程数量 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取待办  中抄送的流程数据 数量

- **接口路径 (Endpoint)**: `/api/workflow/paService/getCCWorkflowRequestCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：待办 中抄送流程数量 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |

#### 响应示例 (Response Example)

```json
1
```

---

### 28. 流程数据：待办中抄送流程列表 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取待办  中抄送的流程数据 列表

- **接口路径 (Endpoint)**: `/api/workflow/paService/getCCWorkflowRequestList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：待办中抄送流程列表 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 10 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人姓名 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点姓名 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorId` | `String` | 最后操作人id |
| `lastOperatorName` | `String` | 最后操作人姓名 |
| `receiveTime` | `String` | 接收时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `status` | `String` | 路径状态 |
| `sysName` | `String` | 系统名称 开了统一待办才会显示，并且受后台统一待办设置显示全称，简称，或不显示名称 |
| `workflowBaseInfo` | `Json` | 流程基本信息 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2019-12-18 02:30:27",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "371847",
    "currentNodeName": "3",
    "lastOperateTime": "2019-12-24 18:29:27",
    "lastOperatorId": "21533",
    "lastOperatorName": "gny-two",
    "receiveTime": "2019-12-24 18:29:27",
    "requestId": "12460885",
    "requestLevel": "1",
    "requestName": "wwp-签字意见-gny-one-2019-12-17",
    "status": "2 至 3",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7667",
      "workflowId": "346664",
      "workflowName": "wwp-签字意见",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  }
]
```

---

### 29. 流程数据：待办中退回流程列表 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取待办 中退回的流程数据 列表

- **接口路径 (Endpoint)**: `/api/workflow/paService/getBeRejectWorkflowRequestList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：待办中退回流程列表 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 10 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人姓名 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点名称 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorId` | `String` | 最后操作人id |
| `lastOperatorName` | `String` | 最后操作人姓名 |
| `receiveTime` | `String` | 接收时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `requestName` | `String` | 请求标题 |
| `status` | `String` | 路径状态 |
| `sysName` | `String` | 系统名称 开了统一待办才会显示，并且受后台统一待办设置显示全称，简称，或不显示名称 |
| `workflowBaseInfo` | `Json` | 流程基本信息 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2019-12-18 17:41:50",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "371845",
    "currentNodeName": "1",
    "lastOperateTime": "2019-12-24 18:06:05",
    "lastOperatorId": "21533",
    "lastOperatorName": "gny-two",
    "receiveTime": "2019-12-24 18:06:05",
    "requestId": "12474898",
    "requestLevel": "1",
    "requestName": "wwp-签字意见-gny-one-2019-12-18",
    "status": "2 至 1",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7667",
      "workflowId": "346664",
      "workflowName": "wwp-签字意见",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  }
]
```

---

### 30. 流程数据：待办中退回流程数量 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取待办  中退回的流程数据  数量

- **接口路径 (Endpoint)**: `/api/workflow/paService/getBeRejectWorkflowRequestCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：待办中退回流程数量 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |

#### 响应示例 (Response Example)

```json
1
```

---

### 31. 流程数据：待办列表数量 (对外)

> **功能说明**：- conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明   - requestname : 请求名称    如 出差流程   - requestlevel : 紧急程度   0  正常  1 重要  2 紧急   - ownerdepartmentid : 创建人部门id   - creatersubcompanyid : 创建人分部id   - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年   - archivestatus ： 流程是否归档。 1 已归档  2 未归档   - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档   - docids : 相关文档。 可传入 流程相关文档id   - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id   - crmids : 相关客户。    可 传入相关客户id   - proids : 相关项目 。     可传入相关项目id   - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode   - wfcode : 流程编号。     - creatertype , craterid , createrid2      - cratertype : 0 创建人为员工  1 创建人为客户     - createrid : 员工id     - createrid2 : 客户id   - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user的所有待办流程数据数量

- **接口路径 (Endpoint)**: `/api/workflow/paService/getToDoWorkflowRequestCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：待办列表数量 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |

#### 响应示例 (Response Example)

```json
12
```

---

### 32. 流程数据：待办流程列表 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user的所有待办流程数据列表

- **接口路径 (Endpoint)**: `/api/workflow/paService/getToDoWorkflowRequestList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：待办流程列表 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 20 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人名称 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点名称 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorId` | `String` | 最后操作人id |
| `lastOperatorName` | `String` | 最后操作人名称 |
| `receiveTime` | `String` | 接收时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `requestName` | `String` | 请求标题 |
| `status` | `String` | 路径状态 |
| `sysName` | `String` | 系统名称 开了统一待办才会显示，并且受后台统一待办设置显示全称，简称，或不显示名称 |
| `workflowBaseInfo` | `Json` | 流程基本信息 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2019-12-18 02:30:27",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "371847",
    "currentNodeName": "3",
    "lastOperateTime": "2019-12-24 18:29:27",
    "lastOperatorId": "21533",
    "lastOperatorName": "gny-two",
    "receiveTime": "2019-12-24 18:29:27",
    "requestId": "12460885",
    "requestLevel": "1",
    "requestName": "wwp-签字意见-gny-one-2019-12-17",
    "status": "2 至 3",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7667",
      "workflowId": "346664",
      "workflowName": "wwp-签字意见",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  },
  {
    "createTime": "2019-11-27 18:49:13",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "358338",
    "currentNodeName": "1",
    "lastOperateTime": "2019-11-27 18:49:12",
    "lastOperatorId": "21532",
    "lastOperatorName": "gny-one",
    "receiveTime": "2019-11-27 18:49:12",
    "requestId": "11710135",
    "requestLevel": "1",
    "requestName": "wwp-提交确认-gny-one-2019-11-27",
    "status": "",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7175",
      "workflowId": "332664",
      "workflowName": "wwp-提交确认",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  }
]
```

---

### 33. 流程数据：待处理流程列表 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取待处理的流程数据 列表

- **接口路径 (Endpoint)**: `/api/workflow/paService/getDoingWorkflowRequestList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：待处理流程列表 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 10 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人姓名 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点名称 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorId` | `String` | 最后操作人id |
| `lastOperatorName` | `String` | 最后操作人名称 |
| `receiveTime` | `String` | 接收时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `requestName` | `String` | 请求标题 |
| `status` | `String` | 路径状态 |
| `sysName` | `String` | 系统名称 开了统一待办才会显示，并且受后台统一待办设置显示全称，简称，或不显示名称 |
| `workflowBaseInfo` | `Json` | 流程基本信息 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2019-12-18 17:41:50",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "371845",
    "currentNodeName": "1",
    "lastOperateTime": "2019-12-24 18:06:05",
    "lastOperatorId": "21533",
    "lastOperatorName": "gny-two",
    "receiveTime": "2019-12-24 18:06:05",
    "requestId": "12474898",
    "requestLevel": "1",
    "requestName": "wwp-签字意见-gny-one-2019-12-18",
    "status": "2 至 1",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7667",
      "workflowId": "346664",
      "workflowName": "wwp-签字意见",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  }
]
```

---

### 34. 流程数据：待处理流程数量 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取待处理的流程数据 数量

- **接口路径 (Endpoint)**: `/api/workflow/paService/getDoingWorkflowRequestCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：待处理流程数量 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |

#### 响应示例 (Response Example)

```json
11
```

---

### 35. 流程数据：待阅流程列表 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user的所有待阅流程数据列表

- **接口路径 (Endpoint)**: `/api/workflow/paService/getToBeReadWorkflowRequestList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：待阅流程列表 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 10 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人姓名 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点姓名 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorId` | `String` | 最后操作人id |
| `lastOperatorName` | `String` | 最后操作人姓名 |
| `receiveTime` | `String` | 接收时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `requestName` | `String` | 请求标题 |
| `status` | `String` | 路径状态 |
| `sysName` | `String` | 系统名称 开了统一待办才会显示，并且受后台统一待办设置显示全称，简称，或不显示名称 |
| `workflowBaseInfo` | `Json` | 流程基本信息 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2019-09-19 11:37:10",
    "creatorId": "1",
    "creatorName": "系统管理员",
    "currentNodeId": "300861",
    "currentNodeName": "",
    "lastOperateTime": "2019-09-19 11:37:10",
    "lastOperatorId": "1",
    "lastOperatorName": "系统管理员",
    "receiveTime": "2019-09-19 11:37:10",
    "requestId": "9831313",
    "requestLevel": "0",
    "requestName": "发文流程(2019-09-19 11:18:09导入)-系统管理员-2019-09-19",
    "status": "创建 至 审批",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-6423",
      "workflowId": "274670",
      "workflowName": "发文流程(2019-09-19 11:18:09导入)",
      "workflowTypeId": "141",
      "workflowTypeName": "zjy"
    }
  },
  {
    "createTime": "2019-04-17 14:07:29",
    "creatorId": "1",
    "creatorName": "系统管理员",
    "currentNodeId": "35338",
    "currentNodeName": "归档4",
    "lastOperateTime": "2019-04-17 14:07:28",
    "lastOperatorId": "1",
    "lastOperatorName": "系统管理员",
    "receiveTime": "2019-04-17 14:07:28",
    "requestId": "5184463",
    "requestLevel": "9",
    "requestName": "测试islasttimes-系统管理员-2019-04-17",
    "status": "出口4",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-3370",
      "workflowId": "28164",
      "workflowName": "测试islasttimes",
      "workflowTypeId": "4861",
      "workflowTypeName": "test-pf"
    }
  },
  {
    "createTime": "2018-10-31 17:00:53",
    "creatorId": "1",
    "creatorName": "系统管理员",
    "currentNodeId": "27736",
    "currentNodeName": "创建",
    "lastOperateTime": "2019-04-04 10:59:44",
    "lastOperatorId": "1",
    "lastOperatorName": "系统管理员",
    "receiveTime": "2019-04-04 10:59:44",
    "requestId": "2916390",
    "requestLevel": "0",
    "requestName": "DDDDDDDDDDDD",
    "status": "a 至 b",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-2552",
      "workflowId": "21147",
      "workflowName": "E9_测试出口1",
      "workflowTypeId": "261",
      "workflowTypeName": "fxh流程"
    }
  }
]
```

---

### 36. 流程数据：待阅流程数量 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user的所有待阅流程数据数量

- **接口路径 (Endpoint)**: `/api/workflow/paService/getToBeReadWorkflowRequestCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：待阅流程数量 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |

#### 响应示例 (Response Example)

```json
9
```

---

### 37. 流程数据：所发起流程列表 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user所发起的流程数据列表

- **接口路径 (Endpoint)**: `/api/workflow/paService/getMyWorkflowRequestList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：所发起流程列表 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 10 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人姓名 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点名称 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorName` | `String` | 最后操作人姓名 |
| `lastOpratorId` | `String` | 最后操作人id |
| `receiveTime` | `String` | 接收时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `requestName` | `String` | 请求标题名称 |
| `status` | `String` | 路程状态 |
| `sysName` | `String` | 系统名称 |
| `workflowBaseInfo` | `Json` | 流程基本信息 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2019-12-23 19:23:59",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "304353",
    "currentNodeName": "审批",
    "lastOperateTime": "2019-12-23 19:23:59",
    "lastOperatorId": "21532",
    "lastOperatorName": "gny-one",
    "receiveTime": "2019-12-23 19:23:59",
    "requestId": "12552977",
    "requestLevel": "0",
    "requestName": "11111",
    "status": "创建 至 审批",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-6423",
      "workflowId": "278668",
      "workflowName": "正文转PDF测试-zyr",
      "workflowTypeId": "58141",
      "workflowTypeName": "公文管理回归测试-张娅蓉"
    }
  },
  {
    "createTime": "2019-11-27 19:16:47",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "358338",
    "currentNodeName": "1",
    "lastOperateTime": "2019-11-27 19:16:46",
    "lastOperatorId": "21532",
    "lastOperatorName": "gny-one",
    "receiveTime": "2019-11-27 19:16:46",
    "requestId": "11710138",
    "requestLevel": "1",
    "requestName": "wwp-提交确认-gny-one-2019-11-27",
    "status": "",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7175",
      "workflowId": "332664",
      "workflowName": "wwp-提交确认",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  }
]
```

---

### 38. 流程数据：所发起流程数量 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user 所有发起的流程数据数量

- **接口路径 (Endpoint)**: `/api/workflow/paService/getMyWorkflowRequestCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：所发起流程数量 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |

#### 响应示例 (Response Example)

```json
13
```

---

### 39. 流程数据：所有流程列表 (对外)

> **功能说明**：- conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明   - requestname : 请求名称    如 出差流程   - requestlevel : 紧急程度   0  正常  1 重要  2 紧急   - ownerdepartmentid : 创建人部门id   - creatersubcompanyid : 创建人分部id   - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年   - archivestatus ： 流程是否归档。 1 已归档  2 未归档   - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档   - docids : 相关文档。 可传入 流程相关文档id   - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id   - crmids : 相关客户。    可 传入相关客户id   - proids : 相关项目 。     可传入相关项目id   - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode   - wfcode : 流程编号。     - creatertype , craterid , createrid2      - cratertype : 0 创建人为员工  1 创建人为客户     - createrid : 员工id     - createrid2 : 客户id   - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user的所有流程数据列表

- **接口路径 (Endpoint)**: `/api/workflow/paService/getAllWorkflowRequestList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：所有流程列表 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 10 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人姓名 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点名称 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorId` | `String` | 最后操作人id |
| `lastOperatorName` | `String` | 最后操作人姓名 |
| `receiveTime` | `String` | 接收时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `requestName` | `String` | 请求标题 |
| `status` | `String` | 路径状态 |
| `sysName` | `String` | 系统名称 开了统一待办才会显示，并且受后台统一待办设置显示全称，简称，或不显示名称 |
| `workflowBaseInfo` | `Json` | 流程基本信息 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2019-12-18 02:30:27",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "371847",
    "currentNodeName": "3",
    "lastOperateTime": "2019-12-24 18:29:27",
    "lastOperatorId": "21533",
    "lastOperatorName": "gny-two",
    "receiveTime": "2019-12-24 18:29:27",
    "requestId": "12460885",
    "requestLevel": "1",
    "requestName": "wwp-签字意见-gny-one-2019-12-17",
    "status": "2 至 3",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7667",
      "workflowId": "346664",
      "workflowName": "wwp-签字意见",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  },
  {
    "createTime": "2019-11-27 19:33:36",
    "creatorId": "21532",
    "creatorName": "gny-one",
    "currentNodeId": "358338",
    "currentNodeName": "1",
    "lastOperateTime": "2019-11-27 19:33:36",
    "lastOperatorId": "21532",
    "lastOperatorName": "gny-one",
    "receiveTime": "2019-11-27 19:33:36",
    "requestId": "11710139",
    "requestLevel": "1",
    "requestName": "wwp-提交确认-gny-one-2019-11-27",
    "status": "",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-7175",
      "workflowId": "332664",
      "workflowName": "wwp-提交确认",
      "workflowTypeId": "78641",
      "workflowTypeName": "wwp-test"
    }
  }
]
```

---

### 40. 流程数据：所有流程数量 (对外)

> **功能说明**：- conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明   - requestname : 请求名称    如 出差流程   - requestlevel : 紧急程度   0  正常  1 重要  2 紧急   - ownerdepartmentid : 创建人部门id   - creatersubcompanyid : 创建人分部id   - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年   - archivestatus ： 流程是否归档。 1 已归档  2 未归档   - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档   - docids : 相关文档。 可传入 流程相关文档id   - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id   - crmids : 相关客户。    可 传入相关客户id   - proids : 相关项目 。     可传入相关项目id   - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode   - wfcode : 流程编号。     - creatertype , craterid , createrid2      - cratertype : 0 创建人为员工  1 创建人为客户     - createrid : 员工id     - createrid2 : 客户id   - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取指定user的所有流程数据数量

- **接口路径 (Endpoint)**: `/api/workflow/paService/getAllWorkflowRequestCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：所有流程数量 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显 | true |

#### 响应示例 (Response Example)

```json
16
```

---

### 41. 流程数据：根据 tabids 来获取流程列表 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：根据 tabids 来获取流程数据列表

- **接口路径 (Endpoint)**: `/api/workflow/paService/getToDoRequestList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：根据 tabids 来获取流程列表 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 10 |
| `tabIds` | `String` | 否 | 要查询的范围 如: 0 全部待办 ， 1 未读   ， 多个tabid之间使用 ‘，’ 分隔。 不传默认为0 | 0 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人姓名 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点名称 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorId` | `String` | 最后操作人id |
| `lastOperatorName` | `String` | 最后操作人名称 |
| `receiveTime` | `String` | 接收时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `requestName` | `String` | 请求名称 |
| `status` | `String` | 流程状态 |
| `sysName` | `String` | 系统名称 |
| `workflowBaseInfo` | `Json` | formId -表单id,workflowId-路径id,workflowName-流程名称,workflowTypeId-流程类型id,workflowTypeName-流程类型名称 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2019-12-23 15:08:00",
    "creatorId": "5991",
    "creatorName": "gny-test",
    "currentNodeId": "641",
    "currentNodeName": "创建1",
    "lastOperateTime": "2019-12-23 15:07:59",
    "lastOperatorId": "5991",
    "lastOperatorName": "gny-test",
    "receiveTime": "2019-12-23 15:07:59",
    "requestId": "10903414",
    "requestLevel": "0",
    "requestName": "测试islasttimes(2019-03-14 14:15:12导入)-gny-test-2019-12-23",
    "status": "",
    "sysName": "泛微简称",
    "workflowBaseInfo": {
      "formId": "-395",
      "workflowId": "169",
      "workflowName": "测试islasttimes(2019-03-14 14:15:12导入)",
      "workflowTypeId": "56",
      "workflowTypeName": "test-pf"
    }
  },
  {
    "createTime": "2019-12-23 15:07:35",
    "creatorId": "5991",
    "creatorName": "gny-test",
    "currentNodeId": "641",
    "currentNodeName": "创建1",
    "lastOperateTime": "2019-12-23 15:07:34",
    "lastOperatorId": "5991",
    "lastOperatorName": "gny-test",
    "receiveTime": "2019-12-23 15:07:34",
    "requestId": "10903413",
    "requestLevel": "0",
    "requestName": "测试islasttimes(2019-03-14 14:15:12导入)-gny-test-2019-12-23",
    "status": "",
    "sysName": "泛微简称",
    "workflowBaseInfo": {
      "formId": "-395",
      "workflowId": "169",
      "workflowName": "测试islasttimes(2019-03-14 14:15:12导入)",
      "workflowTypeId": "56",
      "workflowTypeName": "test-pf"
    }
  }
]
```

---

### 42. 流程数据：根据tabids来获取流程数量 (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect:   创建时间   - 0 全部   - 1   今天   - 2   本周   - 3    本月   - 4   本季   - 5  本年   - 6   指定时间区间   需要添加 另外两个参数     - createdatefrom   开始时间 如 2019-12-08     - createdateto        结束时间 如 2019-12-09   - 7  上一月   - 8 上一年 - operatedateselect : 操作时间   - 0 全部   - 1 今天   - 2 本周   - 3 本月   - 4 本季   - 5 本年   - 6 指定时间区间， 需要添加另外两个参数     - createdatefrom   开始时间 如 2019-12-08     - createdateto         结束时间 如 2019-12-09   - 7 上一月   - 8 上一年 - recievedateselect: 接受时间   - 0 全部   - 1 今天   - 2 本周   - 3 本月   - 4 本季   - 5 本年   - 6 指定时间区间，需要添加另外两个参数     - createdatefrom     开始时间 如 2019-12-08     - createdateto          结束时间 如 2019-12-09   - 7 上一月   - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：根据tabids 来获取流程数量

- **接口路径 (Endpoint)**: `/api/workflow/paService/getToDoRequestCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：根据tabids来获取流程数量 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `String` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `tabIds` | `String` | 否 | 要查询的范围 如: 0 全部待办 ， 1 未读   ， 多个tabid之间使用 ‘，’ 分隔。 不传默认为0 | 1,2 |
| `userId` | `String` | 否 | 要查询的用户id，不传取当前登录用户 | 11 |

#### 响应示例 (Response Example)

```json
2
```

---

### 43. 流程数据：流程签字意见 (对外)

> **功能说明**：该接口暂未处理高级搜索。

> **补充说明**：获取指定流程的签字意见

- **接口路径 (Endpoint)**: `/api/workflow/paService/getWorkflowRequestLogs`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：流程签字意见 (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件，该接口暂未处理高级搜索。 |  |
| `endId` | `String` | 否 | 对应workflow_requestbase表中的logid。如 升序，endid = 100 , pageSize = 10，取endid为90~99的签字意见数据。 | 100 |
| `pageSize` | `String` | 否 | 一页显示多少条记录 | 1 |
| `requestId` | `String` | **是** | 要查询流程的请求id | 10 |
| `userId` | `String` | **是** | 使用该用户的多语言设置，及登录用户使用的语言，中文简体，繁体，英文。 | 11 |
| `workflowId` | `String` | **是** | 要查询的流程id | 11 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `annexDocHtmls` | `String` | 相关附件 |
| `id` | `String` | id |
| `nodeId` | `String` | 节点id |
| `nodeName` | `String` | 节点名称 |
| `operateDate` | `String` | 操作日期 |
| `operateTime` | `String` | 操作时间 |
| `operateType` | `String` | 操作类型名称 |
| `operatorDept` | `String` | 操作部门 |
| `operatorId` | `String` | 操作者id |
| `operatorName` | `String` | 操作者姓名 |
| `receivedPersons` | `String` | 接收者名称 |
| `remark` | `String` | 流转签字意见 |
| `signDocHtmls` | `String` | 相关文档 |
| `signWorkFlowHtmls` | `String` | 相关流程 |

#### 响应示例 (Response Example)

```json
[{"annexDocHtmls":"","id":"5384824","nodeId":"371846","nodeName":"2","operateDate":"2019-12-19","operateTime":"00:16:29","operateType":"批准","operatorDept":"部门1","operatorId":"21533","operatorName":"gny-two","receivedPersons":"gny-three","remark":"11111
","signDocHtmls":"","signWorkFlowHtmls":""},{"annexDocHtmls":"","id":"5382852","nodeId":"371845","nodeName":"1","operateDate":"2019-12-18","operateTime":"19:17:17","operateType":"提交","operatorDept":"部门1","operatorId":"21532","operatorName":"gny-one","receivedPersons":"gny-two","remark":"测试
","signDocHtmls":"1","signWorkFlowHtmls":"wwp-签字意见-gny-one-2019-12-18"}]
```

---

### 44. 流程数据：转发流程列表(只统计还在待办的) (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取转发给指定user的所有流程数据列表(只统计还在待办的)

- **接口路径 (Endpoint)**: `/api/workflow/paService/getForwardWorkflowRequestList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：转发流程列表(只统计还在待办的) (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |
| `pageNo` | `String` | 否 | 要查询的为第几页的数据 | 1 |
| `pageSize` | `String` | 否 | 分页时一页多少数据 | 10 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `createTime` | `String` | 创建时间 |
| `creatorId` | `String` | 创建人id |
| `creatorName` | `String` | 创建人姓名 |
| `currentNodeId` | `String` | 当前节点id |
| `currentNodeName` | `String` | 当前节点姓名 |
| `lastOperateTime` | `String` | 最后操作时间 |
| `lastOperatorId` | `String` | 最后操作人id |
| `lastOperatorName` | `String` | 最后操作人姓名 |
| `receiveTime` | `String` | 接收时间 |
| `requestId` | `String` | 请求id |
| `requestLevel` | `String` | 紧急程度 |
| `requestName` | `String` | 请求标题 |
| `status` | `String` | 路径状态 |
| `sysName` | `String` | 系统名称 开了统一待办才会显示，并且受后台统一待办设置显示全称，简称，或不显示名称 |
| `workflowBaseInfo` | `Json` | 流程基本信息 |

#### 响应示例 (Response Example)

```json
[
  {
    "createTime": "2018-09-05 16:27:17",
    "creatorId": "1",
    "creatorName": "系统管理员",
    "currentNodeId": "15197",
    "currentNodeName": "BB",
    "lastOperateTime": "2019-05-23 10:11:32",
    "lastOperatorId": "1",
    "lastOperatorName": "系统管理员",
    "receiveTime": "2019-05-23 10:11:32",
    "requestId": "2399050",
    "requestLevel": "0",
    "requestName": "h5",
    "status": "AA 至 BB",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-1537",
      "workflowId": "9804",
      "workflowName": "E9_测试出口",
      "workflowTypeId": "261",
      "workflowTypeName": "fxh流程"
    }
  },
  {
    "createTime": "2018-10-31 17:00:53",
    "creatorId": "1",
    "creatorName": "系统管理员",
    "currentNodeId": "27736",
    "currentNodeName": "创建",
    "lastOperateTime": "2019-04-04 10:59:44",
    "lastOperatorId": "1",
    "lastOperatorName": "系统管理员",
    "receiveTime": "2019-04-04 10:59:44",
    "requestId": "2916390",
    "requestLevel": "0",
    "requestName": "DDDDDDDDDDDD",
    "status": "a 至 b",
    "sysName": "",
    "workflowBaseInfo": {
      "formId": "-2552",
      "workflowId": "21147",
      "workflowName": "E9_测试出口1",
      "workflowTypeId": "261",
      "workflowTypeName": "fxh流程"
    }
  }
]
```

---

### 45. 流程数据：转发流程数量(只统计还在待办的) (对外)

> **功能说明**：conditions: 高级搜索条件 可以把多个条件放入这个map中，下面为具体说明  - requestname : 请求名称    如 出差流程 - requestlevel : 紧急程度   0  正常  1 重要  2 紧急 - ownerdepartmentid : 创建人部门id - creatersubcompanyid : 创建人分部id - createdateselect: 创建时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间 需要添加 另外两个参数 - createdatefrom 开始时间 如 2019-12-08 - createdateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - operatedateselect : 操作时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间， 需要添加另外两个参数 - operatedatefrom 开始时间 如 2019-12-08 - operatedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - recievedateselect: 接受时间 - 0 全部 - 1 今天 - 2 本周 - 3 本月 - 4 本季 - 5 本年 - 6 指定时间区间，需要添加另外两个参数 - recievedatefrom 开始时间 如 2019-12-08 - recievedateto 结束时间 如 2019-12-09 - 7 上一月 - 8 上一年 - archivestatus ： 流程是否归档。 1 已归档  2 未归档 - nodetype : 当前节点类型。 0：创建，1：批准，2：提交，3：归档 - docids : 相关文档。 可传入 流程相关文档id - hrmcreaterid : 相关人力资源。   可 传入流程相关人员id - crmids : 相关客户。    可 传入相关客户id - proids : 相关项目 。     可传入相关项目id - workcode : 创建人编号。 可传入创建人的编号，对应hrmresource表中的workcode - wfcode : 流程编号。   - creatertype , craterid , createrid2    - cratertype : 0 创建人为员工  1 创建人为客户   - createrid : 员工id   - createrid2 : 客户id - unophrmid : 未操作人id , 只支持 传入一个人员id

> **补充说明**：获取转发给指定user的所有流程数据数量(只统计还在待办的)

- **接口路径 (Endpoint)**: `/api/workflow/paService/getForwardWorkflowRequestCount`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `工作流程 > 流程数据：转发流程数量(只统计还在待办的) (对外)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `conditions` | `Json` | 否 | 高级搜索条件 可以把多个条件放入这个map中 | {"wfcode":"11111","ownerdepartmentid":"101","requestname":"请假流程","nodetype":"... |
| `isMergeShow` | `Bool` | 否 | 是否主次账号统一显示 | true |
| `isNeedOs` | `Bool` | 否 | 是否显示异构系统数据 ， 为true时还需 设置开启异构系统显示才会显示 | true |

#### 响应示例 (Response Example)

```json
2
```

---
