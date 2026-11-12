BIG DATA MANAGEMENT CHAPTER 02 --- BIG DATA PROCESSING 03

MapReduce 原理讲解与共同好友案例

整理依据：课堂语音稿 + Chapter 02 PPT（Distributed / Parallel）

# 第一部分｜完整知识笔记（中文理解版）

## 1. 本节课的核心主题

本节课讲的是
MapReduce：一种面向大规模数据集的分布式计算框架（distributed computing
framework）。它把一个大任务拆成许多可以并行执行的小任务，再把各个小任务的结果汇总起来。

-   核心目标：让大量数据能够在一个计算机集群（cluster）中被存储、处理和分析。

-   核心流程：Distributed Data Storage → Map → Shuffle → Reduce →
    Output。

-   核心思想：尽量让计算靠近数据（bring computation close to the
    data），减少网络传输；通过数据副本（replication）提高可靠性。

-   课堂考核提醒：老师明确提醒，MapReduce
    相关视频/内容会在期末考试中考查，要求理解原理，而不只是记住名词。

## 2. 为什么需要 MapReduce？------产生背景与动机

大数据规模不断增加，单台计算机（single
machine）在存储、读取、查询和处理能力上会遇到瓶颈。即使把数据存下来，如果不能有效查询或处理，数据也无法真正发挥价值。

PPT 中 Google 的例子用来说明规模问题：

-   网页数量：20+ billion web pages（超过 200 亿个网页）。

-   每个网页约 20 KB，估算总数据量约 400+ TB。这里按 PPT 的计算单位应为
    TB，不要把语音识别中偶尔出现的 PB 当成这个例子的结果。

-   单台计算机读取速度约 30--35
    MB/second；按这个规模读取全部网页，可能需要约 4 个月。

-   存储这些数据需要约 1,000
    多块硬盘；而真正进行查询、分析和处理还需要更多计算资源。

因此，需要使用分布式系统（distributed
system），把数据分散存储在多台机器上，并让多台机器并行处理（parallel
processing）。课堂语音中 2009 年 Google
每日处理数据量的数字识别不清；PPT 对应页写的是约 24
petabytes/day。老师语音中该数字不宜仅凭识别稿确认。

## 3. 分布式/并行计算面临的挑战

-   任务如何拆分和分配（how to distribute the
    computation）：怎样把一个大任务拆成适合不同机器执行的小任务。

-   机器之间如何通信（communication）：不同节点需要交换数据和中间结果。

-   如何扩展规模（scalability）：机器数量增加时，系统能否继续有效运行。

-   如何处理机器故障（fault
    tolerance）：集群中的机器可能失效，系统仍应尽可能完成任务。

-   网络传输耗时：把大量数据在机器之间复制/传输会消耗时间和带宽。

MapReduce
的设计正是为了帮助处理这些问题，提供一种简单、可扩展且具有容错能力的并行编程模型。

## 4. MapReduce 是什么？

MapReduce 是 Google 提出的分布式计算/数据处理模型，后来由开源 Hadoop
项目推广。它是一种简单的 data-parallel programming
model，面向大规模数据集，在集群环境中执行计算。

-   最初常用于 Hadoop 生态：处理存储在 HDFS（Hadoop Distributed File
    System）中的数据。

-   后来也被云平台及一些分布式数据系统采用；课堂举例提到
    MongoDB。具体产品内部实现会随版本和架构变化，本节重点是理解
    MapReduce 模型本身。

-   典型用途：搜索索引构建（search index
    construction）、文档聚类（document
    clustering）、访问日志分析（access log analysis）等。

-   PPT 中的应用例子：Google Search 索引、Google News
    文章聚类、机器翻译；Yahoo 的网页地图/垃圾邮件检测；Facebook
    数据挖掘、广告优化和垃圾邮件检测；科研中的天文图像、生物信息学、Wikipedia
    冲突分析、自然语言处理、粒子物理和海洋气候模拟。

## 5. 关键设计思想：Data Locality 与 Replication

### 5.1 Bring computation close to the data（计算靠近数据）

如果把大量数据从存储机器传到计算机器，网络复制会花费时间。因此，MapReduce
的思路是尽量把计算任务安排到数据所在的机器或附近执行，而不是把全部数据搬来搬去。这叫数据本地性（data
locality）。

### 5.2 Store files multiple times for reliability（多副本存储）

把文件保存多个副本（replication），当某台机器或某个磁盘出现故障时，仍可以从其他副本读取数据，从而提高可靠性（reliability）和容错能力（fault
tolerance）。

存储基础设施与计算模型要区分：

| 名称 \| 作用 \| 理解方式 \|

| --- \| --- \| --- \|

| GFS \| Google File System \| Google 的分布式文件系统。 \|

| HDFS \| Hadoop Distributed File System \| Hadoop
  的分布式文件系统，负责分布式存储。 \|

| MapReduce \| Programming / computation model \| 负责组织
  Map、Shuffle、Reduce 等分布式计算步骤。 \|

## 6. MapReduce 的整体流程

| 阶段 \| 输入/操作 \| 输出/目的 \|

| --- \| --- \| --- \|

| Distributed Data Storage \| 大文件分布式存储，并可保存多个副本 \|
  数据分布在集群节点上。 \|

| Map \| 读取输入数据分片（input shards），执行 map 函数 \| 产生
  intermediate key-value pairs。 \|

| Shuffle / Sort \| 按 intermediate key 对中间结果分组，把相同 key 的
  values 汇集到一起 \| 每个 key 对应一组 values，传给 Reduce。 \|

| Reduce \| 接收 key 和一组 values，合并、统计或进一步处理 \| 产生
  output key-value pairs。 \|

| Output \| 保存最终结果 \| 形成结果文件或供后续查询使用。 \|

可以把它想成老师课堂上的"三明治"比喻：先把整块食材拆成可以处理的组件（Map），再把相同类别的组件整理到一起（Shuffle），最后组合成完整三明治（Reduce）。这个比喻用于理解"拆分---整理---汇总"，并不是
MapReduce 的正式定义。

## 7. Key-Value Pairs 与 Bag / Multiset

-   MapReduce 把文件/数据看成一组 key-value pairs（键值对）。

-   Key（键）：用于标识、分类或分组的字段。

-   Value（值）：与该键关联的具体数据。

-   Bag 是
    multiset（多重集合），允许相同元素重复出现；因此它不等同于只保留唯一值的
    set。

-   输入可以表示为 input key-value pairs；Map 输出 intermediate
    key-value pairs；Reduce 输出 output key-value pairs。

记号可理解为：输入 (K1, V1) → Map → 中间结果 (K2, V2) → Shuffle 按 K2
分组 → Reduce → 输出 (K3,
V3)。不同教材/图示可能使用不同下标；重点是区分输入、中间和输出的键值对。

## 8. Map 阶段（映射）

1.  系统把输入数据自动划分成多个 input shards（输入分片）。PPT 中用 M
    表示 Map 输入分片数量。

2.  每个 Map worker 读取一个输入分片，并执行用户定义的 map function。

3.  Map 函数筛选/丢弃不需要的数据（discard unnecessary
    data），并把需要的信息转换成中间键值对（intermediate key-value
    pairs）。

4.  Map 的输出不是最终结果，而是交给 Shuffle 阶段继续整理的中间结果。

注意：Map 的任务通常可以并行执行，因为不同输入分片可以由不同 worker
同时处理。

## 9. Shuffle / Sort 阶段（分组与整理）

Map 完成后，系统会把所有中间结果中 key
相同的记录放在一起。也就是说，同一个 intermediate key 对应的所有 values
会被收集成一组，再传递给相应的 Reduce worker。

-   例： (Car, 1)、(Car, 1)、(Car, 1) → Shuffle 后变成 (Car, \[1, 1,
    1\])。

-   Shuffle 的重点不是做最终计算，而是根据 key 重新组织数据。

-   这一步通常涉及节点之间的数据传输，因此数据量和网络效率会影响整体性能。

## 10. Reduce 阶段（归约/汇总）

1.  Reduce 接收一个 key，以及与该 key 对应的一组 values。

2.  Reduce function 对这些 values 进行合并、统计或其他处理。

3.  Reduce worker 的任务可以通过把 intermediate key space 划分成 R
    个部分来分配。

4.  PPT 给出的分区示例：hash(key) mod R。用户需要指定 Reduce 分区数量 R
    和 partitioning function（分区函数）。

M 与 R 不要混淆：M 表示 Map 输入分片数量；R 表示 Reduce
输出/任务分区数量。

## 11. 案例一：Facebook Common Friends（共同好友）

案例目标：预先计算任意好友对之间的共同好友，并把结果保存起来。这样，当用户
D 打开用户 B 的个人资料时，系统可以直接查找 (B, D)
的结果，立即显示共同好友，而不必每次重新计算。课堂说明这种计算可以每天预先执行一次（precompute
once a day）。

### 11.1 原始好友列表（输入数据）

| 用户 \| 好友列表 \|

| --- \| --- \|

| A \| B, C, D \|

| B \| A, C, D, E \|

| C \| A, B, D, E \|

| D \| A, B, C, E \|

| E \| B, C, D \|

好友关系是双向的（bidirectional）：例如 A 的好友列表里有 B，B
的列表里也有 A。注意 A 与 E 并不是好友，因此不会产生 (A, E)
这个好友对。五个人理论上最多有 10 种两两组合，但本例实际存在 9
个好友对。

### 11.2 Map：生成"好友对 → 原用户好友列表"

Map 的规则：对每个用户，遍历其好友列表；每遇到一个好友，就生成一个
key。Key 是两个人组成的 pair，字母按顺序排列；Value 是当前这个 mapper
所代表用户的完整好友列表。

| 原始记录 \| Map 输出 \|

| --- \| --- \|

| A → B, C, D \| (A,B) → \[B,C,D\]；(A,C) → \[B,C,D\]；(A,D) → \[B,C,D\]
  \|

| B → A, C, D, E \| (A,B) → \[A,C,D,E\]；(B,C) → \[A,C,D,E\]；(B,D) →
  \[A,C,D,E\]；(B,E) → \[A,C,D,E\] \|

| C → A, B, D, E \| (A,C) → \[A,B,D,E\]；(B,C) → \[A,B,D,E\]；(C,D) →
  \[A,B,D,E\]；(C,E) → \[A,B,D,E\] \|

| D → A, B, C, E \| (A,D) → \[A,B,C,E\]；(B,D) → \[A,B,C,E\]；(C,D) →
  \[A,B,C,E\]；(D,E) → \[A,B,C,E\] \|

| E → B, C, D \| (B,E) → \[B,C,D\]；(C,E) → \[B,C,D\]；(D,E) → \[B,C,D\]
  \|

特别容易混淆的地方：Key 是"正在比较的两个人"；Value
不是这两个人的名字，而是当前 mapper 用户的好友列表。例如 A 的好友是
B、C、D，因此 A 产生的三个 key 分别是 (A,B)、(A,C)、(A,D)，但三个 value
都是 A 的好友列表 \[B,C,D\]。

### 11.3 Shuffle：相同 Key 的 Value 放在一起

| Key \| Shuffle 后收集到的两个好友列表 \|

| --- \| --- \|

| (A,B) \| \[A,C,D,E\]；\[B,C,D\] \|

| (A,C) \| \[A,B,D,E\]；\[B,C,D\] \|

| (A,D) \| \[A,B,C,E\]；\[B,C,D\] \|

| (B,C) \| \[A,B,D,E\]；\[A,C,D,E\] \|

| (B,D) \| \[A,B,C,E\]；\[A,C,D,E\] \|

| (B,E) \| \[A,C,D,E\]；\[B,C,D\] \|

| (C,D) \| \[A,B,C,E\]；\[A,B,D,E\] \|

| (C,E) \| \[A,B,D,E\]；\[B,C,D\] \|

| (D,E) \| \[A,B,C,E\]；\[B,C,D\] \|

为什么每个 key 最终有两个列表？因为好友关系是双向的。比如 (A,B)：A 的
mapper 产生一次 (A,B)，B 的 mapper 也产生一次 (A,B)。Shuffle
把这两条记录合并到同一个 key 下。

### 11.4 Reduce：求两个列表的交集

Reduce
对每个好友对，把对应的两个好友列表求交集（intersection），得到双方共同好友。结果中不把这两个人自己算作自己的共同好友。

| 好友对 \| 共同好友（Reduce 输出） \|

| --- \| --- \|

| (A,B) \| C, D \|

| (A,C) \| B, D \|

| (A,D) \| B, C \|

| (B,C) \| A, D, E \|

| (B,D) \| A, C, E \|

| (B,E) \| C, D \|

| (C,D) \| A, B, E \|

| (C,E) \| B, D \|

| (D,E) \| B, C \|

例：D 打开 B 的主页，查找 key (B,D)，结果是 \[A,C,E\]，所以 B 和 D 有 3
个共同好友：A、C、E。

### 11.5 课堂讨论中最容易卡住的几个问题

-   为什么没有 (A,E)？因为 A 的好友列表没有 E，E 的好友列表也没有
    A；他们不是好友，所以不会生成这个 key。

-   为什么同一个 key 会出现两次？因为好友关系双向，pair 中的两个人各自的
    mapper 都会生成同一个规范化 key。

-   为什么 value 会变化？对同一个 key，value 分别来自 pair
    中两个人各自的完整好友列表；Shuffle 后把两个 value 收集起来。

-   共同好友怎么算？对两个好友列表做交集。例如 B 的列表 \[A,C,D,E\] 与 D
    的列表 \[A,B,C,E\]，交集是 \[A,C,E\]。

-   并行处理体现在哪里？不同用户的 mapper 可以由不同 worker
    同时处理；之后 Shuffle 汇总同 key 的记录，再由 Reduce 计算交集。

## 12. 案例二：Word Count（单词计数）

PPT 后续用 Word Count 说明 MapReduce
的经典应用。输入文本包含：Dear、Bear、River、Car、Car、River、Deer、Car、Bear。

| 阶段 \| 操作示例 \|

| --- \| --- \|

| Input / Split \| 把输入数据切成 3 个 splits，交给多个 Mapper。 \|

| Map \| 每个 Mapper 将文本切分成单词，并对每个单词输出 (word, 1)。例如
  Car → (Car, 1)。 \|

| Shuffle / Sort \| 相同单词的 key 聚合到一起。例如 Bear → \[1,1\]；Car
  → \[1,1,1\]。 \|

| Reduce \| 把每个单词对应的 1 相加。例如 Bear → 2；Car → 3。 \|

| Output \| 写出每个单词及其出现次数。 \|

核心记忆：Map 负责把"一个单词出现一次"转换成 (word,1)；Shuffle
负责把相同单词放到一起；Reduce 负责把 1 累加。

## 13. 考试重点与易错点

| 考点 \| 需要掌握的答案 \|

| --- \| --- \|

| MapReduce 定义 \| Google
  提出的分布式计算/数据处理模型，用于在集群中处理大规模数据。 \|

| 设计目标 \| Scalability（可扩展性）与 Fault Tolerance（容错性）。 \|

| Data locality \| 把计算放到数据附近，减少网络传输。 \|

| Replication \| 保存多个数据副本，提高可靠性。 \|

| 四个主要阶段 \| Distributed Data Storage → Map → Shuffle → Reduce。 \|

| Map 输入/输出 \| 输入分片；输出 intermediate key-value pairs。 \|

| Shuffle 的作用 \| 按相同 intermediate key 分组并收集 values。 \|

| Reduce 输入/输出 \| 输入 key + set/list of values；输出处理后的
  key-value pairs。 \|

| M 与 R \| M 是 Map 输入分片数；R 是 Reduce 分区数。 \|

| 分区函数例子 \| hash(key) mod R。 \|

| 共同好友案例 \| Map 生成好友对和原用户好友列表；Shuffle
  按好友对聚合；Reduce 求两个列表交集。 \|

| Word Count \| Map 输出 (word,1)，Shuffle 分组，Reduce 求和。 \|

答题建议：解释流程时不要只写"Map、Reduce"。一定要写出中间的
Shuffle：它负责把相同 key 的 values 聚合后交给 Reduce。

## 14. 一段可用于考试的英文概括

MapReduce is a distributed programming model designed to process large
datasets in a cluster. The input data is divided into shards and
processed by Map workers. The Map function generates intermediate
key-value pairs. During the Shuffle phase, values with the same key are
grouped together and sent to Reduce workers. The Reduce function
processes or combines these values to produce the final output.
MapReduce improves scalability and fault tolerance. It also uses data
locality to reduce network data transfer and replication to improve
reliability.

# 第二部分｜英文课堂语音逐句翻译稿

说明：以下按语音稿时间顺序整理。英文原句尽量保留语音识别稿；明显识别错误或无法判断的词句标为【听不清/疑似识别错误】，不擅自补成确定原文。中文课堂讨论部分本来就是中文，不重复翻译。老师讲解部分的语音稿在约
14:54 后转入分组活动，后续以中文讨论为主。

\[00:00--00:30\] 英文：The cat theorem okay, and then we started with a
little bit about distributed. Okay, now we are going to look at the
parallel and distributed programming framework. So what are the
challenges?

中文：【开头"The cat
theorem"疑似语音识别错误，无法确认。】好，前面我们已经简单介绍了分布式（distributed）的内容。现在我们要学习并行与分布式编程框架（parallel
and distributed programming framework）。那么，这类框架面临哪些挑战？

\[00:00--00:30\] 英文：For parallel and distributed programming
framework, the first challenge is how do we decide to distribute the
computation?

中文：对于并行与分布式编程框架，第一个挑战是：我们应该怎样决定如何分配计算任务？

\[00:00--00:30\] 英文：Because distributed or parallel programming is
actually hard.

中文：因为分布式编程或并行编程实际上并不容易。

\[00:31--00:51\] 英文：In the previous lecture, we looked at, if you
remember, there is a term MapReduce.

中文：在上一节课中，我们讲过一个术语，如果你们还记得的话，它叫
MapReduce。

\[00:31--00:51\] 英文：MapReduce is an algorithm by Google.

中文：MapReduce 是 Google
提出的一种算法/计算模型。（更准确地说，本课将其作为分布式计算编程模型来讲。）

\[00:31--00:51\] 英文：MapReduce addresses all of the above.

中文：MapReduce 可以帮助解决前面提到的这些问题。

\[00:52--01:05\] 英文：So Google's computational, this is Google's
computational or data manipulation model.

中文：所以，这是 Google 的计算模型，也可以说是 Google 的数据处理模型。

\[00:52--01:05\] 英文：MapReduce is an elegant way to work with
\[data\].

中文：MapReduce
是一种处理数据的简洁而有效的方法。【原句末尾识别不完整。】

\[00:52--01:05\] 英文：That video will be asked during your final exam.

中文：那个视频的相关内容会在你们的期末考试中考查。

\[01:05--01:20\] 英文：You will be asked questions to show that you
understand my videos, to show your mastery of my videos.

中文：考试会通过问题来检验你们是否理解我提供的视频，以及是否掌握了视频中的内容。

\[01:05--01:20\] 英文：We will do the activity today. So just a little
bit of lecture.

中文：今天我们会做课堂活动，所以现在先进行一点简短的讲解。

\[01:21--01:40\] 英文：My \[MapReduce\] is used for distributed
computing framework.

中文：【语音识别稿此处不完整。结合上下文，老师应是在继续介绍
MapReduce：它用于分布式计算。】

\[01:21--02:19\] 英文：Here we see we have cheese, a block of cheese,
lettuce, tomato, coconut, and roti.

中文：这里我们看到一些食材：一整块奶酪、生菜、番茄、椰子，以及
roti（印度煎饼/薄饼）。

\[01:41--02:19\] 英文：From these elements we then will map it to slices
of cheese, cut-up lettuce, cut-up tomato, salami, and a slice of bread.

中文：接下来，我们把这些原材料进行 Map
处理：把奶酪切成片，把生菜和番茄切碎，并准备好
salami（意式腊肠）和面包片。【食材列表中部分词可能受语音识别影响。】

\[01:41--02:19\] 英文：Once you have mapped it to the components, then
we will reduce it, and then it will become this delicious sandwich.

中文：当我们把原材料映射成这些组成部分之后，就可以进行
Reduce，把它们组合起来，最后就变成一个美味的三明治。

\[02:21--03:01\] 英文：That's the idea of MapReduce. MapReduce is a
distributed computing framework, a framework for processing and managing
large-scale datasets in a distributed cluster.

中文：这就是 MapReduce 的基本思想。MapReduce
是一个分布式计算框架，用于在分布式集群中处理和管理大规模数据集。

\[02:21--03:01\] 英文：It's due to the large scale of business data.

中文：这是因为业务数据的规模非常大。【原句语法/识别可能不完整。】

\[02:21--03:01\] 英文：Remember our first lecture, the characteristics
of the data, the Vs, right?

中文：还记得我们第一节课讲过的数据特征吗？也就是那些 V，对吧？

\[02:21--03:01\] 英文：It has been used for applications such as
generating search indexes, document clustering, access log analysis, and
various other forms of data analysis.

中文：它可以用于很多场景，例如生成搜索索引、文档聚类、访问日志分析，以及其他各种数据分析任务。

\[03:03--03:33\] 英文：If you're talking about technology for handling
big data, you can refer to the previous slide about the Hadoop
framework.

中文：如果我们讨论处理大数据的技术，你们可以回顾之前关于 Hadoop
框架的那张幻灯片。

\[03:03--03:33\] 英文：Initially, it was used to retrieve data stored in
the Hadoop File System, HDFS.

中文：最初，它用于处理/读取存储在 Hadoop 分布式文件系统 HDFS 中的数据。

\[03:34--04:12\] 英文：Now it's also adopted in the cloud and some
distributed databases, for example, MongoDB.

中文：现在，它也被云环境和一些分布式数据库采用，例如
MongoDB。【这里是老师举例；不要据此推断所有 MongoDB 工作负载都使用传统
Hadoop MapReduce。】

\[03:34--04:12\] 英文：MapReduce is a simple data-parallel programming
model designed for scalability and fault tolerance.

中文：MapReduce
是一种简单的数据并行编程模型，设计目标是可扩展性（scalability）和容错性（fault
tolerance）。

\[04:13--04:28\] 英文：It's designed by Google, processes 20 petabytes
of data today, and was popularized by the open-source Hadoop project.

中文：它由 Google 设计；语音稿识别为每天处理 20 PB 数据，并通过开源
Hadoop 项目而广泛流行。【PPT 对应页写 20
petabytes/day；不同幻灯片/年份的数据数字应按具体页核对。】

\[04:13--04:28\] 英文：It's been used at Yahoo, Facebook, Amazon.

中文：Yahoo、Facebook 和 Amazon 等公司都使用过相关技术。

\[04:30--04:59\] 英文：Usually, with all computation algorithms, it
starts with a need. It starts with a problem that has arisen due to the
nature of data, due to the changing of technology, due to disruptive
technology.

中文：通常，任何计算算法的出现都有其需求背景。它源于数据本身的特点，也可能源于技术变化或颠覆性技术带来的新问题。

\[05:01--05:24\] 英文：The motivation is by Google's example: there are
20-plus billion web pages times 20 kilobytes. That's around 400-plus
terabytes.

中文：MapReduce 的动机可以通过 Google 的例子来理解：有超过 200
亿个网页，每个网页约 20 KB，总量大约是 400 多 TB。

\[05:01--05:24\] 英文：One computer reads 30 to 35 megabytes per second.

中文：一台计算机每秒大约只能读取 30 到 35 MB 数据。

\[05:01--05:24\] 英文：It would take around four months to read the web.

中文：如果只依靠一台计算机读取这些网页数据，大约需要四个月。

\[05:25--05:49\] 英文：Around 1,000-plus hard drives are needed to store
the data.

中文：存储这些数据大约需要 1,000 多块硬盘。

\[05:25--05:49\] 英文：It takes even more to do something useful with
the data.

中文：而要真正利用这些数据进行处理和分析，还需要更多资源。

\[05:25--05:49\] 英文：You collect it, you store it, but if you cannot
query it, if you cannot do something with it, then...

中文：你收集了数据，也把数据存储起来了；但如果你不能查询它，不能对它进行处理，那么......【句子在语音稿中断开。】

\[05:50--06:22\] 英文：Today the standard architecture for such problems
is a cluster of commodity nodes and a commodity network or Ethernet to
connect them.

中文：如今，这类问题的标准架构是：使用由普通商用节点（commodity
nodes）组成的集群，并通过普通网络或以太网（Ethernet）把它们连接起来。

\[05:50--06:22\] 英文：In Google, MapReduce is used for index
construction for Google Search, article clustering for Google News, and
machine translation.

中文：在 Google，MapReduce 被用于 Google Search 的索引构建、Google News
的文章聚类，以及机器翻译。

\[06:27--06:59\] 英文：Yahoo uses it for web map \[unclear\] and spam
detection for Yahoo Mail.

中文：Yahoo 使用相关技术进行网页地图/网页处理【此处原词识别不清】，以及
Yahoo Mail 的垃圾邮件检测。

\[06:27--06:59\] 英文：At Facebook, MapReduce is used for data mining,
ad optimization, and spam detection.

中文：在 Facebook，MapReduce 用于数据挖掘、广告优化和垃圾邮件检测。

\[06:27--06:59\] 英文：For research, it's used for astronomical imaging,
bioinformatics, analyzing Wikipedia conflicts, natural language
processing, particle physics, and ocean climate simulation.

中文：在科研领域，它可用于天文图像处理、生物信息学、Wikipedia
冲突分析、自然语言处理、粒子物理，以及海洋气候模拟。

\[07:00--07:25\] 英文：Any algorithm needs a problem; there needs to be
a decision.

中文：任何算法的应用都应该对应一个实际问题，并且需要明确要解决什么问题。

\[07:00--07:25\] 英文：What is the motivation for MapReduce? It is to
process lots of data.

中文：那么，MapReduce 的动机是什么？就是为了处理海量数据。

\[07:26--08:07\] 英文：Google processed about \[unclear\] data a day in
2009.

中文：Google 在 2009 年每天处理大约【语音稿数字识别不清】的数据。PPT
对应页给出的数字是约 24 petabytes/day。

\[07:26--08:07\] 英文：A single machine cannot serve all the data.
Therefore, you need a distributed system to store and process the data
in parallel.

中文：单台机器无法存储和处理所有数据。因此，我们需要分布式系统，以便分布式存储数据，并进行并行处理。

\[07:26--08:07\] 英文：There are certain questions that you need to
resolve: how do you facilitate communication between machines? How do
you scale to more machines?

中文：这里有一些必须解决的问题：怎样促进机器之间的通信？怎样把系统扩展到更多机器？

\[08:08--08:32\] 英文：How do you handle machine \[failures\]?

中文：怎样处理机器故障？【语音识别稿只保留了
machine，结合上下文应是机器故障问题，但原词不完整。】

\[08:08--08:32\] 英文：Copying data over the network takes time. The
idea is to bring computation close to the data and to store files
multiple times for reliability.

中文：通过网络复制数据需要时间。解决思路是让计算靠近数据（bring
computation close to the
data），并把文件保存多个副本，以提高可靠性（reliability）。

\[08:34--08:48\] 英文：MapReduce addresses these problems.

中文：MapReduce 正是用来应对这些问题的。

\[08:34--08:48\] 英文：This is Google's computational or data
manipulation model, and it is an elegant way to work with big data.

中文：这是 Google
的计算/数据处理模型，也是处理大数据的一种简洁有效的方法。

\[08:49--08:59\] 英文：It uses the storage infrastructure of a file
system. It uses a DFS.

中文：它使用分布式文件系统（DFS, Distributed File
System）作为存储基础设施。

\[08:49--08:59\] 英文：This is Google File System or Hadoop \[HDFS\].

中文：例如 Google File System（GFS）或 Hadoop 的 HDFS。

\[09:00--09:18\] 英文：The programming model is called MapReduce.

中文：它所使用的编程/计算模型叫作 MapReduce。

\[09:00--09:18\] 英文：Remember the block of cheese, then the slice of
cheese, and then the sandwich.

中文：记住刚才的例子：先是一整块奶酪，再把它切成奶酪片，最后把各个部分组合成三明治。

\[09:00--09:18\] 英文：MapReduce is an abstraction for distributed
algorithms.

中文：MapReduce 是对分布式算法的一种抽象。

\[09:19--09:40\] 英文：The cylinder represents a database. It is a place
where you store data. These cylinders are distributed data storage.

中文：图中的圆柱体代表数据库，是存储数据的地方。这些圆柱体表示分布式数据存储。

\[09:44--10:16\] 英文：Once you map it, there's going to be some
\[shuffling\] done here. Then you shuffle it, and then you will reduce
it.

中文：完成 Map 之后，这里会进行一些 Shuffle（重新分组/整理）；接着执行
Reduce。

\[10:22--11:01\] 英文：Let's look at MapReduce in detail.

中文：现在我们详细看一下 MapReduce。

\[10:22--11:01\] 英文：A file is a bag of key-value pairs, and a bag is
a multiset.

中文：一个文件可以看作一组键值对（key-value pairs）；这里的 bag
指多重集合（multiset），也就是允许重复元素的集合。

\[10:22--11:01\] 英文：A Map program has an input which is a bag of
input key-value pairs, and its output is a bag of output key-value
pairs.

中文：一个 Map 程序的输入是一组输入键值对，它的输出也是一组键值对。

\[11:03--11:33\] 英文：You have very big data, and then you have your
Map. It accepts input key-value pairs and emits intermediate key-value
pairs.

中文：现在有一份很大的数据，Map
接收输入键值对，并产生中间键值对（intermediate key-value pairs）。

\[11:03--11:33\] 英文：In the Reduce process, Reduce accepts the
intermediate key-value pairs and emits output key-value pairs.

中文：在 Reduce 阶段，Reduce 接收中间键值对，并产生输出键值对。

\[11:38--12:22\] 英文：For Map, the input is split. Remember the term
sharding.

中文：对于 Map，输入数据会被切分。记住这个术语：sharding（分片）。

\[12:27--12:44\] 英文：Input shard, sharding, and intermediate key-value
pairs.

中文：输入分片（input
shard）、分片（sharding），以及中间键值对（intermediate key-value
pairs）。

\[12:27--12:44\] 英文：The system automatically partitions the input
data.

中文：系统会自动把输入数据划分成多个部分。

\[12:27--12:44\] 英文：You will discard unnecessary data and generate
event sets.

中文：你需要丢弃不必要的数据，并生成【语音稿识别为 event sets；结合 PPT
更可能是 key-value sets / intermediate key-value pairs，原音不清】。

\[12:44--13:08\] 英文：The framework gathers all intermediate values
with the same intermediate key and passes them to the Reduce function.

中文：框架会把所有具有相同中间键（intermediate
key）的中间值收集起来，然后传递给 Reduce 函数。

\[13:08--13:34\] 英文：For Reduce, the input is a key and a set of
values.

中文：对于 Reduce，它的输入是一个 key，以及与这个 key 对应的一组
values。

\[13:34--13:56\] 英文：You will merge these values together to form a
smaller set of values.

中文：你会把这些 values 合并/处理，形成更精简的结果。

\[13:34--13:56\] 英文：Reduce workers are distributed by partitioning
the intermediate key space into R pieces.

中文：Reduce workers 的任务分配方式，是把中间 key 的空间划分成 R
个部分。

\[13:34--13:56\] 英文：Using a partitioning function, for example,
hash(key) mod R.

中文：划分时使用分区函数，例如 hash(key) mod R。

\[13:34--13:56\] 英文：The user specifies the number of partitions, R,
and the partitioning function.

中文：用户需要指定分区数量 R，以及所使用的分区函数。

\[14:08--14:15\] 英文：In summary, input is a set of key-value pairs.

中文：总结一下：输入是一组键值对。

\[14:15--14:34\] 英文：The user supplies two functions, Map and Reduce.

中文：用户需要提供两个函数：Map 和 Reduce。

\[14:15--14:34\] 英文：K1, V1 is an intermediate key-value pair, and the
output is a set of key-value pairs.

中文：K1、V1
表示中间键值对；最终输出也是一组键值对。【语音稿中下标识别不清，按 PPT
的输入---中间---输出概念整理。】

\[14:49--14:54\] 英文：Now we're going to do the activity for that.

中文：现在我们来做与这个内容相关的课堂活动。

\[15:34--15:43\] 英文：This activity is in groups of four or five, so
change your position.

中文：这个活动以四到五人为一组，请大家调整座位。

\[15:48--15:55\] 英文：Go for group activity. Again, go to your group.

中文：现在开始小组活动，请回到/加入你们的小组。

\[17:13--17:31\] 英文：All right. Okay guys, this is actually from the
slide. But instead of me giving the lecture, you have to work it out.

中文：好。这道活动题实际上来自
PPT。不过这次不是由我直接讲解，而是要你们自己动手推导出来。

\[17:58--18:22\] 英文：No, China doesn't have Facebook. Oh, okay, then
what's the equivalent of Facebook in China? We use the Red Note, we use
TikTok. Ah, okay, so it's the Red Note.

中文：学生说：中国没有 Facebook。老师问：中国有什么类似 Facebook
的平台？学生回答：我们用小红书，也用
TikTok。老师回应：哦，那就是小红书。

\[18:14--18:33\] 英文：When you are friends with someone, you will see
the list of friends, right? The concept is the same, even though it's a
different brand.

中文：当你和某个人成为好友时，你就能看到他的好友列表，对吧？虽然平台品牌不同，但概念是一样的。

\[18:34--19:20\] 英文：So, Facebook common friends. User A's friend list
is B, C, D. User B is friends with A, C, D, E. User C is friends with A,
B, D, E. User D is friends with A, B, C, E. User E's friend list is B,
C, D.

中文：现在来看 Facebook 共同好友案例：A 的好友是 B、C、D；B 的好友是
A、C、D、E；C 的好友是 A、B、D、E；D 的好友是 A、B、C、E；E 的好友是
B、C、D。

\[19:21--19:55\] 英文：The goal is, when D opens B's profile, show that
you have three friends in common instantly.

中文：目标是：当 D 打开 B
的个人主页时，系统能够立即显示他们有三个共同好友。

\[19:21--19:55\] 英文：We precompute every pair once a day because this
is huge, and you don't need to always process common friends.

中文：因为数据量很大，所以我们每天预先计算一次所有好友对的共同好友。这样就不需要每次查看主页时都重新计算。

\[19:56--20:18\] 英文：You have a mapper for A. Map A to B, C, D. A and
B have friends B, C, D; A and C have friends B, C, D; A and D have
friends B, C, D.

中文：现在有一个负责处理 A 的 Mapper。把 A 映射到它的好友 B、C、D：对于
(A,B)、(A,C)、(A,D)，对应的 value 都是 A 的好友列表 B、C、D。

\[20:19--20:39\] 英文：Remember when we said there is a key-value pair?
This is the key, and this is the value.

中文：还记得我们说过的键值对吗？这里这一部分是 key，另一部分是 value。

\[20:19--20:39\] 英文：The key is the pair of people, so the letters are
sorted. The value is the mapper's whole friend list.

中文：Key 是由两个人组成的好友对，因此字母要按顺序排列。Value 是当前
Mapper 所代表用户的完整好友列表。

\[20:39--21:12\] 英文：You need to run the job by hand first. You need
to apply Map to B, C, D, and E, and write every pair.

中文：你们首先要手动执行这个任务。对 B、C、D、E 分别应用 Map
函数，并把每一个好友对都写出来。

\[20:39--21:12\] 英文：Then you do Shuffle: group all values with the
same key. Each key should end up with two lists.

中文：然后执行 Shuffle：把所有 key 相同的 value 分组。每个 key
最终应该对应两个列表。

\[21:13--21:45\] 英文：After you Shuffle, you Reduce: intersect the two
lists. What is left are the common friends of that pair.

中文：Shuffle 之后执行
Reduce：求两个列表的交集。交集里剩下的就是这两个人的共同好友。

\[21:13--21:45\] 英文：The answer you should give is: which friends do B
and D share? A, C, and E.

中文：你们需要回答的问题是：B 和 D 有哪些共同好友？答案是 A、C、E。

\[21:13--21:45\] 英文：One member handles each person, B, C, D, and E,
in parallel; then the results are grouped together.

中文：可以让不同组员分别处理不同用户（例如 B、C、D、E），并行完成各自的
Map 工作，之后再把结果汇总到一起。

## 语音稿中中文讨论部分的内容提示（非英文翻译）

约
22:16--31:36，录音主要是学生小组讨论，内容包括：讨论如何列出两两好友组合；确认活动要求是先对每个用户执行
Map，再按 key 做 Shuffle，最后 Reduce；学生询问为什么没有
(A,E)，并逐渐理解 key 是好友对、value
是当前用户的好友列表。讨论中有大量环境杂音和不完整语句，因此不逐字整理，以免把听不清的内容误写成确定结论。

课堂讨论的关键澄清：A 只认识 B、C、D，所以 A 生成
(A,B)、(A,C)、(A,D)，不会生成 (A,E)。E 只认识 B、C、D，也不会生成
(A,E)。

# 整理说明

-   知识笔记以本次语音稿与已上传的 Chapter 02 PPT 为依据；对 PPT
    中的共同好友完整结果和 Word Count 案例作了结构化整理。

-   语音稿中明显的自动识别错误（例如 MapReduce 被识别成 my videos、HDFS
    被识别成 HDX/HTTP 等）按上下文和 PPT
    术语做了必要校正，并在无法确认处加注。

-   Google
    数据规模数字在不同幻灯片/语音段落中存在年份或数值差异：网页规模例子按
    PPT 的 400+ TB；2009 年每日处理量按 PPT 对应页的约 24
    PB/day。不要把不同例子的数字混为一谈。

-   PPT 最后"All is not perfect""In
    practice"等页面提取文本缺少实质内容，因此本笔记不自行补充这些页的细节。
