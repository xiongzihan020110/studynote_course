# 统计学 Workshop：Case A--D 完整答案整理

> **用途：** 课堂讨论、分组汇报与复习\
> **答题逻辑：**
> 先明确研究问题，再识别变量及数据类型，选择合适图表，解释选择理由，最后说明图表能得出什么结论及其局限。
>
> **重要说明：**
> 本文整理的是前面讨论过的四个案例答案框架。由于当前文档中没有附上各案例的完整原始数据表，因此不虚构具体频数、均值、中位数或标准差。涉及具体结果时，应以老师提供的数据计算结果为准。

------------------------------------------------------------------------

## 一、通用答题模板

每一道题都可以按照下面的顺序回答：

1.  **Research question（研究问题）**：我们想通过数据了解什么？
2.  **Variable(s)（变量）**：需要使用哪些变量？
3.  **Data type and measurement scale（数据类型与测量尺度）**：
    -   Categorical：分类变量
    -   Numerical：数值变量
    -   Nominal：名义尺度
    -   Ordinal：顺序尺度
    -   Interval：区间尺度
    -   Ratio：比率尺度
4.  **Suitable chart（合适的图表）**：选择 Bar chart、Histogram、Box
    plot、Dot plot 等。
5.  **Why this chart?（选择理由）**：解释图表为什么适合这个问题和变量。
6.  **Possible
    findings（可以观察什么）**：说明图表能够揭示的模式、差异或异常。
7.  **Limitation（局限性）**：说明仅凭当前变量或图表还不能回答什么。

### 常见图表选择速查

  ---------------------------------------------------------------------------------------------------
  数据或研究目的                     推荐图表                主要用途
  ---------------------------------- ----------------------- ----------------------------------------
  比较不同类别的数量                 Bar chart（条形图）     比较类别频数或比例

  查看连续数值的分布                 Histogram（直方图）     观察集中区间、偏态和分布形状

  识别异常值、比较中位数和离散程度   Box plot（箱线图）      查看中位数、四分位数、范围及潜在异常值

  展示每个观测值或小样本数值         Dot plot（点图）        查看数据点的位置、聚集和离散情况

  比较两个分类变量                   Grouped/Clustered bar   比较类别组合之间的频数或比例
                                     chart 或交叉表          
  ---------------------------------------------------------------------------------------------------

**记住：**
图表不是随便选的。必须说明"变量是什么、变量属于什么类型、图表能回答什么问题"。

------------------------------------------------------------------------

# 二、Case A -- Clinic Visits（诊所就诊）

## Case 背景与核心问题

本案例围绕诊所就诊数据展开，重点是了解就诊类别、等待时间，以及是否存在异常等待情况。

### Question 1：常见的就诊类型或紧急程度是什么？

**Research question**

What are the most common types of clinic visits or urgency categories?

我们想知道：哪一种就诊类型最常见？不同紧急程度的就诊数量是否有明显差异？

**Variables**

-   Visit Type：就诊类型
-   Urgency Category：紧急程度类别

**Data type and measurement scale**

-   Visit Type：Categorical -- Nominal（分类变量、名义尺度）
-   Urgency Category：Categorical --
    Ordinal（分类变量、顺序尺度；前提是紧急程度有明确等级顺序）

**Recommended chart：Bar chart（条形图）**

**Why this chart?**

A bar chart is suitable because the variables represent categories. It
allows us to compare the frequency of each visit type or urgency
category clearly.

条形图适合分类变量，可以清楚比较不同就诊类型或紧急程度类别的数量。

**Possible findings**

-   哪一种就诊类型出现次数最多。
-   哪一种紧急程度类别占比较高。
-   不同类别之间是否存在明显数量差异。

### Question 2：患者等待时间的分布是什么样的？

**Research question**

How are patients' waiting times distributed?

我们想了解：大多数患者等待多长时间？等待时间是否集中在某个区间？分布是否偏斜？

**Variable**

-   Waiting Time：等待时间

**Data type and measurement scale**

-   Numerical -- Ratio（数值变量、比率尺度）

等待时间有实际数值，零代表没有等待时间，因此属于比率尺度。

**Recommended chart：Histogram（直方图）**

**Why this chart?**

A histogram is appropriate for numerical continuous data. It groups
waiting times into intervals and shows the overall distribution.

直方图适合展示连续数值数据的分布。它可以把等待时间分成若干区间，观察数据集中在哪里，以及是否存在偏态。

**Possible findings**

-   等待时间主要集中在哪个区间。
-   等待时间分布是否对称或偏斜。
-   是否有少数患者等待时间特别长。

### Question 3：如何处理已经核实的 90 分钟等待时间？

**Research question**

Is the 90-minute waiting time an unusual observation, and should it be
removed?

我们要判断：90
分钟是否属于异常值？如果它是真实发生的，是否应该从数据中删除？

**Variable**

-   Waiting Time：等待时间

**Data type and measurement scale**

-   Numerical -- Ratio

**Recommended chart：Box plot（箱线图）**

**Why this chart?**

A box plot is useful for identifying potential outliers and
understanding the median, quartiles and spread of waiting times.

箱线图可以帮助识别潜在异常值，并展示中位数、四分位数和数据离散程度。

**Important interpretation**

如果 90
分钟等待时间已经核实是真实发生的，就不能仅仅因为它数值较大而删除。

-   先核实数据是否录入错误。
-   如果是录入错误，应按数据清理规则处理。
-   如果是真实事件，应保留，并进一步调查原因。
-   可以使用 IQR 方法识别潜在异常值，但"潜在异常值"不等于"错误数据"。

**IQR rule**

-   IQR = Q3 − Q1
-   Lower fence = Q1 − 1.5 × IQR
-   Upper fence = Q3 + 1.5 × IQR

超出上下界的数据点通常会被标记为潜在异常值，但仍需要结合实际背景判断。

## Case A 最终建议

-   **最有用的图表：** Histogram。它能整体展示患者等待时间的分布。
-   **辅助图表：** Box plot。它适合进一步检查较长等待时间及潜在异常值。
-   **不太适合的图表：** Pie chart 不适合直接展示连续等待时间的分布。

**Limitation**

等待时间图表本身无法解释为什么某些患者等待很久。还需要结合医生数量、患者紧急程度、到达时间、诊所工作量等信息。

## Case A -- English group discussion script

For Case A, we focus on clinic visits and patients' waiting times.

For Question 1, we can use a bar chart to compare the frequency of
different visit types or urgency categories. These are categorical
variables, so a bar chart is appropriate.

For Question 2, we recommend a histogram to show the distribution of
patients' waiting times. Waiting time is numerical data, and the
histogram helps us identify the most common waiting-time range and
whether the distribution is skewed.

For Question 3, we can use a box plot to identify potential outliers.
The 90-minute waiting time should not be removed automatically. Since it
has been verified, we should retain it and investigate the possible
reason.

Overall, the histogram is useful for understanding the general
distribution, while the box plot helps us examine unusual waiting times.
However, we need additional information, such as staffing levels and
patient urgency, to explain why long waiting times occur.

## Case A -- 中文理解

A 案例主要研究诊所就诊情况和患者等待时间。

第一题用条形图比较不同就诊类型或紧急程度的数量，因为它们属于分类变量。

第二题用直方图展示等待时间的分布，因为等待时间是数值变量。直方图可以帮助我们看出患者通常等待多长时间，以及数据是否偏斜。

第三题用箱线图识别潜在异常值。已经核实的 90
分钟等待时间不能自动删除，应当保留并调查原因。

总体来说，直方图适合了解整体等待时间分布，箱线图适合检查异常等待情况。但如果要解释等待时间为什么过长，还需要医生人数、患者紧急程度等额外信息。

------------------------------------------------------------------------

# 三、Case B -- Library Support（图书馆支持服务）

## Case 背景与核心问题

本案例围绕图书馆支持服务展开，重点关注用户遇到的问题、满意度，以及问题解决所需时间。

### Question 1：用户最常遇到哪些支持问题，使用哪些支持渠道？

**Research question**

What are the most common support issues or support channels?

我们想知道：用户最常遇到什么问题？用户最常通过哪种渠道寻求帮助？

**Variables**

-   Support Issue：支持问题类型
-   Support Channel：支持渠道

**Data type and measurement scale**

-   两者均为 Categorical -- Nominal（分类变量、名义尺度）

**Recommended chart：Bar chart（条形图）**

**Why this chart?**

A bar chart makes it easy to compare the frequency of different support
issues or channels.

条形图可以清楚比较不同支持问题或支持渠道的出现频数。

**Possible findings**

-   哪一种支持问题最常见。
-   哪一种支持渠道使用最多。
-   是否有某些问题需要图书馆优先改善。

### Question 2：用户满意度的分布如何？

**Research question**

How are users' satisfaction ratings distributed?

我们想了解：用户总体满意度如何？高满意度和低满意度的数量分别是多少？

**Variable**

-   Satisfaction Rating：满意度评分

**Data type and measurement scale**

-   如果满意度采用"非常不满意、不满意、一般、满意、非常满意"等等级：Categorical
    -- Ordinal（分类变量、顺序尺度）。
-   如果数据记录为具有明确数值意义的评分，应根据实际量表和课程要求判断是否按数值变量处理。

**Recommended chart：Bar chart（条形图）**

**Why this chart?**

If satisfaction is recorded using ordered categories, a bar chart can
show the frequency of each rating while preserving the order of the
categories.

如果满意度采用有顺序的等级，条形图可以展示每个等级的频数，同时保留从低到高的顺序。

**Possible findings**

-   满意或非常满意的用户是否占多数。
-   不满意的用户是否达到值得关注的比例。
-   满意度是否集中在中间等级。

### Question 3：问题解决时间是否存在异常情况？

**Research question**

Are there unusually long resolution times?

我们想知道：大多数问题需要多长时间解决？是否有少数问题花费了特别长的时间？

**Variable**

-   Resolution Time：问题解决时间

**Data type and measurement scale**

-   Numerical -- Ratio（数值变量、比率尺度）

**Recommended chart：Box plot（箱线图）**

**Why this chart?**

A box plot shows the median, quartiles and spread of resolution times.
It is also useful for identifying potential outliers.

箱线图能够展示解决时间的中位数、四分位数和离散程度，也有助于发现潜在异常值。

**Possible findings**

-   典型的问题解决时间。
-   解决时间的波动程度。
-   是否存在少数耗时特别长的案例。

还可以结合 mean、median 和 IQR 判断数据是否受到极端值影响。

## Case B 最终建议

-   **最有用的图表：** Box
    plot。它适合分析问题解决时间的分布和潜在异常值。
-   **辅助图表：** Bar
    chart。它适合比较支持问题类别、支持渠道及满意度等级。
-   **注意：** 如果满意度是 Likert
    等级数据，条形图通常更容易解释类别频数。

**Limitation**

满意度是用户主观评价。仅凭满意度评分无法知道用户为什么满意或不满意，需要结合文字反馈、投诉内容或访谈信息。

## Case B -- English group discussion script

For Case B, we focus on library support services.

For Question 1, we can use a bar chart to compare the frequency of
different support issues or support channels. These variables are
categorical.

For Question 2, if satisfaction is recorded using ordered categories,
such as very dissatisfied to very satisfied, a bar chart is suitable
because it shows the frequency of each satisfaction level.

For Question 3, we recommend a box plot to examine resolution times. It
shows the median and spread of the data and helps us identify unusually
long cases.

Overall, the box plot is useful for understanding the variation in
resolution times. However, satisfaction ratings alone cannot explain why
users are satisfied or dissatisfied. We should also examine user
comments or feedback.

## Case B -- 中文理解

B 案例研究图书馆支持服务。

第一题用条形图比较不同支持问题或支持渠道的数量，因为它们是分类变量。

第二题如果满意度采用从"非常不满意"到"非常满意"的等级，可以用条形图展示各等级的频数。

第三题用箱线图分析问题解决时间。它可以展示中位数、数据分布范围，并帮助发现耗时特别长的案例。

总体而言，箱线图适合分析解决时间的波动。但满意度评分无法单独解释用户为什么满意或不满意，还需要查看用户文字反馈。

------------------------------------------------------------------------

# 四、Case C -- Student Learning（学生学习情况）

## Case 背景与核心问题

本案例围绕学生学习情况展开，重点关注学习信心、压力、学习时间以及考试表现。

### Question 1：学生的学习信心或压力水平如何？

**Research question**

How do students rate their confidence or stress levels?

我们想了解：学生的学习信心或压力主要集中在哪些等级？

**Variables**

-   Confidence Level：学习信心水平
-   Stress Level：压力水平

**Data type and measurement scale**

-   如果使用"低、中、高"或 1--5 级 Likert 评分：Categorical --
    Ordinal（分类变量、顺序尺度）

**Recommended chart：Bar chart（条形图）**

**Why this chart?**

A bar chart can display the frequency of each ordered confidence or
stress category.

条形图可以展示每个信心或压力等级的频数，并保留等级之间的顺序。

**Possible findings**

-   学生的信心水平主要集中在哪个等级。
-   学生是否普遍感到较大压力。
-   高压力或低信心的学生是否占有一定比例。

### Question 2：学生每天或每周花多少时间学习？

**Research question**

How are students' study hours distributed?

我们想知道：学生通常学习多少小时？学习时间是否集中在某个区间？

**Variable**

-   Study Hours：学习小时数

**Data type and measurement scale**

-   Numerical -- Ratio（数值变量、比率尺度）

学习时间有实际数值，零代表没有学习时间。

**Recommended chart：Histogram（直方图）**

**Why this chart?**

A histogram is suitable for numerical data. It groups study hours into
intervals and shows the overall distribution.

直方图适合展示学习时间的数值分布，可以看出学生学习时间主要集中在哪个范围。

**Possible findings**

-   学生最常见的学习时间区间。
-   学习时间是否分布较分散。
-   是否有少数学生学习时间特别长或特别短。

### Question 3：学生的考试成绩或最终等级如何分布？

**Research question**

How are students' examination scores or final grades distributed?

我们想了解：学生考试成绩的分布情况如何？成绩是否集中在某个区间？最终等级分别有多少人？

**Variables**

-   Examination Score：考试分数
-   Final Grade：最终等级或成绩等级

**Data type and measurement scale**

-   Examination Score：Numerical（数值变量；通常按数值分数处理）
-   Final Grade：Categorical -- Ordinal（分类变量、顺序尺度，例如
    A、B、C 等等级）

**Recommended charts**

-   对考试分数：Histogram（直方图）。
-   对最终等级类别：Bar chart（条形图）。

**Why these charts?**

A histogram shows the distribution of numerical examination scores. A
bar chart compares the frequency of students in each grade category.

直方图适合展示具体分数的分布；条形图适合比较各个成绩等级的人数。

**Possible findings**

-   分数主要集中在哪个区间。
-   成绩分布是否偏斜。
-   哪个成绩等级的学生人数最多。

**关于加权总分的计算**

如果课程最终成绩由多个部分按权重组成，应按照课程实际权重计算：

\[
`\text{Final Score}`{=tex}=`\sum`{=tex}(`\text{Component Score}`{=tex}`\times`{=tex}`\text{Weight}`{=tex})
\]

例如，以下仅为说明计算方法的假设例子，并非本案例真实数据：

-   作业：80 分，占 20%
-   测验：70 分，占 30%
-   考试：90 分，占 50%

\[ 80`\times 0.20`{=tex}+70`\times 0.30`{=tex}+90`\times 0.50`{=tex}=81
\]

最终加权分数为 81 分。实际计算必须使用课程提供的真实权重和分数。

## Case C 最终建议

-   **最有用的图表：**
    Histogram。它适合展示学习时间或考试分数等数值变量的分布。
-   **辅助图表：** Bar
    chart。它适合展示学习信心、压力等级或最终成绩等级。
-   **注意：** 如果问题关注的是具体分数，使用直方图；如果关注的是
    A、B、C 等等级人数，使用条形图。

**Limitation**

学习时间或学习信心与考试成绩之间可能存在关系，但不能仅凭这些变量就断定因果关系。还可能受到学习方法、课程难度、基础水平、出勤率等因素影响。

## Case C -- English group discussion script

For Case C, we focus on students' learning experiences and academic
performance.

For Question 1, we can use a bar chart to show students' confidence or
stress levels. These are ordinal variables if they are measured using
ordered categories.

For Question 2, we recommend a histogram to display students' study
hours. Study hours are numerical data, and the histogram helps us
understand the distribution.

For Question 3, we can use a histogram for examination scores and a bar
chart for final grade categories. The histogram shows the distribution
of numerical scores, while the bar chart compares the number of students
in each grade category.

Overall, these charts help us understand students' learning patterns and
academic performance. However, study hours or confidence levels alone
cannot fully explain examination results. Other factors, such as
learning methods and course difficulty, should also be considered.

## Case C -- 中文理解

C 案例研究学生学习情况和学业表现。

第一题用条形图展示学生的学习信心或压力等级。如果使用有顺序的等级评分，它们属于顺序尺度变量。

第二题用直方图展示学习时间，因为学习小时数是数值变量。

第三题，考试分数使用直方图，最终成绩等级使用条形图。直方图展示具体分数的分布，条形图比较不同等级的人数。

这些图表可以帮助我们了解学生的学习模式和成绩表现，但学习时间或信心本身不能完全解释考试结果，还需要考虑学习方法、课程难度等因素。

------------------------------------------------------------------------

# 五、Case D -- Production Batches（生产批次）

## Case 背景与核心问题

本案例围绕生产批次数据展开，重点关注不同班次或质量等级的分布、生产周期时间，以及如何计算所有生产单位的整体平均周期时间。

前面讨论中提到的背景包括：**24 个已完成生产批次**，以及一个已经核实的
**55
秒周期时间观测值**。如果原始表格中的批次数量、日期或数据有更新，应以最新数据为准。

### Question 1：不同班次或质量等级的生产情况如何？

**Research question**

How are production batches distributed across shifts or quality grades?

我们想了解：不同班次的批次数量是否相同？各质量等级分别有多少批次？

**Variables**

-   Shift：生产班次
-   Quality Grade：质量等级

**Data type and measurement scale**

-   Shift：Categorical -- Nominal（分类变量、名义尺度）
-   Quality Grade：Categorical --
    Ordinal（分类变量、顺序尺度；前提是质量等级存在明确顺序）

**Recommended chart：Bar chart（条形图）**

如果要同时比较班次和质量等级，可以使用 Grouped/Clustered Bar
Chart（分组条形图），也可以先制作交叉表。

**Why this chart?**

A bar chart is suitable for comparing the frequency of categorical
variables. A grouped bar chart can compare quality grades across
different shifts.

条形图适合比较分类变量的数量。如果需要同时比较不同班次的质量等级，可以使用分组条形图。

**Possible findings**

-   哪个班次完成的批次数量最多。
-   哪个质量等级出现次数最多。
-   不同班次的质量等级分布是否存在差异。

### Question 2：批次周期时间的分布如何？55 秒的观测值应该怎样处理？

**Research question**

How are batch cycle times distributed, and how should the verified
55-second observation be interpreted?

我们想知道：不同批次的周期时间如何分布？55 秒是否属于异常观测值？

**Variable**

-   Batch Cycle Time：批次周期时间

**Data type and measurement scale**

-   Numerical -- Ratio（数值变量、比率尺度）

**Recommended chart：Dot plot（点图）**

**Why this chart?**

A dot plot displays individual observations clearly. It is useful when
the dataset contains a manageable number of observations, such as 24
batches.

点图可以直接展示每一个批次的观测值。对于 24
个批次这样的数据量，点图有助于观察每个数值的位置、聚集情况和离散程度。

**Important interpretation of 55 seconds**

如果 55 秒已经核实为真实观测值，就不应仅仅因为它比其他数值大或小而删除。

-   核对是否存在录入或测量错误。
-   如果是真实生产情况，应保留。
-   进一步检查该批次是否发生设备调整、停机、操作变化或其他特殊情况。
-   可以报告 mean、median、range 和 standard deviation，帮助描述数据。

**Useful descriptive statistics**

-   Mean：平均数
-   Median：中位数
-   Range：极差 = 最大值 − 最小值
-   Standard deviation：标准差

### Question 3：如何计算所有已完成生产单位的整体平均周期时间？

**Research question**

How can we calculate the overall mean cycle time for all completed
production units?

重点是区分"批次平均周期时间"和"所有生产单位的整体平均周期时间"。

**Variables**

-   Batch Mean Cycle Time：每个批次的平均周期时间
-   Batch Size：每个批次包含的生产单位数量

**Data type and measurement scale**

-   Batch Mean Cycle Time：Numerical -- Ratio
-   Batch Size：Numerical -- Ratio（计数变量）

**Recommended chart：Histogram（直方图）**

可以先用直方图观察各批次平均周期时间的分布。若要展示每批次的具体值，点图也可以作为补充。

**Why this chart?**

A histogram helps us understand how batch mean cycle times are
distributed across the completed batches.

直方图可以展示不同批次平均周期时间的整体分布，帮助观察数据集中区间和分布形状。

**Important calculation: weighted mean（加权平均数）**

如果每个批次包含的生产单位数量不同，不能简单地把每个批次平均值直接相加后除以批次数量，来代表所有生产单位的整体平均值。

应使用批次大小作为权重：

\[ `\bar`{=tex}{x}\_{overall}=
`\frac{\sum n_i\bar{x}_i}{\sum n_i}`{=tex} \]

其中：

-   (n_i)：第 (i) 个批次的生产单位数量（batch size）。
-   (`\bar`{=tex}{x}\_i)：第 (i) 个批次的平均周期时间（batch mean cycle
    time）。
-   (`\sum `{=tex}n_i)：所有批次的生产单位总数。
-   (`\bar`{=tex}{x}\_{overall})：所有生产单位的整体加权平均周期时间。

**简单理解**

假设两个批次的平均周期时间不同，而且批次大小也不同，那么生产单位更多的批次应该具有更大的权重。因此，必须按照每个批次实际包含的单位数量计算整体平均值。

## Case D 最终建议

-   **最有用的图表：** Dot plot。它能展示每个批次的周期时间，适合检查 24
    个批次的具体观测值。
-   **辅助图表：** Histogram。它适合展示批次平均周期时间的整体分布。
-   **分类比较：** Bar chart 或 grouped bar
    chart，适合比较不同班次和质量等级。

**Limitation**

如果数据只包含一天的 24
个批次，就不能直接代表长期生产表现。另外，批次平均值无法展示同一个批次内部每个生产单位的差异。若要分析批次内部波动，需要单位级别的原始数据。

## Case D -- English group discussion script

For Case D, we focus on production batches and cycle times.

For Question 1, we can use a bar chart to compare the number of batches
across different shifts or quality grades. If we want to compare quality
grades across shifts, a grouped bar chart would be useful.

For Question 2, we recommend a dot plot to display the cycle time of
each batch. Since there are 24 batches, a dot plot allows us to inspect
individual observations clearly. The verified 55-second observation
should not be removed automatically. We should retain it and investigate
the production context.

For Question 3, we can use a histogram to examine the distribution of
batch mean cycle times. To calculate the overall mean cycle time for all
completed production units, we should use a weighted mean based on batch
size.

The formula is the sum of each batch size multiplied by its batch mean,
divided by the total number of production units.

Overall, the dot plot is useful for examining individual batch
observations. However, batch means cannot show variation within each
batch, and data from only one production day may not represent long-term
production performance.

## Case D -- 中文理解

D 案例研究生产批次和周期时间。

第一题用  柱状图  图比较不同班次或质量等级的批次数量。如果要比较不同班次的质量等级，可以使用分组条形图。

第二题用   点图    展示每个批次的周期时间。因为有 24
个批次，点图可以清楚显示每个观测值。已经核实的 55
秒数据不能自动删除，应当保留并调查当时的生产情况。

第三题用  直方图  观察各批次平均周期时间的分布。计算所有生产单位的整体平均周期时间时，需要根据每个批次的生产单位数量进行加权。

总体来说，点图适合检查每个批次的具体数据。但批次平均值无法展示批次内部的差异，而且仅有一天的数据不一定能够代表长期生产表现。

------------------------------------------------------------------------

# 六、四个 Case 对比总表

  -------------------------------------------------------------------------------------------------------------------------------------------
  Case           研究主题       主要变量                                   推荐图表                主要目的
  -------------- -------------- ------------------------------------------ ----------------------- ------------------------------------------
  Case A         Clinic Visits  就诊类型、紧急程度、等待时间               Bar                     比较就诊类别，观察等待时间分布和异常值
                                                                           chart、Histogram、Box   
                                                                           plot                    

  Case B         Library        支持问题、支持渠道、满意度、解决时间       Bar chart、Box plot     比较服务类别，了解满意度和解决时间
                 Support                                                                           

  Case C         Student        信心、压力、学习时间、考试分数、成绩等级   Bar chart、Histogram    了解学习模式和成绩分布
                 Learning                                                                          

  Case D         Production     班次、质量等级、批次周期时间、批次大小     Bar chart、Dot          比较生产类别，检查周期时间并计算加权平均
                 Batches                                                   plot、Histogram         
  -------------------------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

# 七、老师可能追问的问题与回答

## 1. Why did you choose this chart?

**English answer**

I chose this chart because it matches the type of variable and the
research question. It allows us to present the data clearly and identify
the relevant patterns.

**中文理解**

我选择这个图表，是因为它符合变量的数据类型和研究问题，可以清楚展示数据并帮助我们发现相关规律。

## 2. What is the difference between a bar chart and a histogram?

**English answer**

A bar chart is mainly used for categorical data, while a histogram is
used for numerical data. In a bar chart, the bars are separated. In a
histogram, the bars usually touch because they represent continuous
intervals.

**中文理解**

条形图主要用于分类数据，直方图用于数值数据。条形图的柱子通常分开；直方图的柱子通常相连，因为它表示连续数值区间。

## 3. Why do we use a box plot?

**English answer**

A box plot summarises the distribution using the median, quartiles and
spread. It is also useful for identifying potential outliers.

**中文理解**

箱线图通过中位数、四分位数和数据范围概括数据分布，也可以帮助识别潜在异常值。

## 4. Should we remove an outlier?

**English answer**

Not automatically. We should first check whether the value is caused by
a data-entry or measurement error. If it is a genuine observation, we
should usually retain it and explain its context.

**中文理解**

不能自动删除。首先要检查它是否由录入错误或测量错误造成。如果它是真实观测值，通常应该保留并解释其背景。

## 5. What is the difference between mean and median?

**English answer**

The mean is the arithmetic average and can be affected by extreme
values. The median is the middle value after sorting the data and is
less affected by extreme values.

**中文理解**

平均数是所有数值相加再除以数量，容易受到极端值影响。中位数是排序后位于中间的数值，受极端值影响较小。

## 6. Why is a weighted mean needed in Case D?

**English answer**

A weighted mean is needed because different batches may contain
different numbers of production units. Each batch should contribute
according to its batch size.

**中文理解**

因为不同批次的生产单位数量可能不同，所以需要加权平均。生产单位数量更多的批次应该具有更大的权重。

------------------------------------------------------------------------

# 八、课堂答题时最重要的逻辑

无论老师给出什么案例，都可以按下面这条逻辑组织答案：

**Research question → Variable → Data type / Measurement scale → Chart →
Reason → Finding → Limitation**

例如：

> We want to understand the distribution of waiting times. The variable
> is waiting time, which is numerical data measured on a ratio scale.
> Therefore, we choose a histogram because it shows the distribution of
> continuous numerical data. It helps us identify the most common
> waiting-time range and whether the data is skewed. However, the
> histogram alone cannot explain why some patients wait longer.

中文：

> 我们想了解等待时间的分布。变量是等待时间，它属于比率尺度的数值变量。因此，我们选择直方图，因为它适合展示连续数值数据的分布。它可以帮助我们找出最常见的等待时间区间，以及数据是否偏斜。但是，直方图本身无法解释为什么有些患者等待时间更长。

**最后记住：不要只说"我选择了直方图"。一定要补充三个理由：**

1.  变量是什么？
2.  变量属于什么数据类型？
3.  这个图表能帮助我们发现什么？

这三点解释清楚，答案就会更完整、更符合统计学分析的要求。
