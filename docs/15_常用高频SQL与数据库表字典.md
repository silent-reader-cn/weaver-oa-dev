# 泛微OA (E-Cology) 核心数据库表结构与高频业务 SQL 字典

在泛微 OA 二次开发、报表统计及数据对接中，直接查询数据库是最常见的高性能方案。本文档整理了 Ecology 核心系统表结构及最常用的高频 SQL 模版。

---

## 1. 核心系统表全景字典

### 1.1 工作流引擎核心表
| 表名 | 中文说明 | 关键字段 | 关联关系 |
| :--- | :--- | :--- | :--- |
| `workflow_base` | 流程定义主表 | `id`, `workflowname`, `formid`, `isbill` | `formid` 对应单据表定义 |
| `workflow_requestbase` | 流程实例主表 | `requestid`, `workflowid`, `requestname`, `status`, `creater`, `createdate`, `currentnodetype` | 流程总入口，`currentnodetype` 0-创建,1-审批,2-实现,3-归档 |
| `workflow_currentoperator` | 流程待办/操作人表 | `requestid`, `userid`, `isremark`, `isprocessed`, `nodeid`, `viewtype` | `isremark` 0-待办, 2-已办, 4-抄送 |
| `workflow_requestLog` | 流程流转签字意见日志表 | `requestid`, `nodeid`, `operator`, `operatedate`, `operatetime`, `remark`, `logtype` | `logtype` s-提交, r-退回, j-转发, e-强制归档 |
| `workflow_bill` | 单据表定义表 | `id`, `tablename`, `namelabel` | `tablename` 即业务表表名（如 `formtable_main_10`） |
| `workflow_billfield` | 单据字段定义表 | `id`, `billid`, `fieldname`, `fieldlabel`, `fieldhtmltype`, `type` | 字段名与中文标签定义 |

### 1.2 人力资源与组织架构表
| 表名 | 中文说明 | 关键字段 | 说明 |
| :--- | :--- | :--- | :--- |
| `HrmResource` | 员工主表 | `id`, `workcode`, `lastname`, `loginid`, `departmentid`, `subcompanyid1`, `mobile`, `email`, `status`, `managerid` | `status`: 0-试用, 1-正式, 2-临时, 5-离职, 7-无效 |
| `HrmDepartment` | 部门表 | `id`, `departmentname`, `departmentcode`, `supdepid`, `subcompanyid1`, `canceled` | `supdepid` 上级部门, `canceled` 0-正常, 1-封存 |
| `HrmSubCompany` | 分部/公司表 | `id`, `subcompanyname`, `subcompanycode`, `supsubcomid`, `canceled` | 多分部/子公司架构 |
| `HrmJobTitles` | 岗位表 | `id`, `jobtitlename`, `jobtitlecode`, `jobactivityid` | 员工职务岗位 |

### 1.3 知识文档与附件表
| 表名 | 中文说明 | 关键字段 | 说明 |
| :--- | :--- | :--- | :--- |
| `DocDetail` | 文档主信息表 | `id`, `docsubject`, `doccontent`, `seccategory`, `doccreaterid`, `doccreatedate`, `docstatus` | 知识库文档 |
| `DocSecCategory` | 文档二级子目录表 | `id`, `categoryname`, `subcategoryid` | 存放文档的实际目录分类 |
| `DocImageFile` | 文档与附件关联表 | `docid`, `imagefileid`, `imagefilename` | 建立文档与物理附件的多对多映射 |
| `ImageFile` | 物理附件元数据表 | `imagefileid`, `imagefilename`, `filerealpath`, `filesize`, `imagefile` | 物理文件存储路径或 Blob |

---

## 2. 高频实用业务 SQL 模版 (直接可用)

### 2.1 查询指定用户的当前待办流程列表 (带分页与未读状态)
```sql
SELECT 
    r.requestid,
    r.requestname,
    r.workflowid,
    w.workflowname,
    r.creater,
    u.lastname AS creater_name,
    r.createdate,
    r.createtime,
    c.receivedate,
    c.receivetime,
    c.viewtype -- 0:未读, 1:已读
FROM workflow_currentoperator c
INNER JOIN workflow_requestbase r ON c.requestid = r.requestid
INNER JOIN workflow_base w ON r.workflowid = w.id
LEFT JOIN HrmResource u ON r.creater = u.id
WHERE c.userid = 120 -- 替换为目标用户ID
  AND c.isremark IN ('0', '1', '8', '9', '7') -- 0:待办, 8:抄送待阅
  AND r.currentnodetype <> '3'
ORDER BY c.receivedate DESC, c.receivetime DESC;
```

### 2.2 查询指定流程实例的所有流转签字意见 (审批历史全记录)
```sql
SELECT 
    l.logid,
    l.requestid,
    l.nodeid,
    n.nodename,
    l.operator,
    h.lastname AS operator_name,
    l.operatedate,
    l.operatetime,
    l.logtype,
    CASE l.logtype 
        WHEN 's' THEN '提交'
        WHEN 'r' THEN '退回'
        WHEN 'j' THEN '转办/征询'
        WHEN 'e' THEN '强制归档'
        WHEN 'i' THEN '干预'
        ELSE l.logtype 
    END AS action_name,
    l.remark AS sign_opinion -- 签字意见
FROM workflow_requestLog l
LEFT JOIN workflow_nodebase n ON l.nodeid = n.id
LEFT JOIN HrmResource h ON l.operator = h.id
WHERE l.requestid = 398210 -- 替换为流程 RequestID
ORDER BY l.operatedate ASC, l.operatetime ASC, l.logid ASC;
```

### 2.3 递归查询某部门下的所有子部门 (CTE 通用表达式)
```sql
-- 支持 SQL Server 2008+ / MySQL 8.0+ / Oracle / PostgreSQL
WITH RECURSIVE DeptTree AS (
    SELECT id, departmentname, departmentcode, supdepid, subcompanyid1, 1 as level
    FROM HrmDepartment
    WHERE id = 5 -- 根部门ID
    
    UNION ALL
    
    SELECT d.id, d.departmentname, d.departmentcode, d.supdepid, d.subcompanyid1, t.level + 1
    FROM HrmDepartment d
    INNER JOIN DeptTree t ON d.supdepid = t.id
    WHERE d.canceled = '0'
)
SELECT * FROM DeptTree ORDER BY level, id;
```

### 2.4 查询流程主表与明细表业务数据 (动态单据表)
```sql
-- 1. 先通过 workflowid 查找对应的单据主表名
SELECT b.id AS workflowid, b.workflowname, bill.tablename
FROM workflow_base b
INNER JOIN workflow_bill bill ON b.formid = bill.id
WHERE b.id = 105;

-- 2. 关联主表与明细表1查询业务数据
SELECT 
    m.requestid,
    m.sqr,          -- 申请人ID
    u.lastname AS sqr_name,
    m.sqje,         -- 申请金额
    d.wpmc,         -- 明细行物品名称
    d.sl,           -- 明细行数量
    d.dj,           -- 明细行单价
    d.je            -- 明细行金额
FROM formtable_main_105 m
INNER JOIN formtable_main_105_dt1 d ON m.id = d.mainid
LEFT JOIN HrmResource u ON m.sqr = u.id
WHERE m.requestid = 398210;
```
