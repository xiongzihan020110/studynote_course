以下是使用 Markdown 标准格式整理的内容，你可以直接复制到 Obsidian、Typora、Notion 或任何支持 MD 的编辑器中，格式会自动渲染得十分整洁。

---

# 汇报讲稿：Missingness-Aware Few-Shot Transfer Learning for PM2.5 Forecasting

> **时长预计：** 3 分钟
> **适用场景：** 课堂 Pre / Phase 1 提案汇报

## 第一部分：中英对照汇报讲稿

### 1. 开场 (Opening)
**English:** Good morning. Today I will present my Phase 1 proposal. My topic is using "Missingness-Aware Few-Shot Transfer Learning" to predict PM2.5 air quality across different regions.

**中文:** 各位好。今天我将汇报我的第一阶段提案。我的主题是使用“缺失感知的小样本迁移学习”来预测跨区域的 PM2.5 空气质量。

### 2. 研究背景与问题 (Background & Problem)
**English:** Air quality forecasting is important. But we have two big problems. First, data distribution shifts: a model trained in one city may fail in another city. Second, sensor data often has missing values. Current simple methods cannot handle these two problems together well.

**中文:** 空气质量预测很重要。但我们面临两个大问题。第一是数据分布偏移：在一个城市训练的模型，到另一个城市可能就不准了。第二是传感器数据经常有缺失值。目前简单的模型无法很好地同时处理这两个问题。

### 3. 研究目标 (Objectives)
**English:** So, my research question is: How can we combine these two? I have two main goals. First, develop a model that understands missing data. Second, use few-shot transfer learning to adapt this model to a new city with very little local data.

**中文:** 因此，我的研究问题是：我们如何将这两者结合起来？我有两个主要目标。第一，开发一个能理解缺失数据的模型。第二，使用小样本迁移学习，用极少的本地数据将这个模型适应到新城市。

### 4. 数据与方法 (Data & Methods)
**English:** I will use the Beijing dataset as the source domain, and the India dataset as the target domain. I will compare my proposed method with traditional models like LightGBM and deep learning models like GRU. I will test them under different missing data conditions.

**中文:** 我将使用北京数据集作为源域，印度数据集作为目标域。我会将我的方法与传统模型（如 LightGBM）和深度学习模型（如 GRU）进行比较。我会在不同的数据缺失条件下对它们进行测试。

### 5. 预期成果与结尾 (Expected Outcomes & Ending)
**English:** I expect to build a reliable and reproducible forecasting framework. This will help data-limited regions to monitor air quality better. Thank you. Any questions?

**中文:** 我期望建立一个可靠且可复现的预测框架。这将帮助数据有限的地区更好地监测空气质量。谢谢。欢迎提问。

---

## 第二部分：导师可能提问的 Q&A 准备

> **应对策略：** 导师提问通常围绕动机、数据、方法三个核心。回答尽量保持简洁、直接。

### Q1: 为什么选择北京和印度？
**应对策略：** 说明跨区域跨度大，能充分测试“分布偏移（Distribution shift）”的极端情况。

**回答:** Because they have very different weather and pollution patterns. This creates a big "distribution shift." It is a perfect test for our transfer learning model to see if it can handle large differences between regions.
*(因为它们的气候和污染模式差异很大。这造成了巨大的“分布偏移”。这是测试我们迁移学习模型能否处理大区域差异的完美试验场。)*

### Q2: 为什么用“小样本（Few-shot）”？不能用大量数据吗？
**应对策略：** 强调现实痛点——新建立的监测站没有历史数据。

**回答:** In the real world, new monitoring stations are just built. They don't have years of history. Few-shot learning allows us to use only a tiny amount of new data (like 10%) to adapt the old model. This saves time and cost.
*(在现实中，新监测站刚建好，没有多年的历史数据。小样本学习允许我们只用极少量的新数据来调整旧模型。这节省了时间和成本。)*

### Q3: 你的方法如何处理“缺失值”？
**应对策略：** 提到你的具体方法（缺失掩码和时间间隔）。

**回答:** I will use "missingness masks" and "time interval information" (like the GRU-D architecture). This tells the model: "This data is missing, and here is how long it has been missing." So the model does not just see a zero, it knows the real situation.
*(我将使用“缺失掩码”和“时间间隔信息”。这告诉模型：“这个数据缺失了，并且已经缺失了多久。”所以模型不仅看到个零，而是知道真实情况。)*

### Q4: 如果你的模型效果不如直接在印度本地训练的模型怎么办？
**应对策略：** 展现学术严谨性。如果失败，也是一种发现（Ablation analysis）。

**回答:** That is a possible outcome. If transfer learning hurts performance, it means the gap between Beijing and India is too large. I will use ablation analysis to find out why. Then, I might suggest changing the target domain to another city in China.
*(这是一个可能的结果。如果迁移学习反而降低了性能，说明北京和印度差距太大。我会用消融分析找出原因。然后，我可能会建议将目标域换成中国的另一个城市。)*

### Q5: 你使用了深度学习（Deep Learning），需要很多算力吗？
**应对策略：** 强调数据集规模不大，且方法可控。

**回答:** The datasets are large, but not massive for deep learning. I will use the GRU and LightGBM models. These are relatively lightweight. A normal laptop or Google Colab should be enough for this project.
*(数据集虽然不小，但对深度学习来说不算庞大。我会使用 GRU 和 LightGBM 模型，它们相对轻量。普通的笔记本电脑或 Google Colab 就足够完成这个项目了。)*



 Good morning
### 1. My research area (我的研究领域)
**Domain: Data Science (Machine Learning)**
领域：数据科学（机器学习）

### 2. My specific research interest (我的具体研究兴趣)
**Using machine learning to forecast air pollution (PM2.5) when data is missing and when moving between different cities.**
使用机器学习来预测空气污染（PM2.5），特别是在数据缺失以及跨城市应用的情况下。

### 3. My proposed project title (我提议的项目标题)
**Missingness-Aware Few-Shot Transfer Learning for Multivariate Time-Series Forecasting under Cross-Regional Distribution Shifts: A PM2.5 Case Study.**
缺失感知的小样本迁移学习用于跨区域分布偏移下的多变量时间序列预测：以 PM2.5 为例。

### 4. The problem I want to investigate (我想调查的问题)
**Two main problems: 1) Models trained in one city do not work well in another city. 2) Real-world sensor data often has missing values.**
两个主要问题：1）在一个城市训练的模型在另一个城市效果不好。2）现实世界中的传感器数据经常有缺失值。

### 5. Why is this problem important (为什么这个问题很重要)
**Because new monitoring stations do not have enough data to train good models. Solving this helps poor-data regions predict air quality better and save costs.**
因为新的监测站没有足够的数据来训练好的模型。解决这个问题可以帮助数据匮乏的地区更好地预测空气质量并节省成本。

### 6. Three relevant academic papers (三篇相关的学术论文)
*(这里直接引用你文档里的三篇核心文献)*
1. **Che et al. (2018).** Recurrent neural networks for multivariate time series with missing values.
2. **Yao et al. (2024).** Multi-source variational mode transfer learning for enhanced PM2.5 concentration forecasting at data-limited monitoring stations.
3. **Méndez et al. (2023).** Machine learning algorithms to forecast air quality: A survey.

---

**💡 朗读建议：** 
这 6 句话非常简短，直接读出来大概只需要 **1分半钟**。读的时候，每读完一点停顿一下，像在念清单一样，清晰自然即可。


这里为你准备了一段**极简版的口语化 Pre 稿**，大约需要 **1分半到2分钟** 读完。句子非常短，把刚才那 6 个点自然地串联了起来，非常适合你直接背诵或脱稿演讲。

---

### 极简 Pre 讲稿（中英对照）

## **English:**
Good morning. Today I will introduce my research proposal. 

My research area is Data Science and Machine Learning.
My specific interest is using machine learning to forecast air pollution, specifically PM2.5.
The title of my project is: Missingness-Aware Few-Shot Transfer Learning for PM2.5 Forecasting.

The problem I want to research is two things. 
First, a model trained in one city often fails in another city. 
Second, real sensor data often has missing values. 
Current models cannot handle both problems well at the same time.

Why is this problem important? 
Because new monitoring stations do not have enough history data to train a good model. 
If we solve this, data-limited regions can predict air quality better and save money.

For the data, I will use two public datasets.  
I will use Beijing air quality data as the source, and India air quality data as the target.  
That is my proposal. Thank you.


To support my research, I found three key papers:
First, Che et al. in 2018, about missing values in time series.
Second, Yao et al. in 2024, about transfer learning for PM2.5.
And third, Méndez et al. in 2023, a survey on machine learning for air quality.

That is my proposal. Thank you.

---

**中文参考（方便你理解节奏）：**
各位好。今天我将介绍我的研究提案。

我的研究领域是数据科学与机器学习。
我的具体兴趣是用机器学习来预测空气污染，特别是 PM2.5。
我的项目标题是：缺失感知的小样本迁移学习用于 PM2.5 预测。

我想调查的问题有两个。
第一，在一个城市训练的模型，到另一个城市往往就不准了。
第二，真实的传感器数据经常有缺失值。
目前的模型无法同时很好地处理这两个问题。

为什么这个问题重要？
因为新的监测站没有足够的历史数据来训练一个好模型。
如果我们解决这个问题，数据有限的地区就能更好地预测空气质量，并节省成本。

为了支持我的研究，我找到了三篇关键论文：
第一，Che 等人 2018 年的文章，关于时间序列的缺失值。
第二，Yao 等人 2024 年的文章，关于 PM2.5 的迁移学习。
第三，Méndez 等人 2023 年的文章，关于空气质量机器学习的综述。

这就是我的提案。谢谢。

---

**💡 朗读小贴士：**
*   这篇稿子没有长难句，单词都很基础（除了那个长标题）。
*   遇到 Title 那句，如果不熟练，可以看着屏幕上的字慢点读。
*   中间提到两个问题（First... Second...）和三个文献（First... Second... And third...）的时候，**竖起手指比划一下 1、2、3**，会显得你非常自信从容。