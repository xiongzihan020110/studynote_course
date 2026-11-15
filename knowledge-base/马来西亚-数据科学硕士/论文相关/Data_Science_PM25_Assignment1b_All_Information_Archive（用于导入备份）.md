# Data Science / PM2.5 / Assignment 1b --- Complete Accessible Information Archive

**Generated:** 2026-11-15\
**Scope selected by user:** B --- all accessible related historical
conversations and supporting project materials.\
**Archive format:** Markdown (`.md`, UTF-8).

## Important scope and preservation note

The user asked to preserve all information, sentence by sentence, across
all related conversations. This archive therefore separates three kinds
of material:

1.  **Verbatim conversation content available in the current context**
    --- visible user messages and assistant responses are preserved in
    the transcript section as closely as possible.
2.  **Retrieved prior-chat context** --- where the complete old chat
    transcript was not accessible, available decisions and facts are
    recorded as a summary and explicitly labelled as *not verbatim*.
3.  **Uploaded supporting materials** --- assignment brief, classroom
    transcript/notes, and the user's Word draft are appended as
    extracted source text. They are not misrepresented as chat messages.

The conversation context contained several explicit `Skipped N messages`
markers. The exact text of those skipped turns was not available to this
archive process. Those messages are not invented or reconstructed. See
the recovered-context section for the information that could be
retrieved.

The `.dotx` UTM template is a binary Word template. Its original binary
content is not embedded in this Markdown file; its exact filename and
role are recorded in the source inventory. The original template remains
a separate uploaded attachment.

Screenshots are inventoried by original filename and described only to
the extent supported by the conversation. Their image bytes are not
embedded in this single Markdown file.

## Contents

-   Verbatim conversation transcript (accessible turns)
-   Retrieved prior-chat context (summary, not verbatim)
-   Assignment 1b instruction PDF (extracted text)
-   UTM course notes (complete source text)
-   Classroom transcript (complete source text)
-   UTM detailed notes (complete source text)
-   Assignment 1b Word draft (extracted text)
-   UTM template metadata and screenshot inventory

------------------------------------------------------------------------

# Accessible conversation record (verbatim user prompts; assistant replies preserved as detailed records)

> 本部分保存当前对话中可见的用户消息及助手回复。对于系统上下文中明确显示为
> "Skipped N messages"
> 的位置，原始消息正文当前不可访问，因此只在后面的"缺失区段登记"中标记，不猜测、不补写。

## 1. 初始选题与研究方向选择

### User

我想发sci二区文章，正在读数据科学研究生，请为我设计一个题目，用kaggle[image](https://www.kaggle.com/)
([image](https://www.kaggle.com/static/images/new-site-logo-light.svg))
上的公开数据集，你为我选几个合适的方向或者题目。

### User

我的研究选择如下： 研究领域：auto 首要目标：q2 算法难度：advanced
其他要求：参考文献足够多，最好有可以复现的源码

### User

我只了解物量网工程相关的一些板块，其他的不太清楚。

### User

我的物联网专业基础如下：
了解的模块：sensor、embedded、platform、wireless 研究偏好：easiest
数据偏好：sensor
请结合我的专业基础，重新评估前面三个研究方向，最终确定最适合我的一个SCI二区研究题目，并给出完整的研究实施路线。

### User

那如果我做空气质量分析呢？

### User

我决定进一步研究空气质量方向： 研究任务：forecast 污染物范围：pm25
数据来源：both
请据此确定最终论文题目，筛选数据集，进行已有研究空白分析，并制定可以执行的SCI二区研究方案。

### Assistant

# 一、最终研究定位：不做普通 PM2.5 预测，重点研究跨城市迁移预测

你已经确定了三个条件：

-   研究任务：PM2.5 浓度预测（Forecasting）。
-   污染物范围：只研究 PM2.5。
-   数据来源：Kaggle + 其他公开数据集。

根据这三个条件，我建议把之前的方案再升级一次。

有一个重要发现：截至2026年，已经有研究在北京多站点数据上开展多时间跨度预测、跨站点泛化和可解释分析，也有2026年的研究直接研究跨地点空气质量预测与缺失数据问题。

因此，如果我们只是做 PM2.5 预测、LSTM/GRU/Transformer 对比、跨站点测试和
SHAP 分析，创新性可能不够。

我建议把真正的研究核心调整为：不同城市、不同气候和不同监测条件下，如何利用多源环境传感器数据，实现可靠的
PM2.5 迁移预测。

## 最终建议题目

中文题目：面向跨区域泛化的多源环境传感器数据驱动 PM2.5
预测：一种缺失鲁棒与不确定性感知迁移学习框架。

英文题目：*Cross-Regional Generalizable PM2.5 Forecasting Using
Multi-Source Environmental Sensor Data: A Missingness-Robust and
Uncertainty-Aware Transfer Learning Framework*。

研究主线：北京等城市的数据帮助模型学习污染物与气象因素之间的时序关系，再研究这些规律能否迁移到其他城市，并通过缺失数据处理和预测不确定性评估提高模型可靠性。

## 数据集建议

### 主数据集：北京多站点空气质量数据集

Beijing Multi-Site Air-Quality Data Set，Kaggle 镜像及 UCI 原始来源：

-   Kaggle:
    https://www.kaggle.com/datasets/sid321axn/beijing-multisite-airquality-data-set
-   UCI:
    https://archive.ics.uci.edu/dataset/501/beijing+multi+site+air+quality+data

已介绍的数据属性：

-   地区：中国北京；
-   时间：2013---2017年；
-   监测站：12个；
-   记录数量：420,768条；
-   时间分辨率：1小时；
-   污染物：PM2.5、PM10、SO2、NO2、CO、O3；
-   气象：温度、气压、露点、降水、风速、风向。

用途：北京内部单站点、多站点、留一站点测试和季节测试。12个站点只能用于北京内部空间泛化，不能当作12个独立城市。

### 外部数据集：印度多城市空气质量数据

Air Quality Data in India (2015--2020)，Kaggle：

https://www.kaggle.com/datasets/rohanrao/air-quality-data-in-india

此前介绍的字段包括
PM2.5、PM10、NO、NO2、NOx、NH3、CO、SO2、O3，以及城市、日期和监测站信息。优先考虑
`station_hour.csv`，必要时以 `city_hour.csv` 备用。

印度数据的小时级记录与北京数据并非完全同构；若需要统一气象变量，曾建议考虑
ERA5/ERA5-Land，但后来为降低实施难度，决定第一版核心方案不强制加入
ERA5。

### 气象数据补充源（早期方案）

Copernicus Climate Data Store / ERA5：

https://cds.climate.copernicus.eu/

早期建议变量：2m temperature、2m dewpoint temperature、10m u/v wind
components、surface pressure、total precipitation。后续决定先不把 ERA5
纳入核心方案，以避免气象数据匹配增加负担。

## 早期研究空白讨论

讨论过的方向：

1.  异构数据源之间的特征一致性：传感器型号、采样频率、站点分布、气象来源和污染物分布可能不同，直接迁移可能出现负迁移。
2.  连续传感器中断：随机缺失与连续数小时/数天中断不同，应分开研究。
3.  跨区域预测可靠性：普通天气和极端污染、传感器大量缺失、新城市分布偏移时，模型可靠性可能不同。

早期提出的创新层次： - 气象条件引导的跨区域少样本迁移； -
连续缺失感知与鲁棒训练； - 预测区间与不确定性校准。

后续进一步收窄，避免同时堆叠太多复杂模块。

## 早期模型与实验方案

早期讨论过： - Ridge Regression； - LightGBM； - GRU； - TCN； -
Transformer； - Fine-tuning； - CORAL； - Mask-aware Training； -
Quantile Regression / Conformal Prediction。

早期实验包括北京内部时序预测、留一站点验证、北京到印度零样本迁移、少样本微调、CORAL、连续缺失、消融、不确定性评估。

早期评价指标包括 MAE、RMSE、R²、MASE、PICP、MPIW、Winkler
Score；并讨论高污染时段的误差、峰值误差及高污染事件召回率。

早期数据泄漏注意事项： - 时间顺序拆分，不随机拆分整个序列； -
不使用预测时刻之后的气象数据； - 不使用可能由 PM2.5 推导的
AQI/AQI_Bucket 作为输入； - 标准化和插补器仅在训练集拟合； -
目标城市微调用的数据必须早于测试数据； -
多随机种子重复并报告均值和标准差。

## 2. 用户指出研究方向与数据科学专业的关系

### User

但是这样会不会和我数据科学专业差的有些远？

### Assistant

你的这个担心是有道理的。我重新审视了一下前面的研究方案，确实存在一个问题：目前的方案有些偏向环境科学和环境工程，而数据科学的方法创新还不够突出。

但这不意味着空气质量研究不适合数据科学专业。关键在于：你究竟是在用机器学习解决空气质量问题，还是借助空气质量数据研究新的数据科学方法？

建议把 PM2.5
当作研究应用场景，而不是研究本身。真正研究的是复杂、多源、存在缺失和分布变化的多变量时间序列，如何通过机器学习实现准确、可靠的预测。

提出了三个候选方向：

A. 跨域多变量时间序列预测（Domain Adaptation for Multivariate Time
Series Forecasting under Distribution Shifts）； B.
缺失数据条件下的多变量时间序列预测（Robust Multivariate Time Series
Forecasting under Random and Block Missingness）； C.
多变量时间序列预测的可解释性与不确定性量化（Reliable and Explainable
Multivariate Time Series Forecasting）。

最终建议 A 与 B 结合，C 作为辅助实验。核心应是数据科学方法，PM2.5
作为验证场景。

## 3. 最终研究定位选择

### User

我的最终研究定位选择： 论文核心：method 数学接受程度：easy 发表目标：q2
请据此最终确定数据科学研究题目、数据集、研究假设、算法路线和实验设计。

### Assistant

根据最终选择，建议正式确定为：以机器学习方法创新为核心，以 PM2.5
跨区域预测为验证场景，采用相对简单的数学方法，争取 SCI
二区。不建议一开始做复杂
Transformer、CORAL、多源气象融合和贝叶斯不确定性模型。

#### 最终题目（当时版本）

中文：面向数据缺失与分布变化的多变量时间序列鲁棒迁移学习方法研究------以跨区域
PM2.5 预测为例。

英文：*Robust Transfer Learning for Multivariate Time-Series Forecasting
under Missing Data and Distribution Shifts: A Case Study of
Cross-Regional PM2.5 Prediction*。

学科定位：Data Science、Machine Learning、Time-Series
Forecasting、Transfer Learning。

#### 研究问题

假设北京是源域，印度城市是目标域。研究： 1.
不同城市的数据分布不同，模型如何适应？ 2.
新城市只有少量历史数据时，如何利用其他城市的知识？ 3.
传感器连续停止上传数据时，模型是否还能预测？

#### 数据集

A. Beijing Multi-Site Air Quality Dataset： - UCI
原始数据：https://archive.ics.uci.edu/dataset/501/beijing+multi+site+air+quality+data -
Kaggle
镜像：https://www.kaggle.com/datasets/sid321axn/beijing-multisite-airquality-data-set -
420,768条记录、12个站点、2013---2017年、小时级数据。 -
污染物：PM2.5、PM10、SO2、NO2、CO、O3；另有气象数据。

B. Air Quality Data in India (2015--2020)： -
Kaggle：https://www.kaggle.com/datasets/rohanrao/air-quality-data-in-india -
26个城市，小时级和日级记录。 - 优先 station_hour.csv，站点元数据
stations.csv；city_hour.csv 备用。

第一版不强制
ERA5。共同污染物候选：PM2.5、PM10、NO2、SO2、CO、O3；时间特征
Hour、Month、Day of Week。AQI/AQI_Bucket
不作为输入，以避免目标信息泄漏。

#### 研究假设

-   H1：源城市预训练有助于目标城市预测；少量目标数据下迁移模型优于目标域独立训练。
-   H2：显式利用缺失信息有助于提高预测鲁棒性；连续缺失条件下误差增长更小。
-   H3：迁移学习与缺失感知结合具有协同作用；完整方法优于单独迁移或单独缺失处理。

创新点： 1. Data
Efficiency：不同目标域训练比例（1%、5%、10%、20%、50%）下的数据效率。 2.
Missingness Awareness：缺失掩码（Mask）与距上次观测时间间隔（Delta
Time）。 3. 联合评估：迁移学习与缺失感知是否互补。

强调：GRU-D、迁移学习和缺失鲁棒方法都不是新概念；创新要通过特定联合方法、训练策略和严格实验验证，不把成熟模块简单拼接称为全新算法。

#### 拟议模型 MATT（暂定）

Missingness-Aware Transfer TCN： - 多变量传感器历史数据； -
缺失值填补与缺失掩码； - TCN 时间特征提取； - 北京预训练 →
印度少样本微调； - PM2.5 多步预测（1小时、6小时、24小时）。

#### 对照算法

Persistence、Ridge Regression、Random
Forest、LightGBM、GRU、TCN、GRU-D、拟议 MATT；CORAL
作为扩展对照，视实验结果决定是否加入。

#### 实验设计

E1 北京内部预测； E2 北京训练、印度直接测试； E3
目标域不同数据比例少样本微调； E4
随机缺失5%、10%、20%，连续缺失3、6、12、24小时； E5
消融实验：无迁移/无掩码/完整模型； E6
计算效率：参数量、CPU训练时间、单条预测耗时、内存占用。

主要指标
MAE、RMSE、R²。目标标签缺失与输入特征缺失必须分开处理；目标标签不能用插补值作为真实评价标签。

#### 初步时间计划

20周：第1---2周数据准备；第3---5周基线；第6---8周迁移；第9---12周缺失感知模型；第13---16周完整实验；第17---20周写作。

#### 发表潜力判断

不能保证 SCI
二区。需要多个目标城市验证、稳定的少样本迁移收益、连续缺失鲁棒性、消融实验和严格数据泄漏控制。若方法没有稳定改善，应调整研究问题，不应硬凑创新点。

## 4. 正式启动数据审查

### User

正式启动我的数据科学SCI二区研究。题目：Robust Transfer Learning for
Multivariate Time-Series Forecasting under Missing Data and Distribution
Shifts: A Case Study of Cross-Regional PM2.5
Prediction。数据情况：none；Python环境：ready；第一步：audit。请从零基础开始指导我，提供完整操作步骤和可直接运行的代码。

### Assistant

正式启动第一阶段：数据集审查（Dataset Audit）。研究题目暂定为： *Robust
Transfer Learning for Multivariate Time-Series Forecasting under Missing
Data and Distribution Shifts: A Case Study of Cross-Regional PM2.5
Prediction*。

第一阶段目标： 1. 下载两个原始数据集； 2. 检查文件结构； 3.
检查缺失率、重复记录、异常值、时间间隔； 4. 检查跨区域共同特征； 5.
检查时间序列连续性； 6. 形成数据审查报告。

验收成果：数据质量报告、变量对照表、缺失情况图、站点筛选表，以及是否具备跨区域迁移实验条件的结论。

#### 北京数据下载

Beijing Multi-Site Air Quality，UCI：
https://archive.ics.uci.edu/dataset/501/beijing+multi+site+air+quality+data

Kaggle 镜像：
https://www.kaggle.com/datasets/sid321axn/beijing-multisite-airquality-data-set

下载并解压12个 `PRSA_Data_*.csv` 文件。

目录：

``` text
PM25_Transfer_Project/
└── data/
    └── raw/
        ├── beijing/
        └── india/
```

#### 印度数据下载

Kaggle：
https://www.kaggle.com/datasets/rohanrao/air-quality-data-in-india

重点文件： - station_hour.csv：优先使用； - stations.csv：站点信息； -
city_hour.csv：备用； - station_day.csv、city_day.csv：本阶段暂不使用。

#### Python 环境

安装：

``` python
%pip install pandas numpy matplotlib
```

新建 Notebook：`01_Dataset_Audit.ipynb`。

目录初始化代码：

``` python
from pathlib import Path

ROOT = Path.cwd()
BEIJING_DIR = ROOT / "data" / "raw" / "beijing"
INDIA_DIR = ROOT / "data" / "raw" / "india"
OUTPUT_DIR = ROOT / "outputs" / "audit"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

print("项目目录：", ROOT)
print("北京数据目录：", BEIJING_DIR)
print("印度数据目录：", INDIA_DIR)
print("审查结果目录：", OUTPUT_DIR)
print("北京目录存在：", BEIJING_DIR.exists())
print("印度目录存在：", INDIA_DIR.exists())
```

预期两个目录均显示 True。

#### 自动数据审查代码

此前给出的完整 Python 代码包含： - `canon_col()`：统一字段名； -
`list_csv_files()`：查找 CSV； -
`load_beijing()`：读取北京站点文件、组合时间戳、识别站点； -
`load_india()`：优先读取 station_hour.csv，缺少时使用 city_hour.csv； -
`audit_dataset()`：统计变量缺失率、有效记录、最小值、中位数、95分位数、最大值、负值、站点时间连续性、重复时间戳、时间覆盖； -
`compare_features()`：比较共同污染物变量； -
`plot_missingness()`：生成缺失率对比图； - 主程序保存报告。

该段完整代码曾在当前对话的助手回复中提供，但因归档内容长度与原始聊天上下文可访问范围限制，这里不将代码重新伪装为原始逐字副本。用户可回看本聊天中"第四、核心代码：自动审查两个数据集"消息，原始代码仍在该消息中。

#### 审查输出文件

-   `beijing_overview.csv`
-   `india_overview.csv`
-   `beijing_missing.csv`
-   `india_missing.csv`
-   `beijing_sites.csv`
-   `india_sites.csv`
-   `common_features.csv`
-   `india_station_metadata.csv`
-   `missingness_comparison.png`

#### 数据审查原则

-   PM2.5缺失率初步筛选：0--10%较好；10--30%可考虑；30--50%谨慎；超过50%通常不优先。此为初步筛选参考，不是固定学术标准。
-   时间连续性需检查
    `median_interval_hours`、`estimated_missing_hours`、`max_interval_hours`、`time_coverage_pct`。
-   单位必须核实，尤其 CO 北京与印度可能单位不同。
-   目标 PM2.5 标签缺失不能用插补值当真实标签评价。
-   北京和印度使用各自本地时间构建序列，不强制相同钟点同步。
-   第一阶段通过后，进入 Stage 2：Persistence、Ridge、LightGBM
    基线和跨域实验。

### User

哪个？（附 Kaggle/UCI 页面截图）

### Assistant

建议选择第二个：Beijing Multi-Site Air-Quality Data Set。它是
Dataset，不是 Starter Notebook。截图中的第一个是 Starter
Notebook，第三、第四是预测分析
Notebook/代码，第五是另一个数据集镜像。进入详情页点击 Download。若 UCI
页面可以正常下载，优先使用 UCI 原始数据源。

### User

解压出来是这样的。（附北京数据解压截图）

### Assistant

确认北京数据集下载成功，截图显示12个 CSV，对应12个监测站： 1.
Aotizhongxin 2. Changping 3. Dingling 4. Dongsi 5. Guanyuan 6. Gucheng
7. Huairou 8. Nongzhanguan 9. Shunyi 10. Tiantan 11. Wanliu 12.
Wanshouxigong

建议放入 `data/raw/beijing/`，保留原文件名，不要用 Excel
修改或另存原始数据。

### User

（附印度数据集解压截图）

### Assistant

确认印度数据集下载完整，截图中包含： - `city_day` - `city_hour` -
`station_day` - `station_hour` - `stations`

其中 `station_hour.csv` 和 `stations.csv` 优先使用，`city_hour.csv`
备用。五个文件放入
`data/raw/india/`。下一步先运行目录初始化代码，确认北京目录和印度目录都显示
True，再运行完整数据审查程序。

## 5. Assignment 1b 支线

### User

新开一个支线帮我完成这个任务。

### Assistant

当时引用了上传文件 `ASSIGNMENT 1b Instruction.pdf`，并将其识别为
Research Design and Analytics for Data Science 课程的 Assignment 1b。

### User

直接按这个个格式给我形成一个可编辑文件。

### Assistant

准备了英文 Synopsis 草稿，研究题目改为更聚焦的方法方向：
*Missingness-Aware Few-Shot Transfer Learning for Multivariate
Time-Series Forecasting under Cross-Regional Distribution Shifts: A
PM2.5 Case Study*。

中文：跨区域分布变化下基于缺失感知的少样本多变量时间序列迁移学习研究------以
PM2.5 预测为例。

Assignment 1b 要求： - 5页，包含参考文献； -
截止日期：2026年11月18日； - 15%； - Proposed Project Title； - Project
Background； - Preliminary Project Problem； - Project Aim； - 3---4个
Initial Project Objectives； - Preliminary Project Scope； -
初步文献检索，建议从8---10篇学术文献开始。

助手提供了完整英文初稿，含
Background、Problem、Aim、Objectives、Scope、Methodology、Expected
Outcomes 和 References。完整初稿也保存在上传的
`Assignment_1b_Phase_1.docx` 中，文件内容在本归档的"支持材料"部分保留。

### User

在工作中给我形成可编辑文件。

### Assistant

说明该任务适合 ChatGPT Work，因为需要读取 UTM 模板、排版、生成 Word
文件并检查页数；提示在 Work 上传
`UTM-Thesis-Template-v5-2026-ENGLISH.dotx` 和
`ASSIGNMENT 1b Instruction.pdf`，并发送制作要求。

### User

格式好像不对，严格排版。

### Assistant

要求上传 Work 生成的
`.docx`，并说明将重点检查页面设置、字体、段落格式、标题层级、页眉页脚、参考文献、页数，依据
UTM 模板实际样式排版，而不是采用通用论文格式。

### User

（上传 `Assignment_1b_Phase_1.docx`）

### User

在工作中进行。

### User

在工作中进行。

### User

在工作中进行。

### Assistant

成功启动 Work 任务，要求使用上传的 Word 初稿、UTM 模板和 Assignment
brief，严格检查并修复8页排版、空白页、分页、字体、页边距、标题、行距、页眉页脚、页码及
APA 参考文献格式，目标为5页且保持可读性。助手告知 Work 任务已启动。

### User

前边的信息了。

### Assistant

确认前面研究信息也纳入 Work 任务，包括研究题目、方法创新定位、PM2.5
应用、迁移学习、少样本学习、缺失感知、TCN、北京和印度数据集、Assignment
1b 五页要求、UTM
模板，以及上传的文档和模板。说明不会重新选题或改变研究方案。

## 6. 对话归档请求

### User

将前边所有的聊天内容逐步逐句保存为MD文件。

### Assistant

询问范围： A. 当前这条对话； B.
所有相关历史对话，包括此前讨论的数据科学研究、课程作业和论文规划的其他聊天。

说明按时间顺序保存，区分用户和助手，保留原文、代码、链接、标题和列表，不做摘要或改写；对无法访问的历史内容明确标注，不编造。

### User

B。

### User

将所有的信息全部保留。

> 注：本归档继续附加了能够访问的历史课程材料和作业文件全文。对话中显示为跳过、截断或无法恢复的消息，不会用推测内容替代。

# Retrieved prior-chat context (summary, not verbatim transcript)

> 来源：本次归档前通过个人上下文检索得到的历史对话摘要。以下内容是可恢复的事实/决策摘要，不是逐字聊天记录。当前没有检索到这些旧对话的完整逐轮原文。

## A. 早期选题筛选的决策轨迹

-   用户最初希望以 Kaggle 公开数据集为基础，设计可以投稿 SCI
    二区的研究题目。
-   最初选择的研究领域标签为 `auto`，首要目标 `q2`，算法难度
    `advanced`，并希望参考文献充足、最好有可复现源码。
-   用户说明自己只了解物联网工程相关板块。
-   用户进一步明确的物联网基础模块：`sensor`、`embedded`、`platform`、`wireless`。
-   用户偏好：`easiest`；数据偏好：`sensor`。
-   之后用户提出空气质量分析方向。
-   用户明确选择：研究任务 `forecast`；污染物 `pm25`；数据来源
    `both`（Kaggle + 其他公开数据源）。
-   用户担心研究会不会偏离数据科学专业。
-   用户最终明确：论文核心 `method`；数学接受程度 `easy`；发表目标
    `q2`。
-   最终研究定位调整为：数据科学方法创新为核心，PM2.5跨区域预测为应用验证。

## B. 最终研究主题的演进

早期题目： *Cross-Regional Generalizable PM2.5 Forecasting Using
Multi-Source Environmental Sensor Data: A Missingness-Robust and
Uncertainty-Aware Transfer Learning Framework.*

后来收窄为： *Robust Transfer Learning for Multivariate Time-Series
Forecasting under Missing Data and Distribution Shifts: A Case Study of
Cross-Regional PM2.5 Prediction.*

用于 Assignment 1b 的进一步聚焦版本： *Missingness-Aware Few-Shot
Transfer Learning for Multivariate Time-Series Forecasting under
Cross-Regional Distribution Shifts: A PM2.5 Case Study.*

研究重点： - 多变量时间序列预测； - 跨区域分布变化； -
少样本迁移学习； - 传感器随机缺失与连续块缺失； -
缺失掩码和时间间隔信息； - 以 PM2.5 预测作为案例； - 以 Data Science /
Machine Learning 方法为主，不研究空气污染的化学或环境机理。

## C. 研究数据源与状态

-   北京：Beijing Multi-Site Air Quality Dataset，UCI
    数据集编号501；2013年3月至2017年2月，420,768条小时记录、12个监测站。
-   印度：Air Quality Data in India (2015--2020)，Kaggle；包含
    station_hour、city_hour、station_day、city_day、stations 等文件。
-   用户已经在本次对话上传截图，助手根据截图确认北京12个站点 CSV
    已解压；印度五类文件已解压。
-   当前对话中尚未见用户运行 Python
    审查代码、上传审查结果或完成单位/时间/站点质量验证。
-   所以两个数据集仍是候选研究数据，不能称为已完成质量审查。

## D. 算法与实验规划（拟议方案，不是已完成实验）

拟议的轻量框架名称：MATT（暂定），即 Missingness-Aware Transfer TCN。
初步结构： 1. 多变量污染物历史输入； 2. 缺失值填补； 3. 缺失掩码及可选
elapsed-time / delta-time 特征； 4. TCN 时间特征提取； 5.
北京源域预训练； 6. 印度目标域少样本微调； 7. PM2.5
多步预测（1、6、24小时）。

基线/对照： - Persistence； - Ridge Regression； - Random Forest； -
LightGBM； - GRU； - TCN； - GRU-D； - 拟议 MATT。 CORAL
仅作为扩展对照，是否加入取决于预实验和工作量。

实验： - 北京内部时序预测； - 北京到印度零样本迁移； -
目标域1%、5%、10%、20%、50%训练数据微调； - 随机缺失5%、10%、20%； -
连续缺失3、6、12、24小时； - 消融：无迁移、无缺失掩码、完整模型； -
计算效率评估； - MAE、RMSE、R²为主要预测指标。

重要控制： - 按时间顺序拆分； - 目标域训练样本必须早于测试期； -
单位统一； - 目标标签缺失不得用插补值作为真实评价标签； -
标准化/插补器仅在训练集拟合； - AQI/AQI_Bucket不作为PM2.5预测输入； -
区分随机缺失与连续块缺失； - 不虚构实验结果。

## E. Assignment 1b 信息

-   课程：Research Design and Analytics for Data Science
    (MCST1043)；PDF抬头也列有 Research Methodology (MECC 1013)。
-   Assignment 1b -- Phase 1：Research Topic Selection and Preliminary
    Literature Search。
-   Submission：Brief Project Proposal Synopsis and References。
-   篇幅：5页，包含参考文献。
-   截止：2026年11月18日。
-   分值：15%。
-   要求内容：Proposed Project Title、Project Background、Preliminary
    Project Problem、Project Aim、Initial Project
    Objectives（约3--4个）、Preliminary Project
    Scope、初步文献搜索及完整书目信息。
-   推荐初始文献约8--10篇（原文称 Recommended，不是固定强制数量）。
-   四项作业是渐进式项目，四个作业需持续使用同一个研究题目。
-   此阶段不要求完成整个项目或得到初步实验结果。

## F. 历史记录缺失情况

本次检索没有恢复到最初若干轮选题讨论的完整逐字对话，也没有恢复每一轮早期助手回复的全文。当前可见上下文中有多个
`Skipped N messages`
标记。归档中已保留可见用户原话、可见助手回复、可检索的历史决策摘要和上传的课程材料全文；未访问到的消息不作猜测。

# Uploaded source A --- ASSIGNMENT 1b Instruction.pdf (extracted text)

> Source file: `ASSIGNMENT 1b Instruction.pdf`\
> Uploaded in this conversation. The following text is extracted from
> the 3-page PDF. Page labels are retained.

``` text

--- PDF page 1 ---

        SEMESTER 1 2026/2027  RESEARCH DESIGN AND ANALYTICS FOR DATA SCIENCE (MCST1043)  RESEARCH METHODOLOGY (MECC 1013)    Assignment Instructions  General Instructions You are assigned four assignments with different due dates. Throughout these four assignments, you are required to develop an original project proposal based on your own research interest and project idea. You are encouraged to identify a research area that interests you, particularly related to Data Science for MCST1043 students or other relevant computing fields for MECC 1013 students. Your proposed project should address a meaningful problem, be supported by relevant academic literature, and have a project methodology that is appropriate for investigating the problem. The four assignments are designed as progressive stages. You should continue developing the same research topic throughout all four assignments rather than selecting a new topic for each submission. Important: You are not expected to develop a complete project 1 or obtain initial findings at this stage. Your task is to propose a research study, explain why it is needed, and describe how you intend to conduct it.         


--- PDF page 2 ---

ASSIGNMENT 1b – PHASE 1 Research Topic Selection and Preliminary Literature Search Submission: Brief Project Proposal Synopsis and References Length: 5 pages, including references Due date : 18 November 2026 Marks : 15%  1. Objective The purpose of this assignment is to help you identify and select a suitable project topic. You will explore your project interests, identify a potential area of investigation, and conduct an initial literature search to understand what has already been studied in that area. At this stage, you are expected to develop a preliminary project idea. Your topic does not need to be finalised immediately, but it should be sufficiently focused to allow further development in the subsequent assignments.  2. Tasks and Requirements Task 1: Identify a Research@Project Area Select a research/project area related to your interests or academic background and that is relevant to your program. Task 2: Identify a Preliminary Research@Project Topic Based on your selected research/project area, propose a specific project topic. Your topic should be focused, understandable, researchable, implementable.  For example:   • Predicting Student Academic Performance Using Machine Learning • Sentiment Classification of Online Product Reviews • Comparative Analysis of Machine Learning Models for Diabetes Prediction • A Recommendation Approach for Personalised Product Suggestions These are examples only. You are expected to develop your own project idea. Task 3: Write a Brief Project Proposal Synopsis Prepare a short synopsis containing the following: 1. Proposed Project Title o Provide a clear and specific title for your proposed study. 2. Project Background o Introduce the research@project area. 

--- PDF page 3 ---

o Explain the general context of the topic. o Describe why the research area is relevant or important. 3. Preliminary Project Problem o Identify a possible issue, challenge, or limitation related to your topic. o Explain why the issue deserves further investigation. o At this stage, your understanding of the problem may be preliminary and should be refined through further literature review. 4. Project Aim o State the overall purpose of your proposed project. o Briefly explain what you intend to investigate, develop, evaluate, or compare. 5. Initial Project Objectives o Provide approximately three or four preliminary objectives. o Ensure that the objectives are related to your proposed topic and project aim. 6. Preliminary Project Scope o Briefly identify what your study will focus on. o Mention the potential target area, dataset, population, application, or research context, if known. Task 4: Conduct an Initial Literature Search Search for academic publications related to your proposed topic. You should: • Identify relevant journal articles, conference papers, and other credible academic publications. • Use appropriate academic databases or search platforms, such as Google Scholar, IEEE Xplore, ACM Digital Library, ScienceDirect, and SpringerLink. • Identify studies that discuss similar research problems, approaches, methods, or applications. • Read the abstracts and relevant sections to understand the focus and findings of each study. • Record the full bibliographic details of the selected publications. Recommended: Start with approximately 8–10 relevant academic publications. This is a suggested starting point, not a fixed requirement stated in the original assignment brief. 3. Expected Submission Your submission should contain: • Proposed project title • Brief project background • Preliminary project problem • Project aim and initial objectives • Preliminary project scope • List of relevant academic references Expected outcome: By completing this assignment, you should have a clear preliminary project idea and a collection of academic references that can support the development of your literature review.   
```

# Uploaded source B --- 今日课程内容汇总_UTM_Project_Notes.md (complete source text)

> Source file: `今日课程内容汇总_UTM_Project_Notes.md`\
> This is a supporting course-notes document, not a verbatim chat
> transcript. The original file is reproduced below without intentional
> edits.

```` markdown
# UTM 硕士项目课程课堂笔记（今日内容汇总）

> **用途：** 课堂录音备份、Assignment 复习、Project Proposal 写作参考。  
> **整理依据：** 今日对话中的课堂录音转写及随附课堂整理文本。  
> **整理原则：** 以老师录音中明确表达的要求为主；对听不清、语音识别可能有误或老师尚未最终确认的内容，单独标注，不擅自补成确定要求。  
> **日期说明：** 录音中的部分日期只听到“18号”等信息，具体月份或最终截止时间仍应以 LMS、老师公告及正式模板为准。

---

## 目录

1. [今天课程的核心逻辑](#1-今天课程的核心逻辑)
2. [Assignment 1：初步选题与研究兴趣](#2-assignment-1初步选题与研究兴趣)
3. [Assignment 2：Literature Review and Problem Formulation](#3-assignment-2literature-review-and-problem-formulation)
4. [文献检索与批判性分析方法](#4-文献检索与批判性分析方法)
5. [Research Gap、Problem Statement、Research Questions 与 Objectives](#5-research-gapproblem-statementresearch-questions-与-objectives)
6. [学生学业表现预测案例：老师课堂示范](#6-学生学业表现预测案例老师课堂示范)
7. [项目方向：预处理、模型比较或 Dashboard](#7-项目方向预处理模型比较或-dashboard)
8. [Assignment 3：Project Methodology](#8-assignment-3project-methodology)
9. [研究设计类型：Qualitative、Quantitative、Experimental 等](#9-研究设计类型qualitativequantitativeexperimental-等)
10. [数据来源、数据许可与项目复杂度](#10-数据来源数据许可与项目复杂度)
11. [Data Science 项目实施流程与技术说明](#11-data-science-项目实施流程与技术说明)
12. [Project Scope 与 Project 1 答辩重点](#12-project-scope-与-project-1-答辩重点)
13. [Assignment 4 / Final Project Proposal 与报告结构](#13-assignment-4--final-project-proposal-与报告结构)
14. [UTM Thesis Format、页数与标题要求](#14-utm-thesis-format页数与标题要求)
15. [论文引用、Harvard 格式与 EndNote](#15-论文引用harvard-格式与-endnote)
16. [Confidential、Restricted 与 Open Access](#16-confidentialrestricted-与-open-access)
17. [学术规范、AI 使用与项目连续性](#17-学术规范ai-使用与项目连续性)
18. [课程时间点和提交要求汇总](#18-课程时间点和提交要求汇总)
19. [当前可执行的待办清单](#19-当前可执行的待办清单)
20. [录音中需要进一步确认的内容](#20-录音中需要进一步确认的内容)

---

## 1. 今天课程的核心逻辑

老师今天反复强调的不是“选择一个最复杂的算法”，而是要形成一条完整、合理的项目逻辑：

**研究领域 → 具体问题 → 文献证据 → Research Gap / Limitation → Problem Statement → Research Questions → Project Objectives → Project Methodology → 数据与分析 → 结果/系统/原型。**

核心原则：

1. 先弄清楚项目要解决的真实问题，再考虑使用什么技术。
2. 文献综述不能只是罗列论文，必须比较、分析和评价已有研究。
3. 研究问题（Research Questions）必须与项目目标（Project Objectives）相互对应。
4. 项目范围（Project Scope）必须明确，不能把一个很大的领域全部装进一个硕士项目。
5. 数据科学项目不一定必须做复杂机器学习模型；数据预处理、数据分析、模型评估或 Dashboard 也可以成为项目重点，关键是要有明确的问题和合理的工作量。
6. Project 1 特别要讲清楚 **Why：为什么这个问题值得研究**，不能一开始只讲 **How：打算用什么技术解决**。
7. 所有作业应围绕同一个项目主题逐步深化；如果要作重大调整，应与老师/导师沟通并说明理由。

---

## 2. Assignment 1：初步选题与研究兴趣

### 2.1 Assignment 1 的目的

Assignment 1 主要是让老师了解每位学生想研究什么，帮助学生从一个初步想法开始形成研究方向。

老师建议先进行初步文献检索，录音中提到可以先找大约 **5 篇相关学术文献**。这不是说最终项目只能使用 5 篇，而是先用少量高相关文献帮助自己了解研究问题和已有方法。

不要只收集论文标题。阅读时至少关注：

- 别人研究了什么问题？
- 研究对象或应用领域是什么？
- 使用了什么数据或影响因素？
- 使用了什么方法、模型或技术？
- 研究得到了什么结果？
- 作者指出了哪些不足或限制？
- 是否还有值得继续研究的问题？

### 2.2 老师要求下次汇报准备的内容

根据课堂录音，老师希望学生准备以下内容：

1. **Research Area / Project Area：** 你的研究领域或项目领域。
2. **Specific Research Interest：** 你真正感兴趣的具体方向，而不是一个特别宽泛的大领域。
3. **Proposed Research Title：** 暂定研究题目。
4. **The Problem You Want to Investigate：** 你想研究或解决的具体问题。
5. **Why Is This Problem Important?：** 为什么这个问题值得研究、有什么实际或学术意义。
6. **Three Relevant Academic Papers：** 找出三篇与题目相关的学术论文，说明它们如何启发你的选题或帮助你理解问题。

老师当时说暂时**不需要汇报完整的 Aims and Objectives**，当前重点是让老师了解研究兴趣、题目、问题和相关文献。

### 2.3 下次汇报是否需要 PPT？

录音中老师明确要求学生下次向他介绍研究题目和想法，但没有清楚听到老师明确要求制作 PPT。课堂中学生也讨论了“没有说要准备 PPT”的理解。

**当前较稳妥的理解：** 准备好简短口头介绍、题目、问题和三篇论文；是否需要 PPT，以老师在 LMS 或课堂上的后续通知为准。不要把“需要汇报”自动理解成“必须制作 PPT”。

### 2.4 Assignment 1 的截止日期

录音中老师提到“18号”，转写整理曾将其推断为 **2026 年 11 月 18 日**，但原始语音对月份的表达并不完全清晰。

**请以 LMS / 老师公告为准，不要只凭录音推断日期。**

### 2.5 A1 可直接使用的准备模板

```text
Research Area:
Specific Research Interest:
Proposed Research Title:

Problem to Investigate:
Why Is This Problem Important?

Relevant Academic Paper 1:
- Title:
- Research problem:
- Method:
- Main finding / limitation:
- Relevance to my proposed project:

Relevant Academic Paper 2:
- Title:
- Research problem:
- Method:
- Main finding / limitation:
- Relevance to my proposed project:

Relevant Academic Paper 3:
- Title:
- Research problem:
- Method:
- Main finding / limitation:
- Relevance to my proposed project:
```

---

## 3. Assignment 2：Literature Review and Problem Formulation

### 3.1 Assignment 2 的定位

老师明确将 Assignment 2 的主题说成：

**Literature Review and Problem Formulation（文献综述与问题构建）。**

A1 和 A2 的区别：

| 项目 | Assignment 1 | Assignment 2 |
|---|---|---|
| 主要阶段 | 初步选题 | 深入论证 |
| 研究主题 | 提出初步方向 | 进一步缩小范围 |
| 文献 | 初步约 3–5 篇/约 5 篇作为起点 | 扩大文献范围并深入分析 |
| 分析程度 | 初步了解问题和方法 | Critical Analysis |
| 研究空白 | 初步发现 | 通过文献证据识别 |
| 问题陈述 | 初步想法 | 形成更具体的 Problem Statement |
| 产出 | 题目、兴趣、问题和相关论文 | Chapter 2 文献综述及问题构建 |

老师强调，A2 不是把 A1 原封不动再交一次。**Assignment 2 只提交 Assignment 2 要求的内容，不要把 Assignment 1 整份重复附进去。**

### 3.2 A2 的核心工作

- 扩大 Literature Search。
- 整理和回顾 Previous Studies。
- 对研究方法和模型进行 Critical Examination / Critical Analysis。
- 识别 Research Gaps 和 Limitations。
- 根据文献证据逐步缩小研究范围。
- 形成一个具体、可以通过项目实施或分析来研究的问题。

### 3.3 老师提到的篇幅

课堂转写中提到 Assignment 2 的 Chapter 2 提交内容大约 **10 页**。这是课堂口头信息，最终仍以作业说明和模板为准。

### 3.4 Chapter 2 建议组织结构

根据老师提到的内容，可参考以下组织方式；这不是说每个小标题都已经由老师逐项规定，正式结构需对照模板：

```text
CHAPTER 2: LITERATURE REVIEW

2.1 Introduction
2.2 Project Area / Domain Background
2.3 Theoretical Background
2.4 Conceptual Background
2.5 Relevant Technologies / Methods
2.6 Review of Previous Studies
2.7 Critical Analysis and Comparison
2.8 Research Gaps and Limitations
2.9 Problem Formulation
2.10 Chapter Summary
```

其中最需要认真做的是 **Review of Previous Studies、Critical Analysis、Research Gaps 和 Problem Formulation**。

---

## 4. 文献检索与批判性分析方法

### 4.1 不要漫无目的地搜索论文

老师提醒，不要一会儿搜索一个关键词、一会儿又跳到另一个完全不同的主题。这样容易积累大量文章，却无法建立清晰的研究脉络。

建议按以下路径扩展文献：

1. 先找到一篇与你的研究问题高度相关的核心论文。
2. 查看该论文作者，搜索同一作者发表的其他相关研究。
3. 查看该论文的 References，追踪它引用的早期研究。
4. 查看后续论文是否引用了这篇核心论文（向前追踪）。
5. 找到研究同一问题、使用相似方法或属于同一研究团队的论文。
6. 比较这些研究的方法、数据、结果和局限。
7. 把比较结果汇总成 Research Gap。

这就是文献追踪（Citation Tracking）的基本思路：

- **向后追踪：** 查看一篇论文引用了哪些研究。
- **向前追踪：** 查看后来有哪些论文引用了这篇论文。
- **作者追踪：** 搜索同一作者的其他相关研究。

### 4.2 每篇论文建议提取的信息

| 分析维度 | 需要回答的问题 |
|---|---|
| Research Problem | 这篇论文要解决什么问题？ |
| Domain / Context | 研究发生在哪个领域或应用场景？ |
| Dataset | 使用什么数据，数据来自哪里？ |
| Factors / Features | 使用了哪些因素、变量或特征？ |
| Method / Model | 使用什么算法、模型或技术？ |
| Evaluation | 使用什么指标或方式评估？ |
| Results | 得到了什么主要结果？ |
| Strengths | 方法或研究设计有什么优点？ |
| Limitations | 作者承认或研究中体现出什么局限？ |
| Relevance | 与自己的项目有什么关系？ |

### 4.3 什么是 Critical Analysis？

**不是：**

- Paper A 使用 Decision Tree。
- Paper B 使用 Random Forest。
- Paper C 使用 Deep Learning。

**而是要分析：**

- 为什么不同研究选择不同模型？
- 不同模型适合什么样的数据或问题？
- 模型在准确性、可解释性、稳定性、计算成本等方面有什么差异？
- 不同论文使用的数据集、特征、实验设置是否一致？
- 论文之间的结果能否直接比较？
- 研究方法有哪些优势和局限？
- 这些差异对自己的项目选择有什么启发？

老师明确指出，**对已有研究进行比较和批判性分析，是区分学生表现的重要部分**。单纯总结论文不足以体现自己的研究能力。

### 4.4 不要因为读不懂论文而焦虑

老师表示，读完一篇论文觉得理解了，换一篇又看不懂，是正常的学习过程。

建议：

- 先围绕自己的研究问题阅读，不要追求一次读懂所有内容。
- 先理解摘要、研究问题、数据、方法、结果和局限。
- 遇到不懂的算法或术语，先补充基础概念，再回到论文。
- 通过核心论文的引用关系扩展，而不是无目的地下载大量文献。
- 及时整理笔记，避免重复阅读后仍然没有形成比较结论。

---

## 5. Research Gap、Problem Statement、Research Questions 与 Objectives

### 5.1 四个概念的关系

| 概念 | 中文 | 核心问题 |
|---|---|---|
| Research Gap | 研究空白 | 现有研究还缺少什么、没有充分解决什么？ |
| Limitation | 研究局限 | 已有研究的方法、数据、范围或结果有什么限制？ |
| Problem Statement | 问题陈述 | 具体存在什么值得研究的问题？ |
| Research Question (RQ) | 研究问题 | 本项目要回答哪些问题？ |
| Project Objective (RO) | 项目目标 | 为回答这些问题，需要完成哪些任务？ |

逻辑关系：

**已有研究证据 → 发现不足/空白 → 形成 Problem Statement → 提出 RQ → 制定对应的 RO。**

### 5.2 Research Gap 不能凭空编造

Research Gap 必须从文献分析中得出，不能只因为自己想做一个 Dashboard，就反过来宣称“现有研究都没有 Dashboard”。

要先检查：

- 是否确实有相关研究？
- 已有研究解决了什么？
- 哪些方面仍未充分处理？
- 这个不足是否与自己的项目范围有关？
- 是否有多篇文献可以支持这个判断？

### 5.3 Problem Statement 应该具体

一个宽泛的领域不是一个合格的项目问题。

示例（仅用于说明逐步缩小范围）：

1. 过于宽泛：Big Data Governance（大数据治理）。
2. 缩小范围：Data Quality Management（数据质量管理）。
3. 更具体：公开数据集中的缺失值、异常值和数据一致性问题如何被识别和评估？
4. 进一步限定：针对某一具体数据集、某几项质量维度，设计并评估一套分析流程。

具体问题必须由实际文献和数据条件支持，以上只是写作示范。

### 5.4 Research Questions 与 Project Objectives 必须对齐

老师特别强调：RQ 必须映射到对应的 Project Objective。

| Research Question | 对应 Project Objective |
|---|---|
| RQ1：要回答什么问题？ | RO1：为回答 RQ1 要完成什么任务？ |
| RQ2：要回答什么问题？ | RO2：为回答 RQ2 要完成什么任务？ |
| RQ3：要回答什么问题？ | RO3：为回答 RQ3 要完成什么任务？ |

检查方法：

- 每一个 RQ 是否都有相应 RO？
- 每一个 RO 是否确实能帮助回答对应 RQ？
- 是否出现 RQ 问 A、RO 却去做 B 的情况？
- 最终项目是否真的能提供这些问题的答案？

老师提到项目目标可以设置为 3–4 个的建议，但具体数量仍应服从项目复杂度和课程要求。

---

## 6. 学生学业表现预测案例：老师课堂示范

老师用学生学业表现预测（Student Academic Performance Prediction）举例说明如何从 Research Question 推导 Project Objective。

### 6.1 课堂示范的 Research Question

**RQ：**

> What factors and machine learning approaches have been used to predict student academic performance?

中文：

> 哪些因素和机器学习方法曾被用于预测学生的学业表现？

这个问题包含两个部分：

1. **Factors：** 已有研究使用了哪些预测因素？
2. **Machine Learning Approaches：** 已有研究使用了哪些机器学习方法？

这些内容需要通过 Literature Review 找到答案，而不是凭空猜测。

### 6.2 对应的 Project Objective

**RO：**

> To identify relevant factors and machine learning approaches to predict student academic performance through a literature review.

中文：

> 通过文献综述，识别用于预测学生学业表现的相关因素和机器学习方法。

这就是老师强调的映射关系：

- RQ 问：哪些因素和机器学习方法被使用过？
- RO 做：通过文献综述识别这些因素和方法。

### 6.3 为什么 Project 1 Presentation 必须能回答？

考官可能会问：

- What factors have been used to predict student academic performance?
- What machine learning approaches have been used?

如果学生已经完成初步 Literature Review，就应该能够回答，而不是只会念出自己的研究题目。

### 6.4 模型选择与比较

如果项目主题是比较不同机器学习模型的预测表现，就需要：

1. 从文献中了解有哪些候选模型。
2. 根据数据特征和研究问题选择多个模型。
3. 使用合理、可比的实验设置进行比较。
4. 使用适当评价指标评估表现。
5. 根据实验结果判断哪个模型更适合当前项目。
6. 选择模型用于后续实现或项目应用。

课堂提到可以从文献中看到多种模型，再选择适合自己项目的模型；并不是文献中出现的每个模型都必须实现。

如果研究问题明确是“比较模型表现”，就不能只实现一个模型而没有比较。

### 6.5 一个需要区分的地方

- **Literature Review：** 了解文献中别人使用了哪些因素和模型。
- **Model Selection：** 根据自己的项目和数据选择模型。
- **Model Comparison：** 实际比较多个候选模型（仅在项目目标需要比较时）。
- **Implementation：** 将选定模型应用到自己的项目中。

---

## 7. 项目方向：预处理、模型比较或 Dashboard

老师特别提醒：不是所有 Data Science 项目都必须以模型创新或模型比较为核心。需要先确定项目的主要难点和工作量在哪里。

### 7.1 方向一：Data Pre-processing（数据预处理）

适合以下情况：

- 数据来自企业或组织内部系统。
- 数据来自多个不同来源。
- 数据字段和格式不统一。
- 缺失值、重复值、异常值较多。
- 需要进行数据整合、清洗和转换。
- 数据需要通过 Web Scraping / Crawling 获取，原始数据比较混乱。

此时，项目的主要复杂度可能在于数据收集、清洗、整合、质量控制和特征构建，而不一定是模型本身。

### 7.2 方向二：Machine Learning Model（机器学习模型）

如果数据质量较好，项目重点可以放在：

- 候选模型选择；
- 模型训练；
- 参数调整；
- 模型比较；
- 预测效果评估；
- 选出适合项目目标的模型。

### 7.3 方向三：Dashboard / Platform（仪表板或平台）

如果项目目标偏向分析结果呈现和决策支持，可以考虑：

- 数据质量指标展示；
- 缺失值比例；
- 异常数据数量；
- 不同数据源质量比较；
- 监控结果可视化；
- 交互式查询或管理界面。

老师没有要求所有人都必须开发 Dashboard。是否需要做，要看项目目标和项目类型。

### 7.4 先确定项目的主要贡献

| 项目重点 | 主要复杂度可能在哪里 | 需要展示的内容 |
|---|---|---|
| 数据预处理 | 数据来源复杂、清洗和整合困难 | 数据理解、清洗规则、处理前后对比 |
| 模型研究 | 模型选择、训练和比较 | 模型原理、实验设置、评价结果 |
| Dashboard / Platform | 系统设计、交互和展示 | 需求、系统设计、实现和测试 |
| 综合项目 | 多个环节都有工作量 | 明确主线，避免每一部分都浅尝辄止 |

老师还提到 Data Science 与 InnoCom（录音中也可能写作 INOCOM）学生的项目形式可能不同，InnoCom 项目范围可能更广，偏向系统开发等方向；老师表示还需要与 InnoCom Coordinator 进一步确认。

---

## 8. Assignment 3：Project Methodology

### 8.1 Assignment 3 的定位

老师明确表示 Assignment 3 开始进入 Project Methodology / Research Methodology（项目方法或研究方法）。

但老师也说明，当时还没有正式讲完 Methodology，仍然会继续安排 Problem Formulation 的练习，因为问题构建对 Project 1 答辩很重要。

### 8.2 研究设计的逻辑顺序

老师讲述的顺序可以整理为：

1. Problem Formulation：明确项目问题。
2. Research Questions：提出研究问题。
3. Project Objectives：制定项目目标。
4. Research / Project Design：设计项目方案。
5. Data Collection：确定数据收集方法。
6. Data Understanding / Exploration：理解和探索数据。
7. Data Processing：数据处理。
8. Model / Technique / System Development：模型、技术或系统开发。
9. Evaluation / Testing：评价和测试。
10. Findings / Expected Outcomes：整理结果或预期成果。

### 8.3 Project Methodology 与 Research Methodology

老师倾向于 Data Science 项目报告中使用 **Project Methodology** 这个名称，尤其当项目包含系统、原型或实际开发时。

在课堂早些时候，老师还提到 Data Science 项目可以根据性质使用不同设计方法。最终应按照课程模板和老师的具体要求命名章节。

---

## 9. 研究设计类型：Qualitative、Quantitative、Experimental 等

老师说明，项目不必被严格限定为某一种研究类型，要根据研究问题、数据和方法设计。

### 9.1 Qualitative Research（定性研究）

老师用访谈作为例子：

- Interview：访谈受访者。
- Transcription：将录音转成文字。
- Notes：整理访谈笔记。
- Analysis：分析访谈内容，提炼主题和观点。

适合研究人的经验、看法、态度、组织实践等。

老师认为 Data Science 学生通常主要处理数据，因此不一定会采用定性研究；但如果项目确实需要访谈，也可以考虑。

### 9.2 Quantitative Research（定量研究）

老师用问卷调查作为例子：

- 设计 Questionnaire。
- 向受访者发放问卷。
- 收集一定数量的回答，例如数百名受访者。
- 对量表答案进行统计。
- 计算各选项的数量、比例或其他统计结果。

例如 Likert Scale：

- Strongly Agree
- Agree
- Neutral
- Disagree
- Strongly Disagree

老师也提到，如果 Data Science 项目采用统计分析，也可能具有实证或定量研究特征。

### 9.3 Experimental Research（实验研究）

例如：

- 使用相同数据集；
- 设置不同实验条件；
- 运行多个模型；
- 记录实验结果；
- 使用评价指标比较表现。

模型比较是数据科学项目中可能采用的实验性设计之一。

### 9.4 Exploratory（探索性分析）

老师提到 Data Science 项目可能采用探索性分析，再进一步开展开发或实验。课堂语音没有给出完整正式定义，因此应结合实际项目设计理解。

### 9.5 研究设计对照

| 类型 | 典型数据/活动 | 示例 |
|---|---|---|
| Qualitative | 访谈、文字记录、主题分析 | 访谈数据管理人员 |
| Quantitative | 数值、问卷、统计分析 | 统计问卷回答比例 |
| Experimental | 控制实验、方法测试 | 比较不同模型 |
| Exploratory | 数据探索、模式发现 | EDA 分析数据分布和异常 |

这些方式可以根据项目需要组合。老师没有要求所有项目必须严格属于其中一种。

---

## 10. 数据来源、数据许可与项目复杂度

### 10.1 Data Science 常见数据来源

老师提到的数据来源包括：

1. Public Repository：公开数据仓库。
2. Government Open Data Portal：政府开放数据平台。
3. Organization Data：组织或企业内部数据。
4. Web Scraping / Crawling：网络爬取数据。

### 10.2 使用组织或企业数据

老师明确提醒：

- 必须先取得组织或企业许可。
- 数据可能涉及隐私、商业机密和内部安全要求。
- 组织可能有专门的数据安全和隐私审查流程。
- 可能需要签署 NDA（Non-Disclosure Agreement，保密协议）。
- 必须确认数据允许用于学术项目的范围。
- 需要确认论文、展示材料和最终报告能否公开。
- 如有要求，应进行匿名化或脱敏处理。

不能因为自己能接触企业数据，就默认可以把它用于学术项目。

### 10.3 使用 Kaggle 等公开数据集

老师指出，在线数据仓库（例如 Kaggle）的数据可能已经经过一定清洗，下载和获取比较容易。

因此，如果数据获取和预处理本身很简单，项目需要通过其他方式体现足够的工作量，例如：

- 更严谨的数据探索；
- 对多个候选模型进行比较；
- 设计合理实验；
- 进行参数优化；
- 解释模型选择；
- 对结果进行深入分析；
- 根据项目目标开发分析工具或 Dashboard。

这并不是说 Kaggle 数据一定完全干净，而是老师提醒：**不要把“下载一个现成数据集、跑一个现成模型”当成足够的项目复杂度。**

### 10.4 网络爬取或多源数据

如果数据来自爬取或多个来源，数据可能更混乱，项目复杂度可能集中在：

- 数据获取；
- 数据格式统一；
- 字段映射；
- 缺失值和重复值处理；
- 异常数据识别；
- 数据整合；
- 特征构建。

此时，Data Pre-processing 可以成为项目主要研究重点。

---

## 11. Data Science 项目实施流程与技术说明

老师提到，项目报告需要说明项目具体如何实施。对于 Data Science，常见流程可以包括：

### 11.1 Data Collection（数据收集）

说明：

- 数据来自哪里；
- 如何获取；
- 数据范围和时间范围；
- 数据量和主要字段；
- 是否需要授权；
- 是否涉及隐私或保密。

### 11.2 Data Understanding（数据理解）

说明：

- 数据结构；
- 字段含义；
- 数据类型；
- 数据分布；
- 数据质量初步情况；
- 变量之间的关系。

### 11.3 Exploratory Data Analysis（EDA，探索性数据分析）

根据项目需要展示：

- 描述性统计；
- 数据分布；
- 缺失值情况；
- 异常值情况；
- 类别分布；
- 相关性或变量关系；
- 重要发现。

老师提到 Project 1 可能需要展示 EDA 和初步发现（Initial Findings / Early Findings），具体以项目要求为准。

### 11.4 Data Processing / Cleaning（数据处理与清洗）

根据数据情况选择：

- Missing Value Handling；
- Duplicate Removal；
- Outlier Treatment；
- Data Type Conversion；
- Data Integration；
- Data Transformation；
- Text Processing；
- Feature Engineering；
- Feature Selection（如项目需要）。

不是所有项目都必须包含所有步骤。老师明确表示要根据项目类型决定，不能为了凑章节而写不必要的处理流程。

### 11.5 Model / Algorithm / Technique（模型、算法或技术）

老师提到的方法例子包括：

- Clustering（聚类）；
- Classification（分类）；
- Regression（回归）；
- Natural Language Processing（自然语言处理）；
- Sentiment Analysis（情感分析）；
- Text Processing（文本处理）；
- Machine Learning Algorithms（机器学习算法）。

如果使用聚类，需要说明采用何种聚类方法、如何确定或使用聚类数量等与项目相关的设置。

如果使用 NLP / Sentiment Analysis，需要解释文本处理步骤和所用方法。

**老师要求：** 选择与你项目有关的技术进行说明，不需要把所有算法、工具和框架都写进去。方法章节要解释主要流程和关键设置，但不必写成算法教科书。

### 11.6 Evaluation（评价方法）

需要说明：

- 评价什么对象；
- 使用什么评价指标；
- 为什么选择这些指标；
- 如何进行评价；
- 如何解释评价结果。

老师提到 Classification 和 Regression 等概念，并提醒部分学生可能不熟悉这些分析方法。具体指标要根据任务类型选择，不应在没有依据时随意套用。

### 11.7 System Design / Dashboard / Testing（系统设计、仪表板与测试）

如果项目包含系统或 Dashboard，需要说明：

- 系统或平台的设计；
- 主要功能；
- 技术实现；
- 数据或模型如何进入系统；
- 测试方法；
- 结果展示方式。

如果项目不需要 Dashboard，就不必为了模板而强行开发。

---

## 12. Project Scope 与 Project 1 答辩重点

### 12.1 Project Scope（项目范围）

老师明确说要定义 Project Scope，也就是项目边界。

至少考虑：

- 研究什么问题；
- 研究对象或应用领域；
- 使用什么数据；
- 数据的范围和限制；
- 研究哪些变量或指标；
- 采用哪些方法；
- 要开发什么成果；
- 哪些内容不属于本项目范围。

范围要足够具体、可执行。不要把整个 Big Data Governance 或整个 Machine Learning 都作为自己的项目范围。

### 12.2 Project 1 最重要的是 Why，不是先讲 How

老师反复强调，Project 1 的考官通常希望先理解：

- 你要研究什么问题？
- 这个问题为什么存在？
- 为什么值得调查？
- 现有方法有什么不足？
- 为什么需要进一步研究？

不要一开始就只说：

- 我想使用某个算法；
- 我想开发一个 Dashboard；
- 我想做一个复杂系统。

这些是可能的解决方式（How），但老师首先要知道的是问题本身（Why）。

**建议答辩逻辑：**

1. 背景：项目所在领域发生了什么？
2. 问题：具体存在什么问题？
3. 证据：文献和数据如何支持这个问题？
4. 重要性：为什么值得解决？
5. 研究空白：现有研究还缺什么？
6. 研究问题与目标：你准备回答什么、完成什么？
7. 方法概览：之后才解释计划如何开展。

### 12.3 题目不要只追求“高级”

老师提醒，好的 Project Proposal 不是简单地选择最复杂的算法、最先进的材料或最复杂的系统。

重点是：

- 项目问题真实且重要；
- 有证据说明为什么值得研究；
- 研究范围清晰；
- 方法与问题相匹配；
- 最终工作能够完成并验证。

---

## 13. Assignment 4 / Final Project Proposal 与报告结构

课堂前面还讲到 Final Project Proposal 的整合任务：

- 将 Semester 1 中 Assignment 1、2、3 的成果整合；
- 按章节组织，形成较完整的 Project Proposal；
- 前面作业中的内容可以修改、完善，不要求机械照搬；
- 研究是渐进式的（Progressive），可以根据新发现修改题目、框架或方法；
- 但重大修改应与导师/老师沟通，并说明理由。

### 13.1 可能的 Proposal 章节组织

根据课堂说明，Proposal 可按章节组织：

- Chapter 1：Introduction / Background / Problem / Research Questions / Objectives / Scope 等。
- Chapter 2：Literature Review。
- Chapter 3：Project Methodology。
- Chapter 4：Expected Outcome 或与项目阶段相符的初步分析内容。

老师提到 Project 1 可能需要进一步呈现 EDA 和初步发现；课程 Assignment 4 的 Chapter 4 则曾被描述为 Expected Outcome。两者属于不同阶段或不同任务的要求，需按正式作业说明区分。

### 13.2 Proposal 的修改原则

老师明确表示，之前 Assignment 1、2、3 中的内容不是不可更改的：

- 可以修订研究框架；
- 可以调整方法；
- 可以完善文献综述；
- 可以缩小项目范围；
- 如果发现之前的设计不合适，可以修改。

最终目标是让 Proposal 更完整、更合理，而不是为了保持旧作业内容而保留错误设计。

### 13.3 Project 1 / Project 2 与 Proposal 的区别

不要将不同阶段的报告混为一谈：

- Proposal：说明计划做什么、为什么做、准备如何做。
- Project 1：进一步细化项目计划，可能包括数据探索和初步发现。
- Project 2：进入更完整的实施、结果和最终报告阶段。

具体每个阶段的章节要求和提交方式，应以课程正式文件为准。

---

## 14. UTM Thesis Format、页数与标题要求

### 14.1 使用老师提供的 Thesis Template

老师强调：

- Assignment 报告应遵循老师上传的模板；
- Chapter 标题和页面结构应按模板设置；
- 后续 Project 1 也会继续使用相同的模板体系；
- 不要自行随意改变字体、间距和版式；
- 具体排版参数应以正式模板为准。

课堂录音有一处将学校模板听成“UCM”，但其他课堂内容提到 UTM。**请以 LMS 上实际上传的 UTM 模板为准。**

### 14.2 报告语言

老师表示可以使用 English 或 Bahasa Melayu。结合班级实际情况，课堂中老师认为大家通常使用英语。

如果课程没有另行规定，建议保持整份报告语言一致。

### 14.3 Thesis Title（论文标题）

老师提醒标题应明确表达研究内容，尽量避免过于宽泛、普通的表达，例如反复使用：

- Study of ...
- Study on ...

标题最好让读者直接看出研究对象、问题或主要工作。

示例（仅为表达方式示范）：

- 较宽泛：Study of Data Quality in Big Data Governance
- 更具体：Data Quality Assessment and Monitoring for Big Data Governance

### 14.4 老师口头提到的页数

录音及课堂整理中出现以下数字：

| 报告阶段 | 课堂中提到的页数 | 说明 |
|---|---:|---|
| Final Project Proposal / 课程 Proposal Assignment | 约 20–30 页 | 老师口头确认的范围 |
| Project 1 | 约 50–70 页 | 老师口头估计 |
| Project 2 | 最多约 100 页 | 老师口头提到的上限 |
| Master Project Report | 最多约 200 页 | 老师提到的一般报告篇幅 |

老师还说明上述页数统计包括表格、图和插图，但不包括 Bibliography / References。

**重要：** 这些数字来自课堂口头讲解，录音中有部分数字交叉和重复。不能将其视为最终官方规定，提交前应核对 LMS、正式 Thesis Guideline 和 Coordinator 的要求。

---

## 15. 论文引用、Harvard 格式与 EndNote

### 15.1 UTM 使用 Harvard Referencing

老师明确强调课程/UTM 的引用格式采用 **Harvard**，不要把数字编号式引用（例如 [1]、[2]）与 Harvard 格式混用。

常见正文格式示例（仅演示格式）：

- 作者作为句子的一部分：Smith (2023) stated that ...
- 作者放在括号中：... (Smith, 2023).
- 多位作者：Smith et al. (2023).
- 同一作者同一年多篇作品：Smith (2023a)、Smith (2023b)。

最终细节应按老师提供的 UTM Harvard 样式文件执行。

### 15.2 可以引用哪些资料？

老师强调，参考文献不只有 Journal Articles，也可以包括：

| 来源 | 可引用的情况 |
|---|---|
| Journal Article | 学术期刊论文 |
| Conference Paper | 学术会议论文 |
| Book | 专业书籍、方法论教材 |
| PhD / Master Thesis | 博士或硕士学位论文 |
| Standards | 行业或技术标准 |
| Regulations / Policies | 法规、监管要求和政策 |
| Official Reports | 政府、组织或机构正式报告 |
| Internal / Unpublished Reports | 企业内部报告或未公开材料（需遵守保密要求） |
| Newspaper Articles | 新闻报道，适合支持时事、行业背景等 |
| Magazines | 杂志资料，需评估可靠性 |
| Internet Sources | 网络资料，需审查来源可靠性和权威性 |

老师特别提醒：如果确实从前辈的硕士论文或博士论文中获取了信息，也应该正确引用该 Thesis，而不是只引用它所引用的其他文章。

对于研究方法和技术细节，通常应优先使用可靠的学术论文、专业书籍或正式标准；新闻和杂志更适合补充行业背景或当前事件。

不要把 Wikipedia 或 Google 搜索页面本身当作高质量学术参考文献。Google 可以是检索入口，但引用时要回到原始来源。

### 15.3 EndNote 的用途

老师推荐使用 EndNote 管理文献：

1. 收集并导入文献。
2. 保存作者、题目、年份、期刊、DOI 等信息。
3. 在 Word 中插入正文引用。
4. 自动生成 References。
5. 选择符合课程要求的 Harvard 样式。
6. 检查正文引用与文末参考文献是否对应。

特别要检查：

- 正文引用是否都出现在 References 中；
- References 中是否存在正文从未引用的条目；
- 作者、年份、标题和 DOI 是否准确；
- 是否有重复条目；
- 引用格式是否统一。

自动导入的信息也可能有误，必须核对原文。

---

## 16. Confidential、Restricted 与 Open Access

老师讲解了学位论文的公开访问和企业数据保密问题。

### 16.1 Open Access（开放获取）

论文可供有兴趣的读者通过图书馆等渠道查阅，作为学习和研究参考。

### 16.2 Restricted（限制公开）

老师在课堂中解释为：在规定限制期内不开放，录音中提到 **5 年后可以转为 Open Access**。

适用前提：数据提供方或组织同意在限制期结束后公开论文。

### 16.3 Confidential（机密）

如果企业明确表示数据属于 Private and Confidential，并且不允许论文公开，那么应按照学校流程申请 Confidential。

老师强调：

- 可能仍然需要向学校提交完整论文；
- 但论文不能作为普通公开论文供公众访问；
- 不应因五年期限结束就自行假定可以公开；
- 必须遵守数据提供方的授权和学校保密规定。

### 16.4 两者的核心区别

| 项目 | Restricted | Confidential |
|---|---|---|
| 含义 | 限期限制公开 | 机密，不作为普通公开论文开放 |
| 课堂中提到的期限 | 5 年 | 录音未说明统一到期时间 |
| 期限结束后 | 老师称可转为 Open Access | 不应自行假定自动公开 |
| 适用场景 | 组织允许未来公开 | 组织明确禁止公开 |

**特别注意：** 五年后自动开放是老师的课堂说明，实际执行要核对 UTM 当前政策、申请表和审批结果。

### 16.5 使用组织数据时的引用和保密

即使组织允许你使用数据，也仍需：

- 按授权要求说明数据来源；
- 如果组织要求匿名，不得披露名称；
- 不得公开个人信息或商业机密；
- 需要时签署 NDA；
- 论文的 Confidential / Restricted 分类要与组织授权一致。

**正确引用数据来源，不等于取得了公开数据的权限。**

---

## 17. 学术规范、AI 使用与项目连续性

### 17.1 学术来源与独立思考

老师提到：

- 使用 Academic Sources；
- 展示 Critical Thinking；
- 展示 Independence；
- 保持 Alignment（项目各部分逻辑一致）；
- 让研究过程和依据清晰可见。

### 17.2 使用 ChatGPT 或其他通用 AI

老师提醒，如果使用 ChatGPT AI：

- 必须检查 AI 给出的文献来源；
- 核对论文是否真实存在；
- 核对作者、年份、题目、期刊和 DOI；
- 不要直接把 AI 生成的引用当成真实来源；
- 自己要理解论文和研究方法；
- 最终分析必须体现自己的判断。

### 17.3 保持项目主题连续

老师强调各次作业应维持同一个 Project Topic。

如果有重大改变：

- 应与老师或导师讨论；
- 说明为什么要改变；
- 解释改变对问题、目标、方法和范围的影响；
- 更新相关章节，保持整个项目一致。

项目是渐进式完善的，可以修改和优化，但不能无说明地在不同作业中换成完全不同的项目。

---

## 18. 课程时间点和提交要求汇总

| 作业/事项 | 课堂中提到的要求 | 日期或篇幅 | 备注 |
|---|---|---|---|
| Assignment 1 | 研究领域、具体兴趣、暂定题目、问题、重要性、3 篇相关学术论文 | 录音提到“18号”；曾推断为 2026-11-18 | 日期需核对 LMS；下次汇报未明确要求 PPT |
| Assignment 2 | Literature Review and Problem Formulation；Chapter 2；Critical Analysis、Research Gap、Problem Formulation | 约 10 页 | 只提交 A2 内容，不重复附整份 A1 |
| Assignment 3 | Project Methodology / Research Design、数据来源、项目流程等 | 录音中提到 2026-12-22 | Methodology 后续课堂还会继续讲 |
| Assignment 4 / Final Proposal | 整合 A1、A2、A3，形成较完整 Proposal；允许持续修订 | 约 20–30 页（课堂口头信息） | 以正式作业说明为准 |
| Project 1 | 更完整的项目计划；可能需要 EDA、初步发现和答辩 | 约 50–70 页（课堂口头估计） | 重点解释问题及其重要性 |
| Project 2 | 后续项目实施/报告阶段 | 课堂提到最多约 100 页 | 具体规定待核对 |
| Master Project Report | 最终硕士项目报告 | 课堂提到最多约 200 页 | 页数口头说明，需核对正式指南 |

---

## 19. 当前可执行的待办清单

### 19.1 近期：Assignment 1

- [ ] 选定一个初步 Research Area。
- [ ] 将研究兴趣缩小到一个具体方向。
- [ ] 拟定 Proposed Research Title。
- [ ] 写清楚 Problem to Investigate。
- [ ] 解释 Why the Problem Is Important。
- [ ] 找到 3 篇高相关度 Academic Papers。
- [ ] 每篇论文记录研究问题、数据、方法、主要发现和局限。
- [ ] 准备简短口头介绍。
- [ ] 查看 LMS，确认截止日期和是否需要 PPT。

### 19.2 随后：Assignment 2

- [ ] 扩展 Literature Search。
- [ ] 用核心论文的作者、References 和引用关系继续找文献。
- [ ] 建立文献比较表。
- [ ] 比较不同论文的研究问题、数据、方法、结果和限制。
- [ ] 识别有文献依据的 Research Gaps。
- [ ] 写出具体 Problem Statement。
- [ ] 建立 Research Questions。
- [ ] 确保每个 RQ 对应一个 Project Objective。
- [ ] 按老师的 Chapter 2 模板完成报告。
- [ ] 检查 A2 只包含 A2 要求的内容。

### 19.3 后续：Assignment 3

- [ ] 确定研究设计类型。
- [ ] 确定数据来源并取得必要许可。
- [ ] 明确 Data Collection Method。
- [ ] 设计 Data Understanding 和 EDA。
- [ ] 根据数据情况设计 Pre-processing。
- [ ] 决定项目重点是预处理、模型、Dashboard 还是系统。
- [ ] 选择适当算法/技术。
- [ ] 确定评价指标和测试方法。
- [ ] 画出 Project Workflow。
- [ ] 说明系统或模型的实施步骤。

### 19.4 Proposal 与正式报告

- [ ] 下载并使用老师上传的 Thesis Template。
- [ ] 统一标题、字体、间距和章节格式。
- [ ] 准备 Declaration、Acknowledgement、Abstract（按老师当前课堂说明，最终核对模板）。
- [ ] 制作 Table of Contents。
- [ ] 如有表格，制作 List of Tables；如有图片，按模板处理 List of Figures。
- [ ] 使用 Harvard Referencing。
- [ ] 用 EndNote 管理引用。
- [ ] 核对所有参考文献真实性。
- [ ] 检查数据授权、NDA 和论文公开分类。

---

## 20. 录音中需要进一步确认的内容

以下内容不能仅凭当前录音当作最终规定：

1. **Assignment 1 的具体日期：** 录音清楚听到“18号”，但月份/最终日期需要 LMS 确认。
2. **Assignment 1 是否要 PPT：** 老师要求汇报，但没有清楚听到必须制作 PPT。
3. **Assignment 3 的具体截止时间：** 课堂转写出现 22 December；应以 LMS 为准。
4. **“P6 / PESTLE”等研究设计词：** 录音识别不清，不能确定老师具体指哪个框架。后续应结合 PPT 或下一段录音核实。
5. **UTM / UCM Thesis Format：** 录音有语音识别误差，需以 LMS 实际模板为准。
6. **报告页数：** 20–30、50–70、100、200 页是课堂口头说明，必须核对正式指南。
7. **Assignment 4 前置页面：** 老师明确提到 Declaration、Acknowledgement 和 Abstract 需要准备；Supervisor Signature 是后续 Project 2 阶段使用。其余页面应按正式模板和课程清单确认。
8. **Restricted 五年后开放：** 这是课堂讲解，实际以学校当前政策、审批和组织授权为准。
9. **InnoCom 项目类型：** 老师表示还需向 Coordinator 确认。
10. **Project 1 Presentation 形式：** 老师曾考虑视频展示等方式，但当时尚未确定。

---

## 最后：今天课程最重要的 10 条

1. A1 先明确研究领域、具体兴趣、题目、问题、重要性和相关学术论文。
2. A2 要做深入 Literature Review，不是简单罗列论文。
3. Critical Analysis 是重要评分区分点，要比较方法、数据、结果和局限。
4. Research Gap 必须由文献证据支持。
5. Research Questions 必须与 Project Objectives 对齐。
6. 项目范围要小而具体，保证能够完成。
7. Data Science 项目不一定必须做复杂模型；预处理、模型分析或 Dashboard 都可能成为重点。
8. 组织数据必须获得许可，必要时签 NDA，并明确论文公开权限。
9. Project 1 首先讲清楚 **Why this problem matters**，再讲 **How to solve it**。
10. 所有作业围绕同一个项目逐步完善；使用真实学术来源、Harvard 格式，并核查 AI 提供的引用。

> **复习时优先顺序：** 先把 A1 的研究题目和问题定下来；再把 A2 的文献比较、Research Gap、Problem Statement 做扎实；之后再根据项目重点设计 A3 Methodology。不要在问题尚未明确时就急着决定算法或开发 Dashboard。
````

# Uploaded source C --- 粘贴的文本 (1).txt (complete source text)

> Source file: `粘贴的文本 (1).txt`\
> This file contains classroom audio transcription and a structured
> Chinese explanation. It is supporting source material, not a chat
> transcript. The original extracted text is reproduced below.

``` text
正在加载更早的消息…
The different of your literature review. So for me, maybe you five literature reviews, you can search a little bit, okay, to find more problem from the method, okay, that they use to solve the project problem, okay? So this is your Assignment One. You did 18, remember? 18? When it's 18? That's around, let's say. Is it? I guess. It is 18 because we defend something similar. Okay. Project Assignment Two is to. Assignment Two, okay, you already have practiced actually on this part, okay. It's just that in more detail for your project, just. Okay, this is literature review and problem formulation. You need that from three, maybe five references. You need to find more references to understand the problem here. Just now it's more like the idea, yeah, the idea. So this one is literature review as what we did last week, okay. More detail, more detail literature review, more, yeah. You need to start finding more literature, critically, critically examine, yeah. You need to critically examine, identify research gaps or limitations, formulate a project problem that can be demonstrated selectively. This will start to. Narrow down, refine your project problem. If it's your project, you see the problem, initial, you see a problem, very broad. When it comes to this part, doing research, you can narrow down, narrow down, scope down, make it smaller. So you are not making it. So your project problem is narrow and small. If a project is actually limited information, project this, one. Okay, then you should build on the subject relevant, identified in the final one. Okay, so you go, you throw your references, okay, from this narrowed down, okay, then more, find maybe we can do, we can find related article. Let's say for your final one, the author name is ABC, then you find more article from this ABC, okay, or maybe you can go in the references, the ABC references, and you see all the related papers. Okay, this is how to do it, how to connect your references, to find similar author that perhaps same, or same with the same problem, okay, when you do research. So you go and find the author's name, and then this author's name may have more than one article. So you go and find the other article. And then see, look at who these authors cited. Before find, find the secondary literature, papers, article, another article that relates to your project. So you don't go like search here, search there, search this. Got a lot of articles, a lot of things being mentioned by article A, B, something something, and you get. You drown with the article. You just don't understand. You think you understand now, you read this article, you understand, and next article you don't understand. And you feel like, ah, too many articles, are you understanding me? Once you understand, then you don't understand. But that is normal. That is normal actually. If you say, oh, after two articles, after reading two or three articles, all, I understand. If you feel like you drown, okay, with article, meaning that that's normal. That's that you need to have to go and. And it will show you. Okay. Expand your literature search. Expand your literature search, organize and review previous study, okay? So your literature review should cover, for this, specifically chapter two lah, chapter two of your project, chapter two of your project report, okay? So you need to have introduction, project area, like project area, theoretical and conceptual background, so any conceptual method. Special learning, yeah? And you read about deep learning. Whereas you read about deep learning methods. So you need to understand how deep learning works, okay? Or you go into another method, for example, division tree, for example, yeah? Then you know how the concept of division tree works, yeah? That's that. And of course for data science, maybe you, maybe you don't have to be more specific on the domain or the stakeholder. But for data science, it's important also for you to understand the domain, as I mentioned. So you must also hear theoretical and conceptual background is to understand the domain. For example, if you do on finance, or you do something on stock market, so you need to know what does stock market prediction mean, what's happened, as a pattern, pattern, investor behavior, investor behavior that maybe will affect the stock market. You should understand that, you know, what is happening in the stock market. Same thing with education. You research something on education, so what happens in teaching and learning? What happens? They're not just teaching and learning. There are many aspects. So you must have that understanding also. Okay? So it must be explained somewhere here, not just theory, concept. Because I think it's more like PhD, PhD is theory, but... In your case, master, you don't have to go deeper on the theory. Okay? For master students, you don't need to go deeper on the theory. You understand how it works? Like, machine learning, how deep learning works. You don't need to understand the architecture, the theory. Just use it. Because you're just applying it. You're not coming with new deep learning methods. Okay? You're just applying. So just understand how it works, you understand detail on the formula, yeah? Okay, review previous study. This is needed in chapter two, yeah? Chapter two, review previous study, compare with critical analysis of the model. So this is where your marks will differentiate between more students and less. Yeah, and better. The differentiate students from other students. Completely different. That will differentiate. So this is the, this is the... these students get C. Where C? 25. C.
…
Assignment 1 & Assignment 2：文献综述与研究问题深化
这段课非常重要。老师开始详细讲解 Assignment 2（第二个作业），尤其是 Literature Review（文献综述）、Research Gap（研究空白）和 Critical Analysis（批判性分析）。

我按照老师的讲课顺序逐句翻译，并把容易混淆的地方解释清楚。

一、Assignment 1：初步文献检索
1. 不要只找论文，还要从论文中发现问题
老师：

“The different of your literature review. So for me, maybe you five literature reviews, you can search a little bit, okay, to find more problem from the method, okay, that they use to solve the project problem.”

中文翻译：

你们的文献综述需要体现不同研究之间的区别。对于第一份作业，我认为你们可以先找大约五篇文献，进行初步搜索，尝试从这些文献使用的方法中发现更多问题，了解他们是如何解决项目问题的。

大白话解释：

A1 不只是找五篇论文，然后把论文标题列出来。

你要开始观察：

别人研究了什么问题？

使用什么方法？

这些方法有什么优点？

这些方法有什么不足？

有没有尚未解决的问题？

例如，你研究 Data Quality Management（数据质量管理），可以找五篇关于数据完整性、准确性、异常检测和数据质量评估的论文。

2. Assignment 1 的截止日期
老师：

“So this is your Assignment One. You did 18, remember? 18? When it's 18? That's around, let's say. Is it? I guess. It is 18 because we defend something similar.”

中文翻译：

所以这就是你们的第一个作业。记得是18号吗？18号，对吧？大概是这个日期，我想应该是18号，因为我们之前讨论过类似的安排。

课堂记录：

暂定确认 A1 截止日期：2026年11月18日。

二、Assignment 2：Literature Review and Problem Formulation
老师：

“Project Assignment Two is to. Assignment Two, okay, you already have practiced actually on this part, okay. It's just that in more detail for your project.”

中文翻译：

接下来是第二个项目作业。实际上，你们之前已经练习过这部分内容了，只不过这次需要结合自己的研究项目，做得更加详细。

老师：

“Okay, this is literature review and problem formulation.”

中文翻译：

第二个作业的主题是：

Literature Review and Problem Formulation

中文：文献综述与研究问题构建。

大白话解释：

A1 是初步选题，A2 则是深入研究。

A1：我想研究什么？

A2：为什么这个问题值得研究？别人已经研究到什么程度？还有什么问题没有解决？我的项目应该具体解决什么？

1. A2 需要更多参考文献
老师：

“You need that from three, maybe five references. You need to find more references to understand the problem here.”

中文翻译：

你们需要从三篇、也可能是五篇参考文献开始，寻找更多相关资料，以便真正理解自己研究的问题。

老师：

“Just now it's more like the idea, yeah, the idea. So this one is literature review as what we did last week, okay. More detail, more detail literature review, more, yeah.”

中文翻译：

刚才第一份作业更多只是一个初步想法。而第二份作业就像我们上周练习的文献综述，需要更加详细、深入。

大白话解释：

这里的三至五篇是老师提到的初步参考文献数量，不一定代表 A2 最终只能引用三至五篇。

A2 的核心是：比 A1 找到更多文献，并且深入分析。

2. 必须进行 Critical Examination（批判性审查）
老师：

“You need to start finding more literature, critically, critically examine, yeah.”

中文翻译：

你们需要开始寻找更多文献，并且对这些文献进行批判性审查。

老师：

“You need to critically examine, identify research gaps or limitations, formulate a project problem that can be demonstrated selectively.”

中文翻译：

你们需要批判性地分析已有研究，找出研究空白（Research Gaps）或者研究局限性（Limitations），然后构建一个具体、能够通过研究或实际项目展示出来的问题。

三个重要术语：

英文

中文

大白话

Critical Examination

批判性审查

不只是看论文写了什么，还要判断好不好

Research Gap

研究空白

目前研究还没有解决的地方

Limitation

研究局限性

已有研究存在的不足

举例：

假设你找到三篇数据质量方面的论文：

论文A：研究数据完整性。

论文B：研究异常数据检测。

论文C：研究数据准确性。

你发现：

有些方法只关注单一的数据质量指标。

有些方法没有综合展示数据质量情况。

有些研究缺少直观的可视化结果。

那么，你就可以进一步考虑：

能否设计一个综合数据质量分析与可视化 Dashboard？

这就是从文献中发现问题，再形成自己的研究方向。

3. 研究问题必须逐步缩小范围
老师：

“This will start to. Narrow down, refine your project problem.”

中文翻译：

通过这个过程，你们需要逐渐缩小研究范围，并进一步完善自己的项目问题。

老师：

“If it's your project, you see the problem, initial, you see a problem, very broad.”

中文翻译：

当你们刚开始设计项目时，最初提出的问题通常比较宽泛。

老师：

“When it comes to this part, doing research, you can narrow down, narrow down, scope down, make it smaller.”

中文翻译：

但是，当你们真正开始开展研究之后，就需要不断缩小范围，让研究问题变得更加具体。

老师：

“So your project problem is narrow and small.”

中文翻译：

最终，你们的项目问题应该是明确、具体，而且范围适中的。

研究问题缩小的例子

第一步：过于宽泛

大数据治理（Big Data Governance）

第二步：缩小范围

大数据环境下的数据质量管理（Data Quality Management）

第三步：明确研究问题

如何利用数据完整性、异常值检测和可视化方法评估公开数据集的数据质量？

重点： 硕士研究不是研究整个大数据治理领域，而是从其中选择一个具体问题进行深入研究。

三、如何找到更多相关文献？老师教了一个非常实用的方法
1. 不要盲目地到处搜索
老师：

“Okay, then you should build on the subject relevant, identified in the final one.”

中文翻译：

接下来，你们应该围绕之前已经确定的研究主题，继续寻找相关的研究资料。

老师：

“So you go, you throw your references, okay, from this narrowed down, okay, then more, find maybe we can do, we can find related article.”

中文翻译：

当你的研究范围已经缩小之后，就可以根据这个具体方向继续寻找更多相关论文。

2. 方法一：通过作者寻找其他论文
老师：

“Let's say for your final one, the author name is ABC, then you find more article from this ABC.”

中文翻译：

例如，你找到一篇相关论文，作者叫 ABC，那么你可以继续搜索这位作者发表的其他论文。

老师：

“Or maybe you can go in the references, the ABC references, and you see all the related papers.”

中文翻译：

或者，你也可以打开 ABC 这篇论文的参考文献列表，看看里面引用了哪些相关论文。

大白话解释：

一篇有价值的论文，往往能带出更多有价值的论文。

有两个方向：

向前追踪：找这位作者后来发表的其他研究。

向后追踪：看这篇论文引用了哪些早期研究。

这就是文献追踪（Citation Tracking）。

3. 文献检索的具体方法
Literature Search 工作流程
找到一篇高相关度论文

例如：Data Quality Assessment。

查看论文作者

搜索作者发表的其他相关研究。

查看 References

阅读该论文引用的其他研究。

寻找相关作者和研究团队

找到研究相同问题或使用相似方法的论文。

比较不同论文

分析方法、数据、结果、优点和局限性。

整理 Research Gap

找出已有研究尚未解决的问题。

4. 为什么不能到处乱搜论文？
老师：

“This is how to do it, how to connect your references, to find similar author that perhaps same, or same with the same problem, okay, when you do research.”

中文翻译：

这就是你们做研究时连接不同参考文献的方法。你们可以寻找相同作者的研究，或者寻找研究相同问题的其他论文。

老师：

“So you go and find the author's name, and then this author's name may have more than one article. So you go and find the other article.”

中文翻译：

你们可以先找到论文作者的名字，然后搜索这位作者可能发表的其他文章。

老师：

“And then see, look at who these authors cited.”

中文翻译：

然后再看看这些作者引用了哪些其他研究者的论文。

老师：

“Before find, find the secondary literature, papers, article, another article that relates to your project.”

中文翻译：

通过这种方式，你们可以继续找到其他相关的二手文献、研究论文和与你们项目有关的文章。

这里老师所说的 secondary literature，具体用法要结合原始 PPT 判断，不一定是严格学术定义中的二手文献。

5. 文献太多，看不懂怎么办？
老师：

“So you don't go like search here, search there, search this. Got a lot of articles, a lot of things being mentioned by article A, B, something something, and you get.”

中文翻译：

所以你们不要一会儿在这里搜索，一会儿在那里搜索，漫无目的地找各种文章。最后找到大量论文，论文A提到一些内容，论文B又提到其他内容，结果资料越来越多。

老师：

“You drown with the article. You just don't understand.”

中文翻译：

最后你们就会被大量论文淹没，反而什么都理解不了。

老师：

“You think you understand now, you read this article, you understand, and next article you don't understand.”

中文翻译：

你可能觉得自己已经理解了，读完一篇文章感觉明白了，但是打开下一篇文章，又发现自己看不懂。

老师：

“And you feel like, ah, too many articles, are you understanding me?”

中文翻译：

然后你就会觉得，怎么有这么多文章？你们明白我的意思吗？

老师：

“Once you understand, then you don't understand.”

中文翻译：

有时候这篇文章看懂了，换一篇又不懂了。

老师：

“But that is normal. That is normal actually.”

中文翻译：

但是这很正常，这其实是一个正常的过程。

老师：

“If you say, oh, after two articles, after reading two or three articles, all, I understand.”

中文翻译：

如果你们觉得只阅读两三篇论文，就已经全部理解了……

老师：

“If you feel like you drown, okay, with article, meaning that that's normal.”

中文翻译：

如果你们感觉自己被大量论文淹没了，其实这也是正常的。

老师的真正意思：

不要因为读不懂论文就觉得自己能力不够。

硕士研究本身就是一个逐步学习的过程。你需要通过不断阅读，慢慢建立对研究领域的理解。

但也不要盲目积累论文数量。应该围绕自己的研究问题，有方向地搜索。

四、Assignment 2 的文献综述要写什么？
老师：

“Expand your literature search. Expand your literature search, organize and review previous study.”

中文翻译：

扩大你的文献检索范围，寻找更多相关研究，并且对以前的研究进行整理和综述。

老师：

“So your literature review should cover, for this, specifically chapter two lah, chapter two of your project, chapter two of your project report.”

中文翻译：

你们的文献综述应该覆盖项目报告的第二章，也就是 Chapter 2（文献综述章节）。

重点章节 Chapter 2：Literature Review

老师接下来开始讲第二章应该包含哪些内容。

1. Introduction（引言）
老师：

“So you need to have introduction.”

中文翻译：

首先，你们需要有一个引言部分。

解释：

简单介绍第二章将讨论什么，说明文献综述的研究范围和组织结构。

2. Project Area（项目领域）
老师：

“Project area, like project area.”

中文翻译：

接下来介绍你的项目所属领域，也就是 Project Area。

解释：

例如，你的研究方向是：

Big Data Governance：大数据治理。

Data Quality Management：数据质量管理。

Machine Learning：机器学习。

Data Analytics：数据分析。

你需要让读者了解自己研究的领域。

3. Theoretical and Conceptual Background（理论与概念背景）
老师：

“Theoretical and conceptual background, so any conceptual method.”

中文翻译：

然后是理论背景和概念背景，包括相关理论、概念和研究方法。

解释：

这一部分要解释你的项目涉及的核心概念。

例如：

什么是数据质量？

什么是数据完整性？

什么是数据准确性？

什么是机器学习？

你使用的方法有哪些基本原理？

4. 必须理解自己使用的技术和方法
老师：

“Especially learning, yeah? And you read about deep learning. Whereas you read about deep learning methods. So you need to understand how deep learning works, okay?”

中文翻译：

特别是当你们使用某种学习方法时，例如阅读深度学习相关文献，就必须理解深度学习方法是如何工作的。

老师：

“Or you go into another method, for example, decision tree, for example, yeah? Then you know how the concept of decision tree works.”

中文翻译：

或者你们选择其他方法，例如决策树（Decision Tree），那么就需要了解决策树的基本原理和工作方式。

大白话解释：

你用了什么技术，就必须知道它是做什么的、基本原理是什么、为什么适合你的项目。

不能只知道调用软件或者运行代码。

五、Data Science 学生必须理解研究领域（Domain）
这是老师特别强调的内容。

老师：

“And of course for data science, maybe you, maybe you don't have to be more specific on the domain or the stakeholder.”

中文翻译：

当然，对于数据科学专业的学生，你们可能不需要在研究领域或利益相关者方面做得特别深入。

这里老师并不是说 Domain 不重要，后面马上进行了强调。

老师：

“But for data science, it's important also for you to understand the domain, as I mentioned.”

中文翻译：

但是，对于数据科学学生来说，理解研究所属的领域同样非常重要，正如我之前提到的。

1. 举例：金融领域
老师：

“So you must also hear theoretical and conceptual background is to understand the domain. For example, if you do on finance, or you do something on stock market, so you need to know what does stock market prediction mean.”

中文翻译：

所以，你们在学习理论和概念背景时，也必须理解项目所属的领域。

例如，如果你研究金融，或者研究股票市场，就需要了解什么是股票市场预测。

老师：

“What's happened, as a pattern, pattern, investor behavior, investor behavior that maybe will affect the stock market.”

中文翻译：

你还需要了解股票市场中发生了什么，市场有哪些变化模式，以及投资者行为可能如何影响股票市场。

老师：

“You should understand that, you know, what is happening in the stock market.”

中文翻译：

你必须真正理解股票市场中发生的事情。

大白话解释：

如果你用机器学习预测股票价格，不能只研究机器学习算法。

你还要了解：

股票市场的基本运行方式。

股票价格受什么因素影响。

投资者行为是什么。

市场变化有哪些规律。

否则，即使模型运行成功，也可能不理解预测结果为什么会出现。

2. 举例：教育领域
老师：

“Same thing with education. You research something on education, so what happens in teaching and learning?”

中文翻译：

教育领域也是一样。如果你研究教育，就必须了解教学和学习过程中发生了什么。

老师：

“What happens? They're not just teaching and learning. There are many aspects.”

中文翻译：

你需要了解教育领域的实际情况，因为教学和学习并不只是简单的教与学，它还涉及很多其他方面。

老师：

“So you must have that understanding also.”

中文翻译：

因此，你们也必须具备对这些领域的基本理解。

老师：

“Okay? So it must be explained somewhere here, not just theory, concept.”

中文翻译：

明白吗？这些领域背景也必须在报告中某个部分得到解释，而不能只介绍理论和概念。

Data Science 特别要求
Data Science = 算法知识 + 数据分析 + 领域知识（Domain Knowledge）。

不能只会使用模型，还必须理解模型所应用的真实业务场景。

六、硕士生不需要像博士生一样深入研究理论
老师：

“Because I think it's more like PhD, PhD is theory, but...”

中文翻译：

因为我认为，深入研究理论可能更接近博士阶段的研究要求。博士研究通常会更加关注理论层面的内容。

老师：

“In your case, master, you don't have to go deeper on the theory.”

中文翻译：

但是，对于你们硕士阶段的学生来说，不需要在理论方面研究得那么深入。

老师：

“Okay? For master students, you don't need to go deeper on the theory.”

中文翻译：

对于硕士生来说，不需要对底层理论进行过于深入的研究。

举例：Machine Learning 和 Deep Learning
老师：

“You understand how it works? Like, machine learning, how deep learning works.”

中文翻译：

你们只需要理解它是如何工作的，例如机器学习和深度学习的基本工作原理。

老师：

“You don't need to understand the architecture, the theory. Just use it.”

中文翻译：

你们不需要深入研究它的底层架构和复杂理论，理解基本原理并能够正确使用它就可以了。

老师：

“Because you're just applying it. You're not coming with new deep learning methods.”

中文翻译：

因为你们只是应用现有的方法，并不是要提出一种全新的深度学习方法。

老师：

“So just understand how it works, you understand detail on the formula, yeah?”

中文翻译：

所以，你们只需要理解它的工作原理，以及相关公式的具体含义即可。

大白话解释：

老师是在区分硕士和博士的研究深度：

研究内容

硕士 Master

博士 PhD

使用机器学习

需要

需要

理解算法原理

需要

需要

理解基本公式

需要

需要

深入研究底层架构

不一定需要

通常需要

提出全新算法

通常不要求

可能需要

应用现有方法解决实际问题

核心要求

也可能涉及

对你的启发：

如果你做大数据治理，不需要自己发明一种全新的数据治理算法。

你可以使用现有的数据质量评估方法、统计分析方法和可视化技术，重点放在：

为什么选择这些方法？

为什么这些方法适合你的数据？

它们能解决什么实际问题？

最终分析结果有什么价值？

七、Chapter 2 最重要的评分部分：Review Previous Studies
老师：

“Okay, review previous study. This is needed in chapter two, yeah?”

中文翻译：

接下来是回顾以前的研究。这部分是 Chapter 2（第二章）必须包含的内容。

老师：

“Chapter two, review previous study, compare with critical analysis of the model.”

中文翻译：

在第二章中，你们需要回顾以前的研究，并且对不同研究使用的模型进行比较和批判性分析。

大白话解释：

不能只写：

论文A用了机器学习。

论文B用了决策树。

论文C用了深度学习。

而是要比较：

为什么论文A选择机器学习？

论文B的方法有什么优势？

论文C的模型有什么局限？

哪一种方法更适合你的研究？

现有研究还留下了什么问题？

例如：

比较内容

论文A

论文B

论文C

研究方法

决策树

随机森林

深度学习

研究目的

数据分类

异常检测

模式识别

优点

容易理解

稳定性较好

处理复杂模式

局限

容易过拟合

可解释性较弱

计算成本较高

注意：这是比较分析的示例，不是实际论文的研究结果。

老师特别强调：这里决定学生之间的成绩差距
老师：

“So this is where your marks will differentiate between more students and less. Yeah, and better.”

中文翻译：

这部分就是决定你们成绩差距的地方，也是区分表现较好和表现较差学生的关键。

老师：

“The differentiate students from other students. Completely different. That will differentiate.”

中文翻译：

它能够让你们的表现与其他学生明显区分开来。

老师：

“So this is the, this is the... these students get C. Where C? 25. C.”

中文翻译：

这里老师开始提到成绩等级 C 和数字25，但录音在这里中断，暂时无法确定他具体是在说明评分标准还是举例说明。

八、今天这段课最重要的知识整理
Assignment 1 与 Assignment 2 对比
内容

A1

A2

研究主题

初步确定

进一步细化

文献数量

约5篇初步参考

扩大文献范围

文献分析

初步了解

批判性分析

研究问题

初步提出

缩小并完善

Research Gap

初步发现

深入识别

研究方法

初步考虑

比较和论证

A1：回答三个问题

我想研究什么？

为什么想研究这个？

有哪些文献可以支持我的想法？

A2：回答五个问题

以前的研究做了什么？

以前的研究用了什么方法？

这些方法有什么优缺点？

现有研究还有什么不足？

我的项目具体准备解决什么问题？

九、Chapter 2 建议采用的报告结构
这是根据老师讲课内容整理的参考结构，后续以正式模板为准。

章节

内容

2.1 Introduction

文献综述引言

2.2 Project Area

研究领域介绍

2.3 Theoretical Background

理论背景

2.4 Conceptual Background

核心概念

2.5 Methodological Background

研究方法与技术原理

2.6 Review of Previous Studies

以前研究的综述

2.7 Critical Analysis

不同研究方法的比较分析

2.8 Research Gaps and Limitations

研究空白与局限性

2.9 Problem Formulation

研究问题构建

2.10 Summary

本章总结

十、结合你的大数据治理方向，特别提醒
老师这节课实际上告诉了你一个非常重要的硕士研究思路：

不要为了使用机器学习而使用机器学习，而是先找到真实的数据治理问题，再选择合适的方法。

例如，你可以按照下面的逻辑开展研究：

你的潜在研究思路
研究领域： Big Data Governance

具体方向： Data Quality Management

研究问题： 现有数据质量评估方法是否能够全面识别数据质量问题？

文献研究： 查找数据完整性、准确性、一致性和异常检测相关论文。

批判性分析： 比较不同方法的指标、适用条件和局限性。

Research Gap： 找到现有方法尚未充分解决的问题。

项目成果： 数据质量分析与可视化 Dashboard。

最后记住老师这节课最重要的三句话：

Literature Review 不是简单地总结论文，而是要比较和批判性分析。

Research Gap 是你提出自己项目问题的重要依据。

硕士项目重点是应用已有方法解决真实问题，不是发明全新的算法。

这部分尤其是 Critical Analysis，老师已经明确表示是区分学生成绩的重要部分，后面做 A2 时一定要认真对待。

Learning about finance, learning about stock market, learning about obligation, healthcare. That is easy, but when it comes to comparing the methods, similarity of one of the models, the methods they use. They study the literature and they come up with a result by doing analysis. That will make different. That will make students different from today. Summary literature review, identify, this also in the intro, identify gaps. Getting in last week, yeah, we did exercise on the limitation, this, the process. All these, you need to critically study lah, your literature. And then develop your problem statement. What is the issue? So you need to come up with this problem formulation. Formulate problem after the question, this one also. One thing that I want to make sure that you understand is your research question must align with your this, the project objective. This one is project question. It might be aligner with each other. For example, we do a comparative evaluation of machinery and hospital. Your question: what factors and machinery approaches have been used to predict.
一、逐句翻译与解释
1. 理解研究领域并不难，难的是比较研究方法
老师：

“Learning about finance, learning about stock market, learning about obligation, healthcare.”

中文翻译：

了解金融、股票市场、债券以及医疗保健等领域的基本知识。

这里的 obligation 可能是老师说的 obligations（债务或义务），具体需要结合 PPT 确认。

老师：

“That is easy, but when it comes to comparing the methods, similarity of one of the models, the methods they use.”

中文翻译：

这些领域知识本身并不难，但是当你们开始比较不同的研究方法、不同模型之间的相似之处，以及研究者所使用的方法时，难度就增加了。

大白话解释：

老师认为，知道一个领域是什么并不难，真正考验研究能力的是：
```

# Uploaded source D --- UTM今日课程完整详细笔记_完整版.txt (complete source text)

> Source file: `UTM今日课程完整详细笔记_完整版.txt`\
> This is a supporting course-notes document, not a verbatim chat
> transcript. The original extracted text is reproduced below.

```` text
# 今日课程完整详细笔记
## UTM 硕士项目课程｜Assignment 1–4、Project 1/2、Proposal、Methodology、Literature Review 与论文规范

> **文档用途：** 完整备份今日课堂录音内容，作为后续 Assignment、Project Proposal、Project 1/2 和论文写作的长期参考。  
> **整理方式：** 按课堂主题重新组织，而不是简单按录音先后堆叠。每个主题尽量包含：老师讲了什么、中文解释、实际要做什么、示例、容易混淆的地方。  
> **资料边界：** 本文以本次对话中提供的课堂录音转写为基础。凡是老师明确说出的要求，与为了便于理解而补充的写作建议，会尽量分开标注。录音识别不清、老师尚未决定、日期或数字可能有误的内容，会标注“待确认”。  
> **重要提醒：** 本文不是学校正式课程手册。最终提交要求、截止日期、页数、模板和保密分类，应以 LMS、课程 Coordinator、Supervisor 及 UTM 最新正式文件为准。

---

# 目录

1. 今日课程的整体逻辑与核心结论
2. Assignment 1：研究领域、研究兴趣与初步选题
3. Assignment 1 下次汇报：老师究竟要看什么
4. Assignment 2：Literature Review and Problem Formulation
5. Literature Search：如何系统地寻找和扩展文献
6. Critical Analysis：怎样真正比较和批判已有研究
7. Chapter 2：Literature Review 应该写什么
8. Domain Knowledge：数据科学学生也必须理解应用领域
9. 硕士与博士研究深度的区别
10. Research Gap、Limitation 与 Problem Statement
11. Research Question 与 Project Objective：必须逐项对应
12. 课堂示例：Student Academic Performance Prediction
13. 模型选择、模型比较与最终模型实施
14. 项目重点可以是预处理、模型、Dashboard 或系统
15. Project Scope：明确项目边界
16. Assignment 3：Project Methodology / Research Design
17. 定性、定量、实验、探索性与设计型项目
18. 数据来源、数据许可、NDA 与数据复杂度
19. Data Science 项目的完整实施流程
20. 算法、工具、框架和评价方法应该写到什么程度
21. Assignment 4 / Final Project Proposal：如何整合前面作业
22. Project 1：研究计划、初步分析和答辩重点
23. Project 2 与最终项目报告：阶段区别
24. 报告章节、模板和前置页面
25. Thesis Title：研究题目如何写
26. 报告页数、排版与语言
27. Harvard Referencing：正文引用和文末参考文献
28. EndNote：文献管理与交叉核对
29. 可引用的资料类型及其适用范围
30. Open Access、Restricted 与 Confidential
31. Academic Integrity：学术来源、批判性思维与 AI 使用
32. 项目连续性、修改原则与沟通要求
33. 所有作业之间的关系总表
34. 课堂日期、分数、页数及尚待核实的信息
35. 可直接使用的作业准备模板
36. 现在开始应该做什么：分阶段行动清单
37. 最重要的课堂结论

---

# 1. 今日课程的整体逻辑与核心结论

今天老师讲的内容涉及从“选题”到“研究计划”，再到后续项目实施和正式论文写作的一整套过程。不要把它理解成几个互不相关的 Assignment。它们是逐步推进的。

## 1.1 一条完整的项目逻辑链

**Research Area → Specific Research Interest → Proposed Title → Problem Identification → Literature Review → Critical Analysis → Research Gap / Limitation → Problem Statement → Research Questions → Project Objectives → Project Scope → Project Methodology → Data Collection → Data Understanding / EDA → Data Processing → Model / System Development → Evaluation / Testing → Findings / Expected Outcomes。**

对应中文：

1. 研究领域：你属于哪个大方向？
2. 具体研究兴趣：你真正想研究该领域中的哪一个问题？
3. 暂定题目：用一句话表达研究内容。
4. 问题识别：现实或已有研究中存在什么问题？
5. 文献综述：别人已经研究了什么？
6. 批判性分析：不同研究的方法、数据和结果有什么区别？
7. 研究空白/局限：现有研究还缺少什么或有什么限制？
8. 问题陈述：把问题写成具体、可研究的内容。
9. 研究问题：本项目最终要回答什么？
10. 项目目标：为了回答问题，需要完成哪些任务？
11. 项目范围：明确研究边界。
12. 项目方法：决定怎样完成任务。
13. 数据收集：从哪里取得数据？
14. 数据理解与探索：数据长什么样，有什么特点？
15. 数据处理：需要怎样清洗、整合或转换？
16. 模型/系统开发：采用什么方法或实现什么系统？
17. 评价与测试：怎样判断结果是否有效？
18. 结果/预期成果：最后交付什么、发现什么？

## 1.2 老师今天反复强调的原则

### 原则一：先有问题，再选择技术

老师并不希望学生一开始就说“我要使用某个高级算法”或“我要开发一个复杂 Dashboard”。首先要说明为什么存在这个问题，为什么值得研究。

### 原则二：文献综述不是论文摘要的集合

要比较不同论文的研究问题、数据、方法、实验设置、结果和局限性。老师明确表示，Review Previous Studies 和 Critical Analysis 是拉开学生成绩差距的重要部分。

### 原则三：研究范围要逐步缩小

最初的研究兴趣可以比较宽泛，但随着文献阅读，必须缩小到一个具体、能够在硕士项目时间和资源范围内完成的问题。

### 原则四：RQ 与 Objective 必须对应

Research Question 问什么，Project Objective 就要说明为了回答这个问题要完成什么任务。两者不能各写各的。

### 原则五：项目复杂度来自真实工作，不是术语堆砌

数据预处理、模型比较、系统开发、Dashboard、数据整合都可能成为项目重点。选择哪一种，要看研究问题、数据和项目成果。

### 原则六：项目是渐进式的，可以持续修订

Assignment 1、2、3 中形成的内容可以在 Final Proposal 阶段继续修改。不要因为已经交过前一份作业，就认为题目、框架和方法永远不能调整。

---

# 2. Assignment 1：研究领域、研究兴趣与初步选题

## 2.1 Assignment 1 的目的

老师希望通过 Assignment 1 了解每位学生想做什么项目，确认学生的研究兴趣和初步研究方向。

Assignment 1 不是完整的研究计划，也不是要求学生已经完成数据收集、模型训练或系统开发。它的重点是：

- 你想研究哪个领域？
- 这个领域中你对什么具体问题感兴趣？
- 你暂时打算使用什么题目？
- 你想调查的问题是什么？
- 为什么这个问题值得研究？
- 哪些学术论文让你开始关注这个问题？

## 2.2 Research Area 与 Specific Research Interest 的区别

| 名称 | 中文 | 例子 | 说明 |
|---|---|---|---|
| Research Area | 研究领域 | Data Science | 非常大的领域 |
| Project / Research Area | 项目所属方向 | Big Data Governance | 比较具体的领域 |
| Specific Research Interest | 具体研究兴趣 | Data Quality Management | 进一步聚焦 |
| Specific Problem | 具体问题 | 多源数据质量不一致，难以统一监控 | 可以继续形成问题陈述 |
| Proposed Research Title | 暂定题目 | Data Quality Assessment and Monitoring... | 用标题表达项目方向 |

不要把 Research Area 和最终 Research Title 混为一谈。研究领域可以宽，但项目问题必须逐步具体。

## 2.3 老师要求准备的六项内容

根据录音，老师希望下次汇报时了解：

1. **Research Area / Project Area**：研究领域或项目领域。
2. **Specific Research Interest**：具体研究兴趣。
3. **Proposed Research Title**：拟定研究题目。
4. **The Problem You Want to Investigate**：你想调查或研究的问题。
5. **Why Is This Problem Important?**：为什么这个问题重要。
6. **Three Relevant Academic Papers**：三篇相关学术论文，以及它们如何启发你形成题目或理解问题。

老师明确说，这次暂时**不需要完整讲 Aims and Objectives**。他当前主要想知道学生的兴趣和问题方向。

## 2.4 三篇论文应该怎样准备

不要只列出三篇论文的标题。每篇至少准备以下信息：

- 论文标题、作者、年份；
- 研究领域和背景；
- 研究问题；
- 使用的数据或研究对象；
- 使用的方法；
- 主要发现；
- 作者提到的限制，或你读完后发现的不足；
- 这篇论文与你的拟定题目有什么关系。

老师说三篇论文是用来 motivate（启发）你形成题目，或帮助你了解相关问题。

## 2.5 A1 汇报模板

```text
1. Research Area
   我属于哪个研究领域？

2. Specific Research Interest
   我真正感兴趣的具体方向是什么？

3. Proposed Research Title
   我的暂定题目是什么？

4. Problem to Investigate
   我想研究什么具体问题？

5. Why Is This Problem Important?
   为什么这个问题值得研究？
   对实际应用、组织、行业或学术研究有什么意义？

6. Three Relevant Academic Papers
   Paper 1:
   - Title / Author / Year:
   - Research problem:
   - Data / Method:
   - Main finding:
   - Limitation / Relevance to my idea:

   Paper 2:
   - Title / Author / Year:
   - Research problem:
   - Data / Method:
   - Main finding:
   - Limitation / Relevance to my idea:

   Paper 3:
   - Title / Author / Year:
   - Research problem:
   - Data / Method:
   - Main finding:
   - Limitation / Relevance to my idea:
```

## 2.6 下次汇报是否必须做 PPT？

录音中老师说希望下周听学生介绍题目、研究兴趣和想法，但没有清楚听到“必须提交 PPT”的明确指令。课堂中也有人讨论老师并没有明确要求 PPT。

因此，当前应准备好口头介绍和必要的文字材料。是否制作 PPT，等 LMS 或老师进一步通知，不要自行把“汇报”理解成“必须做 PPT”。

## 2.7 A1 截止日期

录音中出现“18号”，但月份、最终确认情况并不完全清楚。此前整理曾推断为 2026 年 11 月 18 日。**此日期需要在 LMS 或老师公告中核实。**

---

# 3. Assignment 1 下次汇报：老师究竟要看什么

老师不是要学生现在就拿出完整解决方案，而是想判断学生是否有一个值得继续发展的项目想法。

## 3.1 老师最可能关注的几个问题

- 你的研究方向是什么？
- 你的兴趣是否足够具体？
- 你提出的题目是否能够体现研究内容？
- 你发现的问题到底是什么？
- 为什么这个问题重要？
- 你是否读过相关学术论文？
- 这些论文是否真的支持你的研究兴趣？

## 3.2 “问题”与“解决方案”不要混在一起

例如：

**只说解决方案：**
- 我想做一个 Dashboard。
- 我想使用 Random Forest。
- 我想开发一个平台。

这些说法没有说明为什么需要做。

**先说明问题：**
- 现有数据质量检查分散在不同环节，缺少统一的评估和监控方式。
- 某些数据来源存在缺失、重复或格式不一致的问题。
- 使用者难以快速识别数据质量变化。

之后再说明可能的解决方向：
- 通过数据质量指标进行评估；
- 使用自动化处理方法识别问题；
- 通过 Dashboard 展示结果。

以上仅是表达逻辑的示例，不代表老师已经确认某个具体项目题目或 Research Gap。

---

# 4. Assignment 2：Literature Review and Problem Formulation

## 4.1 Assignment 2 的主题

老师明确说 Assignment 2 是：

**Literature Review and Problem Formulation（文献综述与问题构建）。**

学生之前已经练习过相关内容，但这一次需要结合自己的项目，做得更具体、更深入。

## 4.2 A1 与 A2 的区别

| 比较点 | Assignment 1 | Assignment 2 |
|---|---|---|
| 主要任务 | 初步确定兴趣和题目 | 深入理解研究问题 |
| 文献数量 | 先找约 3–5 篇/约 5 篇作为起点 | 继续扩大文献范围 |
| 阅读目的 | 判断方向是否值得继续 | 理解已有研究并发现不足 |
| 分析深度 | 初步了解 | Critical Examination |
| 研究范围 | 可以比较宽 | 必须逐步缩小 |
| Research Gap | 初步注意 | 根据文献证据识别 |
| Problem Formulation | 初步想法 | 形成具体项目问题 |
| 结果 | 研究方向和初步题目 | 更完整的 Chapter 2 内容 |

## 4.3 A2 需要做的工作

老师要求学生：

1. 找到更多相关 Literature。
2. 对已有研究进行 Critical Examination。
3. 识别 Research Gaps 或 Limitations。
4. 根据文献结果 Narrow Down / Refine Project Problem。
5. 形成一个具体、能够通过项目展示或研究的问题。
6. 把文献综述组织成 Project Report 的 Chapter 2。

老师提到三至五篇参考文献作为进一步理解问题的起点，但这不代表 A2 最终只能引用三至五篇。

## 4.4 Assignment 2 只提交本次作业要求的部分

老师特别说明 Assignment 2 的提交只包括 Assignment 2，不要把 Assignment 1 的整份内容重复附进去。

前面 A1 的研究方向和文献可以继续沿用，但 A2 应该是进一步深化后的新内容。

## 4.5 A2 的篇幅

课堂中提到 Chapter 2 / Assignment 2 约 10 页。该数字属于课堂口头说明，最终按正式 Assignment Guideline 为准。

---

# 5. Literature Search：如何系统地寻找和扩展文献

## 5.1 不要漫无目的地搜索

老师描述了一种常见问题：学生到处搜索，下载大量论文，A 文章引用 B 文章，B 文章又提到 C 文章，最后资料越积越多，却不知道自己真正要研究什么。

老师也说，读一篇感觉懂了，换一篇又不懂，这是正常的。重要的是有方向地阅读，不要无目标地积累文章。

## 5.2 以一篇高相关度论文为起点

老师讲了通过作者和引用关系扩展文献的方法。

### 路径 A：向后追踪（Backward Citation Tracking）

打开核心论文的 References：

1. 看它引用了哪些研究；
2. 找出与自己研究问题高度相关的文章；
3. 阅读这些文章；
4. 看它们如何定义问题、使用方法和评价结果；
5. 进一步追踪更早的基础研究。

### 路径 B：向前追踪（Forward Citation Tracking）

查找后来引用该核心论文的文章：

1. 找到后续研究；
2. 看其他研究者如何使用、扩展或质疑原研究；
3. 判断该研究方法后来是否被改进；
4. 观察该领域是否出现新的数据、技术或应用场景。

### 路径 C：作者追踪（Author Tracking）

老师举例说，如果一篇相关论文的作者叫 ABC，可以继续搜索 ABC 发表的其他文章。

重点不是只搜作者，而是判断同一作者是否持续研究相同或相关问题。

## 5.3 形成文献网络

推荐按以下步骤做：

1. 找到 1–2 篇核心论文；
2. 记录核心论文作者；
3. 阅读核心论文 References；
4. 搜索后续引用该论文的研究；
5. 搜索同一研究团队的相关论文；
6. 找出研究同一个问题的其他团队；
7. 将论文放入同一个主题类别；
8. 比较研究问题、数据、方法和结果；
9. 总结仍未解决的问题。

## 5.4 文献检索记录表

| 字段 | 记录内容 |
|---|---|
| Paper ID | 自己编号 |
| Title | 论文标题 |
| Author / Year | 作者和年份 |
| Journal / Conference | 期刊或会议 |
| DOI / URL | 原始出处 |
| Research Domain | 研究领域 |
| Research Problem | 研究问题 |
| Dataset | 数据集和来源 |
| Factors / Features | 使用的变量或特征 |
| Method / Model | 方法或模型 |
| Evaluation | 评价方式 |
| Main Findings | 主要发现 |
| Strengths | 优点 |
| Limitations | 局限 |
| Research Gap Relevance | 对自己研究空白的启发 |

## 5.5 如何判断一篇论文是否值得纳入

建议优先保留：

- 与自己的研究问题直接相关；
- 研究方法或数据具有参考价值；
- 来自可信期刊、会议、出版社或正式机构；
- 能够提供明确的结果或局限；
- 能帮助你解释项目背景或技术原理。

不要因为一篇文章标题里有 Machine Learning 就把它全部纳入。相关性比数量更重要。

---

# 6. Critical Analysis：怎样真正比较和批判已有研究

## 6.1 老师为什么反复强调 Critical Analysis？

老师明确说，Review Previous Studies 和模型比较是区分学生成绩的重要部分。只总结文章内容，不能体现学生是否真正理解已有研究。

## 6.2 描述性综述与批判性分析的区别

### 仅仅描述（不够）

- Paper A 使用 Decision Tree。
- Paper B 使用 Random Forest。
- Paper C 使用 Deep Learning。

这只是列举事实。

### 批判性分析（需要做到）

- 三篇研究解决的问题是否相同？
- 它们使用的数据是否相同或具有可比性？
- 数据规模和数据质量是否不同？
- 模型选择是否有充分理由？
- 实验设置是否公平？
- 使用的评价指标是否一致？
- 结果能否直接比较？
- 哪种方法在什么场景下更适用？
- 每篇研究有哪些局限？
- 这些局限是否构成自己项目可以研究的问题？

## 6.3 文献比较矩阵

| 比较维度 | Study A | Study B | Study C | 综合分析 |
|---|---|---|---|---|
| Research Problem |  |  |  | 问题是否相同？ |
| Domain |  |  |  | 应用场景是否相同？ |
| Dataset |  |  |  | 数据是否可比？ |
| Sample Size |  |  |  | 样本量差异是否影响结果？ |
| Features |  |  |  | 使用变量是否相同？ |
| Model |  |  |  | 模型选择有何差异？ |
| Evaluation |  |  |  | 指标是否一致？ |
| Findings |  |  |  | 结果是否一致？ |
| Strengths |  |  |  | 各自优势是什么？ |
| Limitations |  |  |  | 还存在哪些不足？ |

## 6.4 不要把不同条件下的准确率直接比较

如果两篇论文使用不同数据集、不同训练测试划分、不同类别比例和不同评价指标，不能只因为某篇 Accuracy 更高，就说它的模型一定更好。

需要先分析比较条件是否一致。这是对老师“compare with critical analysis”的实际落实。

## 6.5 从比较中形成自己的判断

好的文献综述最终要形成综合判断，而不是每篇论文各写一段后就结束。

例如可以这样组织：

- 现有研究主要采用哪些方法；
- 不同方法分别适合什么问题；
- 研究结果在哪些方面一致；
- 哪些结果存在差异；
- 差异可能来自哪些数据或实验设置；
- 现有研究有哪些共同限制；
- 自己的项目准备在哪个具体范围内继续研究。

---

# 7. Chapter 2：Literature Review 应该写什么

老师提到 Chapter 2 应包含 Introduction、Project Area、Theoretical and Conceptual Background、Previous Studies 等内容。

## 7.1 Introduction

说明本章的目的和组织方式：

- 本章讨论什么研究领域；
- 将回顾哪些理论、概念或技术；
- 将分析哪些类型的已有研究；
- 最后如何引出 Research Gap 和 Problem Formulation。

## 7.2 Project Area / Domain Background

介绍项目所在领域，而不是只介绍算法。

例如：

- Finance：金融；
- Stock Market：股票市场；
- Education：教育；
- Healthcare：医疗；
- Big Data Governance：大数据治理；
- Data Quality Management：数据质量管理。

老师用金融和教育举例，说明做预测项目时必须理解应用场景。

## 7.3 Theoretical Background

介绍与项目有关的基本理论和原理。

老师特别说明：硕士生通常不需要像博士生一样深入研究底层理论，但需要理解自己使用的方法如何工作。

## 7.4 Conceptual Background

解释关键概念，例如：

- Data Quality；
- Data Completeness；
- Data Accuracy；
- Data Consistency；
- Machine Learning；
- Classification；
- Regression；
- Prediction；
- Dashboard；
- Data Governance。

具体概念应根据自己的项目选择，不需要全部写。

## 7.5 Methodological / Technical Background

如果使用 Deep Learning、Decision Tree、Clustering、NLP 等方法，需要解释：

- 方法是什么；
- 基本原理是什么；
- 输入和输出是什么；
- 适合解决什么类型的问题；
- 为什么可能适合本项目。

不需要为了显示技术深度而大段复制算法公式。

## 7.6 Review of Previous Studies

这一部分需要整理已有研究：

- 研究问题；
- 数据来源；
- 研究对象；
- 变量或特征；
- 方法；
- 评价方式；
- 主要发现；
- 局限。

## 7.7 Critical Analysis

横向比较研究，而不是一篇论文一段摘要。

## 7.8 Research Gap / Limitations

说明通过文献分析发现的不足。需要有证据，不能凭空宣称“没有人做过”。

## 7.9 Problem Formulation

把文献发现转化为自己的具体项目问题。

## 7.10 Chapter Summary

总结本章讨论了什么，以及如何引出下一章或后续项目设计。

### 参考目录（供组织内容使用，正式标题以模板为准）

```text
CHAPTER 2: LITERATURE REVIEW

2.1 Introduction
2.2 Project Area / Domain Background
2.3 Theoretical Background
2.4 Conceptual Background
2.5 Relevant Technologies and Methods
2.6 Review of Previous Studies
2.7 Comparative and Critical Analysis
2.8 Research Gaps and Limitations
2.9 Problem Formulation
2.10 Chapter Summary
```

---

# 8. Domain Knowledge：数据科学学生也必须理解应用领域

## 8.1 老师的重点

老师说，Data Science 学生除了理解技术，还必须理解项目所在的 Domain（领域）。

不能只知道模型怎么运行，却不知道预测对象或业务场景是什么。

## 8.2 金融领域示例

如果研究 Stock Market Prediction（股票市场预测），就需要理解：

- 股票市场预测是什么意思；
- 股票价格和市场变化有哪些特征；
- 投资者行为可能如何影响市场；
- 市场数据有哪些模式；
- 研究使用的变量代表什么。

## 8.3 教育领域示例

如果研究 Education / Student Performance Prediction，就需要理解：

- 教学与学习过程；
- 学生学业表现的定义；
- 学业表现可能涉及哪些因素；
- 数据中的变量如何对应真实教育情境；
- 预测结果可能如何被使用。

老师提醒，教育不只是“教学和学习”两个词，背后还有很多具体因素和情境。

## 8.4 硕士项目中的领域理解应达到什么程度？

不要求成为金融、教育或医疗领域的专家，但至少应能解释：

- 研究对象是什么；
- 主要概念是什么；
- 为什么这个问题在该领域有意义；
- 数据字段代表什么；
- 结果如何解释；
- 技术方法与领域问题有什么联系。

---

# 9. 硕士与博士研究深度的区别

老师表示，硕士学生通常是在应用现有方法解决项目问题，不一定需要提出新的深度学习方法。

## 9.1 硕士阶段需要掌握

- 了解所用技术的基本原理；
- 知道方法如何工作；
- 理解关键公式或参数的含义；
- 能解释为什么选择这个方法；
- 能正确应用并评估方法；
- 能解释结果和限制。

## 9.2 不一定要求做到

- 发明新的机器学习算法；
- 从数学层面重新推导全部底层理论；
- 提出全新的深度学习架构；
- 对算法理论进行博士级别的创新研究。

这并不表示可以完全不懂原理。老师的意思是研究深度要与硕士项目的目标相匹配。

---

# 10. Research Gap、Limitation 与 Problem Statement

## 10.1 三者的区别

| 术语 | 含义 | 应回答的问题 |
|---|---|---|
| Research Gap | 研究空白 | 现有研究还没有充分覆盖什么？ |
| Limitation | 研究局限 | 已有研究受什么限制？ |
| Problem Statement | 问题陈述 | 本项目要解决或调查的具体问题是什么？ |

## 10.2 Research Gap 的证据来源

可能来自：

- 多篇研究都没有处理某一类数据；
- 某些方法只在有限场景中测试；
- 评价指标不全面；
- 数据集或样本存在限制；
- 研究结果在不同场景下不一致；
- 现有系统缺少某项功能；
- 某个应用领域仍缺少足够的实证研究。

这些只是可能的 Gap 类型。具体能否成立，必须通过文献确认。

## 10.3 Problem Statement 的构建顺序

1. 说明应用背景；
2. 说明现实或研究中的问题；
3. 提供文献证据；
4. 说明已有研究做了什么；
5. 说明还存在什么不足；
6. 说明这个不足为什么重要；
7. 限定本项目要处理的具体问题。

## 10.4 问题陈述常见错误

- 只写“机器学习很重要”；
- 只写“数据量越来越大”；
- 只说“我想做一个系统”；
- 只说“现有方法不好”，但没有文献证据；
- 把整个领域的问题都作为自己的项目；
- 直接写解决方案，却没有说明问题为什么存在。

---

# 11. Research Question 与 Project Objective：必须逐项对应

## 11.1 两个概念的作用

**Research Question（RQ）：** 项目最终要回答的问题。

**Project Objective（RO）：** 为了回答问题，需要完成的具体任务。

老师明确强调两者必须 mapped / aligned。

## 11.2 对应示例

| Research Question | 对应 Project Objective |
|---|---|
| RQ1：哪些因素被用于预测学生学业表现？ | RO1：通过文献综述识别相关预测因素。 |
| RQ2：已有研究使用了哪些机器学习方法？ | RO2：通过文献综述识别并归纳相关机器学习方法。 |
| RQ3：在本项目数据上，所选模型的预测表现如何？ | RO3：在一致实验设置下实施并评价所选模型。 |

注意：第三组只有在项目确实要做模型实验时才适用。不要为了凑 RQ 数量而加入不打算完成的任务。

## 11.3 对齐检查表

- [ ] 每个 RQ 都有对应 RO。
- [ ] 每个 RO 都能帮助回答相应 RQ。
- [ ] RQ 和 RO 使用相同的核心概念。
- [ ] 研究方法能实际完成 RO。
- [ ] 数据能够支持这些 RQ。
- [ ] 最终结果能够回答 RQ。
- [ ] 没有写进目标却不打算实施的任务。

---

# 12. 课堂示例：Student Academic Performance Prediction

老师用这个例子解释 Research Question、Objective、Literature Review 和 Model Comparison 之间的关系。

## 12.1 课堂 Research Question

> What factors and machine learning approaches have been used to predict student academic performance?

中文：

> 哪些因素和机器学习方法曾经被用于预测学生学业表现？

这道题有两个核心部分：

1. What factors：已有研究使用了哪些因素；
2. What machine learning approaches：已有研究使用了哪些机器学习方法。

## 12.2 对应 Project Objective

> To identify relevant factors and machine learning approaches used in student academic performance prediction through a literature review.

中文：

> 通过文献综述，识别用于学生学业表现预测的相关因素和机器学习方法。

老师的意思是：研究问题提出需要回答的内容，Objective 则说明你准备完成什么工作来回答它。

## 12.3 为什么 Project 1 Presentation 必须能回答？

考官可能直接问：

- What factors have been used to predict students' academic performance?
- What machine learning approaches have been used?

如果你在 RQ 中提出了这些问题，就应该已经通过 Literature Review 做了初步调查，并能回答。

## 12.4 因素与模型需要从文献中提取

不要在没有文献依据时直接把某些因素说成“经典因素”或“最重要因素”。

阅读每篇论文时，分别记录：

- 使用了哪些输入变量；
- 目标变量是什么；
- 数据来自哪里；
- 研究使用什么模型；
- 如何评估；
- 得到了什么结论。

---

# 13. 模型选择、模型比较与最终模型实施

## 13.1 如果项目目标是比较模型

老师举例说明，可以从文献中找到多种候选方法，再选择其中若干方法进行实际比较。

流程：

1. Literature Review：了解已有模型；
2. Candidate Selection：选择适合项目的候选模型；
3. Experimental Design：确定统一的数据和实验设置；
4. Model Training：训练候选模型；
5. Evaluation：使用评价指标；
6. Comparison：比较结果；
7. Model Selection：选出适合当前项目的模型；
8. Implementation：将选定模型用于项目。

## 13.2 文献中的模型不等于都要实现

假设文献综述中看到五种模型，不代表自己必须实现五种。应根据：

- RQ 和 RO；
- 数据类型；
- 数据规模；
- 任务类型；
- 可用计算资源；
- 项目时间；
- 可解释性要求；
- 评价目标；

选择合适的候选模型。

## 13.3 如果 RQ 明确要求比较，就必须有比较

如果 Research Question 是“哪个模型表现更好”，只训练一个模型无法充分回答这个问题。

反过来，如果项目的主要问题是数据清洗或 Dashboard 开发，就不一定要为了比较模型而增加模型实验。

## 13.4 比较要公平

尽可能保持：

- 相同数据集；
- 相同训练/测试划分；
- 相同预处理条件；
- 相同评价指标；
- 合理的参数设置；
- 结果解释一致。

不同数据条件下的 Accuracy 不能直接说明模型优劣。

---

# 14. 项目重点可以是预处理、模型、Dashboard 或系统

老师明确提醒，不是每个 Data Science 项目都必须把模型作为唯一重点。

## 14.1 方向 A：Data Pre-processing

适合：

- 组织内部数据；
- 多来源数据；
- 网络爬取数据；
- 数据格式混乱；
- 缺失值、重复值和异常值较多；
- 字段定义不一致；
- 需要数据整合。

可能的主要工作：

- Data Collection；
- Data Cleaning；
- Data Integration；
- Missing Value Handling；
- Duplicate Handling；
- Outlier Handling；
- Data Transformation；
- Feature Engineering。

## 14.2 方向 B：Model Development / Comparison

适合：

- 数据已经比较完整；
- 研究问题关注预测或分类；
- 需要比较不同方法；
- 有清楚的目标变量；
- 有合适评价指标。

主要工作：

- Model Selection；
- Model Training；
- Parameter Tuning；
- Evaluation；
- Model Comparison；
- Interpretation。

## 14.3 方向 C：Dashboard / Platform

适合：

- 项目关注分析结果呈现；
- 用户需要监控数据或指标；
- 需要交互式展示；
- 需要辅助管理或决策。

可能展示：

- 数据质量指标；
- 缺失值比例；
- 异常数据数量；
- 数据源比较；
- 变化趋势；
- 过滤、查询和导出功能。

## 14.4 方向 D：综合项目

可以结合预处理、分析、模型和 Dashboard，但要明确主线。不要每个部分都做一点，却没有一个明确的研究贡献。

---

# 15. Project Scope：明确项目边界

老师明确说要 Define Project Scope / Boundary。

## 15.1 Scope 应回答的问题

- 研究对象是什么？
- 研究领域是什么？
- 研究问题是什么？
- 使用什么数据？
- 数据范围、时间范围和样本范围是什么？
- 使用哪些变量或指标？
- 使用哪些方法？
- 开发什么成果？
- 如何评价？
- 哪些内容不在本项目范围内？

## 15.2 为什么 Scope 重要？

如果范围太大：

- 文献综述会无限扩张；
- 数据需求难以满足；
- 方法会越来越多；
- 项目时间不够；
- 最终很难形成清晰成果。

范围缩小不是降低项目价值，而是让项目可执行、可验证。

## 15.3 Scope 模板

```text
Project Scope

1. Domain:
2. Research Problem:
3. Dataset / Data Source:
4. Population / Sample / Data Period:
5. Variables / Features:
6. Methods / Techniques:
7. System / Prototype / Expected Deliverable:
8. Evaluation Method:
9. Exclusions / Out of Scope:
```

---

# 16. Assignment 3：Project Methodology / Research Design

## 16.1 老师对 Assignment 3 的说明

老师说 Assignment 3 是 Project Methodology / Research Methodology 相关内容，但也明确表示当时还没有把全部方法论讲完。

老师仍然希望学生继续练习 Problem Formulation，因为 Project 1 Presentation 中考官会先了解项目问题。

## 16.2 方法设计的顺序

1. Problem Formulation；
2. Research Questions；
3. Project Objectives；
4. Research / Project Design；
5. Data Collection Method；
6. Data Understanding；
7. Data Processing；
8. Technique / Algorithm / Model / System；
9. Evaluation / Testing；
10. Expected Outcome / Findings。

## 16.3 Project Methodology 与 Research Methodology

在后续报告中，老师倾向于 Data Science / 项目开发类型使用 **Project Methodology** 这个章节名称，因为学生是在设计并实施一个项目或原型。

老师说，传统研究论文中常见 Research Methodology，但在需要形成项目、功能或 Prototype 的场景中，Project Methodology 可能更合适。

最终以老师提供的模板和 Coordinator 的要求为准。

## 16.4 PESTLE / P6 与 Agile：录音待确认

课堂中有一段老师说 Data Science 可以使用一个听起来像 “P6” 或 “PESTLE” 的框架，后续又提到如果开发系统，可以使用 Agile。

由于音频识别不清，不能确定老师具体说的是哪个框架。**不要直接把 P6、PESTLE 或 Agile 当成所有 Data Science 项目的强制方法。**

能够确认的是：

- 如果项目是系统开发，老师提到可以考虑 Agile；
- 如果项目是数据分析、模型或 Dashboard，方法应按项目性质选择；
- 研究设计不必一律采用同一种方法。

---

# 17. 定性、定量、实验、探索性与设计型项目

老师解释研究设计可能包括 Quantitative、Qualitative、Experimental、Design、Comparative 等，具体取决于项目。

## 17.1 Qualitative Research（定性研究）

典型方法：Interview。

步骤：

1. 设计访谈问题；
2. 选择受访者；
3. 进行访谈；
4. 录音或记录；
5. Transcription：转录成文字；
6. 整理访谈笔记；
7. 分析访谈内容；
8. 归纳主题或观点。

适合研究经验、态度、观点、组织实践等。

老师认为 Data Science 学生通常主要处理数据，不一定需要采用定性研究，但并没有禁止。

## 17.2 Quantitative Research（定量研究）
````

# Uploaded source E --- Assignment_1b_Phase_1.docx (extracted text)

> Source file: `Assignment_1b_Phase_1.docx`\
> Uploaded 15 November 2026. The document is reproduced below in
> paragraph order. Original Word formatting is not represented in this
> text extraction.

``` text
ASSIGNMENT 1b – PHASE 1

Research Topic Selection and Preliminary Literature Search

Proposed Project Title

Missingness-Aware Few-Shot Transfer Learning for Multivariate Time-Series Forecasting under Cross-Regional Distribution Shifts: A PM2.5 Case Study

1. Project Background

Multivariate time-series forecasting is an important research area in data science, with applications in environmental monitoring, healthcare, transportation, energy management, and industrial Internet of Things (IoT) systems. With the increasing deployment of sensor networks, large volumes of time-dependent data are continuously collected. These data provide opportunities for machine learning models to identify temporal patterns and make future predictions.

Air pollution forecasting is one practical application of multivariate time-series analysis. Fine particulate matter (PM2.5) is an important air pollutant, and its concentration varies over time due to interactions among different pollutants, weather conditions, and local environmental factors. Accurate PM2.5 forecasting can support air-quality monitoring and early-warning systems.

Traditional statistical methods and machine learning algorithms have been widely applied to air-quality prediction. More recently, deep learning models, including recurrent neural networks (RNNs), Long Short-Term Memory (LSTM), Gated Recurrent Units (GRU), and Temporal Convolutional Networks (TCN), have been used to capture complex temporal relationships in environmental data (Méndez et al., 2023; Zhang et al., 2024).

However, developing an accurate forecasting model for one location does not necessarily guarantee good performance in another location. Different cities may have different pollution patterns, sensor characteristics, and data distributions. This challenge is related to distribution shift, where the statistical characteristics of training data differ from those of the target data. Transfer learning provides a potential solution by transferring knowledge from a data-rich source domain to a data-limited target domain. Instead of training a completely new model for every location, a model can first learn temporal patterns from one region and then adapt to another region using a smaller amount of local data.

Another important challenge is missing sensor observations. In real-world monitoring systems, data may be missing because of sensor malfunction, communication interruption, or maintenance. Missing observations can reduce forecasting accuracy, particularly when missing values occur continuously rather than randomly. Therefore, this proposed project focuses on combining few-shot transfer learning and missingness-aware time-series modelling to improve the reliability of multivariate forecasting under cross-regional distribution shifts. PM2.5 forecasting will be used as the practical application to evaluate the proposed data science approach.

2. Preliminary Project Problem

Despite the development of machine learning techniques for time-series forecasting, several challenges remain.

2.1 Distribution differences between regions

Models trained using data from one city may not generalise well to another city because of differences in pollutant distributions, temporal patterns, and monitoring conditions. Directly applying a source-domain model to a target domain may result in reduced prediction performance. Previous studies have investigated transfer learning for PM2.5 forecasting. For example, Yao et al. (2024) proposed a multi-source variational mode transfer learning framework for monitoring stations with limited historical data. More recent work has also investigated transfer learning for country-level PM2.5 forecasting (Kristjanpoller et al., 2026). These studies demonstrate the potential of transferring knowledge across monitoring locations and geographical regions.

2.2 Limited labelled data in target regions

New monitoring locations may not have sufficient historical observations to train reliable forecasting models. Training a model independently for each location can therefore be inefficient and may lead to poor generalisation. Few-shot transfer learning may help address this problem by using knowledge learned from a data-rich source region and adapting the model with a relatively small amount of labelled target-region data.

2.3 Missing observations in sensor data

Environmental sensor datasets frequently contain missing values. Simple imputation methods, such as mean replacement and forward filling, may not adequately represent the temporal characteristics of missing observations. Che et al. (2018) demonstrated that missingness patterns and time intervals between observations can be incorporated into recurrent neural networks through the GRU-D architecture. However, further investigation is needed to understand how missingness-aware modelling can be combined with few-shot transfer learning for cross-regional forecasting.

Recent studies have also examined non-stationarity, sparse monitoring networks, and cross-regional PM2.5 prediction (Shi et al., 2026). Therefore, this project will not treat transfer learning or missing-value handling as entirely new concepts. Instead, it will investigate their combined performance under controlled random and continuous sensor-missingness conditions. Based on these issues, the preliminary research problem is:

How can a missingness-aware few-shot transfer learning approach improve multivariate time-series forecasting performance when data distributions differ between regions and sensor observations are incomplete?

3. Project Aim

The main aim of this project is to investigate and develop a robust transfer learning framework for multivariate time-series forecasting under missing data and cross-regional distribution shifts, using PM2.5 concentration prediction as an application. The study intends to examine whether knowledge transferred from a data-rich source region can improve forecasting performance in a data-limited target region, particularly when sensor observations contain random or continuous missing values.

4. Initial Project Objectives

The proposed project will pursue the following objectives:

Objective 1: To investigate the characteristics of multivariate air-quality time-series datasets from different geographical regions, including their data distributions, missing-value patterns, and temporal characteristics.

Objective 2: To develop a missingness-aware time-series forecasting approach that incorporates missing-value indicators and temporal information into a machine learning model.

Objective 3: To investigate the effectiveness of few-shot transfer learning by adapting a source-domain forecasting model to a target region using different proportions of labelled target-domain data.

Objective 4: To evaluate and compare the proposed approach with conventional machine learning and deep learning baselines under different distribution-shift and missing-data conditions.

5. Preliminary Project Scope

5.1 Research Area

This project focuses on data science, machine learning, transfer learning, and multivariate time-series forecasting. The research will primarily investigate computational methods rather than the environmental or chemical mechanisms of air pollution.

5.2 Datasets

Two publicly available air-quality datasets are initially considered. The first dataset is the Beijing Multi-Site Air Quality Dataset, available through the UCI Machine Learning Repository. It contains 420,768 hourly observations collected from 12 monitoring stations between March 2013 and February 2017. The dataset includes PM2.5, PM10, SO2, NO2, CO, O3, and meteorological variables (Chen, 2017).

The second dataset is Air Quality Data in India (2015–2020), available through Kaggle. It contains air-quality observations from multiple cities and monitoring stations in India, including hourly and daily measurements of several pollutants. The station-level hourly data will be prioritised for the target-domain experiments. However, the final selection of monitoring stations will depend on data completeness, temporal continuity, and variable availability.

5.3 Proposed Methodology

The preliminary methodology consists of the following stages:

1. Data preparation: Identify common pollutant variables, standardise measurement units, construct chronological time-series samples, and examine missing-value patterns.

2. Baseline development: Establish forecasting baselines using Persistence, Ridge Regression, LightGBM, GRU, and TCN.

3. Missingness-aware modelling: Incorporate missingness masks and elapsed-time information to represent missing observations. Random missingness and continuous block missingness will be simulated to evaluate model robustness.

4. Few-shot transfer learning: Pre-train the forecasting model using source-domain data and fine-tune it with different proportions of labelled target-domain data.

5. Performance evaluation: Compare the proposed approach with baseline models using Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and coefficient of determination (R²).

6. Ablation analysis: Examine the individual contributions of transfer learning and missingness-aware components.

The experiments will use chronological training, validation, and testing splits to reduce the risk of temporal data leakage.

5.4 Expected Outcomes

The project is expected to provide an empirical evaluation of whether combining few-shot transfer learning with missingness-aware modelling can improve forecasting performance under cross-regional distribution shifts. The expected outcomes include a reproducible forecasting framework, a comparison of different machine learning approaches, and an analysis of model performance under different target-data availability and sensor-missingness conditions. The actual effectiveness of the proposed approach will be determined through experiments rather than assumed in advance.

6. Preliminary Literature Search and References

The following publications provide an initial theoretical and methodological foundation for the proposed project.

Bai, S., Kolter, J. Z., & Koltun, V. (2018). An empirical evaluation of generic convolutional and recurrent networks for sequence modeling. arXiv preprint arXiv:1803.01271. https://doi.org/10.48550/arXiv.1803.01271

Che, Z., Purushotham, S., Cho, K., Sontag, D., & Liu, Y. (2018). Recurrent neural networks for multivariate time series with missing values. Scientific Reports, 8, 6085. https://doi.org/10.1038/s41598-018-24271-9

Furqon, M. T., Pratama, M., & Jatmiko, W. (2026). Time series domain adaptation: A review. WIREs Data Mining and Knowledge Discovery, 16(3), e70130. https://doi.org/10.1002/widm.70130

Kristjanpoller, W., Lopez, A., Mora, F., & Minutolo, M. C. (2026). PM2.5 forecasting: A comparative study of transfer learning with transformer models and panel data approaches for country-level predictions. Expert Systems with Applications, Article 131971. https://doi.org/10.1016/j.eswa.2026.131971

Méndez, M., Merayo, M. G., & Núñez, M. (2023). Machine learning algorithms to forecast air quality: A survey. Artificial Intelligence Review, 56, 10031–10066. https://doi.org/10.1007/s10462-023-10424-4

Shi, Y., Yang, J., & Qin, D. (2026). An adaptive spatiotemporal graph transformer for multi-site PM2.5 multi-step forecasting with non-stationary and sparse-aware method. Journal of Environmental Management, 414, Article 130515. https://doi.org/10.1016/j.jenvman.2026.130515

Sun, B., & Saenko, K. (2016). Deep CORAL: Correlation alignment for deep domain adaptation. In Computer Vision – ECCV 2016 Workshops (pp. 443–450). Springer. https://doi.org/10.1007/978-3-319-49409-8_35

Yan, R., Liao, J., Yang, J., Sun, W., Nong, M., & Li, F. (2021). Multi-hour and multi-site air quality index forecasting in Beijing using CNN, LSTM, CNN-LSTM, and spatiotemporal clustering. Expert Systems with Applications, 169, Article 114513. https://doi.org/10.1016/j.eswa.2020.114513

Yao, B., Ling, G., Liu, F., & Ge, M.-F. (2024). Multi-source variational mode transfer learning for enhanced PM2.5 concentration forecasting at data-limited monitoring stations. Expert Systems with Applications, 238, Article 121714. https://doi.org/10.1016/j.eswa.2023.121714

Zhang, Z., Zhang, S., Chen, C., & Yuan, J. (2024). A systematic survey of air quality prediction based on deep learning. Alexandria Engineering Journal, 93, 128–141. https://doi.org/10.1016/j.aej.2024.03.031

Preliminary Dataset Sources

Chen, S. (2017). Beijing Multi-Site Air Quality [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C5RK5G

Rao, R. (n.d.). Air Quality Data in India (2015–2020) [Dataset]. Kaggle. https://www.kaggle.com/datasets/rohanrao/air-quality-data-in-india
```

# Uploaded source F --- UTM-Thesis-Template-v5-2026-ENGLISH.dotx

> Source file: `UTM-Thesis-Template-v5-2026-ENGLISH.dotx`\
> The template was uploaded in this conversation (896,410 bytes;
> Microsoft Word template format). It is a binary `.dotx` file, so its
> binary layout/styles are not embedded into this Markdown archive. The
> original template remains a separate conversation attachment. The user
> explicitly requested that this template be used as the formatting
> basis for the Assignment 1b document.

# Uploaded screenshots and other visual attachments

  ---------------------------------------------------------------------------------------------------
  上传文件                       在对话中的用途/可确认内容
  ------------------------------ --------------------------------------------------------------------
  `image(20261115-105714).png`   用户在 Kaggle/UCI 页面询问"哪个"；助手根据截图建议选择 Beijing
                                 Multi-Site Air-Quality Data Set，而不是 Starter Notebook 或其他
                                 Notebook。

  `image(20261115-105840).png`   用户展示北京数据解压后的文件夹；助手确认是12个北京监测站 CSV。

  `image(20261115-110146).png`   用户展示印度数据解压后的文件夹；助手识别出
                                 `city_day`、`city_hour`、`station_day`、`station_hour`、`stations`
                                 五类文件。
  ---------------------------------------------------------------------------------------------------

注：Markdown
文件不自动包含这些图片的原始二进制内容；图片仍保留在原始对话附件中。这里记录了文件名和对话中可确认的用途，不对截图中不可读的细节作猜测。

# File and attachment inventory relevant to this project

  ---------------------------------------------------------------------------
  File                                         Role in the project
  -------------------------------------------- ------------------------------
  `ASSIGNMENT 1b Instruction.pdf`              Official assignment brief;
                                               exact extracted text
                                               reproduced above.

  `UTM-Thesis-Template-v5-2026-ENGLISH.dotx`   UTM Word template; binary
                                               template retained separately.

  `Assignment_1b_Phase_1.docx`                 User-uploaded draft; extracted
                                               text reproduced above.

  `今日课程内容汇总_UTM_Project_Notes.md`      Course notes; full text
                                               reproduced above.

  `粘贴的文本 (1).txt`                         Classroom transcription and
                                               explanation; full text
                                               reproduced above.

  `UTM今日课程完整详细笔记_完整版.txt`         Additional course notes; full
                                               text reproduced above.

  Three screenshots listed above               Evidence of dataset
                                               download/unpacking and
                                               Kaggle/UCI selection.
  ---------------------------------------------------------------------------

The raw Beijing and India datasets were downloaded and extracted by the
user on their computer. They were not uploaded as data files into this
conversation; only screenshots of the extracted folder contents were
shown.

# Complete code and execution instructions preserved from the research-start conversation

## 附录：数据审查代码运行前的目录与环境准备

### 项目目录

``` text
PM25_Transfer_Project/
├── data/
│   └── raw/
│       ├── beijing/
│       │   ├── PRSA_Data_Aotizhongxin_....csv
│       │   ├── PRSA_Data_Changping_....csv
│       │   └── 其他10个站点CSV
│       └── india/
│           ├── city_day.csv
│           ├── city_hour.csv
│           ├── station_day.csv
│           ├── station_hour.csv
│           └── stations.csv
├── notebooks/
├── outputs/
│   └── audit/
└── scripts/
```

### 安装依赖

``` python
%pip install pandas numpy matplotlib
```

### 输出审查文件

-   `beijing_overview.csv`
-   `india_overview.csv`
-   `beijing_missing.csv`
-   `india_missing.csv`
-   `beijing_sites.csv`
-   `india_sites.csv`
-   `common_features.csv`
-   `india_station_metadata.csv`（由后续单独代码生成）
-   `missingness_comparison.png`
-   `audit_source_info.txt`

### 印度站点元数据检查代码

``` python
from pathlib import Path
import pandas as pd

files = list(INDIA_DIR.rglob("stations.csv"))

if files:
    station_info = pd.read_csv(files[0])
    print("站点信息文件：", files[0])
    print("数据规模：", station_info.shape)
    print("\\n字段名称：")
    print(station_info.columns.tolist())
    print("\\n前10行：")
    display(station_info.head(10))
    station_info.to_csv(
        OUTPUT_DIR / "india_station_metadata.csv",
        index=False,
        encoding="utf-8-sig"
    )
else:
    print("没有找到 stations.csv，请检查解压目录。")
```

### 初步审查判断规则

-   PM2.5 缺失率 0%---10%：初步认为数据质量较好；
-   10%---30%：可以考虑使用，但需要处理缺失；
-   30%---50%：谨慎筛选站点；
-   超过50%：通常不优先作为目标站点。

这些只是初步筛选参考，不是固定学术标准。目标 PM2.5
标签缺失不能简单插补后当作真实标签进行评价。

必须检查： - `median_interval_hours` - `estimated_missing_hours` -
`max_interval_hours` - `time_coverage_pct`

还需要核实两个数据集的变量单位，尤其是
CO；时间戳按各自当地时间处理，不强制将北京与印度同一钟点对齐。

## Original full Dataset Audit Python code

``` python
# ============================================================
# PM2.5 Cross-Regional Transfer Learning
# Stage 1: Dataset Audit
# Beijing + India
# ============================================================

from pathlib import Path
import re
import warnings

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

warnings.filterwarnings("ignore")

# 1. 路径设置
ROOT = Path.cwd()
BEIJING_DIR = ROOT / "data" / "raw" / "beijing"
INDIA_DIR = ROOT / "data" / "raw" / "india"
OUT_DIR = ROOT / "outputs" / "audit"
OUT_DIR.mkdir(parents=True, exist_ok=True)

POLLUTANTS = ["pm2.5", "pm10", "so2", "no2", "co", "o3"]

print("=" * 60)
print("PM2.5 Dataset Audit Started")
print("=" * 60)


# 2. 统一字段名称
def canon_col(name):
    s = str(name).strip().lower()
    s = re.sub(r"\s+", "", s)
    s = s.replace("_", "")
    aliases = {
        "pm25": "pm2.5",
        "pm2.5": "pm2.5",
        "stationid": "station_id",
        "datetime": "datetime",
        "date": "date",
        "pm10": "pm10",
        "no2": "no2",
        "so2": "so2",
        "co": "co",
        "o3": "o3",
        "year": "year",
        "month": "month",
        "day": "day",
        "hour": "hour",
        "station": "station",
        "city": "city",
        "state": "state"
    }
    return aliases.get(s, s)


def list_csv_files(folder):
    files = []
    for p in folder.rglob("*"):
        if not p.is_file():
            continue
        name = p.name.lower()
        if name.endswith(".csv") or name.endswith(".csv.gz"):
            files.append(p)
    return sorted(files)


# 3. 读取北京数据
def load_beijing():
    files = list_csv_files(BEIJING_DIR)

    station_files = [
        p for p in files
        if p.name.lower().startswith("prsa_data_")
    ]

    if not station_files:
        station_files = []
        for p in files:
            header = pd.read_csv(p, nrows=0)
            cols = {canon_col(c) for c in header.columns}
            required = {"year", "month", "day", "hour", "pm2.5"}
            if required.issubset(cols):
                station_files.append(p)

    if not station_files:
        raise FileNotFoundError(
            "没有找到北京站点CSV。请检查是否已经解压数据集。"
        )

    frames = []
    print("\n北京数据文件：", len(station_files))

    for path in station_files:
        print("读取：", path.name)
        df = pd.read_csv(
            path,
            low_memory=False,
            na_values=["NA", "", " "]
        )
        df.columns = [canon_col(c) for c in df.columns]

        required = ["year", "month", "day", "hour"]
        if not all(c in df.columns for c in required):
            continue

        date_parts = pd.DataFrame({
            c: pd.to_numeric(df[c], errors="coerce")
            for c in required
        })
        df["timestamp"] = pd.to_datetime(date_parts, errors="coerce")

        match = re.search(
            r"PRSA_Data_(.+?)_2013",
            path.stem,
            re.IGNORECASE
        )
        filename_site = match.group(1) if match else path.stem

        if "station" in df.columns:
            df["site"] = df["station"].astype("string")
            df["site"] = df["site"].fillna(filename_site)
        else:
            df["site"] = filename_site

        for col in POLLUTANTS:
            if col in df.columns:
                df[col] = pd.to_numeric(df[col], errors="coerce")

        frames.append(df)

    if not frames:
        raise ValueError("北京数据没有成功读取。")

    result = pd.concat(frames, ignore_index=True)
    print("北京总记录数：", len(result))
    print("北京监测站数量：", result["site"].nunique())
    return result


# 4. 读取印度小时数据
def load_india():
    files = list_csv_files(INDIA_DIR)
    selected = None

    for target in ["station_hour.csv", "city_hour.csv"]:
        for p in files:
            if p.name.lower() == target:
                selected = p
                break
        if selected is not None:
            break

    if selected is None:
        raise FileNotFoundError(
            "没有找到 station_hour.csv 或 city_hour.csv。"
        )

    print("\n印度数据文件：", selected.name)
    header = pd.read_csv(selected, nrows=0).columns.tolist()

    wanted = {
        "station_id", "city", "state",
        "datetime", "date",
        "pm2.5", "pm10", "so2",
        "no2", "co", "o3",
        "no", "nox", "nh3"
    }

    usecols = [
        c for c in header
        if canon_col(c) in wanted
    ]

    df = pd.read_csv(
        selected,
        usecols=usecols,
        low_memory=False,
        na_values=["NA", "", " "]
    )
    df.columns = [canon_col(c) for c in df.columns]

    if "datetime" in df.columns:
        time_col = "datetime"
    elif "date" in df.columns:
        time_col = "date"
    else:
        raise ValueError("印度数据没有可识别的时间字段。")

    df["timestamp"] = pd.to_datetime(
        df[time_col],
        errors="coerce"
    )

    if "station_id" in df.columns and df["station_id"].notna().any():
        df["site"] = df["station_id"].astype("string")
        entity_type = "Station"
    elif "city" in df.columns:
        df["site"] = df["city"].astype("string")
        entity_type = "City"
    else:
        raise ValueError("印度数据没有 StationId 或 City 字段。")

    for col in POLLUTANTS + ["no", "nox", "nh3"]:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")

    print("印度总记录数：", len(df))
    print("印度监测单位数量：", df["site"].nunique())
    print("印度研究单位：", entity_type)
    return df, selected.name, entity_type


# 5. 数据质量统计
def audit_dataset(df, name):
    numeric_cols = [c for c in POLLUTANTS if c in df.columns]
    missing_rows = []

    for col in numeric_cols:
        s = pd.to_numeric(df[col], errors="coerce")
        valid = s.dropna()
        missing_rows.append({
            "variable": col,
            "total": len(s),
            "valid": len(valid),
            "missing": int(s.isna().sum()),
            "missing_pct": round(s.isna().mean() * 100, 2),
            "min": valid.min() if len(valid) else np.nan,
            "median": valid.median() if len(valid) else np.nan,
            "p95": valid.quantile(0.95) if len(valid) else np.nan,
            "max": valid.max() if len(valid) else np.nan,
            "negative_count": int((valid < 0).sum())
        })

    missing_df = pd.DataFrame(missing_rows)
    site_rows = []

    for site, group in df.groupby("site", dropna=False):
        group = group.sort_values("timestamp")
        ts = group["timestamp"].dropna()

        if len(ts) > 0:
            start = ts.min()
            end = ts.max()
            delta = ts.diff().dt.total_seconds() / 3600
            positive_delta = delta[delta > 0]
            gaps = delta[delta > 1.01]
            expected_hours = ((end - start).total_seconds() / 3600) + 1
            unique_hours = ts.nunique()
            coverage = (
                unique_hours / expected_hours * 100
                if expected_hours > 0 else np.nan
            )
            max_gap = delta.max() if len(delta.dropna()) else np.nan
            missing_hours = (
                np.maximum(np.round(gaps).to_numpy() - 1, 0).sum()
                if len(gaps) else 0
            )
            median_interval = (
                positive_delta.median()
                if len(positive_delta) else np.nan
            )
            duplicates = int(ts.duplicated().sum())
        else:
            start = pd.NaT
            end = pd.NaT
            coverage = np.nan
            max_gap = np.nan
            missing_hours = np.nan
            median_interval = np.nan
            duplicates = 0

        valid_pm25 = group["pm2.5"].notna().sum()
        site_rows.append({
            "site": str(site),
            "rows": len(group),
            "pm25_valid": int(valid_pm25),
            "pm25_missing_pct": round(group["pm2.5"].isna().mean() * 100, 2),
            "start": start,
            "end": end,
            "duplicate_timestamps": duplicates,
            "median_interval_hours": median_interval,
            "gap_events": int(len(gaps)) if len(ts) > 0 else 0,
            "estimated_missing_hours": missing_hours,
            "max_interval_hours": max_gap,
            "time_coverage_pct": round(coverage, 2)
        })

    site_df = pd.DataFrame(site_rows)

    overview = pd.DataFrame([{
        "dataset": name,
        "total_rows": len(df),
        "site_count": df["site"].nunique(),
        "invalid_timestamp": int(df["timestamp"].isna().sum()),
        "start": df["timestamp"].min(),
        "end": df["timestamp"].max(),
        "pm25_valid": int(df["pm2.5"].notna().sum()),
        "pm25_missing_pct": round(df["pm2.5"].isna().mean() * 100, 2),
        "duplicate_site_timestamp": int(
            df.duplicated(subset=["site", "timestamp"]).sum()
        )
    }])

    missing_df.to_csv(
        OUT_DIR / f"{name}_missing.csv",
        index=False,
        encoding="utf-8-sig"
    )
    site_df.to_csv(
        OUT_DIR / f"{name}_sites.csv",
        index=False,
        encoding="utf-8-sig"
    )
    overview.to_csv(
        OUT_DIR / f"{name}_overview.csv",
        index=False,
        encoding="utf-8-sig"
    )

    print("\n", name, "变量缺失情况：")
    print(missing_df.to_string(index=False))
    print("\n", name, "站点数据质量（按PM2.5有效记录排序）：")
    print(
        site_df.sort_values("pm25_valid", ascending=False)
        .head(15).to_string(index=False)
    )
    return missing_df, site_df, overview


# 6. 比较两个数据集的共同变量
def compare_features(beijing, india):
    bj_features = set(beijing.columns)
    in_features = set(india.columns)
    rows = []

    for col in POLLUTANTS:
        rows.append({
            "variable": col,
            "in_beijing": col in bj_features,
            "in_india": col in in_features,
            "common": col in bj_features and col in in_features
        })

    result = pd.DataFrame(rows)
    result.to_csv(
        OUT_DIR / "common_features.csv",
        index=False,
        encoding="utf-8-sig"
    )
    print("\n共同污染物变量：")
    print(result.to_string(index=False))
    return result


# 7. 生成缺失率图
def plot_missingness(bj_missing, in_missing):
    fig, axes = plt.subplots(1, 2, figsize=(13, 5))

    for ax, data, title in [
        (axes[0], bj_missing, "Beijing"),
        (axes[1], in_missing, "India")
    ]:
        ax.bar(data["variable"], data["missing_pct"])
        ax.set_title(title)
        ax.set_ylabel("Missing rate (%)")
        ax.set_xlabel("Variable")
        ax.tick_params(axis="x", rotation=45)

    plt.tight_layout()
    plt.savefig(OUT_DIR / "missingness_comparison.png", dpi=300)
    plt.show()


# 8. 主程序
if not BEIJING_DIR.exists():
    raise FileNotFoundError("北京数据目录不存在。")
if not INDIA_DIR.exists():
    raise FileNotFoundError("印度数据目录不存在。")

beijing = load_beijing()
india, india_file, india_type = load_india()

bj_missing, bj_sites, bj_overview = audit_dataset(beijing, "beijing")
in_missing, in_sites, in_overview = audit_dataset(india, "india")

common_features = compare_features(beijing, india)
plot_missingness(bj_missing, in_missing)

with open(
    OUT_DIR / "audit_source_info.txt",
    "w",
    encoding="utf-8"
) as f:
    f.write("PM2.5 Dataset Audit\n")
    f.write(f"India selected file: {india_file}\n")
    f.write(f"India entity type: {india_type}\n")
    f.write(f"Beijing rows: {len(beijing)}\n")
    f.write(f"India rows: {len(india)}\n")

print("\n" + "=" * 60)
print("数据审查完成！")
print("所有报告保存在：", OUT_DIR)
print("=" * 60)
```
