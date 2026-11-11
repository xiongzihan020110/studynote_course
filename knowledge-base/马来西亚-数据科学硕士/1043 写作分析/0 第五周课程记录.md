# UTM 硕士项目课程学习笔记

整理自《新建文本文档.txt》中的课堂录音转写与已有课程笔记。文档保留课堂要求、写作示例、操作模板和中英术语。日期、页数、评分和部分模板要求来自课堂口述，提交前请核对 LMS 的正式作业说明。

## 复习导航

| 想解决的问题 | 阅读章节 |
| --- | --- |
| 四次作业各交什么，Project 1 和 Project 2 有何区别？ | 第 2–4、16、21–24、33–34 节 |
| 如何找文献、比较证据并写出研究空白？ | 第 5–10 节 |
| 如何把研究问题、目标、方法和证据对齐？ | 第 11–17 节 |
| 怎样拿到可用数据，设计分析并评价成果？ | 第 18–20、30 节 |
| 如何写报告、管理引用并核对提交要求？ | 第 24–29、31–34 节 |
| 有哪些可直接填写的模板？ | 第 35–36 节 |

## 作业速查

| 阶段 | 当前要回答的问题 | 产出 |
| --- | --- | --- |
| Assignment 1 | 我想研究什么？为什么值得研究？ | 研究领域、具体兴趣、暂定题目、待研究问题、重要性、三篇相关学术论文 |
| Assignment 2 | 现有研究做到了什么？在哪些条件下仍有不足？ | 文献综述、批判性比较、研究空白与问题构建 |
| Assignment 3 | 我将用哪些数据、步骤和评价方法完成项目？ | Project Methodology |
| Assignment 4 | 能否把问题、证据、目标、范围和方法整合为可执行的计划？ | Final Project Proposal |
| Project 1 / Project 2 | 能否论证计划，并最终实施和验证？ | 阶段报告与答辩；实施、评价与最终报告 |

## 1. 今日课程的整体逻辑与核心结论

今天老师讲的内容涉及从“选题”到“研究计划”，再到后续项目实施和正式论文写作的一整套过程。不要把它理解成几个互不相关的 Assignment。它们是逐步推进的。

### 1.1 一条完整的项目逻辑链

Research Area → Specific Research Interest → Proposed Title → Problem Identification → Literature Review → Critical Analysis → Research Gap / Limitation → Problem Statement → Research Questions → Project Objectives → Project Scope → Project Methodology → Data Collection → Data Understanding / EDA → Data Processing → Model / System Development → Evaluation / Testing → Findings / Expected Outcomes。

对应中文：

研究领域：你属于哪个大方向？
具体研究兴趣：你真正想研究该领域中的哪一个问题？
暂定题目：用一句话表达研究内容。
问题识别：现实或已有研究中存在什么问题？
文献综述：别人已经研究了什么？
批判性分析：不同研究的方法、数据和结果有什么区别？
研究空白/局限：现有研究还缺少什么或有什么限制？
问题陈述：把问题写成具体、可研究的内容。
研究问题：本项目最终要回答什么？
项目目标：为了回答问题，需要完成哪些任务？
项目范围：明确研究边界。
项目方法：决定怎样完成任务。
数据收集：从哪里取得数据？
数据理解与探索：数据长什么样，有什么特点？
数据处理：需要怎样清洗、整合或转换？
模型/系统开发：采用什么方法或实现什么系统？
评价与测试：怎样判断结果是否有效？
结果/预期成果：最后交付什么、发现什么？

### 1.2 老师今天反复强调的原则

原则一：先有问题，再选择技术
老师并不希望学生一开始就说“我要使用某个高级算法”或“我要开发一个复杂 Dashboard”。首先要说明为什么存在这个问题，为什么值得研究。

原则二：文献综述不是论文摘要的集合
要比较不同论文的研究问题、数据、方法、实验设置、结果和局限性。老师明确表示，Review Previous Studies 和 Critical Analysis 是拉开学生成绩差距的重要部分。

原则三：研究范围要逐步缩小
最初的研究兴趣可以比较宽泛，但随着文献阅读，必须缩小到一个具体、能够在硕士项目时间和资源范围内完成的问题。

原则四：RQ 与 Objective 必须对应
Research Question 问什么，Project Objective 就要说明为了回答这个问题要完成什么任务。两者不能各写各的。

原则五：项目复杂度来自真实工作，不是术语堆砌
数据预处理、模型比较、系统开发、Dashboard、数据整合都可能成为项目重点。选择哪一种，要看研究问题、数据和项目成果。

原则六：项目是渐进式的，可以持续修订
Assignment 1、2、3 中形成的内容可以在 Final Proposal 阶段继续修改。不要因为已经交过前一份作业，就认为题目、框架和方法永远不能调整。

## 2. Assignment 1：研究领域、研究兴趣与初步选题

### 2.1 Assignment 1 的目的

老师希望通过 Assignment 1 了解每位学生想做什么项目，确认学生的研究兴趣和初步研究方向。

Assignment 1 不是完整的研究计划，也不是要求学生已经完成数据收集、模型训练或系统开发。它的重点是：

你想研究哪个领域？
这个领域中你对什么具体问题感兴趣？
你暂时打算使用什么题目？
你想调查的问题是什么？
为什么这个问题值得研究？
哪些学术论文让你开始关注这个问题？

### 2.2 Research Area 与 Specific Research Interest 的区别

| 名称 | 中文 | 例子 | 说明 |
| --- | --- | --- | --- |
| Research Area | 研究领域 | Data Science | 非常大的领域 |
| Project / Research Area | 项目所属方向 | Big Data Governance | 比较具体的领域 |
| Specific Research Interest | 具体研究兴趣 | Data Quality Management | 进一步聚焦 |
| Specific Problem | 具体问题 | 多源数据质量不一致，难以统一监控 | 可以继续形成问题陈述 |
| Proposed Research Title | 暂定题目 | Data Quality Assessment and Monitoring... | 用标题表达项目方向 |

不要把 Research Area 和最终 Research Title 混为一谈。研究领域可以宽，但项目问题必须逐步具体。

### 2.3 老师要求准备的六项内容

根据录音，老师希望下次汇报时了解：

Research Area / Project Area：研究领域或项目领域。
Specific Research Interest：具体研究兴趣。
Proposed Research Title：拟定研究题目。
The Problem You Want to Investigate：你想调查或研究的问题。
Why Is This Problem Important?：为什么这个问题重要。
Three Relevant Academic Papers：三篇相关学术论文，以及它们如何启发你形成题目或理解问题。
老师明确说，这次暂时不需要完整讲 Aims and Objectives。他当前主要想知道学生的兴趣和问题方向。

### 2.4 三篇论文应该怎样准备

不要只列出三篇论文的标题。每篇至少准备以下信息：

论文标题、作者、年份；
研究领域和背景；
研究问题；
使用的数据或研究对象；
使用的方法；
主要发现；
作者提到的限制，或你读完后发现的不足；
这篇论文与你的拟定题目有什么关系。
老师说三篇论文是用来 motivate（启发）你形成题目，或帮助你了解相关问题。

### 2.5 A1 汇报模板

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

### 2.6 下次汇报是否必须做 PPT？

录音中老师说希望下周听学生介绍题目、研究兴趣和想法，但没有清楚听到“必须提交 PPT”的明确指令。课堂中也有人讨论老师并没有明确要求 PPT。

因此，当前应准备好口头介绍和必要的文字材料。是否制作 PPT，等 LMS 或老师进一步通知，不要自行把“汇报”理解成“必须做 PPT”。

### 2.7 A1 截止日期

录音中出现“18号”，但月份、最终确认情况并不完全清楚。此前整理曾推断为 2026 年 11 月 18 日。此日期需要在 LMS 或老师公告中核实。

## 3. Assignment 1 下次汇报：老师究竟要看什么

老师不是要学生现在就拿出完整解决方案，而是想判断学生是否有一个值得继续发展的项目想法。

### 3.1 老师最可能关注的几个问题

你的研究方向是什么？
你的兴趣是否足够具体？
你提出的题目是否能够体现研究内容？
你发现的问题到底是什么？
为什么这个问题重要？
你是否读过相关学术论文？
这些论文是否真的支持你的研究兴趣？

### 3.2 “问题”与“解决方案”不要混在一起

例如：

只说解决方案：

我想做一个 Dashboard。
我想使用 Random Forest。
我想开发一个平台。
这些说法没有说明为什么需要做。

先说明问题：

现有数据质量检查分散在不同环节，缺少统一的评估和监控方式。
某些数据来源存在缺失、重复或格式不一致的问题。
使用者难以快速识别数据质量变化。
之后再说明可能的解决方向：

通过数据质量指标进行评估；
使用自动化处理方法识别问题；
通过 Dashboard 展示结果。
以上仅是表达逻辑的示例，不代表老师已经确认某个具体项目题目或 Research Gap。

## 4. Assignment 2：Literature Review and Problem Formulation

### 4.1 Assignment 2 的主题

老师明确说 Assignment 2 是：

Literature Review and Problem Formulation（文献综述与问题构建）。

学生之前已经练习过相关内容，但这一次需要结合自己的项目，做得更具体、更深入。

### 4.2 A1 与 A2 的区别

| 比较点 | Assignment 1 | Assignment 2 |
| --- | --- | --- |
| 主要任务 | 初步确定兴趣和题目 | 深入理解研究问题 |
| 文献数量 | 先找约 3–5 篇/约 5 篇作为起点 | 继续扩大文献范围 |
| 阅读目的 | 判断方向是否值得继续 | 理解已有研究并发现不足 |
| 分析深度 | 初步了解 | Critical Examination |
| 研究范围 | 可以比较宽 | 必须逐步缩小 |
| Research Gap | 初步注意 | 根据文献证据识别 |
| Problem Formulation | 初步想法 | 形成具体项目问题 |
| 结果 | 研究方向和初步题目 | 更完整的 Chapter 2 内容 |

### 4.3 A2 需要做的工作

老师要求学生：

找到更多相关 Literature。
对已有研究进行 Critical Examination。
识别 Research Gaps 或 Limitations。
根据文献结果 Narrow Down / Refine Project Problem。
形成一个具体、能够通过项目展示或研究的问题。
把文献综述组织成 Project Report 的 Chapter 2。
老师提到三至五篇参考文献作为进一步理解问题的起点，但这不代表 A2 最终只能引用三至五篇。

### 4.4 Assignment 2 只提交本次作业要求的部分

老师特别说明 Assignment 2 的提交只包括 Assignment 2，不要把 Assignment 1 的整份内容重复附进去。

前面 A1 的研究方向和文献可以继续沿用，但 A2 应该是进一步深化后的新内容。

### 4.5 A2 的篇幅

课堂中提到 Chapter 2 / Assignment 2 约 10 页。该数字属于课堂口头说明，最终按正式 Assignment Guideline 为准。

## 5. Literature Search：如何系统地寻找和扩展文献

### 5.1 不要漫无目的地搜索

老师描述了一种常见问题：学生到处搜索，下载大量论文，A 文章引用 B 文章，B 文章又提到 C 文章，最后资料越积越多，却不知道自己真正要研究什么。

老师也说，读一篇感觉懂了，换一篇又不懂，这是正常的。重要的是有方向地阅读，不要无目标地积累文章。

### 5.2 以一篇高相关度论文为起点

老师讲了通过作者和引用关系扩展文献的方法。

路径 A：向后追踪（Backward Citation Tracking）
打开核心论文的 References：

看它引用了哪些研究；
找出与自己研究问题高度相关的文章；
阅读这些文章；
看它们如何定义问题、使用方法和评价结果；
进一步追踪更早的基础研究。
路径 B：向前追踪（Forward Citation Tracking）
查找后来引用该核心论文的文章：

找到后续研究；
看其他研究者如何使用、扩展或质疑原研究；
判断该研究方法后来是否被改进；
观察该领域是否出现新的数据、技术或应用场景。
路径 C：作者追踪（Author Tracking）
老师举例说，如果一篇相关论文的作者叫 ABC，可以继续搜索 ABC 发表的其他文章。

重点不是只搜作者，而是判断同一作者是否持续研究相同或相关问题。

### 5.3 形成文献网络

推荐按以下步骤做：

找到 1–2 篇核心论文；
记录核心论文作者；
阅读核心论文 References；
搜索后续引用该论文的研究；
搜索同一研究团队的相关论文；
找出研究同一个问题的其他团队；
将论文放入同一个主题类别；
比较研究问题、数据、方法和结果；
总结仍未解决的问题。

### 5.4 文献检索记录表

| 字段 | 记录内容 |
| --- | --- |
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

### 5.5 如何判断一篇论文是否值得纳入

建议优先保留：

与自己的研究问题直接相关；
研究方法或数据具有参考价值；
来自可信期刊、会议、出版社或正式机构；
能够提供明确的结果或局限；
能帮助你解释项目背景或技术原理。
不要因为一篇文章标题里有 Machine Learning 就把它全部纳入。相关性比数量更重要。

## 6. Critical Analysis：怎样真正比较和批判已有研究

### 6.1 老师为什么反复强调 Critical Analysis？

老师明确说，Review Previous Studies 和模型比较是区分学生成绩的重要部分。只总结文章内容，不能体现学生是否真正理解已有研究。

### 6.2 描述性综述与批判性分析的区别

仅仅描述（不够）
Paper A 使用 Decision Tree。
Paper B 使用 Random Forest。
Paper C 使用 Deep Learning。
这只是列举事实。

批判性分析（需要做到）
三篇研究解决的问题是否相同？
它们使用的数据是否相同或具有可比性？
数据规模和数据质量是否不同？
模型选择是否有充分理由？
实验设置是否公平？
使用的评价指标是否一致？
结果能否直接比较？
哪种方法在什么场景下更适用？
每篇研究有哪些局限？
这些局限是否构成自己项目可以研究的问题？

### 6.3 文献比较矩阵

| 比较维度 | Study A | Study B | Study C | 综合分析 |
| --- | --- | --- | --- | --- |
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

### 6.4 不要把不同条件下的准确率直接比较

如果两篇论文使用不同数据集、不同训练测试划分、不同类别比例和不同评价指标，不能只因为某篇 Accuracy 更高，就说它的模型一定更好。

需要先分析比较条件是否一致。这是对老师“compare with critical analysis”的实际落实。

### 6.5 从比较中形成自己的判断

好的文献综述最终要形成综合判断，而不是每篇论文各写一段后就结束。

例如可以这样组织：

现有研究主要采用哪些方法；
不同方法分别适合什么问题；
研究结果在哪些方面一致；
哪些结果存在差异；
差异可能来自哪些数据或实验设置；
现有研究有哪些共同限制；
自己的项目准备在哪个具体范围内继续研究。

## 7. Chapter 2：Literature Review 应该写什么

老师提到 Chapter 2 应包含 Introduction、Project Area、Theoretical and Conceptual Background、Previous Studies 等内容。

### 7.1 Introduction

说明本章的目的和组织方式：

本章讨论什么研究领域；
将回顾哪些理论、概念或技术；
将分析哪些类型的已有研究；
最后如何引出 Research Gap 和 Problem Formulation。

### 7.2 Project Area / Domain Background

介绍项目所在领域，而不是只介绍算法。

例如：

Finance：金融；
Stock Market：股票市场；
Education：教育；
Healthcare：医疗；
Big Data Governance：大数据治理；
Data Quality Management：数据质量管理。
老师用金融和教育举例，说明做预测项目时必须理解应用场景。

### 7.3 Theoretical Background

介绍与项目有关的基本理论和原理。

老师特别说明：硕士生通常不需要像博士生一样深入研究底层理论，但需要理解自己使用的方法如何工作。

### 7.4 Conceptual Background

解释关键概念，例如：

Data Quality；
Data Completeness；
Data Accuracy；
Data Consistency；
Machine Learning；
Classification；
Regression；
Prediction；
Dashboard；
Data Governance。
具体概念应根据自己的项目选择，不需要全部写。

### 7.5 Methodological / Technical Background

如果使用 Deep Learning、Decision Tree、Clustering、NLP 等方法，需要解释：

方法是什么；
基本原理是什么；
输入和输出是什么；
适合解决什么类型的问题；
为什么可能适合本项目。
不需要为了显示技术深度而大段复制算法公式。

### 7.6 Review of Previous Studies

这一部分需要整理已有研究：

研究问题；
数据来源；
研究对象；
变量或特征；
方法；
评价方式；
主要发现；
局限。

### 7.7 Critical Analysis

横向比较研究，而不是一篇论文一段摘要。

### 7.8 Research Gap / Limitations

说明通过文献分析发现的不足。需要有证据，不能凭空宣称“没有人做过”。

### 7.9 Problem Formulation

把文献发现转化为自己的具体项目问题。

### 7.10 Chapter Summary

总结本章讨论了什么，以及如何引出下一章或后续项目设计。

参考目录（供组织内容使用，正式标题以模板为准）
CHAPTER 2: LITERATURE REVIEW

```text
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

## 8. Domain Knowledge：数据科学学生也必须理解应用领域

### 8.1 老师的重点

老师说，Data Science 学生除了理解技术，还必须理解项目所在的 Domain（领域）。

不能只知道模型怎么运行，却不知道预测对象或业务场景是什么。

### 8.2 金融领域示例

如果研究 Stock Market Prediction（股票市场预测），就需要理解：

股票市场预测是什么意思；
股票价格和市场变化有哪些特征；
投资者行为可能如何影响市场；
市场数据有哪些模式；
研究使用的变量代表什么。

### 8.3 教育领域示例

如果研究 Education / Student Performance Prediction，就需要理解：

教学与学习过程；
学生学业表现的定义；
学业表现可能涉及哪些因素；
数据中的变量如何对应真实教育情境；
预测结果可能如何被使用。
老师提醒，教育不只是“教学和学习”两个词，背后还有很多具体因素和情境。

### 8.4 硕士项目中的领域理解应达到什么程度？

不要求成为金融、教育或医疗领域的专家，但至少应能解释：

研究对象是什么；
主要概念是什么；
为什么这个问题在该领域有意义；
数据字段代表什么；
结果如何解释；
技术方法与领域问题有什么联系。

## 9. 硕士与博士研究深度的区别

老师表示，硕士学生通常是在应用现有方法解决项目问题，不一定需要提出新的深度学习方法。

### 9.1 硕士阶段需要掌握

了解所用技术的基本原理；
知道方法如何工作；
理解关键公式或参数的含义；
能解释为什么选择这个方法；
能正确应用并评估方法；
能解释结果和限制。

### 9.2 不一定要求做到

发明新的机器学习算法；
从数学层面重新推导全部底层理论；
提出全新的深度学习架构；
对算法理论进行博士级别的创新研究。
这并不表示可以完全不懂原理。老师的意思是研究深度要与硕士项目的目标相匹配。

## 10. Research Gap、Limitation 与 Problem Statement

### 10.1 三者的区别

| 术语 | 含义 | 应回答的问题 |
| --- | --- | --- |
| Research Gap | 研究空白 | 现有研究还没有充分覆盖什么？ |
| Limitation | 研究局限 | 已有研究受什么限制？ |
| Problem Statement | 问题陈述 | 本项目要解决或调查的具体问题是什么？ |

### 10.2 Research Gap 的证据来源

可能来自：

多篇研究都没有处理某一类数据；
某些方法只在有限场景中测试；
评价指标不全面；
数据集或样本存在限制；
研究结果在不同场景下不一致；
现有系统缺少某项功能；
某个应用领域仍缺少足够的实证研究。
这些只是可能的 Gap 类型。具体能否成立，必须通过文献确认。

### 10.3 Problem Statement 的构建顺序

说明应用背景；
说明现实或研究中的问题；
提供文献证据；
说明已有研究做了什么；
说明还存在什么不足；
说明这个不足为什么重要；
限定本项目要处理的具体问题。

### 10.4 问题陈述常见错误

只写“机器学习很重要”；
只写“数据量越来越大”；
只说“我想做一个系统”；
只说“现有方法不好”，但没有文献证据；
把整个领域的问题都作为自己的项目；
直接写解决方案，却没有说明问题为什么存在。

## 11. Research Question 与 Project Objective：必须逐项对应

### 11.1 两个概念的作用

Research Question（RQ）： 项目最终要回答的问题。

Project Objective（RO）： 为了回答问题，需要完成的具体任务。

老师明确强调两者必须 mapped / aligned。

### 11.2 对应示例

| Research Question | 对应 Project Objective |
| --- | --- |
| RQ1：哪些因素被用于预测学生学业表现？ | RO1：通过文献综述识别相关预测因素。 |
| RQ2：已有研究使用了哪些机器学习方法？ | RO2：通过文献综述识别并归纳相关机器学习方法。 |
| RQ3：在本项目数据上，所选模型的预测表现如何？ | RO3：在一致实验设置下实施并评价所选模型。 |

注意：第三组只有在项目确实要做模型实验时才适用。不要为了凑 RQ 数量而加入不打算完成的任务。

### 11.3 对齐检查表

每个 RQ 都有对应 RO。
每个 RO 都能帮助回答相应 RQ。
RQ 和 RO 使用相同的核心概念。
研究方法能实际完成 RO。
数据能够支持这些 RQ。
最终结果能够回答 RQ。
没有写进目标却不打算实施的任务。

## 12. 课堂示例：Student Academic Performance Prediction

老师用这个例子解释 Research Question、Objective、Literature Review 和 Model Comparison 之间的关系。

### 12.1 课堂 Research Question

What factors and machine learning approaches have been used to predict student academic performance?

中文：

哪些因素和机器学习方法曾经被用于预测学生学业表现？

这道题有两个核心部分：

What factors：已有研究使用了哪些因素；
What machine learning approaches：已有研究使用了哪些机器学习方法。

### 12.2 对应 Project Objective

To identify relevant factors and machine learning approaches used in student academic performance prediction through a literature review.

中文：

通过文献综述，识别用于学生学业表现预测的相关因素和机器学习方法。

老师的意思是：研究问题提出需要回答的内容，Objective 则说明你准备完成什么工作来回答它。

### 12.3 为什么 Project 1 Presentation 必须能回答？

考官可能直接问：

What factors have been used to predict students' academic performance?
What machine learning approaches have been used?
如果你在 RQ 中提出了这些问题，就应该已经通过 Literature Review 做了初步调查，并能回答。

### 12.4 因素与模型需要从文献中提取

不要在没有文献依据时直接把某些因素说成“经典因素”或“最重要因素”。

阅读每篇论文时，分别记录：

使用了哪些输入变量；
目标变量是什么；
数据来自哪里；
研究使用什么模型；
如何评估；
得到了什么结论。

## 13. 模型选择、模型比较与最终模型实施

### 13.1 如果项目目标是比较模型

老师举例说明，可以从文献中找到多种候选方法，再选择其中若干方法进行实际比较。

流程：

Literature Review：了解已有模型；
Candidate Selection：选择适合项目的候选模型；
Experimental Design：确定统一的数据和实验设置；
Model Training：训练候选模型；
Evaluation：使用评价指标；
Comparison：比较结果；
Model Selection：选出适合当前项目的模型；
Implementation：将选定模型用于项目。

### 13.2 文献中的模型不等于都要实现

假设文献综述中看到五种模型，不代表自己必须实现五种。应根据：

RQ 和 RO；
数据类型；
数据规模；
任务类型；
可用计算资源；
项目时间；
可解释性要求；
评价目标；
选择合适的候选模型。

### 13.3 如果 RQ 明确要求比较，就必须有比较

如果 Research Question 是“哪个模型表现更好”，只训练一个模型无法充分回答这个问题。

反过来，如果项目的主要问题是数据清洗或 Dashboard 开发，就不一定要为了比较模型而增加模型实验。

### 13.4 比较要公平

尽可能保持：

相同数据集；
相同训练/测试划分；
相同预处理条件；
相同评价指标；
合理的参数设置；
结果解释一致。
不同数据条件下的 Accuracy 不能直接说明模型优劣。

## 14. 项目重点可以是预处理、模型、Dashboard 或系统

老师明确提醒，不是每个 Data Science 项目都必须把模型作为唯一重点。

### 14.1 方向 A：Data Pre-processing

适合：

组织内部数据；
多来源数据；
网络爬取数据；
数据格式混乱；
缺失值、重复值和异常值较多；
字段定义不一致；
需要数据整合。
可能的主要工作：

Data Collection；
Data Cleaning；
Data Integration；
Missing Value Handling；
Duplicate Handling；
Outlier Handling；
Data Transformation；
Feature Engineering。

### 14.2 方向 B：Model Development / Comparison

适合：

数据已经比较完整；
研究问题关注预测或分类；
需要比较不同方法；
有清楚的目标变量；
有合适评价指标。
主要工作：

Model Selection；
Model Training；
Parameter Tuning；
Evaluation；
Model Comparison；
Interpretation。

### 14.3 方向 C：Dashboard / Platform

适合：

项目关注分析结果呈现；
用户需要监控数据或指标；
需要交互式展示；
需要辅助管理或决策。
可能展示：

数据质量指标；
缺失值比例；
异常数据数量；
数据源比较；
变化趋势；
过滤、查询和导出功能。

### 14.4 方向 D：综合项目

可以结合预处理、分析、模型和 Dashboard，但要明确主线。不要每个部分都做一点，却没有一个明确的研究贡献。

## 15. Project Scope：明确项目边界

老师明确说要 Define Project Scope / Boundary。

### 15.1 Scope 应回答的问题

研究对象是什么？
研究领域是什么？
研究问题是什么？
使用什么数据？
数据范围、时间范围和样本范围是什么？
使用哪些变量或指标？
使用哪些方法？
开发什么成果？
如何评价？
哪些内容不在本项目范围内？

### 15.2 为什么 Scope 重要？

如果范围太大：

文献综述会无限扩张；
数据需求难以满足；
方法会越来越多；
项目时间不够；
最终很难形成清晰成果。
范围缩小不是降低项目价值，而是让项目可执行、可验证。

### 15.3 Scope 模板

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

## 16. Assignment 3：Project Methodology / Research Design

### 16.1 老师对 Assignment 3 的说明

老师说 Assignment 3 是 Project Methodology / Research Methodology 相关内容，但也明确表示当时还没有把全部方法论讲完。

老师仍然希望学生继续练习 Problem Formulation，因为 Project 1 Presentation 中考官会先了解项目问题。

### 16.2 方法设计的顺序

Problem Formulation；
Research Questions；
Project Objectives；
Research / Project Design；
Data Collection Method；
Data Understanding；
Data Processing；
Technique / Algorithm / Model / System；
Evaluation / Testing；
Expected Outcome / Findings。

### 16.3 Project Methodology 与 Research Methodology

在后续报告中，老师倾向于 Data Science / 项目开发类型使用 Project Methodology 这个章节名称，因为学生是在设计并实施一个项目或原型。

老师说，传统研究论文中常见 Research Methodology，但在需要形成项目、功能或 Prototype 的场景中，Project Methodology 可能更合适。

最终以老师提供的模板和 Coordinator 的要求为准。

### 16.4 PESTLE / P6 与 Agile：录音待确认

课堂中有一段老师说 Data Science 可以使用一个听起来像 “P6” 或 “PESTLE” 的框架，后续又提到如果开发系统，可以使用 Agile。

由于音频识别不清，不能确定老师具体说的是哪个框架。不要直接把 P6、PESTLE 或 Agile 当成所有 Data Science 项目的强制方法。

能够确认的是：

如果项目是系统开发，老师提到可以考虑 Agile；
如果项目是数据分析、模型或 Dashboard，方法应按项目性质选择；
研究设计不必一律采用同一种方法。

## 17. 定性、定量、实验、探索性与设计型项目

老师解释研究设计可能包括 Quantitative、Qualitative、Experimental、Design、Comparative 等，具体取决于项目。

### 17.1 Qualitative Research（定性研究）

典型方法：Interview。

步骤：

设计访谈问题；
选择受访者；
进行访谈；
录音或记录；
Transcription：转录成文字；
整理访谈笔记；
分析访谈内容；
归纳主题或观点。
适合研究经验、态度、观点、组织实践等。

老师认为 Data Science 学生通常主要处理数据，不一定需要采用定性研究，但并没有禁止。

### 17.2 Quantitative Research（定量研究）

老师用 Survey / Questionnaire 举例：

设计问卷；
确定受访者；
发放问卷；
收集回答；
对答案进行统计；
计算数量、百分比或其他统计量；
分析结果。
老师举例的 Likert 选项包括：

Strongly Agree；
Agree；
Neutral；
Disagree；
Strongly Disagree。
如果 Data Science 项目使用统计分析，也可能包含定量或实证分析的特征。

### 17.3 Experimental Research（实验研究）

例如比较模型：

选择数据集；
设定实验条件；
选择候选模型；
运行实验；
记录结果；
使用指标评价；
比较结果。
老师认为 Data Science 项目可以考虑 Experimental，也可以结合 Quantitative。

### 17.4 Exploratory Research / EDA（探索性分析）

项目可以先探索数据，了解：

数据分布；
变量关系；
缺失值；
异常值；
类别不平衡；
潜在模式。
之后再决定是否进行模型训练、系统开发或其他分析。

### 17.5 Design / System Development

如果项目要开发软件、Dashboard 或 Prototype，就需要说明设计和开发过程。老师提到 Agile 可能适用于系统开发型项目，但具体采用什么方法需结合项目。

### 17.6 研究设计类型不是固定答案

老师强调，不是所有项目必须严格属于 Experimental 或 Quantitative。要根据：

研究问题；
数据来源；
项目成果；
采用的方法；
评价方式；
来设计。

## 18. 数据来源、数据许可、NDA 与数据复杂度

### 18.1 老师提到的主要数据来源

| 数据来源 | 英文 | 说明 |
| --- | --- | --- |
| 公共数据仓库 | Public Repository | 从公开数据平台取得 |
| 政府开放数据 | Government Open Data Portal | 政府发布的开放数据 |
| 组织数据 | Organization Data | 企业或机构内部数据 |
| 网络爬取 | Web Scraping / Crawling | 从网站收集数据 |
| 问卷 | Questionnaire | 通过调查收集数据 |
| 访谈 | Interview | 收集受访者观点和经验 |

### 18.2 使用组织数据必须取得许可

老师明确提醒：

组织数据可能很敏感；
必须先询问并获得许可；
组织可能有 Data Security / Privacy / Confidentiality 政策；
可能要求签署 NDA；
可能有指定的数据使用范围；
需要确认是否允许用于学术研究；
需要确认是否允许在论文或答辩中展示；
可能需要匿名化、脱敏或限制访问。
不能因为自己在组织工作，就默认可以使用其数据。

### 18.3 使用 Kaggle 等公开数据集的项目复杂度

老师说，如果从 Kaggle 等在线仓库直接下载数据，获取可能很容易，数据也可能已经经过一定清洗。

因此项目要体现足够的研究和实施工作，例如：

更深入的数据探索；
比较两种或多种方法；
参数优化；
模型评估；
多数据源整合；
设计完整分析流程；
开发平台或 Dashboard；
对结果进行深入解释。
这不是说 Kaggle 数据必然完全干净，而是提醒学生不要只下载数据、运行现成代码，就认为项目已经足够完整。

### 18.4 组织数据和爬取数据的项目重点可能不同

如果使用真实组织数据：

可能有组织规定；
可能需要满足特定业务需求；
可能存在复杂字段；
可能涉及数据权限和保密。
如果使用 Crawling 数据：

数据格式可能混乱；
数据来源可能不统一；
需要清洗和整合；
预处理可能成为主要工作量。
老师的核心意思：项目复杂度应来自实际数据和研究任务，而不是机械增加算法数量。

## 19. Data Science 项目的完整实施流程

老师提到，项目报告应讨论数据收集、数据理解、探索、处理、模型或技术、评价方法等内容。

### 19.1 Data Collection

写明：

数据来源；
获取方式；
数据范围；
数据量；
字段；
授权和保密；
数据选择理由。

### 19.2 Data Understanding

写明：

数据结构；
字段含义；
数据类型；
记录数量；
变量分布；
数据质量初步情况。

### 19.3 Exploratory Data Analysis

按项目需要分析：

Descriptive Statistics；
Missing Values；
Duplicate Records；
Outliers；
Distribution；
Correlation / Association；
Class Distribution；
Visualisation。

### 19.4 Data Processing

可能涉及：

Data Cleaning；
Missing Value Handling；
Duplicate Removal；
Outlier Handling；
Data Type Conversion；
Data Integration；
Data Transformation；
Text Processing；
Feature Engineering；
Feature Selection。
并非每个项目都需要全部步骤。老师特别说，是否需要 Feature Selection、数据清洗等取决于项目类型。

### 19.5 Model / Algorithm / Technique

如果使用算法，需要说明：

算法名称；
算法用途；
输入和输出；
基本原理；
为什么选择；
关键参数或设置；
如何应用到当前数据。
如果使用 Clustering，可能需要说明聚类方法和聚类数量等设置。

如果使用 NLP / Sentiment Analysis，需要说明文本处理流程。

### 19.6 Evaluation

说明评价方法：

评价对象是什么；
选择什么指标；
指标适用于什么任务；
如何计算或比较；
如何解释结果。
老师提到了 Classification 和 Regression 等分析类型，部分同学可能尚不熟悉。方法章节应解释本项目真正使用的分析任务和评价方式。

### 19.7 Dashboard / System Design

如果项目需要 Dashboard 或平台：

说明系统功能；
说明数据处理和展示流程；
说明用户如何使用；
说明关键页面或模块；
说明测试方法；
展示初步成果或原型。
如果项目不需要 Dashboard，就不必强行增加。

## 20. 算法、工具、框架和评价方法应该写到什么程度

老师强调，不需要把所有工具、算法和框架都列出来，只写项目实际使用的内容。

### 20.1 需要说明什么

选择了什么算法或技术；
它解决什么任务；
为什么适合项目；
关键步骤是什么；
如何设置；
如何评价。

### 20.2 不需要写什么

与项目无关的算法清单；
没有实际使用的框架；
大段复制教科书定义；
没有解释为什么使用的技术名词；
只为了显得复杂而加入的模型。

### 20.3 方法章节与文献综述的分工

| 内容 | Chapter 2 Literature Review | Chapter 3 Project Methodology |
| --- | --- | --- |
| 介绍已有模型 | 介绍研究中用过哪些模型 | 说明本项目实际采用哪些模型 |
| 比较研究 | 比较已有论文 | 说明本项目实验设置 |
| 算法原理 | 介绍必要背景 | 说明如何应用 |
| 数据来源 | 文献中的数据来源 | 自己项目的数据来源 |
| 评价方法 | 综述文献使用的评价指标 | 说明自己如何评价 |
| 研究空白 | 识别已有研究不足 | 说明方法如何应对项目问题 |

## 21. Assignment 4 / Final Project Proposal：如何整合前面作业

### 21.1 Final Proposal 的目的

老师解释，Final Project Proposal 是将 Semester 1 的 Assignment 1、2、3 整合起来，形成结构完整的项目计划书。

不是把三份作业直接复制粘贴，而是：

统一项目题目；
统一问题陈述；
统一 Research Questions；
统一 Project Objectives；
完善 Literature Review；
完善 Project Methodology；
调整章节之间的逻辑；
按正式模板组织。

### 21.2 前面作业可以修改

老师明确表示，前面提交过的内容仍然可以修改。

例如：

发现之前的 Research Framework 不合适，可以调整；
发现研究方法不正确，可以修改；
发现研究范围过大，可以缩小；
发现 Literature Review 不够充分，可以补充；
发现 RQ 与 RO 不一致，可以重新对齐。
老师说项目是 Progressive（渐进式）的，目的是不断改善，而不是必须死守 Assignment 1、2、3 的旧版本。

### 21.3 重大变化要沟通

虽然可以修改，但课程指导中也强调：

保持同一个项目主题；
重大变化需要讨论；
需要通知相关老师或导师；
需要解释为什么改变；
需要保证新题目、问题、目标、方法和范围彼此一致。

### 21.4 Proposal 章节的课堂方向

课堂中提到的章节包括：

Chapter 1：Introduction、Background、Problem、Research Question、Objective、Scope 等；
Chapter 2：Literature Review；
Chapter 3：Project Methodology；
Chapter 4：课程 Proposal 中的 Expected Outcome。
老师还提到 Project 1 可能需要 Exploratory Data Analysis 和 Initial Findings。要注意，课程中的 Proposal Assignment 与正式 Project 1 可能是不同提交阶段，Chapter 4 的具体内容应以对应任务说明为准。

## 22. Project 1：研究计划、初步分析和答辩重点

### 22.1 Project 1 的核心

Project 1 不只是讲“我要做什么系统”或“我要使用什么模型”，而是要说明：

项目问题是什么；
为什么值得调查；
文献如何支持问题；
研究范围是什么；
目标是什么；
方法是否合理；
项目是否可以完成。

### 22.2 考官关注 Why

老师反复强调 Project 1 中的 Why：

Why this problem?
Why is this issue important?
Why does it need investigation?
Why are existing approaches insufficient?
Why is the proposed project needed?
How（怎么解决）也重要，但不是一开始就只讲技术方案。

### 22.3 Project 1 可能包含的内容

课堂提到：

更完整的 Literature Review；
Project Methodology；
数据来源；
EDA；
Initial Findings；
项目设计；
可能的系统设计或技术方案。
具体章节和演示形式需要看后续正式要求。

### 22.4 Presentation 形式尚未最终确定

老师提到面对很多学生时，逐个进行长时间现场答辩可能不现实，并考虑过视频 Presentation 等方式。但当时仍在思考如何安排。

因此，不能把“视频汇报”当作已经正式确定的提交方式。

## 23. Project 2 与最终项目报告：阶段区别

课堂提到 Project 2 是后续阶段，老师也展示了学校正式论文模板中的部分页面。

能够确认的区别：

Project Proposal：说明计划做什么以及准备怎样做；
Project 1：进一步完善计划，可能需要初步数据分析或初步发现；
Project 2：后续实施和提交阶段，可能需要导师签字等正式流程；
最终 Master Project Report：按照学校最终论文格式完成。
老师提到 Supervisor Signature 是以后 Project 2 提交时使用，不是当前课堂 Assignment 4 需要的内容。

具体 Project 2 的内容、页面、审批流程和签字要求，以正式文件为准。

## 24. 报告章节、模板和前置页面

### 24.1 使用老师上传的模板

老师强调，Assignment 应使用他上传的 Thesis Template：

章节标题按模板；
字体按模板；
页面格式按模板；
行距按模板；
目录和列表按模板；
后续 Project 1 继续沿用模板。
不要自行随意改变版式。

### 24.2 老师讲到的前置页面

课堂讲解模板时，老师逐项指出哪些页面当前课堂需要、哪些不需要。

根据录音整理：

| 页面 / 部分 | 老师课堂表达 | 当前理解 |
| --- | --- | --- |
| Declaration | 老师说后续提交需要 | Assignment 4 是否需要按课堂说明准备，最终核对清单 |
| Acknowledgement | 老师说需要 | 按模板准备 |
| Abstract | 老师表示需要，但之后再讲结构 | 暂时等待老师说明内容 |
| Table of Contents | 老师明确要练习 | 需要准备 |
| List of Tables | 有表格时 | 按模板处理 |
| List of Figures | 有图片时 | 按模板处理 |
| Supervisor Signature | 老师说 Project 2 后续使用 | 当前 Assignment 4 不需要 |
| 正式提交声明或其他审批页 | 部分页面老师说当前课程不需要 | 按具体 Assignment 清单确认 |

注意：录音中老师一边展示学校完整 Thesis Template，一边说明自己这门课不需要所有页面。学校完整模板不等于当前每份 Assignment 都要提交全部页面。

### 24.3 Abstract 的结构尚未讲解

老师说 Assignment 4 可能需要 Abstract，但具体内容和结构会之后讲。

因此当前不要自行认定字数、段落数或固定格式。等老师正式说明。

### 24.4 Table of Contents

老师希望学生练习如何制作目录。

建议使用 Word 的 Heading 样式：

Heading 1：一级章节；
Heading 2：二级标题；
Heading 3：三级标题。
再用 Word 自动生成目录，修改章节后更新目录。

## 25. Thesis Title：研究题目如何写

老师提醒，标题应准确表达研究内容，尽量避免过于普通、宽泛的表达，例如重复使用 “Study of...” 或 “Study on...”。

### 25.1 标题要体现什么

可以考虑：

研究对象；
研究问题；
主要方法；
应用场景；
研究成果类型。
不一定全部放进标题，但要让读者能理解项目核心。

### 25.2 标题常见问题

太宽泛；
只写领域，没有具体问题；
只写技术，没有研究对象；
题目暗示要比较模型，实际却没有比较；
题目说开发 Dashboard，实际没有系统实现；
题目与 RQ、RO 不一致。

### 25.3 标题修改示例

课堂整理中曾用以下例子说明：

较宽泛：Study of Data Quality in Big Data Governance
更直接：Data Quality Assessment and Monitoring for Big Data Governance
这只是标题表达示例，不代表老师已经批准该题目。

## 26. 报告页数、排版与语言

### 26.1 课堂中提到的页数

录音中老师口头提到：

| 阶段 | 课堂中出现的页数 | 说明 |
| --- | --- | --- |
| Final Project Proposal / 课程 Proposal | 20–30 页 | 课堂口头范围 |
| Project 1 | 约 50–70 页 | 老师口头估计 |
| Project 2 | 最多约 100 页 | 老师口头提到 |
| Master Project Report | 最多约 200 页 | 老师谈到的一般最终报告篇幅 |

老师说页数包括 Table、Figure、Illustration，但不包括 Bibliography / References。

由于录音中有数字重复和口头修正，最终一定要以 LMS 和正式指南为准。

### 26.2 语言

老师说可以使用 English 或 Bahasa Melayu。结合班级情况，老师认为大家主要使用 English。

### 26.3 排版

按模板执行：

字体；
字号；
行距；
标题级别；
页边距；
表格和图片格式；
页码；
目录；
参考文献格式。
录音中关于某些颜色、灰色或蓝色的描述不清楚，不能仅凭录音推断。

## 27. Harvard Referencing：正文引用和文末参考文献

### 27.1 UTM 使用 Harvard

老师明确说课程使用 Harvard 格式，而不是部分期刊采用的数字编号格式。

Harvard 示例（仅作格式说明）
作者作为句子的一部分：Smith (2023) noted that ...
括号引用：... (Smith, 2023).
多位作者：Smith et al. (2023).
同一作者同一年多篇：Smith (2023a)、Smith (2023b)。
不要把 Harvard 与 IEEE 数字引用混用。

### 27.2 正文引用必须有对应 References

例如正文写了：

Previous studies have applied machine learning to student performance prediction (Smith, 2023).

文末就应有与 Smith (2023) 对应的完整参考文献信息。

反过来，References 中列出的资料也应该确实在正文中被引用。

### 27.3 老师提到的资料类型

| 资料类型 | 英文 | 适合用途 |
| --- | --- | --- |
| 学术期刊 | Journal Article | 方法、结果、已有研究 |
| 学术会议 | Conference Paper | 新方法、技术研究 |
| 书籍 | Book | 系统解释概念和方法 |
| 博士论文 | PhD Thesis | 深入研究、方法和理论 |
| 硕士论文 | Master Thesis | 相关项目和研究实践 |
| 标准 | Standard | 技术规范、评价要求 |
| 法规 | Regulation | 监管、合规背景 |
| 政策 | Policy | 组织或政府政策 |
| 正式报告 | Official Report | 行业和组织背景 |
| 内部报告 | Internal Report | 组织内部数据或项目依据 |
| 新闻 | Newspaper Article | 当前事件、市场背景 |
| 杂志 | Magazine | 行业趋势和观点 |
| 网络资料 | Internet Source | 需要审查权威性 |

### 27.4 书籍和 Thesis 也可以引用

老师特别强调，参考文献不只有 Journal Article。

如果某本书对某种方法解释得比论文更详细，可以引用该书。

如果你使用学长学姐的 Thesis 中的信息，也应正确引用 Thesis，而不是把来源隐藏起来。

引用 Thesis 时，需按学校格式填写作者、标题、学位类型、授予机构等信息。

### 27.5 标准、法规和组织报告

如果项目涉及监管、行业标准或组织政策，可以把相应正式资料列为参考来源。

如果使用内部报告，要遵守组织的保密要求。

### 27.6 新闻和杂志

老师说明，新闻并非完全不能引用。它更适合支持行业动态、事件、市场背景或专家观点，而不适合代替严谨的算法方法研究。

例如研究市场趋势时，新闻可能帮助说明某段时期发生了什么，但模型方法和技术依据仍应优先查学术来源。

### 27.7 Wikipedia 和 Google

老师不建议将 Wikipedia 或 Google 本身当作高质量学术来源。

Google 可以用于搜索，但引用时应找到原始文章、正式报告或原始发布机构。

## 28. EndNote：文献管理与交叉核对

老师向学生介绍 EndNote，认为它能简化文献管理。

### 28.1 基本用途

导入文献；
管理作者、题目、年份、DOI 等信息；
在 Word 中插入引用；
自动生成 References；
使用 Harvard 样式；
进行引用和参考文献核对。

### 28.2 建议工作流程

从可靠学术数据库或出版社页面获取论文；
导入 EndNote；
检查作者、年份、题目、期刊和 DOI；
在 Word 中插入引用；
选择课程要求的 Harvard 样式；
自动生成 References；
检查正文和文末列表；
最终人工核对原文。

### 28.3 老师说的 cross-reference

老师提到通过 EndNote 管理和交叉核对，避免正文引用与 References 之间出现遗漏或“悬空”的情况。

需要检查：

正文引用是否缺少文末条目；
References 是否有未在正文使用的条目；
是否存在重复记录；
作者拼写是否一致；
年份是否正确；
引用样式是否统一。

## 29. 可引用的资料类型及其适用范围

这一部分是老师参考文献讲解的归纳，方便实际写论文时判断资料放在哪里。

| 资料 | 适合支持什么 | 使用时注意 |
| --- | --- | --- |
| Journal Article | 方法、实验、研究结果 | 核对期刊、作者、年份 |
| Conference Paper | 新技术、初步研究 | 了解会议质量和论文内容 |
| Book | 概念、方法的系统说明 | 记录出版信息 |
| Thesis | 详细研究设计和项目实践 | 正确标注学位与大学 |
| Standard | 指标、技术规范 | 使用适用版本 |
| Regulation | 法律或监管要求 | 核对现行版本 |
| Policy | 组织制度和政策 | 说明发布机构 |
| Annual Report | 组织或行业数据 | 注意年份和公开状态 |
| Internal Report | 企业内部信息 | 先取得授权并保护机密 |
| Newspaper | 事件、行业趋势 | 不用来替代方法学论文 |
| Magazine | 行业观点 | 判断作者和出版物可信度 |
| Website | 官方技术说明、产品文档 | 优先使用官方来源并记录访问信息 |

## 30. Open Access、Restricted 与 Confidential

### 30.1 Open Access

老师解释，Open Access 意味着有兴趣的读者可以通过图书馆等渠道访问论文，作为研究参考。

### 30.2 Restricted

老师课堂中说明：

Restricted 表示限制访问；
录音中提到限制期为五年；
五年后图书馆可能将论文转为 Open Access；
这适用于组织同意未来公开的情况。

### 30.3 Confidential

如果组织明确表示资料是 Private and Confidential，论文不能公开，就需要按照学校流程申请 Confidential。

老师说明，Confidential 意味着普通公众不能访问论文，不能简单地因为限制期到了就自行公开。

### 30.4 三种分类的对比

| 类型 | 公开情况 | 课堂中描述 | 注意事项 |
| --- | --- | --- | --- |
| Open Access | 可公开访问 | 读者可通过图书馆查阅 | 确认数据和授权允许公开 |
| Restricted | 限期限制 | 老师提到五年后可能开放 | 需核对学校规则和组织许可 |
| Confidential | 机密限制 | 不作为普通公开论文开放 | 组织明确禁止公开时考虑 |

### 30.5 使用企业数据时的流程

先确认数据所有者；
取得书面许可；
确认可使用的字段和用途；
确认能否在论文中展示；
确认能否在答辩 PPT 或视频中展示；
如需签 NDA，先完成；
按要求进行脱敏；
确认论文应为 Restricted 还是 Confidential；
按学校流程申请；
保存授权记录。
重要： 老师的五年 Restricted 说明需要核对 UTM 当前政策和审批表，不能单独依赖课堂口头说明。

## 31. Academic Integrity：学术来源、批判性思维与 AI 使用

### 31.1 老师对所有作业的共同要求

课堂中老师提醒：

Use Academic Sources；
Critical Thinking；
Independence；
Alignment；
项目内容应有清楚依据；
项目各部分应互相对应。

### 31.2 使用 ChatGPT / General AI

老师说，如果使用 ChatGPT AI，必须检查来源。

具体要做：

检查论文是否真实存在；
检查作者和年份；
检查 DOI；
检查期刊或会议；
阅读原文，而不是只看 AI 摘要；
确认 AI 的结论是否符合原文；
不要把未经核对的 AI 生成引用放进论文。

### 31.3 独立思考

AI 可以帮助整理、解释和起草，但你需要理解：

为什么选这个问题；
文献之间有什么差异；
Research Gap 是怎么得出的；
为什么选择某种方法；
结果意味着什么。
答辩时，不能只会复述 AI 给出的文字。

## 32. 项目连续性、修改原则与沟通要求

老师在课程 Guideline 中提醒：

所有 Assignment 应保持同一个 Project Topic；
重大变化要讨论；
重大变化要通知；
需要解释为什么变化；
前面作业中的内容可以持续完善；
不能因为之前提交过，就不允许自己改进。

### 32.1 哪些情况可能需要沟通？

更换研究领域；
大幅改变项目题目；
更换主要研究问题；
更换主要数据来源；
从模型研究转向系统开发；
删除主要项目目标；
改变最终交付成果。

### 32.2 哪些属于正常迭代？

补充文献；
缩小 Scope；
修改措辞；
优化 RQ 和 RO；
更换更适合的评价指标；
根据数据情况调整预处理流程；
修改不合理的 Methodology。

## 33. 所有作业之间的关系总表

| 阶段 | 主要问题 | 主要工作 | 预期产出 |
| --- | --- | --- | --- |
| Assignment 1 | 我想研究什么？为什么？ | 研究兴趣、暂定题目、问题、三篇相关论文 | 初步项目方向 |
| Assignment 2 | 别人做过什么？还缺什么？ | Literature Review、Critical Analysis、Research Gap、Problem Formulation | 深入的 Chapter 2 |
| Assignment 3 | 我准备怎样做？ | Research / Project Design、数据来源、方法和流程 | Project Methodology |
| Assignment 4 / Proposal | 如何把项目完整计划起来？ | 整合 A1–A3，修订章节和逻辑 | 完整 Proposal |
| Project 1 | 为什么这个项目值得做？准备如何实施？ | 完善问题、方法、EDA、初步发现和答辩 | 项目计划/阶段报告 |
| Project 2 | 项目如何完成并验证？ | 后续实施、测试、结果与最终报告 | 完整项目成果 |

## 34. 课堂日期、分数、页数及尚待核实的信息

### 34.1 课堂中听到的日期

| 内容 | 录音信息 | 状态 |
| --- | --- | --- |
| Assignment 1 | “18号” | 月份和最终日期需核对 |
| Assignment 3 | 录音/课堂整理中出现 22 December | 以 LMS 为准 |
| Project Methodology 后续活动 | 另一段录音出现 23 December 等日期信息 | 具体含义不清，需看课件 |
| Assignment 4 / Proposal | 录音没有完整确认最终截止日期 | 等课程公告 |

### 34.2 课堂中提到的评分

录音中有一处老师提到“10%”和“40%”等比例，但上下文中老师表示可能会根据设计调整，且语音转写不完整。

因此不应把这些数字作为最终评分比例。需要查看正式 Assessment Breakdown。

### 34.3 需要特别核实的项目

Assignment 1 的具体截止日期；
Assignment 1 是否要 PPT；
Assignment 2 的正式页数和评分标准；
Assignment 3 的准确截止日期；
课堂中听起来像 P6 / PESTLE 的方法框架；
Assignment 4 的正式提交清单；
Abstract 的结构和字数；
Project 1 Presentation 的形式；
Project 1、Project 2 页数；
Restricted 五年后转为 Open Access 的正式政策；
Confidential 论文的学校申请流程；
InnoCom 项目形式是否有特殊要求。

## 35. 可直接使用的作业准备模板

### 35.1 Assignment 1：研究想法表

Research Area:
Specific Research Interest:
Proposed Research Title:

Problem to Investigate:

Why Is This Problem Important?

Relevant Academic Paper 1:
Title:
Author / Year:
Research Problem:
Dataset:
Method:
Main Finding:
Limitation:
Relevance to My Project:

Relevant Academic Paper 2:
Title:
Author / Year:
Research Problem:
Dataset:
Method:
Main Finding:
Limitation:
Relevance to My Project:

Relevant Academic Paper 3:
Title:
Author / Year:
Research Problem:
Dataset:
Method:
Main Finding:
Limitation:
Relevance to My Project:

### 35.2 文献分析表

Paper ID:
Title:
Author:
Year:
Journal / Conference:
DOI:

Research Domain:
Research Problem:
Research Objective:
Dataset / Data Source:
Sample Size:
Factors / Features:
Method / Model:
Evaluation Metrics:
Main Findings:
Strengths:
Limitations:
Possible Research Gap:
Relevance to My Project:

### 35.3 Research Gap 推导表

Existing Research:
已有研究主要做了什么？

Evidence:
哪些论文支持这个判断？

Common Approach:
已有研究通常采用什么方法？

Limitations:
已有研究有哪些限制？

Unresolved Issue:
哪些问题仍未充分解决？

Why Important:
为什么这个问题值得研究？

My Project Focus:
我的项目具体研究哪一部分？

### 35.4 RQ–RO 对齐表

| Research Question | Project Objective | Planned Method | Expected Evidence |
| --- | --- | --- | --- |
| RQ1 | RO1 |  |  |
| RQ2 | RO2 |  |  |
| RQ3 | RO3 |  |  |

### 35.5 Project Scope 表

Project Domain:
Problem:
Dataset:
Data Source:
Data Period:
Variables / Features:
Methods / Algorithms:
System / Dashboard / Prototype:
Evaluation:
Expected Deliverables:
Out of Scope:

### 35.6 Project Methodology 流程表

```text
1. Research / Project Design:
2. Data Collection:
3. Data Understanding:
4. Exploratory Data Analysis:
5. Data Pre-processing:
6. Feature Engineering / Selection (if needed):
7. Model / Algorithm / System Development:
8. Evaluation / Testing:
9. Results / Findings:
10. Expected Deliverables:
```

## 36. 现在开始应该做什么：分阶段行动清单

第一阶段：先完成 Assignment 1
选定 Research Area；
确定 Specific Research Interest；
写出暂定题目；
用 2–4 句话描述要研究的问题；
说明问题的重要性；
找到三篇相关学术论文；
阅读论文摘要、方法、结果和限制；
准备简短口头汇报；
查看 LMS 确认日期和 PPT 要求。
第二阶段：推进 Assignment 2
找到核心论文；
通过作者、References 和引用关系扩展文献；
建立文献分析表；
按主题组织论文；
比较数据、方法、结果和局限；
提炼 Research Gap；
写 Problem Statement；
建立 RQ 和 RO 对应关系；
按 Chapter 2 模板写作；
检查引用真实性和格式。
第三阶段：准备 Assignment 3
明确项目类型；
确定数据来源；
取得数据授权；
确定 Data Collection；
设计 EDA；
决定是否需要预处理和特征选择；
决定是否比较多个模型；
决定是否开发 Dashboard / System；
确定评价方法；
画出项目流程图；
按 Project Methodology 组织内容。
第四阶段：整合 Final Proposal
统一题目；
统一 Problem Statement；
统一 RQ；
统一 RO；
统一 Scope；
完善 Chapter 2；
完善 Chapter 3；
根据老师要求准备 Chapter 4；
使用正式模板；
检查前置页面；
使用 Harvard；
用 EndNote 核对文献；
确认数据保密分类。

## 37. 最重要的课堂结论

Assignment 1： 让老师知道你想研究什么。准备研究领域、具体兴趣、题目、问题、重要性和三篇相关学术论文。
Assignment 2： 深入 Literature Review，比较已有研究，识别 Research Gap 和 Limitations，形成具体 Problem Statement。
Critical Analysis： 不要只介绍每篇论文用了什么模型，要比较数据、方法、结果、优点和局限。这是老师强调的成绩区分点。
Domain Knowledge： Data Science 学生必须理解模型所应用的领域，不可以只懂算法。
Master-level Depth： 硕士项目通常可以应用现有方法，不必为了创新而发明新算法，但必须理解基本原理并能解释选择理由。
RQ–RO Alignment： 每个 Research Question 都要有对应 Project Objective。
Model Selection： 如果研究问题要求比较模型，就需要多个候选模型和公平比较；如果项目重点在预处理或系统开发，则不必机械地做模型比较。
Project Scope： 项目要具体、可完成、可评价。
Methodology： 根据问题、数据和最终成果设计，不是所有项目都必须采用同一种研究设计。
Data Permission： 使用组织数据必须获得许可，可能需要 NDA，并确认论文能否公开。
Project 1： 首先解释 Why，为什么问题值得研究；之后再说明 How，打算如何解决。
Proposal： Assignment 1、2、3 是渐进过程，Final Proposal 可以修订和整合，但重大变化应沟通并说明理由。
Template： 使用老师提供的 Thesis Template；课程作业不一定需要学校完整论文模板中的所有页面。
References： UTM 使用 Harvard；可以引用期刊、会议、书籍、学位论文、标准、法规和正式报告，但要根据资料类型判断用途和可靠性。
EndNote： 用于管理文献和核对正文引用与文末 References。
AI Use： 使用 ChatGPT 等工具后，必须核实来源，不能把 AI 生成的引用未经检查就放进论文。
Confidentiality： Open Access、Restricted 和 Confidential 要按组织授权和学校正式政策决定。
Keep the Same Project Topic： 各次 Assignment 应保持项目主题连续，重大变化需讨论和说明。

## 附录 A · 重要英文术语中英对照

| English | 中文 |
| --- | --- |
| Research Area | 研究领域 |
| Project Area | 项目领域 |
| Specific Research Interest | 具体研究兴趣 |
| Proposed Research Title | 拟定研究题目 |
| Research Problem | 研究问题/项目问题 |
| Problem Identification | 问题识别 |
| Problem Formulation | 问题构建 |
| Problem Statement | 问题陈述 |
| Literature Review | 文献综述 |
| Critical Examination | 批判性审查 |
| Critical Analysis | 批判性分析 |
| Previous Studies | 既有研究 |
| Research Gap | 研究空白 |
| Limitation | 局限性 |
| Research Question | 研究问题 |
| Project Objective | 项目目标 |
| Project Scope | 项目范围 |
| Research Design | 研究设计 |
| Project Methodology | 项目方法论 |
| Research Methodology | 研究方法论 |
| Qualitative Research | 定性研究 |
| Quantitative Research | 定量研究 |
| Experimental Research | 实验研究 |
| Exploratory Data Analysis | 探索性数据分析 |
| Data Collection | 数据收集 |
| Data Understanding | 数据理解 |
| Data Pre-processing | 数据预处理 |
| Feature Selection | 特征选择 |
| Feature Engineering | 特征工程 |
| Classification | 分类 |
| Regression | 回归 |
| Clustering | 聚类 |
| Natural Language Processing | 自然语言处理 |
| Sentiment Analysis | 情感分析 |
| Model Selection | 模型选择 |
| Model Comparison | 模型比较 |
| Evaluation Metrics | 评价指标 |
| Dashboard | 仪表板 |
| Prototype | 原型 |
| Expected Outcome | 预期成果 |
| Initial Findings | 初步发现 |
| Academic Sources | 学术来源 |
| Harvard Referencing | Harvard 引用格式 |
| EndNote | 文献管理工具 |
| NDA | 保密协议 |
| Open Access | 开放获取 |
| Restricted | 限制公开 |
| Confidential | 机密 |
| Declaration | 声明 |
| Acknowledgement | 致谢 |
| Abstract | 摘要 |
| Table of Contents | 目录 |
| List of Tables | 表格目录 |
| List of Figures | 图片目录 |

## 附录 B · 易混淆的课堂细节

### A1 汇报与 A4 前置页面

- A1 口头要求是准备研究想法并向老师汇报，附三篇能启发选题或说明问题的学术论文。老师说这一阶段暂时无需准备 Aims and Objectives。转写未明确规定 PPT，汇报形式和准确日期应查课程通知。老师另提到会上传三份课程材料到 LMS，这与学生准备的三篇论文是两回事。
- A4 使用课程提供的论文模板。较后的课堂说明明确提到 Declaration 和 Acknowledgement，Abstract 则是老师倾向要求、结构待说明。录音把导师签字页与 Project 2 联系起来。老师指着模板讲解，转写未能识别所有被指到的页面，最终按提交清单核对。
- 自动目录的操作顺序可以记为：对各级标题应用 Word 标题样式 → 插入或更新 Table of Contents → 检查层级和页码。表格和图片先插入题注，再按模板生成 List of Tables 和 List of Figures。

### 企业数据授权与论文公开

使用企业数据时，确认允许开展哪些分析、谁可以审阅论文、是否允许展示原始数据或汇总结果、组织名称能否披露，以及论文可以何时公开。数据提供方可能允许课程考核使用，同时限制图书馆公开访问。论文提交或存档、公开访问、数据来源引用分别受不同条件约束。PNC 指 Private and Confidential。Restricted 的“五年”是课堂提及的期限，具体审批与期限应查正式规定。

## 附录 C · 自测题

1. A1 为什么要求三篇学术论文？试着分别说出它们对问题背景、候选方法或已有局限的贡献。
2. 两篇论文的准确率分别为 95% 和 90%，能据此断定前者更好吗？先检查数据、预测任务、划分方式、基线和评价指标。
3. 选一个你想做的问题，写出一组 RQ、Objective、Method 和 Expected Evidence，再检查证据能否直接回答 RQ。
4. 企业允许使用数据完成项目时，还应确认什么？从考核、存档、公开、匿名和引用五个方面逐项回答。
5. 把自己的 Proposal 目录映射到 A1–A3 的产出，检查每个方法是否服务于某个目标，每个目标是否有对应的验证方式。
