# BOREALIS 实验练习 1：多数据源整合与 Power BI 操作手册

> **适用对象：** Power BI 中文界面零基础用户  
> **作业名称：** LAB EXERCISE 1 — COMBINING DATA FROM MULTIPLE SOURCE
> USING BI TOOLS  
> **本手册范围：** Phase 1 业务理解、Phase 2 数据导入与 Power Query
> ETL；另附本次操作中已经完成的 Phase 3 星型模型，作为扩展内容记录。  
> **重要原则：** 以老师提供的原始 Excel
> 和实验指导书为依据，不人为补造或删除业务数据。

------------------------------------------------------------------------

## 目录

1.  [先弄清楚本次作业要做什么](#1-先弄清楚本次作业要做什么)
2.  [准备文件和软件](#2-准备文件和软件)
3.  [Phase 1：理解业务背景、问题、KPI
    和利益相关者](#3-phase-1理解业务背景问题kpi-和利益相关者)
4.  [Phase 2：导入三个 Excel 数据源](#4-phase-2导入三个-excel-数据源)
5.  [Power Query：处理
    Accounting_Transactions](#5-power-query处理-accounting_transactions)
6.  [Power Query：处理 Projects](#6-power-query处理-projects)
7.  [Power Query：处理
    Expense_Regimes](#7-power-query处理-expense_regimes)
8.  [检查数据质量并应用更改](#8-检查数据质量并应用更改)
9.  [本次数据核验结果与指导书日期差异](#9-本次数据核验结果与指导书日期差异)
10. [已经额外完成的 Phase
    3：星型模型](#10-已经额外完成的-phase-3星型模型)
11. [保存 PBIX 文件并提交](#11-保存-pbix-文件并提交)
12. [提交前最终检查清单](#12-提交前最终检查清单)
13. [常见问题处理](#13-常见问题处理)
14. [参考文件与依据](#14-参考文件与依据)

------------------------------------------------------------------------

# 1. 先弄清楚本次作业要做什么

## 1.1 作业页面的要求

本次作业页面要求：

1.  阅读 BOREALIS 实验指导书，通读 Phase 1。
2.  查看 `BOREALIS_Complete_Phase_Datasets_Master.xlsx` 中 Phase 1
    相关标签页。
3.  理解核心业务问题、目标
    KPI、分析类型、利益相关者、主要业务决策和报告频率。
4.  参考实验指导书中的 **LAB MODULE 2: PHASE 2: DATA INGESTION & POWER
    QUERY ETL PIPELINE**。
5.  完成实验练习。
6.  将 Power BI 文件按指定格式提交：`LAB1_你的姓名.Pbix`。

因此，本次作业明确涉及的核心内容是：

- **Phase 1：业务需求理解**
- **Phase 2：多数据源导入、Power Query 数据清洗和 ETL**

实验指导书后面还包含 Phase 3 至 Phase
6，但作业页面没有明确要求本次必须完成 Phase 4 的 DAX 指标、Phase 5
的仪表板或 Phase 6
的云端发布。不要因为指导书中出现这些内容，就误以为本次必须全部完成。

## 1.2 本次实际完成范围

| 阶段    | 内容                                         | 本次处理                   |
|---------|----------------------------------------------|----------------------------|
| Phase 1 | 业务背景、业务问题、KPI、利益相关者          | 需要理解并整理             |
| Phase 2 | 导入三个 Excel、Power Query 清洗、筛选、加载 | 核心必做                   |
| Phase 3 | 星型模型、日期维度表、三条关系               | 本次已经额外完成，保留即可 |
| Phase 4 | DAX Measures、计算列                         | 本次不必继续               |
| Phase 5 | 三页可视化仪表板和异常分析                   | 本次不必继续               |
| Phase 6 | Power BI Service 发布、RLS、安全与汇报       | 本次不必继续               |

**注意：** 如果老师课堂上另有口头要求，以老师最新的明确要求为准。

------------------------------------------------------------------------

# 2. 准备文件和软件

## 2.1 需要准备的三个原始 Excel 文件

本次 Power Query 需要处理三个独立的 Excel 文件：

| 文件名                          | 工作表名称            | 数据表作用             |
|---------------------------------|-----------------------|------------------------|
| `Data_Set_Accounting.xlsx`      | `Accounting_Vouchers` | 交易事实数据           |
| `Data_Set_Projects.xlsx`        | `Project_Tombstone`   | 项目名称、负责人和预算 |
| `Data_Set_Expense_Regimes.xlsx` | `Expense_Regimes`     | 支出类别和审批限额     |

另外，还需要查看：

`Borealis_Complete_Phase_Datasets_Master.xlsx`

该文件用于阅读 Phase 1
业务问题、利益相关者和其他阶段的参考数据，不要把它误当成必须导入 Power
BI 的三张业务源表。

## 2.2 原始数据的行数

先理解老师表格中的行数统计口径：

| 数据源              | Excel 实际总行数 | 表头 | 业务数据行 |
|---------------------|-----------------:|-----:|-----------:|
| Accounting_Vouchers |              175 |    1 |        174 |
| Project_Tombstone   |               17 |    1 |         16 |
| Expense_Regimes     |                5 |    1 |          4 |

老师的 Phase 2 指导书中，Accounting 的 175 rows 和 Expense_Regimes 的 5
rows 是包含表头的 Excel 行数；Projects 的 16 rows 对应 16
条项目业务记录。

不要把“Excel 总行数”“表头行数”和“业务数据行数”混为一谈。

------------------------------------------------------------------------

# 3. Phase 1：理解业务背景、问题、KPI 和利益相关者

这一部分主要是阅读和理解，不需要在 Power BI 中编写
DAX，也不需要先制作图表。

## 3.1 业务背景

案例企业名称：**Borealis Terraformers LLC**。

企业管理多个高资本投入的工程、研究和地球改造项目。管理层过去依赖分散的静态
Excel 表格，存在以下问题：

- 不容易掌握各项目的资金支出情况。
- 不容易判断各类支出是否超出预算。
- 难以持续监控资本支出速度。
- 难以发现可能违反审批政策的交易。
- 不同数据源分散，难以形成统一的分析视图。

本次 BI 项目的目标是把多个 Excel
数据源整合起来，建立可分析、可筛选、可追踪的 Power BI 数据基础。

## 3.2 四种支出类别

案例中的四种支出类别如下：

| 代码 | 英文名称                          | 中文理解       |
|------|-----------------------------------|----------------|
| MC   | Major Capital                     | 重大资本支出   |
| MIC  | Minor Capital                     | 小额资本支出   |
| O&M  | Operations and Management         | 运营与管理支出 |
| SA   | Salary and Personnel Compensation | 工资及人员补偿 |

后续分析时，`Journal Voucher Type Code` 就是区分这四种支出类别的字段。

## 3.3 核心业务问题

根据实验指导书和 Master Excel 中的 `Phase1_KPI_Questions`
标签页，核心问题可归纳为以下几类。

### A. 描述性分析（Descriptive）

需要回答：

- 企业总支出是多少？
- 各项目分别支出了多少？
- 四种支出类别分别占多少？
- 不同负责人管理的项目支出情况如何？
- 实际支出与预算之间有什么差异？

相关 KPI：

- Total Spend：总支出。
- Major Minor Ratio：重大资本支出与小额资本支出的比例。
- 各支出类别金额。
- 各项目支出金额。

指导书中提到的企业总支出基准为约 **173.78M
美元**。这是后续分析阶段的参考基准，不是本次 Power Query
清洗时需要手动填写的数值。

### B. 合规分析（Compliance）

需要回答：

- 哪些交易达到或超过 100,000 美元？
- 哪些交易需要执行委员会正式审批？
- 哪些项目产生了这些高金额交易？
- 哪些交易需要进一步审计核查？

政策背景：

- 单笔凭证金额 **大于或等于 100,000 美元**，需要正式的执行委员会审批。
- Master Excel 中还列有 MIC 采购限额等业务规则。不要把 100,000
  美元的执行委员会审批阈值与 MIC 的采购限额混为一谈。

### C. 诊断与法证分析（Diagnostic / Forensic）

需要回答：

- 是否有人将一笔大额采购拆分成多笔小额交易？
- 某些负责人是否频繁在每月固定日期提交金额相近的凭证？
- 是否存在金额很高、但被归类为 MIC 的交易？
- 是否存在可能的支出类别误分类？

这些属于后续分析阶段的调查问题。本次 Phase 2
主要负责把数据清洗好，为后续分析准备可靠的数据基础。

### D. 自动化与数据整合（Automation）

需要回答：

- 如何把会计交易、项目预算、支出类别三个来源整合起来？
- 如何统一列名和数据类型？
- 如何建立可靠、可重复执行的 Power Query ETL 流程？
- 如何为后续数据模型提供一致的数据结构？

## 3.4 目标 KPI 与分析类型

| 分析类型    | 业务问题                               | 目标 KPI / 分析指标      | 预期分析形式              |
|-------------|----------------------------------------|--------------------------|---------------------------|
| 描述性      | 企业总支出及各项目、各类别支出是多少？ | Total Spend              | KPI 卡片、支出类别环形图  |
| 描述性      | MC 与 MIC 支出比例如何变化？           | Major Minor Ratio        | 月度趋势折线图            |
| 合规性      | 哪些凭证金额达到 100,000 美元？        | Check amount             | 交易明细矩阵、异常标记    |
| 诊断/法证   | 是否存在低于采购限额的重复拆分交易？   | Voucher Frequency by Day | 按负责人拆分的小倍数图    |
| 诊断/法证   | 是否有资本支出被错误归为 MIC？         | Regime Outlier Flag      | 散点图、异常明细表        |
| 自动化/治理 | 如何整合不同来源的数据？               | Enterprise Star Schema   | Power Query ETL、关系模型 |

本次只需理解这些 KPI 的业务含义。**不要为了完成 Phase 1 而提前创建 Phase
4 的 DAX 公式。**

## 3.5 利益相关者（Stakeholders）

Master Excel 的 `Phase1_Stakeholders` 标签页列出了四类主要利益相关者。

| 利益相关者                                | 主要职责           | 报告频率      | 主要决策                             |
|-------------------------------------------|--------------------|---------------|--------------------------------------|
| CFO（首席财务官）                         | 企业整体财务管理   | 每月 / 每季度 | 资本分配、预算差异、项目组合财务状况 |
| Head of Internal Audit（内部审计负责人）  | 合规与审计         | 持续 / 按需   | 调查超限交易、发现异常、预防违规     |
| Project Directors（项目负责人）           | 项目运营管理       | 每周 / 每两周 | 项目资源配置、支出速度、采购审批     |
| BI Analytics Advisory Team（BI 分析团队） | 数据与 BI 系统实施 | 项目实施期间  | ETL 自动化、数据模型、DAX 准确性     |

### 各利益相关者需要什么？

- **CFO：**
  希望看到企业整体支出、预算差异、各支出类别占比和各项目支出情况。
- **内部审计负责人：**
  希望快速定位达到审批阈值的交易，并能查看凭证编号和交易明细。
- **项目负责人：**
  希望按项目、日期和支出类别筛选数据，监控日常支出与预算。
- **BI 分析团队：** 负责把多个数据源整合成可靠的数据模型。

### Phase 1 阅读检查

完成阅读后，应当能够回答：

1.  Borealis 企业为什么需要 BI 系统？
2.  四种支出类别分别是什么？
3.  100,000 美元审批阈值意味着什么？
4.  CFO 最关心哪些 KPI？
5.  内部审计负责人最关心哪些异常？
6.  项目负责人通常以什么频率查看报告？
7.  为什么需要 Power Query ETL？

------------------------------------------------------------------------

# 4. Phase 2：导入三个 Excel 数据源

## 4.1 打开 Power BI Desktop

1.  打开 Power BI Desktop。
2.  新建一个空白报表。
3.  确认顶部功能区可以看到「主页」「插入」「建模」等选项卡。

## 4.2 导入第一个文件：Accounting

1.  点击顶部「主页」。
2.  点击「获取数据」。
3.  选择「Excel 工作簿」。
4.  找到 `Data_Set_Accounting.xlsx`。
5.  点击「打开」。
6.  出现「导航器」窗口后，选择工作表 `Accounting_Vouchers`。
7.  点击「转换数据」。

**不要直接点击「加载」。** 本次需要先进入 Power Query
编辑器进行数据清洗。

## 4.3 导入第二个文件：Projects

1.  在 Power Query 编辑器中，点击「主页」。
2.  点击「新建源」或「获取数据」。
3.  选择「Excel 工作簿」。
4.  找到 `Data_Set_Projects.xlsx`。
5.  点击「打开」。
6.  在导航器中选择 `Project_Tombstone`。
7.  点击「转换数据」。

进入编辑器后，将查询名称改为：

`Projects`

重命名方法：

1.  在左侧「查询」列表中找到该查询。
2.  右键点击查询名称。
3.  选择「重命名」。
4.  输入 `Projects`。
5.  按 Enter。

## 4.4 导入第三个文件：Expense_Regimes

1.  点击「主页」。
2.  点击「获取数据」或「新建源」。
3.  选择「Excel 工作簿」。
4.  找到 `Data_Set_Expense_Regimes.xlsx`。
5.  点击「打开」。
6.  在导航器中选择 `Expense_Regimes`。
7.  点击「转换数据」。

该查询保留名称：

`Expense_Regimes`

## 4.5 检查左侧查询列表

完成后，左侧至少应看到三个正式业务查询：

- `Accounting_Transactions`（完成重命名后）
- `Projects`
- `Expense_Regimes`

如果出现一个额外的辅助查询（例如最初导入时留下的
`Excel 工作簿`），不要立即删除。先确认它是否是重复的原始查询，再决定是否取消加载。不要误删三个正式业务查询。

------------------------------------------------------------------------

# 5. Power Query：处理 Accounting_Transactions

这是 Phase 2
最重要的一张表。它记录每一笔交易，是后续分析的中心事实数据。

## 5.1 将查询重命名

在左侧查询列表中：

1.  找到 `Accounting_Vouchers`。
2.  右键点击。
3.  选择「重命名」。
4.  输入：

`Accounting_Transactions`

5.  按 Enter。

## 5.2 确认并提升标题行

导入 Excel 后，Power Query 通常会自动识别第一行标题。

确认列标题显示为：

- Accounting Control Number
- Journal Voucher Type Code
- Accounting Effective Date
- Journal Voucher Item Amount
- Project Identifier

如果第一行仍显示为普通数据，而不是列标题：

1.  点击顶部「主页」或「转换」。
2.  找到「将第一行用作标题」。
3.  点击执行。

如果标题已经正确，不要重复执行。

## 5.3 重命名两列

老师要求把以下两个字段改名：

| 原始列名                    | 新列名         |
|-----------------------------|----------------|
| Accounting Effective Date   | Effective Date |
| Journal Voucher Item Amount | Item Amount    |

操作方法：

1.  双击 `Accounting Effective Date` 列标题。
2.  输入 `Effective Date`。
3.  按 Enter。
4.  双击 `Journal Voucher Item Amount` 列标题。
5.  输入 `Item Amount`。
6.  按 Enter。

其他三个字段保持原名：

- Accounting Control Number
- Journal Voucher Type Code
- Project Identifier

## 5.4 设置数据类型

在 Power Query
中，每一列标题左侧都有数据类型图标。点击列标题左侧的图标或顶部「数据类型」下拉菜单，可以修改类型。

请按下表设置：

| 字段                      | 中文界面数据类型 | 说明                             |
|---------------------------|------------------|----------------------------------|
| Accounting Control Number | 整数             | 凭证编号是整数                   |
| Journal Voucher Type Code | 文本             | MC、MIC、O&M、SA 是代码          |
| Effective Date            | 日期             | 只保留日期，不需要时间           |
| Item Amount               | 货币             | 金额使用固定小数/货币类型        |
| Project Identifier        | 文本             | PR001 等项目编号不能作为数值计算 |

### 特别注意：不要把所有列都设置成货币

只有 `Item Amount` 应设置为货币。

如果把 Project Identifier 或 Journal Voucher Type Code 设成货币，会出现
`[Error]`。

### 货币类型的正确选择

在中文版 Power Query 中：

1.  点击 `Item Amount` 列标题。
2.  点击数据类型下拉菜单。
3.  选择「货币」。
4.  如果弹出提示，选择「替换当前」。

不要把它设成普通「十进制数字」，因为实验指导书要求 Fixed Decimal
Number（固定小数/货币类型）。

### 日期类型

1.  点击 `Effective Date` 列标题。
2.  点击数据类型下拉菜单。
3.  选择「日期」。
4.  不要选择「日期/时间」，因为指导书要求去掉时间部分。

### 整数类型

1.  点击 `Accounting Control Number` 列标题。
2.  点击数据类型下拉菜单。
3.  选择「整数」。

## 5.5 筛除 2018 年 4 月 1 日之前的测试记录

这是老师特别强调的 Critical Quality Gate（关键数据质量检查点）。

原始 Accounting 数据包含 6 条非正式运营测试记录，日期早于 2018 年 4 月 1
日。

筛选条件：

`Effective Date >= 2018-04-01`

### 方法一：通过日期筛选菜单操作（推荐初学者）

1.  找到 `Effective Date` 列标题。
2.  点击列标题右侧的筛选箭头。
3.  选择「日期筛选」或类似选项。
4.  选择「之后或等于」。
5.  在日期框中输入：

`2018/4/1`

6.  点击「确定」。

如果界面显示的是「晚于」，不要误选。我们需要的是**大于或等于**，必须保留
2018 年 4 月 1 日当天的数据。

### 方法二：通过公式栏确认筛选表达式

完成筛选后，公式栏中应出现类似表达式：

``` powerquery
= Table.SelectRows(#"已更改类型", each [Effective Date] >= #date(2018, 4, 1))
```

Power Query 可能会自动使用不同的步骤名称，例如
`#"已更改类型 1"`。步骤名称不同不影响逻辑。

关键是筛选条件必须是：

``` powerquery
[Effective Date] >= #date(2018, 4, 1)
```

### 筛选后的预期行数

- 原始业务记录：174 条。
- 2018-04-01 之前的记录：6 条。
- 筛选后业务记录：168 条。

不要删除其他交易，也不要手动补充交易。

------------------------------------------------------------------------

# 6. Power Query：处理 Projects

## 6.1 查询名称

查询名称应为：

`Projects`

## 6.2 检查字段

Projects 表应有以下 8 列：

1.  Project Identifier
2.  Project Name
3.  Director
4.  O&M Budget
5.  Salary Budget
6.  Major Cap Budget
7.  Minor Cap Budget
8.  FTE Budget

## 6.3 设置数据类型

| 字段               | 数据类型   |
|--------------------|------------|
| Project Identifier | 文本       |
| Project Name       | 文本       |
| Director           | 文本       |
| O&M Budget         | 货币       |
| Salary Budget      | 货币       |
| Major Cap Budget   | 货币       |
| Minor Cap Budget   | 货币       |
| FTE Budget         | 十进制数字 |

### 为什么 FTE Budget 使用十进制数字？

FTE 表示全职员工当量，可能出现：

- 9.5
- 11.5
- 16.5

因此不能设置为整数，也不能设置为货币。

### 设置四个预算字段为货币

逐列操作：

1.  点击 `O&M Budget`。
2.  选择数据类型「货币」。
3.  对 `Salary Budget`、`Major Cap Budget`、`Minor Cap Budget`
    重复操作。

**重要：**
一次只选择当前需要修改的列，避免误选项目编号、项目名称和负责人字段。

如果误将文本列设置成货币，Power Query 会显示
`[Error]`。出现这种情况，应撤销错误的数据类型步骤，再分别把文本列设置回「文本」。

## 6.4 检查行数

Projects 应有：

- 1 行标题。
- 16 条项目记录。

Power Query 中通常显示 16 条业务数据。

------------------------------------------------------------------------

# 7. Power Query：处理 Expense_Regimes

## 7.1 查询名称

保持：

`Expense_Regimes`

## 7.2 检查字段

应包含以下四列：

1.  Journal Voucher Type Code
2.  Expense Regime Description
3.  Default Approval Limit
4.  Cap Policy Standard

## 7.3 设置数据类型

| 字段                       | 数据类型 |
|----------------------------|----------|
| Journal Voucher Type Code  | 文本     |
| Expense Regime Description | 文本     |
| Default Approval Limit     | 货币     |
| Cap Policy Standard        | 货币     |

操作：

1.  前两列保持「文本」。
2.  点击 `Default Approval Limit`，选择「货币」。
3.  点击 `Cap Policy Standard`，选择「货币」。

## 7.4 为什么只有四条业务记录？

原始文件实际结构：

- 第 1 行：列标题。
- 第 2 行：MC。
- 第 3 行：MIC。
- 第 4 行：O&M。
- 第 5 行：SA。

因此，原始 Excel 是 5 行（包含表头），实际业务记录是 4 条。

**这不是数据遗漏，不要手动增加第五条业务记录。**

四种类别分别是：

| 代码 | 类别                              |
|------|-----------------------------------|
| MC   | Major Capital Expenditure         |
| MIC  | Minor Capital Expenditure         |
| O&M  | Operations and Management         |
| SA   | Salary and Personnel Compensation |

------------------------------------------------------------------------

# 8. 检查数据质量并应用更改

## 8.1 检查是否出现 Error

在 Power Query 编辑器中，逐张表检查：

- Accounting_Transactions
- Projects
- Expense_Regimes

观察数据预览区域是否出现 `[Error]`。

如果某一列出现错误：

1.  先确认该列应该是什么数据类型。
2.  检查最近一次「已更改类型」步骤是否误选了其他列。
3.  在右侧「查询设置」→「已应用步骤」中，删除造成错误的错误步骤。
4.  再按正确字段逐列设置类型。

不要删除整个查询，也不要删除前面的数据源和标题提升步骤。

## 8.2 使用列质量辅助检查（如果界面提供）

1.  点击「查看」选项卡。
2.  找到「列质量」。
3.  打开列质量显示。
4.  检查每列的有效值、错误值和空值比例。

重点要求：不能存在数据类型转换错误。

## 8.3 核对三张表的行数

| 表名                    | 应有业务记录数 |
|-------------------------|---------------:|
| Accounting_Transactions |            168 |
| Projects                |             16 |
| Expense_Regimes         |              4 |

## 8.4 点击关闭并应用

全部检查完成后：

1.  点击 Power Query 编辑器左上角「关闭并应用」。
2.  等待 Power BI 加载数据。
3.  返回 Power BI Desktop。
4.  点击左侧「数据视图」（表格图标）。
5.  分别检查三张表是否能正常显示。

------------------------------------------------------------------------

# 9. 本次数据核验结果与指导书日期差异

这一部分非常重要。我们已经直接检查了原始 Excel
文件，确认了真实数据情况。

## 9.1 Accounting 原始数据核验

原始文件：`Data_Set_Accounting.xlsx`  
工作表：`Accounting_Vouchers`

核验结果：

| 项目                             |   实际结果 |
|----------------------------------|-----------:|
| Excel 总行数（含标题）           |        175 |
| 原始业务记录                     |        174 |
| 2018-04-01 之前的记录            |          6 |
| 筛选后记录                       |        168 |
| 原始最早日期                     | 2018-03-01 |
| 筛选后最早日期                   | 2018-04-01 |
| 原始及筛选后数据中的最晚交易日期 | 2020-12-10 |

原始文件中 6 条需要筛除的测试记录如下：

| Accounting Control Number | 日期       |
|--------------------------:|------------|
|                   5000085 | 2018-03-01 |
|                   5000086 | 2018-03-02 |
|                   5000087 | 2018-03-03 |
|                   5000088 | 2018-03-04 |
|                   5000089 | 2018-03-05 |
|                   5000090 | 2018-03-06 |

计算：

`174 - 6 = 168`

因此，筛选后 168 条记录是正确的。

## 9.2 指导书与原始文件的日期差异

实验指导书的 Data Hygiene Checkpoint 写的是：

`2018-04-01 through 2020-12-31`

但是我们直接读取原始 `Data_Set_Accounting.xlsx` 后，发现：

- 原始数据最晚交易日期是 2020-12-10。
- 原始文件中没有 2020-12-11 至 2020-12-31 的交易记录。
- 筛选后的最后日期仍然是 2020-12-10。

所以，**不能为了让 Power BI 显示 2020-12-31 而人为添加交易记录。**

建议以原始 Excel
为准，保留真实数据。若老师要求解释，可以说明原始数据实际覆盖到
2020-12-10，而指导书中的 2020-12-31 与提供的数据文件不一致。

## 9.3 Projects 原始数据核验

原始文件：`Data_Set_Projects.xlsx`  
工作表：`Project_Tombstone`

- 1 行表头。
- 16 条项目业务记录。
- 共 8 个字段。

这与指导书要求一致。

## 9.4 Expense_Regimes 原始数据核验

原始文件：`Data_Set_Expense_Regimes.xlsx`  
工作表：`Expense_Regimes`

- 1 行表头。
- 4 条业务记录。
- 共 4 个字段。

指导书的 5 rows 对应 Excel 总行数（含表头），不是 5 条业务记录。

因此不需要补充第五条数据。

------------------------------------------------------------------------

# 10. 已经额外完成的 Phase 3：星型模型

> 本节记录本次实际已经完成的额外操作。作业页面明确点名的核心内容是 Phase
> 1 和 Phase 2；如果老师没有要求 Phase 3，可以保留当前模型，不需要继续做
> DAX 或仪表板。

## 10.1 三张业务表和一张日期表

目前模型中有：

- Accounting_Transactions：中心交易事实表。
- Projects：项目维度表。
- Expense_Regimes：支出类别维度表。
- Date_Dimension：日期维度表。

## 10.2 创建 Date_Dimension

在 Power BI Desktop 中：

1.  点击顶部「主页」。
2.  点击「新建表」。
3.  在公式栏中输入：

``` dax
Date_Dimension =
VAR MinDate = MIN(Accounting_Transactions[Effective Date])
VAR MaxDate = MAX(Accounting_Transactions[Effective Date])
RETURN
ADDCOLUMNS (
    CALENDAR (MinDate, MaxDate),
    "Year", YEAR ( [Date] ),
    "Quarter", "Qtr " & FORMAT ( [Date], "Q" ),
    "Month", FORMAT ( [Date], "mmmm" ),
    "Month Number", MONTH ( [Date] ),
    "Day", DAY ( [Date] ),
    "YearMonth", FORMAT ( [Date], "yyyy-mm" )
)
```

4.  点击公式栏左侧的对勾或按 Enter。
5.  等待日期表创建完成。

该公式根据 Accounting_Transactions
中最早和最晚的交易日期，自动生成连续日期。

根据实际原始数据，日期表的范围应是：

- 2018-04-01
- 2020-12-10

## 10.3 建立三条关系

进入模型视图：

1.  点击左侧「模型视图」图标。
2.  点击顶部「主页」→「管理关系」。
3.  点击「新关系」。
4.  按下表建立关系。

| 从表（多端）            | 字段                      | 到表（1端）     | 字段                      |
|-------------------------|---------------------------|-----------------|---------------------------|
| Accounting_Transactions | Project Identifier        | Projects        | Project Identifier        |
| Accounting_Transactions | Journal Voucher Type Code | Expense_Regimes | Journal Voucher Type Code |
| Accounting_Transactions | Effective Date            | Date_Dimension  | Date                      |

每条关系都应设置：

- 基数：多对一（\*:1）。
- 交叉筛选方向：单向。
- 使此关系处于活动状态：勾选。

## 10.4 检查关系

在「管理关系」窗口中，应该看到三条关系，状态全部为「活动」。

同时检查：

- 没有双向筛选关系。
- 没有多对多关系。
- 三张维度表都能通过单向关系筛选 Accounting_Transactions。

## 10.5 本次不需要继续的内容

除非老师明确要求，否则本次不必继续：

- 创建 `_Measures` 表。
- 创建 Total Spend 等 DAX 度量值。
- 创建 Check amount 和 Power 计算列。
- 制作三页可视化仪表板。
- 发布到 Power BI Service。
- 配置 RLS。

这些分别属于后续 Phase 4、Phase 5、Phase 6 的内容。

------------------------------------------------------------------------

# 11. 保存 PBIX 文件并提交

## 11.1 保存文件

在 Power BI Desktop 中：

1.  点击左上角「文件」。
2.  选择「另存为」。
3.  选择容易找到的文件夹。
4.  输入文件名：

`LAB1_你的姓名.pbix`

例如：

`LAB1_XIONG ZIHAN.pbix`

5.  点击「保存」。

## 11.2 保存后重新打开检查

建议进行一次简单验证：

1.  关闭 Power BI Desktop。
2.  在保存文件的文件夹中找到 `.pbix` 文件。
3.  双击重新打开。
4.  确认文件能正常打开。
5.  检查三张正式业务表是否存在。
6.  检查数据行数是否正确。
7.  如果保留了 Phase 3，确认日期表和三条关系仍然存在。

## 11.3 提交

作业页面要求通过指定链接提交文件，文件名格式为：

`LAB1_你的姓名.Pbix`

提交前确认：

- 文件扩展名是 `.pbix`。
- 不是 Excel 文件。
- 不是截图。
- 不是 PDF。
- 上传的是最终保存的 PBIX 文件。

------------------------------------------------------------------------

# 12. 提交前最终检查清单

可以逐项勾选：

## Phase 1：业务理解

- [ ] 阅读 BOREALIS 实验指导书 Phase 1。
- [ ] 查看 Master Excel 的 `Phase1_KPI_Questions`。
- [ ] 查看 Master Excel 的 `Phase1_Stakeholders`。
- [ ] 能解释四种支出类别。
- [ ] 能解释 100,000 美元审批阈值。
- [ ] 理解 CFO、内部审计、项目负责人和 BI 团队的需求。
- [ ] 理解 KPI、分析类型和报告频率。

## Phase 2：数据导入与清洗

- [ ] 导入 `Data_Set_Accounting.xlsx`。
- [ ] 选择 `Accounting_Vouchers`。
- [ ] 将查询重命名为 `Accounting_Transactions`。
- [ ] 将 `Accounting Effective Date` 改为 `Effective Date`。
- [ ] 将 `Journal Voucher Item Amount` 改为 `Item Amount`。
- [ ] Accounting Control Number 设置为整数。
- [ ] Journal Voucher Type Code 设置为文本。
- [ ] Effective Date 设置为日期。
- [ ] Item Amount 设置为货币。
- [ ] Project Identifier 设置为文本。
- [ ] 筛除 2018-04-01 之前的数据。
- [ ] 最终 Accounting 业务记录为 168 条。
- [ ] 导入 Projects，保留 16 条记录。
- [ ] Projects 四个预算字段设置为货币。
- [ ] FTE Budget 设置为十进制数字。
- [ ] 导入 Expense_Regimes，保留 4 条业务记录。
- [ ] Expense_Regimes 两个金额字段设置为货币。
- [ ] 检查没有数据类型转换错误。
- [ ] 点击「关闭并应用」。

## Phase 3：已经额外完成的模型（保留即可）

- [ ] Date_Dimension 已创建。
- [ ] Date_Dimension 包含 Date、Year、Quarter、Month、Month
  Number、Day、YearMonth。
- [ ] Projects 关系已建立。
- [ ] Expense_Regimes 关系已建立。
- [ ] Date_Dimension 关系已建立。
- [ ] 三条关系均为活动状态。
- [ ] 三条关系均为多对一、单向筛选。

## 最终提交

- [ ] PBIX 文件已保存。
- [ ] 文件能够重新打开。
- [ ] 文件名符合老师要求。
- [ ] 已通过作业链接提交。

------------------------------------------------------------------------

# 13. 常见问题处理

## 13.1 为什么设置数据类型后出现 `[Error]`？

通常是因为把文本字段误设置成数字或货币。

例如：

- Project Identifier 应为文本。
- Project Name 应为文本。
- Director 应为文本。
- Journal Voucher Type Code 应为文本。

处理方法：

1.  打开 Power Query。
2.  在右侧「查询设置」找到「已应用步骤」。
3.  删除造成错误的错误数据类型步骤。
4.  对照字段类型表重新设置。
5.  检查错误是否消失。

不要删除整个查询。

## 13.2 为什么没有“固定小数”选项？

部分中文版 Power Query 界面将 Fixed Decimal Number 显示为「货币」。

金额字段选择「货币」即可。

## 13.3 为什么 FTE Budget 不能设置为整数？

FTE 是人员当量，可能有 9.5、11.5 等小数。

因此应选择「十进制数字」。

## 13.4 为什么 Expense_Regimes 只有四条数据？

因为原始 Excel 的 5 行包含 1 行表头，实际业务数据只有 4 条。

这是正确的，不需要补数据。

## 13.5 为什么最终日期不是 2020-12-31？

因为原始 Accounting Excel 的最晚日期是 2020-12-10。

原始文件没有 2020-12-11 至 2020-12-31 的交易记录。

因此不要修改筛选条件，也不要人为添加交易。

## 13.6 为什么 Power BI 金额显示为 ¥ 而不是 \$？

这是显示格式或区域设置的问题，不代表金额数值一定发生了变化。

本次 Phase 2
主要要求金额字段使用正确的货币/固定小数类型。若后续老师要求统一显示美元，可以在模型或报表格式中再调整货币符号。

## 13.7 为什么模型里多出一个 Date_Dimension？

这是在完成 Power Query 后额外创建的日期维度表，属于 Phase 3
的数据建模内容。

如果本次作业只要求 Phase 1 和 Phase
2，可以保留，不需要删除，也不必继续创建 DAX 指标或仪表板。

------------------------------------------------------------------------

# 14. 参考文件与依据

本手册根据以下材料整理：

1.  `borealis_complete_phase_labsheets.pdf`：BOREALIS 企业 BI
    实验指导书，重点为 Module 1 Phase 1 和 Module 2 Phase 2。
2.  `borealis_phase_activity_rubrics.pdf`：各阶段评分标准，用于区分后续
    Phase 3–6 的扩展内容。
3.  `Borealis_Complete_Phase_Datasets_Master.xlsx`：重点参考
    `Phase1_KPI_Questions`、`Phase1_Stakeholders`、`Phase2_Raw_Vouchers`、`Phase2_Projects`、`Phase2_Expense_Regimes`
    等标签页。
4.  `Data_Set_Accounting.xlsx`：原始会计交易数据。
5.  `Data_Set_Projects.xlsx`：原始项目与预算数据。
6.  `Data_Set_Expense_Regimes.xlsx`：原始支出类别和审批限额数据。
7.  用户在 Power BI 中文界面中的实际操作截图与已完成步骤。

## 最重要的结论

本次作业的核心是：

**理解业务需求（Phase 1） + 导入和清洗三个 Excel 数据源（Phase 2） +
保存并提交 PBIX 文件。**

已经额外完成的 Phase 3
日期维度表和三条关系可以保留。不要为了追求更多功能而继续增加本次没有明确要求的
DAX 指标、仪表板或云端发布工作。

数据清洗必须忠实于原始文件：Accounting 最终保留 168
条交易，实际日期范围为 2018-04-01 至 2020-12-10；Projects 为 16
条业务记录；Expense_Regimes 为 4 条业务记录。

**不要为了迎合指导书中的日期文字而修改或编造原始数据。**
