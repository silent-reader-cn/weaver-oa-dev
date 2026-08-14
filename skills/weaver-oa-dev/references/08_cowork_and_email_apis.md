# 泛微OA 协作与邮件模块 (Cowork & Email) 后端接口文档

> **模块简介**：包含协作交流列表、协作板块/类别、邮件总数与未读统计、邮件列表及监控日志等6个接口。
> **接口数量**：共收录 `6` 个后端 REST 接口。

## 目录导航

1. [协作-协作交流-列表(layout 1为数图模式;2为列表模式) (`GET` `/api/cowork/base/getCoworkList`)](#1-协作-协作交流-列表layout-1为数图模式;2为列表模式)
2. [协作后台版块设置-版块列表 (`GET` `/api/cowork/type/getCoworkTypeList`)](#2-协作后台版块设置-版块列表)
3. [协作后台类别设置-类别列表 (`GET` `/api/cowork/maintype/getCoworkMainTypeList`)](#3-协作后台类别设置-类别列表)
4. [获取邮件总数、未读数 (`GET` `/api/email/base/refreshCount`)](#4-获取邮件总数未读数)
5. [邮件列表 (`GET` `/api/email/list/allList`)](#5-邮件列表)
6. [邮件监控 监控日志列表 (`GET` `/api/email/monitor/monitorLogList`)](#6-邮件监控-监控日志列表)

---

## 接口详细说明

### 1. 协作-协作交流-列表(layout 1为数图模式;2为列表模式)

- **接口路径 (Endpoint)**: `/api/cowork/base/getCoworkList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `协作管理 > 协作-协作交流-列表(layout 1为数图模式;2为列表模式)`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `creater` | `String` | 否 | 创建者 |  |
| `createrspan` | `String` | 否 | 创建者组 |  |
| `datetype` | `String` | 否 | 时间（全部:空;今天:1;本周:2;本月:3;本季:4;本年:5;指定日期范围:6;) |  |
| `enddate` | `String` | 否 | 结束时间 |  |
| `from` | `String` | 否 | 来自哪里 from=cowork 来自协作 |  |
| `frompage` | `String` | 否 | 来自哪个菜单点击 |  |
| `jointype` | `String` | 否 | 参与类型//(全部主题:（0或空） ;仅参与的:6;仅负责的:3;负责或参与的:1;我创建的:4;待审批的:5;其他关注的工作:2;) |  |
| `labelid` | `String` | 否 | 标签ID(全部:allTab;未读:1;重要:2;隐藏:3;) |  |
| `layout` | `String` | 否 | 1为数图模式;2为列表模式 |  |
| `mainid` | `String` | 否 | 协作类别ID |  |
| `name` | `String` | 否 | 主题 |  |
| `orderType` | `String` | 否 | 排序方式(未读:unread;重要:important;回复:replyNum;查看:readNum;) |  |
| `pagenum` | `String` | 否 | 当前页码 |  |
| `pagesize` | `String` | 否 | 每一次取多少 |  |
| `principal` | `String` | 否 | 负责人 |  |
| `searchHrmid` | `String` | 否 | 人力资源id |  |
| `startdate` | `String` | 否 | 起始时间 |  |
| `status` | `String` | 否 | 状态 |  |
| `type` | `String` | 否 | 查看类型(全部:all;未读:unread;重要:important;隐藏:hidden;版块标签:typePlate;自定义标签:label;) |  |
| `typeid` | `String` | 否 | 协作版块ID |  |
| `viewtype` | `String` | 否 | 门户查看类型 （2超期1未读 "0" 全部） |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `coworkList` | `Json` | 列表集合 |
| `status` | `Int` | 状态 |

#### 响应示例 (Response Example)

```json
{
  "coworkList": [
    {
      "important": "0",
      "coworkid": "4061",
      "isTop": "1",
      "joinType": "1",
      "approvalAtatus": "0",
      "lastInfo": "最后发表：李妍-ln 2019-07-12 17:30",
      "labelBycoworkList": [],
      "coworkName": "@---0402",
      "isnew": "1"
    },
    {
      "important": "0",
      "coworkid": "1561",
      "isTop": "1",
      "joinType": "1",
      "approvalAtatus": "0",
      "lastInfo": "最后发表：杨文元-ln 2019-07-12 17:22",
      "labelBycoworkList": [],
      "coworkName": "吃货交流区",
      "isnew": "1"
    },
    {
      "important": "0",
      "coworkid": "562",
      "isTop": "1",
      "joinType": "1",
      "approvalAtatus": "0",
      "lastInfo": "最后发表：李妍-ln 2019-07-12 17:26",
      "labelBycoworkList": [],
      "coworkName": "测试匿名的协作",
      "isnew": "1"
    },
    {
      "important": "0",
      "coworkid": "121",
      "isTop": "1",
      "joinType": "1",
      "approvalAtatus": "0",
      "lastInfo": "最后发表：系统管理员 2018-05-11 14:20",
      "labelBycoworkList": [],
      "coworkName": "不需匿名和评论-1122",
      "isnew": "1"
    },
    {
      "important": "0",
      "coworkid": "101",
      "isTop": "1",
      "joinType": "1",
      "approvalAtatus": "0",
      "lastInfo": "最后发表：系统管理员 29分钟前",
      "labelBycoworkList": [],
      "coworkName": "匿名+审批",
      "isnew": "1"
    },
    {
      "important": "0",
      "coworkid": "84",
      "isTop": "0",
      "joinType": "1",
      "approvalAtatus": "0",
      "lastInfo": "最后发表：李妍-ln 2019-07-23 13:10",
      "labelBycoworkList": [],
      "coworkName": "lalal",
      "isnew": "1"
    },
    {
      "important": "0",
      "coworkid": "8564",
      "isTop": "0",
      "joinType": "1",
      "approvalAtatus": "0",
      "lastInfo": "最后发表：李妍-zhn 5分钟前",
      "labelBycoworkList": [],
      "coworkName": "结束协作权限人",
      "isnew": "0"
    },
    {
      "important": "0",
      "coworkid": "163",
      "isTop": "1",
      "joinType": "0",
      "approvalAtatus": "0",
      "lastInfo": "最后发表：李妍-ln 2019-07-12 17:27",
      "labelBycoworkList": [],
      "coworkName": "?hu1只参与",
      "isnew": "1"
    },
    {
      "important": "0",
      "coworkid": "162",
      "isTop": "1",
      "joinType": "0",
      "approvalAtatus": "0",
      "lastInfo": "最后发表：系统管理员 2018-11-02 17:20",
      "labelBycoworkList": [],
      "coworkName": "hu1负责主题并参与",
      "isnew": "1"
    },
    {
      "important": "0",
      "coworkid": "161",
      "isTop": "1",
      "joinType": "0",
      "approvalAtatus": "0",
      "lastInfo": "最后发表：系统管理员 2018-05-04 16:08",
      "labelBycoworkList": [],
      "coworkName": "hu1仅负责主题",
      "isnew": "1"
    },
    {
      "important": "0",
      "coworkid": "25",
      "isTop": "0",
      "joinType": "0",
      "approvalAtatus": "0",
      "lastInfo": "最后发表：系统管理员 2018-11-05 11:14",
      "labelBycoworkList": [],
      "coworkName": "hu1可申请",
      "isnew": "1"
    }
  ],
  "status": "1"
}
```

---

### 2. 协作后台版块设置-版块列表

- **接口路径 (Endpoint)**: `/api/cowork/type/getCoworkTypeList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `协作管理 > 协作后台版块设置-版块列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `departmentid` | `String` | 否 | 类别id |  |
| `isAnonymous` | `String` | 否 | 是否匿名 |  |
| `isApproval` | `String` | 否 | 是否审批 |  |
| `typename` | `String` | 否 | 板块名称 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `status` | `Int` | 状态 |
| `viewRight` | `Int` | 是否有查看权限 |

#### 响应示例 (Response Example)

```json
{
  "viewRight": 0,
  "status": "1"
}
```

---

### 3. 协作后台类别设置-类别列表

- **接口路径 (Endpoint)**: `/api/cowork/maintype/getCoworkMainTypeList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `协作管理 > 协作后台类别设置-类别列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `name` | `String` | 否 | 类别名称 |  |
| `ts` | `String` | 否 | ts |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `status` | `Int` | 状态 |
| `viewRight` | `Int` | 是否有查看权限 |

#### 响应示例 (Response Example)

```json
{
  "viewRight": 0,
  "status": "1"
}
```

---

### 4. 获取邮件总数、未读数

- **接口路径 (Endpoint)**: `/api/email/base/refreshCount`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `邮件模块 > 获取邮件总数、未读数`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `attachmentnumber` | `String` | **是** | 附件数量 |  |
| `datetype` | `String` | **是** | 日期类型 |  |
| `enddate` | `String` | **是** | 结束时间 |  |
| `folderid` | `String` | **是** | 不传默认取收件箱 |  |
| `from` | `String` | **是** | 发件人 |  |
| `isInternal` | `String` | **是** | 1：查内部邮件，0：查外部，-1或其他：查内部和外部 |  |
| `labelid` | `String` | **是** | 标签Id |  |
| `mailaccountid` | `String` | **是** | 邮件账户id |  |
| `receivemail` | `String` | **是** | 邮件接收 |  |
| `receivemailid` | `String` | **是** | 接收邮件Id |  |
| `star` | `String` | **是** | 星标邮件 |  |
| `startdate` | `String` | **是** | 开始时间 |  |
| `status` | `String` | **是** | 已读未读 |  |
| `subject` | `String` | **是** | 标题 |  |
| `to` | `String` | **是** | 收件人 |  |
| `waitdeal` | `String` | **是** | 待办 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `count` | `Int` | 未读数（门户页面统一格式需要） |
| `status` | `String` | 状态码 |
| `totalMailCount` | `Int` | 总邮件数 |
| `unread` | `Int` | 未读数（工作台应用角标未读数统一读取的unread参数） |
| `unreadMailCount` | `Int` | 未读数 |

#### 响应示例 (Response Example)

```json
{
  "totalMailCount": 30,
  "count": 28,
  "unreadMailCount": 28,
  "status": "1"
}
```

---

### 5. 邮件列表

- **接口路径 (Endpoint)**: `/api/email/list/allList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `邮件模块 > 邮件列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `attachmentnumber` | `String` | **是** | 附件数量 |  |
| `classification` | `String` | **是** | 密级 |  |
| `current` | `String` | **是** | 分页页码 |  |
| `datetype` | `String` | 否 | 接收时间 |  |
| `enddate` | `String` | 否 | 接收时间：结束时间 |  |
| `folderid` | `String` | **是** | 文件夹id |  |
| `from` | `String` | **是** | 发件人 |  |
| `fromhrmid` | `String` | 否 | 发件人人力资源id |  |
| `isInternal` | `String` | **是** | 内部邮件 |  |
| `labelid` | `String` | 否 | 标签id |  |
| `mailaccountid` | `String` | **是** | 邮件账户Id |  |
| `mailtype` | `String` | 否 | 邮件类型 |  |
| `menu_folderid` | `String` | 否 | 所属文件夹id |  |
| `menu_isInternal` | `String` | 否 | 内部右键菜单 |  |
| `menu_labelid` | `String` | 否 | 我的标签菜单 |  |
| `menu_star` | `String` | 否 | 标星菜单 |  |
| `menu_waitdeal` | `String` | 否 | 待办邮件菜单 |  |
| `pageSize` | `String` | 否 | 分页大小 |  |
| `sortColumn` | `String` | 否 | 排序字段 |  |
| `sortType` | `String` | 否 | 排序方式 |  |
| `star` | `String` | **是** | 标星邮件 |  |
| `startdate` | `String` | 否 | 接收时间：起始时间 |  |
| `status` | `String` | **是** | 已读未读 |  |
| `subject` | `String` | **是** | 标题 |  |
| `to` | `String` | **是** | 收件人 |  |
| `tohrmid` | `String` | 否 | 收件人 人力资源id |  |
| `waitdeal` | `String` | **是** | 待办邮件 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `status` | `String` | 状态码 |
| `tableBean` | `Json` | 邮件列表信息 |

#### 响应示例 (Response Example)

```json
{
  "tableBean": {
    "columns": [
      {
        "dataIndex": "sendfromSpan",
        "key": "sendfromSpan",
        "orderkey": "sendfrom",
        "title": "发件人"
      },
      {
        "dataIndex": "subject",
        "key": "subject",
        "orderkey": "subject",
        "title": "主题"
      },
      {
        "dataIndex": "sizeSpan",
        "key": "sizeSpan",
        "orderkey": "size_n",
        "title": "大小"
      },
      {
        "dataIndex": "senddateSpan",
        "key": "senddateSpan",
        "orderkey": "senddate",
        "title": "时间"
      }
    ],
    "current": 1,
    "datas": [],
    "pageSize": 10,
    "total": 0,
    "totalPage": 0
  },
  "status": "1"
}
```

---

### 6. 邮件监控 监控日志列表

- **接口路径 (Endpoint)**: `/api/email/monitor/monitorLogList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `邮件模块 > 邮件监控 监控日志列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `datetype` | `String` | 否 | 日期类型 |  |
| `department` | `String` | 否 | 部门 |  |
| `enddate` | `String` | 否 | 结束时间 |  |
| `resource` | `String` | 否 | 人力资源id |  |
| `startdate` | `String` | 否 | 开始时间 |  |
| `subdepartment` | `String` | 否 | 分部 |  |
| `subject` | `String` | 否 | 标题 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `sessionkey` | `String` | sessionkey |
| `status` | `String` | 状态码 |
| `viewRight` | `Int` | 检查权限 |

#### 响应示例 (Response Example)

```json
{
  "viewRight": 1,
  "sessionkey": "bfa54bab-74b0-4eff-abaf-0eec197724e9_4AC801C9A586DE683BA5045148E2C9F4",
  "status": "1"
}
```

---
