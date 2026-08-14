# 泛微OA 考勤管理 (Attendance) 后端接口文档

> **模块简介**：包含打卡记录、考勤报表、假期余额计算、请假/加班/出差/调休、排班班次等107个考勤API。
> **接口数量**：共收录 `107` 个后端 REST 接口。

## 目录导航

1. [一键启用考勤--初始化 (`GET` `/api/kq/setupwizard/performInitialization`)](#1-一键启用考勤--初始化)
2. [一键启用考勤--判断是否具有权限 (`GET` `/api/kq/setupwizard/getHasRight`)](#2-一键启用考勤--判断是否具有权限)
3. [一键启用考勤--获取单个步骤 (`GET` `/api/kq/setupwizard/getSetupSteps`)](#3-一键启用考勤--获取单个步骤)
4. [一键启用考勤--获取表单 (`GET` `/api/kq/setupwizard/getSetupForm`)](#4-一键启用考勤--获取表单)
5. [一键启用考勤-右键菜单 (`GET` `/api/kq/setupwizard/getRightMenu`)](#5-一键启用考勤-右键菜单)
6. [保存考勤流程设置的 字段对应信息 (`POST` `/api/kq/wfSetting/statesShedule/saveStateProcSetFlowWfFields`)](#6-保存考勤流程设置的-字段对应信息)
7. [保存考勤流程设置的 流程概览 (`POST` `/api/kq/wfSetting/statesShedule/saveStateProcSetFlow`)](#7-保存考勤流程设置的-流程概览)
8. [假期余额--保存修改 (`POST` `/api/kq/balanceofleave/saveBalanceOfLeave`)](#8-假期余额--保存修改)
9. [假期类型--保存启用/不启用的假期类型 (`POST` `/api/kq/leavetypes/saveDisableLeaveTypes`)](#9-假期类型--保存启用不启用的假期类型)
10. [假期类型--删除 (`POST` `/api/kq/leavetypes/deleteLeaveTypes`)](#10-假期类型--删除)
11. [假期类型--判断是否有权限 (`GET` `/api/kq/leavetypes/getHasRight`)](#11-假期类型--判断是否有权限)
12. [假期类型--新建假期类型 (`POST` `/api/kq/leavetypes/addLeaveTypes`)](#12-假期类型--新建假期类型)
13. [假期类型--编辑假期类型 (`POST` `/api/kq/leavetypes/editLeaveTypes`)](#13-假期类型--编辑假期类型)
14. [假期类型--获取假期类型列表 (`GET` `/api/kq/leavetypes/getSearchList`)](#14-假期类型--获取假期类型列表)
15. [假期类型--获取右键菜单 (`GET` `/api/kq/leavetypes/getRightMenu`)](#15-假期类型--获取右键菜单)
16. [假期类型--获取新建或编辑的表单 (`GET` `/api/kq/leavetypes/getLeaveTypesForm`)](#16-假期类型--获取新建或编辑的表单)
17. [假期类型--获取查询条件 (`GET` `/api/kq/leavetypes/getSearchCondition`)](#17-假期类型--获取查询条件)
18. [假期规则--删除 (`POST` `/api/kq/leaverules/deleteLeaveRules`)](#18-假期规则--删除)
19. [假期规则--判断是否权限 (`GET` `/api/kq/leaverules/getHasRight`)](#19-假期规则--判断是否权限)
20. [假期规则--新建假期规则 (`POST` `/api/kq/leaverules/addLeaveRules`)](#20-假期规则--新建假期规则)
21. [假期规则--编辑 (`POST` `/api/kq/leaverules/editLeaveRules`)](#21-假期规则--编辑)
22. [假期规则--获取假期类型的请假时长的单位 (`GET` `/api/kq/leaverules/getUnitName`)](#22-假期规则--获取假期类型的请假时长的单位)
23. [假期规则--获取假期规则的列表 (`GET` `/api/kq/leaverules/getSearchList`)](#23-假期规则--获取假期规则的列表)
24. [假期规则--获取右键菜单 (`GET` `/api/kq/leaverules/getRightMenu`)](#24-假期规则--获取右键菜单)
25. [假期规则--获取新建或者编辑的表单 (`GET` `/api/kq/leaverules/getLeaveRulesForm`)](#25-假期规则--获取新建或者编辑的表单)
26. [假期规则--获取高级搜索的表单 (`GET` `/api/kq/leaverules/getSearchCondition`)](#26-假期规则--获取高级搜索的表单)
27. [公出出差规则--保存 (`POST` `/api/kq/travelrules/saveTravelRules`)](#27-公出出差规则--保存)
28. [公出出差规则--判断是否有权限 (`GET` `/api/kq/travelrules/getHasRight`)](#28-公出出差规则--判断是否有权限)
29. [公出出差规则--获取右键菜单 (`GET` `/api/kq/travelrules/getRightMenu`)](#29-公出出差规则--获取右键菜单)
30. [公出出差规则--获取表单 (`GET` `/api/kq/travelrules/getTravelRulesForm`)](#30-公出出差规则--获取表单)
31. [删除考勤流程设置 (`POST` `/api/kq/wfSetting/statesShedule/delStateProcSet`)](#31-删除考勤流程设置)
32. [加班规则--保存加班单位的设置 (`POST` `/api/kq/overtimerules/saveOvertimeUnit`)](#32-加班规则--保存加班单位的设置)
33. [加班规则--删除 (`POST` `/api/kq/overtimerules/deleteOvertimeRules`)](#33-加班规则--删除)
34. [加班规则--判断是否有权限 (`GET` `/api/kq/overtimerules/getHasRight`)](#34-加班规则--判断是否有权限)
35. [加班规则--新建加班规则 (`POST` `/api/kq/overtimerules/addOvertimeRules`)](#35-加班规则--新建加班规则)
36. [加班规则--编辑加班规则 (`POST` `/api/kq/overtimerules/editOvertimeRules`)](#36-加班规则--编辑加班规则)
37. [加班规则--获取加班单位的表单 (`GET` `/api/kq/overtimerules/getOvertimeUnitForm`)](#37-加班规则--获取加班单位的表单)
38. [加班规则--获取加班规则的列表 (`GET` `/api/kq/overtimerules/getSearchList`)](#38-加班规则--获取加班规则的列表)
39. [加班规则--获取加班规则的右键菜单 (`GET` `/api/kq/overtimerules/getRightMenu`)](#39-加班规则--获取加班规则的右键菜单)
40. [加班规则--获取加班规则的新建或编辑的表单 (`GET` `/api/kq/overtimerules/getOvertimeRulesForm`)](#40-加班规则--获取加班规则的新建或编辑的表单)
41. [原始打卡记录--判断是否有权限 (`GET` `/api/kq/originalpunchrp/getHasRight`)](#41-原始打卡记录--判断是否有权限)
42. [原始打卡记录--获取右键菜单 (`GET` `/api/kq/originalpunchrp/getRightMenu`)](#42-原始打卡记录--获取右键菜单)
43. [原始打卡记录--获取报表数据 (`GET` `/api/kq/originalpunchrp/getSearchList`)](#43-原始打卡记录--获取报表数据)
44. [原始打卡记录报表--获取高级搜索 (`GET` `/api/kq/originalpunchrp/getSearchCondition`)](#44-原始打卡记录报表--获取高级搜索)
45. [员工假期余额--判断是否具有权限 (`GET` `/api/kq/balanceofleave/getHasRight`)](#45-员工假期余额--判断是否具有权限)
46. [员工假期余额--导入员工假期余额 (`POST` `/api/kq/balanceofleave/saveImport`)](#46-员工假期余额--导入员工假期余额)
47. [员工假期余额--获取TAB页签 (`GET` `/api/kq/balanceofleave/getTabs`)](#47-员工假期余额--获取tab页签)
48. [员工假期余额--获取右键菜单 (`GET` `/api/kq/balanceofleave/getRightMenu`)](#48-员工假期余额--获取右键菜单)
49. [员工假期余额--获取员工假期余额列表 (`GET` `/api/kq/balanceofleave/getSearchList`)](#49-员工假期余额--获取员工假期余额列表)
50. [员工假期余额--获取高级搜索的查询条件 (`GET` `/api/kq/balanceofleave/getSearchCondition`)](#50-员工假期余额--获取高级搜索的查询条件)
51. [员工假期余额-判断是否具有权限 (`GET` `/api/kq/balanceofleaverp/getHasRight`)](#51-员工假期余额-判断是否具有权限)
52. [员工假期余额-批处理 (`POST` `/api/kq/balanceofleave/batchProcessing`)](#52-员工假期余额-批处理)
53. [员工假期余额-获取导入表单 (`GET` `/api/kq/balanceofleave/getImportForm`)](#53-员工假期余额-获取导入表单)
54. [员工假期余额报表--使用记录--获取分页数据 (`GET` `/api/kq/balanceofleaverp/getDetailPageInfo`)](#54-员工假期余额报表--使用记录--获取分页数据)
55. [员工假期余额报表--使用记录--获取记录变更类型 (`GET` `/api/kq/balanceofleaverp/getChangeType`)](#55-员工假期余额报表--使用记录--获取记录变更类型)
56. [员工假期余额报表--使用记录一共有多少页签 (`GET` `/api/kq/balanceofleaverp/getTab`)](#56-员工假期余额报表--使用记录一共有多少页签)
57. [员工假期余额报表--获取使用记录 (`GET` `/api/kq/balanceofleaverp/getUsageRecordDetail`)](#57-员工假期余额报表--获取使用记录)
58. [员工假期余额报表--获取分页信息 (`GET` `/api/kq/balanceofleaverp/getPageInfo`)](#58-员工假期余额报表--获取分页信息)
59. [员工假期余额报表--获取右键菜单 (`GET` `/api/kq/balanceofleaverp/getRightMenu`)](#59-员工假期余额报表--获取右键菜单)
60. [员工假期余额报表--获取报表数据 (`GET` `/api/kq/balanceofleaverp/getSearchList`)](#60-员工假期余额报表--获取报表数据)
61. [员工假期余额报表-获取高级搜索 (`GET` `/api/kq/balanceofleaverp/getSearchCondition`)](#61-员工假期余额报表-获取高级搜索)
62. [我的考勤--考勤明细 (`POST` `/api/kq/myattendance/getHrmKQReportDetialInfo`)](#62-我的考勤--考勤明细)
63. [我的考勤--考勤统计 (`POST` `/api/kq/myattendance/getHrmKQReportInfo`)](#63-我的考勤--考勤统计)
64. [我的考勤--获取日历模式下的数据 (`POST` `/api/kq/myattendance/getHrmKQMonthReportInfo`)](#64-我的考勤--获取日历模式下的数据)
65. [我的考勤--获取签到签退数据 (`POST` `/api/kq/myattendance/getHrmKQSignInfo`)](#65-我的考勤--获取签到签退数据)
66. [空 (`POST` `/api/kq/balanceofleaverp/exportExcel`)](#66-空)
67. [考勤导入--获取导入历史记录 (`GET` `/api/kq/importlog/getImportHistory`)](#67-考勤导入--获取导入历史记录)
68. [考勤导入--获取导入日志 (`GET` `/api/kq/importlog/getImportColResultLog`)](#68-考勤导入--获取导入日志)
69. [考勤导入--获取导入结果 (`GET` `/api/kq/importlog/getImportResult`)](#69-考勤导入--获取导入结果)
70. [考勤导入--获取导入进行明细 (`GET` `/api/kq/importlog/getImportProcessLog`)](#70-考勤导入--获取导入进行明细)
71. [考勤报表右键菜单 (`GET` `/api/kq/report/getRightMenu`)](#71-考勤报表右键菜单)
72. [考勤报表导出 (`POST` `/api/kq/report/exportExcel`)](#72-考勤报表导出)
73. [考勤报表异常明细 (`POST` `/api/kq/report/detail/getKQReportDetail`)](#73-考勤报表异常明细)
74. [考勤报表异常明细页签 (`POST` `/api/kq/report/detail/getTabs`)](#74-考勤报表异常明细页签)
75. [考勤报表明细 (`POST` `/api/kq/report/detail/getDailyDetialInfo`)](#75-考勤报表明细)
76. [考勤报表权限共享--保存 (`POST` `/api/kq/reportshare/saveReportShare`)](#76-考勤报表权限共享--保存)
77. [考勤报表权限共享--删除 (`POST` `/api/kq/reportshare/deleteReportShare`)](#77-考勤报表权限共享--删除)
78. [考勤报表权限共享--判断是否有权限 (`GET` `/api/kq/reportshare/getHasRight`)](#78-考勤报表权限共享--判断是否有权限)
79. [考勤报表权限共享--获取列表 (`GET` `/api/kq/reportshare/getSearchList`)](#79-考勤报表权限共享--获取列表)
80. [考勤报表权限共享--获取右键菜单 (`GET` `/api/kq/reportshare/getRightMenu`)](#80-考勤报表权限共享--获取右键菜单)
81. [考勤报表权限共享--获取表单 (`GET` `/api/kq/reportshare/getReportShareForm`)](#81-考勤报表权限共享--获取表单)
82. [考勤报表权限共享--获取高级搜索表单 (`GET` `/api/kq/reportshare/getSearchCondition`)](#82-考勤报表权限共享--获取高级搜索表单)
83. [考勤报表查询条件 (`POST` `/api/kq/report/getSearchCondition`)](#83-考勤报表查询条件)
84. [自动创建考勤流程设置表单 (`POST` `/api/kq/wfSetting/statesShedule/saveStateProcSetCreateForm`)](#84-自动创建考勤流程设置表单)
85. [节假日设置--保存导入的数据 (`POST` `/api/kq/holidayset/saveImport`)](#85-节假日设置--保存导入的数据)
86. [节假日设置--初始化节假日设置 (`POST` `/api/kq/holidayset/initHolidaySet`)](#86-节假日设置--初始化节假日设置)
87. [节假日设置--删除节假日设置 (`POST` `/api/kq/holidayset/deleteHolidaySet`)](#87-节假日设置--删除节假日设置)
88. [节假日设置--判断是否有权限 (`GET` `/api/kq/holidayset/getHasRight`)](#88-节假日设置--判断是否有权限)
89. [节假日设置--同步节假日设置 (`POST` `/api/kq/holidayset/syncHolidaySet`)](#89-节假日设置--同步节假日设置)
90. [节假日设置--新建节假日设置 (`POST` `/api/kq/holidayset/addHolidaySet`)](#90-节假日设置--新建节假日设置)
91. [节假日设置--日历 (`GET` `/api/kq/holidayset/getHolidaySetCalendar`)](#91-节假日设置--日历)
92. [节假日设置--统计节假日设置数据 (`GET` `/api/kq/holidayset/getHolidayCount`)](#92-节假日设置--统计节假日设置数据)
93. [节假日设置--编辑节假日设置 (`POST` `/api/kq/holidayset/editHolidaySet`)](#93-节假日设置--编辑节假日设置)
94. [节假日设置--获取右键菜单 (`GET` `/api/kq/holidayset/getRightMenu`)](#94-节假日设置--获取右键菜单)
95. [节假日设置--获取同步的表单 (`GET` `/api/kq/holidayset/getSyncForm`)](#95-节假日设置--获取同步的表单)
96. [节假日设置--获取导入的表单 (`GET` `/api/kq/holidayset/getImportForm`)](#96-节假日设置--获取导入的表单)
97. [节假日设置--获取新建或者编辑的表单 (`GET` `/api/kq/holidayset/getHolidaySetForm`)](#97-节假日设置--获取新建或者编辑的表单)
98. [节假日设置--获取节假日设置的列表 (`GET` `/api/kq/holidayset/getSearchList`)](#98-节假日设置--获取节假日设置的列表)
99. [获取考勤报表 (`POST` `/api/kq/report/getKQReport`)](#99-获取考勤报表)
100. [获取考勤流程设置 动作设置 (`POST` `/api/kq/wfSetting/statesShedule/getStateProcSetFlowWfSet`)](#100-获取考勤流程设置-动作设置)
101. [获取考勤流程设置 字段对应信息 (`POST` `/api/kq/wfSetting/statesShedule/getStateProcSetFlowWfFields`)](#101-获取考勤流程设置-字段对应信息)
102. [获取考勤流程设置 流程概览信息 (`POST` `/api/kq/wfSetting/statesShedule/getStateProcSetFlowForm`)](#102-获取考勤流程设置-流程概览信息)
103. [获取考勤流程设置的 tab页签数据 (`POST` `/api/kq/wfSetting/statesShedule/getStateProcSetTabInfo`)](#103-获取考勤流程设置的-tab页签数据)
104. [获取考勤流程设置的查询列表 (`POST` `/api/kq/wfSetting/statesShedule/getStateProcSetListSearchList`)](#104-获取考勤流程设置的查询列表)
105. [获取考勤流程设置的查询条件 (`GET` `/api/kq/wfSetting/statesShedule/getStateProcSetListSearchCondition`)](#105-获取考勤流程设置的查询条件)
106. [调休--判断是否有权限 (`GET` `/api/kq/tiaoxiu/getHasRight`)](#106-调休--判断是否有权限)
107. [重新计算考勤报表 (`POST` `/api/kq/report/format`)](#107-重新计算考勤报表)

---

## 接口详细说明

### 1. 一键启用考勤--初始化

- **接口路径 (Endpoint)**: `/api/kq/setupwizard/performInitialization`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 一键启用考勤--初始化`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `excludeRestTime` | `String` | 否 | 是否排除休息时间 |  |
| `index` | `String` | 否 | 索引值，当前初始化的步骤 |  |
| `restTime` | `String` | 否 | 下班时间 |  |
| `restTime_end` | `String` | 否 | 休息结束时间 |  |
| `restTime_start` | `String` | 否 | 休息开始时间 |  |
| `workDate` | `String` | 否 | 工作日是一周中的哪几天 |  |
| `workTime` | `String` | 否 | 上班时间 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `description` | `Json` | 具体的初始化信息 |
| `sketch` | `String` | 提示信息 |
| `status` | `String` | -1：初始化失败、1：成功 |
| `url` | `String` | 单页地址 |

#### 响应示例 (Response Example)

```json
{
  "description": [
    "年假假期余额初始化成功"
  ],
  "api_status": true,
  "sketch": "假期余额初始化成功",
  "url": "/spa/hrm/staticAttendance4engine/engine.html#/attendance/vacationBalance",
  "status": "1"
}
```

---

### 2. 一键启用考勤--判断是否具有权限

- **接口路径 (Endpoint)**: `/api/kq/setupwizard/getHasRight`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 一键启用考勤--判断是否具有权限`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `hasRight` | `Bool` | true-接口正常、false-接口异常 |
| `status` | `Bool` | true-有权限、false-没有权限 |

#### 响应示例 (Response Example)

```json
{
  "hasRight": true,
  "status": "1"
}
```

---

### 3. 一键启用考勤--获取单个步骤

- **接口路径 (Endpoint)**: `/api/kq/setupwizard/getSetupSteps`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 一键启用考勤--获取单个步骤`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `items` | `Json` | 单个步骤的标题 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "items": [
    {
      "title": "班次"
    },
    {
      "title": "考勤组"
    },
    {
      "title": "考勤流程"
    },
    {
      "title": "节假日"
    },
    {
      "title": "加班规则"
    },
    {
      "title": "出差公出规则"
    },
    {
      "title": "假期规则"
    },
    {
      "title": "假期余额"
    }
  ]
}
```

---

### 4. 一键启用考勤--获取表单

- **接口路径 (Endpoint)**: `/api/kq/setupwizard/getSetupForm`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 一键启用考勤--获取表单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `condition` | `Json` | 表单JSON |
| `datas` | `Json` | 具体的操作说明 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "items": [
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": true,
            "linkUrl": "",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "时间",
            "type": "19",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "TIMEPICKER",
          "detailtype": 1,
          "domkey": [
            "workTime"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "上班时间",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": true,
            "linkUrl": "",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "时间",
            "type": "19",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "TIMEPICKER",
          "detailtype": 1,
          "domkey": [
            "restTime"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "下班时间",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "excludeRestTime"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "排除休息时间",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "display": "switch"
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "TIMERANGEPICKER",
          "detailtype": 1,
          "domkey": [
            "restTime_start",
            "restTime_end"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "休息开始",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 2,
          "domkey": [
            "workDate"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "工作日期",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": false,
              "showname": "星期一",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "星期二",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "星期三",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "星期四",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "星期五",
              "visible": true
            },
            {
              "disabled": false,
              "key": "5",
              "selected": false,
              "showname": "星期六",
              "visible": true
            },
            {
              "disabled": false,
              "key": "6",
              "selected": false,
              "showname": "星期日",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "0,1,2,3,4",
          "viewAttr": 2
        }
      ]
    }
  ],
  "datas": [
    {
      "title": "班次",
      "key": "1",
      "desc": [
        "本次初始化将新建一个【班次】，所新建的班次的上班时间、下班时间、休息时段均取自本页面的上班时间、下班时间、休息时段；若此前已经初始化过，则根据本次设置的上班时间、下班时间、休息时段更新此前新建过的【班次】"
      ]
    },
    {
      "title": "考勤组",
      "key": "2",
      "desc": [
        "本次初始化将新建一个【考勤组】，所新建的考勤组的考勤类型为固定班制(即每周的工作日固定，且每一个工作日的工作时间也固定)，工作日的设置取自本页面所勾选的工作日期，每个工作日的工作时间取自上一步的【班次】，考勤组成员默认取全公司所有人(即默认设置所有人按照此考勤组的工作日以及工作时间进行考勤)，若此前已经初始化过，将根据本次的设置更新此前新建的【考勤组】"
      ]
    },
    {
      "title": "节假日",
      "key": "3",
      "desc": [
        "本次初始化将根据国家规定，自动为上一步新建的【考勤组】设置本年度的公众假日、调配工作日和调配休息日",
        "注：此功能需服务器能够链接外网，否则获取不到网络数据，无法自动生成节假日数据"
      ]
    },
    {
      "title": "考勤流程",
      "key": "4",
      "desc": [
        "本次初始化将新建如下几条考勤流程：请假流程、出差流程、公出流程、加班流程、排班流程、补卡流程、销假流程，并且会自动完成与考勤的字段对应(如若没有将流程与考勤字段正确对应，则无法将流程数据统计为考勤数据)",
        "注：因每个公司的流程流转节点以及流程的节假操作者各有不同，所以初始化无法为考勤流程设置好节点以及节点操作者，如若想正常启用考勤流程，还需要设置好考勤流程的考勤节点以及节点操作者"
      ]
    },
    {
      "title": "加班规则",
      "key": "5",
      "desc": [
        "本次初始化将新建一个【加班规则】，并关联本次初始化所新建的【考勤组】(即考勤内的成员会按照此加班规则的规则内容生成加班调休数据)。具体规则如下所示：",
        "允许工作日加班，但是需审批，以加班流程为准，下班后30分钟开始计算加班，最小加班时长为30分钟，允许加班转调休，加班时长与调休时长的比例为1:1",
        "允许休息日加班，但是需审批，以加班流程为准，最小加班时长为30分钟，允许加班转调休，加班时长与调休时长的比例为1:1",
        "允许节假日加班，但是需审批，以加班流程为准，最小加班时长为30分钟，允许加班转调休，加班时长与调休时长的比例为1:1"
      ]
    },
    {
      "title": "出差公出规则",
      "key": "6",
      "desc": [
        "本次初始化将更新出差规则为：按天出差，按工作日计算出差时长",
        "本次初始化将更新公出规则为：按天公出，按工作日计算公出时长"
      ]
    },
    {
      "title": "假期规则",
      "key": "7",
      "desc": [
        "年假-初始化：按照国家规定职工工龄已满1年不满10年的，年休假5天；已满10年不满20年的，年休假10天；已满20年的，年休假15天",
        "带薪事假-初始化：不限制余额，按天请假，按照工作日计算请假时长",
        "带薪病假-初始化：不限制余额，按天请假，按照工作日计算请假时长",
        "调休-初始化：根据加班时长自动累加",
        "事假-初始化：不限制余额，按天请假，按照工作日计算请假时长",
        "病假-初始化：不限制余额，按天请假，按照工作日计算请假时长",
        "产假-初始化：不限制余额，按天请假，按照自然日计算请假时长",
        "陪产假-初始化：不限制余额，按天请假，按照自然日计算请假时长",
        "婚假-初始化：不限制余额，按天请假，按照工作日计算请假时长",
        "丧假-初始化：不限制余额，按天请假，按照工作日计算请假时长",
        "哺乳假-初始化：不限制余额，按天请假，按照工作日计算请假时长"
      ]
    },
    {
      "title": "假期余额",
      "key": "8",
      "desc": [
        "根据年假-初始化的假期规则为全公司的人批量生成的本年度的假期余额数据"
      ]
    }
  ],
  "api_status": true
}
```

---

### 5. 一键启用考勤-右键菜单

- **接口路径 (Endpoint)**: `/api/kq/setupwizard/getRightMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 一键启用考勤-右键菜单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `isInitResult` | `String` | 否 | 是否是初始化结果页签，是的话没有初始化按钮 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `btnMenu` | `Json` | 右键菜单的JSON |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "btnMenu": [
    {
      "isTop": "1",
      "menuFun": "startInit",
      "menuIcon": "icon-coms-Flow-setting",
      "menuName": "开始初始化",
      "type": "BTN_Initialization"
    }
  ]
}
```

---

### 6. 保存考勤流程设置的 字段对应信息

- **接口路径 (Endpoint)**: `/api/kq/wfSetting/statesShedule/saveStateProcSetFlowWfFields`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 保存考勤流程设置的 字段对应信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `field001` | `String` | 否 | 字段对应关系表id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 状态位 |
| `status` | `String` | 状态位 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "status": "1"
}
```

---

### 7. 保存考勤流程设置的 流程概览

- **接口路径 (Endpoint)**: `/api/kq/wfSetting/statesShedule/saveStateProcSetFlow`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 保存考勤流程设置的 流程概览`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `id` | `String` | 否 | 考勤流程设置id |  |
| `templetfile` | `String` | 否 | 模板文件 |  |
| `templetmobilefile` | `String` | 否 | 模板文件（手机版） |  |
| `templetroute` | `String` | 否 | 模板文件路径 |  |
| `usedetail` | `String` | 否 | 是否启用明细 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 状态位 |
| `id` | `String` | 保存后对应id |
| `status` | `String` | 状态位 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "id": "116",
  "status": "1"
}
```

---

### 8. 假期余额--保存修改

- **接口路径 (Endpoint)**: `/api/kq/balanceofleave/saveBalanceOfLeave`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期余额--保存修改`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `datas` | `String` | 否 | 人员和余额数据(JSON字符串) |  |
| `ruleId` | `String` | 否 | 假期类型的ID |  |
| `searchYear` | `String` | 否 | 年份 |  |
| `searchYearSelect` | `String` | 否 | 日期控件的选择值 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `message` | `String` | 提示信息 |
| `sign` | `Bool` | -1：保存失败、1：保存成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 9. 假期类型--保存启用/不启用的假期类型

- **接口路径 (Endpoint)**: `/api/kq/leavetypes/saveDisableLeaveTypes`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期类型--保存启用/不启用的假期类型`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `datas` | `Json` | 否 | 假期类型时启用或者不启用 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：保存失败、1：保存成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 10. 假期类型--删除

- **接口路径 (Endpoint)**: `/api/kq/leavetypes/deleteLeaveTypes`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期类型--删除`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `typeIds` | `String` | 否 | 需要删除的假期类型的ID，多个ID用英文逗号分隔 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：删除失败、1：删除成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "删除成功"
}
```

---

### 11. 假期类型--判断是否有权限

- **接口路径 (Endpoint)**: `/api/kq/leavetypes/getHasRight`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期类型--判断是否有权限`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `hasRight` | `Bool` | true-有权限、false-没有权限 |

#### 响应示例 (Response Example)

```json
{
  "hasRight": true,
  "api_status": true
}
```

---

### 12. 假期类型--新建假期类型

- **接口路径 (Endpoint)**: `/api/kq/leavetypes/addLeaveTypes`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期类型--新建假期类型`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `balanceEnable` | `String` | 否 | 是否开启假期余额控制：0-未开启、1-已开启 |  |
| `computingMode` | `String` | 否 | 请假时长计算方式：1-按工作日、2-按自然日 |  |
| `hoursToDay` | `String` | 否 | 日折算时长 |  |
| `leaveName` | `String` | 否 | 假期类型的名称 |  |
| `minimumUnit` | `String` | 否 | 最小请假时长：1-天、2-半天、3-小时、4-整天 |  |
| `scopeType` | `String` | 否 | 应用范围：0-总部、1-分部 |  |
| `scopeValue` | `String` | 否 | 当scopeType为分部代表分部ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：保存失败、1：保存成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 13. 假期类型--编辑假期类型

- **接口路径 (Endpoint)**: `/api/kq/leavetypes/editLeaveTypes`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期类型--编辑假期类型`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `balanceEnable` | `String` | 否 | 是否开启余额控制：0-未开启、1-开启 |  |
| `computingMode` | `String` | 否 | 请假时长计算方式：1-按工作日、2-按自然日 |  |
| `hoursToDay` | `String` | 否 | 日折算时长 |  |
| `leaveName` | `String` | 否 | 假期类型的名称 |  |
| `minimumUnit` | `String` | 否 | 最小请假时长：1-按天、2-半天、3-小时、4-整天 |  |
| `proportion` | `String` | 否 | 由天切换成小时或者由小时切换成天时的转换比例。一天=?小时 |  |
| `scopeType` | `String` | 否 | 应用范围：0-总部、1-分部 |  |
| `scopeValue` | `String` | 否 | scopeType为分部时代表分部ID |  |
| `typeId` | `String` | 否 | 假期类型的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：保存失败，1：保存成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 14. 假期类型--获取假期类型列表

- **接口路径 (Endpoint)**: `/api/kq/leavetypes/getSearchList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期类型--获取假期类型列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `balanceEnable` | `String` | 否 | 是否开启假期余额控制：0-未开启、1-开启了 |  |
| `computingMode` | `String` | 否 | 请假时长计算方式：1-按工作日、2-按自然日 |  |
| `leaveName` | `String` | 否 | 假期类型的名称 |  |
| `minimumUnit` | `String` | 否 | 最小请假时长 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `sessionkey` | `String` | 分页组件所需的sessionkey |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "ff6a16be-57bc-002d-6223-600b9031e252_BD2611713F00F949DCA4F51CAA184D5C",
  "api_status": true
}
```

---

### 15. 假期类型--获取右键菜单

- **接口路径 (Endpoint)**: `/api/kq/leavetypes/getRightMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期类型--获取右键菜单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `btnMenu` | `Json` | 右键菜单的JSON |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "btnMenu": [
    {
      "isTop": "1",
      "menuFun": "new",
      "menuIcon": "icon-coms-New-Flow",
      "menuName": "新建",
      "type": "BTN_Addnew"
    },
    {
      "isTop": "1",
      "menuFun": "save",
      "menuIcon": "icon-coms-Preservation",
      "menuName": "保存",
      "type": "BTN_Save"
    },
    {
      "isBatch": "1",
      "isTop": "1",
      "menuFun": "batchDelete",
      "menuIcon": "icon-coms-Batch-delete",
      "menuName": "批量删除",
      "type": "BTN_BatchDelete"
    },
    {
      "isTop": "0",
      "menuFun": "log",
      "menuIcon": "icon-coms-Print-log",
      "menuName": "日志",
      "type": "BTN_log"
    },
    {
      "isTop": "0",
      "menuFun": "custom",
      "menuIcon": "icon-coms-task-list",
      "menuName": "显示列定制",
      "type": "BTN_COLUMN"
    }
  ]
}
```

---

### 16. 假期类型--获取新建或编辑的表单

- **接口路径 (Endpoint)**: `/api/kq/leavetypes/getLeaveTypesForm`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期类型--获取新建或编辑的表单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `typeId` | `String` | 否 | 假期类型的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `condition` | `Json` | 表单JSON |
| `isEnable` | `Bool` | 本假期类型是否启用 |
| `minimumUnit` | `Json` | 最小请假时长 的说明信息 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "leaveName"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "假期名称",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "调休",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "scopeType"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTip": "此应用范围仅作用于控制流程中哪些人员能选择此假期，但余额设置和报表中无论是不是此应用范围中的人均会显示此假期",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "流程可见范围",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "总部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "分部",
              "visible": true
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {
              "rightStr": "KQLeaveRulesAdd:Add"
            },
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "/spa/hrm/engine.html#/hrmengine/organization?showTree=false&type=subcompany&id=",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "tabs": [
              {
                "isSearch": false,
                "key": "2",
                "name": "组织结构",
                "selected": false,
                "showOrder": 0
              },
              {
                "dataParams": {
                  "list": "1"
                },
                "isSearch": true,
                "key": "1",
                "name": "按列表",
                "selected": false,
                "showOrder": 0
              }
            ],
            "title": "分权多分部",
            "type": "170",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "scopeValue"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "分部",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "minimumUnit"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "请假单位",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "按天请假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "按半天请假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": true,
              "showname": "按小时请假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "按整天请假",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "proportion"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "余额单位变更时的换算比例",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 2,
          "rules": "required|numeric",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 8.0,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "computingMode"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "计算请假时长方式",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": true,
              "showname": "按工作日计算请假时长",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "按自然日计算请假时长",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "hoursToDay"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "日折算时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "0",
          "multiSelection": false,
          "multiple": false,
          "precision": 2,
          "rules": "required|numeric",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 8.0,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "balanceEnable"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTip": "该假期类型下存在假期规则时，不允许关闭",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "启用假期余额",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "display": "switch"
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "1",
          "viewAttr": 1
        }
      ]
    }
  ],
  "api_status": true,
  "minimumUnit": [
    "员工以0.01天为最小单位选择时间，考勤报表按天统计",
    "员工以半天为最小单位选择时间，考勤报表按天统计",
    "员工以1分钟为最小单位选择时间，考勤报表按小时统计",
    "员工以1天为最小单位选择时间，考勤报表按天统计"
  ],
  "isEnable": true
}
```

---

### 17. 假期类型--获取查询条件

- **接口路径 (Endpoint)**: `/api/kq/leavetypes/getSearchCondition`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期类型--获取查询条件`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `condition` | `Json` | 查询条件的表单JSON |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "title": "高级搜索",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "leaveName"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "假期名称",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "minimumUnit"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "请假单位",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "全部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "按天请假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "按半天请假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "按小时请假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "按整天请假",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "computingMode"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "计算请假时长方式",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "全部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "按工作日计算请假时长",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "按自然日计算请假时长",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "balanceEnable"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "启用假期余额",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "-1",
              "selected": true,
              "showname": "全部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "0",
              "selected": false,
              "showname": "未启用",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "启用",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        }
      ]
    }
  ],
  "api_status": true
}
```

---

### 18. 假期规则--删除

- **接口路径 (Endpoint)**: `/api/kq/leaverules/deleteLeaveRules`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期规则--删除`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ruleIds` | `String` | 否 | 需要删除的ID，多个ID用英文逗号分隔 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：删除失败、1：删除成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "删除成功"
}
```

---

### 19. 假期规则--判断是否权限

- **接口路径 (Endpoint)**: `/api/kq/leaverules/getHasRight`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期规则--判断是否权限`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `hasRight` | `Bool` | true--有权限、fasle--没有权限 |

#### 响应示例 (Response Example)

```json
{
  "hasRight": true,
  "api_status": true
}
```

---

### 20. 假期规则--新建假期规则

- **接口路径 (Endpoint)**: `/api/kq/leaverules/addLeaveRules`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期规则--新建假期规则`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `annualAmount` | `String` | 否 | 每人发放小时(天)数(当余额发放方式为是每年发放固定天数时有效) |  |
| `calcMethod` | `String` | 否 | 假期基数计算方式 |  |
| `detailRuleLen` | `String` | 否 | 具体规则的条数(当distributionMode=2或者=3时有效) |  |
| `distributionMode` | `String` | 否 | 余额发放方式：1-手动发放、2-按司龄自动发放、3-按工龄自动发放、4-每年自动发放固定天数、5-加班时长自动计入余额、6-按工龄+司龄自动发放 |  |
| `expirationDay` | `String` | 否 | 失效日期--月（当有效期规则选择自定义次年失效日期时有效） |  |
| `expirationMonth` | `String` | 否 | 失效日期--日（当有效期规则选择自定义次年失效日期时有效） |  |
| `extendedDays` | `String` | 否 | 允许超过有效期天数 |  |
| `extensionEnable` | `String` | 否 | 允许延长有效期：0-不允许、1-允许 |  |
| `priority` | `String` | 否 | 扣减优先级：1-法定年假、2-福利年假(当余额发放方式为按工龄+司龄自动发放时有效) |  |
| `releaseRule` | `String` | 否 | 释放规则：0-不限制、1-按天释放、2-按月释放 |  |
| `ruleName` | `String` | 否 | 假期规则名称 |  |
| `scopeType` | `String` | 否 | 应用范围：0-总部、1-分部 |  |
| `scopeValue` | `String` | 否 | 当scopeType为分部时代表分部ID |  |
| `typeId` | `String` | 否 | 假期类型的ID |  |
| `validityRule` | `String` | 否 | 有效期规则：0-永久有效、1-按自然年（1月1日-12月31日）、2-按入职日期起12个月、3-自定义次年失效日期、4、按天数失效、5-按季度失效、6-按月数失效 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true--接口正常、false--接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：保存成功、1：保存失败 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 21. 假期规则--编辑

- **接口路径 (Endpoint)**: `/api/kq/leaverules/editLeaveRules`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期规则--编辑`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `annualAmount` | `String` | 否 | 每人发放小时(天)数(当余额发放方式为是每年发放固定天数时有效) |  |
| `calcMethod` | `String` | 否 | 假期基数计算方式 |  |
| `detailRuleLen` | `String` | 否 | 具体规则的条数(当distributionMode=2或者=3时有效) |  |
| `distributionMode` | `String` | 否 | 余额发放方式：1-手动发放、2-按司龄自动发放、3-按工龄自动发放、4-每年自动发放固定天数、5-加班时长自动计入余额、6-按工龄+司龄自动发放 |  |
| `expirationDay` | `String` | 否 | 失效日期--日（当有效期规则选择自定义次年失效日期时有效） |  |
| `expirationMonth` | `String` | 否 | 失效日期--月（当有效期规则选择自定义次年失效日期时有效） |  |
| `extendedDays` | `String` | 否 | 允许超过有效期天数 |  |
| `extensionEnable` | `String` | 否 | 允许延长有效期：0-不允许、1-允许 |  |
| `priority` | `String` | 否 | 扣减优先级：1-法定年假、2-福利年假(当余额发放方式为按工龄+司龄自动发放时有效) |  |
| `releaseRule` | `String` | 否 | 释放规则：0-不限制、1-按天释放、2-按月释放 |  |
| `ruleId` | `String` | 否 | 假期规则的ID |  |
| `ruleName` | `String` | 否 | 假期规则的名字 |  |
| `scopeType` | `String` | 否 | 应用范围：0-总部、1-分部 |  |
| `scopeValue` | `String` | 否 | scopeType为分部时代表分部ID |  |
| `typeId` | `String` | 否 | 假期类型的ID |  |
| `validityRule` | `String` | 否 | 有效期规则：0-永久有效、1-按自然年（1月1日-12月31日）、2-按入职日期起12个月、3-自定义次年失效日期、4、按天数失效、5-按季度失效、6-按月数失效 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | 1：保存成功、-1：保存失败 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 22. 假期规则--获取假期类型的请假时长的单位

- **接口路径 (Endpoint)**: `/api/kq/leaverules/getUnitName`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期规则--获取假期类型的请假时长的单位`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `typeId` | `String` | 否 | 假期类型的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `unitName` | `String` | 天、半天、小时、整天 |

#### 响应示例 (Response Example)

```json
{
  "unitName": "天",
  "api_status": true
}
```

---

### 23. 假期规则--获取假期规则的列表

- **接口路径 (Endpoint)**: `/api/kq/leaverules/getSearchList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期规则--获取假期规则的列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ruleName` | `String` | 否 | 假期规则的名称 |  |
| `typeId` | `String` | 否 | 假期类型的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `sessionkey` | `String` | 分页组件所需的sessionkey |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "b0c005a2-447f-0977-b692-6d8de7ead576_80DD280295373830FF9CAC5BE396CA4D",
  "api_status": true
}
```

---

### 24. 假期规则--获取右键菜单

- **接口路径 (Endpoint)**: `/api/kq/leaverules/getRightMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期规则--获取右键菜单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `btnMenu` | `Json` | 右键菜单的JSON数据 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "btnMenu": [
    {
      "isTop": "1",
      "menuFun": "new",
      "menuIcon": "icon-coms-New-Flow",
      "menuName": "新建",
      "type": "BTN_Addnew"
    },
    {
      "isBatch": "1",
      "isTop": "1",
      "menuFun": "batchDelete",
      "menuIcon": "icon-coms-Batch-delete",
      "menuName": "批量删除",
      "type": "BTN_BatchDelete"
    },
    {
      "isTop": "0",
      "menuFun": "log",
      "menuIcon": "icon-coms-Print-log",
      "menuName": "日志",
      "type": "BTN_log"
    },
    {
      "isTop": "0",
      "menuFun": "custom",
      "menuIcon": "icon-coms-task-list",
      "menuName": "显示列定制",
      "type": "BTN_COLUMN"
    }
  ]
}
```

---

### 25. 假期规则--获取新建或者编辑的表单

- **接口路径 (Endpoint)**: `/api/kq/leaverules/getLeaveRulesForm`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期规则--获取新建或者编辑的表单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ruleId` | `String` | 否 | 假期规则的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `calcMethod` | `Json` | 假期基数计算方式 的说明 |
| `condition` | `Json` | 表单的JSON |
| `distributionMode` | `Json` | 余额发放方式 的说明 |
| `isEnable` | `String` | 是否启用：0-未启用、1-启用 |
| `legalKey` | `String` | 法定年假规则：0-工龄、1-司龄、2-工龄+司龄 (当余额发放方式为按工龄+司龄自动发放时有效) |
| `legalRule` | `Json` | 法定年假的具体规则 |
| `unitName` | `String` | 假期类型的请假时长单位 |
| `welfareKey` | `String` | 福利年假规则：0-工龄、1-司龄、2-工龄+司龄 (当余额发放方式为按工龄+司龄自动发放时有效) |
| `welfareRule` | `Json` | 福利年假的具体规则 |

#### 响应示例 (Response Example)

```json
{
  "calcMethod": [
    "以入职日期(或参加工作日期)为分隔点将一年划分为上半年和下半年，全年可用假期天数=上半年天数/全年总天数*上半年司龄(或工龄)对应的假期天数+下半年天数/全年总天数*下半年司龄(或工龄)对应的假期天数。每年1月1日自动发放假期天数。",
    "每年1月1日计算员工的司龄(或工龄)，取对应的假期天数，于1月1日自动发放。",
    "每年1月1日计算员工的司龄(或工龄)，取对应的假期天数，于1月1日自动发放。若一年中员工司龄(或工龄)增加后，对应的假期天数也随之增加，则自动补发增加的假期天数。"
  ],
  "welfareRule": [],
  "condition": [
    {
      "title": "基本信息",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "typeId"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTip": "只能选择启用状态下开启了假期余额的假期类型，并且编辑假期规则时不能变更假期类型",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "假期类型",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "3",
              "selected": true,
              "showname": "带薪事假-初始化",
              "visible": true
            }
          ],
          "otherParams": {
            "hasBorder": true
          },
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "3",
          "viewAttr": 1
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "ruleName"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "规则名称",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "~`~`7 年休假规则`~`9 帶薪事假規則`~`~",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "scopeType"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTip": "只能选择启用状态下开启了假期余额的假期类型，并且编辑假期规则时不能变更假期类型",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "应用范围",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "总部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "分部",
              "visible": true
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {
              "rightStr": "KQLeaveRulesAdd:Add"
            },
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "/spa/hrm/engine.html#/hrmengine/organization?showTree=false&type=subcompany&id=",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "tabs": [
              {
                "isSearch": false,
                "key": "2",
                "name": "组织结构",
                "selected": false,
                "showOrder": 0
              },
              {
                "dataParams": {
                  "list": "1"
                },
                "isSearch": true,
                "key": "1",
                "name": "按列表",
                "selected": false,
                "showOrder": 0
              }
            ],
            "title": "分权多分部",
            "type": "170",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "scopeValue"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "分部",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        }
      ]
    },
    {
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "distributionMode"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTip": "★加班时长自动计入余额只能应用于一个假期上★“按司龄+工龄自动发放”不能与其他方式相互切换",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "余额发放方式",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "手动发放",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "按司龄自动发放",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "按工龄自动发放",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "每年自动发放固定余额",
              "visible": true
            },
            {
              "disabled": false,
              "key": "5",
              "selected": false,
              "showname": "加班时长自动计入余额",
              "visible": true
            },
            {
              "disabled": false,
              "key": "6",
              "selected": true,
              "showname": "按工龄+司龄自动发放假期余额",
              "visible": true
            }
          ],
          "otherParams": {
            "hasBorder": true
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 1
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "calcMethod"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "假期基数计算方式",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "精确计算",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "按最少的假期余额计算",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "按最多的假期余额计算",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "priority"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "优先级别",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": true,
              "showname": "法定年假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "福利年假",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "annualAmount"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "每人发放余额",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 1.0,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "convertMode"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "null",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": false,
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "四舍五入",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "visible": true
            },
            {
              "disabled": false,
              "key": "5",
              "selected": false,
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        }
      ]
    },
    {
      "title": "有效期",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "validityRule"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "有效期规则",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "不设有效期，默认永久有效",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "按自然年（1月1日-12月31日）",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "按入职日期起12个月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "自定义次年失效日期",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "effectiveDays"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "有效天数",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "expirationMonth"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "次年失效日期",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": true,
              "showname": "1月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "2月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "3月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "4月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "5",
              "selected": false,
              "showname": "5月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "6",
              "selected": false,
              "showname": "6月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "7",
              "selected": false,
              "showname": "7月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "8",
              "selected": false,
              "showname": "8月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "9",
              "selected": false,
              "showname": "9月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "10",
              "selected": false,
              "showname": "10月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "11",
              "selected": false,
              "showname": "11月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "12",
              "selected": false,
              "showname": "12月",
              "visible": true
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "1",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "expirationDay"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "次年失效日期",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": true,
              "showname": "1日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "2日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "3日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "4日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "5",
              "selected": false,
              "showname": "5日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "6",
              "selected": false,
              "showname": "6日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "7",
              "selected": false,
              "showname": "7日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "8",
              "selected": false,
              "showname": "8日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "9",
              "selected": false,
              "showname": "9日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "10",
              "selected": false,
              "showname": "10日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "11",
              "selected": false,
              "showname": "11日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "12",
              "selected": false,
              "showname": "12日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "13",
              "selected": false,
              "showname": "13日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "14",
              "selected": false,
              "showname": "14日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "15",
              "selected": false,
              "showname": "15日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "16",
              "selected": false,
              "showname": "16日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "17",
              "selected": false,
              "showname": "17日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "18",
              "selected": false,
              "showname": "18日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "19",
              "selected": false,
              "showname": "19日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "20",
              "selected": false,
              "showname": "20日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "21",
              "selected": false,
              "showname": "21日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "22",
              "selected": false,
              "showname": "22日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "23",
              "selected": false,
              "showname": "23日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "24",
              "selected": false,
              "showname": "24日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "25",
              "selected": false,
              "showname": "25日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "26",
              "selected": false,
              "showname": "26日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "27",
              "selected": false,
              "showname": "27日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "28",
              "selected": false,
              "showname": "28日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "29",
              "selected": false,
              "showname": "29日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "30",
              "selected": false,
              "showname": "30日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "31",
              "selected": false,
              "showname": "31日",
              "visible": true
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "1",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "extensionEnable"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "允许延长有效期",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "display": "switch"
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 0,
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "extendedDays"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "允许延长的天数",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 90,
          "viewAttr": 3
        }
      ]
    },
    {
      "title": "其他设置",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "releaseRule"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTip": "用于假期余额中本年假期余额的计算",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "释放规则",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "不限制",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "按天",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "按月",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "excludeSubAccount"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "null",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "display": "switch"
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": -1,
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "beforeFormal"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "null",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "display": "switch"
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": -1,
          "viewAttr": 2
        }
      ]
    }
  ],
  "legalRule": [],
  "unitName": "天",
  "legalKey": "",
  "welfareKey": "",
  "api_status": true,
  "distributionMode": [
    "可批量导入全员的年假，员工请假自动扣减 <font color=\"#FF0000\"><b>必须维护人员的入职日期才能使用此发放方式</b></font>",
    "可根据员工司龄自动发放假期余额 <font color=\"#FF0000\"><b>必须维护人员的入职日期才能使用此发放方式</b></font>",
    "可根据员工工龄自动发放假期余额 <font color=\"#FF0000\"><b>必须维护人员的入职日期和参加工作日期才能使用此发放方式</b></font>",
    "自动给全公司员工发放固定天数余额 <font color=\"#FF0000\"><b>必须维护人员的入职日期才能使用此发放方式</b></font>",
    "适用于调休余额，且只能用在一个假期上 <font color=\"#FF0000\"><b>必须维护人员的入职日期才能使用此发放方式</b></font>",
    "可根据员工工龄+司龄自动发放假期余额 <font color=\"#FF0000\"><b>必须维护人员的入职日期和参加工作日期才能使用此发放方式</b></font>"
  ],
  "isEnable": "1"
}
```

---

### 26. 假期规则--获取高级搜索的表单

- **接口路径 (Endpoint)**: `/api/kq/leaverules/getSearchCondition`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 假期规则--获取高级搜索的表单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `condition` | `Json` | 高级搜索的表单JSON |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "title": "高级搜索",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "ruleName"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "规则名称",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "typeId"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "假期类型",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "-13",
              "selected": false,
              "showname": "调休",
              "visible": true
            },
            {
              "disabled": false,
              "key": "-12",
              "selected": false,
              "showname": "带薪病假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "-6",
              "selected": false,
              "showname": "年假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "年假-初始化",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "带薪事假-初始化",
              "visible": true
            },
            {
              "disabled": false,
              "key": "5",
              "selected": false,
              "showname": "调休-初始化",
              "visible": true
            },
            {
              "disabled": false,
              "key": "13",
              "selected": false,
              "showname": "pfl假期规则1",
              "visible": true
            },
            {
              "disabled": false,
              "key": "125",
              "selected": false,
              "showname": "探亲假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "128",
              "selected": false,
              "showname": "产假看护假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "129",
              "selected": false,
              "showname": "哺乳假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "130",
              "selected": false,
              "showname": "丧假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "131",
              "selected": false,
              "showname": "儿童陪护假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "132",
              "selected": false,
              "showname": "带薪事假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "134",
              "selected": false,
              "showname": "带薪事假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "135",
              "selected": false,
              "showname": "额外年假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "137",
              "selected": false,
              "showname": "带薪事假",
              "visible": true
            },
            {
              "disabled": false,
              "key": "138",
              "selected": false,
              "showname": "年假-czj",
              "visible": true
            },
            {
              "disabled": false,
              "key": "139",
              "selected": false,
              "showname": "事假-czj",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        }
      ]
    }
  ],
  "api_status": true
}
```

---

### 27. 公出出差规则--保存

- **接口路径 (Endpoint)**: `/api/kq/travelrules/saveTravelRules`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 公出出差规则--保存`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `computingMode` | `String` | 否 | 计算出差时长方式：1-按工作日计算出差时长、2-按自然日计算出差时长 |  |
| `exit_computingMode` | `String` | 否 | 计算公出时长方式：1-按工作日计算出差时长、2-按自然日计算出差时长 |  |
| `exit_hoursToDay` | `String` | 否 | 公出规则的日折算时长 |  |
| `exit_minimumUnit` | `String` | 否 | 最小公出单位：1-按天公出、2-按半天公出、3-按小时公出、4-按整天公出 |  |
| `exit_proportion` | `String` | 否 | 公出规则的换算比例(当单位由天、半天、整天切换成小时或者由小时切换成天、半天、整天时，历史数据的转换比例) |  |
| `hoursToDay` | `String` | 否 | 出差规则的日折算时长 |  |
| `minimumUnit` | `String` | 否 | 最小出差单位：1-按天出差、2-按半天出差、3-按小时出差、4-按整天出差 |  |
| `proportion` | `String` | 否 | 出差规则的换算比例(当单位由天、半天、整天切换成小时或者由小时切换成天、半天、整天时，历史数据的转换比例) |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、fasle-接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：保存失败、1：保存成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 28. 公出出差规则--判断是否有权限

- **接口路径 (Endpoint)**: `/api/kq/travelrules/getHasRight`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 公出出差规则--判断是否有权限`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `hasRight` | `Bool` | true-有、false-没有权限 |

#### 响应示例 (Response Example)

```json
{
  "hasRight": true,
  "api_status": true
}
```

---

### 29. 公出出差规则--获取右键菜单

- **接口路径 (Endpoint)**: `/api/kq/travelrules/getRightMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 公出出差规则--获取右键菜单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true：接口正常、false：接口异常 |
| `btnMenu` | `Json` | 右键菜单的JSON数据 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "btnMenu": [
    {
      "isTop": "1",
      "menuFun": "save",
      "menuIcon": "icon-coms-Preservation",
      "menuName": "保存",
      "type": "BTN_Save"
    },
    {
      "isTop": "0",
      "menuFun": "log",
      "menuIcon": "icon-coms-Print-log",
      "menuName": "日志",
      "type": "BTN_log"
    }
  ]
}
```

---

### 30. 公出出差规则--获取表单

- **接口路径 (Endpoint)**: `/api/kq/travelrules/getTravelRulesForm`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 公出出差规则--获取表单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `condition` | `Json` | 表单JSON |
| `exit_hoursToDay_Tips` | `Json` | 公出规则的日这算时长的 说明 |
| `exit_minimumUnit` | `Json` | 公出规则的最小公出单位的 说明 |
| `exit_proportion_Tips` | `Json` | 公出规则的转换比例的 说明 |
| `hoursToDay_Tips` | `Json` | 出差规则的日折算时长的 说明 |
| `minimumUnit` | `Json` | 出差规则的最小出差单位的 说明 |
| `proportion_Tips` | `Json` | 出差规则的转换比例的 说明 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "title": "出差规则",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "minimumUnit"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "最小出差单位",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "按天出差",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "按半天出差",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": true,
              "showname": "按小时出差",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "按整天出差",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "proportion"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "余额单位变更时的换算比例",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 2,
          "rules": "required|numeric",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 8.0,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "computingMode"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "计算出差时长方式",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "按工作日计算出差时长",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": true,
              "showname": "按自然日计算出差时长",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "hoursToDay"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "日折算时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 2,
          "rules": "required|numeric",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 8.0,
          "viewAttr": 3
        }
      ]
    },
    {
      "title": "公出规则",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "exit_minimumUnit"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "最小公出单位",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "按天公出",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "按半天公出",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": true,
              "showname": "按小时公出",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "按整天公出",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "exit_proportion"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "余额单位变更时的换算比例",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 2,
          "rules": "required|numeric",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 8.0,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "exit_computingMode"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "计算公出时长方式",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "按工作日计算公出时长",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": true,
              "showname": "按自然日计算公出时长",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "exit_hoursToDay"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "日折算时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 2,
          "rules": "required|numeric",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 8.0,
          "viewAttr": 3
        }
      ]
    }
  ],
  "hoursToDay_Tips": "出差时长计算方式选择按自然日计算时，需要设置日折算时长，出差流程会根据此日折算时长自动计算出差天数。",
  "exit_minimumUnit": [
    "员工以0.01天为最小单位选择时间，考勤报表按天统计",
    "员工以半天为最小单位选择时间，考勤报表按天统计",
    "员工以1分钟为最小单位选择时间，考勤报表按小时统计",
    "员工以1天为最小单位选择时间，考勤报表按天统计"
  ],
  "exit_proportion_Tips": "当公出单位由天、半天、整天切换成小时或者由小时切换成天、半天、整天时，历史数据会按照此换算比例自动进行换算",
  "exit_hoursToDay_Tips": "公出时长计算方式选择按自然日计算时，需要设置日折算时长，公出流程会根据此日折算时长自动计算公出天数。",
  "api_status": true,
  "minimumUnit": [
    "员工以0.01天为最小单位选择时间，考勤报表按天统计",
    "员工以半天为最小单位选择时间，考勤报表按天统计",
    "员工以1分钟为最小单位选择时间，考勤报表按小时统计",
    "员工以1天为最小单位选择时间，考勤报表按天统计"
  ],
  "proportion_Tips": "当出差单位由天、半天、整天切换成小时或者由小时切换成天、半天、整天时，历史数据会按照此换算比例自动进行换算"
}
```

---

### 31. 删除考勤流程设置

- **接口路径 (Endpoint)**: `/api/kq/wfSetting/statesShedule/delStateProcSet`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 删除考勤流程设置`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ids` | `String` | 否 | 考勤流程设置id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 状态位 |
| `status` | `String` | 状态位 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "status": "1"
}
```

---

### 32. 加班规则--保存加班单位的设置

- **接口路径 (Endpoint)**: `/api/kq/overtimerules/saveOvertimeUnit`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 加班规则--保存加班单位的设置`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `hoursToday` | `String` | 否 | 日折算时长，一天=？小时 |  |
| `minimumUnit` | `String` | 否 | 最小加班单位：1-按天、2-按半天、3-按小时、4-按整天 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true--接口正常、false--接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：保存成功、1：保存失败 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 33. 加班规则--删除

- **接口路径 (Endpoint)**: `/api/kq/overtimerules/deleteOvertimeRules`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 加班规则--删除`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ruleIds` | `String` | 否 | 需要删除的加班规则ID，多个ID用英文逗号隔开 | 15,52 |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true--接口正常、false--接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：删除失败、1：删除成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "删除成功"
}
```

---

### 34. 加班规则--判断是否有权限

- **接口路径 (Endpoint)**: `/api/kq/overtimerules/getHasRight`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 加班规则--判断是否有权限`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true--接口正常、false--接口异常 |
| `hasRight` | `Bool` | true--有权限、false--没有权限 |

#### 响应示例 (Response Example)

```json
{
  "hasRight": true,
  "api_status": true
}
```

---

### 35. 加班规则--新建加班规则

- **接口路径 (Endpoint)**: `/api/kq/overtimerules/addOvertimeRules`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 加班规则--新建加班规则`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `computingMode1` | `String` | 否 | 节假日的加班方式：1-需审批，以审批单为准、2-需审批，以打卡为准，但是不能超过审批时长、3-无需审批，根据打卡时间计算加班时长 |  |
| `computingMode2` | `String` | 否 | 工作日的加班方式：1-需审批，以审批单为准、2-需审批，以打卡为准，但是不能超过审批时长、3-无需审批，根据打卡时间计算加班时长 |  |
| `computingMode3` | `String` | 否 | 休息日的加班方式：1-需审批，以审批单为准、2-需审批，以打卡为准，但是不能超过审批时长、3-无需审批，根据打卡时间计算加班时长 |  |
| `endTime1_0` | `String` | 否 | 节假日的休息结束时间 |  |
| `endTime3_0` | `String` | 否 | 休息日的休息结束时间 |  |
| `groupIds` | `String` | 否 | 考勤组的ID |  |
| `hasRestTime1` | `String` | 否 | 节假日是否有休息时间 |  |
| `hasRestTime3` | `String` | 否 | 休息日是否有休息时间 |  |
| `lenOfLeave1` | `String` | 否 | 节假日加班转调休比例中的调休时长 |  |
| `lenOfLeave2` | `String` | 否 | 工作日加班转调休比例中的调休时长 |  |
| `lenOfLeave3` | `String` | 否 | 休息日加班转调休比例中的调休时长 |  |
| `lenOfOvertime1` | `String` | 否 | 节假日加班转调休比例中的加班时长 |  |
| `lenOfOvertime2` | `String` | 否 | 工作日加班转调休比例中的加班时长 |  |
| `lenOfOvertime3` | `String` | 否 | 休息日加班转调休比例中的加班时长 |  |
| `minimumLen1` | `String` | 否 | 节假日的最小加班时长 |  |
| `minimumLen2` | `String` | 否 | 工作日的最小加班时长 |  |
| `minimumLen3` | `String` | 否 | 休息日的最小加班时长 |  |
| `name` | `String` | 否 | 加班规则的名称 |  |
| `overtimeEnable1` | `String` | 否 | 节假日是否允许加班：0-不允许、1-允许 |  |
| `overtimeEnable2` | `String` | 否 | 工作日是否允许加班：0-不允许、1-允许 |  |
| `overtimeEnable3` | `String` | 否 | 休息日是否允许加班：0-不允许、1-允许 |  |
| `paidLeaveEnable1` | `String` | 否 | 节假日是否允许加班转调休 |  |
| `paidLeaveEnable2` | `String` | 否 | 工作日是否允许加班转调休 |  |
| `paidLeaveEnable3` | `String` | 否 | 休息日是否允许加班转调休 |  |
| `restTimeLen1` | `String` | 否 | 节假日的休息时间的条数 |  |
| `restTimeLen3` | `String` | 否 | 工作平日的休息时间的条数 |  |
| `startTime1_0` | `String` | 否 | 节假日的休息时间的开始时间 |  |
| `startTime2` | `String` | 否 | 工作日下班多少分钟后开始计算加班 |  |
| `startTime3_0` | `String` | 否 | 休息日的休息时间的开始时间 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true：接口正常、false：接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：保存失败、1：保存成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 36. 加班规则--编辑加班规则

- **接口路径 (Endpoint)**: `/api/kq/overtimerules/editOvertimeRules`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 加班规则--编辑加班规则`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `computingMode1` | `String` | 否 | 节假日的加班方式：1-需审批，以审批单为准、2-需审批，以打卡为准，但是不能超过审批时长、3-无需审批，根据打卡时间计算加班时长 |  |
| `computingMode2` | `String` | 否 | 工作日的加班方式：1-需审批，以审批单为准、2-需审批，以打卡为准，但是不能超过审批时长、3-无需审批，根据打卡时间计算加班时长 |  |
| `computingMode3` | `String` | 否 | 休息日的加班方式：1-需审批，以审批单为准、2-需审批，以打卡为准，但是不能超过审批时长、3-无需审批，根据打卡时间计算加班时长 |  |
| `endTime1_0` | `String` | 否 | 节假日的休息时间的结束时间 |  |
| `endTime3_0` | `String` | 否 | 休息日的休息时间的结束时间 |  |
| `groupIds` | `String` | 否 | 考勤组的ID |  |
| `hasRestTime1` | `String` | 否 | 节假日是否有休息时间 |  |
| `hasRestTime3` | `String` | 否 | 休息日是否有休息时间 |  |
| `lenOfLeave1` | `String` | 否 | 节假日加班转调休比例中的调休时长 |  |
| `lenOfLeave2` | `String` | 否 | 工作日加班转调休比例中的调休时长 |  |
| `lenOfLeave3` | `String` | 否 | 休息日加班转调休比例中的调休时长 |  |
| `lenOfOvertime1` | `String` | 否 | 节假日加班转调休比例中的加班时长 |  |
| `lenOfOvertime2` | `String` | 否 | 工作日加班转调休比例中的加班时长 |  |
| `lenOfOvertime3` | `String` | 否 | 休息日加班转调休比例中的加班时长 |  |
| `minimumLen1` | `String` | 否 | 节假日的最小加班时长 |  |
| `minimumLen2` | `String` | 否 | 工作日的最小加班时长 |  |
| `minimumLen3` | `String` | 否 | 休息日的最小加班时长 |  |
| `name` | `String` | 否 | 加班规则的名称 |  |
| `overtimeEnable1` | `String` | 否 | 节假日是否允许加班：0-不允许、1-允许 |  |
| `overtimeEnable2` | `String` | 否 | 工作日是否允许加班：0-不允许、1-允许 |  |
| `overtimeEnable3` | `String` | 否 | 休息日是否允许加班：0-不允许、1-允许 |  |
| `paidLeaveEnable1` | `String` | 否 | 节假日是否允许加班转调休 |  |
| `paidLeaveEnable2` | `String` | 否 | 工作日是否允许加班转调休 |  |
| `paidLeaveEnable3` | `String` | 否 | 休息日是否允许加班转调休 |  |
| `restTimeLen1` | `String` | 否 | 节假日休息时间的条数 |  |
| `restTimeLen3` | `String` | 否 | 休息日休息时间的条数 |  |
| `ruleId` | `String` | 否 | 加班规则的ID |  |
| `startTime1_0` | `String` | 否 | 节假日休息时间的开始时间 |  |
| `startTime2` | `String` | 否 | 工作日下班多少分钟后开始计算加班 |  |
| `startTime3_0` | `String` | 否 | 休息日休息时间的开始时间 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true--接口正常、false--接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：保存失败、1：保存成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 37. 加班规则--获取加班单位的表单

- **接口路径 (Endpoint)**: `/api/kq/overtimerules/getOvertimeUnitForm`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 加班规则--获取加班单位的表单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true--接口正常、false--接口异常 |
| `condition` | `Json` | 表单JSON |
| `minimumUnit` | `Json` | 页面上的提示信息 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "minimumUnit"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "最小加班单位",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "按天加班",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": true,
              "showname": "按半天加班",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "按小时加班",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "按整天加班",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "hoursToday"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "日折算时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 2,
          "rules": "required|numeric",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 8.0,
          "viewAttr": 3
        }
      ]
    }
  ],
  "api_status": true,
  "minimumUnit": [
    "员工以0.01天为最小单位选择时间，考勤报表按天统计",
    "员工以半天为最小单位选择时间，考勤报表按天统计",
    "员工以1分钟为最小单位选择时间，考勤报表按小时统计",
    "员工以1天为最小单位选择时间，考勤报表按天统计"
  ]
}
```

---

### 38. 加班规则--获取加班规则的列表

- **接口路径 (Endpoint)**: `/api/kq/overtimerules/getSearchList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 加班规则--获取加班规则的列表`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `sessionkey` | `String` | 分页组件的sessionkey |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "1b3ad739-67fa-8b1e-1c19-6d37c1a33469_AAA84519C184E7703F910EEDF9C1E2FF",
  "api_status": true
}
```

---

### 39. 加班规则--获取加班规则的右键菜单

- **接口路径 (Endpoint)**: `/api/kq/overtimerules/getRightMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 加班规则--获取加班规则的右键菜单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `tabKey` | `String` | 否 | 是加班规则还是加班单位。1-加班单位 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `btnMenu` | `Json` | 右键菜单的JSON |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "btnMenu": [
    {
      "isTop": "1",
      "menuFun": "new",
      "menuIcon": "icon-coms-New-Flow",
      "menuName": "新建",
      "type": "BTN_Addnew"
    },
    {
      "isBatch": "1",
      "isTop": "1",
      "menuFun": "batchDelete",
      "menuIcon": "icon-coms-Batch-delete",
      "menuName": "批量删除",
      "type": "BTN_BatchDelete"
    },
    {
      "isTop": "0",
      "menuFun": "log",
      "menuIcon": "icon-coms-Print-log",
      "menuName": "日志",
      "type": "BTN_log"
    },
    {
      "isTop": "0",
      "menuFun": "custom",
      "menuIcon": "icon-coms-task-list",
      "menuName": "显示列定制",
      "type": "BTN_COLUMN"
    }
  ]
}
```

---

### 40. 加班规则--获取加班规则的新建或编辑的表单

- **接口路径 (Endpoint)**: `/api/kq/overtimerules/getOvertimeRulesForm`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 加班规则--获取加班规则的新建或编辑的表单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ruleId` | `String` | 否 | 加班规则的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true--接口正常、false--接口异常 |
| `condition` | `Json` | 表单JSON |
| `hasTXrules` | `Bool` | 是否已经新建过调休的假期规则，因为加班规则需要和调休关联 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "title": "基本信息",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "name"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "加班规则名称",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "一般工作时间升级加班规则",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {
              "sqlWhere": " kqType <>3 and id not in (61,3621)"
            },
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "groupname",
            "replaceDatas": [
              {
                "name": "zss排班所有人",
                "id": "5172"
              },
              {
                "name": "项目考勤-fw",
                "id": "5621"
              },
              {
                "name": "测试时段zss",
                "id": "6121"
              },
              {
                "name": "pfl考勤组初始化",
                "id": "6621"
              },
              {
                "name": "固定考勤ron",
                "id": "7121"
              }
            ],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "考勤组",
            "type": "mkqgroup",
            "viewAttr": 2
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "groupIds"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "应用范围",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        }
      ]
    },
    {
      "title": "工作日加班",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "overtimeEnable2"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "允许加班",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "display": "switch"
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "1",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 3,
          "domkey": [
            "computingMode2"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "加班方式计算",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "需审批，以加班流程为准",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": true,
              "showname": "需审批，以打卡为准，但不能超过加班流程时长",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "无需审批，根据打卡时间计算加班时长",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "startTime2"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "加班起算时间",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "0",
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 0,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "minimumLen2"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "最小加班时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 1,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "paidLeaveEnable2"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "加班补偿",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "1",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "lenOfOvertime2"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "加班时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 1,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "lenOfLeave2"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "调休时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 1,
          "viewAttr": 3
        }
      ]
    },
    {
      "title": "休息日加班",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "overtimeEnable3"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "允许加班",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "display": "switch"
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "1",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 3,
          "domkey": [
            "computingMode3"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "加班方式计算",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": true,
              "showname": "需审批，以加班流程为准",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "需审批，以打卡为准，但不能超过加班流程时长",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "无需审批，根据打卡时间计算加班时长",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "minimumLen3"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "最小加班时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 1,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "paidLeaveEnable3"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "加班补偿",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "1",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "lenOfOvertime3"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "加班时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 1,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "lenOfLeave3"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "调休时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 1,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "hasRestTime3"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "排除休息时间",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "display": "switch"
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "0",
          "viewAttr": 2
        }
      ]
    },
    {
      "title": "节假日加班",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "overtimeEnable1"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "允许加班",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "display": "switch"
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "1",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 3,
          "domkey": [
            "computingMode1"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "加班方式计算",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": true,
              "showname": "需审批，以加班流程为准",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "需审批，以打卡为准，但不能超过加班流程时长",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "无需审批，根据打卡时间计算加班时长",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "minimumLen1"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "最小加班时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 1,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "paidLeaveEnable1"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "加班补偿",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "1",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "lenOfOvertime1"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "加班时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 1,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUTNUMBER",
          "detailtype": 1,
          "domkey": [
            "lenOfLeave1"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "调休时长",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "min": "1",
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|integer",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": 1,
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "hasRestTime1"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "排除休息时间",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "display": "switch"
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "0",
          "viewAttr": 2
        }
      ]
    }
  ],
  "hasTXrules": true,
  "api_status": true
}
```

---

### 41. 原始打卡记录--判断是否有权限

- **接口路径 (Endpoint)**: `/api/kq/originalpunchrp/getHasRight`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 原始打卡记录--判断是否有权限`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `hasRight` | `Bool` | true-有权限、false-没有权限 |
| `status` | `String` | 1-接口正常、-1-接口异常 |

#### 响应示例 (Response Example)

```json
{
  "hasRight": true,
  "status": "1"
}
```

---

### 42. 原始打卡记录--获取右键菜单

- **接口路径 (Endpoint)**: `/api/kq/originalpunchrp/getRightMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 原始打卡记录--获取右键菜单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `btnMenu` | `Json` | 右键菜单JSON |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "btnMenu": [
    {
      "isTop": "1",
      "menuFun": "excel",
      "menuIcon": "icon-coms-export",
      "menuName": "导出Excel",
      "type": "BTN_EXPORTEXCEL"
    },
    {
      "isTop": "0",
      "menuFun": "refresh",
      "menuIcon": "icon-coms-Update-synchronization",
      "menuName": "刷新",
      "type": "BTN_KQ_Refresh"
    }
  ]
}
```

---

### 43. 原始打卡记录--获取报表数据

- **接口路径 (Endpoint)**: `/api/kq/originalpunchrp/getSearchList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 原始打卡记录--获取报表数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `allLevel` | `String` | 否 | 是否包含下级下属：0-不包含、1-包含 |  |
| `dataScope` | `String` | 否 | 数据范围：0-总部、1-分部、2-分部、3-人员、4-我的下属 |  |
| `dateScope` | `String` | 否 | 时间范围：5-本年、8-上一年 |  |
| `deptId` | `String` | 否 | 部门ID |  |
| `endDate` | `String` | 否 | 结束日期 |  |
| `isNoAccount` | `String` | 否 | 是否显示无账号人员 |  |
| `resourceId` | `String` | 否 | 人员ID |  |
| `showCol` | `String` | 否 | 展示列 |  |
| `startDate` | `String` | 否 | 开始日期 |  |
| `subcomId` | `String` | 否 | 分部ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `sessionkey` | `String` | 分页组件所需的sessionkey |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "e85dea76-8ac5-c0b1-9221-71742fe87e03_8C8F1B62E22ED0B50F57B93451702B69",
  "api_status": true
}
```

---

### 44. 原始打卡记录报表--获取高级搜索

- **接口路径 (Endpoint)**: `/api/kq/originalpunchrp/getSearchCondition`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 原始打卡记录报表--获取高级搜索`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `condition` | `Json` | 高级搜索的表单 |
| `option` | `Json` | 报表上的联动控件的JSON数据 |
| `value` | `String` | option中默认选中的查询条件 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "items": [
        {
          "colSpan": 2,
          "domkey": [
            "dateScope"
          ],
          "fieldcol": 18,
          "label": "时间范围",
          "labelcol": 6,
          "options": [
            {
              "key": "1",
              "selected": false,
              "showname": "今天"
            },
            {
              "key": "2",
              "selected": false,
              "showname": "本周"
            },
            {
              "key": "3",
              "selected": true,
              "showname": "本月"
            },
            {
              "key": "7",
              "selected": false,
              "showname": "上个月"
            },
            {
              "key": "4",
              "selected": false,
              "showname": "本季"
            },
            {
              "key": "5",
              "selected": false,
              "showname": "本年"
            },
            {
              "key": "8",
              "selected": false,
              "showname": "上一年"
            },
            {
              "key": "6",
              "selected": false,
              "showname": "指定日期范围"
            }
          ],
          "quickSearch": false,
          "selectLinkageDatas": {
            "6": {
              "conditionType": "RANGEPICKER",
              "domkey": [
                "startDate",
                "endDate"
              ]
            }
          },
          "viewAttr": 2
        },
        {
          "colSpan": 2,
          "domkey": [
            "dataScope"
          ],
          "fieldcol": 20,
          "label": "数据范围",
          "labelcol": 4,
          "options": [
            {
              "key": "0",
              "selected": true,
              "showname": "总部"
            },
            {
              "key": "1",
              "selected": false,
              "showname": "分部"
            },
            {
              "key": "2",
              "selected": false,
              "showname": "部门"
            },
            {
              "key": "3",
              "selected": false,
              "showname": "人员"
            }
          ],
          "quickSearch": false,
          "selectLinkageDatas": {
            "1": {
              "belong": "PC",
              "browserConditionParam": {
                "asynLoadAll": false,
                "checkStrictly": true,
                "completeParams": {},
                "conditionDataParams": {},
                "dataParams": {},
                "defaultExpandedLevel": 0,
                "destDataParams": {},
                "expandfirstnode": false,
                "hasAddBtn": false,
                "hasAdvanceSerach": true,
                "hasBorder": false,
                "hideVirtualOrg": false,
                "icon": "icon-coms-hrm",
                "iconBgcolor": "#217346",
                "idSeparator": ",",
                "isAutoComplete": 1,
                "isDetail": 0,
                "isMultCheckbox": false,
                "isSingle": false,
                "linkUrl": "/spa/hrm/engine.html#/hrmengine/organization?showTree=false&type=subcompany&id=",
                "noOperate": true,
                "otherParams": {},
                "pageSize": 10,
                "quickSearchName": "",
                "replaceDatas": [],
                "scrollx": false,
                "searchPlaceholder": "",
                "showCheckStrictly": true,
                "tabs": [
                  {
                    "isSearch": false,
                    "key": "2",
                    "name": "组织结构",
                    "selected": true,
                    "showOrder": 0
                  },
                  {
                    "dataParams": {
                      "list": "1"
                    },
                    "isSearch": true,
                    "key": "1",
                    "name": "按列表",
                    "selected": false,
                    "showOrder": 1
                  }
                ],
                "title": "多分部",
                "type": "194",
                "viewAttr": 3
              },
              "checkbox": false,
              "checkboxValue": false,
              "colSpan": 2,
              "conditionType": "BROWSER",
              "detailtype": 1,
              "domkey": [
                "subcomId"
              ],
              "entSearch": false,
              "fieldcol": 12,
              "hasBorder": false,
              "helpfulTipProps": {},
              "hide": false,
              "isBase64": false,
              "isQuickSearch": false,
              "label": "分部",
              "labelcol": 6,
              "length": 0,
              "maxFilesNumber": 0,
              "maxUploadSize": 0,
              "multiSelection": false,
              "multiple": false,
              "precision": 0,
              "rules": "required|string",
              "showOrder": 0,
              "stringLength": 0,
              "supportCancel": false,
              "tipPosition": "bottom",
              "viewAttr": 3
            },
            "2": {
              "belong": "PC",
              "browserConditionParam": {
                "asynLoadAll": false,
                "checkStrictly": true,
                "completeParams": {},
                "conditionDataParams": {},
                "dataParams": {},
                "defaultExpandedLevel": 0,
                "destDataParams": {},
                "expandfirstnode": false,
                "hasAddBtn": false,
                "hasAdvanceSerach": true,
                "hasBorder": false,
                "hideVirtualOrg": false,
                "icon": "icon-coms-hrm",
                "iconBgcolor": "#217346",
                "idSeparator": ",",
                "isAutoComplete": 1,
                "isDetail": 0,
                "isMultCheckbox": false,
                "isSingle": false,
                "linkUrl": "/spa/hrm/engine.html#/hrmengine/organization?showTree=false&type=department&id=",
                "noOperate": true,
                "otherParams": {},
                "pageSize": 10,
                "quickSearchName": "",
                "replaceDatas": [],
                "scrollx": false,
                "searchPlaceholder": "",
                "showCheckStrictly": true,
                "tabs": [
                  {
                    "isSearch": false,
                    "key": "2",
                    "name": "组织结构",
                    "selected": true,
                    "showOrder": 0
                  },
                  {
                    "dataParams": {
                      "list": "1"
                    },
                    "isSearch": true,
                    "key": "1",
                    "name": "按列表",
                    "selected": false,
                    "showOrder": 1
                  }
                ],
                "title": "多部门",
                "type": "57",
                "viewAttr": 3
              },
              "checkbox": false,
              "checkboxValue": false,
              "colSpan": 2,
              "conditionType": "BROWSER",
              "detailtype": 1,
              "domkey": [
                "deptId"
              ],
              "entSearch": false,
              "fieldcol": 12,
              "hasBorder": false,
              "helpfulTipProps": {},
              "hide": false,
              "isBase64": false,
              "isQuickSearch": false,
              "label": "部门",
              "labelcol": 6,
              "length": 0,
              "maxFilesNumber": 0,
              "maxUploadSize": 0,
              "multiSelection": false,
              "multiple": false,
              "precision": 0,
              "rules": "required|string",
              "showOrder": 0,
              "stringLength": 0,
              "supportCancel": false,
              "tipPosition": "bottom",
              "viewAttr": 3
            },
            "3": {
              "belong": "PC",
              "browserConditionParam": {
                "asynLoadAll": false,
                "checkStrictly": true,
                "completeParams": {},
                "conditionDataParams": {},
                "dataParams": {},
                "defaultExpandedLevel": 0,
                "destDataParams": {},
                "expandfirstnode": false,
                "hasAddBtn": false,
                "hasAdvanceSerach": true,
                "hasBorder": false,
                "hideVirtualOrg": false,
                "icon": "icon-coms-hrm",
                "iconBgcolor": "#217346",
                "idSeparator": ",",
                "isAutoComplete": 1,
                "isDetail": 0,
                "isMultCheckbox": false,
                "isSingle": false,
                "linkUrl": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/",
                "noOperate": true,
                "otherParams": {},
                "pageSize": 10,
                "quickSearchName": "",
                "replaceDatas": [],
                "scrollx": false,
                "searchPlaceholder": "",
                "showCheckStrictly": true,
                "tabs": [
                  {
                    "dataParams": {
                      "cmd": "List"
                    },
                    "isSearch": false,
                    "key": "1",
                    "name": "最近",
                    "selected": false,
                    "showOrder": 0
                  },
                  {
                    "isSearch": false,
                    "key": "2",
                    "name": "同部门",
                    "selected": false,
                    "showOrder": 0
                  },
                  {
                    "isSearch": false,
                    "key": "3",
                    "name": "我的下属",
                    "selected": false,
                    "showOrder": 0
                  },
                  {
                    "isSearch": false,
                    "key": "4",
                    "name": "组织结构",
                    "selected": false,
                    "showOrder": 0
                  },
                  {
                    "isSearch": false,
                    "key": "5",
                    "name": "常用组",
                    "selected": false,
                    "showOrder": 0
                  },
                  {
                    "isSearch": false,
                    "key": "6",
                    "name": "所有人",
                    "selected": false,
                    "showOrder": 0
                  }
                ],
                "title": "多人力资源",
                "type": "17",
                "viewAttr": 3
              },
              "checkbox": false,
              "checkboxValue": false,
              "colSpan": 2,
              "conditionType": "BROWSER",
              "detailtype": 1,
              "domkey": [
                "resourceId"
              ],
              "entSearch": false,
              "fieldcol": 12,
              "hasBorder": false,
              "helpfulTipProps": {},
              "hide": false,
              "isBase64": false,
              "isQuickSearch": false,
              "label": "人员",
              "labelcol": 6,
              "length": 0,
              "maxFilesNumber": 0,
              "maxUploadSize": 0,
              "multiSelection": false,
              "multiple": false,
              "precision": 0,
              "rules": "required|string",
              "showOrder": 0,
              "stringLength": 0,
              "supportCancel": false,
              "tipPosition": "bottom",
              "viewAttr": 3
            }
          },
          "viewAttr": 2
        }
      ]
    }
  ],
  "api_status": true,
  "value": "subcom,dept,jobtitle",
  "option": [
    {
      "showname": "分部",
      "key": "subcom"
    },
    {
      "showname": "部门",
      "key": "dept"
    },
    {
      "showname": "岗位",
      "key": "jobtitle"
    }
  ]
}
```

---

### 45. 员工假期余额--判断是否具有权限

- **接口路径 (Endpoint)**: `/api/kq/balanceofleave/getHasRight`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额--判断是否具有权限`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `hasRight` | `Bool` | true-有权限、false-没有权限 |

#### 响应示例 (Response Example)

```json
{
  "hasRight": true,
  "api_status": true
}
```

---

### 46. 员工假期余额--导入员工假期余额

- **接口路径 (Endpoint)**: `/api/kq/balanceofleave/saveImport`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额--导入员工假期余额`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `excelfile` | `String` | 否 | 导入文件名 |  |
| `importType` | `String` | 否 | 导入类型：balanceOfLeave |  |
| `operateType` | `String` | 否 | 操作类型：Add |  |
| `organizationId` | `String` | 否 | organizationType为分部时代表分部ID、为部门时代表部门ID |  |
| `organizationType` | `String` | 否 | 0-总部、1-分部、2-部门、3-人力资源 |  |
| `ruleId` | `String` | 否 | 假期类型的ID |  |
| `searchYearSelect` | `String` | 否 | 指定年份 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `errorInfo` | `String` | 错误信息 |
| `message` | `String` | 提示信息 |
| `status` | `String` | 1：导入成功、-1：导入失败 |

#### 响应示例 (Response Example)

```json
{
  "errorInfo": [],
  "api_status": true,
  "message": "导入完成",
  "status": "1"
}
```

---

### 47. 员工假期余额--获取TAB页签

- **接口路径 (Endpoint)**: `/api/kq/balanceofleave/getTabs`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额--获取TAB页签`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `organizationId` | `String` | 否 | organizationType为分部时为分部ID，organizationType为部门时是部门ID、organizationType为人力资源时是人员ID |  |
| `organizationType` | `String` | 否 | 0-总部、1-分部、2-部门、3-人力资源 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `tab` | `Json` | TAB页签的JSON数据 |

#### 响应示例 (Response Example)

```json
{
  "tab": [
    {
      "id": "-13",
      "title": "调休",
      "key": 0
    },
    {
      "id": "-12",
      "title": "带薪病假",
      "key": 1
    },
    {
      "id": "-6",
      "title": "年假",
      "key": 2
    },
    {
      "id": "2",
      "title": "年假-初始化",
      "key": 3
    },
    {
      "id": "5",
      "title": "调休-初始化",
      "key": 4
    },
    {
      "id": "125",
      "title": "探亲假",
      "key": 5
    },
    {
      "id": "128",
      "title": "产假看护假",
      "key": 6
    },
    {
      "id": "129",
      "title": "哺乳假",
      "key": 7
    },
    {
      "id": "130",
      "title": "丧假",
      "key": 8
    },
    {
      "id": "131",
      "title": "儿童陪护假",
      "key": 9
    },
    {
      "id": "137",
      "title": "带薪事假",
      "key": 10
    },
    {
      "id": "135",
      "title": "额外年假",
      "key": 11
    },
    {
      "id": "138",
      "title": "年假-czj",
      "key": 12
    },
    {
      "id": "139",
      "title": "事假-czj",
      "key": 13
    }
  ],
  "api_status": true
}
```

---

### 48. 员工假期余额--获取右键菜单

- **接口路径 (Endpoint)**: `/api/kq/balanceofleave/getRightMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额--获取右键菜单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `organizationId` | `String` | 否 | organizationType为分部时代表分部ID、 |  |
| `organizationType` | `String` | 否 | 类型：0-总部、1-分部、2-部门、3-人力资源 |  |
| `ruleId` | `String` | 否 | 假期类型的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `btnMenu` | `Json` | 右键菜单的JSON数据 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "btnMenu": [
    {
      "isTop": "1",
      "menuFun": "save",
      "menuIcon": "icon-coms-Preservation",
      "menuName": "保存",
      "type": "BTN_Save"
    },
    {
      "isTop": "1",
      "menuFun": "importExcel",
      "menuIcon": "icon-coms-leading-in",
      "menuName": "导入",
      "type": "BTN_Import"
    },
    {
      "isTop": "1",
      "menuFun": "batchEditing",
      "menuIcon": "icon-coms-BatchEditing-Hot",
      "menuName": "批处理",
      "type": "BTN_BatchEditing"
    },
    {
      "isTop": "1",
      "menuFun": "exportExcel",
      "menuIcon": "icon-coms-export",
      "menuName": "导出Excel",
      "type": "BTN_EXPORTEXCEL"
    }
  ]
}
```

---

### 49. 员工假期余额--获取员工假期余额列表

- **接口路径 (Endpoint)**: `/api/kq/balanceofleave/getSearchList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额--获取员工假期余额列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `hrmResourceId` | `String` | 否 | 人员ID |  |
| `organizationId` | `String` | 否 | organizationType为分部时表示分部ID，为部门时表示部门ID，为人员时表示人员ID |  |
| `organizationType` | `String` | 否 | 0-总部、1-分部、2-部门、3-人员 |  |
| `ruleId` | `String` | 否 | 假期类型的ID |  |
| `searchYear` | `String` | 否 | 所属年份 |  |
| `searchYearSelect` | `String` | 否 | 年分选择组件的选择值 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `sessionkey` | `String` | 分页组件所需的sessionkey |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "7907a963-04f3-62fc-7263-9486830dc6ad_946EAC678A7D3DD96C4399D570234D01",
  "api_status": true
}
```

---

### 50. 员工假期余额--获取高级搜索的查询条件

- **接口路径 (Endpoint)**: `/api/kq/balanceofleave/getSearchCondition`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额--获取高级搜索的查询条件`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `conditions` | `Json` | 表单JSON |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "conditions": [
    {
      "title": "高级查询条件",
      "defaultshow": true,
      "items": [
        {
          "colSpan": 2,
          "domkey": [
            "searchYearSelect"
          ],
          "fieldcol": 19,
          "label": "年份",
          "labelcol": 5,
          "options": [
            {
              "key": "5",
              "selected": true,
              "showname": "本年"
            },
            {
              "key": "8",
              "selected": false,
              "showname": "上一年"
            },
            {
              "key": "6",
              "selected": false,
              "showname": "指定年份"
            }
          ],
          "quickSearch": false,
          "selectLinkageDatas": {
            "6": {
              "viewAttr": 3,
              "format": "YYYY",
              "conditionType": "DATEPICKER",
              "domkey": [
                "searchYear"
              ]
            }
          },
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "tabs": [
              {
                "dataParams": {
                  "cmd": "List"
                },
                "isSearch": false,
                "key": "1",
                "name": "最近",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "2",
                "name": "同部门",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "3",
                "name": "我的下属",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "4",
                "name": "组织结构",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "5",
                "name": "常用组",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "6",
                "name": "所有人",
                "selected": false,
                "showOrder": 0
              }
            ],
            "title": "多人力资源",
            "type": "17",
            "viewAttr": 2
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "hrmResourceId"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "姓名",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        }
      ]
    }
  ]
}
```

---

### 51. 员工假期余额-判断是否具有权限

- **接口路径 (Endpoint)**: `/api/kq/balanceofleaverp/getHasRight`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额-判断是否具有权限`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `hasRight` | `Bool` | true-有权限、false-没有权限 |

#### 响应示例 (Response Example)

```json
{
  "hasRight": true,
  "api_status": true
}
```

---

### 52. 员工假期余额-批处理

- **接口路径 (Endpoint)**: `/api/kq/balanceofleave/batchProcessing`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额-批处理`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `organizationId` | `String` | 否 | organizationType为分部时代表分部ID、为部门时代表部门ID |  |
| `organizationType` | `String` | 否 | 0-总部、1-分部、2-部门、3-人力资源 |  |
| `ruleId` | `String` | 否 | 假期类型的ID |  |
| `searchYearSelect` | `String` | 否 | 指定年份 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | 1：批处理成功、1：批处理成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "批处理成功"
}
```

---

### 53. 员工假期余额-获取导入表单

- **接口路径 (Endpoint)**: `/api/kq/balanceofleave/getImportForm`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额-获取导入表单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `importType` | `String` | 否 | 导入类型：balanceOfLeave |  |
| `organizationId` | `String` | 否 | 当organizationType为部门时代表部门ID、当organizationType为分部时代表分部ID |  |
| `organizationType` | `String` | 否 | 0-总部、1-分部、2-部门、3-人力资源 |  |
| `ruleId` | `String` | 否 | 假期类型的ID |  |
| `searchYearSelect` | `String` | 否 | 指定年份 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `condition` | `Json` | 表单JSON |
| `status` | `String` | -1：接口异常、1：接口正常 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "title": "基本信息",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "templet"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "生成模板文件",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "/hrm/import/templet/KQBalanceOfLeave.xls",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "RESOURCEIMG",
          "detailtype": 1,
          "domkey": [
            "excelfile"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "上传Excel",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        }
      ]
    },
    {
      "title": "导入说明",
      "defaultshow": true,
      "items": [
        {
          "link": "/hrm/import/templet/KQBalanceOfLeave.xls",
          "index": 0,
          "value": "请先下载模板"
        },
        {
          "index": 1,
          "value": "导入模板中，列的位置不可改变，也不可增加列或者减少列"
        },
        {
          "index": 2,
          "value": "导入模板中，ID列和姓名列的数据属自动生成，且一一对应，不允许更改"
        },
        {
          "index": 3,
          "value": "导入模板中，余额数据不填写则视为0"
        }
      ]
    }
  ],
  "api_status": true,
  "status": "1"
}
```

---

### 54. 员工假期余额报表--使用记录--获取分页数据

- **接口路径 (Endpoint)**: `/api/kq/balanceofleaverp/getDetailPageInfo`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额报表--使用记录--获取分页数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `changeType` | `String` | 否 | 变更类型 |  |
| `resourceId` | `String` | 否 | 指定人员ID |  |
| `ruleId` | `String` | 否 | 假期类型的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `pageSize` | `Int` | 每页多少数据 |
| `total` | `Int` | 一共多少数据 |

#### 响应示例 (Response Example)

```json
{
  "total": 2,
  "pageSize": 10,
  "api_status": true
}
```

---

### 55. 员工假期余额报表--使用记录--获取记录变更类型

- **接口路径 (Endpoint)**: `/api/kq/balanceofleaverp/getChangeType`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额报表--使用记录--获取记录变更类型`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `condition` | `Json` | 变更类型的JSON数据 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "changeType"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "类型",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "All",
              "selected": true,
              "showname": "全部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "Reduce",
              "selected": false,
              "showname": "使用记录",
              "visible": true
            },
            {
              "disabled": false,
              "key": "Add",
              "selected": false,
              "showname": "新增记录",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        }
      ]
    }
  ],
  "api_status": true
}
```

---

### 56. 员工假期余额报表--使用记录一共有多少页签

- **接口路径 (Endpoint)**: `/api/kq/balanceofleaverp/getTab`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额报表--使用记录一共有多少页签`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `resourceId` | `String` | 否 | 人员ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `selectedKey` | `String` | 当前选中的是哪个TAB页签 |
| `tab` | `Json` | TAb页签的JSON数据 |

#### 响应示例 (Response Example)

```json
{
  "selectedKey": "-13",
  "tab": [
    {
      "title": "调休",
      "key": "-13"
    },
    {
      "title": "带薪病假",
      "key": "-12"
    },
    {
      "title": "年假-初始化",
      "key": "2"
    },
    {
      "title": "带薪事假-初始化",
      "key": "3"
    },
    {
      "title": "事假-初始化",
      "key": "6"
    },
    {
      "title": "病假-初始化",
      "key": "7"
    },
    {
      "title": "产假-初始化",
      "key": "8"
    },
    {
      "title": "陪产假-初始化",
      "key": "9"
    },
    {
      "title": "婚假-初始化",
      "key": "10"
    },
    {
      "title": "丧假-初始化",
      "key": "11"
    },
    {
      "title": "事假",
      "key": "26"
    },
    {
      "title": "病假",
      "key": "27"
    },
    {
      "title": "AAA",
      "key": "28"
    }
  ],
  "api_status": true
}
```

---

### 57. 员工假期余额报表--获取使用记录

- **接口路径 (Endpoint)**: `/api/kq/balanceofleaverp/getUsageRecordDetail`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额报表--获取使用记录`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `changeType` | `String` | 否 | 变更类型 |  |
| `currentPage` | `String` | 否 | 当前页 |  |
| `pageSize` | `String` | 否 | 每页多少数据 |  |
| `resourceId` | `String` | 否 | 人员ID |  |
| `ruleId` | `String` | 否 | 假期类型的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `balanceEnable` | `Int` | 是否启用了假期余额控制：0-未开启、1-开启 |
| `bottomTips` | `Json` | 底部的提示信息 |
| `dataDetail` | `Json` | 具体的使用记录数据 |
| `topTips` | `Json` | 顶部的提示信息 |

#### 响应示例 (Response Example)

```json
{
  "topTips": "1.00(小时)",
  "bottomTips": "当前 调休 规则：加班时长自动计入余额-不限制",
  "dataDetail": [
    {
      "operateTime": "16:39:35",
      "operateDesc": "系统管理员调整员工假期余额。将2019的额外调休由0.00(小时)变更为1.00(小时)。",
      "changeAmount": "1.00(小时)",
      "operateDate": "2019-08-09"
    },
    {
      "operateTime": "01:13:21",
      "operateDesc": "系统根据规则进行批处理。2019年初始化了0.00(小时)调休基数，0.00(小时)额外调休，0.00(小时)已休调休。",
      "changeAmount": "0.00(小时)",
      "operateDate": "2019-05-09"
    }
  ],
  "api_status": true,
  "balanceEnable": 1
}
```

---

### 58. 员工假期余额报表--获取分页信息

- **接口路径 (Endpoint)**: `/api/kq/balanceofleaverp/getPageInfo`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额报表--获取分页信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `allLevel` | `String` | 否 | 是否包含下级下属：0-不包含、1-包含 |  |
| `dataScope` | `String` | 否 | 数据范围：0-总部、1-分部、2-分部、3-人员、4-我的下属 |  |
| `dateScope` | `String` | 否 | 时间范围：5-本年、8-上一年 |  |
| `deptId` | `String` | 否 | 指定部门ID |  |
| `isNoAccount` | `String` | 否 | 是否显示无账号人员 |  |
| `resourceId` | `String` | 否 | 人员ID |  |
| `selectedYear` | `String` | 否 | 指定年份 |  |
| `subcomId` | `String` | 否 | 指定分部 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `pageSize` | `Int` | 一页多少数据 |
| `total` | `Int` | 一共多少数据 |

#### 响应示例 (Response Example)

```json
{
  "total": 9753,
  "pageSize": 10,
  "api_status": true
}
```

---

### 59. 员工假期余额报表--获取右键菜单

- **接口路径 (Endpoint)**: `/api/kq/balanceofleaverp/getRightMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额报表--获取右键菜单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `btnMenu` | `Json` | 右键菜单JSON |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "btnMenu": [
    {
      "isTop": "1",
      "menuFun": "excel",
      "menuIcon": "icon-coms-export",
      "menuName": "导出Excel",
      "type": "BTN_EXPORTEXCEL"
    }
  ]
}
```

---

### 60. 员工假期余额报表--获取报表数据

- **接口路径 (Endpoint)**: `/api/kq/balanceofleaverp/getSearchList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额报表--获取报表数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `allLevel` | `String` | 否 | 是否包含下级下属：0-不包含、1-包含 |  |
| `currentPage` | `String` | 否 | 当前页数 |  |
| `dataScope` | `String` | 否 | 数据范围：0-总部、1-分部、2-分部、3-人员、4-我的下属 |  |
| `dateScope` | `String` | 否 | 时间范围：5-本年、8-上一年 |  |
| `deptId` | `String` | 否 | 指定部门数据 |  |
| `isNoAccount` | `String` | 否 | 是否包含无账号人员 |  |
| `pageSize` | `String` | 否 | 每页多少数据 |  |
| `resourceId` | `String` | 否 | 指定人员 |  |
| `selectedYear` | `String` | 否 | 指定年份 |  |
| `subcomId` | `String` | 否 | 指定分部 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `columns` | `Json` | 表头 |
| `datas` | `Json` | 表数据 |

#### 响应示例 (Response Example)

```json
{
  "columns": [
    {
      "com": [
        {
          "key": "lastName",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "lastName",
      "width": "5%",
      "title": "姓名",
      "key": "lastName"
    },
    {
      "com": [
        {
          "key": "subcom",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "subcom",
      "width": "5%",
      "title": "分部",
      "key": "subcom"
    },
    {
      "com": [
        {
          "key": "dept",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "dept",
      "width": "5%",
      "title": "部门",
      "key": "dept"
    },
    {
      "com": [
        {
          "key": "jobtitle",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "jobtitle",
      "width": "5%",
      "title": "岗位",
      "key": "jobtitle"
    },
    {
      "com": [
        {
          "key": "companyStartDate",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "companyStartDate",
      "width": "5%",
      "title": "入职日期",
      "key": "companyStartDate"
    },
    {
      "com": [
        {
          "key": "2",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "2",
      "width": "5%",
      "title": "年假-初始化(天)",
      "key": "2"
    },
    {
      "com": [
        {
          "key": "3",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "3",
      "width": "5%",
      "title": "带薪事假-初始化(天)",
      "key": "3"
    },
    {
      "com": [
        {
          "key": "4",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "4",
      "width": "5%",
      "title": "带薪病假-初始化(天)",
      "key": "4"
    },
    {
      "com": [
        {
          "key": "5",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "5",
      "width": "5%",
      "title": "调休-初始化(天)",
      "key": "5"
    },
    {
      "com": [
        {
          "key": "6",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "6",
      "width": "5%",
      "title": "事假-初始化(天)",
      "key": "6"
    },
    {
      "com": [
        {
          "key": "7",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "7",
      "width": "5%",
      "title": "病假-初始化(天)",
      "key": "7"
    },
    {
      "com": [
        {
          "key": "8",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "8",
      "width": "5%",
      "title": "产假-初始化(天)",
      "key": "8"
    },
    {
      "com": [
        {
          "key": "9",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "9",
      "width": "5%",
      "title": "陪产假-初始化(天)",
      "key": "9"
    },
    {
      "com": [
        {
          "key": "10",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "10",
      "width": "5%",
      "title": "婚假-初始化(天)",
      "key": "10"
    },
    {
      "com": [
        {
          "key": "11",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "11",
      "width": "5%",
      "title": "丧假-初始化(天)",
      "key": "11"
    },
    {
      "com": [
        {
          "key": "12",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "12",
      "width": "5%",
      "title": "哺乳假-初始化(天)",
      "key": "12"
    },
    {
      "com": [
        {
          "key": "14",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "14",
      "width": "5%",
      "title": "xy带薪假1(天)",
      "key": "14"
    },
    {
      "com": [
        {
          "key": "17",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "17",
      "width": "5%",
      "title": "pfl假(天)",
      "key": "17"
    },
    {
      "com": [
        {
          "key": "18",
          "label": "",
          "otherParams": {
            "inputType": "multilang",
            "isBase64": true
          },
          "quickSearch": false,
          "type": "INPUT",
          "viewAttr": 1
        }
      ],
      "dataIndex": "18",
      "width": "5%",
      "title": "pfl假期2-改(小时)",
      "key": "18"
    }
  ],
  "datas": [
    {
      "11": "不限制余额",
      "lastName": "测试003",
      "12": "不限制余额",
      "14": "0.00",
      "jobtitle": "测试工程师",
      "17": "0.00",
      "18": "不限制余额",
      "deptId": "116",
      "dept": "宇宙部",
      "companyStartDate": "2015-07-08",
      "jobtitleId": "156",
      "2": "0.00",
      "3": "不限制余额",
      "4": "不限制余额",
      "5": "0.00",
      "6": "不限制余额",
      "7": "不限制余额",
      "8": "不限制余额",
      "9": "不限制余额",
      "id": "444",
      "subcom": "泛微总部",
      "subcomId": "43",
      "10": "不限制余额"
    },
    {
      "11": "不限制余额",
      "lastName": "测试|00|26",
      "12": "不限制余额",
      "14": "0.00",
      "jobtitle": "测试工程师",
      "17": "0.00",
      "18": "不限制余额",
      "deptId": "116",
      "dept": "宇宙部",
      "companyStartDate": "",
      "jobtitleId": "156",
      "2": "0.00",
      "3": "不限制余额",
      "4": "不限制余额",
      "5": "0.00",
      "6": "不限制余额",
      "7": "不限制余额",
      "8": "不限制余额",
      "9": "不限制余额",
      "id": "456",
      "subcom": "泛微总部",
      "subcomId": "43",
      "10": "不限制余额"
    },
    {
      "11": "不限制余额",
      "lastName": "董雷",
      "12": "不限制余额",
      "14": "0.00",
      "jobtitle": "测试工程师",
      "17": "0.00",
      "18": "不限制余额",
      "deptId": "116",
      "dept": "宇宙部",
      "companyStartDate": "",
      "jobtitleId": "156",
      "2": "0.00",
      "3": "不限制余额",
      "4": "不限制余额",
      "5": "0.00",
      "6": "不限制余额",
      "7": "不限制余额",
      "8": "不限制余额",
      "9": "不限制余额",
      "id": "463",
      "subcom": "泛微总部",
      "subcomId": "43",
      "10": "不限制余额"
    },
    {
      "11": "不限制余额",
      "lastName": "罗宾",
      "12": "不限制余额",
      "14": "0.00",
      "jobtitle": "测试工程师",
      "17": "0.00",
      "18": "不限制余额",
      "deptId": "116",
      "dept": "宇宙部",
      "companyStartDate": "",
      "jobtitleId": "156",
      "2": "0.00",
      "3": "不限制余额",
      "4": "不限制余额",
      "5": "0.00",
      "6": "不限制余额",
      "7": "不限制余额",
      "8": "不限制余额",
      "9": "不限制余额",
      "id": "464",
      "subcom": "泛微总部",
      "subcomId": "43",
      "10": "不限制余额"
    },
    {
      "11": "不限制余额",
      "lastName": "紫熏003",
      "12": "不限制余额",
      "14": "0.00",
      "jobtitle": "",
      "17": "0.00",
      "18": "不限制余额",
      "deptId": "1015",
      "dept": "CES总部部门1_2",
      "companyStartDate": "",
      "jobtitleId": "0",
      "2": "0.00",
      "3": "不限制余额",
      "4": "不限制余额",
      "5": "0.00",
      "6": "不限制余额",
      "7": "不限制余额",
      "8": "不限制余额",
      "9": "不限制余额",
      "id": "497",
      "subcom": "CES总公司",
      "subcomId": "497",
      "10": "不限制余额"
    },
    {
      "11": "不限制余额",
      "lastName": "美愚人006",
      "12": "不限制余额",
      "14": "0.00",
      "jobtitle": "技术开发部经理",
      "17": "0.00",
      "18": "不限制余额",
      "deptId": "268",
      "dept": "JYT Genenal Dept.",
      "companyStartDate": "",
      "jobtitleId": "252",
      "2": "0.00",
      "3": "不限制余额",
      "4": "不限制余额",
      "5": "0.00",
      "6": "不限制余额",
      "7": "不限制余额",
      "8": "不限制余额",
      "9": "不限制余额",
      "id": "1017",
      "subcom": "张振力-分部",
      "subcomId": "201",
      "10": "不限制余额"
    },
    {
      "11": "不限制余额",
      "lastName": "美愚人007",
      "12": "不限制余额",
      "14": "0.00",
      "jobtitle": "技术开发部经理",
      "17": "0.00",
      "18": "不限制余额",
      "deptId": "268",
      "dept": "JYT Genenal Dept.",
      "companyStartDate": "",
      "jobtitleId": "252",
      "2": "0.00",
      "3": "不限制余额",
      "4": "不限制余额",
      "5": "0.00",
      "6": "不限制余额",
      "7": "不限制余额",
      "8": "不限制余额",
      "9": "不限制余额",
      "id": "1018",
      "subcom": "张振力-分部",
      "subcomId": "201",
      "10": "不限制余额"
    },
    {
      "11": "不限制余额",
      "lastName": "美愚人005",
      "12": "不限制余额",
      "14": "0.00",
      "jobtitle": "市场管理部经理",
      "17": "0.00",
      "18": "不限制余额",
      "deptId": "268",
      "dept": "JYT Genenal Dept.",
      "companyStartDate": "",
      "jobtitleId": "253",
      "2": "0.00",
      "3": "不限制余额",
      "4": "不限制余额",
      "5": "0.00",
      "6": "不限制余额",
      "7": "不限制余额",
      "8": "不限制余额",
      "9": "不限制余额",
      "id": "1019",
      "subcom": "张振力-分部",
      "subcomId": "201",
      "10": "不限制余额"
    },
    {
      "11": "不限制余额",
      "lastName": "老大",
      "12": "不限制余额",
      "14": "0.00",
      "jobtitle": "总裁",
      "17": "0.00",
      "18": "不限制余额",
      "deptId": "1282",
      "dept": "总经办",
      "companyStartDate": "",
      "jobtitleId": "165",
      "2": "0.00",
      "3": "不限制余额",
      "4": "不限制余额",
      "5": "0.00",
      "6": "不限制余额",
      "7": "不限制余额",
      "8": "不限制余额",
      "9": "不限制余额",
      "id": "1062",
      "subcom": "泛微一部",
      "subcomId": "44",
      "10": "不限制余额"
    },
    {
      "11": "不限制余额",
      "lastName": "盛小六13",
      "12": "不限制余额",
      "14": "0.00",
      "jobtitle": "Z岗位",
      "17": "0.00",
      "18": "不限制余额",
      "deptId": "861",
      "dept": "ZZZ部门2",
      "companyStartDate": "",
      "jobtitleId": "448",
      "2": "0.00",
      "3": "不限制余额",
      "4": "不限制余额",
      "5": "0.00",
      "6": "不限制余额",
      "7": "不限制余额",
      "8": "不限制余额",
      "9": "不限制余额",
      "id": "3108",
      "subcom": "ZZZ分部",
      "subcomId": "460",
      "10": "不限制余额"
    }
  ],
  "api_status": true
}
```

---

### 61. 员工假期余额报表-获取高级搜索

- **接口路径 (Endpoint)**: `/api/kq/balanceofleaverp/getSearchCondition`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 员工假期余额报表-获取高级搜索`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `condition` | `Json` | 表单JSON |
| `option` | `Json` | 展示列 |
| `value` | `String` | 展示列默认选中的项 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "title": "高级查询条件",
      "defaultshow": true,
      "items": [
        {
          "colSpan": 2,
          "domkey": [
            "dateScope"
          ],
          "fieldcol": 20,
          "label": "时间范围",
          "labelcol": 4,
          "options": [
            {
              "key": "5",
              "selected": true,
              "showname": "本年"
            },
            {
              "key": "8",
              "selected": false,
              "showname": "上一年"
            },
            {
              "key": "6",
              "selected": false,
              "showname": "指定日期范围"
            }
          ],
          "quickSearch": false,
          "selectLinkageDatas": {
            "6": {
              "viewAttr": 3,
              "format": "YYYY",
              "conditionType": "DATEPICKER",
              "domkey": [
                "selectedYear"
              ]
            }
          },
          "viewAttr": 2
        },
        {
          "colSpan": 2,
          "domkey": [
            "dataScope"
          ],
          "fieldcol": 20,
          "label": "数据范围",
          "labelcol": 4,
          "options": [
            {
              "key": "0",
              "selected": true,
              "showname": "总部"
            },
            {
              "key": "1",
              "selected": false,
              "showname": "分部"
            },
            {
              "key": "2",
              "selected": false,
              "showname": "部门"
            },
            {
              "key": "3",
              "selected": false,
              "showname": "人员"
            }
          ],
          "quickSearch": false,
          "selectLinkageDatas": {
            "1": {
              "belong": "PC",
              "browserConditionParam": {
                "asynLoadAll": false,
                "checkStrictly": true,
                "completeParams": {},
                "conditionDataParams": {},
                "dataParams": {},
                "defaultExpandedLevel": 0,
                "destDataParams": {},
                "expandfirstnode": false,
                "hasAddBtn": false,
                "hasAdvanceSerach": true,
                "hasBorder": false,
                "hideVirtualOrg": false,
                "icon": "icon-coms-hrm",
                "iconBgcolor": "#217346",
                "idSeparator": ",",
                "isAutoComplete": 1,
                "isDetail": 0,
                "isMultCheckbox": false,
                "isSingle": false,
                "linkUrl": "/spa/hrm/engine.html#/hrmengine/organization?showTree=false&type=subcompany&id=",
                "noOperate": true,
                "otherParams": {},
                "pageSize": 10,
                "quickSearchName": "",
                "replaceDatas": [],
                "scrollx": false,
                "searchPlaceholder": "",
                "showCheckStrictly": true,
                "tabs": [
                  {
                    "isSearch": false,
                    "key": "2",
                    "name": "组织结构",
                    "selected": true,
                    "showOrder": 0
                  },
                  {
                    "dataParams": {
                      "list": "1"
                    },
                    "isSearch": true,
                    "key": "1",
                    "name": "按列表",
                    "selected": false,
                    "showOrder": 0
                  }
                ],
                "title": "多分部",
                "type": "194",
                "viewAttr": 3
              },
              "checkbox": false,
              "checkboxValue": false,
              "colSpan": 2,
              "conditionType": "BROWSER",
              "detailtype": 1,
              "domkey": [
                "subcomId"
              ],
              "entSearch": false,
              "fieldcol": 12,
              "hasBorder": false,
              "helpfulTipProps": {},
              "hide": false,
              "isBase64": false,
              "isQuickSearch": false,
              "label": "分部",
              "labelcol": 6,
              "length": 0,
              "maxFilesNumber": 0,
              "maxUploadSize": 0,
              "multiSelection": false,
              "multiple": false,
              "precision": 0,
              "rules": "required|string",
              "showOrder": 0,
              "stringLength": 0,
              "supportCancel": false,
              "tipPosition": "bottom",
              "viewAttr": 3
            },
            "2": {
              "belong": "PC",
              "browserConditionParam": {
                "asynLoadAll": false,
                "checkStrictly": true,
                "completeParams": {},
                "conditionDataParams": {},
                "dataParams": {},
                "defaultExpandedLevel": 0,
                "destDataParams": {},
                "expandfirstnode": false,
                "hasAddBtn": false,
                "hasAdvanceSerach": true,
                "hasBorder": false,
                "hideVirtualOrg": false,
                "icon": "icon-coms-hrm",
                "iconBgcolor": "#217346",
                "idSeparator": ",",
                "isAutoComplete": 1,
                "isDetail": 0,
                "isMultCheckbox": false,
                "isSingle": false,
                "linkUrl": "/spa/hrm/engine.html#/hrmengine/organization?showTree=false&type=department&id=",
                "noOperate": true,
                "otherParams": {},
                "pageSize": 10,
                "quickSearchName": "",
                "replaceDatas": [],
                "scrollx": false,
                "searchPlaceholder": "",
                "showCheckStrictly": true,
                "tabs": [
                  {
                    "isSearch": false,
                    "key": "2",
                    "name": "组织结构",
                    "selected": true,
                    "showOrder": 0
                  },
                  {
                    "dataParams": {
                      "list": "1"
                    },
                    "isSearch": true,
                    "key": "1",
                    "name": "按列表",
                    "selected": false,
                    "showOrder": 0
                  }
                ],
                "title": "多部门",
                "type": "57",
                "viewAttr": 3
              },
              "checkbox": false,
              "checkboxValue": false,
              "colSpan": 2,
              "conditionType": "BROWSER",
              "detailtype": 1,
              "domkey": [
                "deptId"
              ],
              "entSearch": false,
              "fieldcol": 12,
              "hasBorder": false,
              "helpfulTipProps": {},
              "hide": false,
              "isBase64": false,
              "isQuickSearch": false,
              "label": "部门",
              "labelcol": 6,
              "length": 0,
              "maxFilesNumber": 0,
              "maxUploadSize": 0,
              "multiSelection": false,
              "multiple": false,
              "precision": 0,
              "rules": "required|string",
              "showOrder": 0,
              "stringLength": 0,
              "supportCancel": false,
              "tipPosition": "bottom",
              "viewAttr": 3
            },
            "3": {
              "belong": "PC",
              "browserConditionParam": {
                "asynLoadAll": false,
                "checkStrictly": true,
                "completeParams": {},
                "conditionDataParams": {},
                "dataParams": {},
                "defaultExpandedLevel": 0,
                "destDataParams": {},
                "expandfirstnode": false,
                "hasAddBtn": false,
                "hasAdvanceSerach": true,
                "hasBorder": false,
                "hideVirtualOrg": false,
                "icon": "icon-coms-hrm",
                "iconBgcolor": "#217346",
                "idSeparator": ",",
                "isAutoComplete": 1,
                "isDetail": 0,
                "isMultCheckbox": false,
                "isSingle": false,
                "linkUrl": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/",
                "noOperate": true,
                "otherParams": {},
                "pageSize": 10,
                "quickSearchName": "",
                "replaceDatas": [],
                "scrollx": false,
                "searchPlaceholder": "",
                "showCheckStrictly": true,
                "tabs": [
                  {
                    "dataParams": {
                      "cmd": "List"
                    },
                    "isSearch": false,
                    "key": "1",
                    "name": "最近",
                    "selected": false,
                    "showOrder": 0
                  },
                  {
                    "isSearch": false,
                    "key": "2",
                    "name": "同部门",
                    "selected": false,
                    "showOrder": 0
                  },
                  {
                    "isSearch": false,
                    "key": "3",
                    "name": "我的下属",
                    "selected": false,
                    "showOrder": 0
                  },
                  {
                    "isSearch": false,
                    "key": "4",
                    "name": "组织结构",
                    "selected": false,
                    "showOrder": 0
                  },
                  {
                    "isSearch": false,
                    "key": "5",
                    "name": "常用组",
                    "selected": false,
                    "showOrder": 0
                  },
                  {
                    "isSearch": false,
                    "key": "6",
                    "name": "所有人",
                    "selected": false,
                    "showOrder": 0
                  }
                ],
                "title": "多人力资源",
                "type": "17",
                "viewAttr": 3
              },
              "checkbox": false,
              "checkboxValue": false,
              "colSpan": 2,
              "conditionType": "BROWSER",
              "detailtype": 1,
              "domkey": [
                "resourceId"
              ],
              "entSearch": false,
              "fieldcol": 12,
              "hasBorder": false,
              "helpfulTipProps": {},
              "hide": false,
              "isBase64": false,
              "isQuickSearch": false,
              "label": "人员",
              "labelcol": 6,
              "length": 0,
              "maxFilesNumber": 0,
              "maxUploadSize": 0,
              "multiSelection": false,
              "multiple": false,
              "precision": 0,
              "rules": "required|string",
              "showOrder": 0,
              "stringLength": 0,
              "supportCancel": false,
              "tipPosition": "bottom",
              "viewAttr": 3
            }
          },
          "viewAttr": 2
        }
      ]
    }
  ],
  "api_status": true,
  "value": "subcom,dept,jobtitle,2,3,4,5,6,7,8,9,10,11,12,14,17,18",
  "option": [
    [
      {
        "showname": "分部",
        "key": "subcom"
      },
      {
        "showname": "部门",
        "key": "dept"
      },
      {
        "showname": "岗位",
        "key": "jobtitle"
      }
    ],
    [
      {
        "showname": "全部假别",
        "key": "all"
      },
      {
        "showname": "年假-初始化",
        "key": "2"
      },
      {
        "showname": "带薪事假-初始化",
        "key": "3"
      },
      {
        "showname": "带薪病假-初始化",
        "key": "4"
      },
      {
        "showname": "调休-初始化",
        "key": "5"
      },
      {
        "showname": "事假-初始化",
        "key": "6"
      },
      {
        "showname": "病假-初始化",
        "key": "7"
      },
      {
        "showname": "产假-初始化",
        "key": "8"
      },
      {
        "showname": "陪产假-初始化",
        "key": "9"
      },
      {
        "showname": "婚假-初始化",
        "key": "10"
      },
      {
        "showname": "丧假-初始化",
        "key": "11"
      },
      {
        "showname": "哺乳假-初始化",
        "key": "12"
      },
      {
        "showname": "xy带薪假1",
        "key": "14"
      },
      {
        "showname": "pfl假",
        "key": "17"
      },
      {
        "showname": "pfl假期2-改",
        "key": "18"
      }
    ]
  ]
}
```

---

### 62. 我的考勤--考勤明细

- **接口路径 (Endpoint)**: `/api/kq/myattendance/getHrmKQReportDetialInfo`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 我的考勤--考勤明细`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `kqtype` | `String` | 否 | 实际出勤：realWorkdays、矿工：absent、迟到：beLate、严重迟到：graveBeLate、早退：leaveEarly、严重早退：graveLeaveEarly、漏签：noSign、出差：evection、公出：outDays、加班：overTime、缺勤：leaveDays |  |
| `resourceId` | `String` | 否 | 指定人员ID |  |
| `type` | `String` | 否 | 1-按年、2-按月 |  |
| `typevalue` | `String` | 否 | 年份或者月份 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `sessionkey` | `String` | 分页组件所需的sessionkey |
| `status` | `String` | -1：接口异常、1：接口正常 |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "cb9b9b02-a34c-4468-b871-08167bcaeb6c_DA541E28689B1926DF2B9889B4F38C48",
  "api_status": true,
  "status": "1"
}
```

---

### 63. 我的考勤--考勤统计

- **接口路径 (Endpoint)**: `/api/kq/myattendance/getHrmKQReportInfo`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 我的考勤--考勤统计`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `resourceId` | `String` | 否 | 指定人员ID |  |
| `type` | `String` | 否 | 2-按月、1-按年 |  |
| `typevalue` | `String` | 否 | 年月或者月份 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `groupitem1` | `Json` | 出勤统计 |
| `groupitem2` | `Json` | 加班、出差、公出等统计 |
| `groupitem3` | `Json` | 迟到、早退、旷工等统计 |
| `groupitem4` | `Json` | 假期余额信息统计 |
| `groupitem5` | `String` | 请假信息统计 |
| `status` | `String` | -1：接口异常、1：接口正常 |

#### 响应示例 (Response Example)

```json
{
  "groupitem1": {
    "name": "应出勤",
    "id": "workDays",
    "title": "出勤统计",
    "value": "0.00",
    "items": [
      {
        "name": "未出勤",
        "id": "leaveDays",
        "title": "未出勤",
        "type": "ABSENT",
        "value": "0.00"
      },
      {
        "name": "实际出勤",
        "id": "realWorkDays",
        "title": "实际出勤",
        "type": "REALWORKDAYS",
        "value": "0.00"
      }
    ]
  },
  "api_status": true,
  "groupitem4": {
    "title": "请假信息",
    "items": [
      {
        "item": [
          {
            "title": "上一年可请天数",
            "value": "0.00"
          },
          {
            "title": "今年可请天数",
            "value": "0.00"
          },
          {
            "title": "当前可请天数",
            "value": "0.00"
          }
        ],
        "color": "#25C6DA",
        "icon": "icon-Human-resources-adjustment",
        "title": "年假-初始化"
      },
      {
        "item": [
          {
            "title": "上一年可请天数",
            "value": "0.00"
          },
          {
            "title": "今年可请天数",
            "value": "0.00"
          },
          {
            "title": "当前可请天数",
            "value": "0.00"
          }
        ],
        "color": "#25C6DA",
        "icon": "icon-Human-resources-adjustment",
        "title": "调休-初始化"
      }
    ]
  },
  "groupitem5": {
    "items": []
  },
  "groupitem2": {
    "items": [
      {
        "name": "evection",
        "title": "出差(小时)",
        "type": "EVECTION",
        "value": 0.0
      },
      {
        "name": "outDays",
        "title": "公出(小时)",
        "type": "OUTDAYS",
        "value": 0.0
      },
      {
        "name": "overTimes",
        "title": "加班(小时)",
        "type": "OVERTIME",
        "value": 0.0
      }
    ]
  },
  "groupitem3": {
    "items": [
      {
        "name": "beLate",
        "title": "迟到",
        "type": "BELATE",
        "value": 0
      },
      {
        "name": "graveBeLate",
        "title": "严重迟到",
        "type": "graveBeLate",
        "value": 0
      },
      {
        "name": "leaveEarly",
        "title": "早退",
        "type": "LEAVEEARLY",
        "value": 0
      },
      {
        "name": "graveLeaveEarly",
        "title": "严重早退",
        "type": "graveLeaveEarly",
        "value": 0
      },
      {
        "name": "absentFromWork",
        "title": "旷工",
        "type": "ABSENT",
        "value": 0
      },
      {
        "name": "noSign",
        "title": "漏签",
        "type": "noSign",
        "value": 0
      }
    ]
  },
  "status": "1"
}
```

---

### 64. 我的考勤--获取日历模式下的数据

- **接口路径 (Endpoint)**: `/api/kq/myattendance/getHrmKQMonthReportInfo`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 我的考勤--获取日历模式下的数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `resourceId` | `String` | 否 | 指定人员ID |  |
| `type` | `String` | 否 | 1-按年、2-按月 |  |
| `typevalue` | `String` | 否 | 年份或者月份 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `result` | `Json` | 日历模式下的考勤信息 |
| `status` | `String` | 1：接口正常、-1：接口异常 |

#### 响应示例 (Response Example)

```json
{
  "result": {
    "22": {
      "date": "2019-08-22",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "23": {
      "date": "2019-08-23",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "24": {
      "date": "2019-08-24",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "25": {
      "date": "2019-08-25",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "26": {
      "date": "2019-08-26",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "27": {
      "date": "2019-08-27",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "28": {
      "date": "2019-08-28",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "29": {
      "date": "2019-08-29",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "30": {
      "date": "2019-08-30",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "31": {
      "date": "2019-08-31",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "10": {
      "date": "2019-08-10",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "11": {
      "date": "2019-08-11",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "12": {
      "date": "2019-08-12",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "13": {
      "date": "2019-08-13",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "14": {
      "date": "2019-08-14",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "15": {
      "date": "2019-08-15",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "16": {
      "date": "2019-08-16",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "17": {
      "date": "2019-08-17",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "18": {
      "date": "2019-08-18",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "19": {
      "date": "2019-08-19",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "1": {
      "date": "2019-08-01",
      "types": [
        "BELATE",
        "ABSENT",
        "LEAVEEARLY"
      ],
      "signInfo": [
        {
          "signTime": "16:15:08",
          "title": "签到"
        },
        {
          "signTime": "16:15:14",
          "title": "签退"
        }
      ],
      "workflow": [],
      "isWorkDay": true
    },
    "2": {
      "date": "2019-08-02",
      "types": [
        "ABSENT"
      ],
      "workflow": [],
      "isWorkDay": true
    },
    "3": {
      "date": "2019-08-03",
      "types": [
        "ABSENT",
        "LEAVE"
      ],
      "workflow": [
        {
          "requestId": "8441922",
          "count": "1.00(天)",
          "start": "2019-08-03 13:00",
          "end": "2019-08-05 13:00",
          "workflowtype": "LEAVE",
          "type": "事假-初始化",
          "title": "<a href=javaScript:openFullWindowHaveBarForWFList('/workflow/request/ViewRequestForwardSPA.jsp?requestid=8441922&isovertime=0',8441922);>事假-初始化</a>"
        }
      ],
      "isWorkDay": true
    },
    "4": {
      "date": "2019-08-04",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "5": {
      "date": "2019-08-05",
      "types": [
        "ABSENT",
        "LEAVE"
      ],
      "workflow": [
        {
          "requestId": "8441922",
          "count": "1.00(天)",
          "start": "2019-08-03 13:00",
          "end": "2019-08-05 13:00",
          "workflowtype": "LEAVE",
          "type": "事假-初始化",
          "title": "<a href=javaScript:openFullWindowHaveBarForWFList('/workflow/request/ViewRequestForwardSPA.jsp?requestid=8441922&isovertime=0',8441922);>事假-初始化</a>"
        }
      ],
      "isWorkDay": true
    },
    "6": {
      "date": "2019-08-06",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "7": {
      "date": "2019-08-07",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "8": {
      "date": "2019-08-08",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "9": {
      "date": "2019-08-09",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "20": {
      "date": "2019-08-20",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    },
    "21": {
      "date": "2019-08-21",
      "types": [],
      "workflow": [],
      "isWorkDay": false
    }
  },
  "api_status": true,
  "status": "1"
}
```

---

### 65. 我的考勤--获取签到签退数据

- **接口路径 (Endpoint)**: `/api/kq/myattendance/getHrmKQSignInfo`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 我的考勤--获取签到签退数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `date` | `String` | 否 | 指定日期 |  |
| `resourceId` | `String` | 否 | 指定人员ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `data` | `Json` | 签到签退数据 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "date": "2019-07-26",
    "signInfo": []
  },
  "api_status": true
}
```

---

### 66. 空

- **接口路径 (Endpoint)**: `/api/kq/balanceofleaverp/exportExcel`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 空`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `currentPage` | `String` | 否 | 空 |  |
| `dataScope` | `String` | 否 | 空 |  |
| `dateScope` | `String` | 否 | 空 |  |
| `displayColumn` | `String` | 否 | 空 |  |
| `isNoAccount` | `String` | 否 | 空 |  |
| `pageSize` | `String` | 否 | 空 |  |
| `reportType` | `String` | 否 | 空 |  |

#### 响应示例 (Response Example)

```json
空
```

---

### 67. 考勤导入--获取导入历史记录

- **接口路径 (Endpoint)**: `/api/kq/importlog/getImportHistory`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤导入--获取导入历史记录`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `importType` | `String` | 否 | 导入类型 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `sessionkey` | `String` | 分页组件所需的sessionkey |
| `status` | `String` | 1：接口正常、-1：接口异常 |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "d8d953d3-bbd6-b3b9-f283-45b70b91ea7b_7BA3C431342AE6CA5795F089C16BC28C",
  "status": "1"
}
```

---

### 68. 考勤导入--获取导入日志

- **接口路径 (Endpoint)**: `/api/kq/importlog/getImportColResultLog`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤导入--获取导入日志`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `importType` | `String` | 否 | 导入类型 |  |
| `pId` | `String` | 否 | 区分每次导入的唯一ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `sessionkey` | `String` | 分页组件所需的sessionkey |
| `status` | `String` | -1：接口异常、1：接口正常 |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "3e2f875a-65bf-422a-7d78-cf188a805afd_7A1904FEDFEC06D6BEF81CAA336B7E47",
  "status": "1"
}
```

---

### 69. 考勤导入--获取导入结果

- **接口路径 (Endpoint)**: `/api/kq/importlog/getImportResult`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤导入--获取导入结果`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `pId` | `String` | 否 | 导入数据的唯一ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `datas` | `Json` | 导入结果 |
| `status` | `String` | 1：接口正常、-1：接口异常 |

#### 响应示例 (Response Example)

```json
{
  "datas": {
    "succnum": 16,
    "failnum": 0
  },
  "status": "1"
}
```

---

### 70. 考勤导入--获取导入进行明细

- **接口路径 (Endpoint)**: `/api/kq/importlog/getImportProcessLog`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤导入--获取导入进行明细`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `importType` | `String` | 否 | 导入类型 |  |
| `index` | `String` | 否 | 导入数据中单条记录的索引值 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `datas` | `Json` | 导入结果 |
| `importStatus` | `String` | 导入状态 |
| `index` | `String` | 单条记录的索引 |
| `pId` | `String` | 导入过程中生成的一个代表单次导入的唯一ID |
| `status` | `String` | 1：接口正常、-1：接口异常 |

#### 响应示例 (Response Example)

```json
{
  "importStatus": "",
  "datas": [],
  "index": 62667,
  "pId": "",
  "status": "1"
}
```

---

### 71. 考勤报表右键菜单

- **接口路径 (Endpoint)**: `/api/kq/report/getRightMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表右键菜单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `reportType` | `String` | 否 | 报表类型 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `btnMenu` | `Json` | 右键菜单数据 |

#### 响应示例 (Response Example)

```json
{
  "btnMenu": [
    {
      "isTop": "1",
      "menuFun": "showAll()",
      "menuIcon": "icon-coms-Flow-setting",
      "menuName": "不显示无账号人员",
      "type": "BTN_SHOW_NOACCOUNT"
    },
    {
      "isTop": "1",
      "menuFun": "exportExcel()",
      "menuIcon": "icon-coms-export",
      "menuName": "导出Excel",
      "type": "BTN_Export_Excel"
    },
    {
      "isTop": "0",
      "menuFun": "reportFormat",
      "menuIcon": "icon-coms-investigate",
      "menuName": "格式化考勤数据",
      "type": "BTN_KQ_REPORT_FORMAT"
    }
  ]
}
```

---

### 72. 考勤报表导出

- **接口路径 (Endpoint)**: `/api/kq/report/exportExcel`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表导出`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `attendanceSerial` | `String` | 否 | 班次 |  |
| `isNoAccount` | `String` | 否 | 是否无账号 |  |
| `reportType` | `String` | 否 | 报表类型 |  |
| `resourceId` | `String` | 否 | 人员id |  |
| `showColumns` | `String` | 否 | 显示字段 |  |
| `typeselect` | `String` | 否 | 日期类型 |  |
| `viewScope` | `String` | 否 | 查看范围 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `status` | `String` | 接口状态 |
| `url` | `String` | 文件路径 |

#### 响应示例 (Response Example)

```json
{
  "url": "/hrm/kq/tmpFile/考勤汇总报表20190807220417.xlsx",
  "status": "1"
}
```

---

### 73. 考勤报表异常明细

- **接口路径 (Endpoint)**: `/api/kq/report/detail/getKQReportDetail`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表异常明细`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `attendanceSerial` | `String` | 否 | 班次 |  |
| `departmentId` | `String` | 否 | 部门id |  |
| `fromDate` | `String` | 否 | 开始日期 |  |
| `isNoAccount` | `String` | 否 | 是否无账号 |  |
| `reportType` | `String` | 否 | 报表类型 |  |
| `resourceId` | `String` | 否 | 人员id |  |
| `subCompanyId` | `String` | 否 | 分部id |  |
| `tabKey` | `String` | 否 | 页签key |  |
| `toDate` | `String` | 否 | 结束日期 |  |
| `type` | `String` | 否 | 异常类型 |  |
| `typeselect` | `String` | 否 | 日期控件类型 |  |
| `viewScope` | `String` | 否 | 查看范围 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `dialogTitle` | `String` | 名称 |
| `sessionkey` | `String` | 分页控件key |
| `status` | `String` | 接口状态 |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "cb9b9b02-a34c-4468-b871-08167bcaeb6c_E15A41E437FACE69070F2593B1510216",
  "dialogTitle": "加班明细",
  "status": "1"
}
```

---

### 74. 考勤报表异常明细页签

- **接口路径 (Endpoint)**: `/api/kq/report/detail/getTabs`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表异常明细页签`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `type` | `String` | 否 | 异常类型 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `status` | `String` | 接口状态 |
| `tabs` | `Json` | 页签数据 |

#### 响应示例 (Response Example)

```json
{
  "tabs": [
    {
      "title": "已归档",
      "key": "1"
    },
    {
      "title": "未归档",
      "key": "2"
    }
  ],
  "status": "1"
}
```

---

### 75. 考勤报表明细

- **接口路径 (Endpoint)**: `/api/kq/report/detail/getDailyDetialInfo`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表明细`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `kqDate` | `String` | 否 | 考勤日期 |  |
| `resourceId` | `String` | 否 | 人员id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `dialogTitle` | `String` | 标题 |
| `signInfo` | `Json` | 签到信息 |
| `status` | `String` | 状态 |
| `table` | `Json` | 明细信息 |
| `userInfo` | `Json` | 用户信息 |

#### 响应示例 (Response Example)

```json
{
  "userInfo": {
    "messagerurl": "/messager/images/icon_m_wev8.jpg",
    "shiftInfo": "班次:xytest(09:00-12:0013:00-18:0019:00-21:00)",
    "shortname": "pfl1",
    "lastname": "pfl19041701",
    "schedual": "考勤组:zss-固定"
  },
  "signInfo": {
    "signInfo": "今日打卡2次，工时共计0.02小时"
  },
  "dialogTitle": "pfl19041701 2019-08-09  打卡明细",
  "table": {
    "columns": [
      {
        "dataIndex": "workTime",
        "title": "考勤时间",
        "key": "workTime"
      },
      {
        "dataIndex": "signTime",
        "title": "打卡时间",
        "key": "signTime"
      },
      {
        "dataIndex": "signStatus",
        "title": "打卡结果",
        "key": "signStatus"
      },
      {
        "dataIndex": "addr",
        "title": "打卡地址",
        "key": "addr"
      }
    ],
    "datas": [
      {
        "signTime": "11:27:37",
        "signStatus": "迟到148分钟",
        "addr": "",
        "workTime": "09:00"
      },
      {
        "signTime": "11:29:49",
        "signStatus": "早退31分钟",
        "addr": "",
        "workTime": "12:00"
      },
      {
        "signTime": "未打卡",
        "signStatus": "旷工300分钟",
        "addr": "",
        "workTime": "13:00"
      },
      {
        "signTime": "未打卡",
        "signStatus": "旷工300分钟",
        "addr": "",
        "workTime": "18:00"
      },
      {
        "signTime": "未打卡",
        "signStatus": "旷工120分钟",
        "addr": "",
        "workTime": "19:00"
      },
      {
        "signTime": "未打卡",
        "signStatus": "旷工120分钟",
        "addr": "",
        "workTime": "21:00"
      }
    ]
  },
  "status": "1"
}
```

---

### 76. 考勤报表权限共享--保存

- **接口路径 (Endpoint)**: `/api/kq/reportshare/saveReportShare`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表权限共享--保存`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `deptId` | `String` | 否 | 部门ID |  |
| `jobtitleId` | `String` | 否 | 岗位ID |  |
| `reportName` | `String` | 否 | 考勤报表类型 |  |
| `resourceIds` | `String` | 否 | 人员ID |  |
| `resourceType` | `String` | 否 | 共享对象类型 |  |
| `shareLevel` | `String` | 否 | 共享级别 |  |
| `subcomId` | `String` | 否 | 分部ID |  |
| `userId` | `String` | 否 | 对象ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | 1：保存成功、-1：保存失败 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 77. 考勤报表权限共享--删除

- **接口路径 (Endpoint)**: `/api/kq/reportshare/deleteReportShare`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表权限共享--删除`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ids` | `String` | 否 | 需要删除的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | 1：删除成功、-1：删除失败 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 78. 考勤报表权限共享--判断是否有权限

- **接口路径 (Endpoint)**: `/api/kq/reportshare/getHasRight`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表权限共享--判断是否有权限`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `hasRight` | `Bool` | true：有权限、false--没有权限 |

#### 响应示例 (Response Example)

```json
{
  "hasRight": true,
  "api_status": true
}
```

---

### 79. 考勤报表权限共享--获取列表

- **接口路径 (Endpoint)**: `/api/kq/reportshare/getSearchList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表权限共享--获取列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `reportName` | `String` | 否 | 报表名称：0-全部、1-考勤汇总报表、2-每日汇总报表、3-原始打卡记录、4-员工假期余额 |  |
| `resourceName` | `String` | 否 | 人员姓名 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `sessionkey` | `String` | 分页组件所需的sessionkey |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "340e42fa-a02c-fb7c-9c0a-5b3738d6c284_2EAB4FB8A8D5DFB149936AFDAAC0ED2B",
  "api_status": true
}
```

---

### 80. 考勤报表权限共享--获取右键菜单

- **接口路径 (Endpoint)**: `/api/kq/reportshare/getRightMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表权限共享--获取右键菜单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `btnMenu` | `Json` | 右键菜单JSON |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "btnMenu": [
    {
      "isTop": "1",
      "menuFun": "new",
      "menuIcon": "icon-coms-New-Flow",
      "menuName": "新建",
      "type": "BTN_Addnew"
    },
    {
      "isBatch": "1",
      "isTop": "1",
      "menuFun": "batchDelete",
      "menuIcon": "icon-coms-Batch-delete",
      "menuName": "批量删除",
      "type": "BTN_BatchDelete"
    },
    {
      "isTop": "0",
      "menuFun": "log",
      "menuIcon": "icon-coms-Print-log",
      "menuName": "日志",
      "type": "BTN_log"
    },
    {
      "isTop": "0",
      "menuFun": "custom",
      "menuIcon": "icon-coms-task-list",
      "menuName": "显示列定制",
      "type": "BTN_COLUMN"
    }
  ]
}
```

---

### 81. 考勤报表权限共享--获取表单

- **接口路径 (Endpoint)**: `/api/kq/reportshare/getReportShareForm`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表权限共享--获取表单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `condition` | `Json` | 表单JSON |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "reportName"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "报表名称",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "全部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "考勤汇总报表",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "每日统计报表",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "原始打卡记录",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "员工假期余额",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "resourceType"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "对象类型",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": true,
              "showname": "人力资源",
              "visible": true
            },
            {
              "disabled": false,
              "key": "7",
              "selected": false,
              "showname": "分权管理员",
              "visible": true
            },
            {
              "disabled": false,
              "key": "8",
              "selected": false,
              "showname": "系统管理员",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "tabs": [
              {
                "dataParams": {
                  "cmd": "List"
                },
                "isSearch": false,
                "key": "1",
                "name": "最近",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "2",
                "name": "同部门",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "3",
                "name": "我的下属",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "4",
                "name": "组织结构",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "5",
                "name": "常用组",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "6",
                "name": "所有人",
                "selected": false,
                "showOrder": 0
              }
            ],
            "title": "多人力资源",
            "type": "17",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "resourceIds"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "对象",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "$ref": "$.condition[0].items[1].options[0]"
            },
            {
              "$ref": "$.condition[0].items[1].options[1]"
            },
            {
              "$ref": "$.condition[0].items[1].options[2]"
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "管理员",
            "type": "adminAccount",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "resourceManagerIds"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "对象",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "$ref": "$.condition[0].items[1].options[0]"
            },
            {
              "$ref": "$.condition[0].items[1].options[1]"
            },
            {
              "$ref": "$.condition[0].items[1].options[2]"
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "shareLevel"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "共享级别",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "分部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "部门",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "人力资源",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "岗位",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "所有人",
              "visible": true
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "/spa/hrm/engine.html#/hrmengine/organization?showTree=false&type=subcompany&id=",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "tabs": [
              {
                "isSearch": false,
                "key": "2",
                "name": "组织结构",
                "selected": false,
                "showOrder": 0
              },
              {
                "dataParams": {
                  "list": "1"
                },
                "isSearch": true,
                "key": "1",
                "name": "按列表",
                "selected": false,
                "showOrder": 0
              }
            ],
            "title": "多分部",
            "type": "194",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "subcomId"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "分部",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "$ref": "$.condition[0].items[4].options[0]"
            },
            {
              "$ref": "$.condition[0].items[4].options[1]"
            },
            {
              "$ref": "$.condition[0].items[4].options[2]"
            },
            {
              "$ref": "$.condition[0].items[4].options[3]"
            },
            {
              "$ref": "$.condition[0].items[4].options[4]"
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "/spa/hrm/engine.html#/hrmengine/organization?showTree=false&type=department&id=",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "tabs": [
              {
                "isSearch": false,
                "key": "2",
                "name": "组织结构",
                "selected": false,
                "showOrder": 0
              },
              {
                "dataParams": {
                  "list": "1"
                },
                "isSearch": true,
                "key": "1",
                "name": "按列表",
                "selected": false,
                "showOrder": 0
              }
            ],
            "title": "多部门",
            "type": "57",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "deptId"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "部门",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "$ref": "$.condition[0].items[4].options[0]"
            },
            {
              "$ref": "$.condition[0].items[4].options[1]"
            },
            {
              "$ref": "$.condition[0].items[4].options[2]"
            },
            {
              "$ref": "$.condition[0].items[4].options[3]"
            },
            {
              "$ref": "$.condition[0].items[4].options[4]"
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "/spa/hrm/engine.html#/hrmengine/posts?id=",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "多岗位",
            "type": "278",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "jobtitleId"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "岗位",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "$ref": "$.condition[0].items[4].options[0]"
            },
            {
              "$ref": "$.condition[0].items[4].options[1]"
            },
            {
              "$ref": "$.condition[0].items[4].options[2]"
            },
            {
              "$ref": "$.condition[0].items[4].options[3]"
            },
            {
              "$ref": "$.condition[0].items[4].options[4]"
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "tabs": [
              {
                "dataParams": {
                  "cmd": "List"
                },
                "isSearch": false,
                "key": "1",
                "name": "最近",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "2",
                "name": "同部门",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "3",
                "name": "我的下属",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "4",
                "name": "组织结构",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "5",
                "name": "常用组",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "6",
                "name": "所有人",
                "selected": false,
                "showOrder": 0
              }
            ],
            "title": "多人力资源",
            "type": "17",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "userId"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "人力资源",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "$ref": "$.condition[0].items[4].options[0]"
            },
            {
              "$ref": "$.condition[0].items[4].options[1]"
            },
            {
              "$ref": "$.condition[0].items[4].options[2]"
            },
            {
              "$ref": "$.condition[0].items[4].options[3]"
            },
            {
              "$ref": "$.condition[0].items[4].options[4]"
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        }
      ]
    }
  ],
  "api_status": true
}
```

---

### 82. 考勤报表权限共享--获取高级搜索表单

- **接口路径 (Endpoint)**: `/api/kq/reportshare/getSearchCondition`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表权限共享--获取高级搜索表单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `condition` | `Json` | 高级搜索的表单JSON |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "reportName"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "报表名称",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "全部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "考勤汇总报表",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "每日统计报表",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "原始打卡记录",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "员工假期余额",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        }
      ]
    }
  ],
  "api_status": true
}
```

---

### 83. 考勤报表查询条件

- **接口路径 (Endpoint)**: `/api/kq/report/getSearchCondition`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 考勤报表查询条件`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `reportType` | `String` | 否 | 报表类型 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `conditions` | `Json` | 查询条件表单数据 |
| `showColumns` | `Json` | 显示字段 |
| `status` | `String` | 接口状态 |

#### 响应示例 (Response Example)

```json
{
  "conditions": [
    {
      "colSpan": 2,
      "domkey": [
        "typeselect"
      ],
      "fieldcol": 20,
      "label": "时间范围",
      "labelcol": 3,
      "options": [
        {
          "key": "1",
          "selected": false,
          "showname": "今天"
        },
        {
          "key": "2",
          "selected": false,
          "showname": "本周"
        },
        {
          "key": "3",
          "selected": true,
          "showname": "本月"
        },
        {
          "key": "7",
          "selected": false,
          "showname": "上个月"
        },
        {
          "key": "4",
          "selected": false,
          "showname": "本季"
        },
        {
          "key": "5",
          "selected": false,
          "showname": "本年"
        },
        {
          "key": "8",
          "selected": false,
          "showname": "上一年"
        },
        {
          "key": "6",
          "selected": false,
          "showname": "指定日期范围"
        }
      ],
      "quickSearch": false,
      "selectLinkageDatas": {
        "6": {
          "conditionType": "RANGEPICKER",
          "domkey": [
            "fromDate",
            "toDate"
          ]
        }
      },
      "viewAttr": 2
    },
    {
      "colSpan": 2,
      "domkey": [
        "viewScope"
      ],
      "fieldcol": 20,
      "label": "查看范围",
      "labelcol": 3,
      "options": [
        {
          "key": "0",
          "selected": true,
          "showname": "总部"
        },
        {
          "key": "1",
          "selected": false,
          "showname": "分部"
        },
        {
          "key": "2",
          "selected": false,
          "showname": "部门"
        },
        {
          "key": "3",
          "selected": false,
          "showname": "人员"
        }
      ],
      "quickSearch": false,
      "selectLinkageDatas": {
        "1": {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "/spa/hrm/engine.html#/hrmengine/organization?showTree=false&type=subcompany&id=",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 10,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "tabs": [
              {
                "isSearch": false,
                "key": "2",
                "name": "组织结构",
                "selected": false,
                "showOrder": 0
              },
              {
                "dataParams": {
                  "list": "1"
                },
                "isSearch": true,
                "key": "1",
                "name": "按列表",
                "selected": false,
                "showOrder": 0
              }
            ],
            "title": "多分部",
            "type": "194",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "subCompanyId"
          ],
          "entSearch": false,
          "fieldcol": 10,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "分部",
          "labelcol": 5,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        "2": {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "/spa/hrm/engine.html#/hrmengine/organization?showTree=false&type=department&id=",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 10,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "tabs": [
              {
                "isSearch": false,
                "key": "2",
                "name": "组织结构",
                "selected": false,
                "showOrder": 0
              },
              {
                "dataParams": {
                  "list": "1"
                },
                "isSearch": true,
                "key": "1",
                "name": "按列表",
                "selected": false,
                "showOrder": 0
              }
            ],
            "title": "多部门",
            "type": "57",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "departmentId"
          ],
          "entSearch": false,
          "fieldcol": 10,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "部门",
          "labelcol": 5,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        "3": {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 10,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "tabs": [
              {
                "dataParams": {
                  "cmd": "List"
                },
                "isSearch": false,
                "key": "1",
                "name": "最近",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "2",
                "name": "同部门",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "3",
                "name": "我的下属",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "4",
                "name": "组织结构",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "5",
                "name": "常用组",
                "selected": false,
                "showOrder": 0
              },
              {
                "isSearch": false,
                "key": "6",
                "name": "所有人",
                "selected": false,
                "showOrder": 0
              }
            ],
            "title": "多人力资源",
            "type": "17",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "resourceId"
          ],
          "entSearch": false,
          "fieldcol": 10,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "人员",
          "labelcol": 5,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        "4": {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "allLevel"
          ],
          "entSearch": false,
          "fieldcol": 10,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "包含下级下属",
          "labelcol": 5,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        }
      },
      "viewAttr": 2
    }
  ],
  "showColumns": [
    [
      {
        "cascadekey": "",
        "showname": "分部",
        "key": "subcompany",
        "selected": true
      },
      {
        "cascadekey": "",
        "showname": "部门",
        "key": "department",
        "selected": true
      },
      {
        "cascadekey": "",
        "showname": "岗位",
        "key": "jobtitle",
        "selected": false
      },
      {
        "cascadekey": "signout1",
        "showname": "to work 1",
        "key": "signin1",
        "selected": true
      },
      {
        "cascadekey": "signout2",
        "showname": "to work 2",
        "key": "signin2",
        "selected": true
      },
      {
        "cascadekey": "signout3",
        "showname": "to work 3",
        "key": "signin3",
        "selected": true
      },
      {
        "cascadekey": "",
        "showname": "应出勤天数",
        "key": "workdays",
        "selected": true
      },
      {
        "cascadekey": "",
        "showname": "应工作时长",
        "key": "workmins",
        "selected": true
      },
      {
        "cascadekey": "",
        "showname": "实际出勤天数",
        "key": "attendancedays",
        "selected": true
      },
      {
        "cascadekey": "",
        "showname": "实际工作时长",
        "key": "attendanceMins",
        "selected": true
      }
    ],
    [
      {
        "cascadekey": "beLateMins",
        "showname": "迟到",
        "key": "beLate",
        "selected": true
      },
      {
        "cascadekey": "graveBeLateMins",
        "showname": "严重迟到",
        "key": "graveBeLate",
        "selected": true
      },
      {
        "cascadekey": "leaveEarlyMins",
        "showname": "早退",
        "key": "leaveEearly",
        "selected": true
      },
      {
        "cascadekey": "graveLeaveEarlyMins",
        "showname": "严重早退",
        "key": "graveLeaveEarly",
        "selected": true
      },
      {
        "cascadekey": "absenteeismMins",
        "showname": "旷工",
        "key": "absenteeism",
        "selected": true
      },
      {
        "cascadekey": "",
        "showname": "漏签",
        "key": "forgotCheck",
        "selected": true
      },
      {
        "cascadekey": "",
        "showname": "请假",
        "key": "leave",
        "selected": true
      },
      {
        "cascadekey": "",
        "showname": "加班",
        "key": "overtime",
        "selected": true
      },
      {
        "cascadekey": "",
        "showname": "出差",
        "key": "businessLeave",
        "selected": true
      },
      {
        "cascadekey": "",
        "showname": "公出",
        "key": "officialBusiness",
        "selected": true
      }
    ]
  ],
  "status": "1"
}
```

---

### 84. 自动创建考勤流程设置表单

- **接口路径 (Endpoint)**: `/api/kq/wfSetting/statesShedule/saveStateProcSetCreateForm`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 自动创建考勤流程设置表单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `formName` | `String` | 否 | 表单名称 |  |
| `usedetail` | `String` | 否 | 是否启用明细 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 状态位 |
| `formId` | `String` | 创建后的表单id |
| `formName` | `String` | 创建后的表单名称 |
| `status` | `String` | 状态位 |

#### 响应示例 (Response Example)

```json
{
  "formId": -5095,
  "formName": "请假自定义表单ron",
  "api_status": true,
  "status": "1"
}
```

---

### 85. 节假日设置--保存导入的数据

- **接口路径 (Endpoint)**: `/api/kq/holidayset/saveImport`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--保存导入的数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `excelfile` | `String` | 否 | 导入的文件名 |  |
| `importType` | `String` | 否 | 导入类型 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `errorInfo` | `String` | 错误信息 |
| `message` | `String` | 提示信息 |
| `status` | `String` | -1：导入成功、1：导入失败 |

#### 响应示例 (Response Example)

```json
{
  "errorInfo": [],
  "api_status": true,
  "message": "Import Completed ",
  "status": "1"
}
```

---

### 86. 节假日设置--初始化节假日设置

- **接口路径 (Endpoint)**: `/api/kq/holidayset/initHolidaySet`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--初始化节假日设置`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `currentYear` | `String` | 否 | 指定年份 |  |
| `groupId` | `String` | 否 | 指定考勤组 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true--接口正常、false--接口异常 |
| `message` | `String` | 提示信息 |
| `status` | `String` | -1：初始化失败、1：初始化成功 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "message": "初始化成功",
  "status": "1"
}
```

---

### 87. 节假日设置--删除节假日设置

- **接口路径 (Endpoint)**: `/api/kq/holidayset/deleteHolidaySet`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--删除节假日设置`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ids` | `String` | 否 | 需要设置的节假日设置的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `message` | `String` | 提示信息 |
| `sign` | `Bool` | -1：删除成功、1：删除失败 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "删除成功"
}
```

---

### 88. 节假日设置--判断是否有权限

- **接口路径 (Endpoint)**: `/api/kq/holidayset/getHasRight`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--判断是否有权限`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `hasRight` | `Bool` | true-有、false-没有 |
| `status` | `String` | -1：接口异常、1：接口异常 |

#### 响应示例 (Response Example)

```json
{
  "hasRight": true,
  "status": "1"
}
```

---

### 89. 节假日设置--同步节假日设置

- **接口路径 (Endpoint)**: `/api/kq/holidayset/syncHolidaySet`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--同步节假日设置`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ids` | `String` | 否 | 需要同步的节假日设置的ID |  |
| `syncGroupIds` | `String` | 否 | 需要同步的考勤组ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | 1：同步成功、-1：同步失败 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 90. 节假日设置--新建节假日设置

- **接口路径 (Endpoint)**: `/api/kq/holidayset/addHolidaySet`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--新建节假日设置`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `changeType` | `String` | 否 | 调整类型：1-公众假日、2-工作日、3-休息日 |  |
| `endDate` | `String` | 否 | 结束日期 |  |
| `groupId` | `String` | 否 | 考勤组ID |  |
| `holidayDesc` | `String` | 否 | 描述 |  |
| `isSync` | `String` | 否 | 是否需要同步到其他考勤组 |  |
| `relatedDay` | `String` | 否 | 调配工作日时具体关联哪一个工作日 |  |
| `startDate` | `String` | 否 | 考试日期 |  |
| `syncGroupIds` | `String` | 否 | 需要同步的考勤组ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：保存成功、1：保存失败 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 91. 节假日设置--日历

- **接口路径 (Endpoint)**: `/api/kq/holidayset/getHolidaySetCalendar`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--日历`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `changeType` | `String` | 否 | 调整类型：1-公众假日、2-调配工作日、3-调配休息日 |  |
| `currentYear` | `String` | 否 | 指定年份 |  |
| `groupId` | `String` | 否 | 指定考勤组ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `data` | `Json` | 具体哪个日期做了哪类调整的JSON数据 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    [
      {
        "date": "2019-01-01",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 248,
        "fontColor": "#FFF",
        "desc": "元旦"
      },
      {
        "date": "2019-01-02",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-03",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-04",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-05",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-01-06",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-01-07",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-08",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-09",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-10",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-12",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-01-13",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-01-14",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-15",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-01-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-01-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-01-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-01-28",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-29",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-30",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-01-31",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      }
    ],
    [
      {
        "date": "2019-02-01",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-02",
        "bgColor": "#FF0000",
        "changeType": "2",
        "typeName": "调配工作日",
        "id": 249,
        "fontColor": "#FFF",
        "desc": "春节前调休"
      },
      {
        "date": "2019-02-03",
        "bgColor": "#FF0000",
        "changeType": "2",
        "typeName": "调配工作日",
        "id": 250,
        "fontColor": "#FFF",
        "desc": "春节前调休"
      },
      {
        "date": "2019-02-04",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 251,
        "fontColor": "#FFF",
        "desc": "除夕"
      },
      {
        "date": "2019-02-05",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 252,
        "fontColor": "#FFF",
        "desc": "春节"
      },
      {
        "date": "2019-02-06",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 253,
        "fontColor": "#FFF",
        "desc": "春节"
      },
      {
        "date": "2019-02-07",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 254,
        "fontColor": "#FFF",
        "desc": "春节"
      },
      {
        "date": "2019-02-08",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 255,
        "fontColor": "#FFF",
        "desc": "春节"
      },
      {
        "date": "2019-02-09",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 256,
        "fontColor": "#FFF",
        "desc": "春节"
      },
      {
        "date": "2019-02-10",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 257,
        "fontColor": "#FFF",
        "desc": "春节"
      },
      {
        "date": "2019-02-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-12",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-13",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-14",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-15",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-02-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-02-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-02-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-02-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-02-28",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      }
    ],
    [
      {
        "date": "2019-03-01",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-02",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-03-03",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-03-04",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-05",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-06",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-07",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-08",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-09",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-03-10",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-03-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-12",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-13",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-14",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-15",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-03-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-03-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-03-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-03-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-28",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-29",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-03-30",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-03-31",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      }
    ],
    [
      {
        "date": "2019-04-01",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-02",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-03",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-04",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-05",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 258,
        "fontColor": "#FFF",
        "desc": "清明节"
      },
      {
        "date": "2019-04-06",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 259,
        "fontColor": "#FFF",
        "desc": "清明节"
      },
      {
        "date": "2019-04-07",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 260,
        "fontColor": "#FFF",
        "desc": "清明节"
      },
      {
        "date": "2019-04-08",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-09",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-10",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-12",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-13",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-04-14",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-04-15",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-04-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-04-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-04-28",
        "bgColor": "#FF0000",
        "changeType": "2",
        "typeName": "调配工作日",
        "id": 261,
        "fontColor": "#FFF",
        "desc": "劳动节前调休"
      },
      {
        "date": "2019-04-29",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-04-30",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      }
    ],
    [
      {
        "date": "2019-05-01",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 262,
        "fontColor": "#FFF",
        "desc": "劳动节"
      },
      {
        "date": "2019-05-02",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 263,
        "fontColor": "#FFF",
        "desc": "劳动节"
      },
      {
        "date": "2019-05-03",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 264,
        "fontColor": "#FFF",
        "desc": "劳动节"
      },
      {
        "date": "2019-05-04",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 265,
        "fontColor": "#FFF",
        "desc": "劳动节"
      },
      {
        "date": "2019-05-05",
        "bgColor": "#FF0000",
        "changeType": "2",
        "typeName": "调配工作日",
        "id": 266,
        "fontColor": "#FFF",
        "desc": "劳动节后调休"
      },
      {
        "date": "2019-05-06",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-07",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-08",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-09",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-10",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-05-12",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-05-13",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-14",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-15",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-05-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-05-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-05-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-05-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-28",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-29",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-30",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-05-31",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      }
    ],
    [
      {
        "date": "2019-06-01",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-06-02",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-06-03",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-04",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-05",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-06",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-07",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 267,
        "fontColor": "#FFF",
        "desc": "端午节"
      },
      {
        "date": "2019-06-08",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 268,
        "fontColor": "#FFF",
        "desc": "端午节"
      },
      {
        "date": "2019-06-09",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 269,
        "fontColor": "#FFF",
        "desc": "端午节"
      },
      {
        "date": "2019-06-10",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-12",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-13",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-14",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-15",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-06-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-06-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-06-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-06-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-28",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-06-29",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-06-30",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      }
    ],
    [
      {
        "date": "2019-07-01",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 97,
        "fontColor": "#FFF",
        "desc": "123456"
      },
      {
        "date": "2019-07-02",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-03",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-04",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-05",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-06",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-07-07",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-07-08",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-09",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-10",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-12",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-13",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-07-14",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-07-15",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-07-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-07-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-07-28",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-07-29",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-30",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-07-31",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      }
    ],
    [
      {
        "date": "2019-08-01",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-02",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-03",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-08-04",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-08-05",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-06",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-07",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-08",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-09",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-10",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-08-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-08-12",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-13",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-14",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-15",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-08-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-08-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-08-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-08-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-28",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-29",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-30",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-08-31",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      }
    ],
    [
      {
        "date": "2019-09-01",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-09-02",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-03",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-04",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-05",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-06",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-07",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-09-08",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-09-09",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-10",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-12",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-13",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 270,
        "fontColor": "#FFF",
        "desc": "中秋节"
      },
      {
        "date": "2019-09-14",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 271,
        "fontColor": "#FFF",
        "desc": "中秋节"
      },
      {
        "date": "2019-09-15",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 272,
        "fontColor": "#FFF",
        "desc": "中秋节"
      },
      {
        "date": "2019-09-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-09-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-09-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-09-28",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-09-29",
        "bgColor": "#FF0000",
        "changeType": "2",
        "typeName": "调配工作日",
        "id": 273,
        "fontColor": "#FFF",
        "desc": "国庆节前调休"
      },
      {
        "date": "2019-09-30",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      }
    ],
    [
      {
        "date": "2019-10-01",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 274,
        "fontColor": "#FFF",
        "desc": "国庆节"
      },
      {
        "date": "2019-10-02",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 275,
        "fontColor": "#FFF",
        "desc": "国庆节"
      },
      {
        "date": "2019-10-03",
        "bgColor": "#00CC66",
        "changeType": "1",
        "typeName": "公众假日",
        "id": 276,
        "fontColor": "#FFF",
        "desc": "国庆节"
      },
      {
        "date": "2019-10-04",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 277,
        "fontColor": "#FFF",
        "desc": "国庆节"
      },
      {
        "date": "2019-10-05",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 278,
        "fontColor": "#FFF",
        "desc": "国庆节"
      },
      {
        "date": "2019-10-06",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 279,
        "fontColor": "#FFF",
        "desc": "国庆节"
      },
      {
        "date": "2019-10-07",
        "bgColor": "#0066FF",
        "changeType": "3",
        "typeName": "调配休息日",
        "id": 280,
        "fontColor": "#FFF",
        "desc": "国庆节"
      },
      {
        "date": "2019-10-08",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-09",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-10",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-12",
        "bgColor": "#FF0000",
        "changeType": "2",
        "typeName": "调配工作日",
        "id": 281,
        "fontColor": "#FFF",
        "desc": "国庆节后调休"
      },
      {
        "date": "2019-10-13",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-10-14",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-15",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-10-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-10-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-10-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-10-28",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-29",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-30",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-10-31",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      }
    ],
    [
      {
        "date": "2019-11-01",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-02",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-11-03",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-11-04",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-05",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-06",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-07",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-08",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-09",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-11-10",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-11-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-12",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-13",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-14",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-15",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-11-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-11-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-11-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-11-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-28",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-29",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-11-30",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      }
    ],
    [
      {
        "date": "2019-12-01",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-12-02",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-03",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-04",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-05",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-06",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-07",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-12-08",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-12-09",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-10",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-11",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-12",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-13",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-14",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-12-15",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-12-16",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-17",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-18",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-19",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-20",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-21",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-12-22",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-12-23",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-24",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-25",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-26",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-27",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-28",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-12-29",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#C0C0C0",
        "desc": ""
      },
      {
        "date": "2019-12-30",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      },
      {
        "date": "2019-12-31",
        "bgColor": "",
        "changeType": "",
        "typeName": "",
        "id": "",
        "fontColor": "#000000",
        "desc": ""
      }
    ]
  ],
  "api_status": true
}
```

---

### 92. 节假日设置--统计节假日设置数据

- **接口路径 (Endpoint)**: `/api/kq/holidayset/getHolidayCount`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--统计节假日设置数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `currentYear` | `String` | 否 | 指定年份 |  |
| `groupId` | `String` | 否 | 指定考勤组 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `type` | `Json` | 统计公众假日、调配工作日、调配休息日分别由多少 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "type": [
    {
      "bgColor": "#00cc66",
      "changeType": "1",
      "typeName": "公众假日",
      "value": 12
    },
    {
      "bgColor": "#ff0000",
      "changeType": "2",
      "typeName": "调配工作日",
      "value": 6
    },
    {
      "bgColor": "#0066ff",
      "changeType": "3",
      "typeName": "调配休息日",
      "value": 17
    }
  ]
}
```

---

### 93. 节假日设置--编辑节假日设置

- **接口路径 (Endpoint)**: `/api/kq/holidayset/editHolidaySet`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--编辑节假日设置`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `changeType` | `String` | 否 | 调整类型：1-公众假日、2-工作日、3-休息日 |  |
| `groupId` | `String` | 否 | 考勤组ID |  |
| `holidayDate` | `String` | 否 | 指定日期 |  |
| `holidayDesc` | `String` | 否 | 描述 |  |
| `id` | `String` | 否 | 节假日设置的ID |  |
| `isSync` | `String` | 否 | 是否需要同步至其他考勤组 |  |
| `relatedDay` | `String` | 否 | 调配工作日时关联的工作日 |  |
| `syncGroupIds` | `String` | 否 | 需要同步的考勤组 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true--接口正常、false--接口存在异常 |
| `message` | `String` | 提示信息 |
| `sign` | `String` | -1：保存失败、1：保存成功 |

#### 响应示例 (Response Example)

```json
{
  "sign": "1",
  "api_status": true,
  "message": "保存成功！"
}
```

---

### 94. 节假日设置--获取右键菜单

- **接口路径 (Endpoint)**: `/api/kq/holidayset/getRightMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--获取右键菜单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `groupId` | `String` | 否 | 考勤组的ID |  |
| `isList` | `String` | 否 | 当前页面时列表形式的还是日历形式的。true--列表形式 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `btnMenu` | `Json` | 右键菜单JSON |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "btnMenu": []
}
```

---

### 95. 节假日设置--获取同步的表单

- **接口路径 (Endpoint)**: `/api/kq/holidayset/getSyncForm`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--获取同步的表单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | true-接口正常、false-接口异常 |
| `condition` | `Json` | 表单JSON |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "items": [
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {
              "sqlWhere": " kqtype!=2 "
            },
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "groupname",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "考勤组",
            "type": "mkqgroup",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "syncGroupIds"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "同步考勤组",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "tipPosition": "bottom",
          "viewAttr": 3
        }
      ]
    }
  ],
  "api_status": true
}
```

---

### 96. 节假日设置--获取导入的表单

- **接口路径 (Endpoint)**: `/api/kq/holidayset/getImportForm`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--获取导入的表单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `importType` | `String` | 否 | 导入类型 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `condition` | `Json` | 表单JSON |
| `status` | `String` | 接口是否存在异常 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "title": "基本信息",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "templet"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "下载模板",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "/hrm/import/templet/KQHolidaySet.xls",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "RESOURCEIMG",
          "detailtype": 1,
          "domkey": [
            "excelfile"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "上传Excel",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        }
      ]
    },
    {
      "title": "导入说明",
      "defaultshow": true,
      "items": [
        {
          "link": "/hrm/import/templet/KQHolidaySet.xls",
          "index": 0,
          "value": "请先下载模板"
        },
        {
          "index": 1,
          "value": "填写模板数据后将文件上传。"
        },
        {
          "index": 2,
          "value": "【考勤组】是必填列，请填写考勤组的名称"
        },
        {
          "index": 3,
          "value": "【日期】列是必填列，日期格式为yyyy-MM-dd"
        },
        {
          "index": 4,
          "value": "【类型】列是必填列，只能选择公众假日、调配工作日、调配休息日中的一种，当选择类型为调配工作日时，【对应工作日】必须选择一个工作日"
        },
        {
          "index": 5,
          "value": "【对应工作日】列只当【类型】列选择“调配工作日”时才需要选择"
        },
        {
          "index": 6,
          "value": "暂时不支持为排班制的考勤组设置节假日"
        }
      ]
    }
  ],
  "api_status": true,
  "status": "1"
}
```

---

### 97. 节假日设置--获取新建或者编辑的表单

- **接口路径 (Endpoint)**: `/api/kq/holidayset/getHolidaySetForm`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--获取新建或者编辑的表单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `groupId` | `String` | 否 | 考勤组ID |  |
| `holidayDate` | `String` | 否 | 节假日日期 |  |
| `id` | `String` | 否 | 节假日设置的ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `condition` | `Json` | 表单的JSON |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "items": [
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": true,
            "linkUrl": "",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [
              {
                "name": "ze测试",
                "id": "1"
              }
            ],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "考勤组",
            "type": "kqgroup",
            "viewAttr": 1
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "groupId"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "考勤组",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "hasBorder": true
          },
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 1
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "DATEPICKER",
          "detailtype": 1,
          "domkey": [
            "holidayDate"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "日期",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "hasBorder": true
          },
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "2019-03-04",
          "viewAttr": 1
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "holidayDesc"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "说明",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 3,
          "domkey": [
            "changeType"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "类型",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "公众假日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": true,
              "showname": "调配休息日",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "调配工作日",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "3",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "relatedDay"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "对应工作日",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "星期一",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "星期二",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "星期三",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "星期四",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "星期五",
              "visible": true
            },
            {
              "disabled": false,
              "key": "5",
              "selected": false,
              "showname": "星期六",
              "visible": true
            },
            {
              "disabled": false,
              "key": "6",
              "selected": false,
              "showname": "星期日",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "0",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "CHECKBOX",
          "detailtype": 1,
          "domkey": [
            "isSync"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "同步到其他考勤组",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "otherParams": {
            "display": "switch"
          },
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {
              "sqlWhere": " kqtype!=2 "
            },
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-hrm",
            "iconBgcolor": "#217346",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": false,
            "linkUrl": "",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "groupname",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "考勤组",
            "type": "mkqgroup",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "syncGroupIds"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "同步考勤组",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        }
      ]
    }
  ],
  "api_status": true
}
```

---

### 98. 节假日设置--获取节假日设置的列表

- **接口路径 (Endpoint)**: `/api/kq/holidayset/getSearchList`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 节假日设置--获取节假日设置的列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `currentYear` | `String` | 否 | 指定年份 |  |
| `groupId` | `String` | 否 | 指定考勤组 |  |
| `holidayDesc` | `String` | 否 | 节假日描述 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口是否存在异常 |
| `sessionkey` | `String` | 分页组件所需的sessionkey |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "70efc34c-7a61-da9b-87a7-69a4a4d72859_E3EC208955C2564AF1CDD902F4678F24",
  "api_status": true
}
```

---

### 99. 获取考勤报表

- **接口路径 (Endpoint)**: `/api/kq/report/getKQReport`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 获取考勤报表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `attendanceSerial` | `String` | 否 | 班次 |  |
| `fromDate` | `String` | 否 | 开始日期 |  |
| `isNoAccount` | `String` | 否 | 是否无账号人员 |  |
| `reportType` | `String` | 否 | 报表类型 |  |
| `resourceId` | `String` | 否 | 人员id |  |
| `toDate` | `String` | 否 | 结束日期 |  |
| `typeselect` | `String` | 否 | 日期类型 |  |
| `viewScope` | `String` | 否 | 查看范围 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `columns` | `Json` | 表头 |
| `datas` | `Json` | 数据 |
| `holidays` | `Json` | 节假日 |
| `ishavenext` | `String` | 下一页 |
| `ishavepre` | `String` | 上一页 |
| `pagecount` | `String` | 页数 |
| `pageindex` | `String` | 页码 |
| `pagesize` | `String` | 每页数量 |

#### 响应示例 (Response Example)

```json
{
  "holidays": [],
  "ishavepre": 0,
  "pagecount": 809,
  "columns": [
    {
      "rowSpan": 2,
      "unit": "",
      "dataIndex": "lastname",
      "width": 105,
      "title": "姓名",
      "showDetial": "1",
      "key": "lastname"
    },
    {
      "rowSpan": 2,
      "unit": "",
      "dataIndex": "subcompany",
      "width": 105,
      "title": "分部",
      "showDetial": "1",
      "key": "subcompany"
    },
    {
      "rowSpan": 2,
      "unit": "",
      "dataIndex": "department",
      "width": 105,
      "title": "部门",
      "showDetial": "1",
      "key": "department"
    },
    {
      "rowSpan": 2,
      "unit": "",
      "dataIndex": "jobtitle",
      "width": 105,
      "title": "岗位",
      "showDetial": "1",
      "key": "jobtitle"
    },
    {
      "rowSpan": 2,
      "unit": "",
      "dataIndex": "workcode",
      "width": 105,
      "title": "编号",
      "showDetial": "1",
      "key": "workcode"
    },
    {
      "rowSpan": 2,
      "unit": "",
      "isdaily": "1",
      "dataIndex": "kqdate",
      "width": 105,
      "title": "日期",
      "showDetial": "1",
      "key": "kqdate"
    },
    {
      "rowSpan": 2,
      "unit": "",
      "isdaily": "1",
      "dataIndex": "serialid",
      "width": 205,
      "title": "班次",
      "showDetial": "1",
      "key": "serialid"
    },
    {
      "rowSpan": 1,
      "unit": "",
      "children": [
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signintime1",
          "colSpan": 1,
          "width": 105,
          "title": "打卡时间",
          "key": "signintime1"
        },
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signinstatus1",
          "colSpan": 1,
          "width": 105,
          "title": "打卡结果",
          "key": "signinstatus1"
        }
      ],
      "isdaily": "1",
      "dataIndex": "signin1",
      "width": 210,
      "title": "to work 1",
      "showDetial": "1",
      "key": "signin1"
    },
    {
      "rowSpan": 1,
      "unit": "",
      "children": [
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signouttime1",
          "colSpan": 1,
          "width": 105,
          "title": "打卡时间",
          "key": "signouttime1"
        },
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signoutstatus1",
          "colSpan": 1,
          "width": 105,
          "title": "打卡结果",
          "key": "signoutstatus1"
        }
      ],
      "isdaily": "1",
      "dataIndex": "signout1",
      "width": 210,
      "title": "下班1",
      "showDetial": "1",
      "key": "signout1"
    },
    {
      "rowSpan": 1,
      "unit": "",
      "children": [
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signintime2",
          "colSpan": 1,
          "width": 105,
          "title": "上班",
          "key": "signintime2"
        },
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signinstatus2",
          "colSpan": 1,
          "width": 105,
          "title": "打卡结果",
          "key": "signinstatus2"
        }
      ],
      "isdaily": "1",
      "dataIndex": "signin2",
      "width": 210,
      "title": "to work 2",
      "showDetial": "1",
      "key": "signin2"
    },
    {
      "rowSpan": 1,
      "unit": "",
      "children": [
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signouttime2",
          "colSpan": 1,
          "width": 105,
          "title": "打卡时间",
          "key": "signouttime2"
        },
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signoutstatus2",
          "colSpan": 1,
          "width": 105,
          "title": "打卡结果",
          "key": "signoutstatus2"
        }
      ],
      "isdaily": "1",
      "dataIndex": "signout2",
      "width": 210,
      "title": "下班2",
      "showDetial": "1",
      "key": "signout2"
    },
    {
      "rowSpan": 1,
      "unit": "",
      "children": [
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signintime3",
          "colSpan": 1,
          "width": 105,
          "title": "打卡时间",
          "key": "signintime3"
        },
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signinstatus3",
          "colSpan": 1,
          "width": 105,
          "title": "打卡结果",
          "key": "signinstatus3"
        }
      ],
      "isdaily": "1",
      "dataIndex": "signin3",
      "width": 210,
      "title": "to work 3",
      "showDetial": "1",
      "key": "signin3"
    },
    {
      "rowSpan": 1,
      "unit": "",
      "children": [
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signouttime3",
          "colSpan": 1,
          "width": 105,
          "title": "打卡时间",
          "key": "signouttime3"
        },
        {
          "rowSpan": 1,
          "unit": "",
          "dataIndex": "signoutstatus3",
          "colSpan": 1,
          "width": 105,
          "title": "打卡结果",
          "key": "signoutstatus3"
        }
      ],
      "isdaily": "1",
      "dataIndex": "signout3",
      "width": 210,
      "title": "下班3",
      "showDetial": "1",
      "key": "signout3"
    },
    {
      "rowSpan": 2,
      "unit": "天",
      "dataIndex": "workdays",
      "width": 65,
      "title": "应出勤天数",
      "showDetial": "1",
      "key": "workdays"
    },
    {
      "rowSpan": 2,
      "unit": "小时",
      "dataIndex": "workmins",
      "width": 65,
      "title": "应工作时长",
      "showDetial": "1",
      "key": "workmins"
    },
    {
      "rowSpan": 2,
      "unit": "天",
      "dataIndex": "attendancedays",
      "width": 65,
      "title": "实际出勤天数",
      "showDetial": "1",
      "key": "attendancedays"
    },
    {
      "rowSpan": 2,
      "unit": "小时",
      "dataIndex": "attendanceMins",
      "width": 65,
      "title": "实际工作时长",
      "showDetial": "1",
      "key": "attendanceMins"
    },
    {
      "rowSpan": 2,
      "unit": "次",
      "dataIndex": "beLate",
      "width": 65,
      "title": "迟到",
      "showDetial": "1",
      "key": "beLate"
    },
    {
      "rowSpan": 2,
      "unit": "小时",
      "dataIndex": "beLateMins",
      "width": 65,
      "title": "迟到时长",
      "showDetial": "1",
      "key": "beLateMins"
    },
    {
      "rowSpan": 2,
      "unit": "次",
      "dataIndex": "graveBeLate",
      "width": 65,
      "title": "严重迟到",
      "showDetial": "1",
      "key": "graveBeLate"
    },
    {
      "rowSpan": 2,
      "unit": "小时",
      "dataIndex": "graveBeLateMins",
      "width": 65,
      "title": "严重迟到时长",
      "showDetial": "1",
      "key": "graveBeLateMins"
    },
    {
      "rowSpan": 2,
      "unit": "次",
      "dataIndex": "leaveEearly",
      "width": 65,
      "title": "早退",
      "showDetial": "1",
      "key": "leaveEearly"
    },
    {
      "rowSpan": 2,
      "unit": "小时",
      "dataIndex": "leaveEarlyMins",
      "width": 65,
      "title": "早退时长",
      "showDetial": "1",
      "key": "leaveEarlyMins"
    },
    {
      "rowSpan": 2,
      "unit": "次",
      "dataIndex": "graveLeaveEarly",
      "width": 65,
      "title": "严重早退",
      "showDetial": "1",
      "key": "graveLeaveEarly"
    },
    {
      "rowSpan": 2,
      "unit": "小时",
      "dataIndex": "graveLeaveEarlyMins",
      "width": 65,
      "title": "严重早退时长",
      "showDetial": "1",
      "key": "graveLeaveEarlyMins"
    },
    {
      "rowSpan": 2,
      "unit": "次",
      "dataIndex": "absenteeism",
      "width": 65,
      "title": "旷工",
      "showDetial": "1",
      "key": "absenteeism"
    },
    {
      "rowSpan": 2,
      "unit": "小时",
      "dataIndex": "absenteeismMins",
      "width": 65,
      "title": "旷工时长",
      "showDetial": "1",
      "key": "absenteeismMins"
    },
    {
      "rowSpan": 2,
      "unit": "次",
      "dataIndex": "forgotCheck",
      "width": 65,
      "title": "漏签",
      "showDetial": "1",
      "key": "forgotCheck"
    },
    {
      "rowSpan": 1,
      "unit": "",
      "children": [
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_2",
          "colSpan": 1,
          "width": 65,
          "title": "年假-初始化",
          "showDetial": "1",
          "key": "leaveType_2"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_3",
          "colSpan": 1,
          "width": 65,
          "title": "带薪事假-初始化",
          "showDetial": "1",
          "key": "leaveType_3"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_4",
          "colSpan": 1,
          "width": 65,
          "title": "带薪病假-初始化",
          "showDetial": "1",
          "key": "leaveType_4"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_5",
          "colSpan": 1,
          "width": 65,
          "title": "调休-初始化",
          "showDetial": "1",
          "key": "leaveType_5"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_6",
          "colSpan": 1,
          "width": 65,
          "title": "事假-初始化",
          "showDetial": "1",
          "key": "leaveType_6"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_7",
          "colSpan": 1,
          "width": 65,
          "title": "病假-初始化",
          "showDetial": "1",
          "key": "leaveType_7"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_8",
          "colSpan": 1,
          "width": 65,
          "title": "产假-初始化",
          "showDetial": "1",
          "key": "leaveType_8"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_9",
          "colSpan": 1,
          "width": 65,
          "title": "陪产假-初始化",
          "showDetial": "1",
          "key": "leaveType_9"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_10",
          "colSpan": 1,
          "width": 65,
          "title": "婚假-初始化",
          "showDetial": "1",
          "key": "leaveType_10"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_11",
          "colSpan": 1,
          "width": 65,
          "title": "丧假-初始化",
          "showDetial": "1",
          "key": "leaveType_11"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_12",
          "colSpan": 1,
          "width": 65,
          "title": "哺乳假-初始化",
          "showDetial": "1",
          "key": "leaveType_12"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_14",
          "colSpan": 1,
          "width": 65,
          "title": "xy带薪假1",
          "showDetial": "1",
          "key": "leaveType_14"
        },
        {
          "rowSpan": 1,
          "unit": "天",
          "dataIndex": "leaveType_17",
          "colSpan": 1,
          "width": 65,
          "title": "pfl假",
          "showDetial": "1",
          "key": "leaveType_17"
        },
        {
          "rowSpan": 1,
          "unit": "小时",
          "dataIndex": "leaveType_18",
          "colSpan": 1,
          "width": 65,
          "title": "pfl假期2-改",
          "showDetial": "1",
          "key": "leaveType_18"
        }
      ],
      "dataIndex": "leave",
      "width": 910,
      "title": "请假",
      "showDetial": "1",
      "key": "leave"
    },
    {
      "rowSpan": 1,
      "unit": "",
      "children": [
        {
          "rowSpan": 1,
          "unit": "小时",
          "dataIndex": "workingDayOvertime",
          "colSpan": 1,
          "width": 65,
          "title": "工作日加班",
          "key": "workingDayOvertime"
        },
        {
          "rowSpan": 1,
          "unit": "小时",
          "dataIndex": "restDayOvertime",
          "colSpan": 1,
          "width": 65,
          "title": "休息日加班",
          "key": "restDayOvertime"
        },
        {
          "rowSpan": 1,
          "unit": "小时",
          "dataIndex": "holidayOvertime",
          "colSpan": 1,
          "width": 65,
          "title": "节假日加班",
          "key": "holidayOvertime"
        },
        {
          "rowSpan": 1,
          "unit": "小时",
          "dataIndex": "overtimeTotal",
          "colSpan": 1,
          "width": 65,
          "title": "总计",
          "key": "overtimeTotal"
        }
      ],
      "dataIndex": "overtime",
      "width": 260,
      "title": "加班",
      "showDetial": "1",
      "key": "overtime"
    },
    {
      "rowSpan": 2,
      "unit": "小时",
      "dataIndex": "businessLeave",
      "width": 65,
      "title": "出差",
      "showDetial": "1",
      "key": "businessLeave"
    },
    {
      "rowSpan": 2,
      "unit": "小时",
      "dataIndex": "officialBusiness",
      "width": 65,
      "title": "公出",
      "showDetial": "1",
      "key": "officialBusiness"
    }
  ],
  "datas": [
    {
      "subcompanyId": "559",
      "resourceId": "8840",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓23",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8840",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓23",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-02",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8840",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓23",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-03",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8840",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓23",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-04",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8840",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓23",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-05",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8840",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓23",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-06",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8840",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓23",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-07",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8840",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓23",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-08",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8840",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓23",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-09",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8839",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓25",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8839",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓25",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-02",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8839",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓25",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-03",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8839",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓25",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-04",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8839",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓25",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-05",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8839",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓25",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-06",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8839",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓25",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-07",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8839",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓25",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-08",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "559",
      "resourceId": "8839",
      "departmentId": "1222",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "JYT分部C",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "梦晓25",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "JYT品质部C",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-09",
      "jobtitleId": "0",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "444",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试003",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "444",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试003",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-02",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "444",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试003",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-03",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "444",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试003",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-04",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "444",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试003",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-05",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "444",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试003",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-06",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "444",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试003",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-07",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "444",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试003",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-08",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "444",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试003",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-09",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "456",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试|00|26",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "456",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试|00|26",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-02",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "456",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试|00|26",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-03",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "456",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试|00|26",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-04",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "456",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试|00|26",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-05",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "456",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试|00|26",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-06",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "456",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试|00|26",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-07",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "456",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试|00|26",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-08",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "43",
      "resourceId": "456",
      "departmentId": "116",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "泛微总部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "测试|00|26",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "宇宙部",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "测试工程师",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-09",
      "jobtitleId": "156",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3112",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六04",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3112",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六04",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-02",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3112",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六04",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-03",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3112",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六04",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-04",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3112",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六04",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-05",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3112",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六04",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-06",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3112",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六04",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-07",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3112",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六04",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-08",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3112",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六04",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-09",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3113",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六05",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3113",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六05",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-02",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3113",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六05",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-03",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3113",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六05",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-04",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3113",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六05",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-05",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3113",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六05",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-06",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3113",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六05",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-07",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3113",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六05",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-08",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3113",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六05",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-09",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3114",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六06",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3114",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六06",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-02",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3114",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六06",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-03",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3114",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六06",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-04",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3114",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六06",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-05",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3114",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六06",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-06",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3114",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六06",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-07",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3114",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六06",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-08",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3114",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六06",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-09",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3115",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六07",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3115",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六07",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-02",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3115",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六07",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-03",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3115",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六07",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-04",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3115",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六07",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-05",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3115",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六07",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-06",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3115",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六07",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-07",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3115",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六07",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-08",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3115",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六07",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-09",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3116",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六08",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3116",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六08",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-02",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3116",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六08",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-03",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3116",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六08",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-04",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3116",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六08",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-05",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3116",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六08",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-06",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3116",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六08",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-07",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3116",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六08",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-08",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3116",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六08",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-09",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3117",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六09",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3117",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六09",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-02",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3117",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六09",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-03",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3117",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六09",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-04",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3117",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六09",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-05",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3117",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六09",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-06",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3117",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六09",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-07",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3117",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六09",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-08",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "460",
      "resourceId": "3117",
      "departmentId": "870",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "ZZZ分部",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六09",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "ZZZ部门111",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "cyl分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-09",
      "jobtitleId": "449",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "0",
      "resourceId": "3118",
      "departmentId": "0",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六10",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "dly分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "450",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "0",
      "resourceId": "3118",
      "departmentId": "0",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六10",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "dly分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-02",
      "jobtitleId": "450",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "0",
      "resourceId": "3118",
      "departmentId": "0",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六10",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "dly分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-03",
      "jobtitleId": "450",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "0",
      "resourceId": "3118",
      "departmentId": "0",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六10",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "dly分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-04",
      "jobtitleId": "450",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "0",
      "resourceId": "3118",
      "departmentId": "0",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六10",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "dly分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-05",
      "jobtitleId": "450",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "0",
      "resourceId": "3118",
      "departmentId": "0",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六10",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "dly分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-06",
      "jobtitleId": "450",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "0",
      "resourceId": "3118",
      "departmentId": "0",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六10",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "dly分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-07",
      "jobtitleId": "450",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "0",
      "resourceId": "3118",
      "departmentId": "0",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六10",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "dly分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-08",
      "jobtitleId": "450",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "0",
      "resourceId": "3118",
      "departmentId": "0",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六10",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "dly分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-09",
      "jobtitleId": "450",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    },
    {
      "subcompanyId": "0",
      "resourceId": "3120",
      "departmentId": "0",
      "restDayOvertime": "",
      "overtimeTotal": "0.0",
      "signinstatus2": "",
      "signinstatus3": "",
      "forgotCheck": "0",
      "leave": "",
      "signinstatus1": "",
      "graveBeLateMins": "",
      "attendancedays": "",
      "graveLeaveEarlyMins": "",
      "subcompany": "",
      "attendanceMins": "",
      "businessLeave": "",
      "lastname": "盛小六12",
      "leaveType_5": "0.0",
      "graveLeaveEarly": "",
      "leaveType_4": "0.0",
      "absenteeism": "0",
      "officialBusiness": "",
      "leaveType_3": "0.0",
      "leaveType_2": "0.0",
      "leaveEarlyMins": "",
      "leaveType_9": "0.0",
      "leaveType_8": "0.0",
      "leaveType_7": "0.0",
      "leaveType_6": "0.0",
      "signoutstatus3": "",
      "signouttime1": "",
      "signouttime2": "",
      "signouttime3": "",
      "leaveEearly": "0",
      "leaveType_10": "0.0",
      "leaveType_12": "0.0",
      "leaveType_11": "0.0",
      "leaveType_14": "0.0",
      "workingDayOvertime": "",
      "beLateMins": "",
      "leaveType_18": "0.0",
      "leaveType_17": "0.0",
      "department": "",
      "signoutstatus1": "",
      "signoutstatus2": "",
      "jobtitle": "dly分部",
      "workcode": "",
      "absenteeismMins": "",
      "beLate": "0",
      "kqdate": "2019-08-01",
      "jobtitleId": "450",
      "workmins": "",
      "workdays": "",
      "serialid": "休息",
      "graveBeLate": "",
      "signintime3": "",
      "holidayOvertime": "",
      "signintime2": "",
      "signintime1": ""
    }
  ],
  "ishavenext": 1,
  "pagesize": 100,
  "count": 80889,
  "pageindex": 1
}
```

---

### 100. 获取考勤流程设置 动作设置

- **接口路径 (Endpoint)**: `/api/kq/wfSetting/statesShedule/getStateProcSetFlowWfSet`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 获取考勤流程设置 动作设置`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `id` | `String` | 否 | 考勤流程设置id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 状态位 |
| `defaultshow` | `Bool` | 是否显示 |
| `items` | `Json` | 结果集 |
| `status` | `String` | 状态位 |
| `title` | `String` | 标题 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "title": "基本信息",
  "defaultshow": true,
  "items": [
    {
      "table": {
        "columns": [
          {
            "com": [
              {
                "key": "fakeInp",
                "label": "",
                "otherParams": {},
                "quickSearch": false,
                "type": "TEXT",
                "viewAttr": 2
              }
            ],
            "dataIndex": "fakeInp",
            "width": "33%",
            "title": "执行动作",
            "key": "fakeInp"
          },
          {
            "com": [
              {
                "key": "field005",
                "label": "",
                "options": [
                  {
                    "disabled": false,
                    "key": "2",
                    "selected": true,
                    "showname": "节点前附加操作",
                    "visible": true
                  },
                  {
                    "disabled": false,
                    "key": "1",
                    "selected": false,
                    "showname": "节点后附加操作",
                    "visible": true
                  },
                  {
                    "disabled": false,
                    "key": "0",
                    "selected": false,
                    "showname": "出口附加规则",
                    "visible": true
                  }
                ],
                "otherParams": {},
                "quickSearch": false,
                "type": "SELECT",
                "viewAttr": 2
              }
            ],
            "dataIndex": "field005",
            "width": "33%",
            "title": "执行方式",
            "key": "field005"
          },
          {
            "com": [
              {
                "browserConditionParam": {
                  "asynLoadAll": false,
                  "checkStrictly": true,
                  "completeParams": {
                    "workflowid": "82669",
                    "noNeedActiveWfId": "1"
                  },
                  "conditionDataParams": {},
                  "dataParams": {
                    "workflowid": "82669",
                    "noNeedActiveWfId": "1"
                  },
                  "defaultExpandedLevel": 0,
                  "destDataParams": {
                    "workflowid": "82669",
                    "noNeedActiveWfId": "1"
                  },
                  "expandfirstnode": false,
                  "hasAddBtn": false,
                  "hasAdvanceSerach": true,
                  "hasBorder": false,
                  "hideVirtualOrg": false,
                  "idSeparator": ",",
                  "isAutoComplete": 1,
                  "isDetail": 0,
                  "isMultCheckbox": false,
                  "isSingle": false,
                  "linkUrl": "",
                  "noOperate": true,
                  "otherParams": {},
                  "pageSize": 20,
                  "quickSearchName": "",
                  "replaceDatas": [],
                  "scrollx": false,
                  "searchPlaceholder": "",
                  "showCheckStrictly": true,
                  "type": "workflowNode",
                  "viewAttr": 2
                },
                "key": "field006",
                "label": "",
                "otherParams": {
                  "isSingle": false,
                  "workflowid": "82669",
                  "noNeedActiveWfId": "1"
                },
                "quickSearch": false,
                "type": "BROWSER",
                "viewAttr": 2
              }
            ],
            "dataIndex": "field006",
            "width": "33%",
            "title": "节点/出口",
            "key": "field006"
          }
        ],
        "datas": [
          {
            "field008": "1",
            "fakeInp": "考勤报表统计",
            "field006": "99352",
            "field006span": "归档",
            "field005": "2",
            "field003": "81543",
            "fakeInpHelpful": "考勤统计Action需要配置在归档节点前、action触发后将重新清洗考勤数据到考勤报表中",
            "rowKey": "KqSplitAction"
          }
        ],
        "browsers": [
          {
            "com": [
              {
                "browserConditionParam": {
                  "asynLoadAll": false,
                  "checkStrictly": true,
                  "completeParams": {
                    "workflowId": "82669"
                  },
                  "conditionDataParams": {},
                  "dataParams": {
                    "workflowId": "82669"
                  },
                  "defaultExpandedLevel": 0,
                  "destDataParams": {
                    "workflowId": "82669"
                  },
                  "expandfirstnode": false,
                  "hasAddBtn": false,
                  "hasAdvanceSerach": true,
                  "hasBorder": false,
                  "hideVirtualOrg": false,
                  "idSeparator": ",",
                  "isAutoComplete": 1,
                  "isDetail": 0,
                  "isMultCheckbox": false,
                  "isSingle": false,
                  "linkUrl": "",
                  "noOperate": true,
                  "otherParams": {},
                  "pageSize": 20,
                  "quickSearchName": "",
                  "replaceDatas": [],
                  "scrollx": false,
                  "searchPlaceholder": "",
                  "showCheckStrictly": true,
                  "type": "wflink",
                  "viewAttr": 2
                },
                "key": "field006",
                "label": "",
                "otherParams": {
                  "$ref": "$.items[0].table.columns[2].com[0].otherParams"
                },
                "quickSearch": false,
                "type": "BROWSER",
                "viewAttr": 2
              }
            ],
            "dataIndex": "field006",
            "width": "50%",
            "title": "出口",
            "key": "field006"
          },
          {
            "com": [
              {
                "browserConditionParam": {
                  "asynLoadAll": false,
                  "checkStrictly": true,
                  "completeParams": {
                    "workflowid": "82669",
                    "noNeedActiveWfId": "1"
                  },
                  "conditionDataParams": {},
                  "dataParams": {
                    "workflowid": "82669",
                    "noNeedActiveWfId": "1"
                  },
                  "defaultExpandedLevel": 0,
                  "destDataParams": {
                    "workflowid": "82669",
                    "noNeedActiveWfId": "1"
                  },
                  "expandfirstnode": false,
                  "hasAddBtn": false,
                  "hasAdvanceSerach": true,
                  "hasBorder": false,
                  "hideVirtualOrg": false,
                  "idSeparator": ",",
                  "isAutoComplete": 1,
                  "isDetail": 0,
                  "isMultCheckbox": false,
                  "isSingle": false,
                  "linkUrl": "",
                  "noOperate": true,
                  "otherParams": {},
                  "pageSize": 20,
                  "quickSearchName": "",
                  "replaceDatas": [],
                  "scrollx": false,
                  "searchPlaceholder": "",
                  "showCheckStrictly": true,
                  "type": "workflowNode",
                  "viewAttr": 2
                },
                "key": "field006",
                "label": "",
                "otherParams": {
                  "$ref": "$.items[0].table.columns[2].com[0].otherParams"
                },
                "quickSearch": false,
                "type": "BROWSER",
                "viewAttr": 2
              }
            ],
            "dataIndex": "field006",
            "width": "50%",
            "title": "节点",
            "key": "field006"
          }
        ]
      }
    }
  ],
  "status": "1"
}
```

---

### 101. 获取考勤流程设置 字段对应信息

- **接口路径 (Endpoint)**: `/api/kq/wfSetting/statesShedule/getStateProcSetFlowWfFields`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 获取考勤流程设置 字段对应信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `id` | `String` | 否 | 考勤流程设置id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 状态位 |
| `condition` | `Json` | 结果集 |
| `status` | `String` | 状态位 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "title": "主表字段formtable_main_3755",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "select61"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTip": "单人力资源浏览按钮",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "补卡人",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "",
              "selected": false,
              "showname": "",
              "visible": true
            },
            {
              "disabled": false,
              "key": "resourceId___232985",
              "selected": true,
              "showname": "人",
              "visible": true
            },
            {
              "disabled": false,
              "key": "fromDate___232986",
              "selected": false,
              "showname": "开始日期",
              "visible": false
            },
            {
              "disabled": false,
              "key": "toDate___232987",
              "selected": false,
              "showname": "结束日期",
              "visible": false
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "select62"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTip": "日期浏览按钮",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "考勤开始日期",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "",
              "selected": false,
              "showname": "",
              "visible": true
            },
            {
              "disabled": false,
              "key": "resourceId___232985",
              "selected": false,
              "showname": "人",
              "visible": false
            },
            {
              "disabled": false,
              "key": "fromDate___232986",
              "selected": true,
              "showname": "开始日期",
              "visible": true
            },
            {
              "disabled": false,
              "key": "toDate___232987",
              "selected": false,
              "showname": "结束日期",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "select63"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTip": "日期浏览按钮",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "考勤结束日期",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "",
              "selected": false,
              "showname": "",
              "visible": true
            },
            {
              "disabled": false,
              "key": "resourceId___232985",
              "selected": false,
              "showname": "人",
              "visible": false
            },
            {
              "disabled": false,
              "key": "fromDate___232986",
              "selected": false,
              "showname": "开始日期",
              "visible": true
            },
            {
              "disabled": false,
              "key": "toDate___232987",
              "selected": true,
              "showname": "结束日期",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        }
      ]
    },
    {
      "title": "明细字段formtable_main_3755_dt1",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "select64"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTip": "日期浏览按钮",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "考勤日期",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "",
              "selected": false,
              "showname": "",
              "visible": true
            },
            {
              "disabled": false,
              "key": "detail_scheduletime___232989",
              "selected": false,
              "showname": "工作时段",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_atteStatus___232990",
              "selected": false,
              "showname": "状态",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_signtype___232991",
              "selected": false,
              "showname": "补卡类型",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_signdate___232988",
              "selected": true,
              "showname": "补卡日期",
              "visible": true
            },
            {
              "disabled": false,
              "key": "detail_signtime___232992",
              "selected": false,
              "showname": "补卡时间",
              "visible": false
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "select65"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTip": "单行文本框",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "工作时段",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "",
              "selected": false,
              "showname": "",
              "visible": true
            },
            {
              "disabled": false,
              "key": "detail_scheduletime___232989",
              "selected": true,
              "showname": "工作时段",
              "visible": true
            },
            {
              "disabled": false,
              "key": "detail_atteStatus___232990",
              "selected": false,
              "showname": "状态",
              "visible": true
            },
            {
              "disabled": false,
              "key": "detail_signtype___232991",
              "selected": false,
              "showname": "补卡类型",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_signdate___232988",
              "selected": false,
              "showname": "补卡日期",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_signtime___232992",
              "selected": false,
              "showname": "补卡时间",
              "visible": false
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "select66"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTip": "单行文本框",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "考勤状态",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "",
              "selected": false,
              "showname": "",
              "visible": true
            },
            {
              "disabled": false,
              "key": "detail_scheduletime___232989",
              "selected": false,
              "showname": "工作时段",
              "visible": true
            },
            {
              "disabled": false,
              "key": "detail_atteStatus___232990",
              "selected": true,
              "showname": "状态",
              "visible": true
            },
            {
              "disabled": false,
              "key": "detail_signtype___232991",
              "selected": false,
              "showname": "补卡类型",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_signdate___232988",
              "selected": false,
              "showname": "补卡日期",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_signtime___232992",
              "selected": false,
              "showname": "补卡时间",
              "visible": false
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "select67"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTip": "下拉选择框（签到、签退）",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "补卡类型",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "",
              "selected": false,
              "showname": "",
              "visible": true
            },
            {
              "disabled": false,
              "key": "detail_scheduletime___232989",
              "selected": false,
              "showname": "工作时段",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_atteStatus___232990",
              "selected": false,
              "showname": "状态",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_signtype___232991",
              "selected": true,
              "showname": "补卡类型",
              "visible": true
            },
            {
              "disabled": false,
              "key": "detail_signdate___232988",
              "selected": false,
              "showname": "补卡日期",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_signtime___232992",
              "selected": false,
              "showname": "补卡时间",
              "visible": false
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "select68"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTip": "时间浏览按钮",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "补卡时间",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "",
              "selected": false,
              "showname": "",
              "visible": true
            },
            {
              "disabled": false,
              "key": "detail_scheduletime___232989",
              "selected": false,
              "showname": "工作时段",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_atteStatus___232990",
              "selected": false,
              "showname": "状态",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_signtype___232991",
              "selected": false,
              "showname": "补卡类型",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_signdate___232988",
              "selected": false,
              "showname": "补卡日期",
              "visible": false
            },
            {
              "disabled": false,
              "key": "detail_signtime___232992",
              "selected": true,
              "showname": "补卡时间",
              "visible": true
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        }
      ]
    }
  ],
  "api_status": true,
  "status": "1"
}
```

---

### 102. 获取考勤流程设置 流程概览信息

- **接口路径 (Endpoint)**: `/api/kq/wfSetting/statesShedule/getStateProcSetFlowForm`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 获取考勤流程设置 流程概览信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `id` | `String` | 否 | 考勤流程设置id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 状态位 |
| `condition` | `Json` | 结果集 |
| `desc` | `Json` | 文字描述 |
| `status` | `String` | 状态位 |

#### 响应示例 (Response Example)

```json
{
  "condition": [
    {
      "title": "基本信息",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {
              "isWfTree": "1"
            },
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": true,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-workflow",
            "iconBgcolor": "#0079DE",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": true,
            "linkUrl": "",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "工作流",
            "type": "-99991",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "field001"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "流程路径",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": true,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-workflow",
            "iconBgcolor": "#0079DE",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": true,
            "linkUrl": "",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "表单名称",
            "type": "wfFormBrowser",
            "viewAttr": 3
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "field002"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTip": "根据所选考勤流程类型自动生成对应的考勤表单",
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "对应表单",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SWITCH",
          "detailtype": 1,
          "domkey": [
            "field005"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "启用",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "1",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "field006"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "考勤流程类型",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "-1",
              "selected": false,
              "showname": "",
              "visible": true
            },
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "请假流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "出差流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "公出流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "加班流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "5",
              "selected": false,
              "showname": "排班流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "6",
              "selected": false,
              "showname": "销假流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "7",
              "selected": false,
              "showname": "补卡流程",
              "visible": true
            }
          ],
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "0",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SWITCH",
          "detailtype": 1,
          "domkey": [
            "usedetail"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "启用明细",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "0",
          "viewAttr": 3
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "templetfile"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "模板文件",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "HrmCustomLeave_e9.jsp",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "templetmobilefile"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "模板文件（手机版）",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "HrmCustomLeave_e9.jsp",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "templetroute"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "模板地址",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "rules": "required|string",
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "value": "/workflow/request/ext4e9/",
          "viewAttr": 1
        }
      ]
    }
  ],
  "api_status": true,
  "desc": {
    "field006": {
      "0": "支持主表或者明细表单",
      "1": "支持主表或者明细表单",
      "2": "支持主表或者明细表单",
      "3": "支持主表或者明细表单",
      "4": "支持主表或者明细表单",
      "5": "仅支持明细表单",
      "6": "仅支持明细表单",
      "7": "仅支持明细表单"
    }
  },
  "status": "1"
}
```

---

### 103. 获取考勤流程设置的 tab页签数据

- **接口路径 (Endpoint)**: `/api/kq/wfSetting/statesShedule/getStateProcSetTabInfo`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 获取考勤流程设置的 tab页签数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `id` | `String` | 否 | 考勤流程设置id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 状态位 |
| `status` | `String` | 状态位 |
| `tabs` | `Json` | 结果集 |

#### 响应示例 (Response Example)

```json
{
  "tabs": [
    {
      "title": "考勤流程",
      "key": "1",
      "url": "/hrm/attendance/hrmAttProcSet/content.jsp?id=6&subcompanyid="
    },
    {
      "title": "考勤字段对应",
      "key": "2",
      "url": "/hrm/attendance/hrmAttProcSet/wfFields.jsp?id=6"
    },
    {
      "title": "动作设置",
      "key": "3",
      "url": "/hrm/attendance/hrmAttProcSet/wfSet.jsp?id=6"
    }
  ],
  "api_status": true,
  "status": "1"
}
```

---

### 104. 获取考勤流程设置的查询列表

- **接口路径 (Endpoint)**: `/api/kq/wfSetting/statesShedule/getStateProcSetListSearchList`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 获取考勤流程设置的查询列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `createdateselectselect` | `String` | 否 | 查询条件 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 状态位 |
| `sessionkey` | `String` | 结果列表key |
| `status` | `String` | 状态位 |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "_843A2BDDFCE4B82F669E8EA971D627F6",
  "api_status": true,
  "status": "1"
}
```

---

### 105. 获取考勤流程设置的查询条件

- **接口路径 (Endpoint)**: `/api/kq/wfSetting/statesShedule/getStateProcSetListSearchCondition`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 获取考勤流程设置的查询条件`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 状态位 |
| `conditions` | `Json` | 结果集 |
| `status` | `String` | 状态位 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true,
  "conditions": [
    {
      "title": "查询条件",
      "defaultshow": true,
      "items": [
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "INPUT",
          "detailtype": 1,
          "domkey": [
            "field001"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "流程路径",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "icon": "icon-coms-workflow",
            "iconBgcolor": "#0079DE",
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": true,
            "linkUrl": "",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "表单名称",
            "type": "wfFormBrowser",
            "viewAttr": 2
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "BROWSER",
          "detailtype": 1,
          "domkey": [
            "field002"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "对应表单",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "field003"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "表单类型",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "",
              "selected": false,
              "showname": "全部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "0",
              "selected": false,
              "showname": "自定义表单",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "系统表单",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "field005"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "状态",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "",
              "selected": false,
              "showname": "全部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "0",
              "selected": false,
              "showname": "禁用",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "启用",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "browserConditionParam": {
            "asynLoadAll": false,
            "checkStrictly": true,
            "completeParams": {},
            "conditionDataParams": {},
            "dataParams": {},
            "defaultExpandedLevel": 0,
            "destDataParams": {},
            "expandfirstnode": false,
            "hasAddBtn": false,
            "hasAdvanceSerach": true,
            "hasBorder": false,
            "hideVirtualOrg": false,
            "idSeparator": ",",
            "isAutoComplete": 1,
            "isDetail": 0,
            "isMultCheckbox": false,
            "isSingle": true,
            "linkUrl": "",
            "noOperate": true,
            "otherParams": {},
            "pageSize": 20,
            "quickSearchName": "",
            "replaceDatas": [],
            "scrollx": false,
            "searchPlaceholder": "",
            "showCheckStrictly": true,
            "title": "日期",
            "type": "2",
            "viewAttr": 2
          },
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "DATE",
          "detailtype": 1,
          "domkey": [
            "createdateselectselect",
            "createdateselectfrom",
            "createdateselectto"
          ],
          "entSearch": false,
          "fieldcol": 18,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "最后修改日期",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "0",
              "selected": true,
              "showname": "全部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "今天",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "本周",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "本月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "7",
              "selected": false,
              "showname": "上个月",
              "visible": true
            },
            {
              "disabled": false,
              "key": "4",
              "selected": false,
              "showname": "本季",
              "visible": true
            },
            {
              "disabled": false,
              "key": "5",
              "selected": false,
              "showname": "本年",
              "visible": true
            },
            {
              "disabled": false,
              "key": "8",
              "selected": false,
              "showname": "上一年",
              "visible": true
            },
            {
              "disabled": false,
              "key": "6",
              "selected": false,
              "showname": "指定日期范围",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        },
        {
          "belong": "PC",
          "checkbox": false,
          "checkboxValue": false,
          "colSpan": 2,
          "conditionType": "SELECT",
          "detailtype": 1,
          "domkey": [
            "field006"
          ],
          "entSearch": false,
          "fieldcol": 12,
          "hasBorder": false,
          "helpfulTipProps": {},
          "hide": false,
          "isBase64": false,
          "isQuickSearch": false,
          "label": "考勤流程类型",
          "labelcol": 6,
          "length": 0,
          "maxFilesNumber": 0,
          "maxUploadSize": 0,
          "multiSelection": false,
          "multiple": false,
          "options": [
            {
              "disabled": false,
              "key": "",
              "selected": false,
              "showname": "全部",
              "visible": true
            },
            {
              "disabled": false,
              "key": "0",
              "selected": false,
              "showname": "请假流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "1",
              "selected": false,
              "showname": "出差流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "2",
              "selected": false,
              "showname": "公出流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "3",
              "selected": false,
              "showname": "加班流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "5",
              "selected": false,
              "showname": "排班流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "6",
              "selected": false,
              "showname": "销假流程",
              "visible": true
            },
            {
              "disabled": false,
              "key": "7",
              "selected": false,
              "showname": "补卡流程",
              "visible": true
            }
          ],
          "precision": 0,
          "showOrder": 0,
          "stringLength": 0,
          "supportCancel": false,
          "tipPosition": "bottom",
          "viewAttr": 2
        }
      ]
    }
  ],
  "status": "1"
}
```

---

### 106. 调休--判断是否有权限

- **接口路径 (Endpoint)**: `/api/kq/tiaoxiu/getHasRight`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 调休--判断是否有权限`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应示例 (Response Example)

```json
{}
```

---

### 107. 重新计算考勤报表

- **接口路径 (Endpoint)**: `/api/kq/report/format`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `考勤 > 重新计算考勤报表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `attendanceSerial` | `String` | 否 | 班次 |  |
| `isNoAccount` | `String` | 否 | 是否无账号 |  |
| `resourceId` | `String` | 否 | 人员id |  |
| `typeselect` | `String` | 否 | 日期类型 |  |
| `viewScope` | `String` | 否 | 查看范围 |  |

#### 响应示例 (Response Example)

```json
{}
```

---
