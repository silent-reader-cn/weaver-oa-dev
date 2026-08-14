# 泛微OA (E-Cology 9) 后端 REST API 全量速查字典

> **文档说明**：本表收录泛微OA官方开放的全部 **538** 个后端 REST 接口，按模块分类整理，支持按路径、请求方式、模块快速检索。

## 模块统计概览

| 序号 | 业务模块 | 接口数量 | 说明文档链接 |
| :---: | :--- | :---: | :--- |
| 1 | 工作流程 (Workflow) | 45 | [02_工作流程接口](./02_workflow_apis.md) |
| 2 | 人力资源 (HRM) | 225 | [03_人力资源接口](./03_hrm_apis.md) |
| 3 | 知识管理 (Doc & Knowledge) | 60 | [04_知识管理接口](./04_doc_knowledge_apis.md) |
| 4 | 考勤管理 (Attendance) | 107 | [05_考勤管理接口](./05_attendance_apis.md) |
| 5 | 表单建模 (Form Modeling) | 19 | [06_表单建模接口](./06_form_modeling_apis.md) |
| 6 | 门户管理 (Portal) | 76 | [07_门户管理接口](./07_portal_apis.md) |
| 7 | 协作与邮件 (Cowork & Email) | 6 | [08_协作与邮件接口](./08_cowork_and_email_apis.md) |
| **合计** | **全部模块** | **538** | - |

---

## 全量 API 接口清单 (538)

| 序号 | 模块 | 接口名称 | Method | 接口路径 (Endpoint) | 版本要求 |
| :---: | :--- | :--- | :---: | :--- | :--- |
| 1 | `人力资源` | E7扫码登录 | `POST` | `/api/hrm/login/qrcode/loginQRCode` | E9/KB900190601 |
| 2 | `人力资源` | 二次验证密码--验证二次验证密码和登录密码是否一样 | `POST` | `/api/hrm/secondarypwd/checkNewSecondaryPwd` | E9/KB900190601 |
| 3 | `人力资源` | 人力资源导入历史记录查询条件 | `GET` | `/api/hrm/importlog/getHistorySearchCondition` | E9/KB900190601 |
| 4 | `人力资源` | 人力资源系统信息 | `GET` | `/api/hrm/systeminfo/getHrmSystemInfoForm` | E9/KB900190601 |
| 5 | `人力资源` | 人员列表查询条件 | `GET` | `/api/hrm/organization/getResourceSearchCondition` | E9/KB900190601 |
| 6 | `人力资源` | 人员卡片小头像设置--保存头像 | `POST` | `/api/hrm/usericon/saveUserIcon` | E9/KB900190601 |
| 7 | `人力资源` | 人员卡片工作历程 | `GET` | `/api/hrm/resource/total/getHrmResourceTotal` | E9/KB900190601 |
| 8 | `人力资源` | 人员卡片栏目信息（流程、文档等） | `GET` | `/api/hrm/resource/getHrmResourceItem` | E9/KB900190601 |
| 9 | `人力资源` | 人员卡片自定义字段 | `GET` | `/api/hrm/resourcefielddefined/getFieldDefinedInfo` | E9/KB900190601 |
| 10 | `人力资源` | 人员卡片页签 | `GET` | `/api/hrm/resource/getHrmResourceTab` | E9/KB900190601 |
| 11 | `人力资源` | 人员导入历史日志 | `GET` | `/api/hrm/importlog/getImportHistory` | E9/KB900190601 |
| 12 | `人力资源` | 人员导入明细日志 | `GET` | `/api/hrm/importlog/getImportResult` | E9/KB900190601 |
| 13 | `人力资源` | 人员导入表单 | `GET` | `/api/hrm/import/resource/getImportForm` | E9/KB900190601 |
| 14 | `人力资源` | 人员导入进度列表 | `GET` | `/api/hrm/importlog/getImportProcessLog` | E9/KB900190601 |
| 15 | `人力资源` | 人员小卡片信息 | `GET` | `/api/hrm/simpleinfo/getHrmSimpleInfo` | E9/KB900190601 |
| 16 | `人力资源` | 人员登录失败日志列表 | `GET` | `/api/hrm/loginfailedlog/getSearchList` | E9/KB900190601 |
| 17 | `人力资源` | 人员登录失败日志查询条件 | `GET` | `/api/hrm/loginfailedlog/getSearchCondition` | E9/KB900190601 |
| 18 | `人力资源` | 人员登录接口 | `POST` | `/api/hrm/login/checkLogin` | E9/KB900190601 |
| 19 | `人力资源` | 人员登录日志右键菜单 | `GET` | `/api/hrm/loginlog/getRightMenu` | E9/KB900190601 |
| 20 | `人力资源` | 人员登录日志权限判断 | `GET` | `/api/hrm/loginlog/getHasRight` | E9/KB900190601 |
| 21 | `人力资源` | 人员登录日志查询列表 | `GET` | `/api/hrm/loginlog/getSearchList` | E9/KB900190601 |
| 22 | `人力资源` | 人员登录日志查询条件 | `GET` | `/api/hrm/loginlog/getAdvanceCondition` | E9/KB900190601 |
| 23 | `人力资源` | 保存人员卡片自定义字段分组 | `GET` | `/api/hrm/resourcefielddefined/saveGroup` | E9/KB900190601 |
| 24 | `人力资源` | 保存人员导入 | `POST` | `/api/hrm/import/resource/saveImport` | E9/KB900190601 |
| 25 | `人力资源` | 保存分部自定义字段分组 | `POST` | `/api/hrm/subcompanyfielddefined/saveGroup` | E9/KB900190601 |
| 26 | `人力资源` | 保存功能权限 | `POST` | `/api/hrm/rolefucrightset/saveRolesFucRightSet` | E9/KB900190601 |
| 27 | `人力资源` | 保存加入常用组 | `POST` | `/api/hrm/organization/saveAddToGroup` | E9/KB900190601 |
| 28 | `人力资源` | 保存机构权限 | `POST` | `/api/hrm/rolesstrrightset/saveRolesStrRightSet` | E9/KB900190601 |
| 29 | `人力资源` | 保存权限明细 | `POST` | `/api/hrm/systemrightauthority/saveSystemRightAuthority` | E9/KB900190601 |
| 30 | `人力资源` | 保存权限设置 | `POST` | `/api/hrm/systemrightgroup/saveSystemRightGroup` | E9/KB900190601 |
| 31 | `人力资源` | 保存权限设置 | `POST` | `/api/hrm/systemrightgroup/addSystemRightRoles` | E9/KB900190601 |
| 32 | `人力资源` | 保存组织设置接口 | `POST` | `/api/hrm/orgchart/saveorgchartset` | E9/KB900190601 |
| 33 | `人力资源` | 保存部门自定义字段 | `POST` | `/api/hrm/departmentfielddefined/save` | E9/KB900190601 |
| 34 | `人力资源` | 保存部门自定义字段分组 | `POST` | `/api/hrm/departmentfielddefined/saveGroup` | E9/KB900190601 |
| 35 | `人力资源` | 分权管理--判断是否有权限 | `GET` | `/api/hrm/detachmanagerset/getHasRight` | E9/KB900190601 |
| 36 | `人力资源` | 分权管理员--判断是否有权限 | `GET` | `/api/hrm/detachsysadmin/getHasRight` | E9/KB900190601 |
| 37 | `人力资源` | 分级保护设置--判断是否具有权限 | `GET` | `/api/hrm/classifiedProtection/getHasRight` | E9/KB900190601 |
| 38 | `人力资源` | 分部信息 | `GET` | `/api/hrm/organization/getSubCompanyFormFieldView` | E9/KB900190601 |
| 39 | `人力资源` | 分部列表查询条件 | `GET` | `/api/hrm/organization/getSubCompanySearchCondition` | E9/KB900190601 |
| 40 | `人力资源` | 分部浏览框-模糊搜索 | `GET` | `/api/public/browser/complete/164` | E9 |
| 41 | `人力资源` | 分部浏览框-高级搜索 | `GET` | `/api/public/browser/data/164` | E9 |
| 42 | `人力资源` | 分部自定义字段保存 | `POST` | `/api/hrm/subcompanyfielddefined/save` | E9/KB900190601 |
| 43 | `人力资源` | 分部自定义字段删除 | `POST` | `/api/hrm/subcompanyfielddefined/del` | E9/KB900190601 |
| 44 | `人力资源` | 分部自定义字段移动分组 | `POST` | `/api/hrm/subcompanyfielddefined/changegroup` | E9/KB900190601 |
| 45 | `人力资源` | 分部自定义字段页签 | `GET` | `/api/hrm/subcompanyfielddefined/getTabInfo` | E9/KB900190601 |
| 46 | `人力资源` | 删除分部 | `POST` | `/api/hrm/organization/delSubCompany` | E9/KB900190601 |
| 47 | `人力资源` | 删除分部自定义字段分组 | `POST` | `/api/hrm/subcompanyfielddefined/delGroup` | E9/KB900190601 |
| 48 | `人力资源` | 删除权限分组 | `GET` | `/api/hrm/systemrightgroup/delSystemRightGroup` | E9/KB900190601 |
| 49 | `人力资源` | 删除权限明细 | `POST` | `/api/hrm/systemrightauthority/delSystemRightAuthority` | E9/KB900190601 |
| 50 | `人力资源` | 删除权限角色引用 | `POST` | `/api/hrm/systemrightgroup/delSystemRightRoles` | E9/KB900190601 |
| 51 | `人力资源` | 删除矩阵 | `POST` | `/api/hrm/matrix/pages/matrixList/delMatrixList` | E9/KB900190601 |
| 52 | `人力资源` | 删除虚拟维度 | `POST` | `/api/hrm/organizationvirtual/delCompany` | E9/KB900190601 |
| 53 | `人力资源` | 删除虚拟维度人员 | `POST` | `/api/hrm/organizationvirtual/delResource` | E9/KB900190601 |
| 54 | `人力资源` | 删除虚拟维度分部 | `POST` | `/api/hrm/organizationvirtual/delSubCompany` | E9/KB900190601 |
| 55 | `人力资源` | 删除虚拟维度部门 | `POST` | `/api/hrm/organizationvirtual/delDepartment` | E9/KB900190601 |
| 56 | `人力资源` | 删除角色功能权限 | `POST` | `/api/hrm/rolefucrightset/delRolesFucRightSet` | E9/KB900190601 |
| 57 | `人力资源` | 删除角色权限 | `POST` | `/api/hrm/rolesstrrightset/delRolesStrRightSet` | E9/KB900190601 |
| 58 | `人力资源` | 删除部门 | `POST` | `/api/hrm/organization/delDepartment` | E9/KB900190601 |
| 59 | `人力资源` | 删除部门自定义字段分组 | `POST` | `/api/hrm/departmentfielddefined/delGroup` | E9/KB900190601 |
| 60 | `人力资源` | 单人力浏览框切换tab获取数据 | `GET` | `/api/public/browser/data/1` | E9 |
| 61 | `人力资源` | 单人力浏览框模糊搜索 | `POST` | `/api/public/browser/complete/1` | E9/KB900201112 |
| 62 | `人力资源` | 单人力浏览框高级搜索 | `POST` | `/api/public/browser/data/17` | E9 |
| 63 | `人力资源` | 单人力浏览框高级搜索 | `POST` | `/api/public/browser/data/1` | E9 |
| 64 | `人力资源` | 发送工资单 | `POST` | `/api/hrm/finance/salarymanage/sendSalaryManage` | E9/KB900190601 |
| 65 | `人力资源` | 后端人力首页组织权限中心统计接口 | `GET` | `/api/hrm/common/getIndexInfo` | E9/KB900190601 |
| 66 | `人力资源` | 在线人员分析--在线人员列表 | `POST` | `/api/hrm/online/getSearchResult` | E9/KB900211008 |
| 67 | `人力资源` | 多人力浏览框切换tab获取数据 | `GET` | `/api/public/browser/data/17` | E9 |
| 68 | `人力资源` | 多人力浏览框模糊搜索 | `POST` | `/api/public/browser/complete/17` | E9 |
| 69 | `人力资源` | 导入日志列表 | `GET` | `/api/hrm/importlog/getImportColResultLog` | E9/KB900190601 |
| 70 | `人力资源` | 封存分部 | `POST` | `/api/hrm/organization/doSubCompanyCancel` | E9/KB900190601 |
| 71 | `人力资源` | 封存虚拟维度分部 | `POST` | `/api/hrm/organizationvirtual/doSubCompanyCancel` | E9/KB900190601 |
| 72 | `人力资源` | 封存虚拟维度部门 | `POST` | `/api/hrm/organizationvirtual/doDepartmentCancel` | E9/KB900190601 |
| 73 | `人力资源` | 封存部门 | `POST` | `/api/hrm/organization/doDepartmentCancel` | E9/KB900190601 |
| 74 | `人力资源` | 岗位浏览框-模糊搜索 | `GET` | `/api/public/browser/complete/24` | E9 |
| 75 | `人力资源` | 岗位浏览框-高级搜索 | `GET` | `/api/public/browser/data/24` | E9 |
| 76 | `人力资源` | 工资单管理--关闭工资单 | `POST` | `/api/hrm/finance/salarymanage/closeSalaryManage` | E9/KB900211008 |
| 77 | `人力资源` | 工资单管理--判断是否有权限 | `GET` | `/api/hrm/finance/salarymanage/getHasRight` | E9/KB900190601 |
| 78 | `人力资源` | 工资单管理--生成工资单 | `POST` | `/api/hrm/finance/salarymanage/createSalaryManage` | E9/KB900190601 |
| 79 | `人力资源` | 工资单管理--获取工资单管理查看表单 | `POST` | `/api/hrm/finance/salarymanage/getSalaryManageViewForm` | E9/KB900211008 |
| 80 | `人力资源` | 工资单管理--获取工资单管理编辑表单 | `POST` | `/api/hrm/finance/salarymanage/getSalaryManageEditForm` | E9/KB900190601 |
| 81 | `人力资源` | 批量编辑界面，保存批量调整部门所属分部表单 | `POST` | `/api/hrm/batchMaintenanceAdjustEdit/saveBatchSubcomid` | E9/KB900190601 |
| 82 | `人力资源` | 批量编辑界面，获取批量调整上级部门表单 | `POST` | `/api/hrm/batchMaintenanceAdjustEdit/getBatchSupdepid` | E9/KB900190601 |
| 83 | `人力资源` | 批量编辑界面，获取批量调整分部表单 | `POST` | `/api/hrm/batchMaintenanceAdjustEdit/getBatchSubcomid` | E9/KB900190601 |
| 84 | `人力资源` | 批量编辑页面，保存批量分部上级信息 | `POST` | `/api/hrm/batchMaintenanceAdjustEdit/saveBatchSupSubcomid` | E9/KB900190601 |
| 85 | `人力资源` | 批量编辑页面，保存批量调整上级部门表单 | `POST` | `/api/hrm/batchMaintenanceAdjustEdit/saveBatchSupdepid` | E9/KB900190601 |
| 86 | `人力资源` | 批量调整保存部门信息 | `POST` | `/api/hrm/batchMaintenanceAdjust/saveBatchDepartment` | E9/KB900190601 |
| 87 | `人力资源` | 批量调整分部信息 | `POST` | `/api/hrm/batchMaintenanceAdjust/batchSubcompany` | E9/KB900190601 |
| 88 | `人力资源` | 批量调整界面，保存分部数据 | `POST` | `/api/hrm/batchMaintenanceAdjust/saveBatchSubcompany` | E9/KB900190601 |
| 89 | `人力资源` | 批量调整页面，批量部门界面 | `POST` | `/api/hrm/batchMaintenanceAdjust/batchDepartment` | E9/KB900190601 |
| 90 | `人力资源` | 批量重置密码 | `POST` | `/api/hrm/organization/saveBatchDefaultPwd` | E9/KB900190601 |
| 91 | `人力资源` | 新增人虚拟维度员 | `POST` | `/api/hrm/organizationvirtual/addResourceToVirtual` | E9/KB900190601 |
| 92 | `人力资源` | 新增分部 | `POST` | `/api/hrm/organization/addSubCompany` | E9/KB900190601 |
| 93 | `人力资源` | 新增虚拟维度 | `POST` | `/api/hrm/organizationvirtual/addCompany` | E9/KB900190601 |
| 94 | `人力资源` | 新增虚拟维度分部 | `POST` | `/api/hrm/organizationvirtual/addSubCompany` | E9/KB900190601 |
| 95 | `人力资源` | 新增虚拟维度部门 | `POST` | `/api/hrm/organizationvirtual/addDepartment` | E9/KB900190601 |
| 96 | `人力资源` | 新增部门 | `POST` | `/api/hrm/organization/addDepartment` | E9/KB900190601 |
| 97 | `人力资源` | 机构权限列表 | `POST` | `/api/hrm/rolesstrrightset/getRolesStrRightSetList` | E9/KB900190601 |
| 98 | `人力资源` | 机构权限表单 | `GET` | `/api/hrm/rolesstrrightset/getRolesStrRightSetForm` | E9/KB900190601 |
| 99 | `人力资源` | 权限明细列表 | `POST` | `/api/hrm/systemrightauthority/getSystemRightAuthorityList` | E9/KB900190601 |
| 100 | `人力资源` | 权限明细查询条件 | `GET` | `/api/hrm/systemrightauthority/getSystemRightAuthorityCondition` | E9/KB900190601 |
| 101 | `人力资源` | 权限组Tab | `GET` | `/api/hrm/systemrightgroup/getSystemRightGroupTabInfo` | E9/KB900190601 |
| 102 | `人力资源` | 权限组列表 | `POST` | `/api/hrm/systemrightgroup/getSystemRightGroupList` | E9/KB900190601 |
| 103 | `人力资源` | 权限组查询条件 | `GET` | `/api/hrm/systemrightgroup/getSystemRightGroupCondition` | E9/KB900190601 |
| 104 | `人力资源` | 权限组表单 | `GET` | `/api/hrm/systemrightgroup/getSystemRightGroupForm` | E9/KB900190601 |
| 105 | `人力资源` | 权限角色引用查询列表 | `POST` | `/api/hrm/systemrightgroup/getSystemRightRolesList` | E9/KB900190601 |
| 106 | `人力资源` | 权限角色引用查询条件 | `GET` | `/api/hrm/systemrightgroup/getSystemRightRolesCondition` | E9/KB900190601 |
| 107 | `人力资源` | 权限调整--权限删除选择框列表 | `GET` | `/api/hrm/permissiontoadjustbrowser/list/D{key}` | E9/KB900190601 |
| 108 | `人力资源` | 权限调整-权限删除选择框列表 | `GET` | `/api/hrm/permissiontoadjustbrowser/list/T{key}` | E9/KB900190601 |
| 109 | `人力资源` | 权限调整-权限删除选择框条件 | `GET` | `/api/hrm/permissiontoadjustbrowser/condition/D{key}` | E9/KB900190601 |
| 110 | `人力资源` | 权限调整-权限复制浏览框列表 | `GET` | `/api/hrm/permissiontoadjustbrowser/list/C{key}` | E9/KB900190601 |
| 111 | `人力资源` | 权限调整-权限复制选择框条件 | `GET` | `/api/hrm/permissiontoadjustbrowser/condition/C{key}` | E9/KB900190601 |
| 112 | `人力资源` | 权限调整-权限调整选择框条件 | `GET` | `/api/hrm/permissiontoadjustbrowser/condition/T{key}` | E9/KB900190601 |
| 113 | `人力资源` | 权限调整列表 | `POST` | `/api/hrm/permissionsearch/getPermissionSearchResult` | E9/KB900190601 |
| 114 | `人力资源` | 权限调整列表 | `POST` | `/api/hrm/permissiontoadjust/getPermissionToAdjustList` | E9/KB900190601 |
| 115 | `人力资源` | 权限调整日志 | `GET` | `/api/hrm/permissiontoadjust/getProcessLog` | E9/KB900190601 |
| 116 | `人力资源` | 权限调整检查对象是否有为完成的任务 | `GET` | `/api/hrm/permissiontoadjust/checkFromId` | E9/KB900190601 |
| 117 | `人力资源` | 权限调整表单 | `GET` | `/api/hrm/permissiontoadjust/getPermissionToAdjustForm` | E9/KB900190601 |
| 118 | `人力资源` | 权限查询表单 | `GET` | `/api/hrm/permissionsearch/getPermissionSearchForm` | E9/KB900190601 |
| 119 | `人力资源` | 权限调整返回结果数据 | `POST` | `/api/hrm/permissiontoadjust/processData` | E9/KB900190601 |
| 120 | `人力资源` | 查看部门信息 | `GET` | `/api/hrm/organization/getDepartmentFormFieldView` | E9/KB900190601 |
| 121 | `人力资源` | 根据条件再次获取组织图表数据 | `POST` | `/api/hrm/orgchart/getOrgChartDataAjax` | E9/KB900190601 |
| 122 | `人力资源` | 根据部门获取分部信息 | `POST` | `/api/hrm/batchmaintenanceadjust/getsubcompanyinfo` | E9/KB900190601 |
| 123 | `人力资源` | 添加人员到虚拟维度 | `POST` | `/api/hrm/organization/saveResourceVirtualDepartmentSet` | E9/KB900190601 |
| 124 | `人力资源` | 清除当前矩阵的离职人员 | `POST` | `/api/hrm/matrix/pages/matrixList/clearDimission` | E9/KB900190601 |
| 125 | `人力资源` | 登录失败日志右键菜单 | `GET` | `/api/hrm/loginfailedlog/getRightMenu` | E9/KB900190601 |
| 126 | `人力资源` | 登录失败日志权限判断 | `GET` | `/api/hrm/loginfailedlog/getHasRight` | E9/KB900190601 |
| 127 | `人力资源` | 登录提醒 | `POST` | `/api/hrm/login/remindLogin` | E9/KB900190601 |
| 128 | `人力资源` | 矩阵信息导出 | `POST` | `/api/hrm/matrix/pages/matrixList/matrixExport` | E9/KB900190601 |
| 129 | `人力资源` | 矩阵新增保存 | `POST` | `/api/hrm/matrix/pages/matrixList/addMatrixList` | E9/KB900190601 |
| 130 | `人力资源` | 管理分权权限判断 | `GET` | `/api/hrm/modulemanagerdetach/getHasRight` | E9/KB900190601 |
| 131 | `人力资源` | 组织字段显示层级设置--获取右键菜单 | `GET` | `/api/hrm/organizationShowSet/getRightMenu` | E9/KB900190601 |
| 132 | `人力资源` | 组织字段显示设置--保存 | `POST` | `/api/hrm/organizationShowSet/saveOrganizationShowSet` | E9/KB900190601 |
| 133 | `人力资源` | 组织字段显示设置权限判断 | `GET` | `/api/hrm/organizationShowSet/getHasRight` | E9/KB900190601 |
| 134 | `人力资源` | 组织显示设置--获取表单 | `GET` | `/api/hrm/organizationShowSet/getOrganizationShowSetForm` | E9/KB900190601 |
| 135 | `人力资源` | 组织结构右键菜单 | `POST` | `/api/hrm/organization/getRightMenu` | E9/KB900190601 |
| 136 | `人力资源` | 组织结构维护获取部门表单 | `GET` | `/api/hrm/organizationvirtual/getDepartmentFormField` | E9/KB900190601 |
| 137 | `人力资源` | 组织结构页签 | `POST` | `/api/hrm/organization/getTabs` | E9/KB900190601 |
| 138 | `人力资源` | 编辑分部信息 | `POST` | `/api/hrm/organization/editSubCompany` | E9/KB900190601 |
| 139 | `人力资源` | 编辑工资单 | `POST` | `/api/hrm/finance/salarymanage/editsalarymanage` | E9/KB900190601 |
| 140 | `人力资源` | 编辑总部 | `POST` | `/api/hrm/organization/editCompany` | E9/KB900190601 |
| 141 | `人力资源` | 编辑权限角色引用 | `GET` | `/api/hrm/systemrightgroup/editsystemrightroles` | E9/KB900190601 |
| 142 | `人力资源` | 编辑虚拟维度 | `POST` | `/api/hrm/organizationvirtual/editCompany` | E9/KB900190601 |
| 143 | `人力资源` | 编辑虚拟维度分部 | `POST` | `/api/hrm/organizationvirtual/editSubCompany` | E9/KB900190601 |
| 144 | `人力资源` | 编辑虚拟维度部门 | `POST` | `/api/hrm/organizationvirtual/editDepartment` | E9/KB900190601 |
| 145 | `人力资源` | 编辑部门信息 | `POST` | `/api/hrm/organization/editDepartment` | E9/KB900190601 |
| 146 | `人力资源` | 职务和岗位设置--职务列表 | `GET` | `/api/hrm/job/getJobActivityList` | E9/KB900190601 |
| 147 | `人力资源` | 职务岗位设置--删除岗位 | `POST` | `/api/hrm/job/deleteJobTitle` | E9/KB900190601 |
| 148 | `人力资源` | 职务岗位设置--删除职务 | `POST` | `/api/hrm/job/deleteJobActivity` | E9/KB900190601 |
| 149 | `人力资源` | 职务岗位设置--判断是否有权限 | `GET` | `/api/hrm/job/getHasRight` | E9/KB900190601 |
| 150 | `人力资源` | 职务岗位设置--岗位封存或解封 | `POST` | `/api/hrm/job/doCanceled` | E9 |
| 151 | `人力资源` | 职务岗位设置--新增岗位 | `POST` | `/api/hrm/job/addJobTitle` | E9/KB900190601 |
| 152 | `人力资源` | 职务岗位设置--新建职务 | `POST` | `/api/hrm/job/addJobActivity` | E9/KB900190601 |
| 153 | `人力资源` | 职务岗位设置--添加职务类别 | `POST` | `/api/hrm/job/addJobGroup` | E9/KB900190601 |
| 154 | `人力资源` | 职务岗位设置--编辑岗位 | `POST` | `/api/hrm/job/editeJobTitle` | E9/KB900190601 |
| 155 | `人力资源` | 职务岗位设置--编辑职务 | `POST` | `/api/hrm/job/editeJobActivity` | E9/KB900190601 |
| 156 | `人力资源` | 职务岗位设置--编辑职务类别 | `POST` | `/api/hrm/job/editeJobGroup` | E9/KB900190601 |
| 157 | `人力资源` | 职务岗位设置--获取基本信息 | `GET` | `/api/hrm/job/getJobDetail` | E9/KB900190601 |
| 158 | `人力资源` | 职务岗位设置--获取岗位列表 | `GET` | `/api/hrm/job/getJobTitleList` | E9/KB900190601 |
| 159 | `人力资源` | 职务岗位设置--获取岗位的表单 | `GET` | `/api/hrm/job/getJobTitleForm` | E9/KB900190601 |
| 160 | `人力资源` | 职务岗位设置--获取查询条件 | `GET` | `/api/hrm/job/getSearchCondition` | E9/KB900190601 |
| 161 | `人力资源` | 职务岗位设置--获取职务岗位树 | `GET` | `/api/hrm/job/getJobTree` | E9/KB900190601 |
| 162 | `人力资源` | 职务岗位设置--获取职务的表单 | `GET` | `/api/hrm/job/getJobActivityForm` | E9/KB900190601 |
| 163 | `人力资源` | 职务岗位设置--获取职务类别列表 | `GET` | `/api/hrm/job/getJobGroupList` | E9/KB900190601 |
| 164 | `人力资源` | 职务岗位设置--获取职务类别的表单 | `GET` | `/api/hrm/job/getJobGroupForm` | E9/KB900190601 |
| 165 | `人力资源` | 职务浏览框-模糊搜索 | `GET` | `/api/public/browser/complete/282` | E9 |
| 166 | `人力资源` | 职务浏览框-高级搜索 | `GET` | `/api/public/browser/data/282` | E9 |
| 167 | `人力资源` | 职务类别--删除职务类别 | `POST` | `/api/hrm/job/deleteJobGroup` | E9/KB900190601 |
| 168 | `人力资源` | 职务类别浏览框-模糊搜索 | `GET` | `/api/public/browser/complete/281` | E9 |
| 169 | `人力资源` | 职务类别浏览框-高级搜索 | `GET` | `/api/public/browser/data/281` | E9 |
| 170 | `人力资源` | 获取人员卡片二维码 | `GET` | `/api/hrm/resource/getQRCode` | E9/KB900190601 |
| 171 | `人力资源` | 获取人员卡片自定义字段左侧树 | `GET` | `/api/hrm/resourcefielddefined/getTree` | E9/KB900190601 |
| 172 | `人力资源` | 获取人员查询结果列表 | `POST` | `/api/hrm/organization/getResourceSearchList` | E9/KB900190601 |
| 173 | `人力资源` | 获取分部列表 | `POST` | `/api/hrm/organization/getSubCompanySearchList` | E9/KB900190601 |
| 174 | `人力资源` | 获取分部自定义字段 | `GET` | `/api/hrm/subcompanyfielddefined/getFieldDefinedInfo` | E9/KB900190601 |
| 175 | `人力资源` | 获取分部表单 | `GET` | `/api/hrm/organization/getSubCompanyFormField` | E9/KB900190601 |
| 176 | `人力资源` | 获取加入虚拟维度表单 | `POST` | `/api/hrm/organization/getResourceVirtualDepartmentSetFormField` | E9/KB900190601 |
| 177 | `人力资源` | 获取单个矩阵打开之后的数据 | `POST` | `/api/hrm/matrix/pages/matrixList/getMatrixListSetForm` | E9/KB900190601 |
| 178 | `人力资源` | 获取工资单管理列表 | `POST` | `/api/hrm/finance/salarymanage/getSalaryManageList` | E9/KB900190601 |
| 179 | `人力资源` | 获取工资单管理列表查询条件 | `POST` | `/api/hrm/finance/salarymanage/getSalaryManageListCondition` | E9/KB900190601 |
| 180 | `人力资源` | 获取工资单管理表单查询条件 | `POST` | `/api/hrm/finance/salarymanage/getSalaryManageFormCondition` | E9/KB900190601 |
| 181 | `人力资源` | 获取总部表单 | `GET` | `/api/hrm/organization/getCompanyFormField` | E9/KB900190601 |
| 182 | `人力资源` | 获取批量设置虚拟维度上级表单 | `POST` | `/api/hrm/organizationvirtual/getBatchSetManagerFormField` | E9/KB900190601 |
| 183 | `人力资源` | 获取批量调整上级分部页面表单 | `POST` | `/api/hrm/batchMaintenanceAdjustEdit/getBatchSupSubcomid` | E9/KB900190601 |
| 184 | `人力资源` | 获取新增人员表单 | `GET` | `/api/hrm/resource/add/getHrmResourceAddForm` | E9/KB900211008 |
| 185 | `人力资源` | 获取权限角色引用表单 | `GET` | `/api/hrm/systemrightgroup/getSystemRightRolesForm` | E9/KB900190601 |
| 186 | `人力资源` | 获取登录人信息 | `GET` | `/api/hrm/login/getAccountList` | - |
| 187 | `人力资源` | 获取登录表单 | `POST` | `/api/hrm/login/getLoginForm` | E9/KB900190601 |
| 188 | `人力资源` | 获取矩阵列表数据 | `POST` | `/api/hrm/matrix/pages/matrixList/getMatrixListSearchList` | E9/KB900190601 |
| 189 | `人力资源` | 获取组织图标的各种tab页签查询条件 | `POST` | `/api/hrm/orgchart/getOrgChartSearchCondition` | E9/KB900190601 |
| 190 | `人力资源` | 获取组织图表数据 | `POST` | `/api/hrm/orgchart/getOrgChartData` | E9/KB900190601 |
| 191 | `人力资源` | 获取虚拟组织结构分部查询条件 | `GET` | `/api/hrm/organizationvirtual/getSubCompanySearchCondition` | E9/KB900190601 |
| 192 | `人力资源` | 获取虚拟维度人员列表 | `POST` | `/api/hrm/organizationvirtual/getResourceSearchList` | E9/KB900190601 |
| 193 | `人力资源` | 获取虚拟维度分部信息 | `GET` | `/api/hrm/organizationvirtual/getSubCompanyFormFieldView` | E9/KB900190601 |
| 194 | `人力资源` | 获取虚拟维度分部列表 | `POST` | `/api/hrm/organizationvirtual/getSubCompanySearchList` | E9/KB900190601 |
| 195 | `人力资源` | 获取虚拟维度表单 | `GET` | `/api/hrm/organizationvirtual/getCompanyFormField` | E9/KB900190601 |
| 196 | `人力资源` | 获取虚拟维度部门信息 | `GET` | `/api/hrm/organizationvirtual/getDepartmentFormFieldView` | E9/KB900190601 |
| 197 | `人力资源` | 获取虚拟维度部门列表 | `POST` | `/api/hrm/organizationvirtual/getDepartmentSearchList` | E9/KB900190601 |
| 198 | `人力资源` | 获取虚拟维度部门列表查询条件 | `GET` | `/api/hrm/organizationvirtual/getDepartmentSearchCondition` | E9/KB900190601 |
| 199 | `人力资源` | 获取虚拟维度页签 | `POST` | `/api/hrm/organizationvirtual/getTabs` | E9/KB900190601 |
| 200 | `人力资源` | 获取部门列表 | `POST` | `/api/hrm/organization/getDepartmentSearchList` | E9/KB900190601 |
| 201 | `人力资源` | 获取部门自定义字段 | `GET` | `/api/hrm/departmentfielddefined/getFieldDefinedInfo` | E9/KB900190601 |
| 202 | `人力资源` | 获取部门表单 | `GET` | `/api/hrm/organization/getDepartmentFormField` | E9/KB900190601 |
| 203 | `人力资源` | 虚拟维度人员列表查询条件 | `GET` | `/api/hrm/organizationvirtual/getResourceSearchCondition` | E9/KB900190601 |
| 204 | `人力资源` | 虚拟维度分部表单 | `GET` | `/api/hrm/organizationvirtual/getSubCompanyFormField` | E9/KB900190601 |
| 205 | `人力资源` | 虚拟维度右键菜单 | `POST` | `/api/hrm/organizationvirtual/getRightMenu` | E9/KB900190601 |
| 206 | `人力资源` | 虚拟维度批量设置上级保存 | `POST` | `/api/hrm/organizationvirtual/saveBatchSetManager` | E9/KB900190601 |
| 207 | `人力资源` | 角色功能权限列表 | `POST` | `/api/hrm/rolefucrightset/getRolesFucRightSetList` | E9/KB900190601 |
| 208 | `人力资源` | 角色功能权限查询条件 | `GET` | `/api/hrm/rolefucrightset/getRolesFucRightSetCondition` | E9/KB900190601 |
| 209 | `人力资源` | 角色功能权限表单 | `GET` | `/api/hrm/rolefucrightset/getRolesFucRightSetForm` | E9/KB900190601 |
| 210 | `人力资源` | 角色权限查询条件 | `GET` | `/api/hrm/rolesstrrightset/getRolesStrRightSetCondition` | E9/KB900190601 |
| 211 | `人力资源` | 角色设置权限判断 | `POST` | `/api/hrm/role/getHasRight` | E9/KB900190601 |
| 212 | `人力资源` | 解封分部 | `POST` | `/api/hrm/organization/doSubCompanyISCanceled` | E9/KB900190601 |
| 213 | `人力资源` | 解封虚拟维度分部 | `POST` | `/api/hrm/organizationvirtual/doSubCompanyISCanceled` | E9/KB900190601 |
| 214 | `人力资源` | 解封虚拟维度部门 | `POST` | `/api/hrm/organizationvirtual/doDepartmentISCanceled` | E9/KB900190601 |
| 215 | `人力资源` | 解封部门 | `POST` | `/api/hrm/organization/doDepartmentISCanceled` | E9/KB900190601 |
| 216 | `人力资源` | 通讯录--保存默认排序设置 | `POST` | `/api/hrm/search/saveOrderBy4Search` | E9/KB900190601 |
| 217 | `人力资源` | 通讯录--获取人员列表 | `POST` | `/api/hrm/search/getHrmSearchResult` | E9/KB900190601 |
| 218 | `人力资源` | 通讯录--获取高级搜索查询条件 | `GET` | `/api/hrm/search/getHrmSearchCondition` | E9/KB900190601 |
| 219 | `人力资源` | 通讯录--获取默认排序设置 | `GET` | `/api/hrm/search/getOrderBy4Search` | E9/KB900190601 |
| 220 | `人力资源` | 部门列表查询条件 | `GET` | `/api/hrm/organization/getDepartmentSearchCondition` | E9/KB900190601 |
| 221 | `人力资源` | 部门浏览框-模糊搜索 | `GET` | `/api/public/browser/complete/4` | E9 |
| 222 | `人力资源` | 部门浏览框-高级搜索 | `GET` | `/api/public/browser/data/4` | E9 |
| 223 | `人力资源` | 部门自定义字段删除接口 | `POST` | `/api/hrm/departmentfielddefined/del` | E9/KB900190601 |
| 224 | `人力资源` | 部门自定义字段移动分组 | `POST` | `/api/hrm/departmentfielddefined/changegroup` | E9/KB900190601 |
| 225 | `人力资源` | 部门自定义字段页签 | `GET` | `/api/hrm/departmentfielddefined/getTabInfo` | E9/KB900190601 |
| 226 | `协作管理` | 协作-协作交流-列表(layout 1为数图模式;2为列表模式) | `GET` | `/api/cowork/base/getCoworkList` | E9/KB900190601 |
| 227 | `协作管理` | 协作后台版块设置-版块列表 | `GET` | `/api/cowork/type/getCoworkTypeList` | E9/KB900190601 |
| 228 | `协作管理` | 协作后台类别设置-类别列表 | `GET` | `/api/cowork/maintype/getCoworkMainTypeList` | E9/KB900190601 |
| 229 | `工作流程` | 流程实例：删除流程（对外） | `POST` | `/api/workflow/paService/deleteRequest` | E9 |
| 230 | `工作流程` | 流程实例：强制归档（对外） | `POST` | `/api/workflow/paService/doForceOver` | E9 |
| 231 | `工作流程` | 流程实例：强制收回（对外） | `POST` | `/api/workflow/paService/doForceDrawBack` | E9 |
| 232 | `工作流程` | 流程实例：意见保存(对外) | `POST` | `/api/workflow/paService/saveRequestLog` | E9 |
| 233 | `工作流程` | 流程实例：提交(对外) | `POST` | `/api/workflow/paService/submitRequest` | E9 |
| 234 | `工作流程` | 流程实例：新建(对外) | `POST` | `/api/workflow/paService/doCreateRequest` | E9 |
| 235 | `工作流程` | 流程实例：流程干预（对外） | `POST` | `/api/workflow/paService/doIntervenor` | E9 |
| 236 | `工作流程` | 流程实例：流程撤回（对外） | `POST` | `/api/workflow/paService/withdrawRequest` | E9 |
| 237 | `工作流程` | 流程实例：获取流程信息（对外） | `GET` | `/api/workflow/paService/getWorkflowRequest` | E9 |
| 238 | `工作流程` | 流程实例：获取流程图链接(对外) | `GET` | `/api/workflow/paService/getRequestFlowChart` | E9 |
| 239 | `工作流程` | 流程实例：获取流程意见（对外） | `GET` | `/api/workflow/paService/getRequestLog` | E9 |
| 240 | `工作流程` | 流程实例：获取流程流转数据（对外） | `GET` | `/api/workflow/paService/getRequestOperatorInfo` | E9 |
| 241 | `工作流程` | 流程实例：获取流程状态数据（对外） | `GET` | `/api/workflow/paService/getRequestStatus` | E9 |
| 242 | `工作流程` | 流程实例：获取流程相关资源(对外) | `GET` | `/api/workflow/paService/getRequestResources` | E9 |
| 243 | `工作流程` | 流程实例：转发、意见征询、转办(对外) | `POST` | `/api/workflow/paService/forwardRequest` | E9 |
| 244 | `工作流程` | 流程实例：退回(对外) | `POST` | `/api/workflow/paService/rejectRequest` | E9 |
| 245 | `工作流程` | 流程数据：办结流程列表 (对外) | `POST` | `/api/workflow/paService/getProcessedWorkflowRequestList` | E9 |
| 246 | `工作流程` | 流程数据：办结流程数量 (对外) | `POST` | `/api/workflow/paService/getProcessedWorkflowRequestCount` | E9 |
| 247 | `工作流程` | 流程数据：可创建流程类型数量 (对外) | `POST` | `/api/workflow/paService/getCreateWorkflowTypeCount` | E9 |
| 248 | `工作流程` | 流程数据：可创建的流程列表 (对外) | `POST` | `/api/workflow/paService/getCreateWorkflowList` | E9 |
| 249 | `工作流程` | 流程数据：可创建的流程数量 (对外) | `POST` | `/api/workflow/paService/getCreateWorkflowCount` | E9 |
| 250 | `工作流程` | 流程数据：可创建的流程类型列表 (对外) | `POST` | `/api/workflow/paService/getCreateWorkflowTypeList` | E9 |
| 251 | `工作流程` | 流程数据：已办流程列表(不包含异构系统数据) (对外) | `POST` | `/api/workflow/paService/getHandledWorkflowRequestList` | E9 |
| 252 | `工作流程` | 流程数据：已办流程列表(可选择是否包含异构系统数据) (对外) | `POST` | `/api/workflow/paService/getHandledWorkflowRequestList4Ofs` | E9 |
| 253 | `工作流程` | 流程数据：已办流程数量(不包含异构系统数据)  (对外) | `POST` | `/api/workflow/paService/getHandledWorkflowRequestCount` | E9 |
| 254 | `工作流程` | 流程数据：已办流程数量(可选择是否包含异构系统数据) (对外) | `POST` | `/api/workflow/paService/getHandledWorkflowRequestCount4Ofs` | E9 |
| 255 | `工作流程` | 流程数据：待办 中抄送流程数量 (对外) | `POST` | `/api/workflow/paService/getCCWorkflowRequestCount` | E9 |
| 256 | `工作流程` | 流程数据：待办中抄送流程列表 (对外) | `POST` | `/api/workflow/paService/getCCWorkflowRequestList` | E9 |
| 257 | `工作流程` | 流程数据：待办中退回流程列表 (对外) | `POST` | `/api/workflow/paService/getBeRejectWorkflowRequestList` | E9 |
| 258 | `工作流程` | 流程数据：待办中退回流程数量 (对外) | `POST` | `/api/workflow/paService/getBeRejectWorkflowRequestCount` | E9 |
| 259 | `工作流程` | 流程数据：待办列表数量 (对外) | `POST` | `/api/workflow/paService/getToDoWorkflowRequestCount` | E9 |
| 260 | `工作流程` | 流程数据：待办流程列表 (对外) | `POST` | `/api/workflow/paService/getToDoWorkflowRequestList` | E9 |
| 261 | `工作流程` | 流程数据：待处理流程列表 (对外) | `POST` | `/api/workflow/paService/getDoingWorkflowRequestList` | E9 |
| 262 | `工作流程` | 流程数据：待处理流程数量 (对外) | `POST` | `/api/workflow/paService/getDoingWorkflowRequestCount` | E9 |
| 263 | `工作流程` | 流程数据：待阅流程列表 (对外) | `POST` | `/api/workflow/paService/getToBeReadWorkflowRequestList` | E9 |
| 264 | `工作流程` | 流程数据：待阅流程数量 (对外) | `POST` | `/api/workflow/paService/getToBeReadWorkflowRequestCount` | E9 |
| 265 | `工作流程` | 流程数据：所发起流程列表 (对外) | `POST` | `/api/workflow/paService/getMyWorkflowRequestList` | E9 |
| 266 | `工作流程` | 流程数据：所发起流程数量 (对外) | `POST` | `/api/workflow/paService/getMyWorkflowRequestCount` | E9 |
| 267 | `工作流程` | 流程数据：所有流程列表 (对外) | `POST` | `/api/workflow/paService/getAllWorkflowRequestList` | E9 |
| 268 | `工作流程` | 流程数据：所有流程数量 (对外) | `POST` | `/api/workflow/paService/getAllWorkflowRequestCount` | E9 |
| 269 | `工作流程` | 流程数据：根据 tabids 来获取流程列表 (对外) | `POST` | `/api/workflow/paService/getToDoRequestList` | E9 |
| 270 | `工作流程` | 流程数据：根据tabids来获取流程数量 (对外) | `POST` | `/api/workflow/paService/getToDoRequestCount` | E9 |
| 271 | `工作流程` | 流程数据：流程签字意见 (对外) | `POST` | `/api/workflow/paService/getWorkflowRequestLogs` | E9 |
| 272 | `工作流程` | 流程数据：转发流程列表(只统计还在待办的) (对外) | `POST` | `/api/workflow/paService/getForwardWorkflowRequestList` | E9 |
| 273 | `工作流程` | 流程数据：转发流程数量(只统计还在待办的) (对外) | `POST` | `/api/workflow/paService/getForwardWorkflowRequestCount` | E9 |
| 274 | `知识管理` | 创建文档总数 | `GET` | `/api/doc/categoryReport/docNum` | E9/KB900190601 |
| 275 | `知识管理` | 删除文档 | `GET` | `/api/doc/operate/delete` | E9/KB900190601 |
| 276 | `知识管理` | 删除文档评论-em7 | `GET` | `/api/doc/mobile/systemDoc/deleteReply` | E9/KB900190601 |
| 277 | `知识管理` | 删除默认共享 | `POST` | `/api/doc/console/category/defaultRight/delete` | E9/KB900190601 |
| 278 | `知识管理` | 回复列表-em7 | `GET` | `/api/doc/mobile/systemDoc/getReply` | E9/KB900190601 |
| 279 | `知识管理` | 回收站-文档列表 | `GET` | `/api/doc/recycle/list` | E9/KB900190601 |
| 280 | `知识管理` | 失效文档 | `GET` | `/api/doc/detail/invalidate` | E9/KB900190601 |
| 281 | `知识管理` | 导入文档到虚拟目录 | `GET` | `/api/doc/operate/import2Dummy` | E9/KB900190601 |
| 282 | `知识管理` | 批量调整共享 | `POST` | `/api/doc/share/saveShareBatch` | E9/KB900190601 |
| 283 | `知识管理` | 文档共享列表 | `GET` | `/api/doc/share/list` | E9/KB900190601 |
| 284 | `知识管理` | 文档回复-保存 | `POST` | `/api/doc/reply/saveReply` | E9/KB900190601 |
| 285 | `知识管理` | 文档回复-回复列表 | `GET` | `/api/doc/reply/replyList` | E9/KB900190601 |
| 286 | `知识管理` | 文档回复数 | `GET` | `/api/doc/reply/replyCount` | E9/KB900190601 |
| 287 | `知识管理` | 文档回复评论接口-em7 | `GET` | `/api/doc/mobile/systemDoc/replyDoc` | E9/KB900190601 |
| 288 | `知识管理` | 文档总数 | `GET` | `/api/doc/report/createDocNum` | E9/KB900190601 |
| 289 | `知识管理` | 文档置顶 | `GET` | `/api/doc/detail/setTop` | E9/KB900190601 |
| 290 | `知识管理` | 文档详情-tab页 | `GET` | `/api/doc/detail/tabInfo` | E9/KB900190601 |
| 291 | `知识管理` | 文档详情-基本信息 | `GET` | `/api/doc/detail/basicInfo` | E9/KB900190601 |
| 292 | `知识管理` | 文档详情-打分 | `GET` | `/api/doc/score/doMarkDoc` | E9/KB900190601 |
| 293 | `知识管理` | 文档详情-打分信息 | `GET` | `/api/doc/score/docScore` | E9/KB900190601 |
| 294 | `知识管理` | 文档详情-文档内容 | `GET` | `/api/doc/detail/htmlContent` | E9/KB900190601 |
| 295 | `知识管理` | 文档详情-文档属性 | `GET` | `/api/doc/detail/docParamInfo` | E9/KB900190601 |
| 296 | `知识管理` | 文档详情-文档版本 | `GET` | `/api/doc/detail/docVersion` | E9/KB900190601 |
| 297 | `知识管理` | 文档详情-有附件时展开文档附件属性附件列表 | `GET` | `/api/doc/detail/docAutoExtendInfo` | E9/KB900190601 |
| 298 | `知识管理` | 文档详情-添加文档阅读记录 | `GET` | `/api/doc/read/addReadLog` | E9/KB900190601 |
| 299 | `知识管理` | 文档详情-点赞信息 | `GET` | `/api/doc/praise/praiseInfo` | E9/KB900190601 |
| 300 | `知识管理` | 新建、编辑文档-保存 | `POST` | `/api/doc/save/save` | E9/KB900190601 |
| 301 | `知识管理` | 新建、编辑文档-提交 | `POST` | `/api/doc/save/submit` | E9/KB900190601 |
| 302 | `知识管理` | 新建、编辑文档-是否签出验证 | `GET` | `/api/doc/save/isCheckOut` | E9/KB900190601 |
| 303 | `知识管理` | 新建、编辑文档-根据附件生成一篇文档 | `GET` | `/api/doc/save/accForDoc` | E9/KB900190601 |
| 304 | `知识管理` | 新建、编辑文档-附件列表 | `GET` | `/api/doc/save/getAccListForEdit` | E9/KB900190601 |
| 305 | `知识管理` | 新建文档-(取消)收藏目录 | `GET` | `/api/doc/category/collute` | E9/KB900190601 |
| 306 | `知识管理` | 新建文档-目录树 | `GET` | `/api/doc/category/treeNode` | E9/KB900190601 |
| 307 | `知识管理` | 替换附件 | `GET` | `/api/doc/acc/docAccReplace` | E9/KB900190601 |
| 308 | `知识管理` | 查看新闻页列表 | `GET` | `/api/doc/console/news/table` | E9/KB900190601 |
| 309 | `知识管理` | 查阅文档-文档列表 | `GET` | `/api/doc/searchlist/list` | E9/KB900190601 |
| 310 | `知识管理` | 添加文档共享 | `POST` | `/api/doc/share/saveShare` | E9/KB900190601 |
| 311 | `知识管理` | 点赞 | `GET` | `/api/doc/praise/doPraise` | E9/KB900190601 |
| 312 | `知识管理` | 点赞、取消点赞-em7 | `POST` | `/api/doc/mobile/systemDoc/praiseDoc` | E9/KB900190601 |
| 313 | `知识管理` | 登录前新闻-html文档正文 | `GET` | `/api/doc/out/detail/docContent` | E9/KB900190601 |
| 314 | `知识管理` | 登录前门户-列表 | `GET` | `/api/doc/out/more/list` | E9/KB900190601 |
| 315 | `知识管理` | 目录列表 | `GET` | `/api/doc/console/category/table` | E9/KB900190601 |
| 316 | `知识管理` | 目录树查询接口 | `GET` | `/api/doc/console/category/tree` | E9/KB900190601 |
| 317 | `知识管理` | 知识中心-上传文档 | `GET` | `/api/doc/doccenter/getUploadSet` | E9/KB900190601 |
| 318 | `知识管理` | 知识中心-我的小伙伴们都在看什么（Tab页） | `GET` | `/api/doc/doccenter/tabInfoOfPartner` | E9/KB900190601 |
| 319 | `知识管理` | 编辑新闻 | `POST` | `/api/doc/console/news/update` | E9/KB900190601 |
| 320 | `知识管理` | 获取全部文档列表-em7 | `GET` | `/api/doc/mobile/systemDoc/getAllDocList` | E9/KB900190601 |
| 321 | `知识管理` | 获取我的收藏文档列表-em7 | `GET` | `/api/doc/mobile/systemDoc/getCollectDocList` | E9/KB900190601 |
| 322 | `知识管理` | 获取我的文档列表-em7 | `GET` | `/api/doc/mobile/systemDoc/getMyDocList` | E9/KB900190601 |
| 323 | `知识管理` | 获取指定目录下的文档列表-em7 | `GET` | `/api/doc/mobile/systemDoc/getCategoryDocList` | E9/KB900190601 |
| 324 | `知识管理` | 获取新闻信息 | `GET` | `/api/doc/console/news/info` | E9/KB900190601 |
| 325 | `知识管理` | 获取新闻图库列表 | `GET` | `/api/doc/console/news/pic/table` | E9/KB900190601 |
| 326 | `知识管理` | 获取目录列表集合-em7 | `GET` | `/api/doc/mobile/systemDoc/getCategoryList` | E9/KB900190601 |
| 327 | `知识管理` | 获取默认的权限列表 | `GET` | `/api/doc/console/category/defaultRight` | E9/KB900190601 |
| 328 | `知识管理` | 调整所有共享 | `POST` | `/api/doc/console/multi/share/entire` | E9/KB900190601 |
| 329 | `知识管理` | 附件上传 | `POST` | `/api/doc/upload/uploadFile` | E9/KB900190601 |
| 330 | `知识管理` | 附件上传 | `POST` | `/api/doc/upload/uploadFile2Doc` | E9/KB900190601 |
| 331 | `知识管理` | 附件列表 | `GET` | `/api/doc/acc/docAcc` | E9/KB900190601 |
| 332 | `知识管理` | 附件版本列表 | `GET` | `/api/doc/acc/docAccVersion` | E9/KB900190601 |
| 333 | `知识管理` | 附件重命名 | `POST` | `/api/doc/acc/rename` | E9/KB900190601 |
| 334 | `考勤` | 一键启用考勤--初始化 | `GET` | `/api/kq/setupwizard/performInitialization` | E9/KB900190601 |
| 335 | `考勤` | 一键启用考勤--判断是否具有权限 | `GET` | `/api/kq/setupwizard/getHasRight` | E9/KB900190601 |
| 336 | `考勤` | 一键启用考勤--获取单个步骤 | `GET` | `/api/kq/setupwizard/getSetupSteps` | E9/KB900190601 |
| 337 | `考勤` | 一键启用考勤--获取表单 | `GET` | `/api/kq/setupwizard/getSetupForm` | E9/KB900190601 |
| 338 | `考勤` | 一键启用考勤-右键菜单 | `GET` | `/api/kq/setupwizard/getRightMenu` | E9/KB900190601 |
| 339 | `考勤` | 保存考勤流程设置的 字段对应信息 | `POST` | `/api/kq/wfSetting/statesShedule/saveStateProcSetFlowWfFields` | E9/KB900190601 |
| 340 | `考勤` | 保存考勤流程设置的 流程概览 | `POST` | `/api/kq/wfSetting/statesShedule/saveStateProcSetFlow` | E9/KB900190601 |
| 341 | `考勤` | 假期余额--保存修改 | `POST` | `/api/kq/balanceofleave/saveBalanceOfLeave` | E9/KB900190601 |
| 342 | `考勤` | 假期类型--保存启用/不启用的假期类型 | `POST` | `/api/kq/leavetypes/saveDisableLeaveTypes` | E9/KB900190601 |
| 343 | `考勤` | 假期类型--删除 | `POST` | `/api/kq/leavetypes/deleteLeaveTypes` | E9/KB900190601 |
| 344 | `考勤` | 假期类型--判断是否有权限 | `GET` | `/api/kq/leavetypes/getHasRight` | E9/KB900190601 |
| 345 | `考勤` | 假期类型--新建假期类型 | `POST` | `/api/kq/leavetypes/addLeaveTypes` | E9/KB900190601 |
| 346 | `考勤` | 假期类型--编辑假期类型 | `POST` | `/api/kq/leavetypes/editLeaveTypes` | E9/KB900190601 |
| 347 | `考勤` | 假期类型--获取假期类型列表 | `GET` | `/api/kq/leavetypes/getSearchList` | E9/KB900190601 |
| 348 | `考勤` | 假期类型--获取右键菜单 | `GET` | `/api/kq/leavetypes/getRightMenu` | E9/KB900190601 |
| 349 | `考勤` | 假期类型--获取新建或编辑的表单 | `GET` | `/api/kq/leavetypes/getLeaveTypesForm` | E9/KB900190601 |
| 350 | `考勤` | 假期类型--获取查询条件 | `GET` | `/api/kq/leavetypes/getSearchCondition` | E9/KB900190601 |
| 351 | `考勤` | 假期规则--删除 | `POST` | `/api/kq/leaverules/deleteLeaveRules` | E9/KB900190601 |
| 352 | `考勤` | 假期规则--判断是否权限 | `GET` | `/api/kq/leaverules/getHasRight` | E9/KB900190601 |
| 353 | `考勤` | 假期规则--新建假期规则 | `POST` | `/api/kq/leaverules/addLeaveRules` | E9/KB900190601 |
| 354 | `考勤` | 假期规则--编辑 | `POST` | `/api/kq/leaverules/editLeaveRules` | E9/KB900190601 |
| 355 | `考勤` | 假期规则--获取假期类型的请假时长的单位 | `GET` | `/api/kq/leaverules/getUnitName` | E9/KB900190601 |
| 356 | `考勤` | 假期规则--获取假期规则的列表 | `GET` | `/api/kq/leaverules/getSearchList` | E9/KB900190601 |
| 357 | `考勤` | 假期规则--获取右键菜单 | `GET` | `/api/kq/leaverules/getRightMenu` | E9/KB900190601 |
| 358 | `考勤` | 假期规则--获取新建或者编辑的表单 | `GET` | `/api/kq/leaverules/getLeaveRulesForm` | E9/KB900190601 |
| 359 | `考勤` | 假期规则--获取高级搜索的表单 | `GET` | `/api/kq/leaverules/getSearchCondition` | E9/KB900190601 |
| 360 | `考勤` | 公出出差规则--保存 | `POST` | `/api/kq/travelrules/saveTravelRules` | E9/KB900190601 |
| 361 | `考勤` | 公出出差规则--判断是否有权限 | `GET` | `/api/kq/travelrules/getHasRight` | E9/KB900190601 |
| 362 | `考勤` | 公出出差规则--获取右键菜单 | `GET` | `/api/kq/travelrules/getRightMenu` | E9/KB900190601 |
| 363 | `考勤` | 公出出差规则--获取表单 | `GET` | `/api/kq/travelrules/getTravelRulesForm` | E9/KB900190601 |
| 364 | `考勤` | 删除考勤流程设置 | `POST` | `/api/kq/wfSetting/statesShedule/delStateProcSet` | E9/KB900190601 |
| 365 | `考勤` | 加班规则--保存加班单位的设置 | `POST` | `/api/kq/overtimerules/saveOvertimeUnit` | E9/KB900190601 |
| 366 | `考勤` | 加班规则--删除 | `POST` | `/api/kq/overtimerules/deleteOvertimeRules` | E9/KB900190601 |
| 367 | `考勤` | 加班规则--判断是否有权限 | `GET` | `/api/kq/overtimerules/getHasRight` | E9/KB900190601 |
| 368 | `考勤` | 加班规则--新建加班规则 | `POST` | `/api/kq/overtimerules/addOvertimeRules` | E9/KB900190601 |
| 369 | `考勤` | 加班规则--编辑加班规则 | `POST` | `/api/kq/overtimerules/editOvertimeRules` | E9/KB900190601 |
| 370 | `考勤` | 加班规则--获取加班单位的表单 | `GET` | `/api/kq/overtimerules/getOvertimeUnitForm` | E9/KB900190601 |
| 371 | `考勤` | 加班规则--获取加班规则的列表 | `GET` | `/api/kq/overtimerules/getSearchList` | E9/KB900190601 |
| 372 | `考勤` | 加班规则--获取加班规则的右键菜单 | `GET` | `/api/kq/overtimerules/getRightMenu` | E9/KB900190601 |
| 373 | `考勤` | 加班规则--获取加班规则的新建或编辑的表单 | `GET` | `/api/kq/overtimerules/getOvertimeRulesForm` | E9/KB900190601 |
| 374 | `考勤` | 原始打卡记录--判断是否有权限 | `GET` | `/api/kq/originalpunchrp/getHasRight` | E9/KB900190601 |
| 375 | `考勤` | 原始打卡记录--获取右键菜单 | `GET` | `/api/kq/originalpunchrp/getRightMenu` | E9/KB900190601 |
| 376 | `考勤` | 原始打卡记录--获取报表数据 | `GET` | `/api/kq/originalpunchrp/getSearchList` | E9/KB900190601 |
| 377 | `考勤` | 原始打卡记录报表--获取高级搜索 | `GET` | `/api/kq/originalpunchrp/getSearchCondition` | E9/KB900190601 |
| 378 | `考勤` | 员工假期余额--判断是否具有权限 | `GET` | `/api/kq/balanceofleave/getHasRight` | E9/KB900190601 |
| 379 | `考勤` | 员工假期余额--导入员工假期余额 | `POST` | `/api/kq/balanceofleave/saveImport` | E9/KB900190601 |
| 380 | `考勤` | 员工假期余额--获取TAB页签 | `GET` | `/api/kq/balanceofleave/getTabs` | E9/KB900190601 |
| 381 | `考勤` | 员工假期余额--获取右键菜单 | `GET` | `/api/kq/balanceofleave/getRightMenu` | E9/KB900190601 |
| 382 | `考勤` | 员工假期余额--获取员工假期余额列表 | `GET` | `/api/kq/balanceofleave/getSearchList` | E9/KB900190601 |
| 383 | `考勤` | 员工假期余额--获取高级搜索的查询条件 | `GET` | `/api/kq/balanceofleave/getSearchCondition` | E9/KB900190601 |
| 384 | `考勤` | 员工假期余额-判断是否具有权限 | `GET` | `/api/kq/balanceofleaverp/getHasRight` | E9/KB900190601 |
| 385 | `考勤` | 员工假期余额-批处理 | `POST` | `/api/kq/balanceofleave/batchProcessing` | E9/KB900190601 |
| 386 | `考勤` | 员工假期余额-获取导入表单 | `GET` | `/api/kq/balanceofleave/getImportForm` | E9/KB900190601 |
| 387 | `考勤` | 员工假期余额报表--使用记录--获取分页数据 | `GET` | `/api/kq/balanceofleaverp/getDetailPageInfo` | E9/KB900190601 |
| 388 | `考勤` | 员工假期余额报表--使用记录--获取记录变更类型 | `GET` | `/api/kq/balanceofleaverp/getChangeType` | E9/KB900190601 |
| 389 | `考勤` | 员工假期余额报表--使用记录一共有多少页签 | `GET` | `/api/kq/balanceofleaverp/getTab` | E9/KB900190601 |
| 390 | `考勤` | 员工假期余额报表--获取使用记录 | `GET` | `/api/kq/balanceofleaverp/getUsageRecordDetail` | E9/KB900190601 |
| 391 | `考勤` | 员工假期余额报表--获取分页信息 | `GET` | `/api/kq/balanceofleaverp/getPageInfo` | E9/KB900190601 |
| 392 | `考勤` | 员工假期余额报表--获取右键菜单 | `GET` | `/api/kq/balanceofleaverp/getRightMenu` | E9/KB900190601 |
| 393 | `考勤` | 员工假期余额报表--获取报表数据 | `GET` | `/api/kq/balanceofleaverp/getSearchList` | E9/KB900190601 |
| 394 | `考勤` | 员工假期余额报表-获取高级搜索 | `GET` | `/api/kq/balanceofleaverp/getSearchCondition` | E9/KB900190601 |
| 395 | `考勤` | 我的考勤--考勤明细 | `POST` | `/api/kq/myattendance/getHrmKQReportDetialInfo` | E9/KB900190601 |
| 396 | `考勤` | 我的考勤--考勤统计 | `POST` | `/api/kq/myattendance/getHrmKQReportInfo` | E9/KB900190601 |
| 397 | `考勤` | 我的考勤--获取日历模式下的数据 | `POST` | `/api/kq/myattendance/getHrmKQMonthReportInfo` | E9/KB900190601 |
| 398 | `考勤` | 我的考勤--获取签到签退数据 | `POST` | `/api/kq/myattendance/getHrmKQSignInfo` | E9/KB900190601 |
| 399 | `考勤` | 空 | `POST` | `/api/kq/balanceofleaverp/exportExcel` | E9/KB900190601 |
| 400 | `考勤` | 考勤导入--获取导入历史记录 | `GET` | `/api/kq/importlog/getImportHistory` | E9/KB900190601 |
| 401 | `考勤` | 考勤导入--获取导入日志 | `GET` | `/api/kq/importlog/getImportColResultLog` | E9/KB900190601 |
| 402 | `考勤` | 考勤导入--获取导入结果 | `GET` | `/api/kq/importlog/getImportResult` | E9/KB900190601 |
| 403 | `考勤` | 考勤导入--获取导入进行明细 | `GET` | `/api/kq/importlog/getImportProcessLog` | E9/KB900190601 |
| 404 | `考勤` | 考勤报表右键菜单 | `GET` | `/api/kq/report/getRightMenu` | E9/KB900190601 |
| 405 | `考勤` | 考勤报表导出 | `POST` | `/api/kq/report/exportExcel` | E9/KB900190601 |
| 406 | `考勤` | 考勤报表异常明细 | `POST` | `/api/kq/report/detail/getKQReportDetail` | E9/KB900190601 |
| 407 | `考勤` | 考勤报表异常明细页签 | `POST` | `/api/kq/report/detail/getTabs` | E9/KB900190601 |
| 408 | `考勤` | 考勤报表明细 | `POST` | `/api/kq/report/detail/getDailyDetialInfo` | E9/KB900190601 |
| 409 | `考勤` | 考勤报表权限共享--保存 | `POST` | `/api/kq/reportshare/saveReportShare` | E9/KB900190601 |
| 410 | `考勤` | 考勤报表权限共享--删除 | `POST` | `/api/kq/reportshare/deleteReportShare` | E9/KB900190601 |
| 411 | `考勤` | 考勤报表权限共享--判断是否有权限 | `GET` | `/api/kq/reportshare/getHasRight` | E9/KB900190601 |
| 412 | `考勤` | 考勤报表权限共享--获取列表 | `GET` | `/api/kq/reportshare/getSearchList` | E9/KB900190601 |
| 413 | `考勤` | 考勤报表权限共享--获取右键菜单 | `GET` | `/api/kq/reportshare/getRightMenu` | E9/KB900190601 |
| 414 | `考勤` | 考勤报表权限共享--获取表单 | `GET` | `/api/kq/reportshare/getReportShareForm` | E9/KB900190601 |
| 415 | `考勤` | 考勤报表权限共享--获取高级搜索表单 | `GET` | `/api/kq/reportshare/getSearchCondition` | E9/KB900190601 |
| 416 | `考勤` | 考勤报表查询条件 | `POST` | `/api/kq/report/getSearchCondition` | E9/KB900190601 |
| 417 | `考勤` | 自动创建考勤流程设置表单 | `POST` | `/api/kq/wfSetting/statesShedule/saveStateProcSetCreateForm` | E9/KB900190601 |
| 418 | `考勤` | 节假日设置--保存导入的数据 | `POST` | `/api/kq/holidayset/saveImport` | E9/KB900190601 |
| 419 | `考勤` | 节假日设置--初始化节假日设置 | `POST` | `/api/kq/holidayset/initHolidaySet` | E9/KB900190601 |
| 420 | `考勤` | 节假日设置--删除节假日设置 | `POST` | `/api/kq/holidayset/deleteHolidaySet` | E9/KB900190601 |
| 421 | `考勤` | 节假日设置--判断是否有权限 | `GET` | `/api/kq/holidayset/getHasRight` | E9/KB900190601 |
| 422 | `考勤` | 节假日设置--同步节假日设置 | `POST` | `/api/kq/holidayset/syncHolidaySet` | E9/KB900190601 |
| 423 | `考勤` | 节假日设置--新建节假日设置 | `POST` | `/api/kq/holidayset/addHolidaySet` | E9/KB900190601 |
| 424 | `考勤` | 节假日设置--日历 | `GET` | `/api/kq/holidayset/getHolidaySetCalendar` | E9/KB900190601 |
| 425 | `考勤` | 节假日设置--统计节假日设置数据 | `GET` | `/api/kq/holidayset/getHolidayCount` | E9/KB900190601 |
| 426 | `考勤` | 节假日设置--编辑节假日设置 | `POST` | `/api/kq/holidayset/editHolidaySet` | E9/KB900190601 |
| 427 | `考勤` | 节假日设置--获取右键菜单 | `GET` | `/api/kq/holidayset/getRightMenu` | E9/KB900190601 |
| 428 | `考勤` | 节假日设置--获取同步的表单 | `GET` | `/api/kq/holidayset/getSyncForm` | E9/KB900190601 |
| 429 | `考勤` | 节假日设置--获取导入的表单 | `GET` | `/api/kq/holidayset/getImportForm` | E9/KB900190601 |
| 430 | `考勤` | 节假日设置--获取新建或者编辑的表单 | `GET` | `/api/kq/holidayset/getHolidaySetForm` | E9/KB900190601 |
| 431 | `考勤` | 节假日设置--获取节假日设置的列表 | `GET` | `/api/kq/holidayset/getSearchList` | E9/KB900190601 |
| 432 | `考勤` | 获取考勤报表 | `POST` | `/api/kq/report/getKQReport` | E9/KB900190601 |
| 433 | `考勤` | 获取考勤流程设置 动作设置 | `POST` | `/api/kq/wfSetting/statesShedule/getStateProcSetFlowWfSet` | E9/KB900190601 |
| 434 | `考勤` | 获取考勤流程设置 字段对应信息 | `POST` | `/api/kq/wfSetting/statesShedule/getStateProcSetFlowWfFields` | E9/KB900190601 |
| 435 | `考勤` | 获取考勤流程设置 流程概览信息 | `POST` | `/api/kq/wfSetting/statesShedule/getStateProcSetFlowForm` | E9/KB900190601 |
| 436 | `考勤` | 获取考勤流程设置的 tab页签数据 | `POST` | `/api/kq/wfSetting/statesShedule/getStateProcSetTabInfo` | E9/KB900190601 |
| 437 | `考勤` | 获取考勤流程设置的查询列表 | `POST` | `/api/kq/wfSetting/statesShedule/getStateProcSetListSearchList` | E9/KB900190601 |
| 438 | `考勤` | 获取考勤流程设置的查询条件 | `GET` | `/api/kq/wfSetting/statesShedule/getStateProcSetListSearchCondition` | E9/KB900190601 |
| 439 | `考勤` | 调休--判断是否有权限 | `GET` | `/api/kq/tiaoxiu/getHasRight` | E9/KB900190601 |
| 440 | `考勤` | 重新计算考勤报表 | `POST` | `/api/kq/report/format` | E9/KB900190601 |
| 441 | `表单建模` | 保存快捷搜索信息 | `POST` | `/api/cube/list/saveQuickSearchInfo` | E9/KB900190601 |
| 442 | `表单建模` | 保存查询模板默认值 | `GET` | `/api/cube/search/setDefault` | E9/KB900190601 |
| 443 | `表单建模` | 初始化列宽接口 | `GET` | `/api/cube/search/cleanCol` | E9/KB900190601 |
| 444 | `表单建模` | 删除数据接口 | `GET` | `/api/cube/expand/deleteData` | E9/KB900190601 |
| 445 | `表单建模` | 判断数据是否改变接口 | `POST` | `/api/cube/search/checkDataChange` | E9/KB900190601 |
| 446 | `表单建模` | 卡片数据保存接口(常用) | `POST` | `/api/cube/new/card/doSubmit` | E9/KB900190601 |
| 447 | `表单建模` | 权限校验接口 | `GET` | `/api/cube/new/card/checkCardRight` | E9/KB900190601 |
| 448 | `表单建模` | 查询快捷搜索信息获取接口 | `GET` | `/api/cube/list/getQuickSearchInfo` | E9/KB900190601 |
| 449 | `表单建模` | 获取主表字段信息 | `GET` | `/api/cube/new/card/mainFields` | E9/KB900190601 |
| 450 | `表单建模` | 获取二维码信息 | `GET` | `/api/cube/new/card/getQRCode` | E9/KB900190601 |
| 451 | `表单建模` | 获取卡片iframe设置 | `GET` | `/api/cube/new/card/getIframe` | E9/KB900190601 |
| 452 | `表单建模` | 获取卡片布局基本信息 | `GET` | `/api/cube/new/card/layoutBase` | E9/KB900190601 |
| 453 | `表单建模` | 获取卡片明细表数据 | `GET` | `/api/cube/new/card/getDetailFields` | E9/KB900190601 |
| 454 | `表单建模` | 获取卡片条形码信息 | `GET` | `/api/cube/new/card/getBarCode` | E9/KB900190601 |
| 455 | `表单建模` | 获取字段联动信息 | `GET` | `/api/cube/new/card/getInputEntry` | E9/KB900190601 |
| 456 | `表单建模` | 获取属性联动信息 | `GET` | `/api/cube/new/card/getFieldAttrLinkPage` | E9/KB900190601 |
| 457 | `表单建模` | 获取查询列表基本信息 | `GET` | `/api/cube/search/init` | E9/KB900190601 |
| 458 | `表单建模` | 获取查询权限信息 | `GET` | `/api/cube/list/getRightInfo` | E9/KB900190601 |
| 459 | `表单建模` | 获取查询相关信息 | `GET` | `/api/cube/search/getList` | E9/KB900190601 |
| 460 | `邮件模块` | 获取邮件总数、未读数 | `GET` | `/api/email/base/refreshCount` | E9/KB900190601 |
| 461 | `邮件模块` | 邮件列表 | `GET` | `/api/email/list/allList` | E9/KB900190601 |
| 462 | `邮件模块` | 邮件监控 监控日志列表 | `GET` | `/api/email/monitor/monitorLogList` | E9/KB900190601 |
| 463 | `门户管理` | 【文档中心】元素创建文档按钮权限判断接口 | `POST` | `/api/portal/elementsetdoc/docsetright` | E9/KB900190601 |
| 464 | `门户管理` | 前端门户页面获取页面以及元素数据列表接口 | `POST` | `/api/portal/homepage/hpdata` | E9/KB900190601 |
| 465 | `门户管理` | 获取【图表】元素sql模板库设置页面信息 | `POST` | `/api/portal/sqltemplate/datas` | E9/KB900190601 |
| 466 | `门户管理` | 获取主题配置 | `GET` | `/api/portal/themeConfig/getThemeConfig` | E9/KB900190601 |
| 467 | `门户管理` | 获取任务元素设置信息和数据方法 | `POST` | `/api/portal/element/task` | E9/KB900190601 |
| 468 | `门户管理` | 获取任务元素设置信息和数据方法 | `POST` | `/api/portal/element/tasktab` | E9/KB900190601 |
| 469 | `门户管理` | 获取任务计划元素设置信息和数据方法 | `POST` | `/api/portal/element/worktask` | E9/KB900190601 |
| 470 | `门户管理` | 获取元素tab数据 | `GET` | `/api/mobile/portal/elements/tab` | E9/KB900190601 |
| 471 | `门户管理` | 获取元素设置页面数据接口 | `POST` | `/api/portal/setting/esetting` | E9/KB900190601 |
| 472 | `门户管理` | 获取前端菜单信息 | `GET` | `/api/portal/menu/getFrontEndMenu` | E9/KB900190601 |
| 473 | `门户管理` | 获取后台菜单信息接口 | `GET` | `/api/portal/menu/getBackEndMenu` | E9/KB900190601 |
| 474 | `门户管理` | 获取多新闻中心元素设置信息和数据方法 | `POST` | `/api/portal/element/morenews` | E9/KB900190601 |
| 475 | `门户管理` | 获取多新闻中心元素设置信息和数据方法 | `POST` | `/api/portal/element/coremail` | E9/KB900190601 |
| 476 | `门户管理` | 获取工具栏更多菜单 | `GET` | `/api/portal/toolbarMore/getToolbarMoreMenu` | E9/KB900190601 |
| 477 | `门户管理` | 获取工具栏菜单 | `GET` | `/api/portal/toolbar/getToolbarMenu` | E9/KB900190601 |
| 478 | `门户管理` | 获取当前账号和多账号列表 | `GET` | `/api/portal/account/getAccount` | E9/KB900190601 |
| 479 | `门户管理` | 获取快捷搜索类型 | `GET` | `/api/portal/quickSearch/getQuickSearchTypes` | E9/KB900190601 |
| 480 | `门户管理` | 获取快捷搜索类型 | `GET` | `/api/portal/quickSearchMaintenance/getQuickSearchTypes` | E9/KB900190601 |
| 481 | `门户管理` | 获取我的主题 | `GET` | `/api/portal/themeCenter/getMyTheme` | E9/KB900190601 |
| 482 | `门户管理` | 获取用户常用菜单数据 | `POST` | `/api/portal/frequsemenu/getdata` | E9/KB900190601 |
| 483 | `门户管理` | 获取登录前门户信息 | `POST` | `/api/portal/login/logininfo` | E9/KB900190601 |
| 484 | `门户管理` | 获取系统版本 | `GET` | `/api/portal/systemInfo/getVersion` | E9/KB900190601 |
| 485 | `门户管理` | 获取账号菜单 | `GET` | `/api/portal/account/getAccountMenu` | E9/KB900190601 |
| 486 | `门户管理` | 获取通告栏元素设置信息和数据方法 | `POST` | `/api/portal/element/notice` | E9/KB900190601 |
| 487 | `门户管理` | 获取门户【RSS】元素列表信息 | `POST` | `/api/portal/element/rsstab` | E9/KB900190601 |
| 488 | `门户管理` | 获取门户【RSS】元素列表信息 | `POST` | `/api/portal/element/rss` | E9/KB900190601 |
| 489 | `门户管理` | 获取门户【个人数据】元素列表信息 | `POST` | `/api/portal/element/datacenter` | E9/KB900190601 |
| 490 | `门户管理` | 获取门户【人员看板元素】信息 | `POST` | `/api/portal/element/hdpanel/getListData` | E9/KB900190601 |
| 491 | `门户管理` | 获取门户【人员看板元素】设置信息 | `POST` | `/api/portal/element/hdpanel/getSettingDate` | E9/KB900190601 |
| 492 | `门户管理` | 获取门户【会议日历】元素信息 | `POST` | `/api/portal/element/meetingCalendar` | E9/KB900190601 |
| 493 | `门户管理` | 获取门户【便签元素】元素列表信息 | `POST` | `/api/portal/element/scratchpad` | E9/KB900190601 |
| 494 | `门户管理` | 获取门户【公司新闻】元素信息 | `POST` | `/api/portal/element/loginnewstab` | E9/KB900190601 |
| 495 | `门户管理` | 获取门户【公司新闻】元素信息 | `POST` | `/api/portal/element/loginnews` | E9/KB900190601 |
| 496 | `门户管理` | 获取门户【公告元素】元素信息 | `POST` | `/api/portal/element/newnotice` | E9/KB900190601 |
| 497 | `门户管理` | 获取门户【图片元素】列表信息 | `POST` | `/api/portal/element/picture` | E9/KB900190601 |
| 498 | `门户管理` | 获取门户【图表元素】元素列表信息 | `POST` | `/api/portal/element/reportformtab` | E9/KB900190601 |
| 499 | `门户管理` | 获取门户【图表元素】元素列表信息 | `POST` | `/api/portal/element/reportform` | E9/KB900190601 |
| 500 | `门户管理` | 获取门户【外部数据元素】列表信息 | `POST` | `/api/portal/element/outdatatab` | E9/KB900190601 |
| 501 | `门户管理` | 获取门户【外部数据元素】列表信息 | `POST` | `/api/portal/element/outdata` | E9/KB900190601 |
| 502 | `门户管理` | 获取门户【多图元素】信息 | `POST` | `/api/portal/element/imgslide` | E9/KB900190601 |
| 503 | `门户管理` | 获取门户【多岗位办理事项】元素信息 | `POST` | `/api/portal/element/jobsinfo` | E9/KB900190601 |
| 504 | `门户管理` | 获取门户【天气元素】元素列表信息 | `POST` | `/api/portal/element/weather` | E9/KB900190601 |
| 505 | `门户管理` | 获取门户【幻灯片】元素列表信息 | `POST` | `/api/portal/element/slide` | E9/KB900190601 |
| 506 | `门户管理` | 获取门户【建模查询中心】列表信息 | `POST` | `/api/portal/element/formmodecustomsearch` | E9/KB900190601 |
| 507 | `门户管理` | 获取门户【建模查询中心】列表信息 | `POST` | `/api/portal/element/formmodecustomsearchtab` | E9/KB900190601 |
| 508 | `门户管理` | 获取门户【当日计划】元素列表信息 | `POST` | `/api/portal/element/dayplan` | E9/KB900190601 |
| 509 | `门户管理` | 获取门户【微博动态】元素列表信息 | `POST` | `/api/portal/element/blogstatus` | E9/KB900190601 |
| 510 | `门户管理` | 获取门户【快捷入口】元素信息 | `POST` | `/api/portal/element/quickentry` | E9 |
| 511 | `门户管理` | 获取门户【我的协作】元素列表信息 | `POST` | `/api/portal/element/cooperation` | E9/KB900190601 |
| 512 | `门户管理` | 获取门户【我的协作】元素列表信息 | `POST` | `/api/portal/element/cooperationtab` | E9/KB900190601 |
| 513 | `门户管理` | 获取门户【我的协作】元素列表信息 | `POST` | `/api/portal/element/cooperation` | E9/KB900190601 |
| 514 | `门户管理` | 获取门户【我的邮件】元素列表信息 | `POST` | `/api/portal/element/mail` | E9/KB900190601 |
| 515 | `门户管理` | 获取门户【我的项目】元素列表信息 | `POST` | `/api/portal/element/projects` | E9/KB900190601 |
| 516 | `门户管理` | 获取门户【我的项目】元素列表信息 | `POST` | `/api/portal/element/projectstab` | E9/KB900190601 |
| 517 | `门户管理` | 获取门户【收藏元素】元素列表信息 | `POST` | `/api/portal/element/favourite` | E9/KB900190601 |
| 518 | `门户管理` | 获取门户【文档中心】元素数据 | `POST` | `/api/portal/element/newstab` | E9/KB900190601 |
| 519 | `门户管理` | 获取门户【文档中心】元素数据 | `POST` | `/api/portal/element/news` | E9/KB900190601 |
| 520 | `门户管理` | 获取门户【文档内容】元素列表信息 | `POST` | `/api/portal/element/doccontent` | E9/KB900190601 |
| 521 | `门户管理` | 获取门户【新建流程】元素信息 | `POST` | `/api/portal/element/addwftab` | E9/KB900190601 |
| 522 | `门户管理` | 获取门户【新建流程】元素信息 | `POST` | `/api/portal/element/addwf` | E9/KB900190601 |
| 523 | `门户管理` | 获取门户【日历日程】元素列表信息 | `POST` | `/api/portal/element/mycalendar` | E9 |
| 524 | `门户管理` | 获取门户【最新会议】元素列表信息 | `POST` | `/api/portal/element/newmeeting` | E9/KB900190601 |
| 525 | `门户管理` | 获取门户【最新客户/未读文档】元素列表信息 | `POST` | `/api/portal/element/view` | E9/KB900190601 |
| 526 | `门户管理` | 获取门户【期刊中心】元素列表信息 | `POST` | `/api/portal/element/magazine` | E9/KB900190601 |
| 527 | `门户管理` | 获取门户【流程中心】元素数据 | `POST` | `/api/portal/element/workflowtab` | E9/KB900190601 |
| 528 | `门户管理` | 获取门户【流程中心】元素数据 | `POST` | `/api/portal/element/workflow` | E9/KB900190601 |
| 529 | `门户管理` | 获取门户【自定义菜单】元素列表信息 | `POST` | `/api/portal/element/custommenu` | E9/KB900190601 |
| 530 | `门户管理` | 获取门户【自定义页面】元素列表信息 | `POST` | `/api/portal/element/custompagetab` | E9/KB900190601 |
| 531 | `门户管理` | 获取门户【自定义页面】元素列表信息 | `POST` | `/api/portal/element/custompage` | E9/KB900190601 |
| 532 | `门户管理` | 获取门户【视频元素】元素列表信息 | `POST` | `/api/portal/element/video` | E9/KB900190601 |
| 533 | `门户管理` | 获取门户【通讯录】元素信息列表 | `POST` | `/api/portal/element/contacts` | E9/KB900190601 |
| 534 | `门户管理` | 获取门户【通讯录】元素信息列表 | `POST` | `/api/portal/element/contactstab` | E9/KB900190601 |
| 535 | `门户管理` | 获取门户【集成登录】元素信息 | `POST` | `/api/portal/element/outtersys` | E9/KB900190601 |
| 536 | `门户管理` | 获取门户【音频元素】元素列表信息 | `POST` | `/api/portal/element/audio` | E9/KB900190601 |
| 537 | `门户管理` | 获取门户菜单 | `GET` | `/api/portal/menu/getPortalMenu` | E9/KB900190601 |
| 538 | `门户管理` | 设置我的主题字体大小 | `POST` | `/api/portal/themeCenter/setMyFontSize` | E9/KB900190601 |