# 泛微OA 门户管理 (Portal) 后端接口文档

> **模块简介**：包含门户元素加载、菜单结构、快捷方式、数据中心元素、待办角标、多门户配置与布局数据等76个门户API。
> **接口数量**：共收录 `76` 个后端 REST 接口。

## 目录导航

1. [【文档中心】元素创建文档按钮权限判断接口 (`POST` `/api/portal/elementsetdoc/docsetright`)](#1-【文档中心】元素创建文档按钮权限判断接口)
2. [前端门户页面获取页面以及元素数据列表接口 (`POST` `/api/portal/homepage/hpdata`)](#2-前端门户页面获取页面以及元素数据列表接口)
3. [获取【图表】元素sql模板库设置页面信息 (`POST` `/api/portal/sqltemplate/datas`)](#3-获取【图表】元素sql模板库设置页面信息)
4. [获取主题配置 (`GET` `/api/portal/themeConfig/getThemeConfig`)](#4-获取主题配置)
5. [获取任务元素设置信息和数据方法 (`POST` `/api/portal/element/task`)](#5-获取任务元素设置信息和数据方法)
6. [获取任务元素设置信息和数据方法 (`POST` `/api/portal/element/tasktab`)](#6-获取任务元素设置信息和数据方法)
7. [获取任务计划元素设置信息和数据方法 (`POST` `/api/portal/element/worktask`)](#7-获取任务计划元素设置信息和数据方法)
8. [获取元素tab数据 (`GET` `/api/mobile/portal/elements/tab`)](#8-获取元素tab数据)
9. [获取元素设置页面数据接口 (`POST` `/api/portal/setting/esetting`)](#9-获取元素设置页面数据接口)
10. [获取前端菜单信息 (`GET` `/api/portal/menu/getFrontEndMenu`)](#10-获取前端菜单信息)
11. [获取后台菜单信息接口 (`GET` `/api/portal/menu/getBackEndMenu`)](#11-获取后台菜单信息接口)
12. [获取多新闻中心元素设置信息和数据方法 (`POST` `/api/portal/element/morenews`)](#12-获取多新闻中心元素设置信息和数据方法)
13. [获取多新闻中心元素设置信息和数据方法 (`POST` `/api/portal/element/coremail`)](#13-获取多新闻中心元素设置信息和数据方法)
14. [获取工具栏更多菜单 (`GET` `/api/portal/toolbarMore/getToolbarMoreMenu`)](#14-获取工具栏更多菜单)
15. [获取工具栏菜单 (`GET` `/api/portal/toolbar/getToolbarMenu`)](#15-获取工具栏菜单)
16. [获取当前账号和多账号列表 (`GET` `/api/portal/account/getAccount`)](#16-获取当前账号和多账号列表)
17. [获取快捷搜索类型 (`GET` `/api/portal/quickSearch/getQuickSearchTypes`)](#17-获取快捷搜索类型)
18. [获取快捷搜索类型 (`GET` `/api/portal/quickSearchMaintenance/getQuickSearchTypes`)](#18-获取快捷搜索类型)
19. [获取我的主题 (`GET` `/api/portal/themeCenter/getMyTheme`)](#19-获取我的主题)
20. [获取用户常用菜单数据 (`POST` `/api/portal/frequsemenu/getdata`)](#20-获取用户常用菜单数据)
21. [获取登录前门户信息 (`POST` `/api/portal/login/logininfo`)](#21-获取登录前门户信息)
22. [获取系统版本 (`GET` `/api/portal/systemInfo/getVersion`)](#22-获取系统版本)
23. [获取账号菜单 (`GET` `/api/portal/account/getAccountMenu`)](#23-获取账号菜单)
24. [获取通告栏元素设置信息和数据方法 (`POST` `/api/portal/element/notice`)](#24-获取通告栏元素设置信息和数据方法)
25. [获取门户【RSS】元素列表信息 (`POST` `/api/portal/element/rsstab`)](#25-获取门户【rss】元素列表信息)
26. [获取门户【RSS】元素列表信息 (`POST` `/api/portal/element/rss`)](#26-获取门户【rss】元素列表信息)
27. [获取门户【个人数据】元素列表信息 (`POST` `/api/portal/element/datacenter`)](#27-获取门户【个人数据】元素列表信息)
28. [获取门户【人员看板元素】信息 (`POST` `/api/portal/element/hdpanel/getListData`)](#28-获取门户【人员看板元素】信息)
29. [获取门户【人员看板元素】设置信息 (`POST` `/api/portal/element/hdpanel/getSettingDate`)](#29-获取门户【人员看板元素】设置信息)
30. [获取门户【会议日历】元素信息 (`POST` `/api/portal/element/meetingCalendar`)](#30-获取门户【会议日历】元素信息)
31. [获取门户【便签元素】元素列表信息 (`POST` `/api/portal/element/scratchpad`)](#31-获取门户【便签元素】元素列表信息)
32. [获取门户【公司新闻】元素信息 (`POST` `/api/portal/element/loginnewstab`)](#32-获取门户【公司新闻】元素信息)
33. [获取门户【公司新闻】元素信息 (`POST` `/api/portal/element/loginnews`)](#33-获取门户【公司新闻】元素信息)
34. [获取门户【公告元素】元素信息 (`POST` `/api/portal/element/newnotice`)](#34-获取门户【公告元素】元素信息)
35. [获取门户【图片元素】列表信息 (`POST` `/api/portal/element/picture`)](#35-获取门户【图片元素】列表信息)
36. [获取门户【图表元素】元素列表信息 (`POST` `/api/portal/element/reportformtab`)](#36-获取门户【图表元素】元素列表信息)
37. [获取门户【图表元素】元素列表信息 (`POST` `/api/portal/element/reportform`)](#37-获取门户【图表元素】元素列表信息)
38. [获取门户【外部数据元素】列表信息 (`POST` `/api/portal/element/outdatatab`)](#38-获取门户【外部数据元素】列表信息)
39. [获取门户【外部数据元素】列表信息 (`POST` `/api/portal/element/outdata`)](#39-获取门户【外部数据元素】列表信息)
40. [获取门户【多图元素】信息 (`POST` `/api/portal/element/imgslide`)](#40-获取门户【多图元素】信息)
41. [获取门户【多岗位办理事项】元素信息 (`POST` `/api/portal/element/jobsinfo`)](#41-获取门户【多岗位办理事项】元素信息)
42. [获取门户【天气元素】元素列表信息 (`POST` `/api/portal/element/weather`)](#42-获取门户【天气元素】元素列表信息)
43. [获取门户【幻灯片】元素列表信息 (`POST` `/api/portal/element/slide`)](#43-获取门户【幻灯片】元素列表信息)
44. [获取门户【建模查询中心】列表信息 (`POST` `/api/portal/element/formmodecustomsearch`)](#44-获取门户【建模查询中心】列表信息)
45. [获取门户【建模查询中心】列表信息 (`POST` `/api/portal/element/formmodecustomsearchtab`)](#45-获取门户【建模查询中心】列表信息)
46. [获取门户【当日计划】元素列表信息 (`POST` `/api/portal/element/dayplan`)](#46-获取门户【当日计划】元素列表信息)
47. [获取门户【微博动态】元素列表信息 (`POST` `/api/portal/element/blogstatus`)](#47-获取门户【微博动态】元素列表信息)
48. [获取门户【快捷入口】元素信息 (`POST` `/api/portal/element/quickentry`)](#48-获取门户【快捷入口】元素信息)
49. [获取门户【我的协作】元素列表信息 (`POST` `/api/portal/element/cooperation`)](#49-获取门户【我的协作】元素列表信息)
50. [获取门户【我的协作】元素列表信息 (`POST` `/api/portal/element/cooperationtab`)](#50-获取门户【我的协作】元素列表信息)
51. [获取门户【我的协作】元素列表信息 (`POST` `/api/portal/element/cooperation`)](#51-获取门户【我的协作】元素列表信息)
52. [获取门户【我的邮件】元素列表信息 (`POST` `/api/portal/element/mail`)](#52-获取门户【我的邮件】元素列表信息)
53. [获取门户【我的项目】元素列表信息 (`POST` `/api/portal/element/projects`)](#53-获取门户【我的项目】元素列表信息)
54. [获取门户【我的项目】元素列表信息 (`POST` `/api/portal/element/projectstab`)](#54-获取门户【我的项目】元素列表信息)
55. [获取门户【收藏元素】元素列表信息 (`POST` `/api/portal/element/favourite`)](#55-获取门户【收藏元素】元素列表信息)
56. [获取门户【文档中心】元素数据 (`POST` `/api/portal/element/newstab`)](#56-获取门户【文档中心】元素数据)
57. [获取门户【文档中心】元素数据 (`POST` `/api/portal/element/news`)](#57-获取门户【文档中心】元素数据)
58. [获取门户【文档内容】元素列表信息 (`POST` `/api/portal/element/doccontent`)](#58-获取门户【文档内容】元素列表信息)
59. [获取门户【新建流程】元素信息 (`POST` `/api/portal/element/addwftab`)](#59-获取门户【新建流程】元素信息)
60. [获取门户【新建流程】元素信息 (`POST` `/api/portal/element/addwf`)](#60-获取门户【新建流程】元素信息)
61. [获取门户【日历日程】元素列表信息 (`POST` `/api/portal/element/mycalendar`)](#61-获取门户【日历日程】元素列表信息)
62. [获取门户【最新会议】元素列表信息 (`POST` `/api/portal/element/newmeeting`)](#62-获取门户【最新会议】元素列表信息)
63. [获取门户【最新客户/未读文档】元素列表信息 (`POST` `/api/portal/element/view`)](#63-获取门户【最新客户未读文档】元素列表信息)
64. [获取门户【期刊中心】元素列表信息 (`POST` `/api/portal/element/magazine`)](#64-获取门户【期刊中心】元素列表信息)
65. [获取门户【流程中心】元素数据 (`POST` `/api/portal/element/workflowtab`)](#65-获取门户【流程中心】元素数据)
66. [获取门户【流程中心】元素数据 (`POST` `/api/portal/element/workflow`)](#66-获取门户【流程中心】元素数据)
67. [获取门户【自定义菜单】元素列表信息 (`POST` `/api/portal/element/custommenu`)](#67-获取门户【自定义菜单】元素列表信息)
68. [获取门户【自定义页面】元素列表信息 (`POST` `/api/portal/element/custompagetab`)](#68-获取门户【自定义页面】元素列表信息)
69. [获取门户【自定义页面】元素列表信息 (`POST` `/api/portal/element/custompage`)](#69-获取门户【自定义页面】元素列表信息)
70. [获取门户【视频元素】元素列表信息 (`POST` `/api/portal/element/video`)](#70-获取门户【视频元素】元素列表信息)
71. [获取门户【通讯录】元素信息列表 (`POST` `/api/portal/element/contacts`)](#71-获取门户【通讯录】元素信息列表)
72. [获取门户【通讯录】元素信息列表 (`POST` `/api/portal/element/contactstab`)](#72-获取门户【通讯录】元素信息列表)
73. [获取门户【集成登录】元素信息 (`POST` `/api/portal/element/outtersys`)](#73-获取门户【集成登录】元素信息)
74. [获取门户【音频元素】元素列表信息 (`POST` `/api/portal/element/audio`)](#74-获取门户【音频元素】元素列表信息)
75. [获取门户菜单 (`GET` `/api/portal/menu/getPortalMenu`)](#75-获取门户菜单)
76. [设置我的主题字体大小 (`POST` `/api/portal/themeCenter/setMyFontSize`)](#76-设置我的主题字体大小)

---

## 接口详细说明

### 1. 【文档中心】元素创建文档按钮权限判断接口

- **接口路径 (Endpoint)**: `/api/portal/elementsetdoc/docsetright`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 【文档中心】元素创建文档按钮权限判断接口`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ids` | `String` | 否 | 文档目录id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `canEdit` | `Bool` | 是否可以创建元素 |

#### 响应示例 (Response Example)

```json
{
  "canEdit": "true"
}
```

---

### 2. 前端门户页面获取页面以及元素数据列表接口

- **接口路径 (Endpoint)**: `/api/portal/homepage/hpdata`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 前端门户页面获取页面以及元素数据列表接口`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `areaflag` | `String` | 否 | 布局区域 |  |
| `ebaseid` | `String` | 否 | 元素基本信息表中的id |  |
| `eids` | `String` | 否 | eid页面中元素的唯一key |  |
| `formdata` | `String` | 否 | 流程表单字段数据 |  |
| `hpid` | `String` | 否 | 门户页面id |  |
| `isfromhp` | `String` | 否 | 固定值0 |  |
| `isfromportal` | `String` | 否 | 是否来门户 |  |
| `isSetting` | `String` | 否 | 是否门户设置页面 |  |
| `issynergysetting` | `String` | 否 | 是否协同区设置 |  |
| `pagetype` | `String` | 否 | 页面类型 |  |
| `requestid` | `String` | 否 | 流程表单id |  |
| `subcompanyid` | `String` | 否 | 分部id |  |
| `viewtype` | `String` | 否 | 打开元素设置页面or页面预览 |  |
| `workflowid` | `String` | 否 | 流程ID |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `hasRight` | `Bool` | 是否有权限 |
| `hpCss` | `String` | 页面以及元素样式 |
| `hpinfo` | `Json` | 元素信息 |
| `rcmenu` | `Json` | 右键菜单信息 |

#### 响应示例 (Response Example)

```json
{
  "hpinfo": {
    "bLayoutid": "2",
    "bgcolor": "#7b7be7",
    "isremembertab": true,
    "hpid": "206",
    "subCompanyId": 35,
    "hpname": "sch01",
    "styleid": "synergys4",
    "isSetting": false,
    "layoutFlags": [
      {
        "areasize": "60%",
        "areaflag": "A",
        "style": {},
        "areaElements": [
          {
            "item": {
              "eid": "2171",
              "contentview": {
                "style": {},
                "url": "/page/element/Video/View.jsp?ebaseid=video&eid=2171&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "video",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/Video/resource/image/video_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "视频元素",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "2171",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "video"
            }
          },
          {
            "item": {
              "eid": "2148",
              "contentview": {
                "style": {
                  "overflow": "auto",
                  "height": "200px"
                },
                "url": "/page/element/Picture/View.jsp?ebaseid=picture&eid=2148&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "picture",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/Picture/resource/image/picture_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "图片元素",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "2148",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "picture"
            }
          },
          {
            "item": {
              "eid": "1939",
              "contentview": {
                "style": {
                  "overflow": "auto",
                  "height": "350px"
                },
                "url": "/page/element/compatible/view.jsp?ebaseid=13&eid=1939&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "13",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/compatible/more.jsp?ebaseid=13&eid=1939"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/13/resource/image/13_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "我的协作11",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1939",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "13"
            }
          },
          {
            "item": {
              "eid": "2135",
              "contentview": {
                "style": {},
                "url": "/page/element/Video/View.jsp?ebaseid=video&eid=2135&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "video",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/Video/resource/image/video_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "视频元素",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "2135",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "video"
            }
          },
          {
            "item": {
              "eid": "2169",
              "contentview": {
                "style": {},
                "url": "/page/element/DataCenter/View.jsp?ebaseid=DataCenter&eid=2169&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "DataCenter",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/DataCenter/resource/image/PersonalData_wev8.png",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "个人数据",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "2169",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "DataCenter"
            }
          },
          {
            "item": {
              "eid": "2170",
              "contentview": {
                "style": {},
                "url": "/page/element/DataCenter/View.jsp?ebaseid=DataCenter&eid=2170&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "DataCenter",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/DataCenter/resource/image/PersonalData_wev8.png",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "内容文字",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "2170",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "DataCenter"
            }
          },
          {
            "item": {
              "eid": "2133",
              "contentview": {
                "style": {},
                "url": "/page/element/DataCenter/View.jsp?ebaseid=DataCenter&eid=2133&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "DataCenter",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/DataCenter/resource/image/PersonalData_wev8.png",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "展现图标",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "2133",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "DataCenter"
            }
          },
          {
            "item": {
              "eid": "2132",
              "contentview": {
                "style": {},
                "url": "/page/element/DataCenter/View.jsp?ebaseid=DataCenter&eid=2132&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "DataCenter",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/DataCenter/resource/image/PersonalData_wev8.png",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "个人数据",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "2132",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "DataCenter"
            }
          },
          {
            "item": {
              "eid": "2090",
              "contentview": {
                "style": {
                  "overflow": "auto",
                  "height": "250px"
                },
                "url": "/page/element/7/News.jsp?ebaseid=7&eid=2090&styleid=synergys2&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "7",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys2",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/synergy/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/compatible/more.jsp?ebaseid=7&eid=2090"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/7/resource/image/7_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "文档中心",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "2090",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys2",
              "ebaseid": "7"
            }
          },
          {
            "item": {
              "eid": "2116",
              "contentview": {
                "style": {},
                "url": "/page/element/outterSys/View.jsp?ebaseid=outterSys&eid=2116&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "outterSys",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/outterSys/MoreView.jsp?ebaseid=outterSys&eid=2116"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/outterSys/resource/image/jobsinfo_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "集成登录",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "2116",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "outterSys"
            }
          },
          {
            "item": {
              "eid": "2096",
              "contentview": {
                "style": {},
                "url": "/page/element/25/DocContent.jsp?ebaseid=25&eid=2096&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "25",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/25/resource/image/25_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "文档内容",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "2096",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "25"
            }
          },
          {
            "item": {
              "eid": "1979",
              "contentview": {
                "style": {
                  "overflow": "auto",
                  "height": "450px"
                },
                "url": "/page/element/Slide/View.jsp?ebaseid=Slide&eid=1979&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "Slide",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/Slide/resource/image/slide_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "幻灯片",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1979",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "Slide"
            }
          },
          {
            "item": {
              "eid": "1972",
              "contentview": {
                "style": {},
                "url": "/page/element/jobsinfo/View.jsp?ebaseid=jobsinfo&eid=1972&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "jobsinfo",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/jobsinfo/resource/image/jobsinfo_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "多岗位办理事项",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1972",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "jobsinfo"
            }
          },
          {
            "item": {
              "eid": "1938",
              "contentview": {
                "style": {
                  "overflow": "auto",
                  "height": "510px"
                },
                "url": "/page/element/Picture/View.jsp?ebaseid=picture&eid=1938&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "picture",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/Picture/resource/image/picture_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "图片元素",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1938",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "picture"
            }
          },
          {
            "item": {
              "eid": "1937",
              "contentview": {
                "style": {
                  "overflow": "auto",
                  "height": "440px"
                },
                "url": "/page/element/blogStatus/View.jsp?ebaseid=blogStatus&eid=1937&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "blogStatus",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/blog/blogView.jsp?ebaseid=blogStatus&eid=1937"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/blogStatus/resource/image/blogStatus_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "微博动态",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1937",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "blogStatus"
            }
          },
          {
            "item": {
              "eid": "1936",
              "contentview": {
                "style": {
                  "overflow": "auto",
                  "height": "440px"
                },
                "url": "/page/element/blogStatus/View.jsp?ebaseid=blogStatus&eid=1936&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "blogStatus",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/blog/blogView.jsp?ebaseid=blogStatus&eid=1936"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/blogStatus/resource/image/blogStatus_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "微博动态",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1936",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "blogStatus"
            }
          },
          {
            "item": {
              "eid": "1824",
              "contentview": {
                "style": {},
                "url": "/page/element/7/News.jsp?ebaseid=7&eid=1824&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "7",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/compatible/more.jsp?ebaseid=7&eid=1824"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/7/resource/image/7_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "",
                "title": "文档中心",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1824",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "7"
            }
          },
          {
            "item": {
              "eid": "1935",
              "contentview": {
                "style": {
                  "overflow": "auto",
                  "height": "200px"
                },
                "url": "/page/element/addwf/View.jsp?ebaseid=addwf&eid=1935&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "addwf",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/addwf/resource/image/addwf_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "新建流程",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1935",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "addwf"
            }
          },
          {
            "item": {
              "eid": "1924",
              "contentview": {
                "style": {
                  "overflow": "auto",
                  "height": "440px"
                },
                "url": "/page/element/compatible/view.jsp?ebaseid=6&eid=1924&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "6",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/compatible/more.jsp?ebaseid=6&eid=1924"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/6/resource/image/6_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "未读文档",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "1px",
                "marginBottom": "1px",
                "position": "relative",
                "marginTop": "11px",
                "marginLeft": "1px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1924",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "6"
            }
          },
          {
            "item": {
              "eid": "1901",
              "contentview": {
                "style": {},
                "url": "/page/element/Picture/View.jsp?ebaseid=picture&eid=1901&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "picture",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/Picture/resource/image/picture_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "图片元素",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1901",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "picture"
            }
          },
          {
            "item": {
              "eid": "1869",
              "contentview": {
                "style": {},
                "url": "/page/element/19/Stock.jsp?ebaseid=19&eid=1869&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "19",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/19/resource/image/19_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "股票元素",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1869",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "19"
            }
          },
          {
            "item": {
              "eid": "1851",
              "contentview": {
                "style": {
                  "overflow": "auto",
                  "height": "440px"
                },
                "url": "/page/element/compatible/view.jsp?ebaseid=10&eid=1851&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "10",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/compatible/more.jsp?ebaseid=10&eid=1851"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/10/resource/image/10_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "我的项目 ",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1851",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "10"
            }
          },
          {
            "item": {
              "eid": "1831",
              "contentview": {
                "style": {},
                "url": "/page/element/25/DocContent.jsp?ebaseid=25&eid=1831&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "25",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": ""
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/25/resource/image/25_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "文档内容",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1831",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "25"
            }
          },
          {
            "item": {
              "eid": "1830",
              "contentview": {
                "style": {},
                "url": "/page/element/7/News.jsp?ebaseid=7&eid=1830&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "7",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/compatible/more.jsp?ebaseid=7&eid=1830"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/7/resource/image/7_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "文档中心",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1830",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "7"
            }
          },
          {
            "item": {
              "eid": "1825",
              "contentview": {
                "style": {
                  "overflow": "auto",
                  "height": "440px"
                },
                "url": "/page/element/compatible/view.jsp?ebaseid=6&eid=1825&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "6",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/compatible/more.jsp?ebaseid=6&eid=1825"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/6/resource/image/6_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "未读文档",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "1px",
                "marginBottom": "1px",
                "position": "relative",
                "marginTop": "11px",
                "marginLeft": "1px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1825",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "6"
            }
          },
          {
            "item": {
              "eid": "1823",
              "contentview": {
                "style": {},
                "url": "/page/element/OutData/View.jsp?ebaseid=OutData&eid=1823&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "OutData",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/OutData/more.jsp?ebaseid=OutData&eid=1823"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/OutData/resource/image/8_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "",
                "title": "外部数据元素",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1823",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "OutData"
            }
          },
          {
            "item": {
              "eid": "1822",
              "contentview": {
                "style": {},
                "url": "/page/element/compatible/view.jsp?ebaseid=13&eid=1822&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "13",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/compatible/more.jsp?ebaseid=13&eid=1822"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/13/resource/image/13_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "未读协作",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1822",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "13"
            }
          },
          {
            "item": {
              "eid": "1821",
              "contentview": {
                "style": {},
                "url": "/page/element/compatible/view.jsp?ebaseid=6&eid=1821&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "6",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/compatible/more.jsp?ebaseid=6&eid=1821"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/6/resource/image/6_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "未读文档",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1821",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "6"
            }
          },
          {
            "item": {
              "eid": "1819",
              "contentview": {
                "style": {},
                "url": "/page/element/7/News.jsp?ebaseid=7&eid=1819&styleid=synergys4&hpid=206&subCompanyId=35"
              },
              "cornerTopRadian": "8px",
              "cornerBottomRadian": "5px",
              "custom": {},
              "cornerBottom": "Right",
              "ebaseid": "7",
              "fontStyle": {
                "tab2fontsize": "12",
                "titlefontsize": "12",
                "tab1fontsize": "12",
                "contentfontsize": "12"
              },
              "styleid": "synergys4",
              "cornerTop": "Right",
              "header": {
                "toolbar": {
                  "more": {
                    "img": "/page/resource/userfile/image/ecology8/more_wev8.png",
                    "display": "",
                    "title": "更多",
                    "morehref": "/page/element/compatible/more.jsp?ebaseid=7&eid=1819"
                  },
                  "lock": {
                    "img": "/page/resource/userfile/image/synergy/unlock_wev8.png",
                    "display": "",
                    "title": "上锁/解锁",
                    "status": "unlocked"
                  },
                  "refresh": {
                    "img": "/page/resource/userfile/image/synergy/reflush_wev8.png",
                    "display": "",
                    "title": "刷新"
                  },
                  "close": {
                    "img": "/page/resource/userfile/image/synergy/close_wev8.png",
                    "display": "",
                    "title": "关闭"
                  },
                  "setting": {
                    "img": "/page/resource/userfile/image/synergy/setting_wev8.png",
                    "display": "",
                    "title": "设置"
                  }
                },
                "canHeadbar": true,
                "isSetting": false,
                "iconimg": {
                  "src": "/page/element/7/resource/image/7_wev8.gif",
                  "title": "收缩/展开"
                },
                "onmousedown": "dragStart(event,this)",
                "style": {
                  "cursor": "move",
                  "display": "block!important",
                  "width": "auto",
                  "position": "relative",
                  "_width": "100%"
                },
                "sharelevel": "2",
                "title": "文档中心",
                "displayPosition": "bottom"
              },
              "style": {
                "marginRight": "0px",
                "marginBottom": "0px",
                "position": "relative",
                "marginTop": "10px",
                "marginLeft": "0px"
              },
              "needRefresh": "true"
            },
            "isHasRight": true,
            "params": {
              "eid": "1819",
              "hpid": "206",
              "subCompanyId": 35,
              "styleid": "synergys4",
              "ebaseid": "7"
            }
          }
        ]
      },
      {
        "areasize": "",
        "areaflag": "B",
        "style": {},
        "areaElements": []
      }
    ]
  },
  "hpCss": ".item {\n background-color: rgb(255, 255, 255);\n }\n#item_2090 \n .header {\n background-color: rgb(252, 120, 120);\n border-style: solid none none;\n border-width: 1px medium medium;\n border-color: rgb(218, 76, 76) rgb(0, 0, 0) rgb(0, 0, 0);\n height: 30px;\n }\n#item_2090 \n .toolbar {\n right: 5px;\n top: 9px;\n }\n#item_2090 \n .toolbar ul {\n margin: 0px;\n padding: 0px;\n list-style-type: none;\n }\n#item_2090 \n .toolbar ul li a {\n float: left;\n display: block;\n padding: 0px 3px;\n text-decoration: none;\n }\n#item_2090 \n .toolbar ul li {\n float: left;\n height: 1px;\n }\n#item_2090 \n .toolbar ul li a {\n height: 0px;\n }\n#item_2090 \n .icon {\n display: none;\n left: 15px;\n top: 7px;\n }\n#item_2090 \n .title {\n font-style: normal;\n font-size: 12px;\n font-weight: normal;\n left: 10px;\n top: 8px;\n color: rgb(255, 255, 255) !important;\n font-family: 微软雅黑 !important;\n }\n#item_2090 \n .content {\n background-color: transparent;\n background-image: none;\n background-repeat: repeat;\n background-position: 329px 329px;\n border-style: none solid solid;\n border-width: 0px 1px 1px;\n border-color: rgb(29, 22, 22) rgb(219, 219, 219) rgb(219, 219, 219);\n overflow: auto;\n padding: 5px;\n }\n#item_2090 \n .font {\n font-style: normal;\n font-weight: normal;\n text-decoration: none;\n font-size: 14px !important;\n color: rgb(123, 122, 122) !important;\n font-family: 微软雅黑 !important;\n }\n#item_2090 \n .font:hover {\n font-style: normal;\n font-size: 12px;\n font-weight: normal;\n text-decoration: none;\n color: rgb(77, 76, 76) !important;\n font-family: 微软雅黑 !important;\n }\n#item_2090 \n .sparator td {\n border-bottom: 1px dashed rgb(240, 240, 240);\n }\n#item_2090 \n .tab2 {\n background-image: url(\"/page/resource/userfile/image/ecology8/tabbg1_wev8.png\");\n }\n#item_2090 \n .tab2unselected {\n background-image: url(\"/page/resource/userfile/image/ecology8/tabbg1_wev8.png\");\n background-repeat: no-repeat;\n cursor: pointer;\n text-align: center;\n padding-top: 5px;\n width: 77px;\n vertical-align: middle;\n font-style: normal;\n font-size: 12px;\n font-weight: normal;\n color: rgb(189, 189, 189) !important;\n font-family: 微软雅黑 !important;\n }\n#item_2090 \n .tab2selected {\n background-repeat: no-repeat;\n font-style: normal;\n font-size: 12px;\n font-weight: normal;\n text-align: center;\n padding-top: 5px;\n width: 77px;\n cursor: pointer;\n vertical-align: middle;\n border-bottom: 1px solid rgb(252, 120, 120);\n color: rgb(252, 120, 120) !important;\n font-family: 微软雅黑 !important;\n }\n\n.item {\n background-color: rgb(255, 255, 255);\n }\n#item_1819 \n .header ,#item_1821 \n .header ,#item_1822 \n .header ,#item_1823 \n .header ,#item_1824 \n .header ,#item_1825 \n .header ,#item_1830 \n .header ,#item_1831 \n .header ,#item_1851 \n .header ,#item_1869 \n .header ,#item_1901 \n .header ,#item_1924 \n .header ,#item_1935 \n .header ,#item_1936 \n .header ,#item_1937 \n .header ,#item_1938 \n .header ,#item_1939 \n .header ,#item_1972 \n .header ,#item_1979 \n .header ,#item_2096 \n .header ,#item_2116 \n .header ,#item_2132 \n .header ,#item_2133 \n .header ,#item_2135 \n .header ,#item_2148 \n .header ,#item_2169 \n .header ,#item_2170 \n .header ,#item_2171 \n .header {\n background-color: rgb(101, 77, 157);\n border-style: solid none none;\n border-width: 1px medium medium;\n border-color: rgb(60, 39, 109) rgb(0, 0, 0) rgb(0, 0, 0);\n height: 30px;\n }\n#item_1819 \n .toolbar ,#item_1821 \n .toolbar ,#item_1822 \n .toolbar ,#item_1823 \n .toolbar ,#item_1824 \n .toolbar ,#item_1825 \n .toolbar ,#item_1830 \n .toolbar ,#item_1831 \n .toolbar ,#item_1851 \n .toolbar ,#item_1869 \n .toolbar ,#item_1901 \n .toolbar ,#item_1924 \n .toolbar ,#item_1935 \n .toolbar ,#item_1936 \n .toolbar ,#item_1937 \n .toolbar ,#item_1938 \n .toolbar ,#item_1939 \n .toolbar ,#item_1972 \n .toolbar ,#item_1979 \n .toolbar ,#item_2096 \n .toolbar ,#item_2116 \n .toolbar ,#item_2132 \n .toolbar ,#item_2133 \n .toolbar ,#item_2135 \n .toolbar ,#item_2148 \n .toolbar ,#item_2169 \n .toolbar ,#item_2170 \n .toolbar ,#item_2171 \n .toolbar {\n right: 5px;\n top: 9px;\n }\n#item_1819 \n .toolbar ul ,#item_1821 \n .toolbar ul ,#item_1822 \n .toolbar ul ,#item_1823 \n .toolbar ul ,#item_1824 \n .toolbar ul ,#item_1825 \n .toolbar ul ,#item_1830 \n .toolbar ul ,#item_1831 \n .toolbar ul ,#item_1851 \n .toolbar ul ,#item_1869 \n .toolbar ul ,#item_1901 \n .toolbar ul ,#item_1924 \n .toolbar ul ,#item_1935 \n .toolbar ul ,#item_1936 \n .toolbar ul ,#item_1937 \n .toolbar ul ,#item_1938 \n .toolbar ul ,#item_1939 \n .toolbar ul ,#item_1972 \n .toolbar ul ,#item_1979 \n .toolbar ul ,#item_2096 \n .toolbar ul ,#item_2116 \n .toolbar ul ,#item_2132 \n .toolbar ul ,#item_2133 \n .toolbar ul ,#item_2135 \n .toolbar ul ,#item_2148 \n .toolbar ul ,#item_2169 \n .toolbar ul ,#item_2170 \n .toolbar ul ,#item_2171 \n .toolbar ul {\n margin: 0px;\n padding: 0px;\n list-style-type: none;\n }\n#item_1819 \n .toolbar ul li a ,#item_1821 \n .toolbar ul li a ,#item_1822 \n .toolbar ul li a ,#item_1823 \n .toolbar ul li a ,#item_1824 \n .toolbar ul li a ,#item_1825 \n .toolbar ul li a ,#item_1830 \n .toolbar ul li a ,#item_1831 \n .toolbar ul li a ,#item_1851 \n .toolbar ul li a ,#item_1869 \n .toolbar ul li a ,#item_1901 \n .toolbar ul li a ,#item_1924 \n .toolbar ul li a ,#item_1935 \n .toolbar ul li a ,#item_1936 \n .toolbar ul li a ,#item_1937 \n .toolbar ul li a ,#item_1938 \n .toolbar ul li a ,#item_1939 \n .toolbar ul li a ,#item_1972 \n .toolbar ul li a ,#item_1979 \n .toolbar ul li a ,#item_2096 \n .toolbar ul li a ,#item_2116 \n .toolbar ul li a ,#item_2132 \n .toolbar ul li a ,#item_2133 \n .toolbar ul li a ,#item_2135 \n .toolbar ul li a ,#item_2148 \n .toolbar ul li a ,#item_2169 \n .toolbar ul li a ,#item_2170 \n .toolbar ul li a ,#item_2171 \n .toolbar ul li a {\n float: left;\n display: block;\n padding: 0px 3px;\n text-decoration: none;\n }\n#item_1819 \n .toolbar ul li ,#item_1821 \n .toolbar ul li ,#item_1822 \n .toolbar ul li ,#item_1823 \n .toolbar ul li ,#item_1824 \n .toolbar ul li ,#item_1825 \n .toolbar ul li ,#item_1830 \n .toolbar ul li ,#item_1831 \n .toolbar ul li ,#item_1851 \n .toolbar ul li ,#item_1869 \n .toolbar ul li ,#item_1901 \n .toolbar ul li ,#item_1924 \n .toolbar ul li ,#item_1935 \n .toolbar ul li ,#item_1936 \n .toolbar ul li ,#item_1937 \n .toolbar ul li ,#item_1938 \n .toolbar ul li ,#item_1939 \n .toolbar ul li ,#item_1972 \n .toolbar ul li ,#item_1979 \n .toolbar ul li ,#item_2096 \n .toolbar ul li ,#item_2116 \n .toolbar ul li ,#item_2132 \n .toolbar ul li ,#item_2133 \n .toolbar ul li ,#item_2135 \n .toolbar ul li ,#item_2148 \n .toolbar ul li ,#item_2169 \n .toolbar ul li ,#item_2170 \n .toolbar ul li ,#item_2171 \n .toolbar ul li {\n float: left;\n height: 1px;\n }\n#item_1819 \n .toolbar ul li a ,#item_1821 \n .toolbar ul li a ,#item_1822 \n .toolbar ul li a ,#item_1823 \n .toolbar ul li a ,#item_1824 \n .toolbar ul li a ,#item_1825 \n .toolbar ul li a ,#item_1830 \n .toolbar ul li a ,#item_1831 \n .toolbar ul li a ,#item_1851 \n .toolbar ul li a ,#item_1869 \n .toolbar ul li a ,#item_1901 \n .toolbar ul li a ,#item_1924 \n .toolbar ul li a ,#item_1935 \n .toolbar ul li a ,#item_1936 \n .toolbar ul li a ,#item_1937 \n .toolbar ul li a ,#item_1938 \n .toolbar ul li a ,#item_1939 \n .toolbar ul li a ,#item_1972 \n .toolbar ul li a ,#item_1979 \n .toolbar ul li a ,#item_2096 \n .toolbar ul li a ,#item_2116 \n .toolbar ul li a ,#item_2132 \n .toolbar ul li a ,#item_2133 \n .toolbar ul li a ,#item_2135 \n .toolbar ul li a ,#item_2148 \n .toolbar ul li a ,#item_2169 \n .toolbar ul li a ,#item_2170 \n .toolbar ul li a ,#item_2171 \n .toolbar ul li a {\n height: 0px;\n }\n#item_1819 \n .icon ,#item_1821 \n .icon ,#item_1822 \n .icon ,#item_1823 \n .icon ,#item_1824 \n .icon ,#item_1825 \n .icon ,#item_1830 \n .icon ,#item_1831 \n .icon ,#item_1851 \n .icon ,#item_1869 \n .icon ,#item_1901 \n .icon ,#item_1924 \n .icon ,#item_1935 \n .icon ,#item_1936 \n .icon ,#item_1937 \n .icon ,#item_1938 \n .icon ,#item_1939 \n .icon ,#item_1972 \n .icon ,#item_1979 \n .icon ,#item_2096 \n .icon ,#item_2116 \n .icon ,#item_2132 \n .icon ,#item_2133 \n .icon ,#item_2135 \n .icon ,#item_2148 \n .icon ,#item_2169 \n .icon ,#item_2170 \n .icon ,#item_2171 \n .icon {\n display: none;\n left: 15px;\n top: 7px;\n }\n#item_1819 \n .title ,#item_1821 \n .title ,#item_1822 \n .title ,#item_1823 \n .title ,#item_1824 \n .title ,#item_1825 \n .title ,#item_1830 \n .title ,#item_1831 \n .title ,#item_1851 \n .title ,#item_1869 \n .title ,#item_1901 \n .title ,#item_1924 \n .title ,#item_1935 \n .title ,#item_1936 \n .title ,#item_1937 \n .title ,#item_1938 \n .title ,#item_1939 \n .title ,#item_1972 \n .title ,#item_1979 \n .title ,#item_2096 \n .title ,#item_2116 \n .title ,#item_2132 \n .title ,#item_2133 \n .title ,#item_2135 \n .title ,#item_2148 \n .title ,#item_2169 \n .title ,#item_2170 \n .title ,#item_2171 \n .title {\n font-style: normal;\n font-size: 12px;\n font-weight: normal;\n left: 10px;\n top: 8px;\n color: rgb(255, 255, 255) !important;\n font-family: 微软雅黑 !important;\n }\n#item_1819 \n .content ,#item_1821 \n .content ,#item_1822 \n .content ,#item_1823 \n .content ,#item_1824 \n .content ,#item_1825 \n .content ,#item_1830 \n .content ,#item_1831 \n .content ,#item_1851 \n .content ,#item_1869 \n .content ,#item_1901 \n .content ,#item_1924 \n .content ,#item_1935 \n .content ,#item_1936 \n .content ,#item_1937 \n .content ,#item_1938 \n .content ,#item_1939 \n .content ,#item_1972 \n .content ,#item_1979 \n .content ,#item_2096 \n .content ,#item_2116 \n .content ,#item_2132 \n .content ,#item_2133 \n .content ,#item_2135 \n .content ,#item_2148 \n .content ,#item_2169 \n .content ,#item_2170 \n .content ,#item_2171 \n .content {\n background-color: transparent;\n background-image: none;\n background-repeat: repeat;\n background-position: 329px 329px;\n border-style: none solid solid;\n border-width: 0px 1px 1px;\n border-color: rgb(29, 22, 22) rgb(219, 219, 219) rgb(219, 219, 219);\n overflow: auto;\n padding: 5px;\n }\n#item_1819 \n .font ,#item_1821 \n .font ,#item_1822 \n .font ,#item_1823 \n .font ,#item_1824 \n .font ,#item_1825 \n .font ,#item_1830 \n .font ,#item_1831 \n .font ,#item_1851 \n .font ,#item_1869 \n .font ,#item_1901 \n .font ,#item_1924 \n .font ,#item_1935 \n .font ,#item_1936 \n .font ,#item_1937 \n .font ,#item_1938 \n .font ,#item_1939 \n .font ,#item_1972 \n .font ,#item_1979 \n .font ,#item_2096 \n .font ,#item_2116 \n .font ,#item_2132 \n .font ,#item_2133 \n .font ,#item_2135 \n .font ,#item_2148 \n .font ,#item_2169 \n .font ,#item_2170 \n .font ,#item_2171 \n .font {\n font-style: normal;\n font-size: 12px;\n font-weight: normal;\n text-decoration: none;\n color: rgb(123, 122, 122) !important;\n font-family: 微软雅黑 !important;\n }\n#item_1819 \n .font:hover ,#item_1821 \n .font:hover ,#item_1822 \n .font:hover ,#item_1823 \n .font:hover ,#item_1824 \n .font:hover ,#item_1825 \n .font:hover ,#item_1830 \n .font:hover ,#item_1831 \n .font:hover ,#item_1851 \n .font:hover ,#item_1869 \n .font:hover ,#item_1901 \n .font:hover ,#item_1924 \n .font:hover ,#item_1935 \n .font:hover ,#item_1936 \n .font:hover ,#item_1937 \n .font:hover ,#item_1938 \n .font:hover ,#item_1939 \n .font:hover ,#item_1972 \n .font:hover ,#item_1979 \n .font:hover ,#item_2096 \n .font:hover ,#item_2116 \n .font:hover ,#item_2132 \n .font:hover ,#item_2133 \n .font:hover ,#item_2135 \n .font:hover ,#item_2148 \n .font:hover ,#item_2169 \n .font:hover ,#item_2170 \n .font:hover ,#item_2171 \n .font:hover {\n font-style: normal;\n font-size: 12px;\n font-weight: normal;\n text-decoration: none;\n color: rgb(77, 76, 76) !important;\n font-family: 微软雅黑 !important;\n }\n#item_1819 \n .sparator td ,#item_1821 \n .sparator td ,#item_1822 \n .sparator td ,#item_1823 \n .sparator td ,#item_1824 \n .sparator td ,#item_1825 \n .sparator td ,#item_1830 \n .sparator td ,#item_1831 \n .sparator td ,#item_1851 \n .sparator td ,#item_1869 \n .sparator td ,#item_1901 \n .sparator td ,#item_1924 \n .sparator td ,#item_1935 \n .sparator td ,#item_1936 \n .sparator td ,#item_1937 \n .sparator td ,#item_1938 \n .sparator td ,#item_1939 \n .sparator td ,#item_1972 \n .sparator td ,#item_1979 \n .sparator td ,#item_2096 \n .sparator td ,#item_2116 \n .sparator td ,#item_2132 \n .sparator td ,#item_2133 \n .sparator td ,#item_2135 \n .sparator td ,#item_2148 \n .sparator td ,#item_2169 \n .sparator td ,#item_2170 \n .sparator td ,#item_2171 \n .sparator td {\n border-bottom: 1px dashed rgb(240, 240, 240);\n }\n#item_1819 \n .tab2 ,#item_1821 \n .tab2 ,#item_1822 \n .tab2 ,#item_1823 \n .tab2 ,#item_1824 \n .tab2 ,#item_1825 \n .tab2 ,#item_1830 \n .tab2 ,#item_1831 \n .tab2 ,#item_1851 \n .tab2 ,#item_1869 \n .tab2 ,#item_1901 \n .tab2 ,#item_1924 \n .tab2 ,#item_1935 \n .tab2 ,#item_1936 \n .tab2 ,#item_1937 \n .tab2 ,#item_1938 \n .tab2 ,#item_1939 \n .tab2 ,#item_1972 \n .tab2 ,#item_1979 \n .tab2 ,#item_2096 \n .tab2 ,#item_2116 \n .tab2 ,#item_2132 \n .tab2 ,#item_2133 \n .tab2 ,#item_2135 \n .tab2 ,#item_2148 \n .tab2 ,#item_2169 \n .tab2 ,#item_2170 \n .tab2 ,#item_2171 \n .tab2 {\n background-image: url(\"/page/resource/userfile/image/ecology8/tabbg1_wev8.png\");\n }\n#item_1819 \n .tab2unselected ,#item_1821 \n .tab2unselected ,#item_1822 \n .tab2unselected ,#item_1823 \n .tab2unselected ,#item_1824 \n .tab2unselected ,#item_1825 \n .tab2unselected ,#item_1830 \n .tab2unselected ,#item_1831 \n .tab2unselected ,#item_1851 \n .tab2unselected ,#item_1869 \n .tab2unselected ,#item_1901 \n .tab2unselected ,#item_1924 \n .tab2unselected ,#item_1935 \n .tab2unselected ,#item_1936 \n .tab2unselected ,#item_1937 \n .tab2unselected ,#item_1938 \n .tab2unselected ,#item_1939 \n .tab2unselected ,#item_1972 \n .tab2unselected ,#item_1979 \n .tab2unselected ,#item_2096 \n .tab2unselected ,#item_2116 \n .tab2unselected ,#item_2132 \n .tab2unselected ,#item_2133 \n .tab2unselected ,#item_2135 \n .tab2unselected ,#item_2148 \n .tab2unselected ,#item_2169 \n .tab2unselected ,#item_2170 \n .tab2unselected ,#item_2171 \n .tab2unselected {\n background-image: url(\"/page/resource/userfile/image/ecology8/tabbg1_wev8.png\");\n background-repeat: no-repeat;\n cursor: pointer;\n text-align: center;\n padding-top: 5px;\n width: 77px;\n vertical-align: middle;\n font-style: normal;\n font-size: 20px !important;\n font-weight: normal;\n color: rgb(189, 189, 189) !important;\n font-family: 微软雅黑 !important;\n }\n#item_1819 \n .tab2selected ,#item_1821 \n .tab2selected ,#item_1822 \n .tab2selected ,#item_1823 \n .tab2selected ,#item_1824 \n .tab2selected ,#item_1825 \n .tab2selected ,#item_1830 \n .tab2selected ,#item_1831 \n .tab2selected ,#item_1851 \n .tab2selected ,#item_1869 \n .tab2selected ,#item_1901 \n .tab2selected ,#item_1924 \n .tab2selected ,#item_1935 \n .tab2selected ,#item_1936 \n .tab2selected ,#item_1937 \n .tab2selected ,#item_1938 \n .tab2selected ,#item_1939 \n .tab2selected ,#item_1972 \n .tab2selected ,#item_1979 \n .tab2selected ,#item_2096 \n .tab2selected ,#item_2116 \n .tab2selected ,#item_2132 \n .tab2selected ,#item_2133 \n .tab2selected ,#item_2135 \n .tab2selected ,#item_2148 \n .tab2selected ,#item_2169 \n .tab2selected ,#item_2170 \n .tab2selected ,#item_2171 \n .tab2selected {\n background-repeat: no-repeat;\n font-style: normal;\n font-size: 20px !important;\n font-weight: normal;\n text-align: center;\n padding-top: 5px;\n width: 77px;\n cursor: pointer;\n vertical-align: middle;\n border-bottom: 1px solid rgb(101, 77, 157);\n color: rgb(101, 77, 157) !important;\n font-family: 微软雅黑 !important;\n }\n\n",
  "hasRight": true,
  "rcmenu": [
    {
      "icon": "icon-coms-Update-synchronization",
      "label": "更新同步",
      "key": "updatesynihp"
    },
    {
      "icon": "icon-coms-synchronization",
      "label": "完全同步",
      "key": "completesynihp"
    },
    {
      "icon": "icon-coms-Flow-setting",
      "label": "设置元素",
      "key": "settingElement"
    },
    {
      "icon": "icon-coms-All-contraction",
      "label": "全部收缩",
      "key": "shrinkAll"
    }
  ]
}
```

---

### 3. 获取【图表】元素sql模板库设置页面信息

- **接口路径 (Endpoint)**: `/api/portal/sqltemplate/datas`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取【图表】元素sql模板库设置页面信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `current` | `String` | 否 | 获取设置信息列表当前页码 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `sessionkey` | `String` | 图表元素设置列表信息sessionkey |

#### 响应示例 (Response Example)

```json
{
  "sessionkey": "a3311ca7-d5ac-4e28-9188-e7f40e5b1f56_FC36EA4B5D725A520E8DF6B6BED7090A"
}
```

---

### 4. 获取主题配置

- **接口路径 (Endpoint)**: `/api/portal/themeConfig/getThemeConfig`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取主题配置`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 接口数据 |
| `fontSize` | `String` | 主题字体大小 |
| `layoutType` | `String` | 主题布局类型 |
| `openLeftMenu` | `String` | 展开左侧菜单 |
| `quickSearchShowRcmd` | `String` | 显示快捷搜索推荐 |
| `showFreqUseMenu` | `String` | 显示常用菜单 |
| `showQuickSearch` | `String` | 显示快捷搜索 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "quickSearchShowRcmd": "1",
    "showFreqUseMenu": "1",
    "showQuickSearch": "1",
    "layoutType": "1",
    "openLeftMenu": "1",
    "fontSize": "12"
  }
}
```

---

### 5. 获取任务元素设置信息和数据方法

> **补充说明**：获取任务元素设置信息和数据方法

- **接口路径 (Endpoint)**: `/api/portal/element/task`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取任务元素设置信息和数据方法`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id |  |
| `eid` | `String` | **是** | 当前元素Id |  |
| `hpid` | `String` | **是** | 门户Id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部Id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `counts` | `Json` | 数量统计 |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 返回的数据集合 |
| `esetting` | `Json` | 设置信息 |
| `params` | `Json` | 设置信息 |
| `tabids` | `String` | tab页id集合 |
| `titles` | `String` | tab页标题集合 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "data": []
  },
  "tabids": [
    "1",
    "2",
    "3",
    "4"
  ],
  "counts": [
    0,
    1,
    0,
    0
  ],
  "titles": [
    "新任务",
    "新反馈",
    "今天",
    "明天"
  ],
  "currenttab": "3",
  "params": {
    "tabid": "3",
    "eid": "1716",
    "perpage": 5,
    "hpid": "1",
    "subCompanyId": 1,
    "tabsize": 4,
    "styleid": "synergys2",
    "ebaseid": "Task"
  },
  "esetting": {
    "linkmode": "2",
    "display": [
      1,
      1,
      0,
      0,
      0
    ],
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": [
      "88%",
      "12%"
    ],
    "titles": [
      "标题",
      "创建人"
    ],
    "tabwidth": "76"
  }
}
```

---

### 6. 获取任务元素设置信息和数据方法

> **补充说明**：获取任务元素设置信息和数据方法

- **接口路径 (Endpoint)**: `/api/portal/element/tasktab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取任务元素设置信息和数据方法`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型Id |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部Id |  |
| `tabid` | `String` | **是** | tab页id |  |

#### 响应示例 (Response Example)

```json
{}
```

---

### 7. 获取任务计划元素设置信息和数据方法

> **补充说明**：获取任务计划元素设置信息和数据方法，返回json串

- **接口路径 (Endpoint)**: `/api/portal/element/worktask`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取任务计划元素设置信息和数据方法`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id |  |
| `eid` | `String` | **是** | 当前元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部Id |  |

#### 响应示例 (Response Example)

```json
{}
```

---

### 8. 获取元素tab数据

> **补充说明**：获取元素tab数据

- **接口路径 (Endpoint)**: `/api/mobile/portal/elements/tab`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取元素tab数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型Id |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户Id |  |
| `subCompanyId` | `String` | **是** | 分部Id |  |
| `tabId` | `String` | **是** | tab页id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `autoShowSpeed` | `String` | 自动展示速度 |
| `data` | `Json` | 返回数据 |
| `eid` | `String` | 元素Id |
| `tabid` | `String` | tab页id |

#### 响应示例 (Response Example)

```json
{
  "tabid": "1",
  "eid": "-46",
  "data": [],
  "autoShowSpeed": "2000"
}
```

---

### 9. 获取元素设置页面数据接口

- **接口路径 (Endpoint)**: `/api/portal/setting/esetting`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取元素设置页面数据接口`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | 否 | 元素基本信息表中的id |  |
| `eid` | `String` | 否 | 页面中元素的唯一key |  |
| `hpid` | `String` | 否 | 门户页面id |  |
| `subcompanyid` | `String` | 否 | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `eContent` | `Json` | 元素设置【内容】相关信息 |
| `eShare` | `Json` | 元素设置【共享】相关信息 |
| `eShareLevel` | `String` | 元素设置权限等级 |
| `eStyle` | `Json` | 元素设置【样式】相关信息 |
| `hasShare` | `Bool` | 是否有权限设置元素 |

#### 响应示例 (Response Example)

```json
{
  "eShare": {
    "eShareList": [],
    "eOldShareList": [
      {
        "includeSub": false,
        "key": "0",
        "roleLevel": "",
        "securityLevel": "",
        "securityMaxLevel": "",
        "securityMinLevel": "",
        "shareType": "5",
        "shareTypeName": "所有人",
        "shareValue": "1",
        "shareValueName": "所有人"
      }
    ],
    "eHasShareRight": true
  },
  "eContent": {
    "eField": {},
    "eShowNum": "-1",
    "eCustom": {
      "viewcompname": "View",
      "perpage": "",
      "settingcompname": "Setting",
      "linkmode": "",
      "packagename": "weaWorkrelatePortalPerformanceElement",
      "modulename": "8eea9dd28bd24104a9e5c874d6340001"
    },
    "eLinkMode": {
      "options": [
        {
          "key": "1",
          "value": "当前页"
        },
        {
          "key": "2",
          "value": "弹出页"
        }
      ],
      "selected": ""
    },
    "eTitle": "绩效元素",
    "eBaseName": "绩效元素"
  },
  "hasShare": true,
  "eShareLevel": "2",
  "eStyle": {
    "eStyleList": {
      "options": [
        {
          "value": "系统样式一1112好",
          "key": "1"
        },
        {
          "value": "ecology8样式",
          "key": "1390381555293"
        },
        {
          "value": "ecology8样式-隐藏标题",
          "key": "1413740040168"
        },
        {
          "value": "lulu元素样式20180516",
          "key": "1526448131745"
        },
        {
          "value": "lulu元素样式0714",
          "key": "1531557518313"
        },
        {
          "value": "0814另存为",
          "key": "1534228057375"
        },
        {
          "value": "0814新建",
          "key": "1534230625172"
        },
        {
          "value": "hu0621",
          "key": "hu0621"
        },
        {
          "value": "协同区样式(蓝色)",
          "key": "synergys1"
        },
        {
          "value": "协同区样式(红色)",
          "key": "synergys2"
        },
        {
          "value": "协同区样式(天蓝)",
          "key": "synergys3"
        },
        {
          "value": "协同区样式(紫色)",
          "key": "synergys4"
        },
        {
          "value": "协同区样式(橘色)",
          "key": "synergys5"
        },
        {
          "value": "协同区样式(绿色)",
          "key": "synergys6"
        },
        {
          "value": "元素样式模板",
          "key": "template"
        },
        {
          "value": "templateFive",
          "key": "templateFive"
        },
        {
          "value": "templateFive2",
          "key": "templateFive2"
        },
        {
          "value": "templateFour",
          "key": "templateFour"
        },
        {
          "value": "templateFour2",
          "key": "templateFour2"
        },
        {
          "value": "templateheder",
          "key": "templateheder"
        },
        {
          "value": "templateheder2",
          "key": "templateheder2"
        },
        {
          "value": "templateOne",
          "key": "templateOne"
        },
        {
          "value": "templateOne2",
          "key": "templateOne2"
        },
        {
          "value": "templateSix",
          "key": "templateSix"
        },
        {
          "value": "templateThree",
          "key": "templateThree"
        },
        {
          "value": "0314",
          "key": "1552554995896"
        },
        {
          "value": "11",
          "key": "1552556542805"
        },
        {
          "value": "33",
          "key": "1552557166047"
        },
        {
          "value": "分隔线测试sch",
          "key": "1555486140690"
        },
        {
          "value": "lu0426",
          "key": "1556264457742"
        },
        {
          "value": "qqq",
          "key": "1556264482350"
        },
        {
          "value": "飞鹤元素一",
          "key": "1557033039061"
        },
        {
          "value": "图标标题元素样式",
          "key": "1557033039062"
        },
        {
          "value": "1111111",
          "key": "1562647608350"
        }
      ],
      "selected": "synergys1"
    },
    "eHeight": 0,
    "eSpacing": {
      "top": "10",
      "left": "",
      "bottom": "",
      "right": ""
    },
    "eIcon": ""
  }
}
```

---

### 10. 获取前端菜单信息

> **补充说明**：获取前端菜单信息

- **接口路径 (Endpoint)**: `/api/portal/menu/getFrontEndMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取前端菜单信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `isLoadAll` | `String` | 否 | 是否加载全部菜单(1:是  0:否) |  |
| `withportal` | `String` | 否 | 是否加载门户首页 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_deal_time` | `Int` | 接口处理时间 |
| `api_query_time` | `Int` | sql查询时间 |
| `data` | `Json` | 当前用户前端菜单数据 |
| `data:child` | `String` | 子菜单数组 |
| `data:fname` | `String` | 菜单名称 |
| `data:fullrouteurl` | `String` | 单页路由地址 |
| `data:hpid` | `String` | 门户页面id |
| `data:id` | `String` | 菜单id |
| `data:infoId` | `String` | 菜单id |
| `data:levelid` | `String` | 菜单id |
| `data:mobxrouteurl` | `String` | mobx路由地址 |
| `data:name` | `String` | 菜单名称 |
| `data:parentId` | `String` | 父级菜单id |
| `data:pid` | `String` | 父级菜单id |
| `data:pinyin` | `String` | 菜单名称拼音 |
| `data:routeurl` | `String` | 路由地址 |
| `data:sname` | `String` | 名称简称 |
| `data:subCompanyId` | `String` | 分部id |
| `data:target` | `String` | 链接打开方式(mainFrame:当前主题框架中  _blank:弹出页) |
| `data:url` | `String` | 链接地址（E8，废弃） |

#### 响应示例 (Response Example)

```json
空
```

---

### 11. 获取后台菜单信息接口

> **补充说明**：获取后台菜单信息接口

- **接口路径 (Endpoint)**: `/api/portal/menu/getBackEndMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取后台菜单信息接口`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_deal_time` | `Int` | 接口处理时间 |
| `api_query_time` | `Int` | 菜单sql查询时间 |
| `data` | `Json` | 后端菜单信息 |
| `data:child` | `String` | 子菜单信息 |
| `data:fullrouteurl` | `String` | 单页路由地址 |
| `data:id` | `String` | 菜单id |
| `data:infoId` | `String` | 菜单id |
| `data:levelid` | `String` | 菜单id |
| `data:mobxrouteurl` | `String` | mobx路由地址 |
| `data:name` | `String` | 菜单名称 |
| `data:parentId` | `String` | 父级菜单id |
| `data:pid` | `String` | 父级菜单id |
| `data:routeurl` | `String` | 路由地址 |
| `data:target` | `String` | 链接打开方式(mainFrame:当前主题框架中  _blank:弹出页) |
| `data:url` | `String` | 链接地址（E8，废弃） |

#### 响应示例 (Response Example)

```json
{
  "api_query_time": 3496,
  "data": [
    {
      "infoId": "10001",
      "routeurl": "",
      "levelid": "10001",
      "name": "流程引擎",
      "pid": "",
      "id": "10001",
      "parentId": "",
      "url": "/workflow/workflow/index.jsp",
      "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine",
      "mobxrouteurl": "/workflowengine",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "10019",
          "routeurl": "",
          "levelid": "10019",
          "name": "表单管理",
          "pid": "10001",
          "id": "10019",
          "parentId": "10001",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "118",
              "routeurl": "",
              "levelid": "118",
              "name": "字段模板库",
              "pid": "10019",
              "id": "118",
              "parentId": "10019",
              "url": "/workflow/field/managefield_frm.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/form/fieldTemplateLib",
              "mobxrouteurl": "/workflowengine/form/fieldTemplateLib",
              "target": "mainFrame"
            },
            {
              "infoId": "119",
              "routeurl": "",
              "levelid": "119",
              "name": "表单设置",
              "pid": "10019",
              "id": "119",
              "parentId": "10019",
              "url": "/workflow/form/manageform_frm.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/form/formSet/_formSet",
              "mobxrouteurl": "/workflowengine/form/formSet/_formSet",
              "target": "mainFrame"
            },
            {
              "infoId": "10205",
              "routeurl": "",
              "levelid": "10205",
              "name": "公共选择框维护",
              "pid": "10019",
              "id": "10205",
              "parentId": "10019",
              "url": "/workflow/selectItem/selectItemMain.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/form/selectList",
              "mobxrouteurl": "/workflowengine/form/selectList",
              "target": "mainFrame"
            },
            {
              "infoId": "100002",
              "routeurl": "",
              "levelid": "100002",
              "name": "函数库",
              "pid": "10019",
              "id": "100002",
              "parentId": "10019",
              "url": "",
              "fullrouteurl": "/workflowengine/form/funcLibrary",
              "mobxrouteurl": "/workflowengine/form/funcLibrary",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10023",
          "routeurl": "",
          "levelid": "10023",
          "name": "路径管理",
          "pid": "10001",
          "id": "10023",
          "parentId": "10001",
          "url": "",
          "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/pathSet/pathList",
          "mobxrouteurl": "/workflowengine/path",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "117",
              "routeurl": "",
              "levelid": "117",
              "name": "类型设置",
              "pid": "10023",
              "id": "117",
              "parentId": "10023",
              "url": "/workflow/workflow/ListWorkType.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/typeSet",
              "mobxrouteurl": "/workflowengine/path/typeSet",
              "target": "mainFrame"
            },
            {
              "infoId": "1303",
              "routeurl": "",
              "levelid": "1303",
              "name": "规则管理",
              "pid": "10023",
              "id": "1303",
              "parentId": "10023",
              "url": "/workflow/ruleDesign/ruleListTab.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/ruleManager",
              "mobxrouteurl": "/workflowengine/path/ruleManager",
              "target": "mainFrame"
            },
            {
              "infoId": "460",
              "routeurl": "",
              "levelid": "460",
              "name": "路径模板",
              "pid": "10023",
              "id": "460",
              "parentId": "10023",
              "url": "/workflow/workflow/managewf_frm.jsp?isTemplate=1",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/pathSet/pathList?menuIds=10001,10023,460&isTemplate=1",
              "mobxrouteurl": "/workflowengine/path/pathSet/pathList?menuIds=10001,10023,460&isTemplate=1",
              "target": "mainFrame"
            },
            {
              "infoId": "120",
              "routeurl": "",
              "levelid": "120",
              "name": "路径设置",
              "pid": "10023",
              "id": "120",
              "parentId": "10023",
              "url": "/workflow/workflow/managewf_frm.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/pathSet/pathList?menuIds=10001,10023,460",
              "mobxrouteurl": "/workflowengine/path/pathSet/pathList?menuIds=10001,10023,120",
              "target": "mainFrame"
            },
            {
              "infoId": "1311",
              "routeurl": "",
              "levelid": "1311",
              "name": "反向维护",
              "pid": "10023",
              "id": "1311",
              "parentId": "10023",
              "url": "/workflow/transfer/permissionSearchResult.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/reverseControl",
              "mobxrouteurl": "/workflowengine/path/reverseControl",
              "target": "mainFrame"
            },
            {
              "infoId": "10030",
              "routeurl": "",
              "levelid": "10030",
              "name": "编号维护",
              "pid": "10023",
              "id": "10030",
              "parentId": "10023",
              "url": "",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/codeMaintenance/startCode",
              "mobxrouteurl": "/workflowengine/path/codeMaintenance",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "10031",
                  "routeurl": "",
                  "levelid": "10031",
                  "name": "起始编号",
                  "pid": "10030",
                  "id": "10031",
                  "parentId": "10030",
                  "url": "/workflow/workflow/WorkflowCodeSeq_frm.jsp",
                  "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/codeMaintenance/startCode",
                  "mobxrouteurl": "/workflowengine/path/codeMaintenance/startCode",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10032",
                  "routeurl": "",
                  "levelid": "10032",
                  "name": "预留编号",
                  "pid": "10030",
                  "id": "10032",
                  "parentId": "10030",
                  "url": "/workflow/workflow/WorkflowCodeSeqReserved_frm.jsp",
                  "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/codeMaintenance/reserveCode",
                  "mobxrouteurl": "/workflowengine/path/codeMaintenance/reserveCode",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "10033",
              "routeurl": "",
              "levelid": "10033",
              "name": "流程测试",
              "pid": "10023",
              "id": "10033",
              "parentId": "10023",
              "url": "",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/test/add",
              "mobxrouteurl": "/workflowengine/path/test",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "1135",
                  "routeurl": "",
                  "levelid": "1135",
                  "name": "新建测试流程",
                  "pid": "10033",
                  "id": "1135",
                  "parentId": "10033",
                  "url": "/workflow/request/RequestTypeByTest.jsp",
                  "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/test/add",
                  "mobxrouteurl": "/workflowengine/path/test/add",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1136",
                  "routeurl": "",
                  "levelid": "1136",
                  "name": "删除测试流程",
                  "pid": "10033",
                  "id": "1136",
                  "parentId": "10033",
                  "url": "/workflow/search/RequestTestList.jsp",
                  "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/test/delete",
                  "mobxrouteurl": "/workflowengine/path/test/delete",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "10168",
              "routeurl": "",
              "levelid": "10168",
              "name": "流程交换",
              "pid": "10023",
              "id": "10168",
              "parentId": "10023",
              "url": "/workflow/exchange/manage_frm.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/workflowChange",
              "mobxrouteurl": "/workflowengine/path/workflowChange",
              "target": "mainFrame"
            },
            {
              "infoId": "10036",
              "routeurl": "",
              "levelid": "10036",
              "name": "应用设置",
              "pid": "10023",
              "id": "10036",
              "parentId": "10023",
              "url": "/workflow/WorkflowSettings.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/path/wfSetting",
              "mobxrouteurl": "/workflowengine/path/wfSetting",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10037",
          "routeurl": "",
          "levelid": "10037",
          "name": "报表设置",
          "pid": "10001",
          "id": "10037",
          "parentId": "10001",
          "url": "",
          "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/report/reportTypeSet",
          "mobxrouteurl": "/workflowengine/report",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "122",
              "routeurl": "",
              "levelid": "122",
              "name": "自定义报表种类",
              "pid": "10037",
              "id": "122",
              "parentId": "10037",
              "url": "/workflow/report/ReportTypeManage.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/report/reportTypeSet",
              "mobxrouteurl": "/workflowengine/report/reportTypeSet",
              "target": "mainFrame"
            },
            {
              "infoId": "123",
              "routeurl": "",
              "levelid": "123",
              "name": "自定义报表设置",
              "pid": "10037",
              "id": "123",
              "parentId": "10037",
              "url": "/workflow/report/Report_frm.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/report/reportSet",
              "mobxrouteurl": "/workflowengine/report/reportSet",
              "target": "mainFrame"
            },
            {
              "infoId": "479",
              "routeurl": "",
              "levelid": "479",
              "name": "流程效率报表共享",
              "pid": "10037",
              "id": "479",
              "parentId": "10037",
              "url": "/workflow/flowReport/ReportShareSet.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/report/reportShareSet",
              "mobxrouteurl": "/workflowengine/report/reportShareSet",
              "target": "mainFrame"
            },
            {
              "infoId": "10898",
              "routeurl": "",
              "levelid": "10898",
              "name": "报表分析赋权设置",
              "pid": "10037",
              "id": "10898",
              "parentId": "10037",
              "url": "",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/report/reportCompetenceSet",
              "mobxrouteurl": "/workflowengine/report/reportCompetenceSet",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10041",
          "routeurl": "",
          "levelid": "10041",
          "name": "自定义查询",
          "pid": "10001",
          "id": "10041",
          "parentId": "10001",
          "url": "",
          "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/search/queryTypeSet",
          "mobxrouteurl": "/workflowengine/search",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "843",
              "routeurl": "",
              "levelid": "843",
              "name": "自定义查询种类",
              "pid": "10041",
              "id": "843",
              "parentId": "10041",
              "url": "/workflow/workflow/CustomQueryType.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/search/queryTypeSet",
              "mobxrouteurl": "/workflowengine/search/queryTypeSet",
              "target": "mainFrame"
            },
            {
              "infoId": "632",
              "routeurl": "",
              "levelid": "632",
              "name": "自定义查询设置",
              "pid": "10041",
              "id": "632",
              "parentId": "10041",
              "url": "/workflow/workflow/CustomQuery_frm.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/search/querySet",
              "mobxrouteurl": "/workflowengine/search/querySet",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10044",
          "routeurl": "",
          "levelid": "10044",
          "name": "监控管理",
          "pid": "10001",
          "id": "10044",
          "parentId": "10001",
          "url": "",
          "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/monitor/monitorType",
          "mobxrouteurl": "/workflowengine/monitor",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1022",
              "routeurl": "",
              "levelid": "1022",
              "name": "监控类型",
              "pid": "10044",
              "id": "1022",
              "parentId": "10044",
              "url": "/workflow/monitor/CustomMonitorType.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/monitor/monitorType",
              "mobxrouteurl": "/workflowengine/monitor/monitorType",
              "target": "mainFrame"
            },
            {
              "infoId": "421",
              "routeurl": "",
              "levelid": "421",
              "name": "监控设置",
              "pid": "10044",
              "id": "421",
              "parentId": "10044",
              "url": "/workflow/monitor/managemonitor.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/monitor/monitorSet",
              "mobxrouteurl": "/workflowengine/monitor/monitorSet",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "-111",
          "routeurl": "",
          "levelid": "-111",
          "name": "流程扫描",
          "pid": "10001",
          "id": "-111",
          "parentId": "10001",
          "url": "/spa/workflow/static4engine/engine.html#/main/workflowengine/scan/scanWorkflow",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame"
        }
      ]
    },
    {
      "infoId": "10000",
      "routeurl": "",
      "levelid": "10000",
      "name": "组织权限中心",
      "pid": "",
      "id": "10000",
      "parentId": "",
      "url": "/hrm/resource/index.jsp",
      "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/index",
      "mobxrouteurl": "/hrmengine/index",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "45",
          "routeurl": "",
          "levelid": "45",
          "name": "基础设置",
          "pid": "10000",
          "id": "45",
          "parentId": "10000",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "20013",
              "routeurl": "",
              "levelid": "20013",
              "name": "办公地点",
              "pid": "45",
              "id": "20013",
              "parentId": "45",
              "url": "/spa/hrm/engine.html#/hrmengine/officeaddress",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/officeaddress",
              "mobxrouteurl": "/hrmengine/officeaddress",
              "target": "mainFrame"
            },
            {
              "infoId": "20012",
              "routeurl": "",
              "levelid": "20012",
              "name": "职务岗位设置",
              "pid": "45",
              "id": "20012",
              "parentId": "45",
              "url": "/spa/hrm/engine.html#/hrmengine/post",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/post",
              "mobxrouteurl": "/hrmengine/post",
              "target": "mainFrame"
            },
            {
              "infoId": "348",
              "routeurl": "/hrmengine/adareaset",
              "levelid": "348",
              "name": "行政区域设置",
              "pid": "45",
              "id": "348",
              "parentId": "45",
              "url": "/hrm/area/HrmCountry_frm.jsp",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/adareaset",
              "mobxrouteurl": "/hrmengine/adareaset",
              "target": "mainFrame"
            },
            {
              "infoId": "63",
              "routeurl": "/hrmengine/title",
              "levelid": "63",
              "name": "职称设置",
              "pid": "45",
              "id": "63",
              "parentId": "45",
              "url": "/hrm/HrmTab.jsp?_fromURL=jobcall",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/title",
              "mobxrouteurl": "/hrmengine/title",
              "target": "mainFrame"
            },
            {
              "infoId": "64",
              "routeurl": "/hrmengine/major",
              "levelid": "64",
              "name": "专业设置",
              "pid": "45",
              "id": "64",
              "parentId": "45",
              "url": "/hrm/HrmTab.jsp?_fromURL=speciality",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/major",
              "mobxrouteurl": "/hrmengine/major",
              "target": "mainFrame"
            },
            {
              "infoId": "65",
              "routeurl": "/hrmengine/education",
              "levelid": "65",
              "name": "学历设置",
              "pid": "45",
              "id": "65",
              "parentId": "45",
              "url": "/hrm/HrmTab.jsp?_fromURL=educationlevel",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/education",
              "mobxrouteurl": "/hrmengine/education",
              "target": "mainFrame"
            },
            {
              "infoId": "66",
              "routeurl": "/hrmengine/worknature",
              "levelid": "66",
              "name": "用工性质",
              "pid": "45",
              "id": "66",
              "parentId": "45",
              "url": "/hrm/HrmTab.jsp?_fromURL=usekind",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/worknature",
              "mobxrouteurl": "/hrmengine/worknature",
              "target": "mainFrame"
            },
            {
              "infoId": "10216",
              "routeurl": "/hrmengine/basicinfoimport",
              "levelid": "10216",
              "name": "基础数据导入",
              "pid": "45",
              "id": "10216",
              "parentId": "45",
              "url": "/hrm/HrmTab.jsp?_fromURL=HrmBasicDataImport",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/basicinfoimport",
              "mobxrouteurl": "/hrmengine/basicinfoimport",
              "target": "mainFrame"
            },
            {
              "infoId": "-126",
              "routeurl": "",
              "levelid": "-126",
              "name": "基础数据导出",
              "pid": "45",
              "id": "-126",
              "parentId": "45",
              "url": "/system/basedata/basedata_role.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "54",
          "routeurl": "",
          "levelid": "54",
          "name": "自定义设置",
          "pid": "10000",
          "id": "54",
          "parentId": "10000",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1258",
              "routeurl": "",
              "levelid": "1258",
              "name": "分部字段定义",
              "pid": "54",
              "id": "1258",
              "parentId": "54",
              "url": "/hrm/HrmTab.jsp?_fromURL=company",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/fieldDef/subCompany",
              "mobxrouteurl": "/hrmengine/fieldDef/subCompany",
              "target": "mainFrame"
            },
            {
              "infoId": "67",
              "routeurl": "",
              "levelid": "67",
              "name": "部门字段定义",
              "pid": "54",
              "id": "67",
              "parentId": "54",
              "url": "/hrm/HrmTab.jsp?_fromURL=department",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/fieldDef/department",
              "mobxrouteurl": "/hrmengine/fieldDef/department",
              "target": "mainFrame"
            },
            {
              "infoId": "68",
              "routeurl": "",
              "levelid": "68",
              "name": "人员卡片显示栏目",
              "pid": "54",
              "id": "68",
              "parentId": "54",
              "url": "/hrm/HrmTab.jsp?_fromURL=HrmValidate",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/carditemset",
              "mobxrouteurl": "/hrmengine/carditemset",
              "target": "mainFrame"
            },
            {
              "infoId": "1305",
              "routeurl": "",
              "levelid": "1305",
              "name": "人员卡片字段定义",
              "pid": "54",
              "id": "1305",
              "parentId": "54",
              "url": "/hrm/resource/HrmCustomFieldManagerIndex.jsp",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/fieldDef/resource",
              "mobxrouteurl": "/hrmengine/fieldDef/resource",
              "target": "mainFrame"
            },
            {
              "infoId": "100086",
              "routeurl": "",
              "levelid": "100086",
              "name": "浏览框显示字段定义",
              "pid": "54",
              "id": "100086",
              "parentId": "54",
              "url": "",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/browserDisplayFieldSetting",
              "mobxrouteurl": "/hrmengine/browserDisplayFieldSetting",
              "target": "mainFrame"
            },
            {
              "infoId": "100087",
              "routeurl": "",
              "levelid": "100087",
              "name": "组织字段显示设置",
              "pid": "54",
              "id": "100087",
              "parentId": "54",
              "url": "",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/orgFieldDisplaySetting",
              "mobxrouteurl": "/hrmengine/orgFieldDisplaySetting",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "44",
          "routeurl": "",
          "levelid": "44",
          "name": "组织结构",
          "pid": "10000",
          "id": "44",
          "parentId": "10000",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "55",
              "routeurl": "/hrmengine/organization",
              "levelid": "55",
              "name": "组织维护",
              "pid": "44",
              "id": "55",
              "parentId": "44",
              "url": "/hrm/companyvirtual/HrmCompany_frm.jsp",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/organization",
              "mobxrouteurl": "/hrmengine/organization",
              "target": "mainFrame"
            },
            {
              "infoId": "58",
              "routeurl": "/hrmengine/orgChart",
              "levelid": "58",
              "name": "图形编辑",
              "pid": "44",
              "id": "58",
              "parentId": "44",
              "url": "/hrm/HrmTab.jsp?_fromURL=hrmDepartLayoutEdit",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/orgChart",
              "mobxrouteurl": "/hrmengine/orgChart",
              "target": "mainFrame"
            },
            {
              "infoId": "871",
              "routeurl": "",
              "levelid": "871",
              "name": "群组设置",
              "pid": "44",
              "id": "871",
              "parentId": "44",
              "url": "/hrm/HrmTab.jsp?_fromURL=HrmOrgGroupList",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/enginegroup",
              "mobxrouteurl": "/hrmengine/enginegroup",
              "target": "mainFrame"
            },
            {
              "infoId": "11016",
              "routeurl": "/hrmengine/batchMaintenance",
              "levelid": "11016",
              "name": "批量维护",
              "pid": "44",
              "id": "11016",
              "parentId": "44",
              "url": "",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/batchMaintenance",
              "mobxrouteurl": "/hrmengine/batchMaintenance",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10011",
          "routeurl": "",
          "levelid": "10011",
          "name": "帐户中心",
          "pid": "10000",
          "id": "10011",
          "parentId": "10000",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1308",
              "routeurl": "/hrmengine/securitySetting",
              "levelid": "1308",
              "name": "安全设置",
              "pid": "10011",
              "id": "1308",
              "parentId": "10011",
              "url": "/hrm/HrmTab.jsp?_fromURL=HrmSecuritySetting",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/securitySetting",
              "mobxrouteurl": "/hrmengine/securitySetting",
              "target": "mainFrame"
            },
            {
              "infoId": "10292",
              "routeurl": "/hrmengine/privacySetting",
              "levelid": "10292",
              "name": "隐私设置",
              "pid": "10011",
              "id": "10292",
              "parentId": "10011",
              "url": "",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/privacySetting",
              "mobxrouteurl": "/hrmengine/privacySetting",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "500",
          "routeurl": "",
          "levelid": "500",
          "name": "权限管理",
          "pid": "10000",
          "id": "500",
          "parentId": "10000",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10012",
              "routeurl": "",
              "levelid": "10012",
              "name": "权限管理中心",
              "pid": "500",
              "id": "10012",
              "parentId": "500",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "352",
                  "routeurl": "/hrmengine/authorizationSetting",
                  "levelid": "352",
                  "name": "权限设置",
                  "pid": "10012",
                  "id": "352",
                  "parentId": "10012",
                  "url": "/hrm/HrmTab.jsp?_fromURL=SystemRightGroup",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/authorizationSetting",
                  "mobxrouteurl": "/hrmengine/authorizationSetting",
                  "target": "mainFrame"
                },
                {
                  "infoId": "354",
                  "routeurl": "/hrmengine/authAdjust",
                  "levelid": "354",
                  "name": "权限调整",
                  "pid": "10012",
                  "id": "354",
                  "parentId": "10012",
                  "url": "/hrm/transfer/PermissionToAdjust.jsp",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/authAdjust",
                  "mobxrouteurl": "/hrmengine/authAdjust",
                  "target": "mainFrame"
                },
                {
                  "infoId": "353",
                  "routeurl": "/hrmengine/roleSetting",
                  "levelid": "353",
                  "name": "角色设置",
                  "pid": "10012",
                  "id": "353",
                  "parentId": "10012",
                  "url": "/hrm/roles/HrmRoles_frm.jsp",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/roleSetting",
                  "mobxrouteurl": "/hrmengine/roleSetting",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1420",
                  "routeurl": "/hrmengine/authSearch",
                  "levelid": "1420",
                  "name": "权限查询",
                  "pid": "10012",
                  "id": "1420",
                  "parentId": "10012",
                  "url": "/hrm/HrmTab.jsp?_fromURL=PermissionSearch",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/authSearch",
                  "mobxrouteurl": "/hrmengine/authSearch",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "10013",
              "routeurl": "/hrmengine/funcManageDecent",
              "levelid": "10013",
              "name": "功能管理赋权",
              "pid": "500",
              "id": "10013",
              "parentId": "500",
              "url": "/system/EffectManageEmpowerTab.jsp?_fromURL=EffectManageEmpower",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/funcManageDecent",
              "mobxrouteurl": "/hrmengine/funcManageDecent",
              "target": "mainFrame"
            },
            {
              "infoId": "10014",
              "routeurl": "",
              "levelid": "10014",
              "name": "分权管理中心",
              "pid": "500",
              "id": "10014",
              "parentId": "500",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "10015",
                  "routeurl": "",
                  "levelid": "10015",
                  "name": "管理分权",
                  "pid": "10014",
                  "id": "10015",
                  "parentId": "10014",
                  "url": "/system/DetachMSetTab.jsp?_fromURL=DetachMSetEdit",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/admindecentralization",
                  "mobxrouteurl": "/hrmengine/admindecentralization",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10017",
                  "routeurl": "/hrmengine/appDetach",
                  "levelid": "10017",
                  "name": "组织机构应用分权",
                  "pid": "10014",
                  "id": "10017",
                  "parentId": "10014",
                  "url": "/system/sysdetach/AppDetachTab.jsp?_fromURL=AppDetachList",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/appDetach",
                  "mobxrouteurl": "/hrmengine/appDetach",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10016",
                  "routeurl": "",
                  "levelid": "10016",
                  "name": "分权管理员设置",
                  "pid": "10014",
                  "id": "10016",
                  "parentId": "10014",
                  "url": "/systeminfo/sysadmin/sysadminEditBatchTab.jsp?_fromURL=sysadminEditBatch",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/decentralizationAdminSet",
                  "mobxrouteurl": "/hrmengine/decentralizationAdminSet",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10018",
                  "routeurl": "/hrmengine/modulemanage",
                  "levelid": "10018",
                  "name": "模块管理分权",
                  "pid": "10014",
                  "id": "10018",
                  "parentId": "10014",
                  "url": "/system/ModuleManageDetachTab.jsp?_fromURL=ModuleManageDetach",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/modulemanage",
                  "mobxrouteurl": "/hrmengine/modulemanage",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "100004",
              "routeurl": "",
              "levelid": "100004",
              "name": "分级保护设置",
              "pid": "500",
              "id": "100004",
              "parentId": "500",
              "url": "",
              "fullrouteurl": "spa/hrm/static4engine/engine.html#/hrmengine/levelProtection",
              "mobxrouteurl": "hrmengine/levelProtection",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10140",
          "routeurl": "",
          "levelid": "10140",
          "name": "矩阵管理",
          "pid": "10000",
          "id": "10140",
          "parentId": "10000",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10141",
              "routeurl": "/hrmengine/matrix",
              "levelid": "10141",
              "name": "矩阵设置",
              "pid": "10140",
              "id": "10141",
              "parentId": "10140",
              "url": "/matrixmanage/pages/Matrix.jsp",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/matrix",
              "mobxrouteurl": "/hrmengine/matrix",
              "target": "mainFrame"
            },
            {
              "infoId": "10142",
              "routeurl": "/hrmengine/matrixAdjust",
              "levelid": "10142",
              "name": "批量维护",
              "pid": "10140",
              "id": "10142",
              "parentId": "10140",
              "url": "/matrixmanage/pages/MassMaint.jsp",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/matrixAdjust",
              "mobxrouteurl": "/hrmengine/matrixAdjust",
              "target": "mainFrame"
            }
          ]
        }
      ]
    },
    {
      "infoId": "10002",
      "routeurl": "/portalengine",
      "levelid": "10002",
      "name": "门户引擎",
      "pid": "",
      "id": "10002",
      "parentId": "",
      "url": "/page/index.jsp",
      "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine",
      "mobxrouteurl": "/portalengine",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "10051",
          "routeurl": "/portalengine/portalmaintenance",
          "levelid": "10051",
          "name": "门户维护",
          "pid": "10002",
          "id": "10051",
          "parentId": "10002",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "/portalengine/portalmaintenance",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "809",
              "routeurl": "/portalengine/portalmaintenance/loginportal",
              "levelid": "809",
              "name": "登录前门户",
              "pid": "10051",
              "id": "809",
              "parentId": "10051",
              "url": "/homepage/maint/HomepageTabs.jsp?_fromURL=loginTemplate",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmaintenance/loginportal",
              "mobxrouteurl": "/portalengine/portalmaintenance/loginportal",
              "target": "mainFrame"
            },
            {
              "infoId": "1283",
              "routeurl": "/portalengine/portalmaintenance/mainportal",
              "levelid": "1283",
              "name": "登录后门户",
              "pid": "10051",
              "id": "1283",
              "parentId": "10051",
              "url": "/systeminfo/template/templateFrame.jsp",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmaintenance/mainportal",
              "mobxrouteurl": "/portalengine/portalmaintenance/mainportal",
              "target": "mainFrame"
            },
            {
              "infoId": "10054",
              "routeurl": "/portalengine/portalmaintenance/portalsetting",
              "levelid": "10054",
              "name": "门户应用设置",
              "pid": "10051",
              "id": "10054",
              "parentId": "10051",
              "url": "/page/PortalSetting.jsp",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmaintenance/portalsetting",
              "mobxrouteurl": "/portalengine/portalmaintenance/portalsetting",
              "target": "mainFrame"
            },
            {
              "infoId": "10468",
              "routeurl": "/portalengine/portalmaintenance/portalexport",
              "levelid": "10468",
              "name": "门户导出",
              "pid": "10051",
              "id": "10468",
              "parentId": "10051",
              "url": "/page/exportImport/exportPages.jsp",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmaintenance/portalexport",
              "mobxrouteurl": "/portalengine/portalmaintenance/portalexport",
              "target": "mainFrame"
            },
            {
              "infoId": "10467",
              "routeurl": "/portalengine/portalmaintenance/portalimport",
              "levelid": "10467",
              "name": "门户导入",
              "pid": "10051",
              "id": "10467",
              "parentId": "10051",
              "url": "/page/exportImport/importData.jsp",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmaintenance/portalimport",
              "mobxrouteurl": "/portalengine/portalmaintenance/portalimport",
              "target": "mainFrame"
            },
            {
              "infoId": "11208",
              "routeurl": "",
              "levelid": "11208",
              "name": "特色门户",
              "pid": "10051",
              "id": "11208",
              "parentId": "10051",
              "url": "/spa/portal/static4engine/engine.html#/portalengine/portalmaintenance/tsportal",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmaintenance/tsportal",
              "mobxrouteurl": "/portalengine/portalmaintenance/tsportal",
              "target": "mainFrame"
            },
            {
              "infoId": "11145",
              "routeurl": "",
              "levelid": "11145",
              "name": "快捷搜索管理",
              "pid": "10051",
              "id": "11145",
              "parentId": "10051",
              "url": "",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmenu/quicksearchmanage",
              "mobxrouteurl": "/portalengine/portalmenu/quicksearchmanage",
              "target": "mainFrame"
            },
            {
              "infoId": "11044",
              "routeurl": "",
              "levelid": "11044",
              "name": "插件管理",
              "pid": "10051",
              "id": "11044",
              "parentId": "10051",
              "url": "",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmenu/pluginmanage",
              "mobxrouteurl": "/portalengine/portalmenu/pluginmanage",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10055",
          "routeurl": "/portalengine/portaltheme",
          "levelid": "10055",
          "name": "门户主题",
          "pid": "10002",
          "id": "10055",
          "parentId": "10002",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "/portalengine/portaltheme",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "810",
              "routeurl": "/portalengine/portaltheme/portalthemelib",
              "levelid": "810",
              "name": "门户主题库",
              "pid": "10055",
              "id": "810",
              "parentId": "10055",
              "url": "/portal/PortalTabs.jsp?_fromURL=ecology8",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portaltheme/portalthemelib",
              "mobxrouteurl": "/portalengine/portaltheme/portalthemelib",
              "target": "mainFrame"
            },
            {
              "infoId": "-158",
              "routeurl": "",
              "levelid": "-158",
              "name": "11",
              "pid": "10055",
              "id": "-158",
              "parentId": "10055",
              "url": "/cpcompanyinfo/CompanyInfoSurvey.jsp",
              "fullrouteurl": "/cpcompanyinfo/CompanyInfoSurvey.jsp",
              "mobxrouteurl": "",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10057",
          "routeurl": "/portalengine/portalmenu",
          "levelid": "10057",
          "name": "门户菜单",
          "pid": "10002",
          "id": "10057",
          "parentId": "10002",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "/portalengine/portalmenu",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "807",
              "routeurl": "/portalengine/portalmenu/leftmenu",
              "levelid": "807",
              "name": "前端菜单",
              "pid": "10057",
              "id": "807",
              "parentId": "10057",
              "url": "/page/maint/menu/SystemMenuMaint.jsp?type=left",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmenu/leftmenu",
              "mobxrouteurl": "/portalengine/portalmenu/leftmenu",
              "target": "mainFrame"
            },
            {
              "infoId": "797",
              "routeurl": "/portalengine/portalmenu/topmenu",
              "levelid": "797",
              "name": "后端菜单",
              "pid": "10057",
              "id": "797",
              "parentId": "10057",
              "url": "/page/maint/menu/SystemMenuMaint.jsp?type=top",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmenu/topmenu",
              "mobxrouteurl": "/portalengine/portalmenu/topmenu",
              "target": "mainFrame"
            },
            {
              "infoId": "806",
              "routeurl": "/portalengine/portalmenu/custommenu",
              "levelid": "806",
              "name": "自定义菜单",
              "pid": "10057",
              "id": "806",
              "parentId": "10057",
              "url": "/page/maint/menu/SystemMenuMaint.jsp?type=custom",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmenu/custommenu",
              "mobxrouteurl": "/portalengine/portalmenu/custommenu",
              "target": "mainFrame"
            },
            {
              "infoId": "798",
              "routeurl": "/portalengine/portalmenu/menustylelib",
              "levelid": "798",
              "name": "菜单样式库",
              "pid": "10057",
              "id": "798",
              "parentId": "10057",
              "url": "/homepage/maint/HomepageTabs.jsp?_fromURL=menuStyle",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmenu/menustylelib",
              "mobxrouteurl": "/portalengine/portalmenu/menustylelib",
              "target": "mainFrame"
            },
            {
              "infoId": "10334",
              "routeurl": "/portalengine/portalmenu/toolbarmore",
              "levelid": "10334",
              "name": "工具栏菜单",
              "pid": "10057",
              "id": "10334",
              "parentId": "10057",
              "url": "/page/maint/toolbarmoresetting/toolbarMoreSettingList.jsp",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalmenu/toolbarmore",
              "mobxrouteurl": "/portalengine/portalmenu/toolbarmore",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10062",
          "routeurl": "/portalengine/portalpage",
          "levelid": "10062",
          "name": "门户页面",
          "pid": "10002",
          "id": "10062",
          "parentId": "10002",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "/portalengine/portalpage",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "803",
              "routeurl": "/portalengine/portalpage/loginpage",
              "levelid": "803",
              "name": "登录前页面",
              "pid": "10062",
              "id": "803",
              "parentId": "10062",
              "url": "/homepage/maint/LoginPageContent.jsp",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalpage/loginpage",
              "mobxrouteurl": "/portalengine/portalpage/loginpage",
              "target": "mainFrame"
            },
            {
              "infoId": "804",
              "routeurl": "/portalengine/portalpage/mainpage",
              "levelid": "804",
              "name": "登录后页面",
              "pid": "10062",
              "id": "804",
              "parentId": "10062",
              "url": "/homepage/maint/HomepageManit.jsp",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalpage/mainpage",
              "mobxrouteurl": "/portalengine/portalpage/mainpage",
              "target": "mainFrame"
            },
            {
              "infoId": "10266",
              "routeurl": "/portalengine/portalpage/defaultportal",
              "levelid": "10266",
              "name": "默认首页设置",
              "pid": "10062",
              "id": "10266",
              "parentId": "10062",
              "url": "/homepage/maint/HomepageTabs.jsp?_fromURL=defaultHpSet",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalpage/defaultportal",
              "mobxrouteurl": "/portalengine/portalpage/defaultportal",
              "target": "mainFrame"
            },
            {
              "infoId": "767",
              "routeurl": "/portalengine/portalpage/portallayout",
              "levelid": "767",
              "name": "页面布局库",
              "pid": "10062",
              "id": "767",
              "parentId": "10062",
              "url": "/homepage/maint/HomepageTabs.jsp?_fromURL=hpLayout",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalpage/portallayout",
              "mobxrouteurl": "/portalengine/portalpage/portallayout",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10066",
          "routeurl": "/portalengine/portalelement",
          "levelid": "10066",
          "name": "门户元素",
          "pid": "10002",
          "id": "10066",
          "parentId": "10002",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "/portalengine/portalelement",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10265",
              "routeurl": "",
              "levelid": "10265",
              "name": "头条样式",
              "pid": "10066",
              "id": "10265",
              "parentId": "10066",
              "url": "/page/maint/style/NewsTopList.jsp",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalelement/headlinestyle",
              "mobxrouteurl": "/portalengine/portalelement/headlinestyle",
              "target": "mainFrame"
            },
            {
              "infoId": "1287",
              "routeurl": "/portalengine/portalelement/portalelements",
              "levelid": "1287",
              "name": "元素库",
              "pid": "10066",
              "id": "1287",
              "parentId": "10066",
              "url": "/homepage/maint/HomepageTabs.jsp?_fromURL=pElement",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalelement/portalelements",
              "mobxrouteurl": "/portalengine/portalelement/portalelements",
              "target": "mainFrame"
            },
            {
              "infoId": "796",
              "routeurl": "/portalengine/portalelement/elementstylelib",
              "levelid": "796",
              "name": "元素样式库",
              "pid": "10066",
              "id": "796",
              "parentId": "10066",
              "url": "/homepage/maint/HomepageTabs.jsp?_fromURL=eStyle",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalelement/elementstylelib",
              "mobxrouteurl": "/portalengine/portalelement/elementstylelib",
              "target": "mainFrame"
            },
            {
              "infoId": "10947",
              "routeurl": "",
              "levelid": "10947",
              "name": "元素模板库",
              "pid": "10066",
              "id": "10947",
              "parentId": "10066",
              "url": "",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalelement/elementtemplate",
              "mobxrouteurl": "/portalengine/portalelement/elementtemplate",
              "target": "mainFrame"
            },
            {
              "infoId": "10070",
              "routeurl": "/portalengine/portalelement/elementregister",
              "levelid": "10070",
              "name": "元素注册",
              "pid": "10066",
              "id": "10070",
              "parentId": "10066",
              "url": "/homepage/maint/HomepageTabs.jsp?_fromURL=ElementRegister",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/portalelement/elementregister",
              "mobxrouteurl": "/portalengine/portalelement/elementregister",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10071",
          "routeurl": "/portalengine/materiallib",
          "levelid": "10071",
          "name": "素材库",
          "pid": "10002",
          "id": "10071",
          "parentId": "10002",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "/portalengine/materiallib",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1292",
              "routeurl": "/portalengine/materiallib/materiallib",
              "levelid": "1292",
              "name": "图片素材库",
              "pid": "10071",
              "id": "1292",
              "parentId": "10071",
              "url": "/page/maint/common/CustomResourceMaint.jsp",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/materiallib/materiallib",
              "mobxrouteurl": "/portalengine/materiallib/materiallib",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10324",
          "routeurl": "/portalengine/mobileportal",
          "levelid": "10324",
          "name": "移动门户",
          "pid": "10002",
          "id": "10324",
          "parentId": "10002",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "/portalengine/mobileportal",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "100102",
              "routeurl": "",
              "levelid": "100102",
              "name": "移动登录页面",
              "pid": "10324",
              "id": "100102",
              "parentId": "10324",
              "url": "",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/mobileportal/mloginpage",
              "mobxrouteurl": "/portalengine/mobileportal/mloginpage",
              "target": "mainFrame"
            },
            {
              "infoId": "10325",
              "routeurl": "/portalengine/mobileportal/mportalpage",
              "levelid": "10325",
              "name": "移动门户页面",
              "pid": "10324",
              "id": "10325",
              "parentId": "10324",
              "url": "/homepage/mobile/mobilePageManit.jsp",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/mobileportal/mportalpage",
              "mobxrouteurl": "/portalengine/mobileportal/mportalpage",
              "target": "mainFrame"
            },
            {
              "infoId": "10327",
              "routeurl": "/portalengine/mobileportal/melementstylelib",
              "levelid": "10327",
              "name": "移动元素样式库",
              "pid": "10324",
              "id": "10327",
              "parentId": "10324",
              "url": "/homepage/mobile/mobilePageTabs.jsp?_fromURL=melement",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/mobileportal/melementstylelib",
              "mobxrouteurl": "/portalengine/mobileportal/melementstylelib",
              "target": "mainFrame"
            },
            {
              "infoId": "10328",
              "routeurl": "/portalengine/mobileportal/mnavstylelib",
              "levelid": "10328",
              "name": "移动导航样式库",
              "pid": "10324",
              "id": "10328",
              "parentId": "10324",
              "url": "/homepage/mobile/mobilePageTabs.jsp?_fromURL=mnav",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/portalengine/mobileportal/mnavstylelib",
              "mobxrouteurl": "/portalengine/mobileportal/mnavstylelib",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "-220",
          "routeurl": "",
          "levelid": "-220",
          "name": "个性化sch",
          "pid": "10002",
          "id": "-220",
          "parentId": "10002",
          "url": "/spa/portal/static/index.html#/main/portal/portal-5-26",
          "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-5-26",
          "mobxrouteurl": "",
          "target": "mainFrame"
        }
      ]
    },
    {
      "infoId": "10003",
      "routeurl": "",
      "levelid": "10003",
      "name": "内容引擎",
      "pid": "",
      "id": "10003",
      "parentId": "",
      "url": "/docs/index.jsp",
      "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/index",
      "mobxrouteurl": "/docengine/index",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "1288",
          "routeurl": "",
          "levelid": "1288",
          "name": "目录设置",
          "pid": "10003",
          "id": "1288",
          "parentId": "10003",
          "url": "",
          "fullrouteurl": "菜单",
          "mobxrouteurl": "/docengine/sec",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1289",
              "routeurl": "",
              "levelid": "1289",
              "name": "文档目录",
              "pid": "1288",
              "id": "1289",
              "parentId": "1288",
              "url": "/docs/category/DocMainCategory_frm.jsp",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/sec/doccategory",
              "mobxrouteurl": "/docengine/sec/doccategory",
              "target": "mainFrame"
            },
            {
              "infoId": "1290",
              "routeurl": "",
              "levelid": "1290",
              "name": "虚拟目录",
              "pid": "1288",
              "id": "1290",
              "parentId": "1288",
              "url": "/docs/category/DocTreeDocFieldFrame.jsp",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/sec/dummycategory",
              "mobxrouteurl": "/docengine/sec/dummycategory",
              "target": "mainFrame"
            },
            {
              "infoId": "1379",
              "routeurl": "",
              "levelid": "1379",
              "name": "字段管理",
              "pid": "1288",
              "id": "1379",
              "parentId": "1288",
              "url": "/docs/category/DocCategoryTab.jsp?_fromURL=4",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/sec/fieldManagement",
              "mobxrouteurl": "/docengine/sec/fieldManagement",
              "target": "mainFrame"
            },
            {
              "infoId": "560",
              "routeurl": "",
              "levelid": "560",
              "name": "目录模板",
              "pid": "1288",
              "id": "560",
              "parentId": "1288",
              "url": "/docs/category/DocDirMould_frm.jsp",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/sec/categorytemp",
              "mobxrouteurl": "/docengine/sec/categorytemp",
              "target": "mainFrame"
            },
            {
              "infoId": "11006",
              "routeurl": "",
              "levelid": "11006",
              "name": "批量维护",
              "pid": "1288",
              "id": "11006",
              "parentId": "1288",
              "url": "",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/sec/batchMaintenance",
              "mobxrouteurl": "/docengine/sec/batchMaintenance",
              "target": "mainFrame"
            },
            {
              "infoId": "1263",
              "routeurl": "",
              "levelid": "1263",
              "name": "应用设置",
              "pid": "1288",
              "id": "1263",
              "parentId": "1288",
              "url": "/docs/docs/DocOtherTab.jsp?_fromURL=3",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/sec/applysetting",
              "mobxrouteurl": "/docengine/sec/applysetting",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "1291",
          "routeurl": "",
          "levelid": "1291",
          "name": "文档模板",
          "pid": "10003",
          "id": "1291",
          "parentId": "10003",
          "url": "",
          "fullrouteurl": "菜单",
          "mobxrouteurl": "/docengine/mould",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10075",
              "routeurl": "",
              "levelid": "10075",
              "name": "显示模板",
              "pid": "1291",
              "id": "10075",
              "parentId": "1291",
              "url": "/docs/mould/DocMouldTab.jsp?_fromURL=3",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/mould/view",
              "mobxrouteurl": "/docengine/mould/view",
              "target": "mainFrame"
            },
            {
              "infoId": "10074",
              "routeurl": "",
              "levelid": "10074",
              "name": "编辑模板",
              "pid": "1291",
              "id": "10074",
              "parentId": "1291",
              "url": "/docs/mould/DocMouldTab.jsp?_fromURL=1",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/mould/edit",
              "mobxrouteurl": "/docengine/mould/edit",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "634",
          "routeurl": "",
          "levelid": "634",
          "name": "新闻",
          "pid": "10003",
          "id": "634",
          "parentId": "10003",
          "url": "",
          "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/news",
          "mobxrouteurl": "/docengine/news",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "553",
              "routeurl": "",
              "levelid": "553",
              "name": "类型设置",
              "pid": "634",
              "id": "553",
              "parentId": "634",
              "url": "/docs/news/DocNewsTab.jsp?_fromURL=2",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/news/type",
              "mobxrouteurl": "/docengine/news/type",
              "target": "mainFrame"
            },
            {
              "infoId": "28",
              "routeurl": "",
              "levelid": "28",
              "name": "新闻页设置",
              "pid": "634",
              "id": "28",
              "parentId": "634",
              "url": "/docs/news/DocNewsTab.jsp?_fromURL=1",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/news/info",
              "mobxrouteurl": "/docengine/news/info",
              "target": "mainFrame"
            },
            {
              "infoId": "1294",
              "routeurl": "",
              "levelid": "1294",
              "name": "新闻图库",
              "pid": "634",
              "id": "1294",
              "parentId": "634",
              "url": "/docs/docs/DocOtherTab.jsp?_fromURL=2",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/news/pic",
              "mobxrouteurl": "/docengine/news/pic",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "100044",
          "routeurl": "",
          "levelid": "100044",
          "name": "集成管理",
          "pid": "10003",
          "id": "100044",
          "parentId": "10003",
          "url": "",
          "fullrouteurl": "/docengine/integration",
          "mobxrouteurl": "/docengine/integration",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "100045",
              "routeurl": "",
              "levelid": "100045",
              "name": "第三方插件管理",
              "pid": "100044",
              "id": "100045",
              "parentId": "100044",
              "url": "",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/integration/plugmanager",
              "mobxrouteurl": "/docengine/integration/plugmanager",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10076",
          "routeurl": "",
          "levelid": "10076",
          "name": "期刊",
          "pid": "10003",
          "id": "10076",
          "parentId": "10003",
          "url": "",
          "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/magazine",
          "mobxrouteurl": "/docengine/magazine",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1295",
              "routeurl": "",
              "levelid": "1295",
              "name": "期刊设置",
              "pid": "10076",
              "id": "1295",
              "parentId": "10076",
              "url": "/web/webmagazine/WebMagazineMain_frm.jsp",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/magazine/index",
              "mobxrouteurl": "/docengine/magazine/index",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "1297",
          "routeurl": "",
          "levelid": "1297",
          "name": "批量操作",
          "pid": "10003",
          "id": "1297",
          "parentId": "10003",
          "url": "",
          "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/multi",
          "mobxrouteurl": "/docengine/multi",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1298",
              "routeurl": "",
              "levelid": "1298",
              "name": "批量上传文档",
              "pid": "1297",
              "id": "1298",
              "parentId": "1297",
              "url": "/docs/docs/DocOtherTab.jsp?_fromURL=4",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/multi/upload",
              "mobxrouteurl": "/docengine/multi/upload",
              "target": "mainFrame"
            },
            {
              "infoId": "1299",
              "routeurl": "",
              "levelid": "1299",
              "name": "批量调整共享",
              "pid": "1297",
              "id": "1299",
              "parentId": "1297",
              "url": "/docs/search/DocMain.jsp?urlType=15&from=shareManageDoc",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/multi/share",
              "mobxrouteurl": "/docengine/multi/share",
              "target": "mainFrame"
            },
            {
              "infoId": "715",
              "routeurl": "",
              "levelid": "715",
              "name": "文档弹出窗口设置",
              "pid": "1297",
              "id": "715",
              "parentId": "1297",
              "url": "/docs/search/DocMain.jsp?urlType=12",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/multi/popupset",
              "mobxrouteurl": "/docengine/multi/popupset",
              "target": "mainFrame"
            },
            {
              "infoId": "10483",
              "routeurl": "",
              "levelid": "10483",
              "name": "回收站文档管理",
              "pid": "1297",
              "id": "10483",
              "parentId": "1297",
              "url": "/docs/search/DocMain.jsp?urlType=23",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/multi/recycle",
              "mobxrouteurl": "/docengine/multi/recycle",
              "target": "mainFrame"
            }
          ]
        }
      ]
    },
    {
      "infoId": "10007",
      "routeurl": "",
      "levelid": "10007",
      "name": "集成中心",
      "pid": "",
      "id": "10007",
      "parentId": "",
      "url": "",
      "fullrouteurl": "",
      "mobxrouteurl": "integration",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "10110",
          "routeurl": "",
          "levelid": "10110",
          "name": "功能集成",
          "pid": "10007",
          "id": "10110",
          "parentId": "10007",
          "url": "/integration/funcintegration.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10111",
              "routeurl": "",
              "levelid": "10111",
              "name": "数据源设置",
              "pid": "10110",
              "id": "10111",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=3",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/DataSource",
              "mobxrouteurl": "/integration/DataSource",
              "target": "mainFrame"
            },
            {
              "infoId": "10112",
              "routeurl": "",
              "levelid": "10112",
              "name": "WebService注册",
              "pid": "10110",
              "id": "10112",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=1",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/webservice",
              "mobxrouteurl": "/integration/webservice",
              "target": "mainFrame"
            },
            {
              "infoId": "10113",
              "routeurl": "",
              "levelid": "10113",
              "name": "集成登录",
              "pid": "10110",
              "id": "10113",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=6",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/outter",
              "mobxrouteurl": "/integration/outter",
              "target": "mainFrame"
            },
            {
              "infoId": "10114",
              "routeurl": "",
              "levelid": "10114",
              "name": "LDAP集成",
              "pid": "10110",
              "id": "10114",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=2",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/ldap",
              "mobxrouteurl": "/integration/ldap",
              "target": "mainFrame"
            },
            {
              "infoId": "10115",
              "routeurl": "",
              "levelid": "10115",
              "name": "HR同步",
              "pid": "10110",
              "id": "10115",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=4",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/hrsync",
              "mobxrouteurl": "/integration/hrsync",
              "target": "mainFrame"
            },
            {
              "infoId": "10116",
              "routeurl": "",
              "levelid": "10116",
              "name": "计划任务",
              "pid": "10110",
              "id": "10116",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=7",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/schedule",
              "mobxrouteurl": "/integration/schedule",
              "target": "mainFrame"
            },
            {
              "infoId": "10117",
              "routeurl": "",
              "levelid": "10117",
              "name": "财务凭证",
              "pid": "10110",
              "id": "10117",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=8",
              "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/fnaVoucher",
              "mobxrouteurl": "/budget/fnaVoucher",
              "target": "mainFrame"
            },
            {
              "infoId": "100094",
              "routeurl": "",
              "levelid": "100094",
              "name": "银企直联",
              "pid": "10110",
              "id": "100094",
              "parentId": "10110",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/budget/directlyConnection",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "100095",
                  "routeurl": "",
                  "levelid": "100095",
                  "name": "接口注册",
                  "pid": "100094",
                  "id": "100095",
                  "parentId": "100094",
                  "url": "",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/directlyConnection",
                  "mobxrouteurl": "/budget/directlyConnection",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100096",
                  "routeurl": "",
                  "levelid": "100096",
                  "name": "交易结果查询",
                  "pid": "100094",
                  "id": "100096",
                  "parentId": "100094",
                  "url": "",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/transferResult",
                  "mobxrouteurl": "/budget/transferResult",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "10118",
              "routeurl": "",
              "levelid": "10118",
              "name": "流程触发集成",
              "pid": "10110",
              "id": "10118",
              "parentId": "10110",
              "url": "/integration/icontent.jsp?showtype=12",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/workflowtrigger",
              "mobxrouteurl": "/integration/workflowtrigger",
              "target": "mainFrame"
            },
            {
              "infoId": "10119",
              "routeurl": "",
              "levelid": "10119",
              "name": "流程流转集成",
              "pid": "10110",
              "id": "10119",
              "parentId": "10110",
              "url": "/integration/icontent.jsp?showtype=10",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/workflowflow",
              "mobxrouteurl": "/integration/workflowflow",
              "target": "mainFrame"
            },
            {
              "infoId": "10120",
              "routeurl": "",
              "levelid": "10120",
              "name": "数据展现集成",
              "pid": "10110",
              "id": "10120",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=10",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/datashow",
              "mobxrouteurl": "/integration/datashow",
              "target": "mainFrame"
            },
            {
              "infoId": "10152",
              "routeurl": "",
              "levelid": "10152",
              "name": "IM集成设置",
              "pid": "10110",
              "id": "10152",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=18",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/imrtx",
              "mobxrouteurl": "/integration/imrtx",
              "target": "mainFrame"
            },
            {
              "infoId": "10390",
              "routeurl": "",
              "levelid": "10390",
              "name": "WebSEAL",
              "pid": "10110",
              "id": "10390",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=27",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/webseal",
              "mobxrouteurl": "/integration/webseal",
              "target": "mainFrame"
            },
            {
              "infoId": "100084",
              "routeurl": "",
              "levelid": "100084",
              "name": "企业信息集成",
              "pid": "10110",
              "id": "100084",
              "parentId": "10110",
              "url": "",
              "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/api/APISetting",
              "mobxrouteurl": "crmmode/api/APISetting",
              "target": "mainFrame"
            },
            {
              "infoId": "10394",
              "routeurl": "",
              "levelid": "10394",
              "name": "CAS集成",
              "pid": "10110",
              "id": "10394",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=28",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/cas",
              "mobxrouteurl": "/integration/cas",
              "target": "mainFrame"
            },
            {
              "infoId": "10284",
              "routeurl": "",
              "levelid": "10284",
              "name": "统一待办中心集成",
              "pid": "10110",
              "id": "10284",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=101",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/todocenter",
              "mobxrouteurl": "/integration/todocenter",
              "target": "mainFrame"
            },
            {
              "infoId": "11005",
              "routeurl": "",
              "levelid": "11005",
              "name": "统一待办推送设置",
              "pid": "10110",
              "id": "11005",
              "parentId": "10110",
              "url": "/integration/ofssend/OfsSendTab.jsp",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/todoclient",
              "mobxrouteurl": "/integration/todoclient",
              "target": "mainFrame"
            },
            {
              "infoId": "10964",
              "routeurl": "",
              "levelid": "10964",
              "name": "统一认证中心",
              "pid": "10110",
              "id": "10964",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=311",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/authenticationcenter",
              "mobxrouteurl": "/integration/authenticationcenter",
              "target": "mainFrame"
            },
            {
              "infoId": "10197",
              "routeurl": "",
              "levelid": "10197",
              "name": "流程归档集成",
              "pid": "10110",
              "id": "10197",
              "parentId": "10110",
              "url": "/integration/integrationTab.jsp?urlType=100",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/workflowarchive",
              "mobxrouteurl": "/integration/workflowarchive",
              "target": "mainFrame"
            },
            {
              "infoId": "-225",
              "routeurl": "",
              "levelid": "-225",
              "name": "缓存页面",
              "pid": "10110",
              "id": "-225",
              "parentId": "10110",
              "url": "/integration/cachelist.jsp",
              "fullrouteurl": "/integration/cachelist.jsp",
              "mobxrouteurl": "",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "15000",
          "routeurl": "",
          "levelid": "15000",
          "name": "移动应用配置中心",
          "pid": "10007",
          "id": "15000",
          "parentId": "10007",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "15001",
              "routeurl": "",
              "levelid": "15001",
              "name": "移动平台接入设置",
              "pid": "15000",
              "id": "15001",
              "parentId": "15000",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/ecAndEM/join",
              "mobxrouteurl": "/ecAndEM/join",
              "target": "mainFrame"
            },
            {
              "infoId": "15002",
              "routeurl": "",
              "levelid": "15002",
              "name": "移动平台应用管理",
              "pid": "15000",
              "id": "15002",
              "parentId": "15000",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/ecAndEM/appmanager",
              "mobxrouteurl": "/ecAndEM/appmanager",
              "target": "mainFrame"
            },
            {
              "infoId": "15008",
              "routeurl": "",
              "levelid": "15008",
              "name": "应用入口页面管理",
              "pid": "15000",
              "id": "15008",
              "parentId": "15000",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/ecAndEM/pagemanager",
              "mobxrouteurl": "/ecAndEM/pagemanager",
              "target": "mainFrame"
            },
            {
              "infoId": "15013",
              "routeurl": "",
              "levelid": "15013",
              "name": "应用内容分享管理",
              "pid": "15000",
              "id": "15013",
              "parentId": "15000",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/ecAndEM/appShare",
              "mobxrouteurl": "/ecAndEM/appShare",
              "target": "mainFrame"
            },
            {
              "infoId": "15014",
              "routeurl": "",
              "levelid": "15014",
              "name": "移动工作台设置",
              "pid": "15000",
              "id": "15014",
              "parentId": "15000",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/ecAndEM/workbench",
              "mobxrouteurl": "/ecAndEM/workbench",
              "target": "mainFrame"
            },
            {
              "infoId": "15016",
              "routeurl": "",
              "levelid": "15016",
              "name": "应用设置",
              "pid": "15000",
              "id": "15016",
              "parentId": "15000",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/ecAndEM/appSetting",
              "mobxrouteurl": "/ecAndEM/appSetting",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10121",
          "routeurl": "",
          "levelid": "10121",
          "name": "产品集成",
          "pid": "10007",
          "id": "10121",
          "parentId": "10007",
          "url": "/integration/productintegration.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10122",
              "routeurl": "",
              "levelid": "10122",
              "name": "SAP集成",
              "pid": "10121",
              "id": "10122",
              "parentId": "10121",
              "url": "/integration/icontent.jsp?type=1&showtype=1",
              "fullrouteurl": "/spa/sapIntegration/static4engine/engine.html#/appcenter/integration/sapIntegration/",
              "mobxrouteurl": "/appcenter/integration/sapIntegration/",
              "target": "mainFrame"
            },
            {
              "infoId": "10123",
              "routeurl": "",
              "levelid": "10123",
              "name": "NC集成",
              "pid": "10121",
              "id": "10123",
              "parentId": "10121",
              "url": "/integration/icontent.jsp?showtype=2&type=1",
              "fullrouteurl": "/spa/integration/static4engine/engine.html#/integration/NC",
              "mobxrouteurl": "/integration/NC",
              "target": "mainFrame"
            },
            {
              "infoId": "100005",
              "routeurl": "",
              "levelid": "100005",
              "name": "腾讯企业邮箱集成",
              "pid": "10121",
              "id": "100005",
              "parentId": "10121",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/integration/tencentmail",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "-154",
          "routeurl": "",
          "levelid": "-154",
          "name": "　e8菜单",
          "pid": "10007",
          "id": "-154",
          "parentId": "10007",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "-155",
              "routeurl": "",
              "levelid": "-155",
              "name": "　E8_Ldap",
              "pid": "-154",
              "id": "-155",
              "parentId": "-154",
              "url": "/integration/ldapsetting.jsp?urlType=2",
              "fullrouteurl": "/integration/ldapsetting.jsp?urlType=2",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "-156",
              "routeurl": "",
              "levelid": "-156",
              "name": "　Ldap初始化",
              "pid": "-154",
              "id": "-156",
              "parentId": "-154",
              "url": "/integration/ldap/LdapDataMigration.jsp",
              "fullrouteurl": "/integration/ldap/LdapDataMigration.jsp",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "-157",
              "routeurl": "",
              "levelid": "-157",
              "name": "　分级保护",
              "pid": "-154",
              "id": "-157",
              "parentId": "-154",
              "url": "/spa/hrm/static4engine/engine.html#/hrmengine/levelProtection",
              "fullrouteurl": "/spa/hrm/static4engine/engine.html#/hrmengine/levelProtection",
              "mobxrouteurl": "",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "-222",
          "routeurl": "",
          "levelid": "-222",
          "name": "缓存监控",
          "pid": "10007",
          "id": "-222",
          "parentId": "10007",
          "url": "/integration/cachelist.jsp",
          "fullrouteurl": "/integration/cachelist.jsp",
          "mobxrouteurl": "",
          "target": "mainFrame"
        }
      ]
    },
    {
      "infoId": "10004",
      "routeurl": "",
      "levelid": "10004",
      "name": "应用中心",
      "pid": "",
      "id": "10004",
      "parentId": "",
      "url": "/middlecenter/AppIndex.jsp",
      "fullrouteurl": "/spa/portal/static4engine/engine.html#/appcenter",
      "mobxrouteurl": "/appcenter",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "3",
          "routeurl": "",
          "levelid": "3",
          "name": "人事",
          "pid": "10004",
          "id": "3",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "46",
              "routeurl": "",
              "levelid": "46",
              "name": "人事管理",
              "pid": "3",
              "id": "46",
              "parentId": "3",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "80",
                  "routeurl": "",
                  "levelid": "80",
                  "name": "入职维护设置",
                  "pid": "46",
                  "id": "80",
                  "parentId": "46",
                  "url": "",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/entrymaintenance",
                  "mobxrouteurl": "/hrmengine/entrymaintenance",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1304",
                  "routeurl": "/hrmengine/birthdayremind",
                  "levelid": "1304",
                  "name": "员工关怀提醒",
                  "pid": "46",
                  "id": "1304",
                  "parentId": "46",
                  "url": "/hrm/HrmTab.jsp?_fromURL=BirthdaySetting",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/birthdayremind",
                  "mobxrouteurl": "/hrmengine/birthdayremind",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1333",
                  "routeurl": "",
                  "levelid": "1333",
                  "name": "人事状态变更",
                  "pid": "46",
                  "id": "1333",
                  "parentId": "46",
                  "url": "",
                  "fullrouteurl": "",
                  "mobxrouteurl": "",
                  "target": "mainFrame",
                  "child": [
                    {
                      "infoId": "79",
                      "routeurl": "",
                      "levelid": "79",
                      "name": "人员试用",
                      "pid": "1333",
                      "id": "79",
                      "parentId": "1333",
                      "url": "/hrm/HrmTab.jsp?_fromURL=HrmResourceTry",
                      "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/trial",
                      "mobxrouteurl": "/hrmengine/trial",
                      "target": "mainFrame"
                    },
                    {
                      "infoId": "72",
                      "routeurl": "",
                      "levelid": "72",
                      "name": "人员转正",
                      "pid": "1333",
                      "id": "72",
                      "parentId": "1333",
                      "url": "/hrm/HrmTab.jsp?_fromURL=HrmResourceHire",
                      "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/formal",
                      "mobxrouteurl": "/hrmengine/formal",
                      "target": "mainFrame"
                    },
                    {
                      "infoId": "73",
                      "routeurl": "",
                      "levelid": "73",
                      "name": "人员续签",
                      "pid": "1333",
                      "id": "73",
                      "parentId": "1333",
                      "url": "/hrm/HrmTab.jsp?_fromURL=HrmResourceExtend",
                      "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/renew",
                      "mobxrouteurl": "/hrmengine/renew",
                      "target": "mainFrame"
                    },
                    {
                      "infoId": "74",
                      "routeurl": "",
                      "levelid": "74",
                      "name": "人员调动",
                      "pid": "1333",
                      "id": "74",
                      "parentId": "1333",
                      "url": "/hrm/HrmTab.jsp?_fromURL=HrmResourceRedeploy",
                      "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/transfer",
                      "mobxrouteurl": "/hrmengine/transfer",
                      "target": "mainFrame"
                    },
                    {
                      "infoId": "75",
                      "routeurl": "",
                      "levelid": "75",
                      "name": "人员离职",
                      "pid": "1333",
                      "id": "75",
                      "parentId": "1333",
                      "url": "/hrm/HrmTab.jsp?_fromURL=HrmResourceDismiss",
                      "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/quit",
                      "mobxrouteurl": "/hrmengine/quit",
                      "target": "mainFrame"
                    },
                    {
                      "infoId": "76",
                      "routeurl": "",
                      "levelid": "76",
                      "name": "人员退休",
                      "pid": "1333",
                      "id": "76",
                      "parentId": "1333",
                      "url": "/hrm/HrmTab.jsp?_fromURL=HrmResourceRetire",
                      "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/retire",
                      "mobxrouteurl": "/hrmengine/retire",
                      "target": "mainFrame"
                    },
                    {
                      "infoId": "78",
                      "routeurl": "",
                      "levelid": "78",
                      "name": "人员解聘",
                      "pid": "1333",
                      "id": "78",
                      "parentId": "1333",
                      "url": "/hrm/HrmTab.jsp?_fromURL=HrmResourceFire",
                      "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/dismiss",
                      "mobxrouteurl": "/hrmengine/dismiss",
                      "target": "mainFrame"
                    },
                    {
                      "infoId": "77",
                      "routeurl": "",
                      "levelid": "77",
                      "name": "人员返聘",
                      "pid": "1333",
                      "id": "77",
                      "parentId": "1333",
                      "url": "/hrm/HrmTab.jsp?_fromURL=HrmResourceRehire",
                      "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/rehire",
                      "mobxrouteurl": "/hrmengine/rehire",
                      "target": "mainFrame"
                    },
                    {
                      "infoId": "10203",
                      "routeurl": "/hrmengine/wfSetting/stateChange",
                      "levelid": "10203",
                      "name": "状态变更流程",
                      "pid": "1333",
                      "id": "10203",
                      "parentId": "1333",
                      "url": "/hrm/pm/hrmStateProcSet/home.jsp",
                      "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/wfSetting/stateChange",
                      "mobxrouteurl": "/hrmengine/wfSetting/stateChange",
                      "target": "mainFrame"
                    }
                  ]
                }
              ]
            },
            {
              "infoId": "48",
              "routeurl": "",
              "levelid": "48",
              "name": "招聘管理",
              "pid": "3",
              "id": "48",
              "parentId": "3",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "94",
                  "routeurl": "hrmengine/employDemand",
                  "levelid": "94",
                  "name": "用工需求",
                  "pid": "48",
                  "id": "94",
                  "parentId": "48",
                  "url": "/hrm/HrmTab.jsp?_fromURL=useDemand",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/employDemand",
                  "mobxrouteurl": "hrmengine/employDemand",
                  "target": "mainFrame"
                },
                {
                  "infoId": "95",
                  "routeurl": "/hrmengine/recruitPlan",
                  "levelid": "95",
                  "name": "招聘计划",
                  "pid": "48",
                  "id": "95",
                  "parentId": "48",
                  "url": "/hrm/HrmTab.jsp?_fromURL=careerPlan",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/recruitPlan",
                  "mobxrouteurl": "/hrmengine/recruitPlan",
                  "target": "mainFrame"
                },
                {
                  "infoId": "97",
                  "routeurl": "/hrmengine/recruitInfo",
                  "levelid": "97",
                  "name": "招聘信息",
                  "pid": "48",
                  "id": "97",
                  "parentId": "48",
                  "url": "/hrm/HrmTab.jsp?_fromURL=inviteInfo",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/recruitInfo",
                  "mobxrouteurl": "/hrmengine/recruitInfo",
                  "target": "mainFrame"
                },
                {
                  "infoId": "96",
                  "routeurl": "/hrmengine/recruitLibrary",
                  "levelid": "96",
                  "name": "应聘库",
                  "pid": "48",
                  "id": "96",
                  "parentId": "48",
                  "url": "/hrm/HrmTab.jsp?_fromURL=applyInfo",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/recruitLibrary",
                  "mobxrouteurl": "/hrmengine/recruitLibrary",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "49",
              "routeurl": "",
              "levelid": "49",
              "name": "合同管理",
              "pid": "3",
              "id": "49",
              "parentId": "3",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "10297",
                  "routeurl": "/hrmengine/conExWarning",
                  "levelid": "10297",
                  "name": "合同到期提醒",
                  "pid": "49",
                  "id": "10297",
                  "parentId": "49",
                  "url": "/hrm/HrmTab.jsp?_fromURL=ContractSetting",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/conExWarning",
                  "mobxrouteurl": "/hrmengine/conExWarning",
                  "target": "mainFrame"
                },
                {
                  "infoId": "99",
                  "routeurl": "",
                  "levelid": "99",
                  "name": "合同模板",
                  "pid": "49",
                  "id": "99",
                  "parentId": "49",
                  "url": "/docs/mouldfile/DocMould_frm.jsp",
                  "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/mould/contract",
                  "mobxrouteurl": "/docengine/mould/contract",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100",
                  "routeurl": "/hrmengine/contractType",
                  "levelid": "100",
                  "name": "合同种类",
                  "pid": "49",
                  "id": "100",
                  "parentId": "49",
                  "url": "/hrm/contract/contracttype/HrmContractType_frm.jsp",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/contractType",
                  "mobxrouteurl": "/hrmengine/contractType",
                  "target": "mainFrame"
                },
                {
                  "infoId": "101",
                  "routeurl": "/hrmengine/contractMaintain",
                  "levelid": "101",
                  "name": "合同维护",
                  "pid": "49",
                  "id": "101",
                  "parentId": "49",
                  "url": "/hrm/contract/contract/HrmContract_frm.jsp",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/contractMaintain",
                  "mobxrouteurl": "/hrmengine/contractMaintain",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "50",
              "routeurl": "",
              "levelid": "50",
              "name": "工资福利",
              "pid": "3",
              "id": "50",
              "parentId": "3",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "517",
                  "routeurl": "/hrmengine/salaryIndexSetting",
                  "levelid": "517",
                  "name": "薪酬指标设置",
                  "pid": "50",
                  "id": "517",
                  "parentId": "50",
                  "url": "/hrm/finance/compensation/CompensationTargetSet_frm.jsp",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/salaryIndexSetting",
                  "mobxrouteurl": "/hrmengine/salaryIndexSetting",
                  "target": "mainFrame"
                },
                {
                  "infoId": "518",
                  "routeurl": "/hrmengine/salaryIndexMaintenance",
                  "levelid": "518",
                  "name": "薪酬指标数据维护",
                  "pid": "50",
                  "id": "518",
                  "parentId": "50",
                  "url": "/hrm/finance/compensation/CompensationTargetMaint_frm.jsp",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/salaryIndexMaintenance",
                  "mobxrouteurl": "/hrmengine/salaryIndexMaintenance",
                  "target": "mainFrame"
                },
                {
                  "infoId": "102",
                  "routeurl": "/hrmengine/salaryItemsSet",
                  "levelid": "102",
                  "name": "工资项设置",
                  "pid": "50",
                  "id": "102",
                  "parentId": "50",
                  "url": "/hrm/finance/salary/HrmSalaryItem.jsp",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/salaryItemsSet",
                  "mobxrouteurl": "/hrmengine/salaryItemsSet",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100119",
                  "routeurl": "",
                  "levelid": "100119",
                  "name": "工资应用设置",
                  "pid": "50",
                  "id": "100119",
                  "parentId": "50",
                  "url": "",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/salaryApplySet",
                  "mobxrouteurl": "/hrmengine/salaryApplySet",
                  "target": "mainFrame"
                },
                {
                  "infoId": "104",
                  "routeurl": "/hrmengine/payrollManagement",
                  "levelid": "104",
                  "name": "工资单管理",
                  "pid": "50",
                  "id": "104",
                  "parentId": "50",
                  "url": "/hrm/finance/salary/HrmSalaryManage.jsp",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/payrollManagement",
                  "mobxrouteurl": "/hrmengine/payrollManagement",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100081",
                  "routeurl": "",
                  "levelid": "100081",
                  "name": "个税专项填报信息",
                  "pid": "50",
                  "id": "100081",
                  "parentId": "50",
                  "url": "",
                  "fullrouteurl": "/tax/reportInfo",
                  "mobxrouteurl": "/tax/reportInfo",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100082",
                  "routeurl": "",
                  "levelid": "100082",
                  "name": "个税专项扣除金额",
                  "pid": "50",
                  "id": "100082",
                  "parentId": "50",
                  "url": "",
                  "fullrouteurl": "/tax/deductionMoney",
                  "mobxrouteurl": "/tax/deductionMoney",
                  "target": "mainFrame"
                },
                {
                  "infoId": "526",
                  "routeurl": "/hrmengine/personalSalaryAdjustment",
                  "levelid": "526",
                  "name": "个人工资项调整",
                  "pid": "50",
                  "id": "526",
                  "parentId": "50",
                  "url": "/hrm/HrmTab.jsp?_fromURL=HrmSalaryChange",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/personalSalaryAdjustment",
                  "mobxrouteurl": "/hrmengine/personalSalaryAdjustment",
                  "target": "mainFrame"
                },
                {
                  "infoId": "103",
                  "routeurl": "/hrmengine/salaryBank",
                  "levelid": "103",
                  "name": "工资银行",
                  "pid": "50",
                  "id": "103",
                  "parentId": "50",
                  "url": "/hrm/HrmTab.jsp?_fromURL=HrmBankList",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/salaryBank",
                  "mobxrouteurl": "/hrmengine/salaryBank",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "51",
              "routeurl": "",
              "levelid": "51",
              "name": "培训管理",
              "pid": "3",
              "id": "51",
              "parentId": "3",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "105",
                  "routeurl": "/hrmengine/trainTypes",
                  "levelid": "105",
                  "name": "培训种类",
                  "pid": "51",
                  "id": "105",
                  "parentId": "51",
                  "url": "/hrm/HrmTab.jsp?_fromURL=HrmTrainType",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/trainTypes",
                  "mobxrouteurl": "/hrmengine/trainTypes",
                  "target": "mainFrame"
                },
                {
                  "infoId": "106",
                  "routeurl": "/hrmengine/trainPlan",
                  "levelid": "106",
                  "name": "培训规划",
                  "pid": "51",
                  "id": "106",
                  "parentId": "51",
                  "url": "/hrm/HrmTab.jsp?_fromURL=HrmTrainLayout",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/trainPlan",
                  "mobxrouteurl": "/hrmengine/trainPlan",
                  "target": "mainFrame"
                },
                {
                  "infoId": "107",
                  "routeurl": "/hrmengine/trainResource",
                  "levelid": "107",
                  "name": "培训资源",
                  "pid": "51",
                  "id": "107",
                  "parentId": "51",
                  "url": "/hrm/HrmTab.jsp?_fromURL=HrmTrainResource",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/trainResource",
                  "mobxrouteurl": "/hrmengine/trainResource",
                  "target": "mainFrame"
                },
                {
                  "infoId": "108",
                  "routeurl": "/hrmengine/trainArrange",
                  "levelid": "108",
                  "name": "培训安排",
                  "pid": "51",
                  "id": "108",
                  "parentId": "51",
                  "url": "/hrm/HrmTab.jsp?_fromURL=HrmTrainPlan",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/trainArrange",
                  "mobxrouteurl": "/hrmengine/trainArrange",
                  "target": "mainFrame"
                },
                {
                  "infoId": "109",
                  "routeurl": "/hrmengine/trainActivity",
                  "levelid": "109",
                  "name": "培训活动",
                  "pid": "51",
                  "id": "109",
                  "parentId": "51",
                  "url": "/hrm/HrmTab.jsp?_fromURL=HrmTrain",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/trainActivity",
                  "mobxrouteurl": "/hrmengine/trainActivity",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "52",
              "routeurl": "",
              "levelid": "52",
              "name": "奖惩考核",
              "pid": "3",
              "id": "52",
              "parentId": "3",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "110",
                  "routeurl": "/hrmengine/rpType",
                  "levelid": "110",
                  "name": "奖惩种类",
                  "pid": "52",
                  "id": "110",
                  "parentId": "52",
                  "url": "/hrm/HrmTab.jsp?_fromURL=HrmAwardType",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/rpType",
                  "mobxrouteurl": "/hrmengine/rpType",
                  "target": "mainFrame"
                },
                {
                  "infoId": "111",
                  "routeurl": "/hrmengine/rpManage",
                  "levelid": "111",
                  "name": "奖惩管理",
                  "pid": "52",
                  "id": "111",
                  "parentId": "52",
                  "url": "/hrm/HrmTab.jsp?_fromURL=HrmAward",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/rpManage",
                  "mobxrouteurl": "/hrmengine/rpManage",
                  "target": "mainFrame"
                },
                {
                  "infoId": "112",
                  "routeurl": "/hrmengine/assType",
                  "levelid": "112",
                  "name": "考核种类",
                  "pid": "52",
                  "id": "112",
                  "parentId": "52",
                  "url": "/hrm/HrmTab.jsp?_fromURL=HrmCheckKind",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/assType",
                  "mobxrouteurl": "/hrmengine/assType",
                  "target": "mainFrame"
                },
                {
                  "infoId": "113",
                  "routeurl": "/hrmengine/assItem",
                  "levelid": "113",
                  "name": "考核项目",
                  "pid": "52",
                  "id": "113",
                  "parentId": "52",
                  "url": "/hrm/HrmTab.jsp?_fromURL=hrmCheckItem",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/assItem",
                  "mobxrouteurl": "/hrmengine/assItem",
                  "target": "mainFrame"
                },
                {
                  "infoId": "114",
                  "routeurl": "/hrmengine/assImple",
                  "levelid": "114",
                  "name": "考核实施",
                  "pid": "52",
                  "id": "114",
                  "parentId": "52",
                  "url": "/hrm/HrmTab.jsp?_fromURL=hrmCheckInfo&cmd=15652",
                  "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/assImple",
                  "mobxrouteurl": "/hrmengine/assImple",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "15",
              "routeurl": "",
              "levelid": "15",
              "name": "签章管理",
              "pid": "3",
              "id": "15",
              "parentId": "3",
              "url": "/docs/docs/SignatureManage_frm.jsp",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/signatureManagement",
              "mobxrouteurl": "/hrmengine/signatureManagement",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10078",
          "routeurl": "",
          "levelid": "10078",
          "name": "通用设置",
          "pid": "10004",
          "id": "10078",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "351",
              "routeurl": "",
              "levelid": "351",
              "name": "币种设置",
              "pid": "10078",
              "id": "351",
              "parentId": "10078",
              "url": "/hrm/HrmTab.jsp?_fromURL=fnaCurrencies",
              "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/currencySet",
              "mobxrouteurl": "/budget/currencySet",
              "target": "mainFrame"
            },
            {
              "infoId": "1328",
              "routeurl": "",
              "levelid": "1328",
              "name": "单位设置",
              "pid": "10078",
              "id": "1328",
              "parentId": "10078",
              "url": "/hrm/HrmTab.jsp?_fromURL=lgcAssetUnit",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/unitset",
              "mobxrouteurl": "/hrmengine/unitset",
              "target": "mainFrame"
            },
            {
              "infoId": "1801",
              "routeurl": "",
              "levelid": "1801",
              "name": "浏览框显示设置",
              "pid": "10078",
              "id": "1801",
              "parentId": "10078",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/browserDisplaySet",
              "mobxrouteurl": "/browserDisplaySet",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "100003",
          "routeurl": "",
          "levelid": "100003",
          "name": "考勤",
          "pid": "10004",
          "id": "100003",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "100009",
              "routeurl": "",
              "levelid": "100009",
              "name": "一键启用考勤",
              "pid": "100003",
              "id": "100009",
              "parentId": "100003",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "attendance/init",
              "target": "mainFrame"
            },
            {
              "infoId": "100010",
              "routeurl": "",
              "levelid": "100010",
              "name": "班次管理",
              "pid": "100003",
              "id": "100010",
              "parentId": "100003",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/attendance/shift",
              "target": "mainFrame"
            },
            {
              "infoId": "100018",
              "routeurl": "",
              "levelid": "100018",
              "name": "考勤组管理",
              "pid": "100003",
              "id": "100018",
              "parentId": "100003",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/attendance/groupSetting",
              "target": "mainFrame"
            },
            {
              "infoId": "100011",
              "routeurl": "",
              "levelid": "100011",
              "name": "节假日设置",
              "pid": "100003",
              "id": "100011",
              "parentId": "100003",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "attendance/holidaySetting",
              "target": "mainFrame"
            },
            {
              "infoId": "100012",
              "routeurl": "",
              "levelid": "100012",
              "name": "加班规则",
              "pid": "100003",
              "id": "100012",
              "parentId": "100003",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "attendance/overtimeRule",
              "target": "mainFrame"
            },
            {
              "infoId": "100007",
              "routeurl": "",
              "levelid": "100007",
              "name": "出差公出规则",
              "pid": "100003",
              "id": "100007",
              "parentId": "100003",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "attendance/travelRule",
              "target": "mainFrame"
            },
            {
              "infoId": "100016",
              "routeurl": "",
              "levelid": "100016",
              "name": "考勤流程设置",
              "pid": "100003",
              "id": "100016",
              "parentId": "100003",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/attendance/wfn/statesShedule",
              "target": "mainFrame"
            },
            {
              "infoId": "100013",
              "routeurl": "",
              "levelid": "100013",
              "name": "假期管理",
              "pid": "100003",
              "id": "100013",
              "parentId": "100003",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "100029",
                  "routeurl": "",
                  "levelid": "100029",
                  "name": "假期类型",
                  "pid": "100013",
                  "id": "100029",
                  "parentId": "100013",
                  "url": "",
                  "fullrouteurl": "",
                  "mobxrouteurl": "/attendance/holidayType",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100014",
                  "routeurl": "",
                  "levelid": "100014",
                  "name": "假期规则",
                  "pid": "100013",
                  "id": "100014",
                  "parentId": "100013",
                  "url": "",
                  "fullrouteurl": "",
                  "mobxrouteurl": "attendance/holidayRule",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100015",
                  "routeurl": "",
                  "levelid": "100015",
                  "name": "员工假期余额",
                  "pid": "100013",
                  "id": "100015",
                  "parentId": "100013",
                  "url": "",
                  "fullrouteurl": "",
                  "mobxrouteurl": "attendance/vacationBalance",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "100031",
              "routeurl": "",
              "levelid": "100031",
              "name": "外部集成考勤",
              "pid": "100003",
              "id": "100031",
              "parentId": "100003",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "100032",
                  "routeurl": "",
                  "levelid": "100032",
                  "name": "数据同步设置",
                  "pid": "100031",
                  "id": "100032",
                  "parentId": "100031",
                  "url": "",
                  "fullrouteurl": "/attendance/attSyncSetting",
                  "mobxrouteurl": "/attendance/attSyncSetting",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100033",
                  "routeurl": "",
                  "levelid": "100033",
                  "name": "考勤数据导入",
                  "pid": "100031",
                  "id": "100033",
                  "parentId": "100031",
                  "url": "",
                  "fullrouteurl": "/attendance/imptExtAttendanceData",
                  "mobxrouteurl": "/attendance/imptExtAttendanceData",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "100080",
              "routeurl": "",
              "levelid": "100080",
              "name": "考勤设置升级",
              "pid": "100003",
              "id": "100080",
              "parentId": "100003",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/attendance/upgrade",
              "target": "mainFrame"
            },
            {
              "infoId": "100008",
              "routeurl": "",
              "levelid": "100008",
              "name": "考勤报表共享设置",
              "pid": "100003",
              "id": "100008",
              "parentId": "100003",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "attendance/attendanceRpSharingSetting",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "502",
          "routeurl": "",
          "levelid": "502",
          "name": "会议",
          "pid": "10004",
          "id": "502",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1436",
              "routeurl": "",
              "levelid": "1436",
              "name": "基础设置",
              "pid": "502",
              "id": "1436",
              "parentId": "502",
              "url": "javascript:void(0)",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "356",
                  "routeurl": "",
                  "levelid": "356",
                  "name": "会议室设置",
                  "pid": "1436",
                  "id": "356",
                  "parentId": "1436",
                  "url": "/meeting/Maint/MeetingRoom.jsp",
                  "fullrouteurl": "/spa/meeting/static4engine/engine.html#/meetingengine/meetingroomset",
                  "mobxrouteurl": "/meetingengine/meetingroomset",
                  "target": "mainFrame"
                },
                {
                  "infoId": "357",
                  "routeurl": "",
                  "levelid": "357",
                  "name": "会议类型设置",
                  "pid": "1436",
                  "id": "357",
                  "parentId": "1436",
                  "url": "/meeting/Maint/ListMeetingType.jsp",
                  "fullrouteurl": "/spa/meeting/static4engine/engine.html#/meetingengine/typeset",
                  "mobxrouteurl": "/meetingengine/typeset",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1442",
                  "routeurl": "",
                  "levelid": "1442",
                  "name": "会议服务设置",
                  "pid": "1436",
                  "id": "1442",
                  "parentId": "1436",
                  "url": "/meeting/Maint/meetingServiceTab.jsp",
                  "fullrouteurl": "/spa/meeting/static4engine/engine.html#/meetingengine/serveset",
                  "mobxrouteurl": "/meetingengine/serveset",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "1306",
              "routeurl": "",
              "levelid": "1306",
              "name": "应用设置",
              "pid": "502",
              "id": "1306",
              "parentId": "502",
              "url": "/meeting/Maint/MeetingSetTab.jsp",
              "fullrouteurl": "/spa/meeting/static4engine/engine.html#/meetingengine/applyset",
              "mobxrouteurl": "/meetingengine/applyset",
              "target": "mainFrame"
            },
            {
              "infoId": "11123",
              "routeurl": "",
              "levelid": "11123",
              "name": "会议共享设置",
              "pid": "502",
              "id": "11123",
              "parentId": "502",
              "url": "/spa/meeting/static/index.html#/main/meeting/share",
              "fullrouteurl": "/spa/meeting/static4engine/engine.html#/meetingengine/shareset",
              "mobxrouteurl": "/meetingengine/shareset",
              "target": "mainFrame"
            },
            {
              "infoId": "358",
              "routeurl": "",
              "levelid": "358",
              "name": "监控设置",
              "pid": "502",
              "id": "358",
              "parentId": "502",
              "url": "",
              "fullrouteurl": "/spa/meeting/static4engine/engine.html#/meetingengine/monitorset",
              "mobxrouteurl": "/meetingengine/monitorset",
              "target": "mainFrame"
            },
            {
              "infoId": "1437",
              "routeurl": "",
              "levelid": "1437",
              "name": "自定义设置",
              "pid": "502",
              "id": "1437",
              "parentId": "502",
              "url": "javascript:void(0)",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "1438",
                  "routeurl": "",
                  "levelid": "1438",
                  "name": "会议信息字段定义",
                  "pid": "1437",
                  "id": "1438",
                  "parentId": "1437",
                  "url": "/meeting/defined/meetingInfoTab.jsp",
                  "fullrouteurl": "/spa/meeting/static4engine/engine.html#/meetingengine/msgdefine",
                  "mobxrouteurl": "/meetingengine/msgdefine",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1439",
                  "routeurl": "",
                  "levelid": "1439",
                  "name": "会议服务字段定义",
                  "pid": "1437",
                  "id": "1439",
                  "parentId": "1437",
                  "url": "/meeting/defined/meetingServiceTab.jsp",
                  "fullrouteurl": "/spa/meeting/static4engine/engine.html#/meetingengine/servedefine",
                  "mobxrouteurl": "/meetingengine/servedefine",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1440",
                  "routeurl": "",
                  "levelid": "1440",
                  "name": "会议议程字段定义",
                  "pid": "1437",
                  "id": "1440",
                  "parentId": "1437",
                  "url": "/meeting/defined/meetingAgendaTab.jsp",
                  "fullrouteurl": "/spa/meeting/static4engine/engine.html#/meetingengine/agendaDefine",
                  "mobxrouteurl": "/meetingengine/agendaDefine",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "1441",
              "routeurl": "",
              "levelid": "1441",
              "name": "会议流程设置",
              "pid": "502",
              "id": "1441",
              "parentId": "502",
              "url": "/meeting/defined/meetingWfTab.jsp",
              "fullrouteurl": "/spa/meeting/static4engine/engine.html#/meetingengine/flowset",
              "mobxrouteurl": "/meetingengine/flowset",
              "target": "mainFrame"
            },
            {
              "infoId": "1443",
              "routeurl": "",
              "levelid": "1443",
              "name": "提醒模板",
              "pid": "502",
              "id": "1443",
              "parentId": "502",
              "url": "/meeting/defined/remindListTab.jsp",
              "fullrouteurl": "/spa/meeting/static4engine/engine.html#/meetingengine/notetemp",
              "mobxrouteurl": "/meetingengine/notetemp",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "546",
          "routeurl": "",
          "levelid": "546",
          "name": "日程",
          "pid": "10004",
          "id": "546",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "547",
              "routeurl": "",
              "levelid": "547",
              "name": "日程类型设置",
              "pid": "546",
              "id": "547",
              "parentId": "546",
              "url": "/workplan/config/global/WorkPlanTypeSetTab.jsp",
              "fullrouteurl": "/spa/workplan/static4engine/engine.html#/workplanengine/typeset",
              "mobxrouteurl": "/workplanengine/typeSet",
              "target": "mainFrame"
            },
            {
              "infoId": "100083",
              "routeurl": "",
              "levelid": "100083",
              "name": "日程接收人范围设置",
              "pid": "546",
              "id": "100083",
              "parentId": "546",
              "url": "",
              "fullrouteurl": "/workplanengine/receiveScope",
              "mobxrouteurl": "/workplanengine/receiveScope",
              "target": "mainFrame"
            },
            {
              "infoId": "583",
              "routeurl": "",
              "levelid": "583",
              "name": "日程共享设置",
              "pid": "546",
              "id": "583",
              "parentId": "546",
              "url": "/workplan/config/global/WorkPlanShareSetTab.jsp",
              "fullrouteurl": "/spa/workplan/static4engine/engine.html#/workplanengine/shareSet",
              "mobxrouteurl": "/workplanengine/shareSet",
              "target": "mainFrame"
            },
            {
              "infoId": "580",
              "routeurl": "",
              "levelid": "580",
              "name": "日程监控设置",
              "pid": "546",
              "id": "580",
              "parentId": "546",
              "url": "/system/systemmonitor/workplan/WorkPlanMonitorStaticTab.jsp",
              "fullrouteurl": "/spa/workplan/static4engine/engine.html#/workplanengine/monitorSet",
              "mobxrouteurl": "/workplanengine/monitorSet",
              "target": "mainFrame"
            },
            {
              "infoId": "1406",
              "routeurl": "",
              "levelid": "1406",
              "name": "应用设置",
              "pid": "546",
              "id": "1406",
              "parentId": "546",
              "url": "/workplan/data/WorkPlanSet.jsp",
              "fullrouteurl": "/spa/workplan/static4engine/engine.html#/workplanengine/applicationSet",
              "mobxrouteurl": "/workplanengine/applicationSet",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "1329",
          "routeurl": "",
          "levelid": "1329",
          "name": "通信",
          "pid": "10004",
          "id": "1329",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1335",
              "routeurl": "",
              "levelid": "1335",
              "name": "短信应用设置",
              "pid": "1329",
              "id": "1335",
              "parentId": "1329",
              "url": "/sms/SmsSetupTab.jsp?method=ALL",
              "fullrouteurl": "",
              "mobxrouteurl": "/sms/SmsSet",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "5",
          "routeurl": "",
          "levelid": "5",
          "name": "客户",
          "pid": "10004",
          "id": "5",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10594",
              "routeurl": "",
              "levelid": "10594",
              "name": "企业信息设置",
              "pid": "5",
              "id": "10594",
              "parentId": "5",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "10595",
                  "routeurl": "/crmmode/customer/businessForm",
                  "levelid": "10595",
                  "name": "工商信息设置",
                  "pid": "10594",
                  "id": "10595",
                  "parentId": "10594",
                  "url": "/CRM/Maint/CRMBusinessInfoSettings.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/customer/businessForm",
                  "mobxrouteurl": "/crmmode/customer/businessForm",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "128",
              "routeurl": "",
              "levelid": "128",
              "name": "基础设置",
              "pid": "5",
              "id": "128",
              "parentId": "5",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "136",
                  "routeurl": "/crmmode/docker/basic/callList",
                  "levelid": "136",
                  "name": "称呼设置",
                  "pid": "128",
                  "id": "136",
                  "parentId": "128",
                  "url": "/CRM/Maint/ListContacterTitle.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/basic/callList",
                  "mobxrouteurl": "/crmmode/list/basic/callList",
                  "target": "mainFrame"
                },
                {
                  "infoId": "137",
                  "routeurl": "/crmmode/docker/basic/addrTypeList",
                  "levelid": "137",
                  "name": "地址类型",
                  "pid": "128",
                  "id": "137",
                  "parentId": "128",
                  "url": "/CRM/Maint/ListAddressType.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/basic/addrTypeList",
                  "mobxrouteurl": "/crmmode/list/basic/addrTypeList",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1319",
                  "routeurl": "/crmmode/docker/basic/contWayList",
                  "levelid": "1319",
                  "name": "获得途径",
                  "pid": "128",
                  "id": "1319",
                  "parentId": "128",
                  "url": "/CRM/Maint/ListContactWay.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/basic/contWayList",
                  "mobxrouteurl": "/crmmode/list/basic/contWayList",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "10079",
              "routeurl": "",
              "levelid": "10079",
              "name": "自定义设置",
              "pid": "5",
              "id": "10079",
              "parentId": "5",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "140",
                  "routeurl": "",
                  "levelid": "140",
                  "name": "基本信息字段设置",
                  "pid": "10079",
                  "id": "140",
                  "parentId": "10079",
                  "url": "/base/ffield/ListCustomerFreeField.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/custom/customConfig/c1",
                  "mobxrouteurl": "/crmmode/custom/customConfig/c1",
                  "target": "mainFrame"
                },
                {
                  "infoId": "141",
                  "routeurl": "",
                  "levelid": "141",
                  "name": "联系人信息字段设置",
                  "pid": "10079",
                  "id": "141",
                  "parentId": "10079",
                  "url": "/base/ffield/ListContacterFreeField.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/custom/customConfig/c2",
                  "mobxrouteurl": "/crmmode/custom/customConfig/c2",
                  "target": "mainFrame"
                },
                {
                  "infoId": "142",
                  "routeurl": "",
                  "levelid": "142",
                  "name": "地址信息字段设置",
                  "pid": "10079",
                  "id": "142",
                  "parentId": "10079",
                  "url": "/base/ffield/ListAddressFreeField.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/custom/customConfig/c3",
                  "mobxrouteurl": "/crmmode/custom/customConfig/c3",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10169",
                  "routeurl": "",
                  "levelid": "10169",
                  "name": "商机信息字段设置",
                  "pid": "10079",
                  "id": "10169",
                  "parentId": "10079",
                  "url": "/base/ffield/ListSellChanceFreeField.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/custom/customConfig/c4",
                  "mobxrouteurl": "/crmmode/custom/customConfig/c4",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10457",
                  "routeurl": "",
                  "levelid": "10457",
                  "name": "客户卡片显示栏目",
                  "pid": "10079",
                  "id": "10457",
                  "parentId": "10079",
                  "url": "/CRM/config/Crm_detailPageTabConfig.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/custom/customerCardConfig",
                  "mobxrouteurl": "/crmmode/custom/customerCardConfig",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "129",
              "routeurl": "",
              "levelid": "129",
              "name": "分类设置",
              "pid": "5",
              "id": "129",
              "parentId": "5",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "143",
                  "routeurl": "/crmmode/customer/sectorConfig",
                  "levelid": "143",
                  "name": "行业设置",
                  "pid": "129",
                  "id": "143",
                  "parentId": "129",
                  "url": "/CRM/Maint/ListSectorInfo.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/customer/sectorConfig",
                  "mobxrouteurl": "/crmmode/customer/sectorConfig",
                  "target": "mainFrame"
                },
                {
                  "infoId": "144",
                  "routeurl": "/crmmode/docker/customer/sizeList",
                  "levelid": "144",
                  "name": "规模设置",
                  "pid": "129",
                  "id": "144",
                  "parentId": "129",
                  "url": "/CRM/Maint/ListCustomerSize.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/customer/sizeList",
                  "mobxrouteurl": "/crmmode/list/customer/sizeList",
                  "target": "mainFrame"
                },
                {
                  "infoId": "145",
                  "routeurl": "/crmmode/docker/customer/typeList",
                  "levelid": "145",
                  "name": "类型设置",
                  "pid": "129",
                  "id": "145",
                  "parentId": "129",
                  "url": "/CRM/Maint/ListCustomerType.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/customer/typeList",
                  "mobxrouteurl": "/crmmode/list/customer/typeList",
                  "target": "mainFrame"
                },
                {
                  "infoId": "146",
                  "routeurl": "/crmmode/docker/customer/descList",
                  "levelid": "146",
                  "name": "描述设置",
                  "pid": "129",
                  "id": "146",
                  "parentId": "129",
                  "url": "/CRM/Maint/ListCustomerDesc.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/customer/descList",
                  "mobxrouteurl": "/crmmode/list/customer/descList",
                  "target": "mainFrame"
                },
                {
                  "infoId": "147",
                  "routeurl": "/crmmode/docker/customer/statusList",
                  "levelid": "147",
                  "name": "状态设置",
                  "pid": "129",
                  "id": "147",
                  "parentId": "129",
                  "url": "/CRM/Maint/ListCustomerStatus.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/customer/statusList",
                  "mobxrouteurl": "/crmmode/list/customer/statusList",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "130",
              "routeurl": "",
              "levelid": "130",
              "name": "价值设置",
              "pid": "5",
              "id": "130",
              "parentId": "5",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "148",
                  "routeurl": "/crmmode/docker/customer/levelList",
                  "levelid": "148",
                  "name": "评估标准",
                  "pid": "130",
                  "id": "148",
                  "parentId": "130",
                  "url": "/CRM/Maint/EvaluationLevelList.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/customer/levelList",
                  "mobxrouteurl": "/crmmode/list/customer/levelList",
                  "target": "mainFrame"
                },
                {
                  "infoId": "149",
                  "routeurl": "/crmmode/docker/customer/evalList",
                  "levelid": "149",
                  "name": "评估项目",
                  "pid": "130",
                  "id": "149",
                  "parentId": "130",
                  "url": "/CRM/Maint/EvaluationList.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/customer/evalList",
                  "mobxrouteurl": "/crmmode/list/customer/evalList",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "131",
              "routeurl": "",
              "levelid": "131",
              "name": "商机设置",
              "pid": "5",
              "id": "131",
              "parentId": "5",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "150",
                  "routeurl": "/crmmode/docker/sellChance/statusList",
                  "levelid": "150",
                  "name": "商机状态",
                  "pid": "131",
                  "id": "150",
                  "parentId": "131",
                  "url": "/CRM/sellchance/ListCRMStatus.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/sellChance/statusList",
                  "mobxrouteurl": "/crmmode/list/sellChance/statusList",
                  "target": "mainFrame"
                },
                {
                  "infoId": "152",
                  "routeurl": "/crmmode/docker/sellChance/successFactorList",
                  "levelid": "152",
                  "name": "成功因素",
                  "pid": "131",
                  "id": "152",
                  "parentId": "131",
                  "url": "/CRM/sellchance/ListCRMSuccessfactor.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/sellChance/successFactorList",
                  "mobxrouteurl": "/crmmode/list/sellChance/successFactorList",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10170",
                  "routeurl": "/crmmode/docker/sellChance/typeList",
                  "levelid": "10170",
                  "name": "商机类型",
                  "pid": "131",
                  "id": "10170",
                  "parentId": "131",
                  "url": "/CRM/sellchance/ListCRMTypes.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/sellChance/typeList",
                  "mobxrouteurl": "/crmmode/list/sellChance/typeList",
                  "target": "mainFrame"
                },
                {
                  "infoId": "153",
                  "routeurl": "/crmmode/docker/sellChance/failFactorList",
                  "levelid": "153",
                  "name": "失败因素",
                  "pid": "131",
                  "id": "153",
                  "parentId": "131",
                  "url": "/CRM/sellchance/ListCRMFailfactor.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/sellChance/failFactorList",
                  "mobxrouteurl": "/crmmode/list/sellChance/failFactorList",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "132",
              "routeurl": "",
              "levelid": "132",
              "name": "合同信用",
              "pid": "5",
              "id": "132",
              "parentId": "5",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "154",
                  "routeurl": "/crmmode/docker/contract/typeList",
                  "levelid": "154",
                  "name": "合同性质",
                  "pid": "132",
                  "id": "154",
                  "parentId": "132",
                  "url": "/CRM/Maint/CRMContractTypeList.jsp?propertyOfApproveWorkFlow=contract",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/contract/typeList",
                  "mobxrouteurl": "/crmmode/list/contract/typeList",
                  "target": "mainFrame"
                },
                {
                  "infoId": "155",
                  "routeurl": "/crmmode/docker/contract/creditInfoForm",
                  "levelid": "155",
                  "name": "额度期间",
                  "pid": "132",
                  "id": "155",
                  "parentId": "132",
                  "url": "/CRM/Maint/CustomerCredit.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/customer/contractLimit",
                  "mobxrouteurl": "/crmmode/customer/contractLimit",
                  "target": "mainFrame"
                },
                {
                  "infoId": "156",
                  "routeurl": "/crmmode/docker/contract/creditGradeList",
                  "levelid": "156",
                  "name": "信用等级",
                  "pid": "132",
                  "id": "156",
                  "parentId": "132",
                  "url": "/CRM/Maint/ListCreditInfo.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/contract/creditGradeList",
                  "mobxrouteurl": "/crmmode/list/contract/creditGradeList",
                  "target": "mainFrame"
                },
                {
                  "infoId": "157",
                  "routeurl": "/crmmode/docker/contract/amountMoneyList",
                  "levelid": "157",
                  "name": "合同金额等级",
                  "pid": "132",
                  "id": "157",
                  "parentId": "132",
                  "url": "/CRM/Maint/ListTradeInfo.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/list/contract/amountMoneyList",
                  "mobxrouteurl": "/crmmode/list/contract/amountMoneyList",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "133",
              "routeurl": "/crmmode/product/productConfig",
              "levelid": "133",
              "name": "产品设置",
              "pid": "5",
              "id": "133",
              "parentId": "5",
              "url": "/lgc/search/LgcSearchProduct.jsp",
              "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/product/productConfig",
              "mobxrouteurl": "/crmmode/product/productConfig",
              "target": "mainFrame"
            },
            {
              "infoId": "10444",
              "routeurl": "/crmmode/docker/appConfig/form",
              "levelid": "10444",
              "name": "应用设置",
              "pid": "5",
              "id": "10444",
              "parentId": "5",
              "url": "/CRM/Maint/CustomerSettings.jsp",
              "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/customer/applySetting",
              "mobxrouteurl": "/crmmode/customer/applySetting",
              "target": "mainFrame"
            },
            {
              "infoId": "10863",
              "routeurl": "",
              "levelid": "10863",
              "name": "移动客户端设置",
              "pid": "5",
              "id": "10863",
              "parentId": "5",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "10865",
                  "routeurl": "/crmmode/customer/cardRegForm",
                  "levelid": "10865",
                  "name": "名片识别设置",
                  "pid": "10863",
                  "id": "10865",
                  "parentId": "10863",
                  "url": "/CRM/Maint/CRMCardRegSettings.jsp",
                  "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/customer/cardRegForm",
                  "mobxrouteurl": "/crmmode/customer/cardRegForm",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "100085",
              "routeurl": "",
              "levelid": "100085",
              "name": "数据关联授权",
              "pid": "5",
              "id": "100085",
              "parentId": "5",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/editTable?type=crm&functiontype=fieldAuthorize",
              "target": "mainFrame"
            },
            {
              "infoId": "100093",
              "routeurl": "",
              "levelid": "100093",
              "name": "客户编码",
              "pid": "5",
              "id": "100093",
              "parentId": "5",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/enCode?encodemode=customer",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "1381",
          "routeurl": "",
          "levelid": "1381",
          "name": "邮件",
          "pid": "10004",
          "id": "1381",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1382",
              "routeurl": "/spa/email/static4engine/engine.html#/email/sysSetting",
              "levelid": "1382",
              "name": "邮件系统设置",
              "pid": "1381",
              "id": "1382",
              "parentId": "1381",
              "url": "/email/maint/MailSystemFrame.jsp",
              "fullrouteurl": "/spa/email/static4engine/engine.html#/email/sysSetting",
              "mobxrouteurl": "/email/sysSetting",
              "target": "mainFrame"
            },
            {
              "infoId": "1383",
              "routeurl": "/spa/email/static4engine/engine.html#/email/tempSet",
              "levelid": "1383",
              "name": "邮件模板设置",
              "pid": "1381",
              "id": "1383",
              "parentId": "1381",
              "url": "/email/maint/MailTemplateFrame.jsp",
              "fullrouteurl": "/spa/email/static4engine/engine.html#/email/tempSet",
              "mobxrouteurl": "/email/tempSet",
              "target": "mainFrame"
            },
            {
              "infoId": "1385",
              "routeurl": "/spa/email/static4engine/engine.html#/email/emailManage",
              "levelid": "1385",
              "name": "企业邮箱管理",
              "pid": "1381",
              "id": "1385",
              "parentId": "1381",
              "url": "/email/maint/MailEnterpriseFrame.jsp",
              "fullrouteurl": "/spa/email/static4engine/engine.html#/email/emailManage",
              "mobxrouteurl": "/email/emailManage",
              "target": "mainFrame"
            },
            {
              "infoId": "1386",
              "routeurl": "/spa/email/static4engine/engine.html#/email/SpaceManage",
              "levelid": "1386",
              "name": "邮箱空间管理",
              "pid": "1381",
              "id": "1386",
              "parentId": "1381",
              "url": "/email/maint/MailSpaceFrame.jsp",
              "fullrouteurl": "/spa/email/static4engine/engine.html#/email/SpaceManage",
              "mobxrouteurl": "/email/SpaceManage",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "359",
          "routeurl": "",
          "levelid": "359",
          "name": "协作",
          "pid": "10004",
          "id": "359",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "693",
              "routeurl": "/spa/cowork/static4engine/engine.html#/coworkengine/applyset",
              "levelid": "693",
              "name": "应用设置",
              "pid": "359",
              "id": "693",
              "parentId": "359",
              "url": "/cowork/CoworkBaseSetting.jsp",
              "fullrouteurl": "/spa/cowork/static4engine/engine.html#/coworkengine/applyset",
              "mobxrouteurl": "/coworkengine/applyset",
              "target": "mainFrame"
            },
            {
              "infoId": "360",
              "routeurl": "/spa/cowork/static4engine/engine.html#/coworkengine/categoryset",
              "levelid": "360",
              "name": "类别设置",
              "pid": "359",
              "id": "360",
              "parentId": "359",
              "url": "/cowork/type/CoworkMainType.jsp",
              "fullrouteurl": "/spa/cowork/static4engine/engine.html#/coworkengine/categoryset",
              "mobxrouteurl": "/coworkengine/categoryset",
              "target": "mainFrame"
            },
            {
              "infoId": "361",
              "routeurl": "/spa/cowork/static4engine/engine.html#/coworkengine/plateset",
              "levelid": "361",
              "name": "版块设置",
              "pid": "359",
              "id": "361",
              "parentId": "359",
              "url": "/cowork/type/CoworkType.jsp",
              "fullrouteurl": "/spa/cowork/static4engine/engine.html#/coworkengine/plateset",
              "mobxrouteurl": "/coworkengine/plateset",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "1047",
          "routeurl": "",
          "levelid": "1047",
          "name": "微博",
          "pid": "10004",
          "id": "1047",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1048",
              "routeurl": "/spa/blog/static4engine/engine.html#/blogengine/applySet",
              "levelid": "1048",
              "name": "应用设置",
              "pid": "1047",
              "id": "1048",
              "parentId": "1047",
              "url": "/spa/blog/static4engine/engine.html#/blogengine/applySet",
              "fullrouteurl": "",
              "mobxrouteurl": "/blogengine/applySet",
              "target": "mainFrame"
            },
            {
              "infoId": "1276",
              "routeurl": "/spa/blog/static4engine/engine.html#/blogengine/export",
              "levelid": "1276",
              "name": "内容导出",
              "pid": "1047",
              "id": "1276",
              "parentId": "1047",
              "url": "/spa/blog/static4engine/engine.html#/blogengine/export",
              "fullrouteurl": "",
              "mobxrouteurl": "/blogengine/export",
              "target": "mainFrame"
            },
            {
              "infoId": "1148",
              "routeurl": "/spa/blog/static4engine/engine.html#/blogengine/templateSet",
              "levelid": "1148",
              "name": "模板设置",
              "pid": "1047",
              "id": "1148",
              "parentId": "1047",
              "url": "/spa/blog/static4engine/engine.html#/blogengine/templateSet",
              "fullrouteurl": "",
              "mobxrouteurl": "/blogengine/templateSet",
              "target": "mainFrame"
            },
            {
              "infoId": "1159",
              "routeurl": "/spa/blog/static4engine/engine.html#/blogengine/specifyShare",
              "levelid": "1159",
              "name": "指定共享设置",
              "pid": "1047",
              "id": "1159",
              "parentId": "1047",
              "url": "/spa/blog/static4engine/engine.html#/blogengine/specifyShare",
              "fullrouteurl": "",
              "mobxrouteurl": "/blogengine/specifyShare",
              "target": "mainFrame"
            },
            {
              "infoId": "100128",
              "routeurl": "",
              "levelid": "100128",
              "name": "微博权限监控",
              "pid": "1047",
              "id": "100128",
              "parentId": "1047",
              "url": "",
              "fullrouteurl": "/spa/blog/static4engine/engine.html#/blogengine/watchshare",
              "mobxrouteurl": "/blogengine/watchshare",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "1366",
          "routeurl": "",
          "levelid": "1366",
          "name": "公文",
          "pid": "10004",
          "id": "1366",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1374",
              "routeurl": "",
              "levelid": "1374",
              "name": "公文规范",
              "pid": "1366",
              "id": "1374",
              "parentId": "1366",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "10082",
                  "routeurl": "",
                  "levelid": "10082",
                  "name": "发文字号",
                  "pid": "1374",
                  "id": "10082",
                  "parentId": "1374",
                  "url": "/docs/sendDoc/DocSendDocTab.jsp?_fromURL=1",
                  "fullrouteurl": "/spa/odoc/static4engine/engine.html#/odocengine/DocNumber?menuIds=1374,10082",
                  "mobxrouteurl": "/odocengine/DocNumber?menuIds=1374,10082",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10083",
                  "routeurl": "",
                  "levelid": "10083",
                  "name": "秘密等级",
                  "pid": "1374",
                  "id": "10083",
                  "parentId": "1374",
                  "url": "/odoc/docs/sendDoc/DocSendDocTab.jsp?_fromURL=2",
                  "fullrouteurl": "/spa/odoc/static4engine/engine.html#/odocengine/SecretLevel?menuIds=1374,10083",
                  "mobxrouteurl": "/odocengine/SecretLevel?menuIds=1374,10083",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10084",
                  "routeurl": "",
                  "levelid": "10084",
                  "name": "公文种类",
                  "pid": "1374",
                  "id": "10084",
                  "parentId": "1374",
                  "url": "/odoc/docs/sendDoc/DocSendDocTab.jsp?_fromURL=3",
                  "fullrouteurl": "/spa/odoc/static4engine/engine.html#/odocengine/OdocType?menuIds=1374,10084",
                  "mobxrouteurl": "/odocengine/OdocType?menuIds=1374,10084",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10085",
                  "routeurl": "",
                  "levelid": "10085",
                  "name": "紧急程度",
                  "pid": "1374",
                  "id": "10085",
                  "parentId": "1374",
                  "url": "/odoc/docs/sendDoc/DocSendDocTab.jsp?_fromURL=4",
                  "fullrouteurl": "/spa/odoc/static4engine/engine.html#/odocengine/InstancyLevel?menuIds=1374,10085",
                  "mobxrouteurl": "/odocengine/InstancyLevel?menuIds=1374,10085",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1376",
                  "routeurl": "",
                  "levelid": "1376",
                  "name": "主题分类",
                  "pid": "1374",
                  "id": "1376",
                  "parentId": "1374",
                  "url": "/odoc/docs/sendDoc/WorkflowKeyword_frm.jsp",
                  "fullrouteurl": "/spa/odoc/static4engine/engine.html#/odocengine/TopicType?menuIds=1374,1376",
                  "mobxrouteurl": "/odocengine/TopicType?menuIds=1374,1376",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1377",
                  "routeurl": "",
                  "levelid": "1377",
                  "name": "机构代字",
                  "pid": "1374",
                  "id": "1377",
                  "parentId": "1374",
                  "url": "/odoc/workflow/workflow/institutionCode.jsp",
                  "fullrouteurl": "/spa/odoc/static4engine/engine.html#/odocengine/OrgAbbr?menuIds=1374,1377",
                  "mobxrouteurl": "/odocengine/OrgAbbr?menuIds=1374,1377",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1378",
                  "routeurl": "",
                  "levelid": "1378",
                  "name": "收（发）文单位",
                  "pid": "1374",
                  "id": "1378",
                  "parentId": "1374",
                  "url": "/odoc/docs/sendDoc/DocReceiveUnitFrame.jsp",
                  "fullrouteurl": "/spa/odoc/static4engine/engine.html#/odocengine/receiveUtil?menuIds=1374,1378",
                  "mobxrouteurl": "/odocengine/receiveUtil?menuIds=1374,1378",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1398",
                  "routeurl": "",
                  "levelid": "1398",
                  "name": "过程定义",
                  "pid": "1374",
                  "id": "1398",
                  "parentId": "1374",
                  "url": "/odoc/docs/tabs/DocCommonTab.jsp?_fromURL=77",
                  "fullrouteurl": "/spa/odoc/static4engine/engine.html#/odocengine/processDefine?menuIds=1374,1398",
                  "mobxrouteurl": "/odocengine/processDefine?menuIds=1374,1398",
                  "target": "mainFrame"
                },
                {
                  "infoId": "88288",
                  "routeurl": "",
                  "levelid": "88288",
                  "name": "收（发）文单位公共组",
                  "pid": "1374",
                  "id": "88288",
                  "parentId": "1374",
                  "url": "",
                  "fullrouteurl": "/spa/odoc/static4engine/engine.html#/odocengine/publicGroup?menuIds=1374,88288",
                  "mobxrouteurl": "/odocengine/publicGroup?menuIds=1374,88288",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "1388",
              "routeurl": "",
              "levelid": "1388",
              "name": "公文交换",
              "pid": "1366",
              "id": "1388",
              "parentId": "1366",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "1389",
                  "routeurl": "",
                  "levelid": "1389",
                  "name": "系统设置",
                  "pid": "1388",
                  "id": "1389",
                  "parentId": "1388",
                  "url": "/odoc/docs/tabs/DocCommonTab.jsp?_fromURL=58",
                  "fullrouteurl": "/spa/odoc/static4engine/engine.html/odocengine/exchangeSetting?menuIds=1388,1389",
                  "mobxrouteurl": "/odocengine/exchangeSetting?menuIds=1388,1389",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1390",
                  "routeurl": "",
                  "levelid": "1390",
                  "name": "流程设置",
                  "pid": "1388",
                  "id": "1390",
                  "parentId": "1388",
                  "url": "/odoc/docs/tabs/DocCommonTab.jsp?_fromURL=59",
                  "fullrouteurl": "/spa/odoc/static4engine/engine.html/odocengine/exchangeWorkflow?menuIds=1388,1390",
                  "mobxrouteurl": "/odocengine/exchangeWorkflow?menuIds=1388,1390",
                  "target": "mainFrame"
                }
              ]
            }
          ]
        },
        {
          "infoId": "10086",
          "routeurl": "",
          "levelid": "10086",
          "name": "调查",
          "pid": "10004",
          "id": "10086",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10088",
              "routeurl": "/spa/smallApp/static4engine/engine.html#/voting/web",
              "levelid": "10088",
              "name": "网上调查设置",
              "pid": "10086",
              "id": "10088",
              "parentId": "10086",
              "url": "/spa/smallApp/static4engine/engine.html#/voting/web",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/voting/web",
              "mobxrouteurl": "/voting/web",
              "target": "mainFrame"
            },
            {
              "infoId": "10087",
              "routeurl": "/spa/smallApp/static4engine/engine.html#/voting/type",
              "levelid": "10087",
              "name": "调查类型设置",
              "pid": "10086",
              "id": "10087",
              "parentId": "10086",
              "url": "/spa/smallApp/static4engine/engine.html#/voting/type",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/voting/type",
              "mobxrouteurl": "/voting/type",
              "target": "mainFrame"
            },
            {
              "infoId": "10089",
              "routeurl": "/spa/smallApp/static4engine/engine.html#/voting/apply",
              "levelid": "10089",
              "name": "调查应用设置",
              "pid": "10086",
              "id": "10089",
              "parentId": "10086",
              "url": "/spa/smallApp/static4engine/engine.html#/voting/apply",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/voting/apply",
              "mobxrouteurl": "/voting/apply",
              "target": "mainFrame"
            },
            {
              "infoId": "10091",
              "routeurl": "/spa/smallApp/static4engine/engine.html#/voting/module",
              "levelid": "10091",
              "name": "调查模板设置",
              "pid": "10086",
              "id": "10091",
              "parentId": "10086",
              "url": "/spa/smallApp/static4engine/engine.html#/voting/module",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/voting/module",
              "mobxrouteurl": "/voting/module",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "8",
          "routeurl": "",
          "levelid": "8",
          "name": "资产",
          "pid": "10004",
          "id": "8",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "170",
              "routeurl": "",
              "levelid": "170",
              "name": "资产组设置",
              "pid": "8",
              "id": "170",
              "parentId": "8",
              "url": "/cpt/maintenance/CptAssortment.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptAssortMentFrame",
              "mobxrouteurl": "/cptmode/CptAssortMentFrame",
              "target": "mainFrame"
            },
            {
              "infoId": "1324",
              "routeurl": "",
              "levelid": "1324",
              "name": "资产类型设置",
              "pid": "8",
              "id": "1324",
              "parentId": "8",
              "url": "/cpt/maintenance/CptCapitalType.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptCapitalTypeList",
              "mobxrouteurl": "/cptmode/CptCapitalTypeList",
              "target": "mainFrame"
            },
            {
              "infoId": "1325",
              "routeurl": "",
              "levelid": "1325",
              "name": "资产资料编码设置",
              "pid": "8",
              "id": "1325",
              "parentId": "8",
              "url": "/cpt/coding/CapitalCodingData1.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptCodingData1",
              "mobxrouteurl": "/cptmode/CptCodingData1",
              "target": "mainFrame"
            },
            {
              "infoId": "594",
              "routeurl": "",
              "levelid": "594",
              "name": "资产编码设置",
              "pid": "8",
              "id": "594",
              "parentId": "8",
              "url": "/cpt/coding/CapitalCoding.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptCodingData2",
              "mobxrouteurl": "/cptmode/CptCodingData2",
              "target": "mainFrame"
            },
            {
              "infoId": "728",
              "routeurl": "",
              "levelid": "728",
              "name": "资产查询定义",
              "pid": "8",
              "id": "728",
              "parentId": "8",
              "url": "/cpt/capital/CptSearchDefinition.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptSearchDefinition/2",
              "mobxrouteurl": "/cptmode/CptSearchDefinition/2",
              "target": "mainFrame"
            },
            {
              "infoId": "1451",
              "routeurl": "",
              "levelid": "1451",
              "name": "资产浏览框查询定义",
              "pid": "8",
              "id": "1451",
              "parentId": "8",
              "url": "/cpt/conf/cptbrowdef.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptSearchDefinition/1",
              "mobxrouteurl": "/cptmode/CptSearchDefinition/1",
              "target": "mainFrame"
            },
            {
              "infoId": "172",
              "routeurl": "",
              "levelid": "172",
              "name": "资产资料维护",
              "pid": "8",
              "id": "172",
              "parentId": "8",
              "url": "/cpt/capital/CptCapMain_frm.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptCapitalMaintenance",
              "mobxrouteurl": "/cptmode/CptCapitalMaintenance",
              "target": "mainFrame"
            },
            {
              "infoId": "511",
              "routeurl": "",
              "levelid": "511",
              "name": "资产资料导入",
              "pid": "8",
              "id": "511",
              "parentId": "8",
              "url": "/cpt/capital/CapitalExcelToDB.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptCapitalExcelToDB",
              "mobxrouteurl": "/cptmode/CptCapitalExcelToDB",
              "target": "mainFrame"
            },
            {
              "infoId": "10191",
              "routeurl": "",
              "levelid": "10191",
              "name": "资产数量预警设置",
              "pid": "8",
              "id": "10191",
              "parentId": "8",
              "url": "/cpt/conf/cptalertnumconf.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptAlertNumList",
              "mobxrouteurl": "/cptmode/CptAlertNumList",
              "target": "mainFrame"
            },
            {
              "infoId": "10192",
              "routeurl": "",
              "levelid": "10192",
              "name": "资产变更维护",
              "pid": "8",
              "id": "10192",
              "parentId": "8",
              "url": "/cpt/maintenance/cptmodify.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptModifyList",
              "mobxrouteurl": "/cptmode/CptModifyList",
              "target": "mainFrame"
            },
            {
              "infoId": "1387",
              "routeurl": "",
              "levelid": "1387",
              "name": "资产导入",
              "pid": "8",
              "id": "1387",
              "parentId": "8",
              "url": "/cpt/capital/CapitalExcelToDB1.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptCapitalExcelToDB1",
              "mobxrouteurl": "/cptmode/CptCapitalExcelToDB1",
              "target": "mainFrame"
            },
            {
              "infoId": "10234",
              "routeurl": "",
              "levelid": "10234",
              "name": "应用设置",
              "pid": "8",
              "id": "10234",
              "parentId": "8",
              "url": "/cpt/conf/cptappsetting.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptSetting",
              "mobxrouteurl": "/cptmode/CptSetting",
              "target": "mainFrame"
            },
            {
              "infoId": "100103",
              "routeurl": "",
              "levelid": "100103",
              "name": "数据关联授权",
              "pid": "8",
              "id": "100103",
              "parentId": "8",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/editTable?type=cpt&functiontype=fieldAuthorize",
              "target": "mainFrame"
            },
            {
              "infoId": "10236",
              "routeurl": "",
              "levelid": "10236",
              "name": "资产标签打印",
              "pid": "8",
              "id": "10236",
              "parentId": "8",
              "url": "/cpt/print/cptlist.jsp",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptPrintList",
              "mobxrouteurl": "/cptmode/CptPrintList",
              "target": "mainFrame"
            },
            {
              "infoId": "100027",
              "routeurl": "",
              "levelid": "100027",
              "name": "资产监控",
              "pid": "8",
              "id": "100027",
              "parentId": "8",
              "url": "",
              "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CapitalMonitor",
              "mobxrouteurl": "cptmode/CapitalMonitor",
              "target": "mainFrame"
            },
            {
              "infoId": "10145",
              "routeurl": "",
              "levelid": "10145",
              "name": "自定义设置",
              "pid": "8",
              "id": "10145",
              "parentId": "8",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "10146",
                  "routeurl": "",
                  "levelid": "10146",
                  "name": "资产卡片显示栏目",
                  "pid": "10145",
                  "id": "10146",
                  "parentId": "10145",
                  "url": "/cpt/ffield/cptcardtabset.jsp",
                  "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptCardTabSet",
                  "mobxrouteurl": "/cptmode/CptCardTabSet",
                  "target": "mainFrame"
                },
                {
                  "infoId": "176",
                  "routeurl": "",
                  "levelid": "176",
                  "name": "资产卡片字段定义",
                  "pid": "10145",
                  "id": "176",
                  "parentId": "10145",
                  "url": "/base/ffield/ListCptFreeField.jsp",
                  "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptFieldInfoTab",
                  "mobxrouteurl": "/cptmode/CptFieldInfoTab",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10153",
                  "routeurl": "",
                  "levelid": "10153",
                  "name": "资产管理流程配置",
                  "pid": "10145",
                  "id": "10153",
                  "parentId": "10145",
                  "url": "/cpt/conf/cptwfconf.jsp",
                  "fullrouteurl": "/spa/cpt/engine.html#/cptmode/CptWorkFlowConf",
                  "mobxrouteurl": "/cptmode/CptWorkFlowConf",
                  "target": "mainFrame"
                }
              ]
            }
          ]
        },
        {
          "infoId": "6",
          "routeurl": "",
          "levelid": "6",
          "name": "项目",
          "pid": "10004",
          "id": "6",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "377",
              "routeurl": "",
              "levelid": "377",
              "name": "基础设置",
              "pid": "6",
              "id": "377",
              "parentId": "6",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "161",
                  "routeurl": "",
                  "levelid": "161",
                  "name": "项目类型",
                  "pid": "377",
                  "id": "161",
                  "parentId": "377",
                  "url": "/proj/Maint/ListProjectType.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/basemanager/bmtype/prjtype",
                  "mobxrouteurl": "/prjengine/basemanager/bmtype/prjtype",
                  "target": "mainFrame"
                },
                {
                  "infoId": "162",
                  "routeurl": "",
                  "levelid": "162",
                  "name": "工作类型",
                  "pid": "377",
                  "id": "162",
                  "parentId": "377",
                  "url": "/proj/Maint/ListWorkType.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/basemanager/bmtype/worktype",
                  "mobxrouteurl": "/prjengine/basemanager/bmtype/worktype",
                  "target": "mainFrame"
                },
                {
                  "infoId": "378",
                  "routeurl": "",
                  "levelid": "378",
                  "name": "项目编码",
                  "pid": "377",
                  "id": "378",
                  "parentId": "377",
                  "url": "/proj/coding/PrjCoding.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/basemanager/prjcode",
                  "mobxrouteurl": "/prjengine/basemanager/prjcode",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10161",
                  "routeurl": "",
                  "levelid": "10161",
                  "name": "项目状态",
                  "pid": "377",
                  "id": "10161",
                  "parentId": "377",
                  "url": "/proj/Maint/ListProjectStatus.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/basemanager/bmtype/prjstatus",
                  "mobxrouteurl": "/prjengine/basemanager/bmtype/prjstatus",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "379",
              "routeurl": "",
              "levelid": "379",
              "name": "模板管理",
              "pid": "6",
              "id": "379",
              "parentId": "6",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "381",
                  "routeurl": "",
                  "levelid": "381",
                  "name": "模板维护",
                  "pid": "379",
                  "id": "381",
                  "parentId": "379",
                  "url": "/proj/Templet/ProjTempletList.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/templet/list",
                  "mobxrouteurl": "/prjengine/templet/list",
                  "target": "mainFrame"
                },
                {
                  "infoId": "466",
                  "routeurl": "",
                  "levelid": "466",
                  "name": "模板审批设置",
                  "pid": "379",
                  "id": "466",
                  "parentId": "379",
                  "url": "/proj/Templet/TempletSetting.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/templet/templetApproveStroe/3",
                  "mobxrouteurl": "/prjengine/templet/templetApproveStroe/3",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "1353",
              "routeurl": "",
              "levelid": "1353",
              "name": "自定义设置",
              "pid": "6",
              "id": "1353",
              "parentId": "6",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "100092",
                  "routeurl": "",
                  "levelid": "100092",
                  "name": "任务卡片显示栏目",
                  "pid": "1353",
                  "id": "100092",
                  "parentId": "1353",
                  "url": "/prjengine/custom/prjcardtabset/task",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/custom/prjcardtabset/task",
                  "mobxrouteurl": "/prjengine/custom/prjcardtabset/task",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10147",
                  "routeurl": "",
                  "levelid": "10147",
                  "name": "项目卡片显示栏目",
                  "pid": "1353",
                  "id": "10147",
                  "parentId": "1353",
                  "url": "/proj/ffield/prjcardtabset.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/custom/prjcardtabset/prj",
                  "mobxrouteurl": "/prjengine/custom/prjcardtabset/prj",
                  "target": "mainFrame"
                },
                {
                  "infoId": "163",
                  "routeurl": "",
                  "levelid": "163",
                  "name": "通用项目字段定义",
                  "pid": "1353",
                  "id": "163",
                  "parentId": "1353",
                  "url": "/base/ffield/ListProjectFreeField.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/custom/prjfieldinfotab/prj",
                  "mobxrouteurl": "/prjengine/custom/prjfieldinfotab/prj",
                  "target": "mainFrame"
                },
                {
                  "infoId": "1354",
                  "routeurl": "",
                  "levelid": "1354",
                  "name": "项目类型字段定义",
                  "pid": "1353",
                  "id": "1354",
                  "parentId": "1353",
                  "url": "/proj/ffield/ProjTypeFreefieldTab.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/custom/prjfieldinfotab/prjtype",
                  "mobxrouteurl": "/prjengine/custom/prjfieldinfotab/prjtype",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10159",
                  "routeurl": "",
                  "levelid": "10159",
                  "name": "任务卡片字段定义",
                  "pid": "1353",
                  "id": "10159",
                  "parentId": "1353",
                  "url": "/proj/ffield/prjtskfreefieldtab.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/custom/prjfieldinfotab/prjtsk",
                  "mobxrouteurl": "/prjengine/custom/prjfieldinfotab/prjtsk",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "1355",
              "routeurl": "",
              "levelid": "1355",
              "name": "应用设置",
              "pid": "6",
              "id": "1355",
              "parentId": "6",
              "url": "/proj/Maint/PrjAppSetting.jsp",
              "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/appset",
              "mobxrouteurl": "/prjengine/appset",
              "target": "mainFrame"
            },
            {
              "infoId": "100097",
              "routeurl": "",
              "levelid": "100097",
              "name": "高级设置",
              "pid": "6",
              "id": "100097",
              "parentId": "6",
              "url": "",
              "fullrouteurl": "/spa/cube/engine.html#/cubeengine/app/ecmeSet?query=prj",
              "mobxrouteurl": "/cubeengine/app/ecmeSet?query=prj",
              "target": "mainFrame"
            },
            {
              "infoId": "100017",
              "routeurl": "",
              "levelid": "100017",
              "name": "提醒",
              "pid": "6",
              "id": "100017",
              "parentId": "6",
              "url": "",
              "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/remind",
              "mobxrouteurl": "prjengine/remind",
              "target": "mainFrame"
            },
            {
              "infoId": "10162",
              "routeurl": "",
              "levelid": "10162",
              "name": "流程设置",
              "pid": "6",
              "id": "10162",
              "parentId": "6",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "10163",
                  "routeurl": "",
                  "levelid": "10163",
                  "name": "项目创建",
                  "pid": "10162",
                  "id": "10163",
                  "parentId": "10162",
                  "url": "/proj/conf/prjcreatewfconf.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/templet/templetApproveStroe/1",
                  "mobxrouteurl": "/prjengine/templet/templetApproveStroe/1",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10164",
                  "routeurl": "",
                  "levelid": "10164",
                  "name": "项目审批",
                  "pid": "10162",
                  "id": "10164",
                  "parentId": "10162",
                  "url": "/proj/conf/prjapprovewfconf.jsp",
                  "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/templet/templetApproveStroe/2",
                  "mobxrouteurl": "/prjengine/templet/templetApproveStroe/2",
                  "target": "mainFrame"
                }
              ]
            }
          ]
        },
        {
          "infoId": "364",
          "routeurl": "",
          "levelid": "364",
          "name": "车辆",
          "pid": "10004",
          "id": "364",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10323",
              "routeurl": "",
              "levelid": "10323",
              "name": "应用设置",
              "pid": "364",
              "id": "10323",
              "parentId": "364",
              "url": "/cpt/car/CarSet.jsp",
              "fullrouteurl": "/spa/car/index.html#/main/car/carApplySetting",
              "mobxrouteurl": "/car/carApplySetting",
              "target": "mainFrame"
            },
            {
              "infoId": "366",
              "routeurl": "",
              "levelid": "366",
              "name": "车辆类型",
              "pid": "364",
              "id": "366",
              "parentId": "364",
              "url": "/cpt/car/CarTypeList.jsp",
              "fullrouteurl": "/spa/car/index.html#/main/car/carType",
              "mobxrouteurl": "/car/carType",
              "target": "mainFrame"
            },
            {
              "infoId": "10299",
              "routeurl": "",
              "levelid": "10299",
              "name": "用车流程设置",
              "pid": "364",
              "id": "10299",
              "parentId": "364",
              "url": "/cpt/car/UseCarWorkflowSet.jsp",
              "fullrouteurl": "/spa/car/index.html#/main/car/carUseCarWorkflowSet",
              "mobxrouteurl": "/car/carUseCarWorkflowSet",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "7",
          "routeurl": "",
          "levelid": "7",
          "name": "预算",
          "pid": "10004",
          "id": "7",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "100047",
              "routeurl": "",
              "levelid": "100047",
              "name": "预算基础设置",
              "pid": "7",
              "id": "100047",
              "parentId": "7",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "100055",
                  "routeurl": "",
                  "levelid": "100055",
                  "name": "账套设置",
                  "pid": "100047",
                  "id": "100055",
                  "parentId": "100047",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/accountSet",
                  "mobxrouteurl": "/mulitBudget/basicManagement/accountSet",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100056",
                  "routeurl": "",
                  "levelid": "100056",
                  "name": "预算承担主体设置",
                  "pid": "100047",
                  "id": "100056",
                  "parentId": "100047",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetBearer",
                  "mobxrouteurl": "/mulitBudget/basicManagement/budgetBearer",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100057",
                  "routeurl": "",
                  "levelid": "100057",
                  "name": "预算科目设置",
                  "pid": "100047",
                  "id": "100057",
                  "parentId": "100047",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetExpenseSubject",
                  "mobxrouteurl": "/mulitBudget/basicManagement/budgetExpenseSubject",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100058",
                  "routeurl": "",
                  "levelid": "100058",
                  "name": "预算期间设置",
                  "pid": "100047",
                  "id": "100058",
                  "parentId": "100047",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetCycleSetup",
                  "mobxrouteurl": "/mulitBudget/basicManagement/budgetCycleSetup",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "100048",
              "routeurl": "",
              "levelid": "100048",
              "name": "预算维度设置",
              "pid": "7",
              "id": "100048",
              "parentId": "7",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "100059",
                  "routeurl": "",
                  "levelid": "100059",
                  "name": "维度类别",
                  "pid": "100048",
                  "id": "100059",
                  "parentId": "100048",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/dimensionType",
                  "mobxrouteurl": "/mulitBudget/basicManagement/dimensionType",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100060",
                  "routeurl": "",
                  "levelid": "100060",
                  "name": "预算维度",
                  "pid": "100048",
                  "id": "100060",
                  "parentId": "100048",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetDimension",
                  "mobxrouteurl": "/mulitBudget/basicManagement/budgetDimension",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "100049",
              "routeurl": "",
              "levelid": "100049",
              "name": "预算编制设置",
              "pid": "7",
              "id": "100049",
              "parentId": "7",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "100061",
                  "routeurl": "",
                  "levelid": "100061",
                  "name": "预算审批流程",
                  "pid": "100049",
                  "id": "100061",
                  "parentId": "100049",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/approvalWorkFlow",
                  "mobxrouteurl": "/mulitBudget/basicManagement/approvalWorkFlow",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100062",
                  "routeurl": "",
                  "levelid": "100062",
                  "name": "预算提醒流程",
                  "pid": "100049",
                  "id": "100062",
                  "parentId": "100049",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/remindWorkFlow",
                  "mobxrouteurl": "/mulitBudget/basicManagement/remindWorkFlow",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100120",
                  "routeurl": "",
                  "levelid": "100120",
                  "name": "数据集设置",
                  "pid": "100049",
                  "id": "100120",
                  "parentId": "100049",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/dataSetting",
                  "mobxrouteurl": "/mulitBudget/basicManagement/dataSetting",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100063",
                  "routeurl": "",
                  "levelid": "100063",
                  "name": "预算模板设置",
                  "pid": "100049",
                  "id": "100063",
                  "parentId": "100049",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetApproval",
                  "mobxrouteurl": "/mulitBudget/basicManagement/budgetApproval",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100064",
                  "routeurl": "",
                  "levelid": "100064",
                  "name": "预算数据填报",
                  "pid": "100049",
                  "id": "100064",
                  "parentId": "100049",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/excelDataFillIn",
                  "mobxrouteurl": "/mulitBudget/basicManagement/excelDataFillIn",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100110",
                  "routeurl": "",
                  "levelid": "100110",
                  "name": "预算结转",
                  "pid": "100049",
                  "id": "100110",
                  "parentId": "100049",
                  "url": "",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/establishManagement/rolloverBudget",
                  "mobxrouteurl": "/budget/establishManagement/rolloverBudget",
                  "target": "mainFrame"
                },
                {
                  "infoId": "166",
                  "routeurl": "",
                  "levelid": "166",
                  "name": "财务做账",
                  "pid": "100049",
                  "id": "166",
                  "parentId": "100049",
                  "url": "",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/financialAccount",
                  "mobxrouteurl": "/budget/financialAccount",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100111",
                  "routeurl": "",
                  "levelid": "100111",
                  "name": "已发生费用导入",
                  "pid": "100049",
                  "id": "100111",
                  "parentId": "100049",
                  "url": "",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/establishManagement/expenseImport",
                  "mobxrouteurl": "/budget/establishManagement/expenseImport",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100078",
                  "routeurl": "",
                  "levelid": "100078",
                  "name": "已发生借款导入",
                  "pid": "100049",
                  "id": "100078",
                  "parentId": "100049",
                  "url": "",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/establishManagement/borrowImport",
                  "mobxrouteurl": "/budget/establishManagement/borrowImport",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "100104",
              "routeurl": "",
              "levelid": "100104",
              "name": "财务流程设置",
              "pid": "7",
              "id": "100104",
              "parentId": "7",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "100118",
                  "routeurl": "",
                  "levelid": "100118",
                  "name": "费控设置",
                  "pid": "100104",
                  "id": "100118",
                  "parentId": "100104",
                  "url": "",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetProgramMulit",
                  "mobxrouteurl": "/mulitBudget/basicManagement/budgetProgramMulit",
                  "target": "mainFrame"
                },
                {
                  "infoId": "100106",
                  "routeurl": "",
                  "levelid": "100106",
                  "name": "预算流程",
                  "pid": "100104",
                  "id": "100106",
                  "parentId": "100104",
                  "url": "",
                  "fullrouteurl": "",
                  "mobxrouteurl": "",
                  "target": "mainFrame",
                  "child": [
                    {
                      "infoId": "100070",
                      "routeurl": "",
                      "levelid": "100070",
                      "name": "报销流程",
                      "pid": "100106",
                      "id": "100070",
                      "parentId": "100106",
                      "url": "",
                      "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/reimburseWorkFlow",
                      "mobxrouteurl": "/mulitBudget/basicManagement/reimburseWorkFlow",
                      "target": "mainFrame"
                    },
                    {
                      "infoId": "100108",
                      "routeurl": "",
                      "levelid": "100108",
                      "name": "预算变更流程",
                      "pid": "100106",
                      "id": "100108",
                      "parentId": "100106",
                      "url": "",
                      "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/programManagement/changeWorkFlow",
                      "mobxrouteurl": "/mulitBudget/basicManagement/changeWorkFlow",
                      "target": "mainFrame"
                    },
                    {
                      "infoId": "100109",
                      "routeurl": "",
                      "levelid": "100109",
                      "name": "费用分摊流程",
                      "pid": "100106",
                      "id": "100109",
                      "parentId": "100106",
                      "url": "",
                      "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/programManagement/shareWorkFlow",
                      "mobxrouteurl": "/budget/programManagement/shareWorkFlow",
                      "target": "mainFrame"
                    }
                  ]
                },
                {
                  "infoId": "100107",
                  "routeurl": "",
                  "levelid": "100107",
                  "name": "借还款流程",
                  "pid": "100104",
                  "id": "100107",
                  "parentId": "100104",
                  "url": "",
                  "fullrouteurl": "",
                  "mobxrouteurl": "",
                  "target": "mainFrame",
                  "child": [
                    {
                      "infoId": "100076",
                      "routeurl": "",
                      "levelid": "100076",
                      "name": "借款流程",
                      "pid": "100107",
                      "id": "100076",
                      "parentId": "100107",
                      "url": "",
                      "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/programManagement/borrowWorkFlow",
                      "mobxrouteurl": "/budget/programManagement/borrowWorkFlow",
                      "target": "mainFrame"
                    },
                    {
                      "infoId": "100077",
                      "routeurl": "",
                      "levelid": "100077",
                      "name": "还款流程",
                      "pid": "100107",
                      "id": "100077",
                      "parentId": "100107",
                      "url": "",
                      "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/programManagement/repaymentWorkFlow",
                      "mobxrouteurl": "/budget/programManagement/repaymentWorkFlow",
                      "target": "mainFrame"
                    }
                  ]
                },
                {
                  "infoId": "100072",
                  "routeurl": "",
                  "levelid": "100072",
                  "name": "预付款流程",
                  "pid": "100104",
                  "id": "100072",
                  "parentId": "100104",
                  "url": "",
                  "fullrouteurl": "",
                  "mobxrouteurl": "/budget/programManagement/prepayWorkFlow",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "10913",
              "routeurl": "",
              "levelid": "10913",
              "name": "发票管理",
              "pid": "7",
              "id": "10913",
              "parentId": "7",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "10916",
                  "routeurl": "",
                  "levelid": "10916",
                  "name": "发票接口配置",
                  "pid": "10913",
                  "id": "10916",
                  "parentId": "10913",
                  "url": "/fna/invoice/invoiceWf/FnaInvoiceInterfaceSet.jsp",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/invoiceInterfaceSet",
                  "mobxrouteurl": "/budget/invoiceManagement/invoiceInterfaceSet",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10915",
                  "routeurl": "",
                  "levelid": "10915",
                  "name": "票据流程设置",
                  "pid": "10913",
                  "id": "10915",
                  "parentId": "10913",
                  "url": "/fna/invoice/invoiceWf/FnaInvoiceWfSet.jsp",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/billProcess",
                  "mobxrouteurl": "/budget/invoiceManagement/billProcess",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10914",
                  "routeurl": "",
                  "levelid": "10914",
                  "name": "发票台账",
                  "pid": "10913",
                  "id": "10914",
                  "parentId": "10913",
                  "url": "/fna/invoice/invoiceLedger/FnaInvoiceLedger.jsp",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/invoiceLedger",
                  "mobxrouteurl": "/budget/invoiceManagement/invoiceLedger",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10969",
                  "routeurl": "",
                  "levelid": "10969",
                  "name": "票据识别失败记录查询",
                  "pid": "10913",
                  "id": "10969",
                  "parentId": "10913",
                  "url": "/fna/invoice/invoiceWf/FnaInvoiceCheckFail.jsp",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/ticketDiscern",
                  "mobxrouteurl": "/budget/invoiceManagement/ticketDiscern",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10970",
                  "routeurl": "",
                  "levelid": "10970",
                  "name": "票据项对应科目设置",
                  "pid": "10913",
                  "id": "10970",
                  "parentId": "10913",
                  "url": "/fna/invoice/invoiceWf/FnaInvoiceSubjectSet.jsp",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/billSubject",
                  "mobxrouteurl": "/budget/invoiceManagement/billSubject",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "10218",
              "routeurl": "",
              "levelid": "10218",
              "name": "费用标准",
              "pid": "7",
              "id": "10218",
              "parentId": "7",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "10219",
                  "routeurl": "",
                  "levelid": "10219",
                  "name": "费用标准维度",
                  "pid": "10218",
                  "id": "10219",
                  "parentId": "10218",
                  "url": "/fna/costStandard/costStandard.jsp",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/expenseStandard/standardCostDimension",
                  "mobxrouteurl": "/budget/expenseStandard/standardCostDimension",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10222",
                  "routeurl": "",
                  "levelid": "10222",
                  "name": "费用标准设置",
                  "pid": "10218",
                  "id": "10222",
                  "parentId": "10218",
                  "url": "/fna/costStandard/costStandardDefi.jsp",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/expenseStandard/costStandardSetting",
                  "mobxrouteurl": "/budget/expenseStandard/costStandardSetting",
                  "target": "mainFrame"
                },
                {
                  "infoId": "10223",
                  "routeurl": "",
                  "levelid": "10223",
                  "name": "费用标准流程",
                  "pid": "10218",
                  "id": "10223",
                  "parentId": "10218",
                  "url": "/fna/costStandard/wfset/costStandardWfSetEdit.jsp",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/expenseStandard/costStandardWf",
                  "mobxrouteurl": "/budget/expenseStandard/costStandardWf",
                  "target": "mainFrame"
                }
              ]
            }
          ]
        },
        {
          "infoId": "1336",
          "routeurl": "",
          "levelid": "1336",
          "name": "协同区",
          "pid": "10004",
          "id": "1336",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "/appcenter/synergy",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "1340",
              "routeurl": "",
              "levelid": "1340",
              "name": "流程协同",
              "pid": "1336",
              "id": "1340",
              "parentId": "1336",
              "url": "/synergy/maintenance/Synergy.jsp?stype=wf",
              "fullrouteurl": "/spa/portal/static4engine/engine.html#/appcenter/synergy/synergy4wf",
              "mobxrouteurl": "/appcenter/synergy/synergy4wf",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10352",
          "routeurl": "",
          "levelid": "10352",
          "name": "小E助手",
          "pid": "10004",
          "id": "10352",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10353",
              "routeurl": "",
              "levelid": "10353",
              "name": "问题库",
              "pid": "10352",
              "id": "10353",
              "parentId": "10352",
              "url": "/fullsearch/ViewFaqLibTab.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10355",
              "routeurl": "",
              "levelid": "10355",
              "name": "客户库",
              "pid": "10352",
              "id": "10355",
              "parentId": "10352",
              "url": "/fullsearch/ViewCrmLibTab.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10354",
              "routeurl": "",
              "levelid": "10354",
              "name": "文档库",
              "pid": "10352",
              "id": "10354",
              "parentId": "10352",
              "url": "/fullsearch/ViewDocLibTab.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10356",
              "routeurl": "",
              "levelid": "10356",
              "name": "人员库",
              "pid": "10352",
              "id": "10356",
              "parentId": "10352",
              "url": "/fullsearch/ViewHrmLibFrame.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10357",
              "routeurl": "",
              "levelid": "10357",
              "name": "客服设置",
              "pid": "10352",
              "id": "10357",
              "parentId": "10352",
              "url": "/fullsearch/ViewServiceLibTab.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10358",
              "routeurl": "",
              "levelid": "10358",
              "name": "固定指令设置",
              "pid": "10352",
              "id": "10358",
              "parentId": "10352",
              "url": "/fullsearch/ViewFixedInstLibTab.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "15003",
          "routeurl": "",
          "levelid": "15003",
          "name": "消息中心",
          "pid": "10004",
          "id": "15003",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "15009",
              "routeurl": "",
              "levelid": "15009",
              "name": "消息中心配置",
              "pid": "15003",
              "id": "15009",
              "parentId": "15003",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/ecAndEM/messagecenterconfig",
              "mobxrouteurl": "/ecAndEM/messagecenterconfig",
              "target": "mainFrame"
            },
            {
              "infoId": "15010",
              "routeurl": "",
              "levelid": "15010",
              "name": "消息类型设置",
              "pid": "15003",
              "id": "15010",
              "parentId": "15003",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/ecAndEM/messagetypeconfig",
              "mobxrouteurl": "/ecAndEM/messagetypeconfig",
              "target": "mainFrame"
            },
            {
              "infoId": "15004",
              "routeurl": "",
              "levelid": "15004",
              "name": "消息订阅设置",
              "pid": "15003",
              "id": "15004",
              "parentId": "15003",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/log/sub",
              "mobxrouteurl": "/log/sub",
              "target": "mainFrame"
            },
            {
              "infoId": "15005",
              "routeurl": "",
              "levelid": "15005",
              "name": "消息订阅日志",
              "pid": "15003",
              "id": "15005",
              "parentId": "15003",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/log/sublog",
              "mobxrouteurl": "/log/sublog",
              "target": "mainFrame"
            },
            {
              "infoId": "15006",
              "routeurl": "",
              "levelid": "15006",
              "name": "消息推送日志",
              "pid": "15003",
              "id": "15006",
              "parentId": "15003",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/log/pushlog",
              "mobxrouteurl": "/log/pushlog",
              "target": "mainFrame"
            },
            {
              "infoId": "15007",
              "routeurl": "",
              "levelid": "15007",
              "name": "提醒设置维护",
              "pid": "15003",
              "id": "15007",
              "parentId": "15003",
              "url": "",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/log/remind",
              "mobxrouteurl": "/log/remind",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "11159",
          "routeurl": "",
          "levelid": "11159",
          "name": "督查督办",
          "pid": "10004",
          "id": "11159",
          "parentId": "10004",
          "url": "/spa/govern/static4engine/engine.html#/main/govern/category",
          "fullrouteurl": "/spa/govern/static4engine/engine.html#/main/govern/category",
          "mobxrouteurl": "govern/category",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "11172",
              "routeurl": "",
              "levelid": "11172",
              "name": "督办分类",
              "pid": "11159",
              "id": "11172",
              "parentId": "11159",
              "url": "/spa/govern/static4engine/engine.html#/main/govern/categoryGroup",
              "fullrouteurl": "/spa/govern/static4engine/engine.html#/main/govern/categoryGroup",
              "mobxrouteurl": "govern/categoryGroup",
              "target": "mainFrame"
            },
            {
              "infoId": "11160",
              "routeurl": "",
              "levelid": "11160",
              "name": "督办类型",
              "pid": "11159",
              "id": "11160",
              "parentId": "11159",
              "url": "/spa/govern/static4engine/engine.html#/main/govern/category",
              "fullrouteurl": "/spa/govern/static4engine/engine.html#/main/govern/category",
              "mobxrouteurl": "govern/category",
              "target": "mainFrame"
            },
            {
              "infoId": "100030",
              "routeurl": "",
              "levelid": "100030",
              "name": "督办通用设置",
              "pid": "11159",
              "id": "100030",
              "parentId": "11159",
              "url": "/spa/govern/static4engine/engine.html#/main/govern/categoryBasic",
              "fullrouteurl": "/govern/categoryBasic",
              "mobxrouteurl": "/govern/categoryBasic",
              "target": "mainFrame"
            },
            {
              "infoId": "100100",
              "routeurl": "",
              "levelid": "100100",
              "name": "数据关联授权",
              "pid": "11159",
              "id": "100100",
              "parentId": "11159",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/editTable?type=govern&functiontype=fieldAuthorize",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "11216",
          "routeurl": "",
          "levelid": "11216",
          "name": "信息采编",
          "pid": "10004",
          "id": "11216",
          "parentId": "10004",
          "url": "/spa/info/static4engine/engine.html#/main/info/infoSet",
          "fullrouteurl": "/spa/info/static4engine/engine.html#/main/info/infoSet",
          "mobxrouteurl": "/info/infoSet",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "11218",
              "routeurl": "",
              "levelid": "11218",
              "name": "单位设置",
              "pid": "11216",
              "id": "11218",
              "parentId": "11216",
              "url": "/spa/info/static4engine/engine.html#/main/info/infoUnit",
              "fullrouteurl": "/spa/info/static4engine/engine.html#/main/info/infoUnit",
              "mobxrouteurl": "/info/infoUnit",
              "target": "mainFrame"
            },
            {
              "infoId": "11217",
              "routeurl": "",
              "levelid": "11217",
              "name": "采编路径",
              "pid": "11216",
              "id": "11217",
              "parentId": "11216",
              "url": "/spa/info/static4engine/engine.html#/main/info/infoSet",
              "fullrouteurl": "/spa/info/static4engine/engine.html#/main/info/infoSet",
              "mobxrouteurl": "/info/infoSet",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "-185",
          "routeurl": "",
          "levelid": "-185",
          "name": "多维预算",
          "pid": "10004",
          "id": "-185",
          "parentId": "10004",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "-186",
              "routeurl": "",
              "levelid": "-186",
              "name": "基础设置",
              "pid": "-185",
              "id": "-186",
              "parentId": "-185",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "-193",
                  "routeurl": "",
                  "levelid": "-193",
                  "name": "账套设置",
                  "pid": "-186",
                  "id": "-193",
                  "parentId": "-186",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/accountSet",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/accountSet",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-194",
                  "routeurl": "",
                  "levelid": "-194",
                  "name": "预算承担主体设置",
                  "pid": "-186",
                  "id": "-194",
                  "parentId": "-186",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetBearer",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetBearer",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-195",
                  "routeurl": "",
                  "levelid": "-195",
                  "name": "预算科目设置",
                  "pid": "-186",
                  "id": "-195",
                  "parentId": "-186",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetExpenseSubject",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetExpenseSubject",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-196",
                  "routeurl": "",
                  "levelid": "-196",
                  "name": "预算周期设置",
                  "pid": "-186",
                  "id": "-196",
                  "parentId": "-186",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetCycleSetup",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetCycleSetup",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-219",
                  "routeurl": "",
                  "levelid": "-219",
                  "name": "自定义报表种类设置",
                  "pid": "-186",
                  "id": "-219",
                  "parentId": "-186",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/reportTypeSet",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/reportTypeSet",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-221",
                  "routeurl": "",
                  "levelid": "-221",
                  "name": "自定义报表设置",
                  "pid": "-186",
                  "id": "-221",
                  "parentId": "-186",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/reportSet",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/reportSet",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "-187",
              "routeurl": "",
              "levelid": "-187",
              "name": "维度设置",
              "pid": "-185",
              "id": "-187",
              "parentId": "-185",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "-197",
                  "routeurl": "",
                  "levelid": "-197",
                  "name": "维度类别",
                  "pid": "-187",
                  "id": "-197",
                  "parentId": "-187",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/dimensionType",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/dimensionType",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-198",
                  "routeurl": "",
                  "levelid": "-198",
                  "name": "预算维度",
                  "pid": "-187",
                  "id": "-198",
                  "parentId": "-187",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetDimension",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetDimension",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "-188",
              "routeurl": "",
              "levelid": "-188",
              "name": "预算编制设置",
              "pid": "-185",
              "id": "-188",
              "parentId": "-185",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "-199",
                  "routeurl": "",
                  "levelid": "-199",
                  "name": "审批流程",
                  "pid": "-188",
                  "id": "-199",
                  "parentId": "-188",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/approvalWorkFlow",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/approvalWorkFlow",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-200",
                  "routeurl": "",
                  "levelid": "-200",
                  "name": "提醒流程",
                  "pid": "-188",
                  "id": "-200",
                  "parentId": "-188",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/remindWorkFlow",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/remindWorkFlow",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-201",
                  "routeurl": "",
                  "levelid": "-201",
                  "name": "预算模板设置",
                  "pid": "-188",
                  "id": "-201",
                  "parentId": "-188",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetApproval",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetApproval",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-202",
                  "routeurl": "",
                  "levelid": "-202",
                  "name": "预算数据填报",
                  "pid": "-188",
                  "id": "-202",
                  "parentId": "-188",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/excelDataFillIn",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/excelDataFillIn",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "-189",
              "routeurl": "",
              "levelid": "-189",
              "name": "流程设置",
              "pid": "-185",
              "id": "-189",
              "parentId": "-185",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "-207",
                  "routeurl": "",
                  "levelid": "-207",
                  "name": "报销流程",
                  "pid": "-189",
                  "id": "-207",
                  "parentId": "-189",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/reimburseWorkFlow",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/reimburseWorkFlow",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-204",
                  "routeurl": "",
                  "levelid": "-204",
                  "name": "变更流程",
                  "pid": "-189",
                  "id": "-204",
                  "parentId": "-189",
                  "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/changeWorkFlow",
                  "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/changeWorkFlow",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-205",
                  "routeurl": "",
                  "levelid": "-205",
                  "name": "预付款流程",
                  "pid": "-189",
                  "id": "-205",
                  "parentId": "-189",
                  "url": "/budget/programManagement/prepayWorkFlow?_key=aibprs",
                  "fullrouteurl": "/budget/programManagement/prepayWorkFlow?_key=aibprs",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "-190",
              "routeurl": "",
              "levelid": "-190",
              "name": "借还款设置",
              "pid": "-185",
              "id": "-190",
              "parentId": "-185",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "-206",
                  "routeurl": "",
                  "levelid": "-206",
                  "name": "借款流程",
                  "pid": "-190",
                  "id": "-206",
                  "parentId": "-190",
                  "url": "/spa/fna/static4engine/engine.html#/main/budget/programManagement/borrowWorkFlow",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/programManagement/borrowWorkFlow",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-208",
                  "routeurl": "",
                  "levelid": "-208",
                  "name": "还款流程",
                  "pid": "-190",
                  "id": "-208",
                  "parentId": "-190",
                  "url": "/spa/fna/static4engine/engine.html#/main/budget/programManagement/repaymentWorkFlow",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/programManagement/repaymentWorkFlow",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-209",
                  "routeurl": "",
                  "levelid": "-209",
                  "name": "已发生借款导入",
                  "pid": "-190",
                  "id": "-209",
                  "parentId": "-190",
                  "url": "/spa/fna/static4engine/engine.html#/main/budget/establishManagement/borrowImport",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/establishManagement/borrowImport",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "-191",
              "routeurl": "",
              "levelid": "-191",
              "name": "发票管理",
              "pid": "-185",
              "id": "-191",
              "parentId": "-185",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "-210",
                  "routeurl": "",
                  "levelid": "-210",
                  "name": "发票接口配置",
                  "pid": "-191",
                  "id": "-210",
                  "parentId": "-191",
                  "url": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/invoiceInterfaceSet",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/invoiceInterfaceSet",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-211",
                  "routeurl": "",
                  "levelid": "-211",
                  "name": "票据流程设置",
                  "pid": "-191",
                  "id": "-211",
                  "parentId": "-191",
                  "url": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/billProcess",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/billProcess",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-212",
                  "routeurl": "",
                  "levelid": "-212",
                  "name": "发票台账",
                  "pid": "-191",
                  "id": "-212",
                  "parentId": "-191",
                  "url": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/invoiceLedger",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/invoiceLedger",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-213",
                  "routeurl": "",
                  "levelid": "-213",
                  "name": "票据识别失败记录查询",
                  "pid": "-191",
                  "id": "-213",
                  "parentId": "-191",
                  "url": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/ticketDiscern",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/ticketDiscern",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-214",
                  "routeurl": "",
                  "levelid": "-214",
                  "name": "票据项对应科目设置",
                  "pid": "-191",
                  "id": "-214",
                  "parentId": "-191",
                  "url": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/billSubject",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/invoiceManagement/billSubject",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                }
              ]
            },
            {
              "infoId": "-192",
              "routeurl": "",
              "levelid": "-192",
              "name": "费用标准",
              "pid": "-185",
              "id": "-192",
              "parentId": "-185",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame",
              "child": [
                {
                  "infoId": "-215",
                  "routeurl": "",
                  "levelid": "-215",
                  "name": "费用标准维度",
                  "pid": "-192",
                  "id": "-215",
                  "parentId": "-192",
                  "url": "/spa/fna/static4engine/engine.html#/main/budget/expenseStandard/standardCostDimension",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/expenseStandard/standardCostDimension",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-217",
                  "routeurl": "",
                  "levelid": "-217",
                  "name": "费用标准设置",
                  "pid": "-192",
                  "id": "-217",
                  "parentId": "-192",
                  "url": "/spa/fna/static4engine/engine.html#/main/budget/expenseStandard/costStandardSetting",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/expenseStandard/costStandardSetting",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                },
                {
                  "infoId": "-218",
                  "routeurl": "",
                  "levelid": "-218",
                  "name": "费用标准流程",
                  "pid": "-192",
                  "id": "-218",
                  "parentId": "-192",
                  "url": "/spa/fna/static4engine/engine.html#/main/budget/expenseStandard/costStandardWf",
                  "fullrouteurl": "/spa/fna/static4engine/engine.html#/main/budget/expenseStandard/costStandardWf",
                  "mobxrouteurl": "",
                  "target": "mainFrame"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "infoId": "10005",
      "routeurl": "",
      "levelid": "10005",
      "name": "建模引擎",
      "pid": "",
      "id": "10005",
      "parentId": "",
      "url": "",
      "fullrouteurl": "",
      "mobxrouteurl": "/cubeengine",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "10718",
          "routeurl": "",
          "levelid": "10718",
          "name": "应用建模",
          "pid": "10005",
          "id": "10718",
          "parentId": "10005",
          "url": "/cubeengine/app/index",
          "fullrouteurl": "",
          "mobxrouteurl": "/cubeengine/app/index",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10719",
              "routeurl": "",
              "levelid": "10719",
              "name": "应用",
              "pid": "10718",
              "id": "10719",
              "parentId": "10718",
              "url": "/cubeengine/app/index",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/index",
              "target": "mainFrame"
            },
            {
              "infoId": "10720",
              "routeurl": "",
              "levelid": "10720",
              "name": "模块",
              "pid": "10718",
              "id": "10720",
              "parentId": "10718",
              "url": "/cubeengine/app/mode",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/mode",
              "target": "mainFrame"
            },
            {
              "infoId": "10721",
              "routeurl": "",
              "levelid": "10721",
              "name": "表单",
              "pid": "10718",
              "id": "10721",
              "parentId": "10718",
              "url": "/cubeengine/app/form",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/form",
              "target": "mainFrame"
            },
            {
              "infoId": "10722",
              "routeurl": "",
              "levelid": "10722",
              "name": "查询",
              "pid": "10718",
              "id": "10722",
              "parentId": "10718",
              "url": "/cubeengine/app/list",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/list",
              "target": "mainFrame"
            },
            {
              "infoId": "10724",
              "routeurl": "",
              "levelid": "10724",
              "name": "浏览框",
              "pid": "10718",
              "id": "10724",
              "parentId": "10718",
              "url": "/cubeengine/app/browser",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/browser",
              "target": "mainFrame"
            },
            {
              "infoId": "10725",
              "routeurl": "",
              "levelid": "10725",
              "name": "树",
              "pid": "10718",
              "id": "10725",
              "parentId": "10718",
              "url": "/cubeengine/app/tree",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/tree",
              "target": "mainFrame"
            },
            {
              "infoId": "10728",
              "routeurl": "",
              "levelid": "10728",
              "name": "提醒",
              "pid": "10718",
              "id": "10728",
              "parentId": "10718",
              "url": "/cubeengine/app/remind",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/remind",
              "target": "mainFrame"
            },
            {
              "infoId": "10726",
              "routeurl": "",
              "levelid": "10726",
              "name": "资源面板",
              "pid": "10718",
              "id": "10726",
              "parentId": "10718",
              "url": "/cubeengine/app/resource",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/resource",
              "target": "mainFrame"
            },
            {
              "infoId": "11132",
              "routeurl": "",
              "levelid": "11132",
              "name": "看板",
              "pid": "10718",
              "id": "11132",
              "parentId": "10718",
              "url": "/cubeengine/app/board",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/board",
              "target": "mainFrame"
            },
            {
              "infoId": "11011",
              "routeurl": "",
              "levelid": "11011",
              "name": "思维导图",
              "pid": "10718",
              "id": "11011",
              "parentId": "10718",
              "url": "/cubeengine/app/mindMap",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/mindMap",
              "target": "mainFrame"
            },
            {
              "infoId": "11041",
              "routeurl": "",
              "levelid": "11041",
              "name": "甘特图",
              "pid": "10718",
              "id": "11041",
              "parentId": "10718",
              "url": "/cubeengine/app/cubeGantt",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/cubeGantt",
              "target": "mainFrame"
            },
            {
              "infoId": "10727",
              "routeurl": "",
              "levelid": "10727",
              "name": "自定义页面",
              "pid": "10718",
              "id": "10727",
              "parentId": "10718",
              "url": "/cubeengine/app/custompage",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/custompage",
              "target": "mainFrame"
            },
            {
              "infoId": "100114",
              "routeurl": "",
              "levelid": "100114",
              "name": "数据看板",
              "pid": "10718",
              "id": "100114",
              "parentId": "10718",
              "url": "/cubeengine/app/dataBoard",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10934",
              "routeurl": "",
              "levelid": "10934",
              "name": "导入导出",
              "pid": "10718",
              "id": "10934",
              "parentId": "10718",
              "url": "/cubeengine/app/impexp",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/impexp",
              "target": "mainFrame"
            },
            {
              "infoId": "10935",
              "routeurl": "",
              "levelid": "10935",
              "name": "Web Service",
              "pid": "10718",
              "id": "10935",
              "parentId": "10718",
              "url": "/cubeengine/app/webservice",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/webservice",
              "target": "mainFrame"
            },
            {
              "infoId": "10953",
              "routeurl": "",
              "levelid": "10953",
              "name": "设置",
              "pid": "10718",
              "id": "10953",
              "parentId": "10718",
              "url": "/cubeengine/app/setting",
              "fullrouteurl": "",
              "mobxrouteurl": "/cubeengine/app/setting",
              "target": "mainFrame"
            }
          ]
        }
      ]
    },
    {
      "infoId": "10008",
      "routeurl": "",
      "levelid": "10008",
      "name": "升级中心",
      "pid": "",
      "id": "10008",
      "parentId": "",
      "url": "",
      "fullrouteurl": "",
      "mobxrouteurl": "",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "10269",
          "routeurl": "",
          "levelid": "10269",
          "name": "升级",
          "pid": "10008",
          "id": "10269",
          "parentId": "10008",
          "url": "/updateclient/index.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10272",
              "routeurl": "",
              "levelid": "10272",
              "name": "参数设置",
              "pid": "10269",
              "id": "10272",
              "parentId": "10269",
              "url": "/updateclient/index.jsp?type=4",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10859",
              "routeurl": "",
              "levelid": "10859",
              "name": "节点设置",
              "pid": "10269",
              "id": "10859",
              "parentId": "10269",
              "url": "/clusterupgrade/clusterUpgradeSetting.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10268",
              "routeurl": "",
              "levelid": "10268",
              "name": "主节点升级",
              "pid": "10269",
              "id": "10268",
              "parentId": "10269",
              "url": "/updateclient/index.jsp?type=1",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10860",
              "routeurl": "",
              "levelid": "10860",
              "name": "其他节点升级",
              "pid": "10269",
              "id": "10860",
              "parentId": "10269",
              "url": "/clusterupgrade/clusterMain.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10675",
              "routeurl": "",
              "levelid": "10675",
              "name": "升级脚本日志",
              "pid": "10269",
              "id": "10675",
              "parentId": "10269",
              "url": "/updateclient/index.jsp?type=7",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10291",
              "routeurl": "",
              "levelid": "10291",
              "name": "升级日志",
              "pid": "10269",
              "id": "10291",
              "parentId": "10269",
              "url": "/updateclient/index.jsp?type=5",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10304",
              "routeurl": "",
              "levelid": "10304",
              "name": "文件对比",
              "pid": "10269",
              "id": "10304",
              "parentId": "10269",
              "url": "/updateclient/index.jsp?type=6",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "11003",
              "routeurl": "",
              "levelid": "11003",
              "name": "操作手册",
              "pid": "10269",
              "id": "11003",
              "parentId": "10269",
              "url": "/updateclient/docList.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10696",
          "routeurl": "",
          "levelid": "10696",
          "name": "文件检测与维护",
          "pid": "10008",
          "id": "10696",
          "parentId": "10008",
          "url": "/templetecheck/main.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "10693",
          "routeurl": "",
          "levelid": "10693",
          "name": "非标功能管理",
          "pid": "10008",
          "id": "10693",
          "parentId": "10008",
          "url": "/upgrade/nonStandardFunctionPage.jsp?_fromURL=nonStandardFuncManage",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame"
        }
      ]
    },
    {
      "infoId": "10009",
      "routeurl": "",
      "levelid": "10009",
      "name": "日志中心",
      "pid": "",
      "id": "10009",
      "parentId": "",
      "url": "/report/index.jsp",
      "fullrouteurl": "/spa/smallApp/engine.html#/log/index/",
      "mobxrouteurl": "/log/index/",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "10131",
          "routeurl": "",
          "levelid": "10131",
          "name": "系统日志",
          "pid": "10009",
          "id": "10131",
          "parentId": "10009",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "11141",
              "routeurl": "/hrmengine/loginFailLog",
              "levelid": "11141",
              "name": "人员登入失败日志",
              "pid": "10131",
              "id": "11141",
              "parentId": "10131",
              "url": "/hrm/HrmTab.jsp?_fromURL=systemLog&cmd=LoginFailed",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/loginFailLog",
              "mobxrouteurl": "/hrmengine/loginFailLog",
              "target": "mainFrame"
            },
            {
              "infoId": "211",
              "routeurl": "/hrmengine/loginLog",
              "levelid": "211",
              "name": "人员登入日志",
              "pid": "10131",
              "id": "211",
              "parentId": "10131",
              "url": "/hrm/HrmTab.jsp?_fromURL=systemLog&cmd=SysMaintenanceLog",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/loginLog",
              "mobxrouteurl": "/hrmengine/loginLog",
              "target": "mainFrame"
            },
            {
              "infoId": "447",
              "routeurl": "",
              "levelid": "447",
              "name": "客户登入日志",
              "pid": "10131",
              "id": "447",
              "parentId": "10131",
              "url": "/CRM/report/CRMLoginLogRp.jsp",
              "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/log/centre/3",
              "mobxrouteurl": "/crmmode/log/centre/3",
              "target": "mainFrame"
            },
            {
              "infoId": "1250",
              "routeurl": "/hrmengine/onlineAnalysis",
              "levelid": "1250",
              "name": "在线人数分析",
              "pid": "10131",
              "id": "1250",
              "parentId": "10131",
              "url": "/hrm/HrmTab.jsp?_fromURL=systemLog&cmd=HrmOnlineRp",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/onlineAnalysis",
              "mobxrouteurl": "/hrmengine/onlineAnalysis",
              "target": "mainFrame"
            },
            {
              "infoId": "1254",
              "routeurl": "/hrmengine/limitedLoginAnalysis",
              "levelid": "1254",
              "name": "并发登录被限统计",
              "pid": "10131",
              "id": "1254",
              "parentId": "10131",
              "url": "/hrm/HrmTab.jsp?_fromURL=systemLog&cmd=HrmRefuseRp",
              "fullrouteurl": "/spa/hrm/engine.html#/hrmengine/limitedLoginAnalysis",
              "mobxrouteurl": "/hrmengine/limitedLoginAnalysis",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10132",
          "routeurl": "",
          "levelid": "10132",
          "name": "内容日志",
          "pid": "10009",
          "id": "10132",
          "parentId": "10009",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "23",
              "routeurl": "",
              "levelid": "23",
              "name": "文档下载日志",
              "pid": "10132",
              "id": "23",
              "parentId": "10132",
              "url": "/docs/report/DocReportTab.jsp?_fromURL=10",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/log/download",
              "mobxrouteurl": "/docengine/log/download",
              "target": "mainFrame"
            },
            {
              "infoId": "10133",
              "routeurl": "",
              "levelid": "10133",
              "name": "文档阅读日志",
              "pid": "10132",
              "id": "10133",
              "parentId": "10132",
              "url": "/report/RpReadView.jsp?object=1",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/log/read",
              "mobxrouteurl": "/docengine/log/read",
              "target": "mainFrame"
            },
            {
              "infoId": "10134",
              "routeurl": "",
              "levelid": "10134",
              "name": "文档修改日志",
              "pid": "10132",
              "id": "10134",
              "parentId": "10132",
              "url": "/docs/report/DocReportTab.jsp?_fromURL=12",
              "fullrouteurl": "/spa/document/static4engine/engine.html#/docengine/log/edit",
              "mobxrouteurl": "/docengine/log/edit",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10135",
          "routeurl": "",
          "levelid": "10135",
          "name": "流程日志",
          "pid": "10009",
          "id": "10135",
          "parentId": "10009",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "233",
              "routeurl": "",
              "levelid": "233",
              "name": "流程读取日志",
              "pid": "10135",
              "id": "233",
              "parentId": "10135",
              "url": "/workflow/report/ViewLogRp.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/workflowLog/1",
              "mobxrouteurl": "/workflowengine/workflowLog/1",
              "target": "mainFrame"
            },
            {
              "infoId": "234",
              "routeurl": "",
              "levelid": "234",
              "name": "流程处理日志",
              "pid": "10135",
              "id": "234",
              "parentId": "10135",
              "url": "/workflow/report/OperateLogRp.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/workflowLog/2",
              "mobxrouteurl": "/workflowengine/workflowLog/2",
              "target": "mainFrame"
            },
            {
              "infoId": "10136",
              "routeurl": "",
              "levelid": "10136",
              "name": "流程删除日志",
              "pid": "10135",
              "id": "10136",
              "parentId": "10135",
              "url": "/workflow/report/DeleteLogRp.jsp",
              "fullrouteurl": "/spa/workflow/static4engine/engine.html#/main/workflowengine/workflowLog/3",
              "mobxrouteurl": "/workflowengine/workflowLog/3",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10137",
          "routeurl": "",
          "levelid": "10137",
          "name": "客户日志",
          "pid": "10009",
          "id": "10137",
          "parentId": "10009",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "11164",
              "routeurl": "",
              "levelid": "11164",
              "name": "客户导入日志",
              "pid": "10137",
              "id": "11164",
              "parentId": "10137",
              "url": "/CRM/report/CRMImportLog.jsp",
              "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/log/centre/4",
              "mobxrouteurl": "/crmmode/log/centre/4",
              "target": "mainFrame"
            },
            {
              "infoId": "347",
              "routeurl": "",
              "levelid": "347",
              "name": "客户读取日志",
              "pid": "10137",
              "id": "347",
              "parentId": "10137",
              "url": "/CRM/report/CRMViewLogRpFrame.jsp",
              "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/log/centre/1",
              "mobxrouteurl": "/crmmode/log/centre/1",
              "target": "mainFrame"
            },
            {
              "infoId": "346",
              "routeurl": "",
              "levelid": "346",
              "name": "客户修改日志",
              "pid": "10137",
              "id": "346",
              "parentId": "10137",
              "url": "/CRM/report/CRMModifyLogRpFrame.jsp",
              "fullrouteurl": "/spa/crm/static4engine/engine.html#/crmmode/log/centre/2",
              "mobxrouteurl": "/crmmode/log/centre/2",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10138",
          "routeurl": "",
          "levelid": "10138",
          "name": "项目日志",
          "pid": "10009",
          "id": "10138",
          "parentId": "10009",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "231",
              "routeurl": "",
              "levelid": "231",
              "name": "项目读取日志",
              "pid": "10138",
              "id": "231",
              "parentId": "10138",
              "url": "/proj/report/ProjectViewLogRp.jsp",
              "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/log/logtype/read",
              "mobxrouteurl": "/prjengine/log/logtype/read",
              "target": "mainFrame"
            },
            {
              "infoId": "230",
              "routeurl": "",
              "levelid": "230",
              "name": "项目修改日志",
              "pid": "10138",
              "id": "230",
              "parentId": "10138",
              "url": "/proj/report/ProjectModifyLogRp.jsp",
              "fullrouteurl": "/spa/prj/engine.html#/main/prjengine/log/logtype/modidfy",
              "mobxrouteurl": "/prjengine/log/logtype/modidfy",
              "target": "mainFrame"
            }
          ]
        }
      ]
    },
    {
      "infoId": "10010",
      "routeurl": "",
      "levelid": "10010",
      "name": "云商店",
      "pid": "",
      "id": "10010",
      "parentId": "",
      "url": "",
      "fullrouteurl": "",
      "mobxrouteurl": "",
      "target": "mainFrame"
    },
    {
      "infoId": "10006",
      "routeurl": "",
      "levelid": "10006",
      "name": "移动引擎",
      "pid": "0",
      "id": "10006",
      "parentId": "0",
      "url": "",
      "fullrouteurl": "",
      "mobxrouteurl": "/mobilemode",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "10108",
          "routeurl": "",
          "levelid": "10108",
          "name": "应用建模",
          "pid": "10006",
          "id": "10108",
          "parentId": "10006",
          "url": "/mobilemode/admin/applist",
          "fullrouteurl": "",
          "mobxrouteurl": "/mobilemode/admin",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10500",
              "routeurl": "",
              "levelid": "10500",
              "name": "应用",
              "pid": "10108",
              "id": "10500",
              "parentId": "10108",
              "url": "/mobilemode/admin/applist.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "/mobilemode/admin/app",
              "target": "mainFrame"
            },
            {
              "infoId": "10556",
              "routeurl": "",
              "levelid": "10556",
              "name": "模板",
              "pid": "10108",
              "id": "10556",
              "parentId": "10108",
              "url": "/mobilemode/admin/template",
              "fullrouteurl": "",
              "mobxrouteurl": "/mobilemode/admin/template",
              "target": "mainFrame"
            },
            {
              "infoId": "10557",
              "routeurl": "",
              "levelid": "10557",
              "name": "皮肤",
              "pid": "10108",
              "id": "10557",
              "parentId": "10108",
              "url": "/mobilemode/admin/skin",
              "fullrouteurl": "",
              "mobxrouteurl": "/mobilemode/admin/skin",
              "target": "mainFrame"
            },
            {
              "infoId": "10558",
              "routeurl": "",
              "levelid": "10558",
              "name": "插件",
              "pid": "10108",
              "id": "10558",
              "parentId": "10108",
              "url": "/mobilemode/admin/plugin",
              "fullrouteurl": "",
              "mobxrouteurl": "",
              "target": "mainFrame"
            },
            {
              "infoId": "10559",
              "routeurl": "",
              "levelid": "10559",
              "name": "函数",
              "pid": "10108",
              "id": "10559",
              "parentId": "10108",
              "url": "/mobilemode/admin/function",
              "fullrouteurl": "",
              "mobxrouteurl": "/mobilemode/admin/function",
              "target": "mainFrame"
            },
            {
              "infoId": "10895",
              "routeurl": "",
              "levelid": "10895",
              "name": "设置",
              "pid": "10108",
              "id": "10895",
              "parentId": "10108",
              "url": "/mobilemode/admin/settings",
              "fullrouteurl": "",
              "mobxrouteurl": "/mobilemode/admin/settings",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10907",
          "routeurl": "",
          "levelid": "10907",
          "name": "应用监控",
          "pid": "10006",
          "id": "10907",
          "parentId": "10006",
          "url": "/mobilemode/monitoring/accesslog",
          "fullrouteurl": "",
          "mobxrouteurl": "/mobilemode/monitoring",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10908",
              "routeurl": "",
              "levelid": "10908",
              "name": "应用访问日志",
              "pid": "10907",
              "id": "10908",
              "parentId": "10907",
              "url": "/mobilemode/monitoring/accesslog",
              "fullrouteurl": "",
              "mobxrouteurl": "/mobilemode/monitoring/accesslog",
              "target": "mainFrame"
            },
            {
              "infoId": "10909",
              "routeurl": "",
              "levelid": "10909",
              "name": "应用维护日志",
              "pid": "10907",
              "id": "10909",
              "parentId": "10907",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/mobilemode/monitoring/maintenancelog",
              "target": "mainFrame"
            },
            {
              "infoId": "10910",
              "routeurl": "",
              "levelid": "10910",
              "name": "日志设置",
              "pid": "10907",
              "id": "10910",
              "parentId": "10907",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/mobilemode/monitoring/logsettings",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "11000",
          "routeurl": "",
          "levelid": "11000",
          "name": "接口管理",
          "pid": "10006",
          "id": "11000",
          "parentId": "10006",
          "url": "/mobilemode/apimanage",
          "fullrouteurl": "",
          "mobxrouteurl": "/mobilemode/apimanage",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "11001",
              "routeurl": "",
              "levelid": "11001",
              "name": "分组管理",
              "pid": "11000",
              "id": "11001",
              "parentId": "11000",
              "url": "/mobilemode/apimanage/group",
              "fullrouteurl": "",
              "mobxrouteurl": "/mobilemode/apimanage/group",
              "target": "mainFrame"
            },
            {
              "infoId": "11002",
              "routeurl": "",
              "levelid": "11002",
              "name": "接口列表",
              "pid": "11000",
              "id": "11002",
              "parentId": "11000",
              "url": "/mobilemode/apimanage/list",
              "fullrouteurl": "",
              "mobxrouteurl": "/mobilemode/apimanage/list",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "-118",
          "routeurl": "",
          "levelid": "-118",
          "name": "新后端",
          "pid": "10006",
          "id": "-118",
          "parentId": "10006",
          "url": "/mobilemode/admin/appDesigner.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "_blank"
        }
      ]
    },
    {
      "infoId": "100021",
      "routeurl": "",
      "levelid": "100021",
      "name": "数据中心",
      "pid": "0",
      "id": "100021",
      "parentId": "0",
      "url": "",
      "fullrouteurl": "/edcengine/app/right",
      "mobxrouteurl": "/edcengine/app/right",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "100026",
          "routeurl": "",
          "levelid": "100026",
          "name": "数据上报",
          "pid": "100021",
          "id": "100026",
          "parentId": "100021",
          "url": "",
          "fullrouteurl": "/edcengine/app/right",
          "mobxrouteurl": "/edcengine/app/right",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "100022",
              "routeurl": "",
              "levelid": "100022",
              "name": "权限设置",
              "pid": "100026",
              "id": "100022",
              "parentId": "100026",
              "url": "",
              "fullrouteurl": "/edcengine/app/right",
              "mobxrouteurl": "/edcengine/app/right",
              "target": "mainFrame"
            },
            {
              "infoId": "100023",
              "routeurl": "",
              "levelid": "100023",
              "name": "表格模板",
              "pid": "100026",
              "id": "100023",
              "parentId": "100026",
              "url": "",
              "fullrouteurl": "/edcengine/app/exceltemplate",
              "mobxrouteurl": "/edcengine/app/exceltemplate",
              "target": "mainFrame"
            },
            {
              "infoId": "100024",
              "routeurl": "",
              "levelid": "100024",
              "name": "路径模板",
              "pid": "100026",
              "id": "100024",
              "parentId": "100026",
              "url": "",
              "fullrouteurl": "/edcengine/app/pathtemplate",
              "mobxrouteurl": "/edcengine/app/pathtemplate",
              "target": "mainFrame"
            },
            {
              "infoId": "100115",
              "routeurl": "",
              "levelid": "100115",
              "name": "应用分组维护",
              "pid": "100026",
              "id": "100115",
              "parentId": "100026",
              "url": "",
              "fullrouteurl": "/edcengine/app/appGroupType",
              "mobxrouteurl": "/edcengine/app/appGroupType",
              "target": "mainFrame"
            },
            {
              "infoId": "100117",
              "routeurl": "",
              "levelid": "100117",
              "name": "编码",
              "pid": "100026",
              "id": "100117",
              "parentId": "100026",
              "url": "",
              "fullrouteurl": "/edcengine/app/formencode",
              "mobxrouteurl": "/edcengine/app/formencode",
              "target": "mainFrame"
            },
            {
              "infoId": "100127",
              "routeurl": "",
              "levelid": "100127",
              "name": "设置",
              "pid": "100026",
              "id": "100127",
              "parentId": "100026",
              "url": "",
              "fullrouteurl": "/edcengine/app/settings",
              "mobxrouteurl": "/edcengine/app/settings",
              "target": "mainFrame"
            }
          ]
        }
      ]
    },
    {
      "infoId": "-105",
      "routeurl": "",
      "levelid": "-105",
      "name": "liuy数据中心",
      "pid": "0",
      "id": "-105",
      "parentId": "0",
      "url": "",
      "fullrouteurl": "",
      "mobxrouteurl": "",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "-106",
          "routeurl": "",
          "levelid": "-106",
          "name": "liuy输入维护",
          "pid": "-105",
          "id": "-106",
          "parentId": "-105",
          "url": "/datacenter/maintenance/inputreport/InputReport.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-107",
          "routeurl": "",
          "levelid": "-107",
          "name": "liuy条件维护",
          "pid": "-105",
          "id": "-107",
          "parentId": "-105",
          "url": "/datacenter/maintenance/condition/OutReportCondition.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-108",
          "routeurl": "",
          "levelid": "-108",
          "name": "liuy输出维护",
          "pid": "-105",
          "id": "-108",
          "parentId": "-105",
          "url": "/datacenter/maintenance/outreport/OutReport.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-109",
          "routeurl": "",
          "levelid": "-109",
          "name": "liuy统计项维护",
          "pid": "-105",
          "id": "-109",
          "parentId": "-105",
          "url": "/datacenter/maintenance/statitem/ReportStatItem.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-110",
          "routeurl": "",
          "levelid": "-110",
          "name": "liuy模板设计",
          "pid": "-105",
          "id": "-110",
          "parentId": "-105",
          "url": "/datacenter/design/index.htm",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame"
        }
      ]
    },
    {
      "infoId": "10771",
      "routeurl": "",
      "levelid": "10771",
      "name": "ESB中心",
      "pid": "0",
      "id": "10771",
      "parentId": "0",
      "url": "",
      "fullrouteurl": "",
      "mobxrouteurl": "esb",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "10787",
          "routeurl": "",
          "levelid": "10787",
          "name": "配置中心",
          "pid": "10771",
          "id": "10787",
          "parentId": "10771",
          "url": "/integration/esb/index.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "100019",
              "routeurl": "",
              "levelid": "100019",
              "name": "产品管理",
              "pid": "10787",
              "id": "100019",
              "parentId": "10787",
              "url": "",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/production",
              "mobxrouteurl": "/esb/production",
              "target": "mainFrame"
            },
            {
              "infoId": "10788",
              "routeurl": "",
              "levelid": "10788",
              "name": "资源管理",
              "pid": "10787",
              "id": "10788",
              "parentId": "10787",
              "url": "/integration/esb/tab.jsp?urlType=1-1",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/resource",
              "mobxrouteurl": "/esb/resource",
              "target": "mainFrame"
            },
            {
              "infoId": "100020",
              "routeurl": "",
              "levelid": "100020",
              "name": "模块管理",
              "pid": "10787",
              "id": "100020",
              "parentId": "10787",
              "url": "",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/module",
              "mobxrouteurl": "/esb/module",
              "target": "mainFrame"
            },
            {
              "infoId": "100028",
              "routeurl": "",
              "levelid": "100028",
              "name": "接口管理",
              "pid": "10787",
              "id": "100028",
              "parentId": "10787",
              "url": "",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/interfaceservice",
              "mobxrouteurl": "/esb/interfaceservice",
              "target": "mainFrame"
            },
            {
              "infoId": "100034",
              "routeurl": "",
              "levelid": "100034",
              "name": "事件管理",
              "pid": "10787",
              "id": "100034",
              "parentId": "10787",
              "url": "",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/event",
              "mobxrouteurl": "/esb/event",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "100036",
          "routeurl": "",
          "levelid": "100036",
          "name": "应用中心",
          "pid": "10771",
          "id": "100036",
          "parentId": "10771",
          "url": "/integration/esb/index.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "100037",
              "routeurl": "",
              "levelid": "100037",
              "name": "类别管理",
              "pid": "100036",
              "id": "100037",
              "parentId": "100036",
              "url": "",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/category",
              "mobxrouteurl": "/esb/category",
              "target": "mainFrame"
            },
            {
              "infoId": "100038",
              "routeurl": "",
              "levelid": "100038",
              "name": "常量管理",
              "pid": "100036",
              "id": "100038",
              "parentId": "100036",
              "url": "",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/constant",
              "mobxrouteurl": "/esb/constant",
              "target": "mainFrame"
            },
            {
              "infoId": "100039",
              "routeurl": "",
              "levelid": "100039",
              "name": "转换管理",
              "pid": "100036",
              "id": "100039",
              "parentId": "100036",
              "url": "",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/transform",
              "mobxrouteurl": "/esb/transform",
              "target": "mainFrame"
            },
            {
              "infoId": "100040",
              "routeurl": "",
              "levelid": "100040",
              "name": "应用管理",
              "pid": "100036",
              "id": "100040",
              "parentId": "100036",
              "url": "",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/application",
              "mobxrouteurl": "/esb/application",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "100088",
          "routeurl": "",
          "levelid": "100088",
          "name": "日志中心",
          "pid": "10771",
          "id": "100088",
          "parentId": "10771",
          "url": "/integration/esb/index.jsp",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "100089",
              "routeurl": "",
              "levelid": "100089",
              "name": "事件触发日志",
              "pid": "100088",
              "id": "100089",
              "parentId": "100088",
              "url": "",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/log/event",
              "mobxrouteurl": "esb/log/event",
              "target": "mainFrame"
            },
            {
              "infoId": "100090",
              "routeurl": "",
              "levelid": "100090",
              "name": "应用执行日志",
              "pid": "100088",
              "id": "100090",
              "parentId": "100088",
              "url": "",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/log/application",
              "mobxrouteurl": "/esb/log/application",
              "target": "mainFrame"
            },
            {
              "infoId": "100091",
              "routeurl": "",
              "levelid": "100091",
              "name": "接口执行日志",
              "pid": "100088",
              "id": "100091",
              "parentId": "100088",
              "url": "",
              "fullrouteurl": "/spa/esb/static4engine/engine.html#/main/esb/log/interface",
              "mobxrouteurl": "esb/log/interface",
              "target": "mainFrame"
            }
          ]
        }
      ]
    },
    {
      "infoId": "10729",
      "routeurl": "",
      "levelid": "10729",
      "name": "系统安全",
      "pid": "0",
      "id": "10729",
      "parentId": "0",
      "url": "/security/sensitive/SensitiveTab.jsp?_fromURL=4",
      "fullrouteurl": "",
      "mobxrouteurl": "/securityengine/wordset",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "10730",
          "routeurl": "",
          "levelid": "10730",
          "name": "安全监控",
          "pid": "10729",
          "id": "10730",
          "parentId": "10729",
          "url": "/security/sensitive/SensitiveTab.jsp?_fromURL=4",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10735",
              "routeurl": "",
              "levelid": "10735",
              "name": "敏感词设置",
              "pid": "10730",
              "id": "10735",
              "parentId": "10730",
              "url": "/security/sensitive/SensitiveTab.jsp?_fromURL=4",
              "fullrouteurl": "",
              "mobxrouteurl": "/securityengine/wordset",
              "target": "mainFrame"
            },
            {
              "infoId": "10736",
              "routeurl": "",
              "levelid": "10736",
              "name": "敏感词列表",
              "pid": "10730",
              "id": "10736",
              "parentId": "10730",
              "url": "/security/sensitive/SensitiveTab.jsp",
              "fullrouteurl": "",
              "mobxrouteurl": "/securityengine/wordsetList",
              "target": "mainFrame"
            },
            {
              "infoId": "10737",
              "routeurl": "",
              "levelid": "10737",
              "name": "敏感词拦截日志",
              "pid": "10730",
              "id": "10737",
              "parentId": "10730",
              "url": "/security/sensitive/SensitiveTab.jsp?_fromURL=3",
              "fullrouteurl": "",
              "mobxrouteurl": "/securityengine/wordsetLog",
              "target": "mainFrame"
            }
          ]
        }
      ]
    },
    {
      "infoId": "10202",
      "routeurl": "",
      "levelid": "10202",
      "name": "语言中心",
      "pid": "0",
      "id": "10202",
      "parentId": "0",
      "url": "/systeminfo/label/ManageLabel.jsp",
      "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/language/index",
      "mobxrouteurl": "/language/index",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "10148",
          "routeurl": "",
          "levelid": "10148",
          "name": "标签维护",
          "pid": "10202",
          "id": "10148",
          "parentId": "10202",
          "url": "",
          "fullrouteurl": "",
          "mobxrouteurl": "",
          "target": "mainFrame",
          "child": [
            {
              "infoId": "10149",
              "routeurl": "",
              "levelid": "10149",
              "name": "页面标签",
              "pid": "10148",
              "id": "10149",
              "parentId": "10148",
              "url": "/systeminfo/label/ManageLabel.jsp",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/language/list/htmllabel",
              "mobxrouteurl": "/language/list/htmllabel",
              "target": "mainFrame"
            },
            {
              "infoId": "10150",
              "routeurl": "",
              "levelid": "10150",
              "name": "提示信息",
              "pid": "10148",
              "id": "10150",
              "parentId": "10148",
              "url": "/systeminfo/note/ManageNote.jsp",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/language/list/htmlnote",
              "mobxrouteurl": "/language/list/htmlnote",
              "target": "mainFrame"
            },
            {
              "infoId": "10151",
              "routeurl": "",
              "levelid": "10151",
              "name": "错误信息",
              "pid": "10148",
              "id": "10151",
              "parentId": "10148",
              "url": "/systeminfo/errormsg/ManageErrorMsg.jsp",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/language/list/errormsg",
              "mobxrouteurl": "/language/list/errormsg",
              "target": "mainFrame"
            },
            {
              "infoId": "10925",
              "routeurl": "",
              "levelid": "10925",
              "name": "自定义标签",
              "pid": "10148",
              "id": "10925",
              "parentId": "10148",
              "url": "/systeminfo/customLabel/ManageCustomLabel.jsp",
              "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/language/list/customLabel",
              "mobxrouteurl": "/language/list/customLabel",
              "target": "mainFrame"
            },
            {
              "infoId": "10801",
              "routeurl": "",
              "levelid": "10801",
              "name": "模块标签",
              "pid": "10148",
              "id": "10801",
              "parentId": "10148",
              "url": "",
              "fullrouteurl": "",
              "mobxrouteurl": "/language/label/moduleLabel",
              "target": "mainFrame"
            }
          ]
        },
        {
          "infoId": "10177",
          "routeurl": "",
          "levelid": "10177",
          "name": "语言管理",
          "pid": "10202",
          "id": "10177",
          "parentId": "10202",
          "url": "/systeminfo/language/managelanguage.jsp",
          "fullrouteurl": "/spa/smallApp/static4engine/engine.html#/language/manage",
          "mobxrouteurl": "/language/manage",
          "target": "mainFrame"
        }
      ]
    },
    {
      "infoId": "-141",
      "routeurl": "",
      "levelid": "-141",
      "name": "多维度预算",
      "pid": "0",
      "id": "-141",
      "parentId": "0",
      "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/accountSet",
      "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/accountSet",
      "mobxrouteurl": "",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "-142",
          "routeurl": "",
          "levelid": "-142",
          "name": "帐套设置",
          "pid": "-141",
          "id": "-142",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/accountSet",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/accountSet",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-143",
          "routeurl": "",
          "levelid": "-143",
          "name": "预算承担主体设置",
          "pid": "-141",
          "id": "-143",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetBearer",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetBearer",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-144",
          "routeurl": "",
          "levelid": "-144",
          "name": "科目编码规则设置",
          "pid": "-141",
          "id": "-144",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/subjectCodeRule",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/subjectCodeRule",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-145",
          "routeurl": "",
          "levelid": "-145",
          "name": "预算科目设置",
          "pid": "-141",
          "id": "-145",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetExpenseSubject",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetExpenseSubject",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-146",
          "routeurl": "",
          "levelid": "-146",
          "name": "预算周期",
          "pid": "-141",
          "id": "-146",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetCycleSetup",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetCycleSetup",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-147",
          "routeurl": "",
          "levelid": "-147",
          "name": "预算维度",
          "pid": "-141",
          "id": "-147",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetDimension",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetDimension",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-148",
          "routeurl": "",
          "levelid": "-148",
          "name": "数据集",
          "pid": "-141",
          "id": "-148",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/dataSetting",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/dataSetting",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-149",
          "routeurl": "",
          "levelid": "-149",
          "name": "预算审批",
          "pid": "-141",
          "id": "-149",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetApproval",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetApproval",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-150",
          "routeurl": "",
          "levelid": "-150",
          "name": "维度类别",
          "pid": "-141",
          "id": "-150",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/dimensionType",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/dimensionType",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-151",
          "routeurl": "",
          "levelid": "-151",
          "name": "　报销流程",
          "pid": "-141",
          "id": "-151",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/reimburseWorkFlow",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/reimburseWorkFlow",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-152",
          "routeurl": "",
          "levelid": "-152",
          "name": "预算模板数据填报",
          "pid": "-141",
          "id": "-152",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/excelDataFillIn",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/excelDataFillIn",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-153",
          "routeurl": "",
          "levelid": "-153",
          "name": "数据清除",
          "pid": "-141",
          "id": "-153",
          "parentId": "-141",
          "url": "\\fna\\init\\FnaInitMultiDimension.jsp",
          "fullrouteurl": "\\fna\\init\\FnaInitMultiDimension.jsp",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-160",
          "routeurl": "",
          "levelid": "-160",
          "name": "变更流程",
          "pid": "-141",
          "id": "-160",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/changeWorkFlow",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/changeWorkFlow",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-161",
          "routeurl": "",
          "levelid": "-161",
          "name": "审批流程",
          "pid": "-141",
          "id": "-161",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/approvalWorkFlow",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/approvalWorkFlow",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-162",
          "routeurl": "",
          "levelid": "-162",
          "name": "提醒流程",
          "pid": "-141",
          "id": "-162",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/remindWorkFlow",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/remindWorkFlow",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-184",
          "routeurl": "",
          "levelid": "-184",
          "name": "多维度报销流程费用表",
          "pid": "-141",
          "id": "-184",
          "parentId": "-141",
          "url": "/spa/cube/index.html#/main/cube/search?customid=2192",
          "fullrouteurl": "/spa/cube/index.html#/main/cube/search?customid=2192",
          "mobxrouteurl": "",
          "target": "mainFrame"
        },
        {
          "infoId": "-226",
          "routeurl": "",
          "levelid": "-226",
          "name": "费控设置",
          "pid": "-141",
          "id": "-226",
          "parentId": "-141",
          "url": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetProgramMulit",
          "fullrouteurl": "/spa/fnaMulDimensions/static4engine/engine.html#/main/mulitBudget/basicManagement/budgetProgramMulit",
          "mobxrouteurl": "",
          "target": "mainFrame"
        }
      ]
    },
    {
      "infoId": "-163",
      "routeurl": "",
      "levelid": "-163",
      "name": "系统菜单地址",
      "pid": "0",
      "id": "-163",
      "parentId": "0",
      "url": "/spa/portal/static/index.html#/main/portal/portal-2-1",
      "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-2-1",
      "mobxrouteurl": "",
      "target": "mainFrame"
    },
    {
      "infoId": "-228",
      "routeurl": "",
      "levelid": "-228",
      "name": "test",
      "pid": "0",
      "id": "-228",
      "parentId": "0",
      "url": "",
      "fullrouteurl": "",
      "mobxrouteurl": "",
      "target": "mainFrame",
      "child": [
        {
          "infoId": "-229",
          "routeurl": "",
          "levelid": "-229",
          "name": "11111111",
          "pid": "-228",
          "id": "-229",
          "parentId": "-228",
          "url": "",
          "fullrouteurl": "/spa/workflow/index_mobx.jsp#/main/workflow/queryFlowResult?fromwhere=jsonFilter&jsonstr=%7B%EF%BC%82flowids%EF%BC%82%3A%5B%EF%BC%821731%EF%BC%82%2C%EF%BC%821732%EF%BC%82%2C%EF%BC%821731%EF%BC%82%2C%EF%BC%822046%EF%BC%82%2C%EF%BC%821732%EF%BC%82%5D%2C%EF%BC%82viewType%EF%BC%82%3A%EF%BC%821%EF%BC%82%2C%EF%BC%82typeids%EF%BC%82%3A%5B%EF%BC%82231%EF%BC%82%2C%EF%BC%82232%EF%BC%82%5D%2C%EF%BC%82isExclude%EF%BC%82%3A0%2C%EF%BC%82showView%EF%BC%82%3A1%7D",
          "mobxrouteurl": "",
          "target": "mainFrame"
        }
      ]
    }
  ],
  "api_deal_time": 247
}
```

---

### 12. 获取多新闻中心元素设置信息和数据方法

> **补充说明**：获取多新闻中心元素设置信息和数据方法

- **接口路径 (Endpoint)**: `/api/portal/element/morenews`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取多新闻中心元素设置信息和数据方法`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型Id |  |
| `eid` | `String` | **是** | 当前元素id |  |
| `hpid` | `String` | **是** | 门户Id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应示例 (Response Example)

```json
{}
```

---

### 13. 获取多新闻中心元素设置信息和数据方法

> **补充说明**：获取多新闻中心元素设置信息和数据方法

- **接口路径 (Endpoint)**: `/api/portal/element/coremail`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取多新闻中心元素设置信息和数据方法`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型Id |  |
| `eid` | `String` | **是** | 当前元素id |  |
| `hpid` | `String` | **是** | 门户Id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部Id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `eid` | `String` | 当前元素id |
| `esetting` | `Json` | 元素设置信息 |
| `fieldcolumnList` | `Json` | 列信息 |
| `fieldcolumnwidths` | `Json` | 显示信息 |

#### 响应示例 (Response Example)

```json
{
  "eid": "110321",
  "fieldcolumnList": [],
  "fieldcolumnwidths": {},
  "esetting": {
    "eContentShowUnreadList": "1",
    "eContentLinkMode": "1",
    "eContentCoreMailPerpage": "5",
    "eContentHintText": "您有 $NoReadCnt$ 封未读邮件，$LoginLinkStart$请登录查看$LoginLinkEnd$！",
    "eContentTitle": "CoreMail邮箱",
    "eContentSingleSignOn": "",
    "eContentShowPromptInformation": "1",
    "eContentUnreadMailQuantityColor": "#ff0000",
    "eContentSingleSignOnLinkColor": "#009aff"
  }
}
```

---

### 14. 获取工具栏更多菜单

- **接口路径 (Endpoint)**: `/api/portal/toolbarMore/getToolbarMoreMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取工具栏更多菜单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `menutype` | `String` | 否 | 菜单类型 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 接口数据 |
| `icon` | `String` | 图标 |
| `id` | `String` | id |
| `linkmode` | `String` | 打开方式 |
| `name` | `String` | 名称 |
| `type` | `String` | 类型 |
| `url` | `String` | 打开地址 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "linkmode": "0",
      "name": "后端应用中心",
      "icon": "wevicon-toolbar-more-1",
      "id": 1,
      "type": "sys",
      "url": "/wui/engine.html"
    },
    {
      "linkmode": "1",
      "name": "e-mobile",
      "icon": "wevicon-toolbar-more-11",
      "id": 19,
      "type": "sys",
      "url": "http://192.168.7.224:8999/emdownload"
    },
    {
      "linkmode": "1",
      "name": "插件下载",
      "icon": "wevicon-toolbar-more-3",
      "id": 3,
      "type": "sys",
      "url": "/weaverplugin/PluginMaintenance.jsp"
    },
    {
      "linkmode": "1",
      "name": "授权信息",
      "icon": "wevicon-toolbar-more-5",
      "id": 5,
      "type": "sys",
      "url": "/hrm/HrmTab.jsp?_fromURL=licenseInfo"
    },
    {
      "linkmode": "1",
      "name": "版本",
      "icon": "wevicon-toolbar-more-6",
      "id": 6,
      "type": "sys",
      "url": "/systeminfo/version.jsp"
    }
  ]
}
```

---

### 15. 获取工具栏菜单

- **接口路径 (Endpoint)**: `/api/portal/toolbar/getToolbarMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取工具栏菜单`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 接口数据 |
| `icon` | `String` | 图标 |
| `key` | `String` | 唯一标识 |
| `name` | `String` | 名称 |
| `opentype` | `String` | 打开方式 |
| `type` | `String` | 类型 |
| `url` | `String` | 打开地址 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "name": "消息中心ss",
      "icon": "wevicon-toolbar-remind",
      "type": "message",
      "key": "more_17",
      "url": "",
      "opentype": "1"
    },
    {
      "name": "收藏夹",
      "icon": "wevicon-toolbar-fav",
      "type": "fav",
      "key": "more_18",
      "url": "",
      "opentype": "1"
    }
  ]
}
```

---

### 16. 获取当前账号和多账号列表

- **接口路径 (Endpoint)**: `/api/portal/account/getAccount`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取当前账号和多账号列表`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `accountlist` | `Json` | 多账号列表 |
| `data` | `Json` | 用户账号信息和多账号列表 |
| `deptid` | `String` | 用户部门id |
| `deptname` | `String` | 用户部门名称 |
| `icon` | `String` | 用户头像 |
| `jobs` | `String` | 用户岗位 |
| `subcompanyid` | `String` | 用户分部id |
| `subcompanyname` | `String` | 用户分部名称 |
| `userid` | `String` | 用户id |
| `username` | `String` | 用户名 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "accountlist": [
      {
        "subcompanyid": 0,
        "jobs": "",
        "icon": "/messager/images/icon_m_wev8.jpg",
        "deptid": 0,
        "subcompanyname": "",
        "iscurrent": "1",
        "userid": "1",
        "username": "系统管理员",
        "deptname": ""
      }
    ],
    "subcompanyid": 0,
    "jobs": "",
    "icon": "/messager/images/icon_m_wev8.jpg",
    "deptid": 0,
    "subcompanyname": "",
    "iscurrent": "1",
    "userid": "1",
    "deptname": "",
    "userLanguage": "7",
    "showSearch": false,
    "showMore": true,
    "username": "系统管理员",
    "fontSetting": true
  }
}
```

---

### 17. 获取快捷搜索类型

- **接口路径 (Endpoint)**: `/api/portal/quickSearch/getQuickSearchTypes`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取快捷搜索类型`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `contentType` | `String` | 模块 |
| `data` | `Json` | 接口数据 |
| `icon` | `String` | 图标 |
| `name` | `String` | 名称 |
| `type` | `String` | 类型 |
| `url` | `String` | 搜索地址 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "name": "文档",
      "icon": "wevicon-quick-search-1",
      "type": "1",
      "contentType": "DOC",
      "url": "/spa/document/static/index.html#/main/document/search?viewcondition=2&docsubject="
    },
    {
      "name": "微搜",
      "icon": "wevicon-quick-search-9",
      "type": "9",
      "contentType": "",
      "url": "/spa/esearch/static/index.html#/main/esearch/result?searchType=CONTENT&type=ALL&value="
    },
    {
      "name": "人员",
      "icon": "wevicon-quick-search-2",
      "type": "2",
      "contentType": "RSC",
      "url": "/spa/hrm/index_mobx.html#/main/hrm/addressbook?from=quickSearch&lastname="
    },
    {
      "name": "客户",
      "icon": "wevicon-quick-search-3",
      "type": "3",
      "contentType": "CRM",
      "url": "/spa/crm/static/index.html#/main/crm/customer/customerSearchResult?name="
    },
    {
      "name": "协作",
      "icon": "wevicon-quick-search-8",
      "type": "8",
      "contentType": "COW",
      "url": "/spa/cowork/static/index.html#/main/cowork/main?name="
    },
    {
      "name": "邮件",
      "icon": "wevicon-quick-search-7",
      "type": "7",
      "contentType": "EMAIL",
      "url": "/spa/email/static/index.html#/main/email/inbox?menu_folderid=0&folderid=0&subject="
    },
    {
      "name": "项目",
      "icon": "wevicon-quick-search-6",
      "type": "6",
      "contentType": "PRJ",
      "url": "/spa/prj/index.html#/main/prj/queryProjectResult?name="
    },
    {
      "name": "资产",
      "icon": "wevicon-quick-search-4",
      "type": "4",
      "contentType": "CPT",
      "url": "/spa/cpt/index.html#/main/cpt/searchResult?name="
    },
    {
      "name": "流程",
      "icon": "wevicon-quick-search-5",
      "type": "cus",
      "contentType": "",
      "url": "/spa/workflow/static/index.html#/main/workflow/queryFlowResult?from=quickSearch&fromwhere=urlFilter&requestname="
    },
    {
      "name": "111",
      "icon": "icon-portal-integration",
      "type": "cus",
      "contentType": "",
      "url": "11"
    },
    {
      "name": "哈哈哈",
      "icon": "",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=1388&con_42542="
    },
    {
      "name": "11",
      "icon": "",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=2099&con_64023="
    },
    {
      "name": "工具wyf",
      "icon": "",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=1648&con_50038="
    },
    {
      "name": "测试11111",
      "icon": "/weaver/weaver.file.FileDownload?fileid=a2633f19b9eae8f04b7214470e2daeabc8b937954596d57cf3d9479e334e5ec756d41b7c7bfb45e23fc64fffb933215ae4bfb233ecb9ca5ba",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=2113&con_24919="
    },
    {
      "name": "1",
      "icon": "",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=2205&con_67880="
    },
    {
      "name": "文本",
      "icon": "/weaver/weaver.file.FileDownload?fileid=a06103d2e98500885b019027eefcf5dba19dda92b6ddc83f0b562eb13f0590fe9806672749a3e0458f8a31e592d9d603e4bfb233ecb9ca5ba&f_weaver_belongto_userid=1&f_weaver_belongto_usertype=0",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=2402&con_72607="
    },
    {
      "name": "文本",
      "icon": "/weaver/weaver.file.FileDownload?fileid=a5c7f2944008827c3f322ff16c1a2d44bfcc2a92a1e75d451b9559a4208e4d04e30ab02cec033217ed7763fde5b4ab3474bfb233ecb9ca5ba&f_weaver_belongto_userid=1&f_weaver_belongto_usertype=0",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=2404&con_72622="
    },
    {
      "name": "简要描述",
      "icon": "",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=2751&con_83701="
    },
    {
      "name": "搜索名称",
      "icon": "/weaver/weaver.file.FileDownload?fileid=aeef5db40e7f7ab64db9e6a40eb30e379ef159d2c1dbb474ef66e0425d26217780cf8a24de3cb56f0a3e3d69b8f7296d14bfb233ecb9ca5ba",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=73&con_7939="
    },
    {
      "name": "建模测试",
      "icon": "/weaver/weaver.file.FileDownload?fileid=a9f3dd1f7a776350ce5fd260e32e724c2b45973d87b5b482a162cb55262a30d173cadf41f46874b10e9da1d35e35171e44bfb233ecb9ca5ba",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=152&con_9836="
    },
    {
      "name": "测试11111",
      "icon": "/weaver/weaver.file.FileDownload?fileid=a2633f19b9eae8f04b7214470e2daeabc8b937954596d57cf3d9479e334e5ec756d41b7c7bfb45e23fc64fffb933215ae4bfb233ecb9ca5ba",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=730&con_24919="
    },
    {
      "name": "中国",
      "icon": "/weaver/weaver.file.FileDownload?fileid=ac8ba1fa204f26bebaf51289ae0cb1c93526f531fb2dcf3726e5fb115cd0e1d61d940618d961eff68c43b43534ef6b7df4bfb233ecb9ca5ba",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=765&con_24694="
    },
    {
      "name": "1",
      "icon": "/weaver/weaver.file.FileDownload?fileid=ae2645277b69acf409b31448903ece4cd7d93d859c1be0e8cc5578ce838ee310b021b06a0d696c451c43b43534ef6b7df4bfb233ecb9ca5ba",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=1144&con_34144="
    },
    {
      "name": "lchun搜索",
      "icon": "/weaver/weaver.file.FileDownload?fileid=a07e60e66cb5e4f2ea4074b259e26ba6b1ad27bfe11947dcd6894598d19fead8c888c9b4e5d41fc96e13265d25e85a1a84bfb233ecb9ca5ba",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=1159&con_34377="
    },
    {
      "name": "aaa",
      "icon": "",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=1305&con_38540="
    },
    {
      "name": "dsasdsads",
      "icon": "",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=1309&con_38708="
    },
    {
      "name": "lchun小地球查询",
      "icon": "/weaver/weaver.file.FileDownload?fileid=ace4c8b802394f9047320fea6426ab78132abd25ea6c5807d377356d0643b6050b89904b33f8ff8a335bd85090e1e92d64bfb233ecb9ca5ba&f_weaver_belongto_userid=1&f_weaver_belongto_usertype=0",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=1359&con_41277="
    },
    {
      "name": "lchun小地球树",
      "icon": "/weaver/weaver.file.FileDownload?fileid=a8ed5ff3f6892161be039b4f1a9bf9cac6a8ace044934e400246f119ed2fc1f4424aa90a73d621d62a3e3d69b8f7296d14bfb233ecb9ca5ba&f_weaver_belongto_userid=1&f_weaver_belongto_usertype=0",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/tree?id=339&defaultHideLeft=1&treehavekeyword=false&datasqlwhere=1%3D2&fromToolBar=1&quickSearchValue="
    },
    {
      "name": "324",
      "icon": "/weaver/weaver.file.FileDownload?fileid=a68633e1df54ccfe1b83e18b2a0315f2f61927ee773212726db79ff4dc7864b4b6a59540a482f2ad7d298c29be2f93fa44bfb233ecb9ca5ba&f_weaver_belongto_userid=1&f_weaver_belongto_usertype=0",
      "type": "10",
      "contentType": "",
      "url": "/spa/cube/index.html#/main/cube/search?customid=733&con_24945="
    }
  ]
}
```

---

### 18. 获取快捷搜索类型

- **接口路径 (Endpoint)**: `/api/portal/quickSearchMaintenance/getQuickSearchTypes`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取快捷搜索类型`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 接口数据 |
| `icon` | `String` | 图标 |
| `id` | `String` | id |
| `issys` | `String` | 是否系统类型 |
| `isuse` | `String` | 是否启用 |
| `module` | `String` | 模块 |
| `name` | `String` | 名称 |
| `ordernum` | `String` | 排序 |
| `right_status` | `Int` | 权限状态，1为有权限，-1为无权限 |
| `showquicksearch` | `String` | 是否显示快捷搜索 |
| `url` | `String` | 搜索地址 |

#### 响应示例 (Response Example)

```json
{
  "showquicksearch": "1",
  "data": [
    {
      "isuse": "1",
      "module": "doc",
      "name": "~`~`7 文档`~`8 DOC`~`~",
      "icon": "wevicon-quick-search-1",
      "ordernum": 1,
      "id": 4,
      "url": "/spa/document/static/index.html#/main/document/search?viewcondition=2&docsubject=",
      "issys": "1"
    },
    {
      "isuse": "1",
      "module": "ws",
      "name": "微搜",
      "icon": "wevicon-quick-search-9",
      "ordernum": 2,
      "id": 1,
      "url": "/spa/esearch/static/index.html#/main/esearch/result?searchType=CONTENT&type=ALL&value=",
      "issys": "1"
    },
    {
      "isuse": "1",
      "module": "hrm",
      "name": "人员",
      "icon": "wevicon-quick-search-2",
      "ordernum": 3,
      "id": 2,
      "url": "/spa/hrm/index_mobx.html#/main/hrm/addressbook?from=quickSearch&lastname=",
      "issys": "1"
    },
    {
      "isuse": "1",
      "module": "crm",
      "name": "客户",
      "icon": "wevicon-quick-search-3",
      "ordernum": 4,
      "id": 5,
      "url": "/spa/crm/static/index.html#/main/crm/customer/customerSearchResult?name=",
      "issys": "1"
    },
    {
      "isuse": "1",
      "module": "cwork",
      "name": "协作",
      "icon": "wevicon-quick-search-8",
      "ordernum": 5,
      "id": 6,
      "url": "/spa/cowork/static/index.html#/main/cowork/main?name=",
      "issys": "1"
    },
    {
      "isuse": "1",
      "module": "email",
      "name": "邮件",
      "icon": "wevicon-quick-search-7",
      "ordernum": 6,
      "id": 7,
      "url": "/spa/email/static/index.html#/main/email/inbox?menu_folderid=0&folderid=0&subject=",
      "issys": "1"
    },
    {
      "isuse": "1",
      "module": "proj",
      "name": "项目",
      "icon": "wevicon-quick-search-6",
      "ordernum": 7,
      "id": 8,
      "url": "/spa/prj/index.html#/main/prj/queryProjectResult?name=",
      "issys": "1"
    },
    {
      "isuse": "1",
      "module": "cpt",
      "name": "资产",
      "icon": "wevicon-quick-search-4",
      "ordernum": 8,
      "id": 9,
      "url": "/spa/cpt/index.html#/main/cpt/searchResult?name=",
      "issys": "1"
    },
    {
      "isuse": "1",
      "module": "workflow",
      "name": "流程",
      "icon": "wevicon-quick-search-5",
      "ordernum": 9,
      "id": 10,
      "url": "/spa/workflow/static/index.html#/main/workflow/queryFlowResult?from=quickSearch&fromwhere=urlFilter&requestname=",
      "issys": "0"
    },
    {
      "isuse": "1",
      "module": "ll",
      "name": "111",
      "icon": "icon-portal-integration",
      "ordernum": 10,
      "id": 12,
      "url": "11",
      "issys": "0"
    }
  ],
  "right_status": 1
}
```

---

### 19. 获取我的主题

- **接口路径 (Endpoint)**: `/api/portal/themeCenter/getMyTheme`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取我的主题`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 接口数据 |
| `themeAppoint` | `Bool` | 是否指定主题 |
| `themeData` | `String` | 主题数据 |
| `themeFontSize` | `String` | 主题字体带下 |
| `themeLayoutType` | `String` | 主题布局 |
| `themeLogo` | `String` | 主题LOGO |
| `themeLogoName` | `String` | 主题LOGO名称 |
| `themeTitle` | `String` | 主题标题 |
| `themeType` | `String` | 主题类型 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "themeLogo": "",
    "themeData": {
      "preview": "/wui/theme/ecology9/image/colors/16.png",
      "styleConfig": "{\"header\":{\"color\":\"#fff\",\"fontSize\":\"12px\",\"fontFamily\":\"微软雅黑\",\"background\":\"#d5a846\"},\"toplogo\":{\"color\":\"#d53f3f\",\"fontSize\":\"14px\",\"fontFamily\":\"华文琥珀\",\"background\":\"#b09f91\"},\"frequsemenu\":{\"background\":\"rgba(0, 0, 0, 0.08)\",\"hoverBackground\":\"rgba(0, 0, 0, 0.14)\"},\"quicksearch\":{\"background\":\"rgba(0, 0, 0, 0.08)\",\"hoverBackground\":\"rgba(0, 0, 0, 0.14)\"},\"leftmenuswitch\":{\"color\":\"rgba(112, 75, 88, 0.6)\",\"background\":\"#cfab30\"},\"leftmenu\":{\"iconstyle\":\"solid\",\"color\":\"#fff\",\"background\":\"#fff\",\"iconColor\":\"#b79da6\",\"titleColor\":\"#825363\",\"titleFontSize\":\"12px\",\"titleFontFamily\":\"微软雅黑\",\"selectedIconColor\":\"#fff\",\"selectedTitleColor\":\"#fff\",\"selectedTitleBackground\":\"#c4bb35\",\"vColor\":\"#5a2034\",\"vBackground\":\"#e0cad0\",\"vSelectedIconColor\":\"#fff\",\"vSelectedTitleColor\":\"#fff\",\"vSelectedTitleBackground\":\"#943b58\"}}",
      "name": "hutest-橙色",
      "id": "16",
      "type": "cus"
    },
    "themeTitle": "高效源于协同9",
    "themeLogoName": "e-cology | 前端用户中心",
    "themeAppoint": false,
    "themeFontSize": "12",
    "themeLayoutType": "1",
    "themeType": "ecology9"
  }
}
```

---

### 20. 获取用户常用菜单数据

> **补充说明**：获取用户常用菜单数据

- **接口路径 (Endpoint)**: `/api/portal/frequsemenu/getdata`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取用户常用菜单数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `parentid` | `String` | **是** | 传入固定值0 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `id` | `String` | id |
| `key` | `String` | key值 |
| `linktype` | `String` | 打开方式 0默认窗口 1弹出窗口 |
| `menuid` | `String` | 菜单id |
| `menulink` | `String` | 链接地址 |
| `menuname` | `String` | 菜单名称 |
| `menunamemultlang` | `String` | 语言 |
| `menutype` | `String` | 菜单类型 |
| `mType` | `String` | 菜单类型 left前端 Top后端  custom自定义 |
| `parentId` | `String` | 父id |

#### 响应示例 (Response Example)

```json
[
  {
    "menuname": "待办事宜",
    "menulink": "/spa/workflow/index_mobx.jsp#/main/workflow/add?%7B%22flowids%22%3A%5B%221731%22%2C%221732%22%2C%221134%22%2C%221883%22%2C%221733%22%2C%221880%22%2C%221879%22%2C%221731%22%2C%222046%22%2C%221732%22%2C%221134%22%2C%221883%22%2C%221733%22%2C%221880%22%2C%221879%22%5D%2C%22viewType%22%3A%221%22%2C%22typeids%22%3A%5B%22231%22%2C%22232%22%2C%22111%22%5D%2C%22isExclude%22%3A0%7D",
    "menutype": "2",
    "linktype": "1",
    "id": "2297",
    "key": 0,
    "menunamemultlang": "待办事宜",
    "parentId": ""
  },
  {
    "menuname": "新建客户",
    "menulink": "/spa/crm/mobx/index.html#/main/crm/addCustomer",
    "menutype": "0",
    "linktype": "0",
    "id": "2298",
    "key": 1,
    "menunamemultlang": "新建客户",
    "parentId": ""
  },
  {
    "menuname": "通讯录",
    "menulink": "/spa/hrm/index_mobx.html#/main/hrm/addressBook",
    "menutype": "0",
    "linktype": "0",
    "id": "2299",
    "key": 2,
    "menunamemultlang": "通讯录",
    "parentId": ""
  },
  {
    "menuname": "新建文档",
    "menulink": "/spa/document/static/index.html#/main/document/add?secid=211,88,89,90,91,123,137,87,119",
    "menutype": "2",
    "linktype": "0",
    "id": "2300",
    "key": 3,
    "menunamemultlang": "新建文档",
    "parentId": ""
  },
  {
    "menuname": "新建流程",
    "menulink": "/spa/workflow/index_mobx.jsp#/main/workflow/add?wfTypeRange=88&wfRange=1511,1528,1510,1527,911,1499,1497,1498,1182",
    "menutype": "2",
    "linktype": "0",
    "id": "2301",
    "key": 4,
    "menunamemultlang": "新建流程",
    "parentId": ""
  },
  {
    "menuname": "https://www.baidu.com",
    "menulink": "https://www.baidu.com",
    "menutype": "1",
    "linktype": "1",
    "id": "2302",
    "key": 5,
    "menunamemultlang": "~`~`7 百度`~`9 百度`~`~",
    "parentId": ""
  },
  {
    "menuname": "协作交流",
    "menulink": "/spa/cowork/static/index.html#/main/cowork/main",
    "menutype": "0",
    "linktype": "0",
    "id": "2303",
    "key": 6,
    "menunamemultlang": "~`~`7 协作`~`9 協作`~`~",
    "parentId": ""
  },
  {
    "menuname": "待办事宜",
    "menulink": "/spa/workflow/index_mobx.jsp#/main/workflow/listDoing",
    "menutype": "0",
    "linktype": "0",
    "id": "2304",
    "key": 7,
    "menunamemultlang": "~`~`7 待办事宜1`~`9 待辦事宜1`~`~",
    "parentId": ""
  },
  {
    "menuname": "数据中心",
    "menulink": "/main/edc/app",
    "menutype": "0",
    "linktype": "0",
    "id": "2305",
    "key": 8,
    "menunamemultlang": "数据中心",
    "parentId": ""
  },
  {
    "menuname": "新建文档",
    "menulink": "/docs/search/DocSearchTab.jsp?_fromURL=4",
    "menutype": "0",
    "linktype": "0",
    "id": "2306",
    "key": 9,
    "menunamemultlang": "新建文档",
    "parentId": ""
  },
  {
    "menuname": "新建流程",
    "menulink": "/spa/workflow/index_mobx.jsp#/main/workflow/add?wfTypeRange=247&wfRange=1816,1833,1839,1840,1842,1843,1844,1838,1837,1836,1972,1945",
    "menutype": "2",
    "linktype": "0",
    "id": "2307",
    "key": 10,
    "menunamemultlang": "新建流程",
    "parentId": ""
  },
  {
    "menuname": "我的邮件",
    "menulink": "/spa/email/static/index.html#/main/email/inbox?folderid=0",
    "menutype": "0",
    "linktype": "0",
    "id": "2308",
    "key": 11,
    "menunamemultlang": "我的邮件",
    "parentId": ""
  },
  {
    "menuname": "集成管理",
    "menulink": "/docengine/integration",
    "menutype": "0",
    "linktype": "0",
    "id": "2309",
    "key": 12,
    "menunamemultlang": "集成管理",
    "parentId": ""
  }
]
```

---

### 21. 获取登录前门户信息

- **接口路径 (Endpoint)**: `/api/portal/login/logininfo`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取登录前门户信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `templateId` | `String` | 否 | 登录前门户id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `bgImage` | `String` | 默认背景图片 |
| `bgImagesInfo` | `String` | 可选的背景图片 |
| `customElements` | `String` | 自定义元素 |
| `id` | `String` | 登录前门户id |
| `isDefault` | `String` | 是否默认的 |
| `isRememberPW` | `String` | 是否开启记住密码 |
| `labelInfo` | `String` | 标签信息 |
| `loginSettingInfo` | `String` | 登录页设置信息 |
| `loginTemplateTitle` | `String` | 浏览器标题 |
| `logoImage` | `String` | 登录页LOGO |
| `qrcode` | `String` | 登录页二维码 |
| `settingversion` | `String` | 设置版本 |
| `templateType` | `String` | 登录页类型 |

#### 响应示例 (Response Example)

```json
{
  "templateType": "E9",
  "settingversion": 24,
  "loginSettingInfo": {
    "loginForm": {
      "backgroundColor": "#0b1a32",
      "color": "#bacde0",
      "level": "center",
      "verticalMargin": 101,
      "vertical": "middle",
      "showtype": "loginForm",
      "rate_x": 0,
      "rate_y": 0,
      "isLock": true,
      "win_width": 1920,
      "win_height": 1080,
      "x": 0,
      "width": 324,
      "isAbsolute": "0",
      "y": 0,
      "levelMargin": 0,
      "height": 292
    },
    "qrcode": {
      "color": "#f5f7fa",
      "level": "center",
      "verticalMargin": 73,
      "vertical": "top",
      "showtype": "qrcode",
      "rate_x": 0,
      "rate_y": 0,
      "isLock": true,
      "win_width": 1920,
      "win_height": 1080,
      "x": 0,
      "width": 28,
      "isAbsolute": "0",
      "y": 0,
      "levelMargin": 198,
      "height": 28
    },
    "loginInfo": {
      "autoCarousel": false,
      "bgColor": "",
      "showBgImageBox": true,
      "width": 3000,
      "carouselTime": 3,
      "bgOpacity": 1,
      "fillStyle": "stretch",
      "showQrcode": true,
      "imgsrc": "/wui/theme/ecology9/image/bg1.jpg",
      "height": 1875
    }
  },
  "customElements": [
    {
      "original_width": 444,
      "rotate": 0,
      "level": "center",
      "verticalMargin": 0,
      "vertical": "middle",
      "showtype": "loginbox",
      "type": "image",
      "rate_x": 0,
      "content": "/wui/theme/ecology9/image/login-box.png",
      "rate_y": 0,
      "isLock": true,
      "win_width": 1920,
      "win_height": 1080,
      "x": 0,
      "width": 444,
      "isAbsolute": "0",
      "y": 0,
      "original_height": 587,
      "levelMargin": 0,
      "opacity": 100,
      "height": 587
    },
    {
      "original_width": 170,
      "rotate": 0,
      "level": "center",
      "verticalMargin": -157,
      "vertical": "middle",
      "showtype": "logo",
      "type": "image",
      "rate_x": 0,
      "content": "/wui/theme/ecology9/image/e9.png",
      "rate_y": 0,
      "isLock": true,
      "win_width": 1920,
      "win_height": 1080,
      "x": 0,
      "width": 170,
      "isAbsolute": "0",
      "y": 0,
      "original_height": 130,
      "levelMargin": 0,
      "opacity": 100,
      "height": 130
    }
  ],
  "labelInfo": {
    "langid27": {
      "fh": "Return",
      "rememberAccount": "remember me",
      "rememberPassword": "remember password",
      "forgetPassword": "forget password",
      "qrcode": "Please use e-mobile to scan QR codes to log on",
      "validateCode": "please enter the verification code",
      "login": "Login",
      "password": "password",
      "tokenKey": "Dynamic token password",
      "resend": "Resend",
      "smdl": "Scan QR",
      "send": "Get dynamic password",
      "account": "account"
    },
    "langid9": {
      "fh": "返回",
      "rememberAccount": "記住帳號",
      "rememberPassword": "記住密碼",
      "forgetPassword": "忘記密碼",
      "qrcode": "請使用e-mobile掃描二維碼以登錄",
      "validateCode": "請輸入驗證碼",
      "login": "登錄",
      "password": "密碼",
      "tokenKey": "動态令牌口令",
      "resend": "重新發送",
      "smdl": "掃碼登錄",
      "send": "獲取動態密碼",
      "account": "賬号"
    },
    "langid8": {
      "fh": "Return ",
      "rememberAccount": "remember me ",
      "rememberPassword": "remember password ",
      "forgetPassword": "forget password ",
      "qrcode": "Please use e-mobile to scan QR codes to log on ",
      "validateCode": "please enter the verification code ",
      "login": "Login ",
      "password": "password ",
      "tokenKey": "Dynamic token password ",
      "resend": "Resend ",
      "smdl": "Scan QR ",
      "send": "Get dynamic password ",
      "account": "account "
    },
    "langid7": {
      "fh": "返回",
      "rememberAccount": "记住账号",
      "rememberPassword": "记住密码",
      "forgetPassword": "忘记密码",
      "qrcode": "请使用e-mobile扫描二维码以登录",
      "validateCode": "请输入验证码",
      "login": "登录",
      "password": "密码",
      "tokenKey": "动态令牌口令",
      "resend": "重新发送",
      "smdl": "扫码登录",
      "send": "获取动态密码",
      "account": "账号"
    }
  },
  "qrcode": {
    "loginkey": "2a9cebcf-7df6-4cb2-be38-606114d6111c",
    "text": "ecologylogin:2a9cebcf-7df6-4cb2-be38-606114d6111c,actionName:QR_LOGIN,randomNumber:412997871,bizSN:-1,em_sys_id:d57dfc49654345999d17d9c8dc3fbb32"
  },
  "loginTemplateTitle": "泛微协同商务系统",
  "recordcode": "",
  "bgImage": "",
  "isDefault": false,
  "logoImage": "",
  "bgImagesInfo": [
    {
      "width": 3000,
      "imgsrc": "/wui/theme/ecology9/image/bg1.jpg",
      "height": 1875
    },
    {
      "width": 2000,
      "imgsrc": "/wui/theme/ecology9/image/bg2.jpg",
      "height": 1333
    },
    {
      "width": 2880,
      "imgsrc": "/wui/theme/ecology9/image/bg3.jpg",
      "height": 1920
    },
    {
      "width": 2560,
      "imgsrc": "/wui/theme/ecology9/image/bg4.jpg",
      "height": 1568
    },
    {
      "width": 3000,
      "imgsrc": "/wui/theme/ecology9/image/bg5.jpg",
      "height": 2000
    }
  ],
  "isRememberPW": "1",
  "id": "2"
}
```

---

### 22. 获取系统版本

- **接口路径 (Endpoint)**: `/api/portal/systemInfo/getVersion`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取系统版本`

#### 请求参数 (Request Parameters)

无特定请求参数（仅需通用请求头认证）。

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `companyname` | `String` | 授权公司名称 |
| `cversion` | `String` | 系统版本 |
| `data` | `Json` | 接口数据 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "msg4": "警告:本计算机程序受著作权法和国际公约的保护，未经授权擅自复制或散布本程序的部分或全部，将承受严厉的民事和刑事处罚，对已知的违反者将给予法律范围内的全面制裁。",
    "msg3": "weaver e-cology、泛微司标均是上海泛微网络科技股份有限公司商标，Windows、NT、Java等均是各相关公司的商标或注册商标。",
    "website": "www.weaver.com.cn",
    "msg2": "本软件的版权属于上海泛微网络科技股份有限公司，未经泛微公司的授权许可不得擅自发布或使用该软件。",
    "copyright": "Shanghai Weaver Network Co., Ltd",
    "msg1": "本软件是基于J2EE的各种技术，B/S模式的三层结构设计完成的，由上海泛微网络科技股份有限公司独立开发。",
    "label1": "版本",
    "label2": "授权用户",
    "label3": "泛微网站",
    "label4": "版权所有",
    "companyname": "E9TEST",
    "logo": "/images_face/version/logo_wev8.png",
    "cversion": "9.00.1907.00"
  }
}
```

---

### 23. 获取账号菜单

- **接口路径 (Endpoint)**: `/api/portal/account/getAccountMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取账号菜单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `menutype` | `String` | 否 | 菜单类型 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 账号菜单 |
| `icon` | `String` | 菜单图标 |
| `id` | `String` | 菜单id |
| `name` | `String` | 菜单名称 |
| `sType` | `String` | 菜单类型 |
| `url` | `String` | 菜单地址 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "sType": "font",
      "linkmode": "1",
      "name": "字体设置",
      "icon": "icon-coms-text",
      "id": 1,
      "url": ""
    },
    {
      "sType": "language",
      "linkmode": "1",
      "name": "选择语言",
      "icon": "icon-coms-language",
      "id": 1,
      "url": ""
    },
    {
      "sType": "custom",
      "linkmode": "2",
      "name": "个性化设置",
      "icon": "wevicon-account-setting",
      "id": 1,
      "url": "/spa/customSetting/index.html#/customsetting"
    },
    {
      "sType": "password",
      "linkmode": "2",
      "name": "修改密码",
      "icon": "wevicon-account-password",
      "id": 1,
      "url": "/spa/hrm/index_mobx.html#/main/hrm/password"
    },
    {
      "sType": "theme",
      "linkmode": "1",
      "name": "主题中心",
      "icon": "wevicon-account-skin",
      "id": 1,
      "url": ""
    },
    {
      "sType": "layout",
      "linkmode": "1",
      "name": "布局选择",
      "icon": "icon-coms-plate",
      "id": 1,
      "url": ""
    },
    {
      "sType": "logout",
      "linkmode": "1",
      "name": "退出",
      "icon": "wevicon-account-logout",
      "id": 1,
      "url": ""
    }
  ]
}
```

---

### 24. 获取通告栏元素设置信息和数据方法

> **补充说明**：获取通告栏元素设置信息和数据方法

- **接口路径 (Endpoint)**: `/api/portal/element/notice`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取通告栏元素设置信息和数据方法`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型Id |  |
| `eid` | `String` | **是** | 当前元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回信息 |
| `data:content` | `String` | 内容 |
| `data:direction` | `String` | 滚动方向 |
| `data:img` | `String` | 图片 |
| `data:onlytext` | `String` | 纯文本 |
| `data:scrollDelay` | `String` | 延迟 |
| `data:title` | `String` | 标题 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "img": "/page/element/notice/resource/image/notice_wev8.gif",
    "onlytext": "yes",
    "title": "测试标题",
    "content": "",
    "direction": "left",
    "scrollDelay": "200"
  }
}
```

---

### 25. 获取门户【RSS】元素列表信息

> **补充说明**：获取门户【RSS】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/rsstab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【RSS】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |
| `tabid` | `String` | **是** | 当前tab页id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回的信息 |
| `data:createdate` | `String` | 创建日期 |
| `data:createtime` | `String` | 创建时间 |
| `data:subject:link` | `String` | 链接 |
| `data:subject:name` | `String` | 名称 |
| `tabsetting` | `Json` | 设置信息 |
| `tabsetting:readType` | `String` | 读取方式 |
| `tabwidth` | `String` | tab页宽度 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "subject": {
        "name": "Melody dew富勒烯轻氧精华面膜 你的日常保湿神器 ",
        "link": "http://business.sohu.com/20190813/n452048170.shtml"
      },
      "createdate": "2019-08-13",
      "createtime": "13:39:00"
    },
    {
      "subject": {
        "name": "6月12日全球滑板动态,Dew Tour现场曝光 ",
        "link": "http://m.sohu.com/a/320041817_120165880"
      },
      "createdate": "2019-06-12",
      "createtime": "14:20:42"
    },
    {
      "subject": {
        "name": "Stuart Dew和Sarah Cumming在出售North Bondi房屋后走上了新的...",
        "link": "http://news.0551fangchan.com/2019-03-25/0325760.html"
      },
      "createdate": "2019-03-25",
      "createtime": "08:52:48"
    },
    {
      "subject": {
        "name": "民族自豪 中国荣耀 HoneyDew荣登世界第一屏纳斯达克",
        "link": "http://life.china.com.cn/2019-03/13/content_40685887.html"
      },
      "createdate": "2019-03-13",
      "createtime": "10:03:41"
    },
    {
      "subject": {
        "name": "药物开发平台Dewpoint A轮6000万美元 通和毓承参与投资",
        "link": "https://med.sina.com/article_detail_103_1_60290.html"
      },
      "createdate": "2019-02-01",
      "createtime": "15:48:15"
    }
  ],
  "tabsetting": {
    "readType": "2"
  },
  "tabwidth": "76"
}
```

---

### 26. 获取门户【RSS】元素列表信息

> **补充说明**：获取门户【RSS】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/rss`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【RSS】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素基本信息表中的id |  |
| `eid` | `String` | **是** | eid页面中元素的唯一key |  |
| `elementtype` | `String` | **是** | 元素模板类型 |  |
| `hpid` | `String` | **是** | 门户页面id |  |
| `styleid` | `String` | **是** | 门户元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 【RSS】元素列表信息数据 |
| `data:data` | `String` | 元素列表内容 |
| `data:tabsetting` | `String` | 读取方式 1客户端 2服务器 |
| `data:tabwidth` | `String` | tab页宽度 |
| `esetting` | `Json` | 【RSS】元素设置信息 |
| `esetting:ebaseid` | `String` | 元素基本信息表中的id |
| `esetting:eid` | `String` | eid页面中元素的唯一key |
| `esetting:linkmode` | `String` | 打开方式 |
| `esetting:tabwidth` | `String` | tab页宽度 |
| `params` | `Json` | 参数列表 |
| `tabids` | `Json` | 各个tab页的id |
| `titles` | `Json` | 各个tab页的标题 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "data": [
      {
        "subject": {
          "name": "英语的听说读写方法技巧,看这篇就够了",
          "link": "https://new.qq.com/omn/20191226/20191226A0JBZR00.html"
        }
      },
      {
        "subject": {
          "name": "赴美妈咪帮:听说,美国试管婴儿价格又调动了?",
          "link": "https://news.fh21.com.cn/ysxw/yjxw/6605023.html"
        }
      },
      {
        "subject": {
          "name": "听说化了妆的女孩子,武力值爆棚?我总结了这些",
          "link": "http://www.cctime.com/html/2019-12-26/1492466.htm"
        }
      },
      {
        "subject": {
          "name": "投资者提问:请问公司属于传统制造业吗。听说贵公司小时工资只有13...",
          "link": "https://finance.sina.cn/stock/relnews/dongmiqa/2019-12-26/detail-iihnzhfz8448173.d.html?vt=4&amp;pos=102"
        }
      },
      {
        "subject": {
          "name": "投资者提问:你好,听说你们接待的调研挺多的,不知道如何才能参与呢?",
          "link": "https://finance.sina.cn/stock/relnews/dongmiqa/2019-12-26/detail-iihnzahk0100578.d.html"
        }
      }
    ],
    "tabsetting": {
      "readType": "2"
    },
    "tabwidth": "76"
  },
  "tabids": [
    "1"
  ],
  "titles": [
    "听说"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "58130",
    "hpid": "444",
    "subCompanyId": 264,
    "tabsize": 1,
    "styleid": "synergys1",
    "ebaseid": "1"
  },
  "esetting": {
    "eid": "58130",
    "linkmode": "2",
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": {
      "subject": "*"
    },
    "methodvalue": "1",
    "tabwidth": "76",
    "ebaseid": "1",
    "isremind": ""
  }
}
```

---

### 27. 获取门户【个人数据】元素列表信息

> **补充说明**：获取门户【个人数据】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/datacenter`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【个人数据】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型 DataCenter |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 数据信息 |
| `data:color` | `String` | 颜色 |
| `data:label` | `String` | 页签 |
| `data:model` | `String` | model |
| `data:url` | `String` | url地址 |
| `data:value` | `String` | value值 |
| `esetting` | `Json` | 设置信息 |
| `esetting:eContentShowType` | `String` | 展现方式 |
| `esetting:linkmode` | `String` | 链接方式 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "color": "#2b5577",
      "model": "workflow",
      "label": "待办事宜",
      "value": "2",
      "url": "/spa/workflow/index_mobx.jsp#/main/workflow/listDoing?resourceid=1"
    },
    {
      "color": "#FFD200",
      "model": "capital",
      "label": "资产",
      "value": "0",
      "url": "/spa/cpt/index.html#/main/cpt/mycapital"
    },
    {
      "color": "#FD9000",
      "model": "cowork",
      "label": "协作",
      "value": "7",
      "url": "/spa/cowork/static/index.html#/main/cowork/hrmview?searchHrmid=1"
    },
    {
      "color": "#CB61FE",
      "model": "project",
      "label": "我的项目",
      "value": "77",
      "url": "/spa/prj/index.html#/main/prj/mineProject?search_resourceid=1"
    },
    {
      "color": "#6871E3",
      "model": "crm",
      "label": "我的客户",
      "value": "24",
      "url": "/spa/crm/static/index.html#/main/crm/customer/hrmView?searchHrmId=1"
    },
    {
      "color": "#56DE73",
      "model": "blog",
      "label": "我的微博",
      "value": "23",
      "url": "/spa/blog/static/index.html#/user/1"
    },
    {
      "color": "#FD2677",
      "model": "doc",
      "label": "我的文档",
      "value": "1844",
      "url": "/spa/document/static/index.html#/main/document/search?viewcondition=0"
    },
    {
      "color": "#6871E3",
      "model": "meetting",
      "label": "我的会议",
      "value": "0",
      "url": "/spa/meeting/static/index.html#/main/meeting/CalView"
    }
  ],
  "esetting": {
    "linkmode": "2",
    "eContentShowType": "0"
  }
}
```

---

### 28. 获取门户【人员看板元素】信息

> **补充说明**：获取门户【人员看板元素】信息

- **接口路径 (Endpoint)**: `/api/portal/element/hdpanel/getListData`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【人员看板元素】信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `eid` | `String` | **是** | 元素id |  |
| `hrmId` | `String` | 否 | 人员id |  |
| `objType` | `String` | **是** | 对象类型    如   0所有人  1本人 |  |
| `selectDate` | `String` | **是** | 日期 |  |
| `viewType` | `String` | **是** | 数据来源 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 请求是否成功 |
| `datas` | `Json` | 返回信息 |
| `end` | `String` | 结束时间 |
| `issort` | `String` | 是否排序 |
| `issystem` | `String` | 是否系统信息 |
| `ret` | `String` | 返回信息 |
| `start` | `String` | 开始时间 |

#### 响应示例 (Response Example)

```json
{
  "ret": "success",
  "datas": [
    "工作安排 第六批地铁志愿者:08:00-09:00  <a href=\"javaScript:openhrm(1);\" onclick='pointerXY(event);'>系统管理员</a> ",
    "工作安排 第六批地铁志愿者:08:00-09:00  <a href=\"javaScript:openhrm(1);\" onclick='pointerXY(event);'>系统管理员</a> ",
    "工作安排 第六批地铁志愿者:08:00-09:00  <a href=\"javaScript:openhrm(1);\" onclick='pointerXY(event);'>系统管理员</a> ",
    "工作安排 第六批地铁志愿者:08:00-09:00  <a href=\"javaScript:openhrm(1);\" onclick='pointerXY(event);'>系统管理员</a> ",
    "项目日程 任务1:00:00-23:59  <a href=\"javaScript:openhrm(9140);\" onclick='pointerXY(event);'>李妍-tw</a> ",
    "项目日程 3453:00:00-23:59  <a href=\"javaScript:openhrm(9140);\" onclick='pointerXY(event);'>李妍-tw</a> ",
    "项目日程 0802新建项目-fw01:00:00-23:59  <a href=\"javaScript:openhrm(1);\" onclick='pointerXY(event);'>系统管理员</a> ",
    "会议日程 是打发斯蒂芬但是发的是:17:00-22:29  <a href=\"javaScript:openhrm(31);\" onclick='pointerXY(event);'>lyx05</a> ",
    "工作安排 第六批地铁志愿者:08:00-09:00  <a href=\"javaScript:openhrm(1);\" onclick='pointerXY(event);'>系统管理员</a> "
  ],
  "start": "2019-08-12 00:00",
  "end": "2019-08-12 23:59",
  "api_status": true,
  "issystem": "1",
  "issort": "true"
}
```

---

### 29. 获取门户【人员看板元素】设置信息

> **补充说明**：获取门户【人员看板元素】设置信息

- **接口路径 (Endpoint)**: `/api/portal/element/hdpanel/getSettingDate`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【人员看板元素】设置信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `eid` | `String` | **是** | 元素id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 请求是否成功 |
| `canSet` | `Bool` | 是否可设置 |
| `hdpanel_data` | `Json` | 来源 |
| `hdpanel_data:id` | `String` | 来源Id |
| `hdpanel_data:name` | `String` | 来源名称 |
| `ret` | `String` | 状态 |

#### 响应示例 (Response Example)

```json
{
  "ret": "success",
  "api_status": true,
  "canSet": true,
  "hdpanel_data": [
    {
      "name": "日程自定义",
      "id": "28"
    }
  ]
}
```

---

### 30. 获取门户【会议日历】元素信息

> **补充说明**：获取门户【会议日历】元素信息

- **接口路径 (Endpoint)**: `/api/portal/element/meetingCalendar`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【会议日历】元素信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `eid` | `String` | **是** | 当前元素id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `meetingtype` | `String` | 显示内容类型 |

#### 响应示例 (Response Example)

```json
{
  "meetingtype": ""
}
```

---

### 31. 获取门户【便签元素】元素列表信息

> **补充说明**：获取门户【便签元素】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/scratchpad`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【便签元素】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id  scratchpad |  |
| `eid` | `String` | **是** | 元素Id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 便签信息 |
| `data:height` | `String` | 高度 |
| `data:text` | `String` | 内容 |
| `data:userid` | `String` | 用户Id |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "text": "",
    "userid": 31,
    "height": "200"
  }
}
```

---

### 32. 获取门户【公司新闻】元素信息

> **补充说明**：获取门户【公司新闻】元素信息

- **接口路径 (Endpoint)**: `/api/portal/element/loginnewstab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【公司新闻】元素信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型Id |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |
| `tabid` | `String` | **是** | tab页id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回新闻信息 |
| `more` | `String` | 更多信息 |
| `srcStyle` | `Json` | 样式信息 |
| `tabsetting` | `Json` | 设置信息 |
| `tabsetting:canEdit` | `String` | 是否可编辑 |
| `tabsetting:catalogId` | `String` | 来源id |
| `tabsetting:catalogIds` | `String` | 来源id |
| `tabsetting:height` | `String` | 高度 |
| `tabsetting:imgs` | `String` | 图片 |
| `tabsetting:openAttachment` | `String` | 是否直接打开附件 |
| `tabsetting:rollDirection` | `String` | 滚动方向 |
| `tabsetting:showModeId` | `String` | 显示方式 |
| `tabsetting:style` | `String` | 样式 |

#### 响应示例 (Response Example)

```json
{
  "data": [],
  "more": "{\"outNewsIds\":[\"27\"]}",
  "srcStyle": {},
  "tabsetting": {
    "imgs": [],
    "catalogId": "",
    "canEdit": false,
    "width": "0px",
    "showModeId": "1",
    "style": {},
    "rollDirection": "none",
    "openAttachment": "0",
    "catalogIds": "",
    "height": "0px"
  }
}
```

---

### 33. 获取门户【公司新闻】元素信息

> **补充说明**：获取门户【公司新闻】元素信息，登录前

- **接口路径 (Endpoint)**: `/api/portal/element/loginnews`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【公司新闻】元素信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id  news |  |
| `eid` | `String` | **是** | 当前元素id |  |
| `hpid` | `String` | **是** | 门户Id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 返回新闻信息 |
| `data:data` | `String` | 新闻数据 |
| `data:srcStyle:autoheight` | `String` | 样式  高度 |
| `data:srcStyle:pictureheight` | `String` | 样式  图片高度 |
| `data:srcStyle:picturewidth` | `String` | 样式  图片宽度 |
| `data:srcStyle:tabid` | `String` | tab页id |
| `data:tabsetting:canEdit` | `String` | 是否可编辑 |
| `data:tabsetting:catalogId` | `String` | 来源id |
| `data:tabsetting:catalogIds` | `String` | 来源id |
| `data:tabsetting:height` | `String` | 高度 |
| `data:tabsetting:imgs` | `String` | 图片 |
| `data:tabsetting:openAttachment` | `String` | 是否直接打开附件 |
| `data:tabsetting:rollDirection` | `String` | 滚动方向 |
| `data:tabsetting:showModeId` | `String` | 显示方式 |
| `data:tabsetting:style` | `String` | 样式 |
| `data:tabsetting:width` | `String` | 宽度 |
| `esetting` | `Json` | 设置信息 |
| `params` | `Json` | 设置信息 |
| `tabids` | `Json` | 返回tabid集合 |
| `titles` | `Json` | 返回tab标题集合 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "data": [],
    "more": "{\"outNewsIds\":[\"41\"]}",
    "srcStyle": {
      "tabid": "1",
      "pictureheight": "50px",
      "autoheight": "0",
      "picturewidth": "500px"
    },
    "tabsetting": {
      "imgs": [],
      "catalogId": "",
      "canEdit": false,
      "width": "500px",
      "showModeId": "2",
      "style": {},
      "rollDirection": "",
      "openAttachment": "",
      "catalogIds": "",
      "height": "50px"
    }
  },
  "tabids": [
    "1"
  ],
  "titles": [
    "1"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "49321",
    "hpid": "161",
    "subCompanyId": -1,
    "tabsize": 1,
    "styleid": "templateSix",
    "ebaseid": "news"
  },
  "esetting": {
    "eid": "49321",
    "linkmode": "2",
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": {
      "doccreatetime": "*",
      "doccreater": "100",
      "img": "300",
      "doccreatedate": "*",
      "docsubject": "*"
    },
    "methodvalue": "1",
    "tabwidth": "76",
    "ebaseid": "news",
    "isremind": ""
  }
}
```

---

### 34. 获取门户【公告元素】元素信息

> **补充说明**：获取门户【公告元素】元素信息

- **接口路径 (Endpoint)**: `/api/portal/element/newnotice`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【公告元素】元素信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型newNotice |  |
| `eid` | `String` | **是** | 元素Id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回的公告信息 |
| `esetting` | `Json` | 设置信息 |
| `esetting:canAddNotice` | `String` | 显示新建按钮 |
| `esetting:eScrollDirection` | `String` | 滚动方向 |
| `esetting:from` | `String` | 内容来源 |
| `esetting:linkmode` | `String` | 链接方式 |
| `esetting:more` | `String` | 更多 |
| `esetting:noticeIsText` | `String` | 纯文本 |
| `esetting:pageSize` | `String` | 显示条数 |
| `esetting:perpage` | `String` | 显示条数 |
| `esetting:scrollSpeed` | `String` | 滚动速度 |
| `esetting:showContent` | `String` | 显示字段 内容 |
| `esetting:showImg` | `String` | 显示字段 图片 |
| `esetting:showTitle` | `String` | 显示字段  标题 |

#### 响应示例 (Response Example)

```json
{
  "data": [],
  "esetting": {
    "from": "document",
    "perpage": 3,
    "linkmode": "1",
    "showImg": false,
    "showTitle": false,
    "showContent": false,
    "createMethod": "2",
    "pageSize": "3",
    "multiPage": "0",
    "noticeIsText": "0",
    "scrollSpeed": "3",
    "more": "{\"appointDocIds\":[]}",
    "rows": 0,
    "canAddNotice": true,
    "eScrollDirection": {
      "options": [
        {
          "key": "0",
          "value": "无"
        },
        {
          "key": "1",
          "value": "向上"
        },
        {
          "key": "2",
          "value": "向右"
        },
        {
          "key": "3",
          "value": "向下"
        },
        {
          "key": "4",
          "value": "向左"
        }
      ],
      "selected": "0"
    }
  }
}
```

---

### 35. 获取门户【图片元素】列表信息

> **补充说明**：获取门户【图片元素】列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/picture`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【图片元素】列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素基本信息表中的id |  |
| `eid` | `String` | **是** | eid页面中元素的唯一key |  |
| `hpid` | `String` | **是** | 门户页面id |  |
| `styleid` | `String` | **是** | 门户元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 门户图片元素列表信息 |
| `esetting` | `Json` | 门户图片元素设置先关信息 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "name": "",
      "link": "",
      "type": "2",
      "url": "/page/resource/userfile/image/fl10.jpg",
      "order": 0
    },
    {
      "name": "",
      "link": "",
      "type": "2",
      "url": "/page/resource/userfile/image/ggya0.jpg",
      "order": 0
    },
    {
      "name": "",
      "link": "",
      "type": "2",
      "url": "/page/resource/userfile/image/1.jpg",
      "order": 0
    }
  ],
  "esetting": {
    "imageWidthUnit": "",
    "imageHeightUnit": "",
    "autoShow": "1",
    "speed": "0.01",
    "button": "1",
    "rollingDirection": "",
    "showTitle": "",
    "width": "800",
    "showType": "2",
    "rollingDirectionDetial": "",
    "fontSize": "",
    "open": "0",
    "isAutoHiehgt": "",
    "height": "300"
  }
}
```

---

### 36. 获取门户【图表元素】元素列表信息

> **补充说明**：获取门户【图表元素】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/reportformtab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【图表元素】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id  reportForm |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |
| `tabid` | `String` | **是** | tab页id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `charttype` | `String` | 图表类型 |
| `dot` | `String` | 小数位数 |
| `height` | `String` | 高度 |
| `series` | `String` | 数据值 |
| `showLegend` | `String` | 数据来源 |
| `title` | `String` | 标题 |
| `width` | `String` | 宽度 |

#### 响应示例 (Response Example)

```json
{
  "series": {
    "data": {
      "endval": "0",
      "startval": "400",
      "middleval": "300",
      "realval": "29676"
    },
    "name": "0",
    "type": "gauge"
  },
  "charttype": "gauge",
  "width": "800px",
  "showLegend": "1",
  "dot": "0",
  "title": "",
  "height": "600px"
}
```

---

### 37. 获取门户【图表元素】元素列表信息

> **补充说明**：获取门户【图表元素】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/reportform`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【图表元素】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id  reportForm |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `currenttab` | `String` | 当前页 |
| `data` | `Json` | 返回的数据信息 |
| `data:categories` | `String` | 横轴值 |
| `data:charttype` | `String` | 图表类型 |
| `data:dot` | `String` | 小数位数 |
| `data:height` | `String` | 高度 |
| `data:series` | `String` | 数据值 |
| `data:title` | `String` | 标题 |
| `data:width` | `String` | 宽度 |
| `esetting` | `Json` | 设置相关信息 |
| `params` | `Json` | 设置相关信息 |
| `showLegend` | `String` | 数据来源 |
| `tabids` | `Json` | tab页id合集 |
| `titles` | `Json` | tab页title合集 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "charttype": "line",
    "width": "300px",
    "showLegend": "select id, title from hpbaseelement",
    "dot": "0",
    "title": "",
    "height": "200px"
  },
  "tabids": [
    "1"
  ],
  "titles": [
    " 线形图"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "99830",
    "hpid": "1",
    "subCompanyId": 1,
    "tabsize": 1,
    "styleid": "1",
    "ebaseid": "reportForm"
  },
  "esetting": {
    "eid": "99830",
    "linkmode": "3",
    "imgSymbol": "/images/homepage/style/style1/esymbol_wev8.gif",
    "widths": {},
    "methodvalue": "1",
    "tabwidth": "76",
    "ebaseid": "reportForm",
    "isremind": ""
  }
}
```

---

### 38. 获取门户【外部数据元素】列表信息

> **补充说明**：获取门户【外部数据元素】列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/outdatatab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【外部数据元素】列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型 |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |
| `tabid` | `String` | **是** | tab页 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 数据信息 |
| `data:lastname` | `String` | 名称 |
| `data:loginid:link` | `String` | 链接 |
| `data:loginid:name` | `String` | 名称 |

#### 响应示例 (Response Example)

```json
{
  "data": []
}
```

---

### 39. 获取门户【外部数据元素】列表信息

> **补充说明**：获取门户【外部数据元素】列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/outdata`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【外部数据元素】列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型 OutData |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部Id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 数据信息 |
| `data:lastname` | `String` | 名称 |
| `data:loginid:link` | `String` | 链接 |
| `data:loginid:name` | `String` | 名称 |
| `esetting` | `Json` | 设置信息 |
| `params` | `Json` | 设置信息 |
| `tabids` | `Json` | tab页id集合 |
| `titles` | `Json` | tab页名称集合 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "data": []
  },
  "tabids": [
    "1",
    "2",
    "3",
    "4"
  ],
  "titles": [
    "test@#@！！！@@！",
    "test##$",
    "one",
    "two"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "1823",
    "hpid": "206",
    "subCompanyId": 35,
    "tabsize": 4,
    "styleid": "synergys4",
    "ebaseid": "OutData"
  },
  "esetting": {
    "eid": "1823",
    "linkmode": "",
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": {},
    "methodvalue": "1",
    "tabwidth": "76",
    "ebaseid": "OutData",
    "isremind": ""
  }
}
```

---

### 40. 获取门户【多图元素】信息

> **补充说明**：获取门户【多图元素】信息

- **接口路径 (Endpoint)**: `/api/portal/element/imgslide`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【多图元素】信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型imgSlide |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 图片信息 |
| `data:autoSwitchTime` | `String` | 自动切换时间 |
| `data:cellwidth` | `String` | 宽度 |
| `data:displaydesc` | `String` | 显示顺序 |
| `data:fontSize` | `String` | 字体大小 |
| `data:height` | `String` | 高度 |
| `data:imgAddress` | `Json` | 图片链接地址 |
| `data:imgdesclist` | `Json` | 图片标题 |
| `data:imgsrclist` | `Json` | 图片路径 |
| `data:isSetting` | `String` | 设置 |
| `data:rowcount` | `String` | 行个数 |
| `data:type` | `String` | 填充方式 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "autoSwitchTime": 4000,
    "rowcount": 0,
    "isSetting": true,
    "displaydesc": 1,
    "imgsrclist": [],
    "imgAddress": [],
    "fontSize": "16",
    "imgdesclist": [],
    "cellwidth": 0.0,
    "type": "adapt",
    "height": "300"
  }
}
```

---

### 41. 获取门户【多岗位办理事项】元素信息

> **补充说明**：获取门户【多岗位办理事项】元素信息

- **接口路径 (Endpoint)**: `/api/portal/element/jobsinfo`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【多岗位办理事项】元素信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型 jobsinfo |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回数据信息 |
| `esetting` | `Json` | 设置信息 |
| `esetting:linkmode` | `String` | 链接方式 |
| `esetting:widths` | `String` | 显示类别 |

#### 响应示例 (Response Example)

```json
{
  "data": [],
  "esetting": {
    "linkmode": "2",
    "widths": []
  }
}
```

---

### 42. 获取门户【天气元素】元素列表信息

> **补充说明**：获取门户【天气元素】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/weather`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【天气元素】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id  weather |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subCompanyId` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 天气信息 |
| `data:city` | `String` | 城市 |
| `data:img` | `String` | 图片 |
| `data:temperature` | `String` | 温度 |
| `data:weather` | `String` | 天气 |
| `esetting` | `Json` | 设置信息 |
| `esetting:autoScroll` | `String` | 自动滚动 |
| `esetting:width` | `String` | 显示宽度 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "img": "/page/element/Weather/resource/image/weather/d01.gif",
      "city": "上海",
      "weather": "阴转多云",
      "temperature": "34℃~27℃"
    },
    {
      "img": "/page/element/Weather/resource/image/weather/d00.gif",
      "city": "恩施",
      "weather": "雷阵雨",
      "temperature": "37℃~23℃"
    }
  ],
  "esetting": {
    "width": "200",
    "autoScroll": "0"
  }
}
```

---

### 43. 获取门户【幻灯片】元素列表信息

> **补充说明**：获取门户【幻灯片】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/slide`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【幻灯片】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | 否 | 元素基本信息表中的id |  |
| `eid` | `String` | 否 | eid页面中元素的唯一key |  |
| `elementtype` | `String` | 否 | 元素模板类型 |  |
| `hpid` | `String` | 否 | 门户页面id |  |
| `styleid` | `String` | 否 | 门户元素样式id |  |
| `subcompanyid` | `String` | 否 | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 门户【幻灯片】元素列表数据 |
| `data:linkurl` | `String` | 链接地址 |
| `data:title` | `String` | 标题 |
| `data:url` | `String` | 图片地址 |
| `esetting` | `Json` | 门户【幻灯片】元素设置信息 |
| `esetting:iconImg_overList` | `String` | 前景图 |
| `esetting:iconImgList` | `String` | 背景图 |
| `esetting:values` | `String` | 详细设置信息 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "linkUrl": "",
      "url": "/page/resource/userfile/image/fl10.jpg"
    },
    {
      "linkUrl": "",
      "url": "/page/resource/userfile/image/h.jpg"
    }
  ],
  "esetting": {
    "iconImgList": [
      "'/page/resource/userfile/image/31501323-taj-mahal-in-agra-india.jpg'",
      "'/page/resource/userfile/image/ggya0.jpg'"
    ],
    "iconImg_overList": [
      "''",
      "''"
    ],
    "values": {
      "slide_t_changeTime": "1000",
      "slide_t_position": "3",
      "slide_t_AutoChangeTime": "1000",
      "displayLayout": "1",
      "slide_t_changeStyle": "uncover",
      "slide_t_picShow": "auto"
    }
  }
}
```

---

### 44. 获取门户【建模查询中心】列表信息

> **补充说明**：获取门户【建模查询中心】列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/formmodecustomsearch`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【建模查询中心】列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 返回数据 |
| `data:childrenColumnName` | `String` | 列名 |
| `data:customid` | `String` | 显示顺序 |
| `data:data` | `String` | 数据信息 |
| `data:isPageAutoWrap` | `String` | 超出宽度自动省略 |
| `data:morehref` | `String` | 更多地址 |
| `esetting` | `Json` | 设置信息 |
| `params` | `Json` | 设置信息 |
| `tabids` | `Json` | tab页id集合 |
| `titles` | `Json` | tab页title集合 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "data": [
      {
        "value0": [
          {
            "name": "系统管理员",
            "userid": "1"
          }
        ],
        "value1": "2018-08-14",
        "value2": [
          {
            "link": "/spa/workflow/index.html#/main/workflow/req?requestid=&isovertime=0",
            "name": "text"
          }
        ],
        "value3": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "323"
          }
        ],
        "value4": "0",
        "value5": [
          {
            "link": "",
            "name": ""
          }
        ],
        "value6": "",
        "value7": "<span><p>duowb</p></span>",
        "value8": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "2"
          }
        ],
        "value9": "<span></span>",
        "value10": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "323"
          }
        ],
        "value11": [
          {
            "link": "",
            "name": ""
          }
        ],
        "value12": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "3232.00"
          }
        ],
        "value13": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value14": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "系统管理员"
          }
        ],
        "value15": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value16": [],
        "value17": "2018-08-14",
        "value18": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value19": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value20": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value21": [
          {
            "link": "",
            "name": ""
          }
        ]
      },
      {
        "value0": [
          {
            "name": "系统管理员",
            "userid": "1"
          }
        ],
        "value1": "2018-07-09",
        "value2": [
          {
            "link": "/spa/workflow/index.html#/main/workflow/req?requestid=&isovertime=0",
            "name": "text"
          }
        ],
        "value3": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "867"
          }
        ],
        "value4": "0",
        "value5": [
          {
            "link": "",
            "name": ""
          }
        ],
        "value6": "",
        "value7": "<span><p>duowb</p></span>",
        "value8": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "867"
          }
        ],
        "value9": "<span></span>",
        "value10": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "867"
          }
        ],
        "value11": [
          {
            "link": "",
            "name": ""
          }
        ],
        "value12": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "867.00"
          }
        ],
        "value13": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value14": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "系统管理员"
          }
        ],
        "value15": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value16": [],
        "value17": "2018-07-09",
        "value18": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value19": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value20": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value21": [
          {
            "link": "",
            "name": ""
          }
        ]
      },
      {
        "value0": [
          {
            "name": "系统管理员",
            "userid": "1"
          }
        ],
        "value1": "2018-07-09",
        "value2": [
          {
            "link": "/spa/workflow/index.html#/main/workflow/req?requestid=&isovertime=0",
            "name": "鬼地方个aaa"
          }
        ],
        "value3": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "564"
          }
        ],
        "value4": "0",
        "value5": [
          {
            "link": "",
            "name": ""
          }
        ],
        "value6": "",
        "value7": "<span><p>duowb</p></span>",
        "value8": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "534"
          }
        ],
        "value9": "<span></span>",
        "value10": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "534"
          }
        ],
        "value11": [
          {
            "link": "",
            "name": ""
          }
        ],
        "value12": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "543.00"
          }
        ],
        "value13": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value14": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "系统管理员"
          }
        ],
        "value15": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value16": [],
        "value17": "2018-07-09",
        "value18": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "test3"
          }
        ],
        "value19": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value20": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value21": [
          {
            "link": "",
            "name": ""
          }
        ]
      },
      {
        "value0": [
          {
            "name": "系统管理员",
            "userid": "1"
          }
        ],
        "value1": "2018-07-09",
        "value2": [
          {
            "link": "/spa/workflow/index.html#/main/workflow/req?requestid=&isovertime=0",
            "name": "vbvb"
          }
        ],
        "value3": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "423"
          }
        ],
        "value4": "0",
        "value5": [
          {
            "link": "",
            "name": ""
          }
        ],
        "value6": "",
        "value7": "<span><p>duowb</p></span>",
        "value8": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "423"
          }
        ],
        "value9": "<span></span>",
        "value10": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "543"
          }
        ],
        "value11": [
          {
            "link": "",
            "name": ""
          }
        ],
        "value12": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "5345.00"
          }
        ],
        "value13": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value14": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "系统管理员"
          }
        ],
        "value15": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value16": [],
        "value17": "2018-07-09",
        "value18": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value19": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value20": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value21": [
          {
            "link": "",
            "name": ""
          }
        ]
      },
      {
        "value0": [
          {
            "name": "系统管理员",
            "userid": "1"
          }
        ],
        "value1": "2018-07-04",
        "value2": [
          {
            "link": "/spa/workflow/index.html#/main/workflow/req?requestid=&isovertime=0",
            "name": "mnmmnmnm"
          }
        ],
        "value3": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "23453"
          }
        ],
        "value4": "1",
        "value5": [
          {
            "link": "",
            "name": ""
          }
        ],
        "value6": "",
        "value7": "<span><p>duowb</p></span>",
        "value8": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "3453"
          }
        ],
        "value9": "<span></span>",
        "value10": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "45"
          }
        ],
        "value11": [
          {
            "link": "",
            "name": ""
          }
        ],
        "value12": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "5464.00"
          }
        ],
        "value13": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value14": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "系统管理员"
          }
        ],
        "value15": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": ""
          }
        ],
        "value16": [],
        "value17": "2018-07-04",
        "value18": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "浏览框1"
          }
        ],
        "value19": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "256_3,电影"
          }
        ],
        "value20": [
          {
            "link": "/spa/workflow/index_form.jsp#/main/workflow/req?requestid=297637&isovertime=0",
            "name": "选择2"
          }
        ],
        "value21": [
          {
            "link": "",
            "name": ""
          }
        ]
      }
    ],
    "morehref": "",
    "tabsetting": {
      "widths": {
        "value0": "20%",
        "value1": "20%",
        "value2": "20%",
        "value3": "20%",
        "value4": "20%",
        "value5": "20%",
        "value6": "20%",
        "value7": "20%",
        "value8": "20%",
        "value9": "20%",
        "value10": "20%",
        "value11": "20%",
        "value12": "20%",
        "value13": "20%",
        "value14": "20%",
        "value15": "20%",
        "value16": "20%",
        "value17": "20%",
        "value18": "20%",
        "value19": "20%",
        "value20": "20%",
        "value21": "20%"
      },
      "rolltype": "0",
      "isshowtitle": "1",
      "titles": [
        "创建人",
        "创建日期",
        "名称",
        "个数",
        "check框",
        "上传文件",
        "特殊字段",
        "多文本",
        "浮点数",
        "格式文本",
        "金额转换",
        "上传图片",
        "千分位",
        "部门",
        "人力资源",
        "分部",
        "自定义多选",
        "日期",
        "浏览框名称",
        "树形单选",
        "选择框",
        "树形多选"
      ],
      "height": 187
    },
    "customid": "1083"
  },
  "tabids": [
    "68",
    "76",
    "53"
  ],
  "titles": [
    "lchun多语言",
    "lchun本地xn",
    "lchun简单导入"
  ],
  "currenttab": "68",
  "params": {
    "tabid": "68",
    "eid": "1707",
    "hpid": "210",
    "subCompanyId": 194,
    "tabsize": 3,
    "styleid": "synergys1",
    "ebaseid": "FormModeCustomSearch"
  },
  "esetting": {
    "eid": "1707",
    "linkmode": "",
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": {},
    "methodvalue": "1",
    "tabwidth": "76",
    "ebaseid": "FormModeCustomSearch",
    "isremind": ""
  }
}
```

---

### 45. 获取门户【建模查询中心】列表信息

> **补充说明**：获取门户【建模查询中心】列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/formmodecustomsearchtab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【建模查询中心】列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id FormModeCustomSearch |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |
| `tabid` | `String` | **是** | tab页id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `customid` | `Json` | 显示顺序 |
| `data` | `Json` | 数据信息 |
| `data:isPageAutoWrap` | `String` | 超出宽度自动省略 |
| `morehref` | `String` | 更多地址 |
| `tabsetting` | `Json` | 设置信息 |
| `tabsetting:titles` | `String` | 显示字段 |
| `tabsetting:widths` | `String` | 显示字段宽度（百分比） |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "value0": [
        {
          "name": "系统管理员",
          "userid": "1"
        }
      ],
      "value1": "2018-12-10",
      "value2": [
        {
          "link": "/spa/cube/index.html#/main/cube/card?type=0&modeId=1502&formId=-2402&billid=6&opentype=0&customid=1602&viewfrom=fromsearchlist",
          "name": "打撒的"
        }
      ],
      "value3": "2018-11-12"
    },
    {
      "value0": [
        {
          "name": "系统管理员",
          "userid": "1"
        }
      ],
      "value1": "2018-12-10",
      "value2": [
        {
          "link": "/spa/cube/index.html#/main/cube/card?type=0&modeId=1502&formId=-2402&billid=5&opentype=0&customid=1602&viewfrom=fromsearchlist",
          "name": "防守打法"
        }
      ],
      "value3": ""
    },
    {
      "value0": [
        {
          "name": "系统管理员",
          "userid": "1"
        }
      ],
      "value1": "2018-12-10",
      "value2": [
        {
          "link": "/spa/cube/index.html#/main/cube/card?type=0&modeId=1502&formId=-2402&billid=4&opentype=0&customid=1602&viewfrom=fromsearchlist",
          "name": ""
        }
      ],
      "value3": "2018-12-10"
    },
    {
      "value0": [
        {
          "name": "系统管理员",
          "userid": "1"
        }
      ],
      "value1": "2018-12-10",
      "value2": [
        {
          "link": "/spa/cube/index.html#/main/cube/card?type=0&modeId=1502&formId=-2402&billid=3&opentype=0&customid=1602&viewfrom=fromsearchlist",
          "name": "ddsd"
        }
      ],
      "value3": ""
    },
    {
      "value0": [
        {
          "name": "系统管理员",
          "userid": "1"
        }
      ],
      "value1": "2018-12-10",
      "value2": [
        {
          "link": "/spa/cube/index.html#/main/cube/card?type=0&modeId=1502&formId=-2402&billid=2&opentype=0&customid=1602&viewfrom=fromsearchlist",
          "name": "aaaa"
        }
      ],
      "value3": "2018-11-11"
    }
  ],
  "morehref": "",
  "tabsetting": {
    "widths": {
      "value0": "30",
      "value1": "30",
      "value2": "10",
      "value3": "10"
    },
    "rolltype": "0",
    "isshowtitle": "1",
    "titles": [
      "创建人",
      "创建日期",
      "文本",
      "日期"
    ],
    "height": 187
  },
  "customid": "1602"
}
```

---

### 46. 获取门户【当日计划】元素列表信息

> **补充说明**：获取门户【当日计划】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/dayplan`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【当日计划】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id |  |
| `eid` | `String` | **是** | 当前元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回的计划信息 |
| `data:begindate` | `String` | 开始日期 |
| `data:begintime` | `String` | 开始时间 |
| `data:enddate` | `String` | 结束日期 |
| `data:endtime` | `String` | 结束时间 |
| `data:link` | `String` | 链接 |
| `data:name` | `String` | 名称 |
| `data:urgentLevel` | `String` | 紧急程度 |
| `esetting` | `Json` | 设置信息 |
| `esetting:linkmode` | `String` | 链接方式 |
| `esetting:widths:begindate` | `String` | 显示字段开始日期选择 |
| `esetting:widths:begintime` | `String` | 显示字段开始时间选择 |
| `esetting:widths:enddate` | `String` | 显示字段结束日期选择 |
| `esetting:widths:endtime` | `String` | 显示字段结束时间选择 |
| `esetting:widths:name` | `String` | 显示字段名称选择 |
| `esetting:widths:urgentLevel` | `String` | 显示字段紧急程度选择 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "name": {
        "name": "45654",
        "link": "/spa/workplan/static/index.html#/main/wp/workPlanCreateSingle?workPlanId=2395"
      },
      "endtime": "17:00",
      "urgentLevel": "一般",
      "begindate": "2019-08-02",
      "begintime": "09:00",
      "enddate": "2099-12-31"
    },
    {
      "name": {
        "name": "0809",
        "link": "/spa/workplan/static/index.html#/main/wp/workPlanCreateSingle?workPlanId=2414"
      },
      "endtime": "17:00",
      "urgentLevel": "一般",
      "begindate": "2019-08-09",
      "begintime": "09:00",
      "enddate": "2099-12-31"
    },
    {
      "name": {
        "name": "周期日程008",
        "link": "/spa/workplan/static/index.html#/main/wp/workPlanCreateSingle?workPlanId=2416"
      },
      "endtime": "21:59",
      "urgentLevel": "一般",
      "begindate": "2019-08-12",
      "begintime": "00:00",
      "enddate": "2019-08-12"
    }
  ],
  "esetting": {
    "linkmode": "2",
    "widths": {
      "begindate": "76",
      "enddate": "76",
      "urgentLevel": "40",
      "name": "*",
      "endtime": "62",
      "begintime": "62"
    }
  }
}
```

---

### 47. 获取门户【微博动态】元素列表信息

> **补充说明**：获取门户【微博动态】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/blogstatus`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【微博动态】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `counts` | `Json` | 数量统计 |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 微博信息 |
| `data:comment` | `String` | 评论 |
| `data:remind` | `String` | 提醒 |
| `data:update` | `String` | 更新 |
| `esetting` | `Json` | 设置信息 |
| `esetting:linkmode` | `String` | 链接方式 |
| `esetting:tabwidth` | `String` | tab页宽 |
| `esetting:widths` | `String` | 设置 |
| `tabids` | `Json` | tab页id集合 |
| `titles` | `Json` | tab页titie集合 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "update": [],
    "comment": [],
    "remind": []
  },
  "tabids": [
    "update",
    "comment",
    "remind"
  ],
  "counts": [
    0,
    0,
    0
  ],
  "titles": [
    "更新",
    "评论",
    "提醒"
  ],
  "esetting": {
    "linkmode": "2",
    "widths": {
      "relatedname": "76",
      "createdate": "76"
    },
    "methodvalue": "1",
    "tabwidth": "76"
  }
}
```

---

### 48. 获取门户【快捷入口】元素信息

> **补充说明**：获取门户【快捷入口】元素信息

- **接口路径 (Endpoint)**: `/api/portal/element/quickentry`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `门户管理 > 获取门户【快捷入口】元素信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id quickEntry |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subCompanyId` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data:id` | `Json` | 返回信息 |
| `data:key` | `String` | id |
| `data:link` | `String` | 链接 |
| `data:ordernum` | `String` | 排序 |
| `data:picture` | `String` | 图片 |
| `data:title` | `String` | 标题 |
| `esetting` | `Json` | 设置信息 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "link": "1",
      "ordernum": "0",
      "id": "14",
      "title": "1",
      "picture": "/page/resource/userfile/image/Hydrangeas.jpg",
      "key": 0
    }
  ],
  "esetting": {
    "linkmode": "2",
    "showMode": "1",
    "perNum": "5"
  }
}
```

---

### 49. 获取门户【我的协作】元素列表信息

> **补充说明**：获取门户【我的协作】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/cooperation`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【我的协作】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id  13 |  |
| `eid` | `String` | **是** | 当前元素id |  |
| `hpid` | `String` | **是** | 门户页面id |  |
| `styleid` | `String` | **是** | 样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `currenttab` | `String` | 当前tab页 |
| `data` | `String` | 返回的协作信息 |
| `esetting` | `String` | 设置信息 |
| `params` | `String` | 设置信息 |
| `tabids` | `String` | tab页id集合 |
| `titles` | `String` | tab页标题集合 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "datas": {
      "jointype": "0",
      "viewType": "1",
      "coworkList": [],
      "typeid": "0",
      "status": "1"
    }
  },
  "tabids": [
    "1"
  ],
  "titles": [
    "未读协作"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "1822",
    "hpid": "206",
    "subCompanyId": 35,
    "tabsize": 1,
    "styleid": "-999999999N",
    "ebaseid": "13"
  },
  "esetting": {
    "eid": "1822",
    "linkmode": "2",
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": {
      "createtime": "62",
      "name": "*",
      "creater": "50",
      "createdate": "76",
      "lastdiscussant": "70"
    },
    "methodvalue": "1",
    "tabwidth": "76",
    "ebaseid": "13",
    "isremind": ""
  }
}
```

---

### 50. 获取门户【我的协作】元素列表信息

> **补充说明**：获取门户【我的协作】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/cooperationtab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【我的协作】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id  13 |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |
| `tabid` | `String` | **是** | tab页id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `datas` | `Json` | 返回新tab页的协作信息 |
| `datas:coworkList` | `String` | 协作信息列表 |
| `datas:coworkList:creater:name` | `String` | 创建人 |
| `datas:coworkList:creater:userid` | `String` | 创建人id |
| `datas:coworkList:name:coworkTitle` | `String` | 协作名称 |
| `datas:coworkList:name:img` | `String` | 协作图片 |
| `datas:coworkList:name:link` | `String` | 协作链接 |
| `datas:coworkList:name:name` | `String` | 协作名称 |
| `datas:jointype` | `String` | 来源 |
| `datas:status` | `String` | 状态 |
| `datas:typeid` | `String` | 板块 |
| `datas:viewType` | `String` | 类型 |

#### 响应示例 (Response Example)

```json
{
  "datas": {
    "jointype": "4",
    "viewType": "0",
    "coworkList": [
      {
        "name": {
          "img": "",
          "coworkTitle": "契约锁问题反馈",
          "name": "契约锁问题反馈",
          "link": "/spa/cowork/index.html#/cowork/125"
        },
        "creater": "系统管理员",
        "lastdiscussant": "宋丽平p",
        "createdate": "2019-07-31",
        "createtime": "10:39:37",
        "lastreplydate": "2019-07-31",
        "lastreplytime": "10:55:02"
      },
      {
        "name": {
          "img": "",
          "coworkTitle": "2",
          "name": "2",
          "link": "/spa/cowork/index.html#/cowork/124"
        },
        "creater": "系统管理员",
        "lastdiscussant": "杨文元-ln",
        "createdate": "2019-07-30",
        "createtime": "17:03:28",
        "lastreplydate": "2019-07-30",
        "lastreplytime": "17:04:19"
      },
      {
        "name": {
          "img": "",
          "coworkTitle": "匿名和审批111111",
          "name": "匿名和审批111111",
          "link": "/spa/cowork/index.html#/cowork/63"
        },
        "creater": "系统管理员",
        "lastdiscussant": "系统管理员",
        "createdate": "2019-01-14",
        "createtime": "18:05:28",
        "lastreplydate": "2019-07-22",
        "lastreplytime": "15:51:55"
      },
      {
        "name": {
          "img": "/images/ecology8/statusicon/BDOut_wev8.png",
          "coworkTitle": "[待审批]待审批呀",
          "name": "<div><span style='color:red'>[待审批]</span><span>待审批呀</span></div>",
          "link": "/spa/cowork/index.html#/cowork/60"
        },
        "creater": "系统管理员",
        "lastdiscussant": "古丽-t",
        "createdate": "2018-12-05",
        "createtime": "15:25:53",
        "lastreplydate": "2019-02-19",
        "lastreplytime": "15:16:36"
      }
    ],
    "typeid": "0",
    "status": "0"
  }
}
```

---

### 51. 获取门户【我的协作】元素列表信息

> **补充说明**：获取门户【我的协作】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/cooperation`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【我的协作】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id  13 |  |
| `eid` | `String` | **是** | 当前元素id |  |
| `hpid` | `String` | **是** | 门户页面id |  |
| `styleid` | `String` | **是** | 样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 返回的协作信息 |
| `data:datas:coworkList` | `String` | 协作信息列表 |
| `data:datas:coworkList:name:coworkTitle` | `String` | 协作名称 |
| `data:datas:coworkList:name:img` | `String` | 协作图片 |
| `data:datas:coworkList:name:link` | `String` | 协作链接 |
| `data:datas:coworkList:name:name` | `String` | 协作名称 |
| `data:datas:jointype` | `String` | 来源 |
| `data:datas:status` | `String` | 协作状态 |
| `data:datas:typeid` | `String` | 板块 |
| `data:datas:viewType` | `String` | 查看类型 |
| `esetting` | `Json` | 设置信息 |
| `esetting:ebaseid` | `String` | 元素类型 |
| `esetting:eid` | `String` | 元素id |
| `esetting:linkmode` | `String` | 链接方式 |
| `esetting:tabwidth` | `String` | tab页宽度 |
| `params` | `Json` | 设置信息 |
| `tabids` | `Json` | tab页id集合 |
| `titles` | `Json` | tab页标题集合 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "datas": {
      "jointype": "0",
      "viewType": "1",
      "coworkList": [],
      "typeid": "0",
      "status": "1"
    }
  },
  "tabids": [
    "1"
  ],
  "titles": [
    "未读协作"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "1822",
    "hpid": "206",
    "subCompanyId": 35,
    "tabsize": 1,
    "styleid": "-999999999N",
    "ebaseid": "13"
  },
  "esetting": {
    "eid": "1822",
    "linkmode": "2",
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": {
      "createtime": "62",
      "name": "*",
      "creater": "50",
      "createdate": "76",
      "lastdiscussant": "70"
    },
    "methodvalue": "1",
    "tabwidth": "76",
    "ebaseid": "13",
    "isremind": ""
  }
}
```

---

### 52. 获取门户【我的邮件】元素列表信息

> **补充说明**：获取门户【我的邮件】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/mail`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【我的邮件】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id 16 |  |
| `eid` | `String` | **是** | 当前元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回邮件数据集合 |
| `data:domail` | `String` | 待办邮件 |
| `data:goUrl` | `String` | 链接地址 |
| `data:unread` | `String` | 未读邮件 |
| `esetting` | `Json` | 设置信息 |
| `esetting:linkmode` | `String` | 链接方式 |
| `esetting:tabwidth` | `String` | 页宽 |
| `esetting:widths:priority` | `String` | 重要性 |
| `esetting:widths:senddate` | `String` | 发件时间 |
| `esetting:widths:sendfrom` | `String` | 发件人 |
| `esetting:widths:subject` | `String` | 主题 |
| `tabids` | `Json` | tab页id集合 |
| `titles` | `Json` | tab页名称集合 |

#### 响应示例 (Response Example)

```json
{
  "tabids": [
    "unread",
    "domail"
  ],
  "data": {
    "domail": [],
    "unread": [],
    "goUrl": "/spa/email/static/index.html#/main/email/inbox?folderid=0&1565577288567&receivemail=true",
    "oplist": []
  },
  "titles": [
    "未读邮件",
    "待办邮件"
  ],
  "esetting": {
    "linkmode": "2",
    "opershow": false,
    "imgSymbol": "/images/homepage/style/style1/esymbol_wev8.gif",
    "widths": {},
    "methodvalue": "1",
    "tabwidth": "76"
  }
}
```

---

### 53. 获取门户【我的项目】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/projects`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【我的项目】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | 否 | 元素基本信息表中的id |  |
| `eid` | `String` | 否 | eid页面中元素的唯一key |  |
| `elementtype` | `String` | 否 | 元素模板类型 |  |
| `hpid` | `String` | 否 | 门户页面id |  |
| `styleid` | `String` | 否 | 门户元素样式id |  |
| `subcompanyid` | `String` | 否 | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 【我的项目】元素列表信息数据 |
| `data:datas` | `String` | 项目具体信息 |
| `esetting` | `Json` | 【我的项目】元素设置信息 |
| `esetting:ebaseid` | `String` | 元素类型id |
| `esetting:eid` | `String` | 元素Id |
| `esetting:linkmode` | `String` | 链接方式 |
| `esetting:widths:name` | `String` | 项目显示字段标题 |
| `esetting:widths:planendtime` | `String` | 结束时间 |
| `esetting:widths:status` | `String` | 项目状态 |
| `params` | `Json` | 参数列表 |
| `tabids` | `Json` | 各个tab页的id |
| `titles` | `Json` | 各个tab页的标题 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "datas": {
      "datas": [
        {
          "enddate": "",
          "procode": "",
          "prjname": {
            "name": "0831新建项目-fw02",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=294",
            "prjid": "294"
          },
          "prjid": "294",
          "status": "交接-zq"
        },
        {
          "enddate": "",
          "procode": "zqi07",
          "prjname": {
            "name": "0903流程创建项目-fw01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=299",
            "prjid": "299"
          },
          "prjid": "299",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "zqi08",
          "prjname": {
            "name": "0903流程创建项目-fw02",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=300",
            "prjid": "300"
          },
          "prjid": "300",
          "status": "草稿1"
        },
        {
          "enddate": "",
          "procode": "zqi11",
          "prjname": {
            "name": "子项目-fw02",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=307",
            "prjid": "307"
          },
          "prjid": "307",
          "status": "草稿1"
        },
        {
          "enddate": "",
          "procode": "",
          "prjname": {
            "name": "0904新建项目-fw10",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=322",
            "prjid": "322"
          },
          "prjid": "322",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "",
          "prjname": {
            "name": "0904新建项目-fw11",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=323",
            "prjid": "323"
          },
          "prjid": "323",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "",
          "prjname": {
            "name": "0904新建项目-13",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=324",
            "prjid": "324"
          },
          "prjid": "324",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "zqi22",
          "prjname": {
            "name": "0908-01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=342",
            "prjid": "342"
          },
          "prjid": "342",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "zqi23",
          "prjname": {
            "name": "0906-07",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=343",
            "prjid": "343"
          },
          "prjid": "343",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "",
          "prjname": {
            "name": "wull05",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=375",
            "prjid": "375"
          },
          "prjid": "375",
          "status": "延期"
        },
        {
          "enddate": "",
          "procode": "zqi30",
          "prjname": {
            "name": "ewr",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=382",
            "prjid": "382"
          },
          "prjid": "382",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "zqi07",
          "prjname": {
            "name": "0920新建项目-fw01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=387",
            "prjid": "387"
          },
          "prjid": "387",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "zqi37",
          "prjname": {
            "name": "test-03",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=399",
            "prjid": "399"
          },
          "prjid": "399",
          "status": "草稿1"
        },
        {
          "enddate": "",
          "procode": "zqi38",
          "prjname": {
            "name": "项目1",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=401",
            "prjid": "401"
          },
          "prjid": "401",
          "status": "草稿1"
        },
        {
          "enddate": "",
          "procode": "zqi01",
          "prjname": {
            "name": "项目审批-大小写-fw01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=405",
            "prjid": "405"
          },
          "prjid": "405",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "zqi01",
          "prjname": {
            "name": "项目审批-小大写-fw01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=406",
            "prjid": "406"
          },
          "prjid": "406",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "zqi01",
          "prjname": {
            "name": "项目审批-大写-fw01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=407",
            "prjid": "407"
          },
          "prjid": "407",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "zqi01",
          "prjname": {
            "name": "项目审批-小写",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=408",
            "prjid": "408"
          },
          "prjid": "408",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "zqi02",
          "prjname": {
            "name": "项目审批-大写-fw02",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=409",
            "prjid": "409"
          },
          "prjid": "409",
          "status": "立项批准"
        },
        {
          "enddate": "",
          "procode": "zqi02",
          "prjname": {
            "name": "项目审批-小大写-fw03",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=410",
            "prjid": "410"
          },
          "prjid": "410",
          "status": "立项批准"
        }
      ],
      "searchtype": "mymanager",
      "cmanager": "0",
      "coworkList": [
        {
          "name": {
            "name": "0831新建项目-fw02",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=294",
            "prjid": "294"
          },
          "status": "交接-zq",
          "planendtime": ""
        },
        {
          "name": {
            "name": "0903流程创建项目-fw01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=299",
            "prjid": "299"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "0903流程创建项目-fw02",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=300",
            "prjid": "300"
          },
          "status": "草稿1",
          "planendtime": ""
        },
        {
          "name": {
            "name": "子项目-fw02",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=307",
            "prjid": "307"
          },
          "status": "草稿1",
          "planendtime": ""
        },
        {
          "name": {
            "name": "0904新建项目-fw10",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=322",
            "prjid": "322"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "0904新建项目-fw11",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=323",
            "prjid": "323"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "0904新建项目-13",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=324",
            "prjid": "324"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "0908-01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=342",
            "prjid": "342"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "0906-07",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=343",
            "prjid": "343"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "wull05",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=375",
            "prjid": "375"
          },
          "status": "延期",
          "planendtime": ""
        },
        {
          "name": {
            "name": "ewr",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=382",
            "prjid": "382"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "0920新建项目-fw01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=387",
            "prjid": "387"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "test-03",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=399",
            "prjid": "399"
          },
          "status": "草稿1",
          "planendtime": ""
        },
        {
          "name": {
            "name": "项目1",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=401",
            "prjid": "401"
          },
          "status": "草稿1",
          "planendtime": ""
        },
        {
          "name": {
            "name": "项目审批-大小写-fw01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=405",
            "prjid": "405"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "项目审批-小大写-fw01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=406",
            "prjid": "406"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "项目审批-大写-fw01",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=407",
            "prjid": "407"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "项目审批-小写",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=408",
            "prjid": "408"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "项目审批-大写-fw02",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=409",
            "prjid": "409"
          },
          "status": "立项批准",
          "planendtime": ""
        },
        {
          "name": {
            "name": "项目审批-小大写-fw03",
            "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=410",
            "prjid": "410"
          },
          "status": "立项批准",
          "planendtime": ""
        }
      ],
      "status": ""
    }
  },
  "tabids": [
    "1",
    "2",
    "3"
  ],
  "titles": [
    "我负责",
    "我参与",
    "我能查看的"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "1851",
    "hpid": "206",
    "subCompanyId": 35,
    "tabsize": 3,
    "styleid": "synergys4",
    "ebaseid": "10"
  },
  "esetting": {
    "eid": "1851",
    "linkmode": "2",
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": {
      "planendtime": "75",
      "name": "*",
      "status": "70"
    },
    "methodvalue": "1",
    "tabwidth": "55",
    "ebaseid": "10",
    "isremind": ""
  }
}
```

---

### 54. 获取门户【我的项目】元素列表信息

> **补充说明**：获取门户【我的项目】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/projectstab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【我的项目】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id 10 |  |
| `eid` | `String` | **是** | 当前元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式Id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |
| `tabid` | `String` | **是** | 当前tab页 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `datas` | `Json` | 返回我的项目信息 |
| `datas:coworkList` | `String` | 我的项目信息 |
| `datas:datas` | `String` | 我的项目信息 |
| `datas:searchtype` | `String` | 项目来源 |
| `datas:status` | `String` | 我的项目状态 |

#### 响应示例 (Response Example)

```json
{
  "datas": {
    "datas": [
      {
        "enddate": "2019-07-25",
        "procode": "proj88372",
        "prjname": {
          "name": "123",
          "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=602",
          "prjid": "602"
        },
        "prjid": "602",
        "status": "立项批准"
      }
    ],
    "searchtype": "mymanager",
    "cmanager": "0",
    "coworkList": [
      {
        "name": {
          "name": "123",
          "link": "/spa/prj/index.html#/main/prj/projectCard?prjid=602",
          "prjid": "602"
        },
        "status": "立项批准",
        "planendtime": "2019-07-25"
      }
    ],
    "status": ""
  }
}
```

---

### 55. 获取门户【收藏元素】元素列表信息

> **补充说明**：获取门户【收藏元素】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/favourite`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【收藏元素】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型Id  favourite |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 样式Id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 收藏信息 |
| `data:fdate` | `String` | 收藏日期 |
| `data:flevel` | `String` | 重要程度 |
| `data:ftitle` | `String` | 标题及链接信息 |
| `data:ftype` | `String` | 类型 |
| `esetting` | `Json` | 设置信息 |
| `esetting:linkmode` | `String` | 链接方式 |
| `esetting:lwidths:fdate` | `String` | 显示字段 收藏日期 |
| `esetting:lwidths:flevel` | `String` | 显示字段 重要程度 |
| `esetting:lwidths:ftitle` | `String` | 显示字段 标题 |
| `esetting:lwidths:ftype` | `String` | 显示字段 类型 |

#### 响应示例 (Response Example)

```json
{
  "data": [],
  "esetting": {
    "linkmode": "2",
    "widths": {
      "ftitle": "*",
      "flevel": "50",
      "ftype": "76",
      "fdate": "138"
    }
  }
}
```

---

### 56. 获取门户【文档中心】元素数据

> **补充说明**：获取门户【文档中心】元素数据

- **接口路径 (Endpoint)**: `/api/portal/element/newstab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【文档中心】元素数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型 |  |
| `eid` | `String` | **是** | 当前门户内，单个元素对应id |  |
| `hpid` | `String` | **是** | 当前选中移动门户页面id |  |
| `pagenum` | `String` | **是** | 分页 |  |
| `subcompanyid` | `String` | **是** | 当前选中移动门户组织结构：分部id |  |
| `tabid` | `String` | **是** | 内容来源，tab页id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回的文档具体数据集合 如：摘要，创建日期等 |
| `data:docsubject` | `String` | 文档信息 |
| `data:docsubject:docid` | `String` | 文档id |
| `data:docsubject:img` | `String` | 图片 |
| `data:docsubject:link` | `String` | 链接地址 |
| `data:docsubject:mobilelink` | `String` | 移动端链接地址 |
| `data:docsubject:name` | `String` | 文档标题 |
| `docParams` | `Json` | 文档来源具体设置：是否置顶、排序、显示方式 |
| `docParams:docCatalogIds` | `String` | 文档目录 |
| `docParams:order` | `String` | 排序 |
| `docParams:orderby` | `String` | 排序字段 |
| `docParams:showType` | `String` | 标签页是否显示未读： 0不显示1显示 |
| `docParams:virtualCatalogIds` | `String` | 虚拟目录 |
| `from` | `String` | 来源 |
| `srcStyle` | `Json` | 图片样式设置，是否自适应高度，宽度、高度 |
| `srcStyle:autoheight` | `String` | 高度，0自适应 |
| `srcStyle:pictureheight` | `String` | 缩略图高度 |
| `srcStyle:picturewidth` | `String` | 缩略图宽度 |
| `srcStyle:tabid` | `String` | 当前tab页id |
| `tabsetting` | `Json` | 具体设置：更多加载内容、是否显示标签页未读选项、是否直接打开附件等 |
| `tabsetting:catalogId` | `String` | 已选文档目录id值 |
| `tabsetting:catalogIds` | `String` | 已选文档目录id值 |
| `tabsetting:count` | `String` | 统计信息 |
| `tabsetting:count:isHaveNoRead` | `String` | 是否显示未读 |
| `tabsetting:count:noReadNum` | `String` | 未读个数 |
| `tabsetting:height` | `String` | 高度 |
| `tabsetting:imgs` | `String` | 默认图片 |
| `tabsetting:isShowSettingShowType` | `String` | 是否显示标签页未读选项 0不显示1显示 |
| `tabsetting:more` | `String` | 更多设置 |
| `tabsetting:openAttachment` | `String` | 是否直接打开附件 |
| `tabsetting:rollDirection` | `String` | 滚动方向 |
| `tabsetting:showModeId` | `String` | 显示方式 如：上图式、列表式等 |
| `tabsetting:showType` | `String` | 标签页显示未读 0/1 |
| `tabsetting:style` | `String` | 样式 |
| `tabsetting:width` | `String` | 宽度 |

#### 响应示例 (Response Example)

```json
{
  "data": [],
  "docParams": {
    "orderby": [],
    "showType": [
      "1"
    ],
    "virtualCatalogIds": [],
    "order": []
  },
  "srcStyle": {
    "tabid": "6",
    "pictureheight": "108px",
    "autoheight": "0",
    "picturewidth": "350px"
  },
  "from": "document",
  "tabsetting": {
    "imgs": [
      "/images/homepage/noimgdefault_wev8.jpg"
    ],
    "more": "{\"orderby\":[],\"virtualCatalogIds\":[],\"order\":[]}",
    "count": {
      "isHaveNoRead": "0",
      "noReadNum": ""
    },
    "rollDirection": "right",
    "openAttachment": "1",
    "catalogIds": "",
    "catalogId": "",
    "isShowSettingShowType": "1",
    "width": "350px",
    "showModeId": "10",
    "showType": "1",
    "style": {},
    "height": "108px"
  }
}
```

---

### 57. 获取门户【文档中心】元素数据

> **补充说明**：获取门户【文档中心】元素数据

- **接口路径 (Endpoint)**: `/api/portal/element/news`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【文档中心】元素数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型 |  |
| `eid` | `String` | **是** | 当前门户内，单个元素对应id |  |
| `hpid` | `String` | **是** | 当前选中移动门户页面id |  |
| `styleid` | `String` | **是** | 样式id |  |
| `subcompanyid` | `String` | **是** | 当前选中移动门户组织结构：分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `counts` | `Json` | 数据统计 |
| `counts:isHaveNoRead` | `String` | 是否显示未读 |
| `counts:noReadNum` | `String` | 未读数 |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 返回的文档具体数据集合 如：摘要，创建日期等 |
| `data:docsubject` | `String` | 文档信息 |
| `data:docsubject:docid` | `String` | 文档id |
| `data:docsubject:img` | `String` | 图片 |
| `data:docsubject:link` | `String` | 链接地址 |
| `data:docsubject:mobilelink` | `String` | 移动端链接地址 |
| `data:docsubject:name` | `String` | 文档标题 |
| `docParams` | `String` | 文档来源具体设置：是否置顶、排序、显示方式 |
| `docParams:docCatalogIds` | `String` | 文档目录 |
| `docParams:order` | `String` | 排序 |
| `docParams:orderby` | `String` | 排序字段 |
| `docParams:showType` | `String` | 标签页是否显示未读： 0不显示1显示 |
| `docParams:virtualCatalogIds` | `String` | 虚拟目录 |
| `esetting` | `Json` | 设置信息 |
| `from` | `String` | 来源 |
| `params` | `Json` | 设置信息 |
| `srcStyle` | `String` | 图片样式设置，是否自适应高度，宽度、高度 |
| `srcStyle:autoheight` | `String` | 高度，0自适应 |
| `srcStyle:pictureheight` | `String` | 缩略图高度 |
| `srcStyle:picturewidth` | `String` | 缩略图宽度 |
| `srcStyle:tabid` | `String` | 当前tab页id |
| `tabids` | `Json` | tab页id |
| `tabsetting` | `String` | 具体设置：更多加载内容、是否显示标签页未读选项、是否直接打开附件等 |
| `tabsetting:catalogId` | `String` | 已选文档目录id值 |
| `tabsetting:catalogIds` | `String` | 已选文档目录id值 |
| `tabsetting:count` | `String` | 统计信息 |
| `tabsetting:count:isHaveNoRead` | `String` | 是否显示未读 |
| `tabsetting:count:noReadNum` | `String` | 未读个数 |
| `tabsetting:height` | `String` | 高度 |
| `tabsetting:imgs` | `String` | 默认图片 |
| `tabsetting:isShowSettingShowType` | `String` | 是否显示标签页未读选项 0不显示1显示 |
| `tabsetting:more` | `String` | 更多设置 |
| `tabsetting:openAttachment` | `String` | 是否直接打开附件 |
| `tabsetting:rollDirection` | `String` | 滚动方向 |
| `tabsetting:showModeId` | `String` | 显示方式 如：上图式、列表式等 |
| `tabsetting:showType` | `String` | 标签页显示未读 0/1 |
| `tabsetting:style` | `String` | 样式 |
| `tabsetting:width` | `String` | 宽度 |
| `titles` | `Json` | tab页标题 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "data": [
      {
        "docsubject": {
          "img": "",
          "name": "ttt618",
          "link": "/spa/document/index.jsp?id=6514&newsDataType=fullSearch&router=1#/main/document/detail"
        },
        "summary": "",
        "doclastmoddate": "2019-06-18",
        "doccreatedate": "2019-06-18",
        "doccreatetime": "17:55:36"
      },
      {
        "docsubject": {
          "img": "/images/ecology8/statusicon/BDNew_wev8.png ",
          "name": "618",
          "link": "/spa/document/index.jsp?id=6511&newsDataType=fullSearch&router=1#/main/document/detail"
        },
        "summary": "",
        "doclastmoddate": "2019-06-18",
        "doccreatedate": "2019-06-18",
        "doccreatetime": "17:38:09"
      },
      {
        "docsubject": {
          "img": "",
          "name": "测试2248082无法接收",
          "link": "/spa/document/index.jsp?id=6164&newsDataType=fullSearch&router=1#/main/document/detail"
        },
        "summary": "",
        "doclastmoddate": "2019-05-16",
        "doccreatedate": "2019-04-10",
        "doccreatetime": "13:58:21"
      },
      {
        "docsubject": {
          "img": "",
          "name": "测试正文乱码",
          "link": "/spa/document/index.jsp?id=6021&newsDataType=fullSearch&router=1#/main/document/detail"
        },
        "summary": "",
        "doclastmoddate": "2019-04-29",
        "doccreatedate": "2019-04-15",
        "doccreatetime": "16:14:04"
      },
      {
        "docsubject": {
          "img": "",
          "name": "发文流程-李长昊-t-2019-04-04-副本",
          "link": "/spa/document/index.jsp?id=5694&newsDataType=fullSearch&router=1#/main/document/detail"
        },
        "summary": "",
        "doclastmoddate": "2019-04-04",
        "doccreatedate": "2019-04-04",
        "doccreatetime": "09:49:06"
      }
    ],
    "docParams": {
      "orderby": [],
      "showType": [
        "0"
      ],
      "docCatalogIds": [
        "90"
      ],
      "order": []
    },
    "srcStyle": {
      "tabid": "1",
      "pictureheight": "50px",
      "autoheight": "0",
      "picturewidth": "100%"
    },
    "from": "document",
    "tabsetting": {
      "imgs": [
        "/images/homepage/noimgdefault_wev8.jpg",
        "/images/homepage/noimgdefault_wev8.jpg",
        "/weaver/weaver.file.FileDownload?fileid=a7e38d99f7b0b92ca9f026fd6517f9315a0e1a9d9edec140389e53ad05563099e79b10a1f6683d3d06c89b7166bd241cc83b58f343a40ae66",
        "/images/homepage/noimgdefault_wev8.jpg",
        "/images/homepage/noimgdefault_wev8.jpg"
      ],
      "more": "{\"orderby\":[],\"docCatalogIds\":[\"90\"],\"order\":[]}",
      "count": {
        "isHaveNoRead": "",
        "noReadNum": ""
      },
      "rollDirection": "none",
      "openAttachment": "0",
      "catalogIds": "90",
      "catalogId": "90",
      "isShowSettingShowType": "0",
      "width": "100%",
      "showModeId": "10",
      "showType": "0",
      "style": {
        "abstractFont": "13",
        "titleColor": "#de0849",
        "abstractColor": "#2c4dd5",
        "abstractstyle": "normal",
        "abstractWeight": "0",
        "titleFont": "13",
        "titleSize": "16",
        "abstractSize": "12",
        "titleWeight": "0",
        "titlestyle": "10"
      },
      "height": "50px"
    }
  },
  "tabids": [
    "1"
  ],
  "counts": [
    {
      "isHaveNoRead": "",
      "noReadNum": ""
    }
  ],
  "titles": [
    "文档目录"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "1819",
    "hpid": "206",
    "subCompanyId": 35,
    "tabsize": 1,
    "styleid": "synergys4",
    "ebaseid": "7"
  },
  "esetting": {
    "eid": "1819",
    "linkmode": "2",
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": {
      "summary": "76",
      "doccreatetime": "52",
      "images": "76",
      "doccreatedate": "72",
      "doclastmoddate": "72",
      "docsubject": "*"
    },
    "methodvalue": "1",
    "tabwidth": "76",
    "ebaseid": "7",
    "isremind": "0_"
  }
}
```

---

### 58. 获取门户【文档内容】元素列表信息

> **补充说明**：获取门户【文档内容】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/doccontent`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【文档内容】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id　25 |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回文档内容 |

#### 响应示例 (Response Example)

```json
{
  "data": "<html>\n<head>\n\t<title></title>\n\t\n</head>\n<body>\n<p>1111附件111学习兴趣</p>\n</body>\n</html>"
}
```

---

### 59. 获取门户【新建流程】元素信息

> **补充说明**：获取门户【新建流程】元素信息

- **接口路径 (Endpoint)**: `/api/portal/element/addwftab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【新建流程】元素信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型 |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |
| `tabid` | `String` | **是** | tab页id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回的数据信息 |
| `data:wfname:link` | `String` | 流程链接 |
| `data:wfname:name` | `String` | 流程名称 |
| `data:wfname:wfId` | `String` | 流程id |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "wfname": {
        "name": "fxh_206008",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=650&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "650"
      }
    },
    {
      "wfname": {
        "name": "fxh_老表单001A",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=468&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "468"
      }
    },
    {
      "wfname": {
        "name": "浏览框超链接主表-hc",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=504&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "504"
      }
    },
    {
      "wfname": {
        "name": "wjw-借款1",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=5324&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "5324"
      }
    },
    {
      "wfname": {
        "name": "zh--选择框封存",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=724&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "724"
      }
    },
    {
      "wfname": {
        "name": "zh-单行多行数据",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=3184&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "3184"
      }
    },
    {
      "wfname": {
        "name": "zh-意见征询（会签）",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=244&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "244"
      }
    },
    {
      "wfname": {
        "name": "zh-明细字段作为操作者",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=393&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "393"
      }
    },
    {
      "wfname": {
        "name": "附件字段",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=5784&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "5784"
      }
    },
    {
      "wfname": {
        "name": "邮箱申请",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=408&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "408"
      }
    },
    {
      "wfname": {
        "name": "cctest",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=5193&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "5193"
      }
    },
    {
      "wfname": {
        "name": "业务合同审批",
        "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=34&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
        "wfId": "34"
      }
    }
  ]
}
```

---

### 60. 获取门户【新建流程】元素信息

> **补充说明**：获取门户【新建流程】元素信息

- **接口路径 (Endpoint)**: `/api/portal/element/addwf`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【新建流程】元素信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型addwf |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 返回数据 |
| `data:wfname:link` | `String` | 流程链接 |
| `data:wfname:name` | `String` | 流程名称 |
| `data:wfname:wfId` | `String` | 流程id |
| `esetting` | `Json` | 设置信息 |
| `params` | `Json` | 设置信息 |
| `tabids` | `Json` | tab页id集合 |
| `titles` | `Json` | tab页标题集合  常用流程，我的收藏 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "data": [
      {
        "wfname": {
          "name": "lyx会议系统审批流程",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=47&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "47"
        }
      },
      {
        "wfname": {
          "name": "ze1023",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=164&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "164"
        }
      },
      {
        "wfname": {
          "name": "留言",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=5&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "5"
        }
      },
      {
        "wfname": {
          "name": "发文流程",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=87&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "87"
        }
      },
      {
        "wfname": {
          "name": "收文流程",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=82&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "82"
        }
      },
      {
        "wfname": {
          "name": "lhy001",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=86&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "86"
        }
      },
      {
        "wfname": {
          "name": "tcy01",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=64&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "64"
        }
      },
      {
        "wfname": {
          "name": "车辆wyf-系-普通模板",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=1020&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "1020"
        }
      },
      {
        "wfname": {
          "name": "车辆引用wyf",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=258&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "258"
        }
      },
      {
        "wfname": {
          "name": "车辆自表单wyf",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=576&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "576"
        }
      },
      {
        "wfname": {
          "name": "资产申购-wull（自，明）",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=340&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "340"
        }
      },
      {
        "wfname": {
          "name": "wyf流程转数据-主从表",
          "link": "/spa/workflow/index_form.jsp#/main/workflow/req?iscreate=1&workflowid=932&isagent=0&f_weaver_belongto_userid=&beagenter=0&f_weaver_belongto_usertype=0&_key=6d9922",
          "wfId": "932"
        }
      }
    ]
  },
  "tabids": [
    "1",
    "2"
  ],
  "titles": [
    "常用流程",
    "我的收藏"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "1935",
    "hpid": "206",
    "subCompanyId": 35,
    "tabsize": 2,
    "styleid": "synergys4",
    "ebaseid": "addwf"
  },
  "esetting": {
    "linkmode": "3",
    "displayLayout": "1",
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": {},
    "tabwidth": "76"
  }
}
```

---

### 61. 获取门户【日历日程】元素列表信息

> **补充说明**：获取门户【日历日程】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/mycalendar`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00
- **模块归属**: `门户管理 > 获取门户【日历日程】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型MyCalendar |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户Id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subCompanyId` | `String` | **是** | 分部Id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 日历日程信息 |
| `data:dateevents` | `Json` | 日历信息 |
| `data:end` | `String` | 结束日期 |
| `data:events` | `String` | 日程信息 |
| `data:start` | `String` | 开始日期 |
| `esetting` | `Json` | 设置信息 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "dateevents": {
      "2019-12-07": [
        "1620"
      ],
      "2019-12-09": [
        "1628",
        "1629"
      ],
      "2019-12-04": [
        "1607",
        "1601",
        "1610",
        "1608"
      ],
      "2019-12-26": [
        "1733",
        "1674",
        "1688",
        "1687",
        "1703"
      ],
      "2019-12-03": [
        "1597"
      ],
      "2019-12-25": [
        "1728",
        "1731",
        "1727",
        "1729"
      ],
      "2019-12-06": [
        "1621",
        "1623",
        "1620"
      ],
      "2019-12-05": [
        "1612",
        "1614",
        "1606",
        "1609",
        "1598",
        "1613",
        "1615",
        "1616",
        "1617",
        "1618"
      ],
      "2019-12-27": [
        "1668",
        "1735"
      ],
      "2019-12-22": [
        "1706"
      ],
      "2019-12-24": [
        "1667"
      ],
      "2019-12-23": [
        "1722",
        "1721",
        "1723",
        "1719",
        "1720"
      ],
      "2019-12-20": [
        "1666"
      ],
      "2020-01-02": [
        "1713"
      ],
      "2020-01-03": [
        "1670"
      ],
      "2019-12-19": [
        "1709",
        "1710",
        "1711",
        "1712",
        "1702",
        "1675"
      ],
      "2019-12-18": [
        "1660",
        "1702"
      ],
      "2019-12-15": [
        "1657"
      ],
      "2019-12-14": [
        "1656"
      ],
      "2019-12-17": [
        "1665",
        "1659",
        "1702"
      ],
      "2019-12-16": [
        "1658"
      ],
      "2019-12-11": [
        "1644",
        "1637",
        "1638",
        "1645",
        "1646",
        "1647"
      ],
      "2019-12-10": [
        "1636",
        "1639",
        "1642",
        "1634"
      ],
      "2019-12-13": [
        "1664",
        "1649",
        "1661",
        "1655",
        "1679",
        "1680",
        "1689",
        "1691"
      ],
      "2019-12-12": [
        "1641",
        "1640",
        "1649"
      ],
      "2019-12-31": [
        "1669"
      ]
    },
    "start": "2019-12-01 00:00",
    "end": "2020-01-04 23:59",
    "events": {
      "1660": [
        "1660",
        "1",
        "213213",
        "2019-12-18",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-18 02:00至2019-12-18 21:59"
      ],
      "1613": [
        "1613",
        "1",
        "1",
        "2019-12-05",
        "00:00",
        "AM",
        "#b1365f",
        "2019-12-05 00:00至2019-12-05 23:59"
      ],
      "1657": [
        "1657",
        "1",
        "213213",
        "2019-12-15",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-15 02:00至2019-12-15 21:59"
      ],
      "1612": [
        "1612",
        "1",
        "测试会议1--11--3333",
        "2019-12-05",
        "10:27",
        "AM",
        "#b1365f",
        "2019-12-05 10:27至2019-12-05 22:20"
      ],
      "1656": [
        "1656",
        "1",
        "213213",
        "2019-12-14",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-14 02:00至2019-12-14 21:59"
      ],
      "1733": [
        "1733",
        "1",
        "222",
        "2019-12-26",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-26 02:00至2019-12-26 21:59"
      ],
      "1655": [
        "1655",
        "1",
        "213213",
        "2019-12-13",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-13 02:00至2019-12-13 21:59"
      ],
      "1610": [
        "1610",
        "1",
        "测试会议数据不同符号的呢《中心》“死就死”婆罗门‘思考思考@的角度讲&基督教的222（佛教）！bungalow~%*）02-2-中文",
        "2019-12-04",
        "15:33",
        "PM",
        "#b1365f",
        "2019-12-04 15:33至2019-12-04 22:52"
      ],
      "1731": [
        "1731",
        "1",
        "323",
        "2019-12-25",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-25 02:00至2019-12-25 21:59"
      ],
      "1618": [
        "1618",
        "1",
        "客户001-客户联系",
        "2019-12-05",
        "19:23",
        "PM",
        "#1b887a",
        "2019-12-05 19:23至2019-12-05 23:59"
      ],
      "1617": [
        "1617",
        "1",
        "客户001-客户联系",
        "2019-12-05",
        "19:15",
        "PM",
        "#1b887a",
        "2019-12-05 19:15至2019-12-05 23:59"
      ],
      "1616": [
        "1616",
        "1",
        "测试ihuiy去怕去3889·010·***（*@#（？、。！《将才卡洛斯》(复制)(复制)(复制)",
        "2019-12-05",
        "00:00",
        "AM",
        "#b1365f",
        "2019-12-05 00:00至2019-12-05 23:59"
      ],
      "1615": [
        "1615",
        "1",
        "888",
        "2019-12-05",
        "00:00",
        "AM",
        "#b1365f",
        "2019-12-05 00:00至2019-12-05 23:59"
      ],
      "1659": [
        "1659",
        "1",
        "213213",
        "2019-12-17",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-17 02:00至2019-12-17 21:59"
      ],
      "1614": [
        "1614",
        "1",
        "4444",
        "2019-12-05",
        "00:00",
        "AM",
        "#b1365f",
        "2019-12-05 00:00至2019-12-05 23:59"
      ],
      "1658": [
        "1658",
        "1",
        "213213",
        "2019-12-16",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-16 02:00至2019-12-16 21:59"
      ],
      "1735": [
        "1735",
        "1",
        "测试虎i有01-01--1-82838221",
        "2019-12-27",
        "09:12",
        "AM",
        "#4e5d6c",
        "2019-12-27 09:12至2019-12-27 23:20"
      ],
      "1670": [
        "1670",
        "1",
        "我是来测试周期会议的1213064",
        "2020-01-03",
        "10:47",
        "AM",
        "#b1365f",
        "2020-01-03 10:47至2020-01-03 10:47"
      ],
      "1668": [
        "1668",
        "1",
        "我是来测试周期会议的1213064",
        "2019-12-27",
        "10:47",
        "AM",
        "#b1365f",
        "2019-12-27 10:47至2019-12-27 10:47"
      ],
      "1623": [
        "1623",
        "1",
        "测试222",
        "2019-12-06",
        "00:00",
        "AM",
        "#b1365f",
        "2019-12-06 00:00至2019-12-06 23:59"
      ],
      "1667": [
        "1667",
        "1",
        "我是来测试周期会议的1213064",
        "2019-12-24",
        "10:47",
        "AM",
        "#b1365f",
        "2019-12-24 10:47至2019-12-24 10:47"
      ],
      "1666": [
        "1666",
        "1",
        "我是来测试周期会议的1213064",
        "2019-12-20",
        "10:47",
        "AM",
        "#b1365f",
        "2019-12-20 10:47至2019-12-20 10:47"
      ],
      "1621": [
        "1621",
        "1",
        "测试会议二",
        "2019-12-06",
        "00:00",
        "AM",
        "#b1365f",
        "2019-12-06 00:00至2019-12-06 23:59"
      ],
      "1665": [
        "1665",
        "1",
        "我是来测试周期会议的1213064",
        "2019-12-17",
        "10:47",
        "AM",
        "#b1365f",
        "2019-12-17 10:47至2019-12-17 10:47"
      ],
      "1620": [
        "1620",
        "1",
        "测试会议室",
        "2019-12-06",
        "00:00",
        "AM",
        "#b1365f",
        "2019-12-06 00:00至2019-12-07 23:59"
      ],
      "1664": [
        "1664",
        "1",
        "我是来测试周期会议的1213064",
        "2019-12-13",
        "10:47",
        "AM",
        "#b1365f",
        "2019-12-13 10:47至2019-12-13 10:47"
      ],
      "1661": [
        "1661",
        "1",
        "问问",
        "2019-12-13",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-13 02:00至2019-12-13 21:59"
      ],
      "1709": [
        "1709",
        "1",
        "问问",
        "2019-12-19",
        "18:00",
        "PM",
        "#b1365f",
        "2019-12-19 18:00至2019-12-19 18:19"
      ],
      "1629": [
        "1629",
        "1",
        "北京泛微3-客户联系",
        "2019-12-09",
        "13:54",
        "PM",
        "#1b887a",
        "2019-12-09 13:54至2019-12-09 23:59"
      ],
      "1706": [
        "1706",
        "1",
        "测试周日的会议1111",
        "2019-12-22",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-22 02:00至2019-12-22 21:59"
      ],
      "1628": [
        "1628",
        "1",
        "北京泛微3-客户联系",
        "2019-12-09",
        "09:52",
        "AM",
        "#1b887a",
        "2019-12-09 09:52至2019-12-09 23:59"
      ],
      "1703": [
        "1703",
        "1",
        "测试会议101---2911",
        "2019-12-26",
        "20:00",
        "PM",
        "#b1365f",
        "2019-12-26 20:00至2019-12-26 21:59"
      ],
      "1702": [
        "1702",
        "1",
        "se 2232",
        "2019-12-17",
        "13:36",
        "PM",
        "#4e5d6c",
        "2019-12-17 13:36至2019-12-19 21:59"
      ],
      "1669": [
        "1669",
        "1",
        "我是来测试周期会议的1213064",
        "2019-12-31",
        "10:47",
        "AM",
        "#b1365f",
        "2019-12-31 10:47至2019-12-31 10:47"
      ],
      "1680": [
        "1680",
        "1",
        "水电费",
        "2019-12-13",
        "11:37",
        "AM",
        "#4e5d6c",
        "2019-12-13 11:37至2019-12-13 21:59"
      ],
      "1679": [
        "1679",
        "1",
        "新的做法",
        "2019-12-13",
        "11:36",
        "AM",
        "#4e5d6c",
        "2019-12-13 11:36至2019-12-13 21:59"
      ],
      "1712": [
        "1712",
        "1",
        "啊稍等哈爱我哦2190012 上帝阿散井的902321ISA点击902902",
        "2019-12-19",
        "17:20",
        "PM",
        "#b1365f",
        "2019-12-19 17:20至2019-12-19 19:59"
      ],
      "1634": [
        "1634",
        "1",
        "测试ihuiy1=1=1=",
        "2019-12-10",
        "20:40",
        "PM",
        "#b1365f",
        "2019-12-10 20:40至2019-12-10 22:59"
      ],
      "1711": [
        "1711",
        "1",
        "333322122",
        "2019-12-19",
        "18:40",
        "PM",
        "#b1365f",
        "2019-12-19 18:40至2019-12-19 19:19"
      ],
      "1710": [
        "1710",
        "1",
        "2444",
        "2019-12-19",
        "17:20",
        "PM",
        "#b1365f",
        "2019-12-19 17:20至2019-12-19 18:39"
      ],
      "1598": [
        "1598",
        "1",
        "测试ihuiy去怕去3889·010·***（*@#（？、。！《将才卡洛斯》",
        "2019-12-05",
        "00:00",
        "AM",
        "#b1365f",
        "2019-12-05 00:00至2019-12-05 23:59"
      ],
      "1675": [
        "1675",
        "1",
        "4地方2耳朵的211 就 是的 ‘上课3’",
        "2019-12-19",
        "12:15",
        "PM",
        "#666666",
        "2019-12-19 12:15至2019-12-19 21:59"
      ],
      "1597": [
        "1597",
        "1",
        "xxg19110809-客户联系",
        "2019-12-03",
        "11:12",
        "AM",
        "#1b887a",
        "2019-12-03 11:12至2019-12-03 23:59"
      ],
      "1674": [
        "1674",
        "1",
        "哈酒看i",
        "2019-12-26",
        "03:00",
        "AM",
        "#000000",
        "2019-12-26 03:00至2019-12-26 21:59"
      ],
      "1719": [
        "1719",
        "1",
        "汉东城市银行10-客户联系",
        "2019-12-23",
        "15:40",
        "PM",
        "#1b887a",
        "2019-12-23 15:40至2019-12-23 23:59"
      ],
      "1639": [
        "1639",
        "1",
        "求安慰",
        "2019-12-10",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-10 02:00至2019-12-10 21:59"
      ],
      "1638": [
        "1638",
        "1",
        "测试会议00101(复制)",
        "2019-12-11",
        "11:00",
        "AM",
        "#b1365f",
        "2019-12-11 11:00至2019-12-11 21:59"
      ],
      "1637": [
        "1637",
        "1",
        "测试会议00101",
        "2019-12-11",
        "11:00",
        "AM",
        "#b1365f",
        "2019-12-11 11:00至2019-12-11 21:59"
      ],
      "1636": [
        "1636",
        "1",
        "测试会议-1-1-1-2",
        "2019-12-10",
        "16:20",
        "PM",
        "#b1365f",
        "2019-12-10 16:20至2019-12-10 21:19"
      ],
      "1713": [
        "1713",
        "1",
        "测试议程公开属性222",
        "2020-01-02",
        "02:00",
        "AM",
        "#b1365f",
        "2020-01-02 02:00至2020-01-02 21:59"
      ],
      "1691": [
        "1691",
        "1",
        "泛微黑龙江-客户联系",
        "2019-12-13",
        "14:41",
        "PM",
        "#1b887a",
        "2019-12-13 14:41至2019-12-13 23:59"
      ],
      "1646": [
        "1646",
        "1",
        "uwi10102-测试会议冲突的啦啦啦jogg 空格 加单引号＇干嘛呢＇(复制)910019882计算机所",
        "2019-12-11",
        "22:41",
        "PM",
        "#b1365f",
        "2019-12-11 22:41至2019-12-11 22:58"
      ],
      "1723": [
        "1723",
        "1",
        "222",
        "2019-12-23",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-23 02:00至2019-12-23 21:59"
      ],
      "1601": [
        "1601",
        "1",
        "阿斯达",
        "2019-12-04",
        "03:00",
        "AM",
        "#4e5d6c",
        "2019-12-04 03:00至2019-12-04 21:59"
      ],
      "1645": [
        "1645",
        "1",
        "uwi10102-测试会议冲突的啦啦啦jogg 空格 加单引号＇干嘛呢＇",
        "2019-12-11",
        "20:40",
        "PM",
        "#b1365f",
        "2019-12-11 20:40至2019-12-11 21:59"
      ],
      "1689": [
        "1689",
        "1",
        "泛微黑龙江-客户联系",
        "2019-12-13",
        "14:06",
        "PM",
        "#1b887a",
        "2019-12-13 14:06至2019-12-13 23:59"
      ],
      "1722": [
        "1722",
        "1",
        "测试会议101001",
        "2019-12-23",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-23 02:00至2019-12-23 21:59"
      ],
      "1644": [
        "1644",
        "1",
        "测试会议201912110234中国 jogg 空格 加单引号＇干嘛呢＇",
        "2019-12-11",
        "21:20",
        "PM",
        "#b1365f",
        "2019-12-11 21:20至2019-12-11 21:39"
      ],
      "1721": [
        "1721",
        "1",
        "为",
        "2019-12-23",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-23 02:00至2019-12-23 21:59"
      ],
      "1688": [
        "1688",
        "3",
        "搜索545",
        "2019-12-26",
        "03:00",
        "AM",
        "#666666",
        "2019-12-26 03:00至2019-12-26 21:59"
      ],
      "1720": [
        "1720",
        "1",
        "汉东城市银行10-客户联系",
        "2019-12-23",
        "15:40",
        "PM",
        "#1b887a",
        "2019-12-23 15:40至2019-12-23 23:59"
      ],
      "1687": [
        "1687",
        "3",
        "三四次从",
        "2019-12-26",
        "03:00",
        "AM",
        "#666666",
        "2019-12-26 03:00至2019-12-26 21:59"
      ],
      "1642": [
        "1642",
        "1",
        "9000303003300303 ====lyx会议审批流程1-系统表单-普通-系统管理员-2019-12-10",
        "2019-12-10",
        "03:00",
        "AM",
        "#666666",
        "2019-12-10 03:00至2019-12-10 21:59"
      ],
      "1641": [
        "1641",
        "1",
        "测试会议-1--1",
        "2019-12-12",
        "18:00",
        "PM",
        "#b1365f",
        "2019-12-12 18:00至2019-12-12 20:39"
      ],
      "1640": [
        "1640",
        "1",
        "是2121",
        "2019-12-12",
        "15:00",
        "PM",
        "#b1365f",
        "2019-12-12 15:00至2019-12-12 21:59"
      ],
      "1609": [
        "1609",
        "1",
        "测试ihuiy去怕去3889·010·***（*@#（？、。！《将才卡洛斯》(复制)(复制)",
        "2019-12-05",
        "00:00",
        "AM",
        "#b1365f",
        "2019-12-05 00:00至2019-12-05 23:59"
      ],
      "1608": [
        "1608",
        "1",
        "测试客户10-1-1-30023-客户联系",
        "2019-12-04",
        "13:38",
        "PM",
        "#1b887a",
        "2019-12-04 13:38至2019-12-04 23:59"
      ],
      "1729": [
        "1729",
        "1",
        "测试会议子弟你10011-1-1(复制)(复制)",
        "2019-12-25",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-25 02:00至2019-12-25 21:59"
      ],
      "1607": [
        "1607",
        "1",
        "999",
        "2019-12-04",
        "03:00",
        "AM",
        "#4e5d6c",
        "2019-12-04 03:00至2019-12-04 21:59"
      ],
      "1728": [
        "1728",
        "1",
        "测试会议子弟你10011-1-1(复制)",
        "2019-12-25",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-25 02:00至2019-12-25 21:59"
      ],
      "1606": [
        "1606",
        "1",
        "测试ihuiy去怕去3889·010·***（*@#（？、。！《将才卡洛斯》(复制)",
        "2019-12-05",
        "00:00",
        "AM",
        "#b1365f",
        "2019-12-05 00:00至2019-12-05 23:59"
      ],
      "1727": [
        "1727",
        "1",
        "测试会议子弟你10011-1-1",
        "2019-12-25",
        "02:00",
        "AM",
        "#b1365f",
        "2019-12-25 02:00至2019-12-25 21:59"
      ],
      "1649": [
        "1649",
        "1",
        "测试流程自定义字段直接对应生成会议数据功能01012929--11",
        "2019-12-12",
        "15:27",
        "PM",
        "#666666",
        "2019-12-12 15:27至2019-12-13 19:27"
      ],
      "1647": [
        "1647",
        "1",
        "lcq_客户1-客户联系",
        "2019-12-11",
        "14:10",
        "PM",
        "#1b887a",
        "2019-12-11 14:10至2019-12-11 23:59"
      ]
    }
  },
  "esetting": {
    "userid": 1
  }
}
```

---

### 62. 获取门户【最新会议】元素列表信息

> **补充说明**：获取门户【最新会议】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/newmeeting`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【最新会议】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id 12 |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户页面id |  |
| `styleid` | `String` | **是** | 样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回会议信息 |
| `esetting` | `Json` | 设置信息 |
| `esetting:linkmode` | `String` | 链接打开方式 |
| `esetting:widths` | `String` | 设置信息 |
| `esetting:widths:address` | `String` | 会议室 |
| `esetting:widths:begindate` | `String` | 开始日期 |
| `esetting:widths:begintime` | `String` | 开始时间 |
| `esetting:widths:meetingStatus` | `String` | 状态 |
| `esetting:widths:name` | `String` | 名称 |

#### 响应示例 (Response Example)

```json
{
  "data": [],
  "esetting": {
    "linkmode": "2",
    "widths": {
      "address": "150",
      "begindate": "76",
      "meetingStatus": "50",
      "name": "*",
      "begintime": "62"
    }
  }
}
```

---

### 63. 获取门户【最新客户/未读文档】元素列表信息

> **补充说明**：获取门户【最新客户/未读文档】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/view`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【最新客户/未读文档】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id 11 |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户页面id |  |
| `styleid` | `String` | **是** | 样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回客户/文档数据集 |
| `data:doclastmoddate` | `String` | 文档最后修改日期 |
| `data:docsubject` | `String` | 文档信息 |
| `data:docsubject:docid` | `String` | 文档id |
| `data:docsubject:img` | `String` | 图片 |
| `data:docsubject:link` | `String` | PC端链接地址 |
| `data:docsubject:mobilelink` | `String` | 移动端链接地址 |
| `data:docsubject:nmae` | `String` | 文档名称 |
| `esetting` | `Json` | 客户/文档具体设置信息 |
| `esetting:linkmode` | `Json` | 客户/文档链接打开方式 |
| `esetting:widths` | `String` | 客户/文档显示字段 |
| `esetting:widths:doclastmoddate` | `String` | 文档修改日期 |
| `esetting:widths:docsubject` | `String` | 文档标题 |
| `esetting:widths:movedate` | `String` | 客户分配日期 |
| `esetting:widths:movetime` | `String` | 客户分配时间 |
| `esetting:widths:name` | `String` | 客户名称 |
| `esetting:widths:status` | `String` | 客户状态 |

#### 响应示例 (Response Example)

```json
{
  "data": [],
  "esetting": {
    "linkmode": "2",
    "widths": {
      "movedate": "76",
      "name": "*",
      "movetime": "62",
      "status": "100"
    }
  }
}
```

---

### 64. 获取门户【期刊中心】元素列表信息

> **补充说明**：获取门户【期刊中心】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/magazine`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【期刊中心】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id 18 |  |
| `eid` | `String` | **是** | 当前元素Id |  |
| `hpid` | `String` | **是** | 门户页面id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回的期刊信息 |
| `data:docsubject:img` | `String` | 图片 |
| `data:docsubject:link` | `String` | 链接 |
| `data:docsubject:name` | `String` | 名称 |
| `data:images` | `String` | 图片 |
| `data:list` | `String` | 列表 |
| `data:summary` | `String` | 摘要 |
| `esetting` | `Json` | 设置信息 |
| `esetting:linkmode` | `String` | 链接方式 |
| `esetting:widths:docsubject` | `String` | 显示字段标题 |
| `esetting:widths:img` | `String` | 显示字段图片 |
| `esetting:widths:list` | `String` | 显示字段期刊列表 |
| `esetting:widths:summary` | `String` | 显示字段摘要 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "docsubject": {
        "img": "",
        "name": "",
        "link": "/tom_magazine.jsp?typeID=2&id=2087"
      },
      "summary": ""
    },
    {
      "docsubject": {
        "img": "",
        "name": "",
        "link": "/tom_magazine.jsp?typeID=1&id="
      },
      "summary": ""
    },
    {
      "docsubject": {
        "img": "",
        "name": "",
        "link": "/tom_magazine.jsp?typeID=3&id=2186"
      },
      "summary": ""
    }
  ],
  "esetting": {
    "linkmode": "",
    "width": 120,
    "widths": {
      "summary": "",
      "docsubject": "*"
    },
    "height": 108
  }
}
```

---

### 65. 获取门户【流程中心】元素数据

> **补充说明**：获取门户【流程中心】元素数据

- **接口路径 (Endpoint)**: `/api/portal/element/workflowtab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【流程中心】元素数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型  8流程 |  |
| `eid` | `String` | **是** | 当前门户内，单个元素对应id |  |
| `hpid` | `String` | **是** | 当前选中移动门户页面id |  |
| `pagenum` | `String` | **是** | 分页 |  |
| `subcompanyid` | `String` | **是** | 当前选中移动门户组织结构：分部id |  |
| `tabid` | `String` | **是** | 内容来源，tab页id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回的流程数据 |
| `data:creater` | `String` | 流程创建者相关信息 |
| `data:creater:name` | `String` | 创建者姓名 |
| `data:creater:userid` | `String` | 创建者id |
| `data:requestname` | `String` | 请求返回的数据信息 |
| `data:requestname:img` | `String` | 图片 |
| `data:requestname:lasttitle` | `String` | 后缀标题 |
| `data:requestname:link` | `String` | 链接地址 |
| `data:requestname:name` | `String` | 流程名称<富文本> |
| `data:requestname:pretitle` | `String` | 前缀标题 |
| `data:requestname:requestid` | `String` | 流程id |
| `receivedate` | `String` | 日期 |
| `receivetime` | `String` | 时间 |
| `tabsetting` | `Json` | 设置数据：滚动方向、速度、高度等 |
| `tabsetting:count` | `String` | 数量 |
| `tabsetting:from` | `String` | 来源，workflow流程 |
| `tabsetting:height` | `String` | 高度，0为自适应高度 |
| `tabsetting:more` | `String` | 更多设置信息：如显示退回、转发、传阅等 |
| `tabsetting:scrollDirection` | `String` | 滚动方向 |
| `workflowtype` | `String` | 流程类型 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "requestname": {
        "lasttitle": "",
        "img": "/images/ecology8/statusicon/BDNew_wev8.png",
        "pretitle": "",
        "requestid": "8563044",
        "name": "<span><span>数据审批+<span>测试1 </span></span></span>",
        "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=8563044&isovertime="
      },
      "creater": {
        "name": "系统管理员",
        "userid": "1"
      },
      "workflowtype": "多字段03-yhx(流程)",
      "receivedate": "2019-08-12",
      "receivetime": "09:54:23"
    },
    {
      "requestname": {
        "lasttitle": "",
        "img": "",
        "pretitle": "",
        "requestid": "8563038",
        "name": "1",
        "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=8563038&isovertime="
      },
      "creater": {
        "name": "系统管理员",
        "userid": "1"
      },
      "workflowtype": "系统提醒工作流",
      "receivedate": "2019-08-12",
      "receivetime": "09:01:20"
    },
    {
      "requestname": {
        "lasttitle": "",
        "img": "",
        "pretitle": "",
        "requestid": "8563037",
        "name": "1",
        "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=8563037&isovertime="
      },
      "creater": {
        "name": "系统管理员",
        "userid": "1"
      },
      "workflowtype": "系统提醒工作流",
      "receivedate": "2019-08-12",
      "receivetime": "09:01:19"
    },
    {
      "requestname": {
        "lasttitle": "",
        "img": "",
        "pretitle": "",
        "requestid": "8563036",
        "name": "1",
        "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=8563036&isovertime="
      },
      "creater": {
        "name": "系统管理员",
        "userid": "1"
      },
      "workflowtype": "系统提醒工作流",
      "receivedate": "2019-08-12",
      "receivetime": "09:01:17"
    },
    {
      "requestname": {
        "lasttitle": "",
        "img": "",
        "pretitle": "",
        "requestid": "8563035",
        "name": "1",
        "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=8563035&isovertime="
      },
      "creater": {
        "name": "系统管理员",
        "userid": "1"
      },
      "workflowtype": "系统提醒工作流",
      "receivedate": "2019-08-12",
      "receivetime": "09:01:16"
    }
  ],
  "tabsetting": {
    "height": 0,
    "from": "workflow",
    "scrollDirection": "",
    "more": "{\"showNoReply\":\"1\",\"isExclude\":\"2\",\"perpage\":\"5\",\"isExcluded\":\"2\",\"orderby\":\"\",\"isall\":\"1\",\"flowCount\":\"1\",\"showView\":\"-1\",\"showForward\":\"1\",\"isArrangement\":\"1\",\"flowids\":[],\"showTimeout\":\"0\",\"viewType\":\"2\",\"showCY\":\"1\",\"typeids\":[],\"fromhp\":\"1\",\"nodeCount\":0,\"hpwhere\":\"\",\"showReject\":\"0\",\"typeCount\":0,\"nodeids\":[]}",
    "count": "579"
  }
}
```

---

### 66. 获取门户【流程中心】元素数据

> **补充说明**：获取门户【流程中心】元素数据

- **接口路径 (Endpoint)**: `/api/portal/element/workflow`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【流程中心】元素数据`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型 8流程 |  |
| `eid` | `String` | **是** | 当前门户内，单个元素对应id |  |
| `hpid` | `String` | **是** | 当前选中门户页面id |  |
| `styleid` | `String` | **是** | 样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `counts` | `Int` | 数据统计 |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 返回的流程数据 |
| `data:data` | `String` | 返回的流程数据集合 |
| `data:data:creater` | `String` | 流程创建者相关信息 |
| `data:data:importantleve` | `String` | 紧急程度 |
| `data:data:requestname` | `String` | 请求返回的数据信息 |
| `data:data:requestname:img` | `String` | 图片 |
| `data:data:requestname:lasttitle` | `String` | 后缀标题 |
| `data:data:requestname:link` | `String` | 链接地址 |
| `data:data:requestname:name` | `String` | 流程名称<富文本> |
| `data:data:requestname:pretitle` | `String` | 前缀标题 |
| `data:data:requestname:requestid` | `String` | 流程id |
| `data:tabsetting` | `String` | 设置数据：滚动方向、速度、高度等 |
| `data:tabsetting:count` | `String` | 数量 |
| `data:tabsetting:from` | `String` | 来源，workflow流程 |
| `data:tabsetting:height` | `String` | 高度，0为自适应高度 |
| `data:tabsetting:more` | `String` | 更多设置信息：如显示退回、转发、传阅等 |
| `data:tabsetting:scrollDirection` | `String` | 滚动方向 |
| `esetting` | `Json` | 设置信息 |
| `esetting:ebaseid` | `String` | 元素类型id |
| `esetting:eid` | `String` | 当前元素id |
| `esetting:tabwidth` | `String` | tab页宽度 |
| `params` | `Json` | 基本信息 |
| `tabids` | `Json` | tab页id集合 |
| `titles` | `Json` | tab页标题集合 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "data": [
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "74",
          "name": "444----位置-xf-xf10-2016-05-11<B>（位置01:上海市闵行区万里路1188-1号楼靠近泛微软件大厦）</B>",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=74&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-05-11",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-05-11",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "50440",
          "name": "002--英文--费用报销-xf-xf10-2016-08-15<B>（流程ID:50440）</B>",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=50440&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-08-15",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-08-15",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "50819",
          "name": "2-----位置-新表单-xf-xf10-2016-09-06<B>（位置01:上海市闵行区万里路1188-1号楼靠近泛微软件大厦）</B>",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=50819&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-09-06",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-09-06",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "51455",
          "name": "1----批次条件-xf-xf10-2016-10-13",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=51455&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-10-13",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-10-13",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "50999",
          "name": "月工作总结与计划-xf-xf10-2016-09-13",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=50999&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-09-13",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-09-13",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "50998",
          "name": "月工作总结与计划-xf-xf10-2016-09-13",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=50998&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-09-13",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-09-13",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "51245",
          "name": "2---老表单-文本-xf-xf10-2016-09-27",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=51245&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-09-27",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-09-27",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "/images/ecology8/statusicon/BDNew_wev8.png",
          "pretitle": "",
          "requestid": "5184801",
          "name": "测试5000多人收消息",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=5184801&isovertime="
        },
        "creater": {
          "name": "系统管理员",
          "userid": "1"
        },
        "receivedate": "2019-04-17",
        "createrDept": "",
        "createdate": "2019-04-17",
        "importantleve": "1自定义"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "/images/ecology8/statusicon/BDNew_wev8.png",
          "pretitle": "",
          "requestid": "5274720",
          "name": "3333",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=5274720&isovertime="
        },
        "creater": {
          "name": "系统管理员",
          "userid": "1"
        },
        "receivedate": "2019-04-24",
        "createrDept": "",
        "createdate": "2019-04-24",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "/images/ecology8/statusicon/BDNew_wev8.png",
          "pretitle": "",
          "requestid": "5184775",
          "name": "测试所有人收消息0417-1",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=5184775&isovertime="
        },
        "creater": {
          "name": "系统管理员",
          "userid": "1"
        },
        "receivedate": "2019-04-17",
        "createrDept": "",
        "createdate": "2019-04-17",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "/images/ecology8/statusicon/BDNew_wev8.png",
          "pretitle": "",
          "requestid": "5274707",
          "name": "1111",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=5274707&isovertime="
        },
        "creater": {
          "name": "系统管理员",
          "userid": "1"
        },
        "receivedate": "2019-04-24",
        "createrDept": "",
        "createdate": "2019-04-24",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "519",
          "name": "111---金额转换-老-xf-xf10-2016-07-12",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=519&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-07-12",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-07-12",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "2205",
          "name": "位置-老表单-xf-xf10-2016-07-15",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=2205&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-07-15",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-07-15",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "207",
          "name": "bbb位置-老表单-xf-xf10-2016-06-06",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=207&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-06-06",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-06-06",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "208",
          "name": "bbb位置-新表单-xf-xf10-2016-06-06<B>（位置01:上海市闵行区万里路1188-1号楼靠近泛微软件大厦）</B>",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=208&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-06-06",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-06-06",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "206",
          "name": "bbb费用报销-xf-xf10-2016-06-06<B>（流程ID:206）</B>",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=206&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-06-06",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-06-06",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "[退回]",
          "requestid": "204",
          "name": "aaa---位置-老表单-xf-xf10-2016-06-06",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=204&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-06-06",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-06-06",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "[退回]",
          "requestid": "203",
          "name": "aaa----位置-新表单-xf-xf10-2016-06-06<B>（位置01:上海市闵行区万里路1188-1号楼靠近泛微软件大厦）</B>",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=203&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-06-06",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-06-06",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "",
          "pretitle": "",
          "requestid": "2206",
          "name": "位置-老表单-xf-xf10-2016-07-15",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=2206&isovertime="
        },
        "creater": {
          "name": "xf10",
          "userid": "564"
        },
        "receivedate": "2016-07-15",
        "createrDept": "修改xf-部门0全称",
        "createdate": "2016-07-15",
        "importantleve": "正常11557722"
      },
      {
        "requestname": {
          "lasttitle": "",
          "img": "/images/ecology8/statusicon/BDNew_wev8.png",
          "pretitle": "",
          "requestid": "5274709",
          "name": "1111",
          "link": "/workflow/request/ViewRequestForwardSPA.jsp?requestid=5274709&isovertime="
        },
        "creater": {
          "name": "系统管理员",
          "userid": "1"
        },
        "receivedate": "2019-04-24",
        "createrDept": "",
        "createdate": "2019-04-24",
        "importantleve": "正常11557722"
      }
    ],
    "tabsetting": {
      "height": 0,
      "from": "workflow",
      "scrollDirection": "",
      "more": "{\"showNoReply\":\"\",\"isExclude\":\"2\",\"perpage\":\"20\",\"isExcluded\":\"2\",\"orderby\":\" t1.requestmark  desc \",\"isall\":\"1\",\"flowCount\":\"1\",\"showView\":\"1\",\"showForward\":\"\",\"flowids\":[],\"showCopy\":\"0\",\"showTimeout\":\"0\",\"viewType\":\"1\",\"showCY\":\"\",\"typeids\":[],\"fromhp\":\"1\",\"nodeCount\":0,\"hpwhere\":\"\",\"showReject\":\"1\",\"typeCount\":0,\"nodeids\":[]}",
      "count": "311"
    }
  },
  "tabids": [
    "1",
    "2",
    "3",
    "12",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "13",
    "14",
    "15",
    "16",
    "17"
  ],
  "counts": [
    99,
    99,
    null,
    99,
    99,
    99,
    99,
    39,
    14,
    null,
    29,
    99,
    99,
    99,
    6,
    null,
    null
  ],
  "titles": [
    "待办（含待阅+退回+显示未读）",
    "待办（含待阅+退回+全部）",
    "待办（含待阅+退回+不显示）",
    "待办（不含待阅/不含退回）+未读",
    "待办（优先超时+未读）",
    "待办（优先超时+全部）",
    "待办（含待阅+退回+显示超时+未读）",
    "待阅事宜（未读）",
    "退回事宜（全部）",
    "超时事宜",
    "抄送事宜（未读）",
    "所有事宜（未读）",
    "待办（显示待阅）+未读",
    "待办（显示退回）+全部",
    "已办（无办结）+未读",
    "已办（有办结）",
    "我的请求"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "10041",
    "hpid": "1541",
    "subCompanyId": 182,
    "tabsize": 17,
    "styleid": "template",
    "ebaseid": "8"
  },
  "esetting": {
    "scolltype": "",
    "eid": "10041",
    "linkmode": "2",
    "imgSymbol": "/images/homepage/style/style1/esymbol_wev8.gif",
    "widths": {
      "createrDept": "*",
      "requestname": "150",
      "importantleve": "*",
      "receivedate": "*",
      "sysname": "*",
      "creater": "*",
      "createdate": "*",
      "receivetime": "*"
    },
    "methodvalue": "1",
    "tabwidth": "76",
    "ebaseid": "8",
    "isremind": ""
  }
}
```

---

### 67. 获取门户【自定义菜单】元素列表信息

> **补充说明**：获取门户【自定义菜单】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/custommenu`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【自定义菜单】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型  menu |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户Id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 菜单信息 |
| `data:children` | `String` | 菜单子集 |
| `data:href` | `String` | 链接地址 |
| `data:name` | `String` | 菜单名称 |
| `data:target` | `String` | 打开位置 |
| `esetting` | `Json` | 设置信息 |
| `esetting:linkmode` | `String` | 链接方式 |
| `esetting:loginMenuType` | `String` | 菜单类型 |
| `esetting:menuIds` | `String` | 自定义菜单id |
| `esetting:menuStyle` | `String` | 菜单样式id |
| `esetting:menuType` | `String` | 菜单类型 |

#### 响应示例 (Response Example)

```json
{
  "data": [],
  "esetting": {
    "linkmode": "1",
    "menuStyle": "",
    "loginMenuType": "",
    "menuType": "menuv",
    "menuIds": ""
  }
}
```

---

### 68. 获取门户【自定义页面】元素列表信息

> **补充说明**：获取门户【自定义页面】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/custompagetab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【自定义页面】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id |  |
| `eid` | `String` | **是** | 元素Id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |
| `tabid` | `String` | **是** | 当前tab页 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `contenttype` | `String` | 类型 |
| `height` | `String` | 高度 |
| `moreUrl` | `String` | more地址 |
| `showtype` | `String` | 加载方式 |
| `url` | `String` | 链接地址 |
| `width` | `String` | 宽度 |

#### 响应示例 (Response Example)

```json
{
  "width": "",
  "componentModule": "",
  "componentProps": {},
  "showtype": "1",
  "componentName": "",
  "moreUrl": "/spa/cube/index.html#/main/cube/search?customid=139390&_key=xoy3m8",
  "url": "/formmode/e9resource/custompage/index.jsp?customid=139390&datefield=d1.rqmx1&datefieldorder=asc",
  "height": "",
  "contenttype": "1"
}
```

---

### 69. 获取门户【自定义页面】元素列表信息

> **补充说明**：获取门户【自定义页面】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/custompage`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【自定义页面】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id 29 |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部Id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 返回页面信息 |
| `data:height` | `String` | 页面高度 |
| `data:moreUrl` | `String` | more地址 |
| `data:showtype` | `String` | 加载方式 |
| `data:url` | `String` | 引用地址 |
| `data:width` | `String` | 宽度 |
| `esetting` | `Json` | 设置信息 |
| `params` | `Json` | 设置信息 |
| `tabids` | `Json` | tab页id合集 |
| `titles` | `Json` | tab页名称合集 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "width": "",
    "componentModule": "",
    "componentProps": {},
    "showtype": "1",
    "componentName": "",
    "moreUrl": "",
    "url": "http://www.baidu.com",
    "height": "",
    "contenttype": "1"
  },
  "tabids": [
    "1",
    "2"
  ],
  "titles": [
    "1111",
    "222"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "122821",
    "hpid": "2",
    "subCompanyId": 1,
    "tabsize": 2,
    "styleid": "synergys4",
    "ebaseid": "29"
  },
  "esetting": {
    "eid": "122821",
    "linkmode": "3",
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": {},
    "methodvalue": "1",
    "tabwidth": "76",
    "ebaseid": "29",
    "isremind": ""
  }
}
```

---

### 70. 获取门户【视频元素】元素列表信息

> **补充说明**：获取门户【视频元素】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/video`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【视频元素】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型  video |  |
| `eid` | `String` | **是** | 元素Id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 设置信息 |
| `data:autoPlay` | `String` | 自动播放开关 |
| `data:eAutoHeight` | `String` | 视频高度 |
| `data:eVideoShowType` | `String` | 显示方式 |
| `data:fontSize` | `String` | 字体大小 |
| `data:fullScreen` | `String` | 允许全屏显示 |
| `data:height` | `String` | 高度 |
| `data:isie` | `String` | 是否ie |
| `data:showNums` | `String` | 显示数 |
| `data:showTitle` | `String` | 显示标题栏 |
| `datas` | `Json` | 视频来源详细设置 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "showMulitline": true,
    "showNums": "3",
    "showTitle": "1",
    "isie": false,
    "eVideoShowType": "2",
    "fontSize": "16",
    "eAutoHeight": false,
    "autoPlay": "",
    "url": "",
    "height": "300",
    "quality": "8",
    "fullScreen": "on"
  },
  "datas": [
    {
      "addType": "1",
      "videoUrl": "/page/resource/userfile/video/tuzi.mp4",
      "title": "标题3"
    },
    {
      "addType": "1",
      "videoUrl": "/page/resource/userfile/video/xiaxuela.mp4",
      "title": "标题2"
    },
    {
      "addType": "1",
      "videoUrl": "/page/resource/userfile/video/xiaxuela.mp4",
      "title": "标题1"
    }
  ]
}
```

---

### 71. 获取门户【通讯录】元素信息列表

> **补充说明**：获取门户【通讯录】元素信息列表

- **接口路径 (Endpoint)**: `/api/portal/element/contacts`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【通讯录】元素信息列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型contacts |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `currenttab` | `String` | 当前tab页 |
| `data` | `Json` | 数据信息 |
| `data:department` | `String` | 部门 |
| `data:email` | `String` | email |
| `data:mobile` | `String` | 手机 |
| `data:name` | `String` | 名称 |
| `data:subcompany` | `String` | 分部 |
| `data:tel` | `String` | 电话 |
| `esetting` | `Json` | 设置信息 |
| `esetting:widths` | `String` | 显示字段 |
| `params` | `Json` | 设置信息 |
| `tabids` | `Json` | tabid集合 |
| `titles` | `Json` | tab名称集合 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "data": [
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11485",
          "name": "wll多人员1"
        },
        "subcompany": "wll多人员分部1",
        "department": "wll多人员部门1",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11504",
          "name": "wll多人员20"
        },
        "subcompany": "wll多人员分部1",
        "department": "wll多人员部门1_1_1",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11494",
          "name": "wll多人员10"
        },
        "subcompany": "wll多人员分部1",
        "department": "wll多人员部门1_1",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11493",
          "name": "wll多人员9"
        },
        "subcompany": "wll多人员分部1",
        "department": "wll多人员部门1",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11129",
          "name": "刘纯-外部上级"
        },
        "subcompany": "",
        "department": "",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/8855",
          "name": "宋元杰"
        },
        "subcompany": "测试分部文字过长显示问题二零一八年九月七号创建测试数据测试分部",
        "department": "测试分部文字过长显示问题二零一八年九月七号创建测试数据测试部门",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/9760",
          "name": "wang9"
        },
        "subcompany": "维森集团",
        "department": "人事部",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/9756",
          "name": "wang5"
        },
        "subcompany": "维森集团",
        "department": "财务管理部",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/8836",
          "name": "MEIKO"
        },
        "subcompany": "vocaloid",
        "department": "C社",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/9759",
          "name": "wang8"
        },
        "subcompany": "维森集团",
        "department": "人事部",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/9758",
          "name": "wang7"
        },
        "subcompany": "维森集团",
        "department": "行政管理部",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/9757",
          "name": "wang6"
        },
        "subcompany": "维森集团",
        "department": "行政管理部",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/9755",
          "name": "wang4"
        },
        "subcompany": "维森集团",
        "department": "财务管理部",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/9754",
          "name": "wang3"
        },
        "subcompany": "维森集团",
        "department": "财务管理部",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/9753",
          "name": "wang2"
        },
        "subcompany": "维森集团",
        "department": "总经办",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/9752",
          "name": "wang1"
        },
        "subcompany": "维森集团",
        "department": "总经办",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/9144",
          "name": "123"
        },
        "subcompany": "Awang",
        "department": "pgtest001",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/7330",
          "name": "次账号1112"
        },
        "subcompany": "Awang",
        "department": "pgtest001",
        "tel": ""
      },
      {
        "name": {
          "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/7212",
          "name": "tcy30次账号"
        },
        "subcompany": "Awang",
        "department": "pgtest001",
        "tel": ""
      }
    ]
  },
  "tabids": [
    "1",
    "2",
    "3"
  ],
  "titles": [
    "最近",
    "同部门",
    "我的下属"
  ],
  "currenttab": "1",
  "params": {
    "tabid": "1",
    "eid": "3136",
    "hpid": "210",
    "subCompanyId": 194,
    "tabsize": 3,
    "styleid": "synergys1",
    "ebaseid": "contacts"
  },
  "esetting": {
    "linkmode": "3",
    "imgSymbol": "/page/resource/userfile/image/ecology8/pointer_wev8.png",
    "widths": {
      "subcompany": "76",
      "name": "*",
      "tel": "170",
      "department": "170"
    },
    "tabwidth": "76",
    "height": 157
  }
}
```

---

### 72. 获取门户【通讯录】元素信息列表

> **补充说明**：获取门户【通讯录】元素信息列表

- **接口路径 (Endpoint)**: `/api/portal/element/contactstab`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【通讯录】元素信息列表`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型 |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |
| `tabid` | `String` | **是** | tab页 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 数据信息 |
| `data:department` | `String` | 部门 |
| `data:email` | `String` | email |
| `data:mobile` | `String` | 手机 |
| `data:name` | `String` | 名称 |
| `data:subcompany` | `String` | 分部 |
| `data:tel` | `String` | 电话 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11330",
        "name": "杨文元-zhn"
      },
      "subcompany": "维森集团-zhn",
      "department": "总经办",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11476",
        "name": "何浩"
      },
      "subcompany": "Awang",
      "department": "pgtest001",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11480",
        "name": "马富梅"
      },
      "subcompany": "JYT测试",
      "department": "测试天团",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11479",
        "name": "江雨婷"
      },
      "subcompany": "JYT测试",
      "department": "测试天团",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11482",
        "name": "徐平cs"
      },
      "subcompany": "cs",
      "department": "客服部",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/5467",
        "name": "素素014"
      },
      "subcompany": "J分部",
      "department": "雨停部门",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11485",
        "name": "wll多人员1"
      },
      "subcompany": "wll多人员分部1",
      "department": "wll多人员部门1",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11478",
        "name": "刘长庚-ymzh"
      },
      "subcompany": "维森集团-ymzh",
      "department": "财务部-ymzh",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11114",
        "name": "mhw"
      },
      "subcompany": "J分部",
      "department": "雨停部门六",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11115",
        "name": "mhw1"
      },
      "subcompany": "J分部",
      "department": "雨停部门六",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11411",
        "name": "赵静-gh"
      },
      "subcompany": "维森集团-gh",
      "department": "行政管理部",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11329",
        "name": "ewull"
      },
      "subcompany": "",
      "department": "",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11477",
        "name": "73oracle1"
      },
      "subcompany": "",
      "department": "",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11402",
        "name": "73oracle"
      },
      "subcompany": "",
      "department": "",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11475",
        "name": "张颖-gh"
      },
      "subcompany": "维森北方分公司-gh",
      "department": "客服中心",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/11405",
        "name": "guohong"
      },
      "subcompany": "guohong",
      "department": "guohong",
      "tel": ""
    },
    {
      "name": {
        "link": "/spa/hrm/index_mobx.html#/main/hrm/card/cardInfo/10400",
        "name": "杨文元-zdl"
      },
      "subcompany": "东展集团zdl",
      "department": "总经办",
      "tel": ""
    }
  ]
}
```

---

### 73. 获取门户【集成登录】元素信息

> **补充说明**：获取门户【集成登录】元素信息

- **接口路径 (Endpoint)**: `/api/portal/element/outtersys`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【集成登录】元素信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型 outterSys |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 返回数据信息 |
| `data:height` | `String` | 高度 |
| `data:linkUrl` | `String` | 链接 |
| `data:routeUrl` | `String` | 路由地址 |
| `data:width` | `String` | 宽度 |
| `esetting` | `Json` | 设置信息 |
| `esetting:disouttyimag` | `String` | 图标 |
| `esetting:disouttyName` | `String` | 名称 |
| `esetting:displayLayout` | `String` | 显示布局 |
| `esetting:displaytype` | `String` | 显示方式 |
| `esetting:linkmode` | `String` | 链接方式 |
| `esetting:widths` | `String` | 显示字段 |

#### 响应示例 (Response Example)

```json
{
  "data": [
    {
      "name": "dsaaaaaaaaa",
      "url": "/page/element/outterSys/resource/image/outterdefaultimag.png",
      "width": "32",
      "height": "32",
      "linkUrl": "/interface/Entrance.jsp?id=test20181026",
      "routeUrl": ""
    },
    {
      "name": "k3cloudtest",
      "url": "/page/element/outterSys/resource/image/outterdefaultimag.png",
      "width": "32",
      "height": "32",
      "linkUrl": "/interface/Entrance.jsp?id=k3cloudtest",
      "routeUrl": "/integration/accountSetting/k3cloudtest"
    },
    {
      "name": "coremailtest",
      "url": "/page/element/outterSys/resource/image/outterdefaultimag.png",
      "width": "32",
      "height": "32",
      "linkUrl": "/interface/Entrance.jsp?id=coremailtest",
      "routeUrl": ""
    },
    {
      "name": "263test",
      "url": "/page/element/outterSys/resource/image/outterdefaultimag.png",
      "width": "32",
      "height": "32",
      "linkUrl": "/interface/Entrance.jsp?id=263test",
      "routeUrl": "/integration/accountSetting/263test"
    },
    {
      "name": "K3test",
      "url": "/page/element/outterSys/resource/image/outterdefaultimag.png",
      "width": "32",
      "height": "32",
      "linkUrl": "/interface/Entrance.jsp?id=K3test",
      "routeUrl": ""
    },
    {
      "name": "U8test",
      "url": "/page/element/outterSys/resource/image/outterdefaultimag.png",
      "width": "32",
      "height": "32",
      "linkUrl": "/interface/Entrance.jsp?id=U8test",
      "routeUrl": ""
    },
    {
      "name": "NC6test",
      "url": "/page/element/outterSys/resource/image/outterdefaultimag.png",
      "width": "32",
      "height": "32",
      "linkUrl": "/interface/Entrance.jsp?id=NC6test",
      "routeUrl": ""
    },
    {
      "name": "EAStest",
      "url": "/page/element/outterSys/resource/image/outterdefaultimag.png",
      "width": "32",
      "height": "32",
      "linkUrl": "/interface/Entrance.jsp?id=EAStest",
      "routeUrl": ""
    },
    {
      "name": "NCtest",
      "url": "/page/element/outterSys/resource/image/outterdefaultimag.png",
      "width": "32",
      "height": "32",
      "linkUrl": "/interface/Entrance.jsp?id=NCtest",
      "routeUrl": ""
    },
    {
      "name": "mingyuan",
      "url": "/page/element/outterSys/resource/image/outterdefaultimag.png",
      "width": "32",
      "height": "32",
      "linkUrl": "/interface/Entrance.jsp?id=mingyuan",
      "routeUrl": ""
    }
  ],
  "esetting": {
    "displaytype": "1",
    "linkmode": "2",
    "displayLayout": "1",
    "disouttyName": "1",
    "widths": {
      "name": "76",
      "url": "76"
    },
    "disouttyimag": "0"
  }
}
```

---

### 74. 获取门户【音频元素】元素列表信息

> **补充说明**：获取门户【音频元素】元素列表信息

- **接口路径 (Endpoint)**: `/api/portal/element/audio`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户【音频元素】元素列表信息`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `ebaseid` | `String` | **是** | 元素类型id  audio |  |
| `eid` | `String` | **是** | 元素id |  |
| `hpid` | `String` | **是** | 门户Id |  |
| `styleid` | `String` | **是** | 元素样式id |  |
| `subcompanyid` | `String` | **是** | 分部id |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 音频信息 |
| `data:url` | `String` | 音频路径 |
| `esetting` | `Json` | 设置信息 |
| `esetting:ePath` | `String` | 路径 |
| `esetting:height` | `String` | 高度 |
| `esetting:isie` | `String` | 是否ie |
| `esetting:on` | `String` | 自动播放 |
| `esetting:width` | `String` | 宽度 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "url": ""
  },
  "esetting": {
    "isie": false,
    "width": "400",
    "autoPlay": "on",
    "height": "27",
    "ePath": "/page/element/Audio/"
  }
}
```

---

### 75. 获取门户菜单

> **补充说明**：获取门户菜单

- **接口路径 (Endpoint)**: `/api/portal/menu/getPortalMenu`
- **请求方式 (HTTP Method)**: `GET`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 获取门户菜单`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `type` | `String` | 否 | 查询类型。可维护的（maintainable）、共享的（shared） |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Json` | 门户菜单数据 |

#### 响应示例 (Response Example)

```json
{
  "data": {
    "showlasthp": "0",
    "menuList": [
      {
        "pinyin": "lchunmh",
        "hpid": "210",
        "subCompanyId": "194",
        "levelid": "210",
        "name": "lchun门户",
        "pid": "0",
        "id": "210",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-210-194",
        "mobxrouteurl": "/portal/portal-210-194",
        "target": "mainFrame"
      },
      {
        "pid": "0",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-5-26",
        "mobxrouteurl": "/portal/portal-5-26",
        "target": "mainFrame",
        "pinyin": "jmmh-zh",
        "hpid": "5",
        "subCompanyId": "26",
        "levelid": "5",
        "name": "建模门户-zh",
        "id": "5",
        "child": [
          {
            "pinyin": "Demojmmh",
            "hpid": "4",
            "subCompanyId": "145",
            "levelid": "4",
            "name": "Demo建模门户",
            "pid": "5",
            "id": "4",
            "parentId": "5",
            "url": "",
            "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-4-145",
            "mobxrouteurl": "/portal/portal-4-145",
            "target": "mainFrame"
          }
        ]
      },
      {
        "pinyin": "schwdys",
        "hpid": "328",
        "subCompanyId": "174",
        "levelid": "328",
        "name": "sch文档元素",
        "pid": "0",
        "id": "328",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-328-174",
        "mobxrouteurl": "/portal/portal-328-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "ylbjsch",
        "hpid": "330",
        "subCompanyId": "118",
        "levelid": "330",
        "name": "一栏布局sch",
        "pid": "0",
        "id": "330",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-330-118",
        "mobxrouteurl": "/portal/portal-330-118",
        "target": "mainFrame"
      },
      {
        "pinyin": "zdym-hu",
        "hpid": "216",
        "subCompanyId": "174",
        "levelid": "216",
        "name": "指定页面-hu",
        "pid": "0",
        "id": "216",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-216-174",
        "mobxrouteurl": "/portal/portal-216-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "testlyxmh",
        "hpid": "7",
        "subCompanyId": "16",
        "levelid": "7",
        "name": "testlyx门户",
        "pid": "0",
        "id": "7",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-7-16",
        "mobxrouteurl": "/portal/portal-7-16",
        "target": "mainFrame"
      },
      {
        "pinyin": "zqcs",
        "hpid": "8",
        "subCompanyId": "13",
        "levelid": "8",
        "name": "zq测试",
        "pid": "0",
        "id": "8",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-8-13",
        "mobxrouteurl": "/portal/portal-8-13",
        "target": "mainFrame"
      },
      {
        "pinyin": "csggys",
        "hpid": "47",
        "subCompanyId": "63",
        "levelid": "47",
        "name": "测试公告元素",
        "pid": "0",
        "id": "47",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-47-63",
        "mobxrouteurl": "/portal/portal-47-63",
        "target": "mainFrame"
      },
      {
        "pid": "0",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-13-35",
        "mobxrouteurl": "/portal/portal-13-35",
        "target": "mainFrame",
        "pinyin": "llq",
        "hpid": "13",
        "subCompanyId": "35",
        "levelid": "13",
        "name": "llq",
        "id": "13",
        "child": [
          {
            "pinyin": "Aaronmh",
            "hpid": "9",
            "subCompanyId": "38",
            "levelid": "9",
            "name": "Aaron门户",
            "pid": "13",
            "id": "9",
            "parentId": "13",
            "url": "",
            "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-9-38",
            "mobxrouteurl": "/portal/portal-9-38",
            "target": "mainFrame"
          }
        ]
      },
      {
        "pinyin": "lulusy",
        "hpid": "16",
        "subCompanyId": "12",
        "levelid": "16",
        "name": "lulu首页",
        "pid": "0",
        "id": "16",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-16-12",
        "mobxrouteurl": "/portal/portal-16-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "jyt_yem",
        "hpid": "14",
        "subCompanyId": "49",
        "levelid": "14",
        "name": "jyt_yem",
        "pid": "0",
        "id": "14",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-14-49",
        "mobxrouteurl": "/portal/portal-14-49",
        "target": "mainFrame"
      },
      {
        "pinyin": "zjy-mh",
        "hpid": "46",
        "subCompanyId": "30",
        "levelid": "46",
        "name": "zjy-门户",
        "pid": "0",
        "id": "46",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-46-30",
        "mobxrouteurl": "/portal/portal-46-30",
        "target": "mainFrame"
      },
      {
        "pinyin": "hdp",
        "hpid": "51",
        "subCompanyId": "12",
        "levelid": "51",
        "name": "幻灯片",
        "pid": "0",
        "id": "51",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-51-12",
        "mobxrouteurl": "/portal/portal-51-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "wshenTest",
        "hpid": "52",
        "subCompanyId": "1",
        "levelid": "52",
        "name": "wshenTest",
        "pid": "0",
        "id": "52",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-52-1",
        "mobxrouteurl": "/portal/portal-52-1",
        "target": "mainFrame"
      },
      {
        "pinyin": "swqsy",
        "hpid": "57",
        "subCompanyId": "37",
        "levelid": "57",
        "name": "swq首页",
        "pid": "0",
        "id": "57",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-57-37",
        "mobxrouteurl": "/portal/portal-57-37",
        "target": "mainFrame"
      },
      {
        "pinyin": "test-huhu",
        "hpid": "58",
        "subCompanyId": "63",
        "levelid": "58",
        "name": "test-huhu",
        "pid": "0",
        "id": "58",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-58-63",
        "mobxrouteurl": "/portal/portal-58-63",
        "target": "mainFrame"
      },
      {
        "pinyin": "omg1",
        "hpid": "196",
        "subCompanyId": "63",
        "levelid": "196",
        "name": "偶买噶1",
        "pid": "0",
        "id": "196",
        "parentId": "0",
        "url": "https://www.baidu.com",
        "fullrouteurl": "",
        "mobxrouteurl": "",
        "target": "mainFrame"
      },
      {
        "pinyin": "xtmrsy21",
        "hpid": "2",
        "subCompanyId": "1",
        "levelid": "2",
        "name": "系统默认首页21",
        "pid": "0",
        "id": "2",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-2-1",
        "mobxrouteurl": "/portal/portal-2-1",
        "target": "mainFrame"
      },
      {
        "pinyin": "208dlh1-1010",
        "hpid": "204",
        "subCompanyId": "462",
        "levelid": "204",
        "name": "208登录后1-1010",
        "pid": "0",
        "id": "204",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-204-462",
        "mobxrouteurl": "/portal/portal-204-462",
        "target": "mainFrame"
      },
      {
        "pinyin": "csbjkd-hu--88",
        "hpid": "34",
        "subCompanyId": "63",
        "levelid": "34",
        "name": "测试布局宽度-hu--88",
        "pid": "0",
        "id": "34",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-34-63",
        "mobxrouteurl": "/portal/portal-34-63",
        "target": "mainFrame"
      },
      {
        "pinyin": "hu1csydmh",
        "hpid": "209",
        "subCompanyId": "174",
        "levelid": "209",
        "name": "hu1测试移动门户",
        "pid": "0",
        "id": "209",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-209-174",
        "mobxrouteurl": "/portal/portal-209-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "jmmhwyf",
        "hpid": "212",
        "subCompanyId": "145",
        "levelid": "212",
        "name": "建模门户wyf",
        "pid": "0",
        "id": "212",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-212-145",
        "mobxrouteurl": "/portal/portal-212-145",
        "target": "mainFrame"
      },
      {
        "pinyin": "csxz-wxg",
        "hpid": "215",
        "subCompanyId": "63",
        "levelid": "215",
        "name": "测试协作-勿修改",
        "pid": "0",
        "id": "215",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-215-63",
        "mobxrouteurl": "/portal/portal-215-63",
        "target": "mainFrame"
      },
      {
        "pinyin": "xtmrsy1",
        "hpid": "1",
        "subCompanyId": "1",
        "levelid": "1",
        "name": "系统默认首页1",
        "pid": "0",
        "id": "1",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-1-1",
        "mobxrouteurl": "/portal/portal-1-1",
        "target": "mainFrame"
      },
      {
        "pinyin": "test-hu",
        "hpid": "223",
        "subCompanyId": "63",
        "levelid": "223",
        "name": "test-hu",
        "pid": "0",
        "id": "223",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-223-63",
        "mobxrouteurl": "/portal/portal-223-63",
        "target": "mainFrame"
      },
      {
        "pinyin": "csysdr-hu",
        "hpid": "231",
        "subCompanyId": "63",
        "levelid": "231",
        "name": "测试元素导入-hu",
        "pid": "0",
        "id": "231",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-231-63",
        "mobxrouteurl": "/portal/portal-231-63",
        "target": "mainFrame"
      },
      {
        "pinyin": "hu-cshyrc",
        "hpid": "233",
        "subCompanyId": "63",
        "levelid": "233",
        "name": "hu-测试会议日程",
        "pid": "0",
        "id": "233",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-233-63",
        "mobxrouteurl": "/portal/portal-233-63",
        "target": "mainFrame"
      },
      {
        "pinyin": "zdym",
        "hpid": "234",
        "subCompanyId": "63",
        "levelid": "234",
        "name": "指定页面",
        "pid": "0",
        "id": "234",
        "parentId": "0",
        "url": "http://www.baidu.com",
        "fullrouteurl": "",
        "mobxrouteurl": "",
        "target": "mainFrame"
      },
      {
        "pinyin": "all-3new",
        "hpid": "245",
        "subCompanyId": "174",
        "levelid": "245",
        "name": "all-3new",
        "pid": "0",
        "id": "245",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-245-174",
        "mobxrouteurl": "/portal/portal-245-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "zdym-0525",
        "hpid": "267",
        "subCompanyId": "174",
        "levelid": "267",
        "name": "指定页面-0525",
        "pid": "0",
        "id": "267",
        "parentId": "0",
        "url": "http://www.qq.com",
        "fullrouteurl": "",
        "mobxrouteurl": "",
        "target": "mainFrame"
      },
      {
        "pid": "0",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-239-174",
        "mobxrouteurl": "/portal/portal-239-174",
        "target": "mainFrame",
        "pinyin": "all-1",
        "hpid": "239",
        "subCompanyId": "174",
        "levelid": "239",
        "name": "all-1",
        "id": "239",
        "child": [
          {
            "pid": "239",
            "parentId": "239",
            "url": "",
            "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-244-174",
            "mobxrouteurl": "/portal/portal-244-174",
            "target": "mainFrame",
            "pinyin": "all-2new",
            "hpid": "244",
            "subCompanyId": "174",
            "levelid": "244",
            "name": "all-2new",
            "id": "244",
            "child": [
              {
                "pid": "244",
                "parentId": "244",
                "url": "",
                "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-242-174",
                "mobxrouteurl": "/portal/portal-242-174",
                "target": "mainFrame",
                "pinyin": "all-4",
                "hpid": "242",
                "subCompanyId": "174",
                "levelid": "242",
                "name": "all-4",
                "id": "242",
                "child": [
                  {
                    "pid": "242",
                    "parentId": "242",
                    "url": "",
                    "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-241-174",
                    "mobxrouteurl": "/portal/portal-241-174",
                    "target": "mainFrame",
                    "pinyin": "all-3",
                    "hpid": "241",
                    "subCompanyId": "174",
                    "levelid": "241",
                    "name": "all-3",
                    "id": "241",
                    "child": [
                      {
                        "pinyin": "all-5",
                        "hpid": "243",
                        "subCompanyId": "174",
                        "levelid": "243",
                        "name": "all-5",
                        "pid": "241",
                        "id": "243",
                        "parentId": "241",
                        "url": "",
                        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-243-174",
                        "mobxrouteurl": "/portal/portal-243-174",
                        "target": "mainFrame"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "pinyin": "luluqzyj",
        "hpid": "277",
        "subCompanyId": "12",
        "levelid": "277",
        "name": "lulu签字意见",
        "pid": "0",
        "id": "277",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-277-12",
        "mobxrouteurl": "/portal/portal-277-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "csqx1",
        "hpid": "279",
        "subCompanyId": "174",
        "levelid": "279",
        "name": "测试权限1",
        "pid": "0",
        "id": "279",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-279-174",
        "mobxrouteurl": "/portal/portal-279-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "csqx2",
        "hpid": "280",
        "subCompanyId": "174",
        "levelid": "280",
        "name": "测试权限2",
        "pid": "0",
        "id": "280",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-280-174",
        "mobxrouteurl": "/portal/portal-280-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "csqx3",
        "hpid": "281",
        "subCompanyId": "174",
        "levelid": "281",
        "name": "测试权限3",
        "pid": "0",
        "id": "281",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-281-174",
        "mobxrouteurl": "/portal/portal-281-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "csxzys",
        "hpid": "285",
        "subCompanyId": "174",
        "levelid": "285",
        "name": "测试协作元素",
        "pid": "0",
        "id": "285",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-285-174",
        "mobxrouteurl": "/portal/portal-285-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "cssc",
        "hpid": "287",
        "subCompanyId": "174",
        "levelid": "287",
        "name": "测试删除",
        "pid": "0",
        "id": "287",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-287-174",
        "mobxrouteurl": "/portal/portal-287-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "luludlhym",
        "hpid": "291",
        "subCompanyId": "12",
        "levelid": "291",
        "name": "lulu登录后页面",
        "pid": "0",
        "id": "291",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-291-12",
        "mobxrouteurl": "/portal/portal-291-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "hubj",
        "hpid": "299",
        "subCompanyId": "63",
        "levelid": "299",
        "name": "hu布局",
        "pid": "0",
        "id": "299",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-299-63",
        "mobxrouteurl": "/portal/portal-299-63",
        "target": "mainFrame"
      },
      {
        "pinyin": "szycswdzxys",
        "hpid": "300",
        "subCompanyId": "173",
        "levelid": "300",
        "name": "szy测试文档中心元素",
        "pid": "0",
        "id": "300",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-300-173",
        "mobxrouteurl": "/portal/portal-300-173",
        "target": "mainFrame"
      },
      {
        "pinyin": "yhxdzzdlxcxlb",
        "hpid": "301",
        "subCompanyId": "311",
        "levelid": "301",
        "name": "yhx多种字段类型查询列表",
        "pid": "0",
        "id": "301",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-301-311",
        "mobxrouteurl": "/portal/portal-301-311",
        "target": "mainFrame"
      },
      {
        "pinyin": "yhxdzzdlxcxlb（10）",
        "hpid": "302",
        "subCompanyId": "310",
        "levelid": "302",
        "name": "yhx多种字段类型查询列表（10）",
        "pid": "0",
        "id": "302",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-302-310",
        "mobxrouteurl": "/portal/portal-302-310",
        "target": "mainFrame"
      },
      {
        "pinyin": "yhxcsmhcxlb(10)",
        "hpid": "303",
        "subCompanyId": "310",
        "levelid": "303",
        "name": "yhx测试门户查询列表(10)",
        "pid": "0",
        "id": "303",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-303-310",
        "mobxrouteurl": "/portal/portal-303-310",
        "target": "mainFrame"
      },
      {
        "pinyin": "xfcs",
        "hpid": "304",
        "subCompanyId": "28",
        "levelid": "304",
        "name": "xf测试",
        "pid": "0",
        "id": "304",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-304-28",
        "mobxrouteurl": "/portal/portal-304-28",
        "target": "mainFrame"
      },
      {
        "pinyin": "cymh",
        "hpid": "307",
        "subCompanyId": "310",
        "levelid": "307",
        "name": "cy门户",
        "pid": "0",
        "id": "307",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-307-310",
        "mobxrouteurl": "/portal/portal-307-310",
        "target": "mainFrame"
      },
      {
        "pinyin": "lulu1204",
        "hpid": "308",
        "subCompanyId": "12",
        "levelid": "308",
        "name": "lulu1204",
        "pid": "0",
        "id": "308",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-308-12",
        "mobxrouteurl": "/portal/portal-308-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "1220",
        "hpid": "312",
        "subCompanyId": "11",
        "levelid": "312",
        "name": "1220",
        "pid": "0",
        "id": "312",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-312-11",
        "mobxrouteurl": "/portal/portal-312-11",
        "target": "mainFrame"
      },
      {
        "pinyin": "sy-ll",
        "hpid": "313",
        "subCompanyId": "450",
        "levelid": "313",
        "name": "首页-ll",
        "pid": "0",
        "id": "313",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-313-450",
        "mobxrouteurl": "/portal/portal-313-450",
        "target": "mainFrame"
      },
      {
        "pinyin": "lululczx（wxg）",
        "hpid": "314",
        "subCompanyId": "12",
        "levelid": "314",
        "name": "lulu流程中心（勿修改）",
        "pid": "0",
        "id": "314",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-314-12",
        "mobxrouteurl": "/portal/portal-314-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "dbwyf",
        "hpid": "315",
        "subCompanyId": "145",
        "levelid": "315",
        "name": "督办wyf",
        "pid": "0",
        "id": "315",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-315-145",
        "mobxrouteurl": "/portal/portal-315-145",
        "target": "mainFrame"
      },
      {
        "pinyin": "schssfb",
        "hpid": "319",
        "subCompanyId": "310",
        "levelid": "319",
        "name": "sch所属分部",
        "pid": "0",
        "id": "319",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-319-310",
        "mobxrouteurl": "/portal/portal-319-310",
        "target": "mainFrame"
      },
      {
        "pinyin": "schssfb",
        "hpid": "320",
        "subCompanyId": "432",
        "levelid": "320",
        "name": "sch所属分部",
        "pid": "0",
        "id": "320",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-320-432",
        "mobxrouteurl": "/portal/portal-320-432",
        "target": "mainFrame"
      },
      {
        "pinyin": "xqw-mhyszx",
        "hpid": "323",
        "subCompanyId": "302",
        "levelid": "323",
        "name": "xqw-门户元素中心",
        "pid": "0",
        "id": "323",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-323-302",
        "mobxrouteurl": "/portal/portal-323-302",
        "target": "mainFrame"
      },
      {
        "pinyin": "lulu20180503",
        "hpid": "246",
        "subCompanyId": "12",
        "levelid": "246",
        "name": "lulu20180503",
        "pid": "0",
        "id": "246",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-246-12",
        "mobxrouteurl": "/portal/portal-246-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "lu0403",
        "hpid": "329",
        "subCompanyId": "12",
        "levelid": "329",
        "name": "lu0403",
        "pid": "0",
        "id": "329",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-329-12",
        "mobxrouteurl": "/portal/portal-329-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "hu0408",
        "hpid": "331",
        "subCompanyId": "174",
        "levelid": "331",
        "name": "hu0408",
        "pid": "0",
        "id": "331",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-331-174",
        "mobxrouteurl": "/portal/portal-331-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "cs111111111111111",
        "hpid": "270",
        "subCompanyId": "705",
        "levelid": "270",
        "name": "测试111111111111111",
        "pid": "0",
        "id": "270",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-270-705",
        "mobxrouteurl": "/portal/portal-270-705",
        "target": "mainFrame"
      },
      {
        "pinyin": "lu0329",
        "hpid": "327",
        "subCompanyId": "12",
        "levelid": "327",
        "name": "lu0329",
        "pid": "0",
        "id": "327",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-327-12",
        "mobxrouteurl": "/portal/portal-327-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "csqx1lcw",
        "hpid": "333",
        "subCompanyId": "174",
        "levelid": "333",
        "name": "测试权限1另存为",
        "pid": "0",
        "id": "333",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-333-174",
        "mobxrouteurl": "/portal/portal-333-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "mh-pf",
        "hpid": "334",
        "subCompanyId": "406",
        "levelid": "334",
        "name": "门户-pf",
        "pid": "0",
        "id": "334",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-334-406",
        "mobxrouteurl": "/portal/portal-334-406",
        "target": "mainFrame"
      },
      {
        "pinyin": "csqx1lcw2",
        "hpid": "335",
        "subCompanyId": "174",
        "levelid": "335",
        "name": "测试权限1另存为2",
        "pid": "0",
        "id": "335",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-335-174",
        "mobxrouteurl": "/portal/portal-335-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "zxj_txym",
        "hpid": "336",
        "subCompanyId": "452",
        "levelid": "336",
        "name": "zxj_腾讯页面",
        "pid": "0",
        "id": "336",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-336-452",
        "mobxrouteurl": "/portal/portal-336-452",
        "target": "mainFrame"
      },
      {
        "pinyin": "czhkk",
        "hpid": "339",
        "subCompanyId": "174",
        "levelid": "339",
        "name": "次账号可看",
        "pid": "0",
        "id": "339",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-339-174",
        "mobxrouteurl": "/portal/portal-339-174",
        "target": "mainFrame"
      },
      {
        "pinyin": "syjcs",
        "hpid": "340",
        "subCompanyId": "312",
        "levelid": "340",
        "name": "syj测试",
        "pid": "0",
        "id": "340",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-340-312",
        "mobxrouteurl": "/portal/portal-340-312",
        "target": "_blank"
      },
      {
        "pinyin": "lu0612",
        "hpid": "341",
        "subCompanyId": "12",
        "levelid": "341",
        "name": "lu0612",
        "pid": "0",
        "id": "341",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-341-12",
        "mobxrouteurl": "/portal/portal-341-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "ltest",
        "hpid": "342",
        "subCompanyId": "57",
        "levelid": "342",
        "name": "ltest",
        "pid": "0",
        "id": "342",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-342-57",
        "mobxrouteurl": "/portal/portal-342-57",
        "target": "mainFrame"
      },
      {
        "pinyin": "lulu0627",
        "hpid": "343",
        "subCompanyId": "12",
        "levelid": "343",
        "name": "lulu0627",
        "pid": "0",
        "id": "343",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-343-12",
        "mobxrouteurl": "/portal/portal-343-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "lulu0704",
        "hpid": "344",
        "subCompanyId": "12",
        "levelid": "344",
        "name": "lulu0704",
        "pid": "0",
        "id": "344",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-344-12",
        "mobxrouteurl": "/portal/portal-344-12",
        "target": "mainFrame"
      },
      {
        "pinyin": "qqq",
        "hpid": "347",
        "subCompanyId": "457",
        "levelid": "347",
        "name": "去瞧瞧",
        "pid": "0",
        "id": "347",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-347-457",
        "mobxrouteurl": "/portal/portal-347-457",
        "target": "mainFrame"
      },
      {
        "pinyin": "mltest",
        "hpid": "348",
        "subCompanyId": "885",
        "levelid": "348",
        "name": "mltest",
        "pid": "0",
        "id": "348",
        "parentId": "0",
        "url": "",
        "fullrouteurl": "/spa/portal/static/index.html#/main/portal/portal-348-885",
        "mobxrouteurl": "/portal/portal-348-885",
        "target": "mainFrame"
      }
    ],
    "lasthpid": 210,
    "defaulthpid": 0
  }
}
```

---

### 76. 设置我的主题字体大小

- **接口路径 (Endpoint)**: `/api/portal/themeCenter/setMyFontSize`
- **请求方式 (HTTP Method)**: `POST`
- **版本要求**: 系统版本 ≥ 9.00, 补丁版本 ≥ KB900190601
- **模块归属**: `门户管理 > 设置我的主题字体大小`

#### 请求参数 (Request Parameters)

| 参数名 | 类型 | 必填 | 说明 | 示例值 |
| :--- | :--- | :---: | :--- | :--- |
| `fontsize` | `String` | 否 | 字体大小 |  |

#### 响应字段 (Response Fields)

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `api_status` | `Bool` | 接口状态 |

#### 响应示例 (Response Example)

```json
{
  "api_status": true
}
```

---
