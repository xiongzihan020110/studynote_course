# Python 第二章 · 元组与列表

## 一、零基础讲解

### 1. 先认识这四个词

| 课堂用词 | 白话意思 | 例子 |
|---|---|---|
| 元素 element / item | 容器里的一项 | `[10, 20]` 的两项是 10 和 20 |
| 索引 index | 给位置编的号，从 0 开始 | `[10, 20][0]` 得到 10 |
| 函数 function | 把值交给它，由它完成一项任务 | `len([10, 20])` 得到 2 |
| 方法 method | 用点号对某个对象执行操作 | `items.append(30)` 往列表末尾加 30 |

本章主要讲两种容器。想记一个经纬度或坐标，可以用元组 `(3, 5)`。想记一份要不断增删的购物清单，可以用列表 `["牛奶", "鸡蛋"]`。两者都有顺序，都允许重复，也都能混放不同类型。比如 `len([42, "你好", [1, 2]])` 是 3，因为里面的小列表在外层只占一个位置。

**先看懂赋值和数据类型。** `age = 20` 的意思是把名字 `age` 绑定到值 20。右边的值先算出来，左边的名字再接住它。`type(age)` 告诉你它是什么类型，`print(age)` 把值显示出来。常见的类型有整数 `int`（如 `20`）、浮点数 `float`（如 `3.5`）、字符串 `str`（如 `"20"`）和布尔值 `bool`（`True` 或 `False`）。`"False"` 带引号，是一串文字。课上有时直接输入变量名就能看到输出，这是 Notebook 等交互环境的行为。把代码写进普通 Python 脚本时，可以用 `print()` 显示结果。

### 2. 元组的逗号与索引 · 约 05:18–19:31

```python
print(type((4)))      # <class 'int'>
print(type((4,)))     # <class 'tuple'>
print(tuple("hi"))    # ('h', 'i')
print(tuple(["hi"]))  # ('hi',)
print(list((4, 5)))   # [4, 5]
```

`(4)` 的圆括号只是把数字括起来。`(4,)` 的逗号告诉 Python，这是一个只装了一个元素的元组。空元组写作 `()`。直接遍历字符串会逐字取出，遍历 `["hi"]` 时则只有一个东西可取，那就是整个字符串。

如果有 `x = ["甲", "乙", "丙"]`，那么 `x[0]` 是甲，`x[1]` 是乙，`x[-1]` 是丙。索引超过范围会报 `IndexError`。用方括号取元素时，前面要有变量名或一个序列。单独写 `[0]` 会创建一个只含数字 0 的列表。

**嵌套时一层一层取。** 例如 `data = ((4, 5, 6), (7, 8))`。外层只有两个位置，因此 `len(data)` 是 2。`data[1]` 先取出 `(7, 8)`，再接一个 `[0]`，即 `data[1][0]`，就取到 7。可以把它想成先选第二个抽屉，再拿抽屉里的第一样东西。

**索引和计数回答不同的问题。** `(2, 1, 2).index(2)` 返回 0，告诉你第一次出现的位置。`(2, 1, 2).count(2)` 返回 2，告诉你总共出现了几次。值不存在时，`count()` 返回 0，`index()` 会报 `ValueError`。

### 3. 元组里套列表 · 约 19:32–28:49

```python
t = ("购物", ["牛奶"])
t[1].append("鸡蛋")
print(t)  # ('购物', ['牛奶', '鸡蛋'])

# t[1] = ["面包"]  # 取消注释后会报 TypeError
print((1, 2) + (3,))  # (1, 2, 3)
print(("哈",) * 3)    # ('哈', '哈', '哈')
print((2, 1, 2).count(2))  # 2
print((2, 1, 2).index(1))  # 1
```

把元组想成一排固定的格子。第二格放了一张购物清单，你可以在那张清单上写字。直接用 `t[1] = ...` 会试图换掉第二格的整张清单，元组会阻止它。拼接和重复会计算出一个新元组，原元组仍然在。

### 4. 解包就是按位置把值分给变量 · 约 28:50–45:53

```python
x, y = (3, 5)
print(x, y)  # 3 5

a, b = 4, 9
a, b = b, a
print(a, b)  # 9 4

x, y, (z, w) = (4, 5, (7, 8))
print(x, y, z, w)  # 4 5 7 8

first, *middle, last = (10, 20, 30, 40)
print(first, middle, last)  # 10 [20, 30] 40

for name, score in [("小林", 80), ("小周", 92)]:
    print("{} 得了 {} 分".format(name, score))
```

普通解包时，左右数量必须对得上。嵌套时，看外层有几格，再决定要不要把里面的东西拆开。星号会把剩余值收进一个列表，哪怕右边是元组。写成 `*_` 时，下划线只是变量名，通常表示后面用不到。循环示例中，每轮从列表取出一组姓名和分数，按位置分给两个变量。两个 `{}` 依次填入 `format()` 收到的两个值。单独 `print("小林")` 显示小林，查看列表 `["小林"]` 时通常会看到引号，以便辨认列表里的元素类型。

**课堂里的两种占位符写法。** `"{} {} {}".format(c, a, b)` 会按传入顺序填值。`"{0} {1} {2}".format(c, a, b)` 结果相同，因为编号也是从 0 开始。也可以写 `"{2} {0} {1}".format(a, b, c)`，主动改变输出顺序。这些花括号属于格式字符串。`a[0]` 的方括号则是从序列中取元素。

**函数怎样一次给出两个结果。** `return` 的作用是把结果交还给调用者。`return 10, 20` 会把两项打包成一个元组，所以调用者可以用两个变量接住。

```python
def dimensions():
    return 10, 20

width, height = dimensions()
assert (width, height) == (10, 20)
assert "{2} {0} {1}".format(1, 2, 3) == "3 1 2"
```

**读懂解包报错。** 对 `(4, 5, (7, 8))` 写 `a, b, c, d = ...`，会得到 `ValueError: not enough values to unpack`。右边外层只有三项，左边要四项。写 `a, b, c = ...` 会让 `c` 接住完整的 `(7, 8)`。只有希望把小元组也拆开时，才写 `a, b, (c, d)`。

### 5. 两个名字可以指向同一份列表 · 约 56:11–1:03:42

```python
a = [1, 2]
b = a
a.append(3)
print(b)  # [1, 2, 3]

a = [4, 5]
print(b)  # [1, 2, 3]

c = b.copy()
c.append(9)
print(b, c)  # [1, 2, 3] [1, 2, 3, 9]

print(range(4))        # range(0, 4)
print(list(range(4)))  # [0, 1, 2, 3]
```

`b = a` 像给同一份清单多贴了一个名字。通过任意名字修改这份清单，另一个名字看到的也是修改后的内容。`a = [4, 5]` 则把名字 `a` 指向另一份清单。`copy()` 复制外层列表，如果里面还套着小列表，小列表仍会共享。

课堂将 `range` 叫作“生成器”。准确来说，`range` 是一种可迭代的范围对象。它只用起点、终点和步长就能描述一串数。`list(range(4))` 会把数逐个取出存进列表。课堂所说的“数组可以直接除以 3”，适用于 NumPy 数组这类支持逐元素运算的对象。普通 Python 列表可以这样逐个计算。

```python
print([n / 3 for n in [3, 6, 9]])  # [1.0, 2.0, 3.0]
```

### 6. 列表的增删查 · 约 1:03:43–1:27:15

表中每行都从一份新的 `a = [10, 20, 30]` 开始。

| 想做什么 | 写法 | 执行后的列表 | 操作返回值 |
|---|---|---|---|
| 在末尾放一个值 | `a.append(40)` | `[10, 20, 30, 40]` | `None` |
| 在末尾逐个加入多个值 | `a.extend([40, 50])` | `[10, 20, 30, 40, 50]` | `None` |
| 在索引 1 处插入 | `a.insert(1, 99)` | `[10, 99, 20, 30]` | `None` |
| 按索引取出并删除 | `a.pop(1)` | `[10, 30]` | `20` |
| 按值删除第一次出现的项 | `a.remove(20)` | `[10, 30]` | `None` |
| 删除一段 | `del a[1:]` | `[10]` | `del` 是语句 |
| 检查是否含某个值 | `20 in a` | `[10, 20, 30]` | `True` |

`pop()` 省略索引就取走最后一项。按值删除时，如果目标值不存在，`remove()` 会报 `ValueError`。一次 `append([40, 50])` 会把整个小列表当作一项，结果是 `[10, 20, 30, [40, 50]]`。用 `+` 可以拼出一个新列表。课堂说 `insert()` 开销较大，可以想象排队时有人插到前面，后面很多人都得挪位置。

想去掉所有匹配项，可以一边读原列表，一边把想保留的项放进新列表。这样不会因删除导致索引移动而跳过相邻的重复项。

```python
names = ["Gimli", "Gimli", "Sam"]
kept = []
for name in names:
    if name != "Gimli":
        kept.append(name)
print(kept)  # ['Sam']
```

**循环的每一轮都要看清“加什么”。** 假设 `names = ["甲", "乙"]`，循环跑两轮。每轮写 `result.extend(names)`，都会把整份原列表加进去，所以结果是 `["甲", "乙", "甲", "乙"]`。每轮写 `result.append(name)`，只会加入这一轮拿到的一个名字，结果是 `["甲", "乙"]`。课堂上同学反复讨论的就是这个区别。

```python
names = ["甲", "乙"]
result = []
for name in names:
    result.extend(names)
assert result == ["甲", "乙", "甲", "乙"]
```

**只删前三个匹配项。** 读到匹配项时先数一下已经跳过几个。如果少于三，就把计数加一并跳过这项。后面的匹配项就会照常保留。

```python
names = ["甲", "甲", "乙", "甲", "甲"]
kept = []
removed = 0
for name in names:
    if name == "甲" and removed < 3:
        removed += 1
        continue
    kept.append(name)
assert kept == ["乙", "甲"]
```

**两端频繁进出时的队列。** 课上提到的 `deque` 是双端队列，可以用 `appendleft()` 在左端加一项，也可以用 `popleft()` 从左端取走一项。普通列表往前面插入时，后面的元素需要腾位置。

```python
from collections import deque

queue = deque(["甲", "乙"])
queue.appendleft("丙")
assert queue.popleft() == "丙"
assert list(queue) == ["甲", "乙"]
```

### 7. 排序与二分查找 · 约 1:27:15–1:40:31

```python
words = ["boxes", "he", "small", "six"]
words.sort(key=len)
print(words)  # ['he', 'six', 'boxes', 'small']

words.sort(key=len, reverse=True)
print(words)  # ['boxes', 'small', 'six', 'he']

numbers = [3, 1, 2]
new_numbers = sorted(numbers)
print(numbers, new_numbers)  # [3, 1, 2] [1, 2, 3]
```

`key=len` 是让 Python 用长度当排序依据。两个词一样长时，原来的先后关系会保留。`sort()` 直接修改原列表，返回 `None`。想保留原列表，可以用 `sorted()` 得到一个新列表。字符串默认按字符逐个比较。

二分查找像猜数字。先看中间的数，再判断该往左半边还是右半边继续找，每次缩小搜索范围。`bisect` 用同样的思路找插入位置。

```python
import bisect

a = [10, 20, 20, 40]
print(bisect.bisect_left(a, 20))   # 1，放在相等项之前
print(bisect.bisect_right(a, 20))  # 3，放在相等项之后
bisect.insort(a, 30)
print(a)  # [10, 20, 20, 30, 40]
```

`bisect.bisect()` 默认等同于 `bisect_right()`，只返回索引。`insort()` 会修改列表。上面这些写法依赖输入已经升序排列，函数不会帮你先排序。

### 8. 切片就是从队列里取一段 · 约 1:40:59–1:45:20

假设 `a = [10, 20, 30, 40, 50, 60]`。

| 写法 | 白话解释 | 结果 |
|---|---|---|
| `a[1:4]` | 从索引 1 开始，到索引 4 前停 | `[20, 30, 40]` |
| `a[:3]` | 从开头取前三项 | `[10, 20, 30]` |
| `a[3:]` | 从索引 3 取到末尾 | `[40, 50, 60]` |
| `a[-3:-1]` | 从倒数第三项取到倒数第一项前 | `[40, 50]` |
| `a[::2]` | 从头开始，每次走两格 | `[10, 30, 50]` |
| `a[::-1]` | 从尾到头，每次往回走一格 | `[60, 50, 40, 30, 20, 10]` |

记住顺序是 `[起点:终点:步长]`，**起点取到，终点停在外面**。默认步长是 1，从左向右。`a[-2:-5]` 会得到空列表，因为从倒数第二项向右走，走不到倒数第五项。`a[-2:-5:-1]` 会得到 `[50, 40, 30]`。

取切片 `part = a[1:3]` 会得到一个新列表。对切片赋值 `a[1:3] = [99]` 会直接修改 `a`，把 20 和 30 两项换成一项 99，得到 `[10, 99, 40, 50, 60]`。

**负索引和负步长各管一件事。** `-1` 写在索引的位置，代表最后一项。写在第三个位置（步长）时，代表每次往左走一格。以 `a = [10, 20, 30, 40, 50, 60]` 为例，`a[-1]` 得到数字 60，`a[-1:]` 得到列表 `[60]`，`a[::-1]` 得到从后往前排列的整个列表。可以先圈出起点，再沿步长的方向走，遇到终点就停。

```python
a = [10, 20, 30, 40, 50, 60]
assert a[-1] == 60
assert a[-1:] == [60]
assert a[-2:-5:-1] == [50, 40, 30]
a[1:3] = [99]
assert a == [10, 99, 40, 50, 60]
del a[-2:]
assert a == [10, 99, 40]
```

### 9. 三道自测

1. `len(((1, 2), (3, 4, 5)))` 等于多少？
2. 执行 `a = [1]`、`b = a`、`b.extend([2, 3])` 后，打印 `a` 得到什么？
3. 对 `x = [10, 20, 30, 40, 50]`，`x[1:4:2]` 取出哪些值？

答案

1. **2**。外层只有两个元素，两个元素分别是小元组。
2. **`[1, 2, 3]`**。两个名字指向同一个列表。
3. **`[20, 40]`**。索引从 1 开始，每次加 2，取到 1 和 3。下一次会超过终点。

### 10. 对照 Notebook 补齐的元组与列表细节

| 知识点 | 课件位置 | 零基础说明 |
|---|---|---|
| `None` | 2.1.1 元组拼接 | 表示没有值。它和数字 0、空字符串 `""`、布尔值 `False` 是不同的对象。 |
| 序列重复与共享引用 | 2.1.1 元组乘整数 | `* 3` 重复三个位置上的引用。若原来的元素是可变列表，修改其中一个位置看到的列表，其他位置也会看到。 |
| `print(*rest)` | 2.1.1.2 解包 | `print(rest)` 把列表作为一个参数打印。`print(*rest)` 把列表拆成多个参数，默认用空格隔开。课件里方括号和字符串外侧引号消失，原因是打印方式变了。 |
| `*args` | 2.1.1.2 解包 | 定义函数时，`def f(*args)` 把多余的位置参数收进一个元组。赋值时，`first, *rest = values` 把剩余元素收进一个列表。 |
| 查询方法帮助 | 2.1.2.2 列表增删 | Notebook 中可以用 `list.insert?` 查看帮助。普通 Python 脚本里可以写 `help(list.insert)`。 |
| `in` 与查找成本 | 2.1.2.2 列表增删 | 列表通常从头逐个比较，查不到时要看完整个列表。字典查键、集合查成员通常更快，平均时间开销接近常数。 |
| 拼接列表与原地扩展 | 2.1.2.3 列表拼接 | `a + b` 新建列表并复制元素引用。循环中反复 `result = result + batch` 会一遍遍复制已有部分。若要累加到同一列表，可用 `result.extend(batch)`。 |
| 切片可以缩短或拉长列表 | 2.1.2.6 切片 | `seq[3:5] = [16]` 用一项替换两项。`seq[3:4] = [9, 8]` 用两项替换一项。 |
| 取末尾与去掉末尾 | 2.1.2.6 切片 | `seq[-4:]` 取最后四项。`seq[:-4]` 取最后四项之前的内容。冒号两侧的位置决定结果。 |

```python
shared = ([],) * 3
shared[0].append("甲")
assert shared == (["甲"], ["甲"], ["甲"])

first, *rest = (10, "甲", "乙")
print(rest)   # ['甲', '乙']
print(*rest)  # 甲 乙

def collect(*args):
    return args

assert collect(10, 20, 30) == (10, 20, 30)

seq = [7, 2, 3, 7, 5, 6, 0, 1]
seq[3:5] = [16]
assert seq == [7, 2, 3, 16, 6, 0, 1]
seq[3:4] = [9, 8]
assert seq == [7, 2, 3, 9, 8, 6, 0, 1]
```

课件也给出了课上部分语音不清的代码。访问 `tuple('python')[4]` 得到 `'o'`。嵌套解包有两组独立示例，分别是 `(4, 5, (6, 7))` 和 `(4, 5, (7, 8))`。排序单元格使用的是 `['six', 'foxes', 'He', 'small', 'saw']`。默认字符串比较区分大小写，而 `key=len` 只比较长度，同长度保留原顺序。

### 11. 常用序列函数 · Notebook 2.1.3

**`enumerate()` 给每一项加一个编号。** 直接写 `for fruit in fruits` 每次只拿到水果。写 `for i, fruit in enumerate(fruits)`，每次同时得到编号和水果。默认从 0 开始，用 `start=1` 可以给清单按人的习惯从 1 编号。要做“水果名 → 位置”的字典，可以用水果当键。如果名字重复，后出现的位置会覆盖先出现的位置。

```python
fruits = ["apple", "banana", "pear"]
assert list(enumerate(fruits, start=1)) == [
    (1, "apple"), (2, "banana"), (3, "pear")
]
assert dict(enumerate(fruits)) == {0: "apple", 1: "banana", 2: "pear"}
positions = {}
for i, fruit in enumerate(fruits):
    positions[fruit] = i
assert positions["pear"] == 2
assert sorted((3, 1, 2)) == [1, 2, 3]
```

`sorted()` 可以接收元组等可迭代对象，返回列表。写法是 `sorted(a)`。Notebook 中的 `a.sorted()` 是错误示例，列表没有这个方法。

**`zip()` 把多列按位置配成一行。** 第一项和第一项配，第二项和第二项配。默认到最短的一列结束。Python 3 的 `zip()` 返回迭代器，想直接看到全部结果就用 `list()`。已经取完的同一个 `zip` 对象，再取一次会得到空列表。对非空的成对数据，可以用 `zip(*rows)` 把行拆回列。这里的星号把每一行作为一个参数交给 `zip()`。已经因长度不等而丢掉的项无法通过拆列找回来。

```python
names = ["小林", "小周", "小陈"]
scores = [80, 92]
rows = list(zip(names, scores))
assert rows == [("小林", 80), ("小周", 92)]

for i, (name, score) in enumerate(rows, start=1):
    print(i, name, score)

paired_names, paired_scores = zip(*rows)
assert paired_names == ("小林", "小周")
assert paired_scores == (80, 92)
```

**`reversed()` 反向读取，`range()` 按规则提供整数。** `reversed(a)` 返回反向迭代器，原序列保持原顺序。要拿到完整列表可以用 `list(reversed(a))`。列表的 `a.reverse()` 则直接改原列表。`range(start, stop, step)` 与切片一样排除终点，步长为负时从大往小走。

```python
assert list(reversed([1, 2, 3])) == [3, 2, 1]
assert list(range(3)) == [0, 1, 2]
assert list(range(100, 103)) == [100, 101, 102]
assert list(range(20, 10, -2)) == [20, 18, 16, 14, 12]
```

### 12. 字典与哈希 · Notebook 2.1.4

**字典像通讯录。** 名字是键，号码是值。`d["小林"]` 按键查值。键为整数时也一样，`d[7]` 查的是键 7。`len(d)` 数键值对，`str(d)` 得到字典的字符串表示，`type(d)` 显示其类型为 `dict`。

| 想做什么 | 写法 | 注意点 |
|---|---|---|
| 新建空字典 | `d = {}` | 空大括号创建字典 |
| 读取已知的键 | `d["a"]` | 键不存在会报 `KeyError` |
| 读取并提供备用值 | `d.get("a", 0)` | 缺键时返回 0，省略备用值时返回 `None` |
| 添加或覆盖 | `d["a"] = 7` | 键已存在就替换其值 |
| 检查键 | `"a" in d` | 查的是键，查值可用 `"a" in d.values()` |
| 删除键 | `del d["a"]` | 缺键会报 `KeyError` |
| 删除并取出值 | `d.pop("a", 0)` | 缺键时返回 0，省略备用值时缺键会报 `KeyError` |
| 批量加入键值对 | `d.update({"a": 8, "b": 2})` | 原地修改，已有键取新值 |

直接遍历 `d` 或 `d.keys()` 得到键，`d.values()` 得到值，`d.items()` 得到 `(键, 值)`，所以可以写 `for key, value in d.items()`。这些方法返回字典的视图，可以用 `list()` 保存当时的内容。现代 Python 的字典保留插入顺序。

```python
d = dict(zip(["a", "b"], [1, 2]))
assert list(d.items()) == [("a", 1), ("b", 2)]
assert d.get("z") is None
assert "z" not in d
d.update({"b": 9, "c": 3})
assert d.pop("b") == 9
assert d == {"a": 1, "c": 3}
```

**哈希帮 Python 快速缩小查找范围。** 可以把 `hash()` 想成给键算一个整数编号。查键时，Python 先根据编号定位，再用相等比较确认。不同对象可能算出相同编号。字符串、整数和元素都可哈希的元组可以作为字典键。列表、字典、普通集合以及内部含列表的元组不可哈希。字典的值可以是列表或字典等任意对象。

```python
coordinate = tuple([3, 5])
assert isinstance(hash(coordinate), int)
locations = {coordinate: "入口"}
assert locations[(3, 5)] == "入口"
# hash((3, [5]))  # 取消注释会报 TypeError
```

**把单词按首字母分组。** 每个字母对应一个列表。首次碰到一个字母时需要给它一个空列表，之后往同一个列表加词。`setdefault()` 缺键时会写入默认值，再返回这个值。相比之下，`get()` 缺键时只返回备用值。`defaultdict(list)` 则在用方括号访问缺键时自动调用 `list()` 来创建空列表。

```python
from collections import defaultdict

words = ["apple", "bat", "bar", "atom", "book"]
groups = {}
for word in words:
    groups.setdefault(word[0], []).append(word)
assert groups == {"a": ["apple", "atom"], "b": ["bat", "bar", "book"]}

groups_auto = defaultdict(list)
for word in words:
    groups_auto[word[0]].append(word)
assert dict(groups_auto) == groups
```

### 13. 集合 · Notebook 2.1.5

**集合只记“有哪些”。** `set([2, 2, 1, 3, 3])` 得到由 1、2、3 组成的集合。集合没有可用的下标，显示顺序也不应当作为程序依据。空集合写 `set()`。集合成员也要可哈希，比如 `{(1, 2)}` 可以创建，`{[1, 2]}` 会报错。

设 `a = {1, 2, 3}`、`b = {3, 4}`。

| 运算 | 写法 | 结果 | 怎么理解 |
|---|---|---|---|
| 并集 | `a.union(b)` 或 `a \| b` | `{1, 2, 3, 4}` | 任意一边有就留下 |
| 交集 | `a.intersection(b)` 或 `a & b` | `{3}` | 两边都有才留下 |
| 差集 | `a.difference(b)` 或 `a - b` | `{1, 2}` | 只留 a 中有而 b 中没有的 |
| 对称差集 | `a.symmetric_difference(b)` 或 `a ^ b` | `{1, 2, 4}` | 恰好只在一边出现 |

```python
a = {1, 2, 3}
b = {3, 4}
assert a - b == {1, 2}
assert a ^ b == {1, 2, 4}
assert {1, 2}.issubset(a)
assert a.issuperset({1, 2})
assert {1, 2, 3} == {3, 2, 1, 1}

c = a.copy()
c |= b
assert c == {1, 2, 3, 4}
assert a == {1, 2, 3}
```

子集指左边的每个元素都能在右边找到，超集反过来。集合相等只看成员。`|=`、`&=`、`-=`、`^=` 都会原地更新左侧集合。`add(x)` 增加一个成员。`remove(x)` 删除一个成员，缺失时会报错。`discard(x)` 在缺失时可以继续运行。

### 14. 列表、字典与集合推导式 · Notebook 2.1.6

推导式把“遍历、筛选、转换、保存”写成一行。读 `[n ** 2 for n in nums if n % 2 != 0]` 时，先读中间的 `for`，再读后面的 `if`，最后读前面的表达式。意思是依次拿一个数字，判断它是否是奇数，是的话就把它的平方加入新列表。`%` 是取余数，`**` 是乘方。去掉 `if` 就会处理所有元素。

```python
nums = [1, 2, 3, 4]
squares = []
for n in nums:
    if n % 2 != 0:
        squares.append(n ** 2)
assert squares == [n ** 2 for n in nums if n % 2 != 0]

fruits = ["banana", "apple", "cherry", "lime", "mango"]
assert [s.upper() + "!!!" for s in fruits if "a" in s] == [
    "BANANA!!!", "APPLE!!!", "MANGO!!!"
]

words = ["BAT", "CAR", "DOVE", "PYTHON"]
positions = {word: i for i, word in enumerate(words)}
lengths = {len(word) for word in words}
assert positions["CAR"] == 1
assert lengths == {3, 4, 6}
assert lengths == set(map(len, words))
```

方括号产生列表，保留顺序与重复值。大括号里写 `键: 值` 产生字典，相同的键会被后值覆盖。大括号里只写一个表达式产生集合，结果去重。`map(len, words)` 逐个计算长度，交给 `set()` 后才收集成集合。

### 15. Notebook 五道练习与答案

1. **删除所有 Merry。** `kept = [name for name in c_list if name != "Merry"]`。若想让其他引用也看到删除结果，可以写 `c_list[:] = kept`，把原列表的整段内容替换掉。
2. **在已排序的课程列表中插入 `SCSP 3223`。** 先用 `bisect.bisect(courses, "SCSP 3223")` 查位置，得到索引 3，再用 `bisect.insort()` 插入。
3. **对乱序课程做同样的插入。** 先用 `courses.sort()` 排序，再查索引并插入。插入后 `SCSP 3223` 在 `SCSJ 3213` 与 `SCSR 2103` 之间。
4. **计算购物车金额。** 对每件商品，用 `prices.get(item, 1)` 取单价。梨未列价，按 RM1 计算。总价为 `12 × 2.5 + 1 × 3 + 2 × 5.5 + 10 × 1 = RM54`。
5. **保留列表中的奇数，再计算立方。** `[n ** 3 for n in a if n % 2 != 0]`。题目筛的是列表里的奇数值，和它排在奇数位置还是偶数位置无关。

```python
import bisect

c_list = ["Merry", "Merry", "Sam"]
c_list[:] = [name for name in c_list if name != "Merry"]
assert c_list == ["Sam"]

courses = ["SCSJ 1013", "SCSR 2103", "SCSJ 3213", "SCSV 4312", "SCSI 1103"]
courses.sort()
assert bisect.bisect(courses, "SCSP 3223") == 3
bisect.insort(courses, "SCSP 3223")
assert courses[2:5] == ["SCSJ 3213", "SCSP 3223", "SCSR 2103"]

cart = {"apple": 12, "banana": 1, "orange": 2, "pear": 10}
prices = {"mango": 12, "apple": 2.5, "orange": 5.5, "banana": 3}
total = sum(qty * prices.get(item, 1) for item, qty in cart.items())
assert total == 54

a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
assert [n ** 3 for n in a if n % 2 != 0] == [1, 729, 15625, 117649, 531441]
```

## 二、中英逐句对照稿

按原课堂时间顺序排列，英文在上，中文在下。英文保留自动转录中的识别用词，译文使用能确认的 Python 术语。断句不清、口语重复或译文合并的地方，把相邻句放在同一组对照。原本用中文发言的段落标为「中文原话」。

### 00:00–09:07 · 开场与元组的写法

**00:00 - 00:09｜发言人 1**

**英文原文** Speaker and paper，so make sure when you download it，you download the zip file.  
**中文译文** [材料名称转录不清]，所以下载的时候，一定要下载 ZIP 压缩包。

**00:09 - 00:12｜发言人 2**

**英文原文** and put all the.  
**中文译文** 然后把所有的……

**00:12 - 00:30｜发言人 1**

**英文原文** speakers and paper in the same folder as the.  
**中文译文** 把刚才提到的材料放在同一个文件夹里。

**英文原文** So that all the figures and table were we got that into this python code right.  
**中文译文** [句尾缺失] 这样 Python 代码就能用到那些图和表。

**00:37 - 00:58｜发言人 1**

**英文原文** Okay, so today we will start our chapter2 right so we have two parts for chapter2.  
**中文译文** 好，今天我们开始第二章。

**英文原文** first we will look at at the building data structure and then the2 part we will look at the functions.  
**中文译文** 第二章有两部分，先看内置数据结构，再看函数。

**英文原文** right okay, so we look at at the first part which is the data structures.  
**中文译文** 现在先来看第一部分，数据结构。

**00:59 - 01:20｜发言人 1**

**英文原文** 哎。So there are few data structures built in data structures in Python, right? So the first one is tuple, right? What is tuple? Tuple is a fixed size grouping of elements. So let me read it first. You can always refer to.  
**中文译文** 哎，Python 有几种内置的数据结构。第一种是元组。什么是元组？元组是一组数量固定的元素。我先读一下，你们也可以随时参考……

**01:20 - 01:49｜发言人 1**

**英文原文** The uh to your nature notes if you cannot see the one in front right so a couple is a fit size grouping of elements such as an x y coordinate couples are immutable and do not change size. Okay，tuples are not strictly immutable since one of the contained elements could be mutable，right？So I will make and I will explain later.  
**中文译文** 呃，如果看不清前面，可以看讲义。元组是一组数量固定的元素，比如一个 x、y 坐标。元组不可变，大小也不会变。好，不过其中某个元素可能是可变对象，所以这里要区分一下，我稍后解释。

**01:50 - 02:08｜发言人 1**

**英文原文** So tuples are a convenient way to pass around a little logical，fixed size bundle of values.  
**中文译文** 元组方便把几个逻辑上有关联、数量固定的值一起传来传去。

**英文原文** 方向给那。To return multiple values, can just return a couple of the values.  
**中文译文** 想返回多个值，也可以把这些值打包成元组返回。

**英文原文** Okay, so we have couple.  
**中文译文** 好，这就是元组。

**02:16 - 02:27｜发言人 1**

**英文原文** So we have couple.  
**中文译文** 那么，什么是元组？

**英文原文** So what is couple?  
**中文译文** 它是一组元素。

**英文原文** It is a group of element that is number one, it is a fixed size element right?  
**中文译文** 首先，元素的数量是固定的，对吧？

**02:27 - 02:59｜发言人 1**

**英文原文** For example when you declare a couple size three right so you cannot change the size anymore couldn't be less couldn't be more okay it must be three right and then it is immutable so what does it mean by immutable? Means that when you create a couple, you cannot change whatever values inside the couple. Alright, for example, if you create a couple with the value.  
**中文译文** 比如你创建一个含三个元素的元组，它的大小就不能再变，既不能少，也不能多，必须是三个。还有，它是不可变的。不可变是什么意思？你创建元组以后，就不能随意换掉里面的值。比如你创建一个元组，值是……

**03:00 - 03:18｜发言人 1**

**英文原文** Use one to three, right?  
**中文译文** 用一、二、三，对吧？

**英文原文** You cannot change into other values, right?  
**中文译文** 你不能把它们换成其他值。

**英文原文** Unless it says unless one of the element in the couple is mutable, right?  
**中文译文** 除非这里说的是，元组里有一个元素本身是可变的。

**英文原文** So when I said that, unless one of the element.  
**中文译文** 我刚才说，除非有一个元素……

**03:18 - 03:20｜发言人 2**

**英文原文** in the couple is mutable.  
**中文译文** 元组里的那个元素是可变的。

**03:20 - 03:42｜发言人 1**

**英文原文** this and inside that couple. There is element can be changed right? For example, list right. So if you look at at this figure, this is a couple size six right? So why six we have zero one two three four five, so six element.  
**中文译文** 元组里有的元素本身可以改，比如列表。看这张图，这个元组长度是六。为什么是六？索引有零、一、二、三、四、五，所以是六个元素。

**03:43 - 04:05｜发言人 1**

**英文原文** Right，so when we declare a tuple with size six，and inside the tuple we have p y p h o n，okay，so the tuple will. remain six. Okay，the size remains six，and the inside value remains tighter。  
**中文译文** 对，创建这个长度为六的元组时，里面放了六个字母[具体拼写转录不清]。那么它的长度还是六，位置上的值也保持原样。

**04:05 - 04:24｜发言人 1**

**英文原文** You cannot change into other letters，or you cannot shorten the uh the tupper，or you cannot lengthen the tupper，right？So this is tupper size four，right？This is a tupper size five，okay？So inside the tuple, it can be anything.  
**中文译文** 你不能把它们换成别的字母，也不能缩短或拉长这个元组。这是长度为四的元组，这是长度为五的元组。元组里可以装各种东西。

**04:24 - 04:59｜发言人 1**

**英文原文** For example, if you look at this tuple, the size is five. So the first element is an integer, second element is the integer, third element here is a list, a list of number. right okay so this list okay the nature of a list is it can be mutable right it can be changed right so you can change whatever inside the list right okay and then we have the fourth element.  
**中文译文** 看这个长度为五的元组。第一个元素是整数，第二个也是整数，第三个是列表，是一组数字。列表本身是可变的，所以你可以改它里面的内容。然后是第四个元素……

**05:00 - 05:18｜发言人 1**

**英文原文** Every teacher，and the last element，the fifth element is a string，right？So inside the couple，you can have a different data type，right？Okay，so how do you want to create a couple？The easiest way to.  
**中文译文** [第四个元素的类型转录不清。] 最后一个，也就是第五个元素，是字符串。所以元组里可以装不同类型的数据。那怎么创建元组？最简单的办法是……

**05:18 - 05:41｜发言人 1**

**英文原文** Create a couple is with a comma separated sequence of value, alright?  
**中文译文** 把一串值用逗号隔开。

**英文原文** Okay, for example, if you look at at this, okay, so if you look at at this example, I have only one element.  
**中文译文** 看这个例子，我这里只有一个元素。

**英文原文** Maybe I should put this one first.  
**中文译文** 也许我应该先把这个例子放前面。

**05:43 - 05:52｜发言人 1**

**英文原文** Okay, so let's say I have this one, right? So I have only one element. I put C equal to four, right?  
**中文译文** 好，假设我有这个，只有一个元素，把变量设成四。

**05:53 - 06:26｜发言人 1**

**英文原文** So we only have one element. So if I print. The variable P，and if I look at at the data type of P，it will say that. He is an individual right it is not a couple right okay so if you want it to be a couple okay a couple with only one element so after the the value you need to put a.  
**中文译文** 我们只有一个元素。如果把变量打印出来，再看它的数据类型，会发现它是个整数。要让它成为一个只有一个元素的元组，必须在这个值后面放一个……

**06:27 - 06:44｜发言人 1**

**英文原文** commer, you need to put a comma right? If you have only one value in the couple, right, then you have to put the comma right? and then if you bring it, you can see that the time is couple right so the symbol.  
**中文译文** 逗号。只有一个值的时候，要放一个逗号。打印类型时，你就能看到它是元组。它的符号……

**06:45 - 07:04｜发言人 1**

**英文原文** A couple is bracket, right? So bracket bracket is the symbol of a couple, right? So you can also have. Multiple values in one couple，alright？  
**中文译文** 元组显示出来会带圆括号，对吧？你也可以在同一个元组里放多个值。

**07:04 - 07:21｜发言人 1**

**英文原文** So we have top，can I say I have a variable named top，and then I put4 comma5 comma6，alright？And then if I call top，you can see that it is inside a bracket。Right, so this is a couple.  
**中文译文** 假设我们把变量取名为 `tup`，然后写四、逗号、五、逗号、六。查看 `tup`，可以看到它显示在圆括号里。这是一个元组。

**07:22 - 07:35｜发言人 1**

**英文原文** What is the size of that couple?  
**中文译文** 这个元组的大小是多少？

**英文原文** What is the size of that number three?  
**中文译文** 三。

**英文原文** So why three?  
**中文译文** 为什么是三？

**英文原文** Because you have three elements, right?  
**中文译文** 因为有三个元素。

**07:36 - 07:47｜发言人 1**

**英文原文** Okay, so if you check that type, you can see that it is a tuple. Alright, so this one. Okay，this one is a big difference。  
**中文译文** 查一下类型，可以看到它是元组。好，接下来这个用法有个区别。

**07:55 - 08:21｜发言人 1**

**英文原文** All right, so if we have this one, ABC equals. One two three, so this is not a couple, this is a multiple assignment. Alright, so in Python, okay, if you really really not easy like really mind, so right, okay, so you can have three values.  
**中文译文** 如果写 `a, b, c = 1, 2, 3`，这叫多重赋值。Python 可以把三个值分别交给三个变量。

**08:22 - 08:39｜发言人 1**

**英文原文** And each of them assign to one value, right? So this is what we call multiple assignment. You can have A B C equal to one to three, so A will be taking value one, B equal to two.  
**中文译文** 每个变量对应一个值，所以叫多重赋值。这里 `a` 得到一，`b` 得到二。

**08:40 - 08:59｜发言人 1**

**英文原文** So this is not a tuple, okay? So if you look at this, this is an integer. So this can be done in Python. Multiple variables assign to multiple values, right? ok，说一，你第三。  
**中文译文** 单独查看这里的变量，得到的是整数。Python 可以这样把多个值赋给多个变量。[末尾转录不清。]

**09:01 - 09:07｜发言人 2**

**英文原文** 表 only have one他其他的 then方式 have要有。  
**中文译文** [夹杂中英的对话转录不清，可辨认到“只有一个”和“其他方式”。]

### 09:19–28:49 · 嵌套、类型转换、索引与元组拼接

**09:19 - 10:04｜发言人 1**

**英文原文** Okay，so when you are defining couples in more complicated expressions，it's often necessary to enclose the values in parentheses，right？We can have，you can have a nested couple，instead，inside a couple。you have couples right for example let's say i give the variable name as nested top right and then i have four five six and then i have seven eight so i'm creating one big couple right and then. Inside that the next step up, I have tablespoons. Okay, so question, what is the size of this tablespoon?  
**中文译文** 在比较复杂的表达式里定义元组时，往往需要把值用圆括号括起来。元组里面还可以装元组，这叫嵌套。假设变量叫 `nested_tup`，一组是四、五、六，另一组是七、八。我创建了一个大元组，里面有小元组。问一下，这个大元组的大小是多少？

**10:12 - 10:23｜发言人 1**

**英文原文** Because they are two elements inside. So you only have two elements. All right, so the first element is a couple contains.  
**中文译文** 因为里面只有两个元素，所以大小是二。第一个元素本身是一个元组，包含……

**10:24 - 10:48｜发言人 1**

**英文原文** Three elements，the second element also a couple that contains two elements，so the nested top size is two，right？It's not five，it is two，right？So you can see that。THIS IS THE MAIN TUPLE, SO INSIDE THE MAIN TUPLE WE HAVE ANOTHER TWO TUPLE, RIGHT?  
**中文译文** 三个元素。第二个也是元组，包含两个元素。因此外层的大小是二，不是五。可以看到，主元组里面有另外两个元组。

**10:49 - 11:04｜发言人 1**

**英文原文** OKAY, SO YOU CAN CONVERT ANY SEQUENCE OR ITERATOR TO A TUPLE BY INVOKING TUPLE, RIGHT? SO LET'S. Okay，we have a list of number like this，right？  
**中文译文** 好，调用 `tuple()` 可以把序列或迭代器变成元组。比如我们有这样一份数字列表。

**11:04 - 11:19｜发言人 1**

**英文原文** Okay，we haven't gone into the structure list，but I need to。Right, I need to let you know that list will be in the square bracket. So that is list.  
**中文译文** 我们还没正式讲列表，不过先告诉大家，列表写在方括号里。

**11:19 - 11:30｜发言人 1**

**英文原文** That one we have that bracket right? And then list we have the square bracket. Okay, we will go deeper on the list later on.  
**中文译文** 刚才那个用圆括号，列表用方括号。稍后再细讲列表。

**11:30 - 11:46｜发言人 1**

**英文原文** Right? Okay, so let's say we have a list of number here. Four zero two，right？So if you want to convert this list into a tuple，you just invoke the keyword tuple，right？  
**中文译文** 比如这个列表里有四、零、二。想把列表转成元组，调用 `tuple()` 就行。

**11:46 - 11:59｜发言人 1**

**英文原文** So tuple means that you want to change this this into a tuple，and then you want to. Assign the values into variable x, right? And then we have another tuple here.  
**中文译文** `tuple()` 把这个对象转成元组，再把结果赋给变量 `x`。这里还有另一个元组。

**12:01 - 12:18｜发言人 1**

**英文原文** So there are two ways for you to make a couple. Okay, one is this one where you put all the values there. Another one is by using the keyword couple, right? Okay, you can see that both of them.  
**中文译文** 所以有两种写法，一种是把所有值直接写出来，另一种是调用 `tuple()`。你可以看到，这两个……

**12:19 - 12:59｜发言人 1**

**英文原文** Are presented in the bracket indicating that they are couples. Couples convert a string into couple of individual character. Alright, so I have here two example. Okay, I have two different variable. One is I'm converting this hello string into a tuple and save it into cup variable, and then another one is I have a list that containing a string table, right? I.  
**中文译文** 都显示在圆括号里，表示它们是元组。直接把字符串转成元组，会得到一个个字符。这里有两个例子和两个变量。一个是把字符串 “hello” 转成元组，另一个是把只含一个字符串的列表……

**13:00 - 13:29｜发言人 1**

**英文原文** Put it into the tuple，and then I save it in the variable top one，right？So you can see that they are having different kind of output，right？But if you look at at this top，right？If we are converting。A string into a couple, so you will get a couple containing.  
**中文译文** 传进 `tuple()`，再保存到另一个变量。你会看到输出不同。先看第一个，把字符串转成元组时，会得到一个元组，里面放着……

**13:31 - 13:50｜发言人 1**

**英文原文** Each of the letter in the string as individual characters. So it will, for example, we have hello, we have five letters there. So each of the letter will become one individual element in the tuple.  
**中文译文** 字符串的每个字符。“hello” 有五个字母，所以每个字母都变成元组里的一个元素。

**13:51 - 14:07｜发言人 1**

**英文原文** So this one, the difference between this one and that one is I have a list but in that. I ONLY HAVE ONE SCREEN, RIGHT? SO I'M CONVERTING THIS SCREEN.  
**中文译文** 两个例子的区别是，这里我有一个列表，列表里只有一个字符串。我在转换这个字符串……

**14:08 - 14:43｜发言人 1**

**英文原文** Okay，sorry，I'm converting this list into the tuple，right？So that's why I'm only converting list into a tuple，but the element inside it will be presented as a whole string。Right because it is only one element tuple will add comma then right tuple will add comma in the output right okay.  
**中文译文** 哦，我是在转换这个列表。变成元组的是外层列表，里面的字符串还是完整的。元组只有一个元素，所以输出里会带一个逗号。

**14:48 - 15:03｜发言人 1**

**英文原文** If you look at this example, as I mentioned earlier, if you only have one element, right? And then one is one is. Same as a couple, make sure you put.  
**中文译文** 就像刚才说的，只有一个元素、又想做成元组时，一定要放……

**15:03 - 15:03｜发言人 2**

**英文原文** a.  
**中文译文** 一个……

**15:03 - 15:14｜发言人 1**

**英文原文** comma after it, right? Then it will be a couple. Doctor, what there is the comma after hello? This one, this one. Yeah, what there is a comma after that.  
**中文译文** 逗号，放在它后面，这样才是元组。老师，为什么 “hello” 后面有逗号？是这个吗？对，为什么后面有逗号？

**15:14 - 15:22｜发言人 1**

**英文原文** So let's say I don't have this comma, right? Let's say I like, I don't have this comma, right? So what happened is.  
**中文译文** 假设我把逗号去掉。那会怎么样呢？

**15:23 - 15:34｜发言人 1**

**英文原文** Right, I said hello without the comma. Okay, I save it as stop, and then you can see that the type is string. Right, the type is string.  
**中文译文** 我把没有逗号的 “hello” 赋给变量。你看，类型是字符串。

**15:34 - 15:55｜发言人 1**

**英文原文** Okay, if you want it to be a tuple, so the rule is if you only have one element. And you want it to be a couple, you need to add a comma. So that's the rule, right? So if you put the comma after the string candle, right?  
**中文译文** 要让它成为元组，规则就是，如果只有一个元素，需要加逗号。你把逗号放在这个字符串后面……

**15:55 - 16:11｜发言人 1**

**英文原文** So it will tell Python that this variable is. A tuple right? So if you run it, you can see that the class is tuple right? If you have more than one element, then it is okay.  
**中文译文** Python 就知道这个值是元组。运行以后可以看到类型是 `tuple`。有多个元素时，用逗号把它们隔开就可以。

**16:12 - 16:37｜发言人 1**

**英文原文** If you only have one element, you should end with comma right? Okay，so it also turns a list object into a couple，for example，as I mentioned that this is a using the bracket，right？The square bracket，so let's say I have list of object here，right？So I can.  
**中文译文** 只有一个元素时，要以逗号结尾。还有，列表也能转成元组。我刚才说了，列表写在方括号里。假设我这里有一份对象列表……

**16:37 - 16:54｜发言人 1**

**英文原文** Uh, this one I want to check what is the data type of this object. So this one is I'm converting this list of object into a couple okay? And then I save it as this one right? And then I check for the data type.  
**中文译文** 我先查这个对象的类型。然后把这个列表转成元组，把结果保存起来，再查类型。

**16:54 - 17:14｜发言人 1**

**英文原文** So you can see that. This one is a list, right? So that's why I said class is right, and then I am taking this list, I convert it into a tuple, and then when I print it, it is a tuple, right?  
**中文译文** 可以看到原来的类型是列表。现在我把这个列表转成元组，打印结果，它是元组。

**17:15 - 17:42｜发言人 1**

**英文原文** Okay，so elements in the couple can be accessed with square bracket，as with most other sequence type。So as in C，Python，Java and many other languages，sequences are zero index in Python。Then，for example，look at this one，okay？I have a string，right？  
**中文译文** 好，元组里的元素可以用方括号访问，这一点跟大多数序列类型相同。和 C、Java 等很多语言一样，Python 的序列索引从零开始。看这里，我有个字符串。

**17:42 - 17:59｜发言人 1**

**英文原文** So when I convert it into a tuple，so each character will become an individual element in the tuple，right？And then this one will be started.  
**中文译文** 我把它转成元组，每个字符各占一个位置。

**英文原文** As zero index, so zero one two.  
**中文译文** 索引从零开始，零、一、二……

**18:00 - 18:34｜发言人 1**

**英文原文** three four five right so we have five um we have six element index from zero until five right so at any time when when you want to access okay any characters in this tuple.  
**中文译文** 三、四、五。

**英文原文** You can just call the couple, alright?  
**中文译文** 总共六个元素，索引从零到五。

**英文原文** And then you give the index of the character that you want, alright?  
**中文译文** 要访问任意一个字符，只需要写元组变量，然后给出想取的那个字符的索引。

**英文原文** So if we say top one for, so which letter?  
**中文译文** 比如取索引四，是哪个字母？

**18:39 - 19:03｜发言人 1**

**英文原文** Okay，zero one two three four，so it will be four，right？Okay，while the object spot in the couple may be mutable themselves，once the couple is created，it's not possible，it's not possible to modify。Which object is part in each slide?  
**中文译文** 零、一、二、三、四，取的是索引四。好，放在元组里的对象本身可能是可变的，不过元组创建之后，每个位置指向哪个对象就不能改了。

**19:03 - 19:31｜发言人 1**

**英文原文** Okay, so remember I said that if the tuple is the fixed group element right?  
**中文译文** 记得我说过元组的元素数量是固定的吧？

**英文原文** So if you create a tuple with size six then it will remain six until the end.  
**中文译文** 如果创建时大小为六，它就一直是六。

**英文原文** Okay，right？And then it is immutable，you cannot change whatever inside the tuple，the values inside the tuple，unless the value is mutable。  
**中文译文** 它也是不可变的，不能换掉里面的元素，但里面的对象本身可能是可变的。

**19:32 - 19:59｜发言人 1**

**英文原文** Okay，so we look at at this。At this example. I have a list that contains three elements right so the first element is a string i mean the second element is a list right and then the third element is a boolean value right so i have the list.  
**中文译文** 来看这个例子。我有一个列表，包含三个元素。第一个是字符串 “I mean” [字样可能有误]，第二个是列表，第三个是布尔值。

**20:00 - 20:20｜发言人 1**

**英文原文** These three elements, I convert it into a couple and save it as the as a variable top right.  
**中文译文** 我把这三个元素所在的列表转成元组，存进变量 `tup`。

**英文原文** So you can see that now it has turned into a couple with size three.  
**中文译文** 你可以看到，现在元组大小是三。

**英文原文** So why three?  
**中文译文** 为什么？

**英文原文** Because we have three elements.  
**中文译文** 因为有三个元素。

**20:20 - 20:41｜发言人 1**

**英文原文** Right, okay. What I'm going to do now is. I'm going to change the value of top zero, right? So at index zero, I have a string. I mean, I want to change it into a string false, right?  
**中文译文** 接下来，我想改 `tup[0]` 的值。索引零那里有一个字符串，我想换成字符串 “false”。

**20:43 - 21:18｜发言人 1**

**英文原文** Okay，so you can see there is a type error，and then it says that tuple object does not support item assignment，so means that you cannot change，you cannot assign new values to any. Any elements in the couple, right? Okay, if an object inside a couple is mutable, means that you can change it, changeable, such as a list, then you can modify it in place.  
**中文译文** 你会看到 `TypeError`。报错说元组对象不支持给某个元素赋值。也就是说，你不能给元组的某个位置换一个新值。不过，元组里要是放了可变对象，比如列表，就可以原地修改那个对象。

**21:18 - 21:32｜发言人 1**

**英文原文** Okay, in place means that. You will stay away changing the values, right? Okay, you cannot decrease the previous value anymore, so it will overwrite your value, right?  
**中文译文** 原地的意思是，直接在那个对象上改。改掉的位置会用新值覆盖原值。

**21:32 - 21:39｜发言人 1**

**英文原文** So we look at our top just now, right? So this is our top just now, right? So.  
**中文译文** 回头看刚才的 `tup`。这就是刚才的元组。

**21:39 - 21:49｜发言人 1**

**英文原文** We have a list over here, right? A list. The nature of a list, it can be mutable, right?  
**中文译文** 这里面有一个列表。列表的特点就是可以改。

**21:49 - 22:09｜发言人 1**

**英文原文** So what happened is I'm going to access an index one, right? I want to change it as two four five. Hey I say one day. ONE TWO, I want to change it to two four five right? So it will give me error.  
**中文译文** 假设我访问索引一，想把原来的列表一、二换成二、四、五，就会报错。

**22:10 - 22:34｜发言人 1**

**英文原文** Alright, so why you just give me error? Why is for give me error? I said that this can be changeable, right? So why now it. Thanks Aaron，I cannot change this，so what happen is you are trying to take that list。  
**中文译文** 为什么报错？我刚说过这个列表可以改，为什么现在改不了？因为你是在试图把那个列表拿走……

**22:35 - 22:59｜发言人 1**

**英文原文** To put it away and put another list, so you are changing the item itself, so it cannot be right when I say that you it can be changeable is you can go inside the list and change whatever inside the list. Right, so later you can append the list, right? Or you can remove items.  
**中文译文** 然后放进另一个列表。这样改的是元组里的那个位置，所以不行。我说可以改，是指你可以进入原来的列表，修改列表内部的东西。比如可以追加，或者删除里面的元素。

**23:01 - 23:16｜发言人 1**

**英文原文** Okay，for example，I'm assessing tag one，right？I'm assessing tag one，which is this one，and then I put just a pen three，right？So you can see that I can have one to three，right？  
**中文译文** 例如我访问 `tup[1]`，也就是这个列表，然后调用 `.append(3)`，你会看到列表里变成一、二、三。

**23:17 - 23:37｜发言人 1**

**英文原文** So what happened here is. YOU HAVE, I MEAN, OVER HERE, RIGHT? AND THEN YOU HAVE ONE, TWO, RIGHT? AND THEN YOU HAVE TWO, RIGHT? SO WHAT WE ARE TRYING TO DO WHEN WE HAVE THE.  
**中文译文** 这里发生了什么？这边有字符串，这里有一、二，旁边还有一个值。我们现在想做的是……[画面指代，部分转录不清。]

**23:45 - 24:14｜发言人 1**

**英文原文** Right，so what happened here is you are trying to change this whole thing，you want to bring this out，and then you want to bring this245 in。开。right because you are changing the whole itself right so what i mean by changeable is you are going to access.  
**中文译文** 刚才那样写，是想把这整个东西拿出去，把二、四、五放进来。那是在换整个元素。我说的可变，是先访问……

**24:15 - 24:51｜发言人 1**

**英文原文** Then you are going to access whatever inside here, which is this one. Right then you can, when you can open. Or you can delete the values inside it. The whole thing you cannot change anything, but inside it, then you need to go inside it, and then you can do. Other parts，so that's why when we have got a pen three，so we just want to add element at the end of the mix，right？  
**中文译文** 然后再访问里面的内容。你可以往里面追加或从里面删值。元组的那个位置不能换，但可以进去改列表里面。刚才写 `.append(3)`，就是往列表末尾放一个元素。

**24:52 - 25:19｜发言人 1**

**英文原文** Okay，so you can concatenate couples using the plus operator to produce normal。So if you still remember in chapter one, we have concatenation, right? We can concatenate string with strings, right? Here we can also concatenate tupper, but it must be with tupper, right? It must be in the same group, right? So let's say I.  
**中文译文** 好，可以用加号把元组拼起来，得到一个新元组。还记得第一章的拼接吗？字符串可以和字符串拼。这里元组也能拼，要和另一个元组拼。

**25:19 - 25:46｜发言人 1**

**英文原文** have these two couples right so i can do the concatenation here get top plus top one so you can see that it will times these two different couples right two different couples. Okay，when you do the concatenation，it will become one big couple，right？The one big couple。  
**中文译文** 假设有两个元组，我写 `tup + tup1`，可以看到两个元组拼成了一个更大的元组。

**25:50 - 26:14｜发言人 1**

**英文原文** Okay，so you can also have this one。Right，so I have three，sorry，I have four different couples。so one is a tupper with a size three, and then i have a tupper size two, i have a tupper size one and another tupper size one, right?  
**中文译文** 也可以像这里这样。我有三个，哦，是四个元组。长度分别是三、二、一、一。

**26:15 - 26:44｜发言人 1**

**英文原文** Okay，so when you do the combination，you will have one couple consists of three plus two plus one plus one，right？So you have two plus two five plus two，you have seven，five seven，okay？So by putting a comma after the string hello, so because as I mentioned, there's only one one value one element that you need to put comma.  
**中文译文** 拼起来以后就是三加二加一加一，一共七个元素。这里在 “hello” 后放逗号，是因为这个元组只有一个元素。

**26:46 - 26:55｜发言人 1**

**英文原文** So not that string cannot be stored as one string but an individual character. So without the comma, it will raise. And error.  
**中文译文** [此处转录有混乱。] 如果省掉那个逗号，这项就是字符串，拼接时会报错。

**26:55 - 27:07｜发言人 1**

**英文原文** Okay, so if I just put out the comma, right? And then if I. Again，then it will say that can only concatenate tuple to tuple，right？  
**中文译文** 把逗号删掉再运行，会提示只能把元组和元组拼接。

**27:07 - 27:27｜发言人 1**

**英文原文** So what happen here，this is a tuple，this one also tuple，but this one is a string，right？So it said that not string，right？So you need to change this one。Into a couple, so how to change it? Because it only has one element, you put comma right?  
**中文译文** 这里是元组，这里也是元组，但这一项是字符串。要把它变成元组，怎么做？它只有一个元素，所以加个逗号。

**27:27 - 27:53｜发言人 1**

**英文原文** Then it will become a couple right? So remember when creating a couple with a single entry, you must add a comma after the. And three, right? Okay, multiplying a tuple by an integer as with this has the effect of concatenating together that many copies of the tuple.  
**中文译文** 这样就是元组了。记住，只有一个元素时要在它后面加逗号。元组乘整数，就相当于把相应份数的元组首尾拼起来。

**27:53 - 28:08｜发言人 1**

**英文原文** So remember in chapter one, I also said that if we have one.  
**中文译文** 还记得第一章说过的吗？

**英文原文** 好，外向风。Multiply an inspector number means that you want to repeat the things with how many numbers that you specify.  
**中文译文** 乘上一个整数，就是按你指定的次数重复。

**28:08 - 28:30｜发言人 1**

**英文原文** So if I put here, I mean10 times3, so means that I want to have one big couple that repeating this value. three times，来，ok，so far，any question？Here you can hear my voice back then, right?  
**中文译文** 比如把这里的元组乘三，得到一个更大的元组，里面这组值重复三次。好，目前有问题吗？能听到我说话吧？

**28:30 - 28:49｜发言人 1**

**英文原文** Okay, so I will have some food, right? Alright, okay, so now you already know how to... um. HOW TO CREATE A TUPLE, THEN YOU KNOW HOW TO ACCESS ANY VALUES INSIDE THE TUPLE.  
**中文译文** 好。[有一句转录不清。] 现在大家已经知道怎样创建元组，也知道怎样访问里面的值了。

### 28:50–47:11 · 解包、格式化与元组方法

**28:50 - 29:07｜发言人 1**

**英文原文** OKAY, THE SECOND PART IS UNPACKING TUPLES. RIGHT? IF YOU TRY TO ASSIGN TO A TUPLE LIKE EXPANSION OF VARIABLES. Python will attempt to unpack the value on the right hand side of the equal sign.  
**中文译文** 接下来是元组解包。如果等号左边写了一组变量，Python 就会尝试把右边的值拆开，分别交给它们。

**29:08 - 29:23｜发言人 1**

**英文原文** So why does it say here is? Let's say you are creating a couple here, right? So you are creating a couple with three elements. Alright，and then you want to unpack that couple，okay？  
**中文译文** 这句话是什么意思？假设这里创建了一个有三个元素的元组，然后你想把它解包。

**29:23 - 29:47｜发言人 1**

**英文原文** You want to unpack it，you will say that，okay，I have three elements in that couple，we know that we cannot change the value inside the couple，but you say that you want to do something with the numbers in that couple，right？So what we can do is we can unpack that couple，so for. For example, I know that this cup contains three values.  
**中文译文** 你知道元组有三个元素，不能直接换里面的值，但你想对这些数字做些处理。那可以先把元组解包。我知道这个元组有三个值……

**29:47 - 30:02｜发言人 1**

**英文原文** So when I want to unpack the cup, I need to prepare three variables. So each variable will have the value, each value is. Inside the stopper, right?  
**中文译文** 所以解包时准备三个变量，每个变量拿到元组里的一个值。

**30:02 - 30:27｜发言人 1**

**英文原文** So then you can print ABC, and then you can change them this way, right?  
**中文译文** 然后可以打印 `a`、`b`、`c`，也可以分别给变量赋值。

**英文原文** Okay，even sequences with nested tuples can be unfair.  
**中文译文** 带有嵌套元组的序列也能解包。

**英文原文** For example，they say I have four，five，six，seven，so it is a tuple with size，right？Size three。  
**中文译文** 比如这里有四、五和另外两个数字，外层元组的大小是三。

**30:28 - 30:46｜发言人 1**

**英文原文** So when you want to unpack the couple, make sure you follow the pattern, right? So the first one, the second driver, and then the third driver must be inside the couple, right? Then you can.  
**中文译文** 解包时要跟着结构写。第一、第二个各用一个变量，第三项如果也要拆开，就在里面再写一组变量。

**30:46 - 30:59｜发言人 1**

**英文原文** I'm back again. Correct me right? So if you didn't put this one, maybe you say that oh, I have four, five, six, seven, I have.  
**中文译文** 这样就能正确解包。如果不这样写，也许你会想，这里明明有四个数字……

**31:00 - 31:42｜发言人 1**

**英文原文** four numbers right and then you want to unpack it like this right so it will raise an error it will say that not enough values to unpack expected four because you gave a b c d four three.  
**中文译文** 然后用 `a, b, c, d` 接，结果会报错，说解包的值不够，想要四个，实际只有三个。

**英文原文** Okay，you can see that the error message is very readable。Okay，expected four got three，okay，so you know that you should have only three variables，right？Okay，right？  
**中文译文** 报错写得很清楚，所以你知道外层只需要三个变量。

**31:42 - 31:56｜发言人 1**

**英文原文** So let's say I have this one，right？So I know that the couple contains three elements，right？And then I just want to have.  
**中文译文** 比如这里，我知道这个元组有三个元素，我只想要……

**31:56 - 32:07｜发言人 1**

**英文原文** Have three rivals, right? Even. I have four values, but I say that I only want three variables because this tuple contain only three values.  
**中文译文** 三个变量。虽然总共看得到四个数，但外层元组只有三个元素，所以我只用三个变量。

**32:07 - 32:38｜发言人 1**

**英文原文** Right? So I put x one back equal to sub two. So what happen is x equal to four, y equal to five, z equal to. seven eight right so if you want to okay you can see that this is that seven eight again if you want to access any value inside it you should have the index z zero you will have seven z one you will have.  
**中文译文** 把它解包给 `x, y, z`。`x` 得到四，`y` 得到五，`z` 得到整个小元组。这里小元组说的是七和八，要取里面的值就写 `z[0]` 或 `z[1]`。

**32:45 - 33:12｜发言人 1**

**英文原文** Okay，using this functionality，you can easily swap variable names across which many languages might look like。Okay，so this is happening in Java，you see，is it bus bus？When you want to swap two values, you need to create another variable, right? As a temporary variable, right? So that you can have temporarily taking the variable, okay?  
**中文译文** 有了这个功能，也能很方便地交换变量的值。在其他一些语言里，例如课堂上说的 Java 写法，通常会先创建一个临时变量，暂存其中一个值。

**33:12 - 33:36｜发言人 1**

**英文原文** Values, and then do the swapping, and then have the B taking the temporary.  
**中文译文** 然后完成交换，把暂存的值交给另一个变量。

**英文原文** But in Python, we can do it straightway.  
**中文译文** Python 可以直接写。

**英文原文** For example, let's say I put multiple assignment here: A B equal to one two, means that A equal to one, B equal to two.  
**中文译文** 比如先用多重赋值 `a, b = 1, 2`，也就是 `a` 等于一，`b` 等于二。

**33:36 - 34:05｜发言人 1**

**英文原文** Right? Right! And then what happened is. Here is the one that I'm doing the swapping, right? B will taking whatever A has, A will be taking the value whatever B has, right? Okay，a common use of variable unpacking is iterating over sequences of tuples or list。  
**中文译文** 然后这里做交换，`b` 得到 `a` 原来的值，`a` 得到 `b` 原来的值。变量解包还有一个常见用法，就是遍历由元组或列表组成的序列。

**34:06 - 34:28｜发言人 1**

**英文原文** Okay，they say I have a list。A list of couples, okay? Inside this list I have three couples, okay? And each of the couple will have three elements, right? Okay, so if I want to iterate over this couple.  
**中文译文** 假设我有一个列表，里面有三个元组，每个元组都有三个元素。如果想逐个处理这些元组……

**34:28 - 34:46｜发言人 1**

**英文原文** I can do it with four look, right? For example, I have four look, okay? Because I know that each couple will have three, will have three values, so I will have three variable here, A, B, C.  
**中文译文** 可以用 `for` 循环。既然每个元组有三个值，我就准备三个变量 `a`、`b`、`c`。

**34:47 - 34:59｜发言人 1**

**英文原文** Alright, so I want to look over this sequence. Alright, so I want to bring in. I want to drink B, I want to drink C.  
**中文译文** 我想遍历这个序列，然后分别打印 `a`、`b` 和 `c`。

**35:00 - 35:24｜发言人 1**

**英文原文** right and then i put dot for my c a b right and then i print a and then i print b and then i print c. So we look at at the output first, right? Okay，so what happen here is you look at at the first one。  
**中文译文** 这里用 `.format(c, a, b)`，然后再打印 `a`、`b`、`c`。先看输出，先看第一个元组。

**35:34 - 35:43｜发言人 2**

**中文原话** 咱们刚才用的是这里吗？你刚问的是哪里可以加颜色？太有趣了，我都忘了我问你，你刚才问你做什么？

**35:44 - 36:01｜发言人 1**

**中文原话** 我触而知那个什么。我刚查了一下EA的功能体。我说为什么放不是你报错放波尔式就可以。他会以为这是一个被定义的。面料，但是我。

**36:01 - 36:45｜发言人 1**

**英文原文** so what happened here is we have a sequence of couples right so when we say for abc sequence right so what happened is we are creating three driver abc.  
**中文译文** 这里有一个元组序列。

**英文原文** Right because it is a four look so it will showing the first it will go into the first tuple so it will be taking one.  
**中文译文** 写 `for a, b, c in sequence` 时，会用到三个变量。

**英文原文** So A will be taking one, B will be taking two, and then C will be taking three, right?  
**中文译文** 第一轮先拿到第一个元组，`a` 得到一，`b` 得到二，`c` 得到三。

**36:46 - 37:06｜发言人 1**

**英文原文** Okay, and then this is that print ABC, not format CAB, right? So means that you want to print A. Have former be equal to the former and c equal another one, right?  
**中文译文** 接下来用 `.format(c, a, b)` 组织要显示的内容，然后还有分别打印三个变量的语句。

**37:06 - 37:33｜发言人 1**

**英文原文** So it says that in the format of c a b, right? So it means that the first one must be taking the value from c. THE SECOND ONE FROM A, RIGHT? AND THEN THE THIRD ONE FROM B, RIGHT? SO THAT'S WHY YOU WILL HAVE C IS THREE, RIGHT? AND THEN B IS ONE, ONE, AND THEN C.  
**中文译文** 传进 `format` 的顺序是 `c, a, b`。所以第一个位置拿 `c`，第二个拿 `a`，第三个拿 `b`。对应的值是三、一……

**37:33 - 37:34｜发言人 2**

**英文原文** IS TWO.  
**中文译文** 二。

**37:34 - 37:59｜发言人 1**

**英文原文** TWO, RIGHT? AND THEN YOU SAY THAT PRINT A, PRINT B, PRINT C. SO PRINT A. One three D two three C three right and then we already finish with this one then we will go to iterate to another another uh taco so we have A we have B we have C.  
**中文译文** 二。再分别打印 `a`、`b`、`c`，得到一、二、三。这一轮结束后，就去处理下一个元组，再给三个变量赋值。

**38:00 - 38:21｜发言人 1**

**英文原文** Right，and then first we need to print C A B，so that's why we have645，right？And then print A，print B，print C，so you have456，right？And then we go to the next，last couple。AND THEN YOU WILL HAVE.  
**中文译文** 先按 `c, a, b` 的顺序打印，所以看到六、四、五。再按 `a, b, c` 的顺序打印，得到四、五、六。再到最后一个元组，就会有……

**38:22 - 38:43｜发言人 1**

**英文原文** nine seven eight is also right. OK. The Python language recently acquired some more advanced tuple unpacking to help with situations where you may want to pluck a few elements from the beginning of a tuple.  
**中文译文** 九、七、八。Python 还有一种进阶解包写法，适用于你只想从元组开头取几个元素的情况。

**38:45 - 39:12｜发言人 1**

**英文原文** This uses the special syntax asterisk rest, which is also used in function signatures to capture an arbitrary long list of positional arguments. UhI'm explaining this the example, right? so it says here like this, right? let's say you have a couple with with many elements.  
**中文译文** 这要用到星号语法 `*rest`。函数的参数定义也会用星号接收任意数量的位置参数。来看这个例子，假设有一个包含许多元素的元组……

**39:12 - 39:30｜发言人 1**

**英文原文** right? we have5 one seven8, right a list, right, and then we have three and then we have three fighters, developer. Same super size, okay? What is the size of this tupper? Seven seven, okay? The size of this tupper is the this seven.  
**中文译文** 有五、一、一个列表、一个整数和几段字符串 [中间值转录不清]。这个元组有多大？七。外层大小是七。

**39:31 - 39:48｜发言人 1**

**英文原文** Right, so what happen is when we do the unpacking. Right, as I mentioned, if you have seven elements, you need to prepare seven drivers. Right? You need to prepare seven drivers when you do the unpacking.  
**中文译文** 做普通解包时，如果有七个元素，就要准备七个变量。

**39:49 - 39:59｜发言人 1**

**英文原文** Right? But. Let's say you don't want to have all the values inside the couple. Maybe for your task, you only need some of them.  
**中文译文** 但假设你用不到全部的值，你的任务只需要其中几个。

**40:00 - 40:23｜发言人 1**

**英文原文** But maybe you need three of them, but because you need to prepare seven variable, then it will be waste of memory. All right, so in Python what will happen is it allows you to create. Less variables compared to the number of elements inside the couple.  
**中文译文** 比如你只需要三个值，原先却要写七个变量。Python 允许你用比元素数量更少的接收变量。

**40:23 - 40:37｜发言人 1**

**英文原文** For example, this couple have seven elements right? And then you only want to take the first two elements right? And then you want to take the last element right? So what you can do is you can have.  
**中文译文** 比如元组里有七个元素，你只想要前两个和最后一个，可以这样写……

**40:38 - 40:59｜发言人 1**

**英文原文** the first variable, second variable, and then the last variable, and then in between you put it as s three rest. right? so what happen is if i print all of them, so you can see that top is this one. Okay，this is the whole card，right？And then.  
**中文译文** 写第一个变量、第二个变量、最后一个变量，中间用 `*rest`。把它们打印出来，先看到的是完整元组，然后……

**41:00 - 41:02｜发言人 2**

**英文原文** and i think.  
**中文译文** 然后我想……

**41:02 - 41:07｜发言人 1**

**英文原文** a which is the last element c plus plus here plus right and then.  
**中文译文** `a` 是最后一个元素，这里是 “C++”，然后……

**41:07 - 41:09｜发言人 2**

**英文原文** i think c.  
**中文译文** 我想是 `c`……

**41:09 - 41:12｜发言人 1**

**英文原文** right i think sorry i think the rest in the rest.  
**中文译文** 哦，剩下的在 `rest` 里。

**41:12 - 41:14｜发言人 2**

**英文原文** right and then i think c.  
**中文译文** 对，然后我想是 `c`……

**41:14 - 41:18｜发言人 1**

**英文原文** which is the first element five i think b.  
**中文译文** 它是第一个元素，五，然后 `b`……

**41:18 - 41:40｜发言人 2**

**英文原文** second element one so the easiest thing here will be put s. 一，对，对，对，不是所有的都是真的。  
**中文译文** 是第二个元素，一。所以最简单的办法就是用星号。[后有中文插话。]

**42:00 - 42:02｜发言人 2**

**中文原话** 代表就是通过他。

**42:02 - 42:05｜发言人 1**

**中文原话** 他代表所有，就是第。

**42:05 - 42:11｜发言人 2**

**英文原文** 的一个列表的第一个，第三位。This right here is.  
**中文译文** ……列表的第一个、第三位。这里这个是……[语句残缺。]

**42:11 - 42:27｜发言人 1**

**英文原文** sometimes something you want to describe. There is nothing special about the rest name. As a matter of convention, many Python programmers will use the underscore for unwanted variables. Okay, as I mentioned just now.  
**中文译文** 有时你想给这些值起个名字。`rest` 这个名字没什么特别。按习惯，许多 Python 程序员会用下划线给用不到的变量命名。

**42:28 - 42:45｜发言人 1**

**英文原文** you only interested in the first two variables right, and then the rest you know what okay we are not interested in right? So all the python programmer says that okay ethnic best is just meaning right? So instead you want to type.  
**中文译文** 比如你只关心头两个值，剩余的用不到。那么……

**42:46 - 42:59｜发言人 1**

**英文原文** So many things rest right? So why not we just put it as underscore right? So what happened is instead of putting escape rest, they just.  
**中文译文** 与其写 `rest`，也可以写成一个下划线。于是，把 `*rest` 写成……

**43:00 - 43:18｜发言人 1**

**英文原文** They agree to have asterisk underscore representing the unwanted values when you unpack the couple, right? 哎，你说的这个。So it's the same as the doctor.  
**中文译文** `*_`，通常用它表示解包后用不到的那些值。[随后有插话。]

**43:18 - 43:35｜发言人 1**

**英文原文** Why the quotation disappear? Why is the quotation disappear? The Python Java similarity process, yeah, the quotation. The quotation mark. The question is yeah, yeah, after after print it.  
**中文译文** 为什么引号消失了？为什么看不到引号？是问那些引号吗？对，就是打印出来以后。

**43:36 - 43:49｜发言人 1**

**英文原文** Ah, after printed the rest okay?  
**中文译文** 啊，是问打印剩余值以后吗？`rest` 收集了其他值。

**英文原文** Because when you printed the rest, actually the rest is the values that.  
**中文译文** [接下来举的是单独打印字符串的例子。

**英文原文** That's unwanted values, so we are recognizing it as the value.  
**中文译文** ]

**43:49 - 44:08｜发言人 1**

**英文原文** If you put like this, remember that I put C, I put B, and then I put A, right? Okay, so A is the last element here. C++，right？So when we print a，it will give us the exact values of the string.  
**中文译文** 还记得我写了 `c`、`b` 和 `a` 吗？`a` 是最后一个元素 “C++”。打印 `a`，得到的是字符串的内容。

**44:09 - 44:38｜发言人 1**

**英文原文** Yeah，because the quotation mark is just indicating that it is a string. The value itself is C++，so it was the same as this one. Right，so when we put S three underscore means that unwanted values，so it will recognize that the first list，right？And then this integer，and then these two variables or two strings are the unwanted one，so they are saving。  
**中文译文** 因为引号只是用来标明这是一个字符串，内容就是 C++。写 `*_` 时，这里中间的列表、整数和两个字符串会作为剩余元素被保存。

**44:39 - 44:57｜发言人 1**

**英文原文** value right sorry the profession mark is not the value it just indicating that they are skilled right so the value is python java right so that's why in here you cannot see the.  
**中文译文** 引号本身不是字符串的内容，它只是标明类型。

**英文原文** Hello, seriously right?  
**中文译文** 这里内容是 Python、Java。

**英文原文** They call passion mark.  
**中文译文** 单独打印字符串时，通常就看不到两边的引号。

**44:58 - 45:12｜发言人 1**

**英文原文** Alright, as I mentioned. There is nothing special with underscore, sorry, S three press or S three underscore. If you say that you want to put another name, S three, I don't want it.  
**中文译文** 好，`*rest` 和 `*_` 的变量名都没有特殊规定。如果想换个名字，也可以写星号加另一个合法的变量名。

**45:13 - 45:20｜发言人 1**

**英文原文** Okay，right？So you put S J，I don't want it，right？Okay，so you can also have this one。  
**中文译文** 对，可以用自己起的名字，也可以这样写。

**45:21 - 45:53｜发言人 1**

**英文原文** right nothing special with the name right the one that important is the s three sign okay and then after that s three sign it must be followed with underscore or any character right then indicating.  
**中文译文** 名字不重要，重要的是星号。

**英文原文** This is the unwanted value for unpacking, right?  
**中文译文** 星号后接下划线或别的变量名，用来接收剩余值。

**英文原文** 快点。And then we have couple methods.  
**中文译文** 接下来看元组的方法。

**45:54 - 46:18｜发言人 1**

**英文原文** Okay, what can we do with couple?  
**中文译文** 元组能做哪些事？

**英文原文** Right, since the size and.  
**中文译文** 因为长度和位置不能改，元组的方法比较少。

**英文原文** Contents of a couple cannot be modified, so it is very light by instance method, because you cannot do anything once you create a couple, you cannot add, you cannot remove, you cannot change anything inside it, right?  
**中文译文** 创建以后，不能给元组本身增加、删除或替换元素。

**英文原文** So a particularly useful one is.  
**中文译文** 其中一个常用的方法是……

**46:18 - 46:52｜发言人 1**

**英文原文** Count method，okay，which counts the number of occurrences of a value，right？Because it's a very big size，it is immutable，you cannot change anything，so there is nothing more that you can do，a part of just counting how many things inside it，for example。You call the part that the tuple is, and then you want to count how many value two inside the tuple, right?  
**中文译文** `count()`，用它数一个值出现了多少次。

**英文原文** So that's the thing that you can, you can do with tuple.  
**中文译文** 比如调用元组的 `count(2)`，就能知道值二在元组里出现了几次。

**46:53 - 47:11｜发言人 1**

**英文原文** Okay, any question with tuple? Here alright, so I give you rest before we go into this, so we can take like five to ten minute break, alright. 我想。  
**中文译文** 元组部分还有问题吗？接下去之前先休息一下，大概五到十分钟，好吗？[末尾有插话。]

### 47:20–50:27 · 课间讨论

**47:20 - 47:22｜发言人 1**

**中文原话** 他就相当于这里的业务。

**47:28 - 47:30｜发言人 1**

**中文原话** 这五个我知道就稍微把这个。

**47:30 - 47:38｜发言人 2**

**中文原话** 就是占一点啊就有点像占位符就是相当于给留一个空的留一个位置给大家。

**47:39 - 48:10｜发言人 1**

**中文原话** 他刚刚这个零幺二就是。行，我的意思刚才说的是这个，可能我类似于，因为这个表示就是你刚搜出来。第一个就是C的，然后这个二相当于是他取的这个索引，索引值是在这里面是。第二个二二个你看你这个它是这个我刚想问这个我先理解我刚不是问你所以吗就是那个方法我刚为所以其实这里也是有所以的一个。

**48:11 - 48:13｜发言人 2**

**中文原话** 有吗？你把它删掉，放回去。

**48:15 - 48:16｜发言人 1**

**中文原话** 就比如说。

**48:16 - 48:21｜发言人 2**

**中文原话** 对没变啊。

**48:21 - 48:26｜发言人 1**

**中文原话** 那就那这个就是这样那我现在就搞懂了那他这个就不用损了它就是一个。

**48:26 - 48:27｜发言人 2**

**中文原话** 价。

**48:27 - 48:30｜发言人 1**

**中文原话** 对我刚刚就那个为什么要靠那个零件那我。

**48:30 - 48:48｜发言人 2**

**中文原话** 他他只是为了方便让你搞懂就是第一个位置第一个位置第三个位置如果写上也不影响不写的话就是也也不影响写上写上会更更直观一点对就是意思就是第一个位置第二个位置第三个位置对。哪怕你写一二三他也是出来。

**48:48 - 48:50｜发言人 1**

**中文原话** 一样的里面写反正里面他就是。

**48:50 - 48:51｜发言人 2**

**中文原话** 写对对。

**48:51 - 48:52｜发言人 1**

**中文原话** 对就标准里面。

**48:52 - 48:53｜发言人 2**

**中文原话** 的内容对对对。

**48:53 - 48:55｜发言人 1**

**中文原话** 那我们现在就。

**48:55 - 49:01｜发言人 2**

**中文原话** 他主他主要是根据他的这个第一个出现位置第二个出现第三个出现位置跟。后边的一一对应。

**49:01 - 49:12｜发言人 1**

**中文原话** 对对对我刚我刚刚以为他是，所以我就说那如果是所以的，为什么就不用方括号呢？就不变它不是零一二吗？啊，就是他们对应的位置，他们对应的位置的话就是用方括号那个。

**49:12 - 49:39｜发言人 2**

**中文原话** 嗯，我知道你的意思，谢谢谢谢。那我这你这是现在在跟哪，我咋又找不着了？太难找了啥呀你说一零一三那个作业。那上面不是有个截止吗？有个截止时间，第五周的，第五周的对，第五周他不有个截止到十五号嘛，哎，到十一月十五号嘛，我再看都没了呀。

**49:42 - 50:11｜发言人 2**

**中文原话** 然后下边最最下面他有一个讨论，这里这里看到没？十一月十五周日，让提交一个思维导图吧，好像在哪在哪讨论。小组小组就讨论啥这些内容你。你看一眼咱分组了吗？那个之前有一次PPT跟你说几十页，大家一人一组那种，对对，但是他这次没说，就先按那个来呗。

**50:25 - 50:27｜发言人 2**

**中文原话** 不愧像杨不愧是。

### 50:27–1:04:59 · 列表、赋值和 range

**50:27 - 50:38｜发言人 1**

**英文原文** 杨哥不是因为我那天意识到了我老是坐着我髋关节有点不舒服。right so these are much more powerful.  
**中文译文** 杨哥，不是，因为我那天意识到了，我老是坐着，髋关节有点不舒服。｜好，列表能容纳的内容比字符串丰富得多。

**50:38 - 50:41｜发言人 2**

**英文原文** than strings so when.  
**中文译文** 我说比字符串丰富，是因为……

**50:41 - 50:44｜发言人 1**

**英文原文** i say for the string all of the elements.  
**中文译文** 在字符串里，所有元素……

**50:44 - 50:46｜发言人 2**

**英文原文** have to be characters.  
**中文译文** 都是字符。

**50:46 - 51:05｜发言人 1**

**英文原文** in a list elements can be anything you want right so they could be characters they could.  
**中文译文** 在列表里，元素可以是各种东西。

**英文原文** There could be strings, there could be numbers, there could also be other lists, right?  
**中文译文** 可以是字符、字符串、数字，也可以是另一个列表。

**英文原文** So like a string, a list is a sequence of values.  
**中文译文** 跟字符串一样，列表也是一串有顺序的值。

**51:06 - 51:19｜发言人 1**

**英文原文** In a string, the values are characters. In a list, they can be any type. So for example, if you have string, so inside the string is a character, right?  
**中文译文** 字符串里的值是字符，列表里的值可以是各种类型。比如一个字符串，里面就是一个个字符。

**51:19 - 51:35｜发言人 1**

**英文原文** Right, for list, in the list you can have integer, you can have floor you can have a list, you can have puff, you can have vital python and many more things inside one list.  
**中文译文** 列表可以装整数、浮点数、另一个列表，也可以装元组或字符串等。

**英文原文** right?  
**中文译文** 同一份列表里可以放很多种东西。

**英文原文** so the values in list are called elements or sometimes item.  
**中文译文** 这些值叫元素，有时也叫项。

**51:36 - 51:51｜发言人 1**

**英文原文** so some books refer as item, some books will refer as elements.  
**中文译文** 有些书写 item，有些书写 element。

**英文原文** These elements are written within square brackets, so I've already put there.  
**中文译文** 这些元素写在方括号里，我已经写出来了。

**英文原文** So that point we have that bracket, and then the list you will have square brackets.  
**中文译文** 刚才的元组是圆括号，列表用方括号。

**51:51 - 52:45｜发言人 1**

**英文原文** So that's the difference between those two square brackets access data with the first elements and index zero.  
**中文译文** 这就是两种括号写法的区别。

**英文原文** Same as purple, it will be index passing for zero.  
**中文译文** 要访问元素时用方括号，第一个元素的索引为零，跟元组一样。

**英文原文** Many of the operations defined above four strings also apply to list so it can be convenient to think of a string simply as a list of characters.  
**中文译文** 很多对字符串的操作也适用于列表，所以有时可以把字符串想成一排字符。

**英文原文** In contrast with couples, these are arrival length.  
**中文译文** 与元组相比，列表的长度可以变。

**英文原文** It's not a big size length like couple, get couple when you buy, when you make size three there is more ingredients but size for this it can be rival length you can start with three and then you can add some more items.  
**中文译文** 元组创建时有三个位置，就保持三个，而列表可以从三个开始，再往里添加。

**52:45 - 53:18｜发言人 1**

**英文原文** Okay，let's say you add another five，you will have length eight，right？Maybe you want to remove three item，and then you have size five，length five，so it is variable length。Right，and their contents can be modified in place。So again，I stress that in place means when you modify in place，you did not keep the previous value，it will be overwritten，right？  
**中文译文** 比如再加五个，长度就变成八。想移除三个，就变成五。它的长度可以变，内容也可以原地修改。再强调一下，原地修改指直接改原来的对象，那个位置原有的值会被覆盖。

**53:19 - 53:37｜发言人 1**

**英文原文** Okay，difference between array and list，right？So what is the difference between array and list？Array and list are both used in Python to store data，but they don't serve exactly the same purposes.  
**中文译文** 接下来讲数组和列表的区别。数组和列表都用来存数据，不过它们的用途有所不同。

**53:38 - 53:59｜发言人 1**

**英文原文** Right, they both can be used to store any data type, and they both can be indexed and iterated through. But the similarities between the two don't go much further. So that's this, that are the similarities. Right, so the main difference between a.  
**中文译文** 两者都能存数据，也都可以按索引访问和遍历。相同点大概就这些。接下来讲主要区别……

**54:00 - 54:18｜发言人 1**

**英文原文** And array is the functions that you can perform to them, right?  
**中文译文** 区别在于能对它们执行哪些操作。

**英文原文** They are function that you can perform to this, but you cannot perform it on array, right?  
**中文译文** 某些操作可以对其中一种做。

**英文原文** So for example, you can divide an array.  
**中文译文** 比如，对数组做除法……

**54:18 - 54:38｜发言人 1**

**英文原文** By three，and each number in the array will be divided by three，and the results will be printed if you request it，right？So if you have a ring，but they say you have three mistakes tonight，so that's the value inside the ring。Right, we talking about array.  
**中文译文** 除以三，数组里的每个数字都会除以三，需要的话可以打印结果。比如数组里的值是三、六、九。我们这里说的是数组。

**54:38 - 54:46｜发言人 1**

**英文原文** So we want to say that okay, this array divide by three. So three divide by three, six divide by three, nine divide by three. So you get the answer.  
**中文译文** 整个数组除以三，就是三除以三、六除以三、九除以三，得到结果。

**54:46 - 55:10｜发言人 1**

**英文原文** Right, that's for array.  
**中文译文** 这是数组的情况。

**英文原文** But if you try to divide a list by three, Python will give you.  
**中文译文** 如果试着把普通列表直接除以三，Python 会报错。

**英文原文** And error, actually cannot be efficiently.  
**中文译文** 接下来，怎么创建列表？

**英文原文** Okay，how do you want to create list？So same as whatever you have learned with couple，right？  
**中文译文** 这跟刚才学元组时有点像。

**55:10 - 55:34｜发言人 1**

**英文原文** So if you want to create list like this，then you can put the sequence and then inside the bracket，right？And then in list will become。A list right?  
**中文译文** 你可以把一串值写进方括号，得到列表。

**英文原文** So this one we have this bracket, so it will become a tuple right?  
**中文译文** 这个用圆括号写的是元组。

**英文原文** And then you can also convert this tuple to a list by.  
**中文译文** 你也可以把元组转换成列表，方法是……

**55:35 - 55:59｜发言人 1**

**英文原文** 谢谢谢谢，拜拜。Right, so if you want to convert a tuple into a list, then you just invoke the keyword list, same as what we did with tuple, right? Okay，so you can see now，I mean who David，which is a couple with that bracket。  
**中文译文** 谢谢谢谢，拜拜。｜要把元组转成列表，调用 `list()`，就像刚才调用 `tuple()` 一样。现在可以看到，原来的元组用圆括号显示。

**56:00 - 56:10｜发言人 1**

**英文原文** Can you call and convert into a list? You can see that they are inside the square bracket. Right? Okay, they say I call this year.  
**中文译文** 把它转成列表，结果就放在方括号里。好，假设我查看这里的变量……

**56:11 - 56:11｜发言人 2**

**英文原文** Right.  
**中文译文** 对。

**56:11 - 56:43｜发言人 1**

**英文原文** and then I call uh top. So that's different. This one has been converted into. So this is the original one. Right so you can always modify the list okay for example okay so let's say we have couple okay top is a tupper right we know it is a tupper if we want to modify for example we say top zero which is right.  
**中文译文** 然后再查看 `tup`。两者不一样，这是转换后的结果，那个是原来的。列表可以修改。比如 `tup` 是一个元组，如果要修改它索引零的位置……

**56:43 - 57:18｜发言人 1**

**英文原文** I want to change it into aminah right so when i run it it will throw an error because the nature of a couple once created cannot change anymore right but for least. Right so for list okay here b list okay it is a list okay i say that okay the name two over here in the middle I want to change it as amira right I want to change it as aira. so there is no problem because.  
**中文译文** 我想把它换成一个名字，运行时会报错，因为元组创建后不能换掉元素。不过这里的变量是列表，如果我想换掉中间那个名字，就没有问题。

**57:18 - 57:45｜发言人 1**

**英文原文** At least can be changeable.  
**中文译文** 因为列表可以修改。

**英文原文** Alright，assignment with an equal on this does not make a copy，instead assignment makes the two variables point to the one，the two。To the one list in memory, so what happened is...  
**中文译文** 用等号赋值不会复制列表，它会让两个变量都指向内存里的同一个列表。

**英文原文** So let's say this is your memory.  
**中文译文** 现在想象一下这里是内存。

**57:46 - 58:23｜发言人 1**

**英文原文** Okay，Imagine that this is your memory，right？Okay，and then I have at least one，two，three。one two three five six.  
**中文译文** 比如我有列表一、二、三、五、六，再写 `B = A = [1, 2, 3, 5, 6]`。

**英文原文** Right，and then I put it B equal to A equal to the list。Right，so what happened is，so what happened is，I'm creating two variables，B and A，and both variables are pointing to the same location。  
**中文译文** 这样就创建了两个变量，两个名字都指向同一个列表。

**58:24 - 58:46｜发言人 1**

**英文原文** right in the same location right because i put b equal to a equal to one two three five six right so now what i'm going to do is i say okay go to the a and then append zero so what happen is. I'm going to use this. Right.  
**中文译文** 因为我写的是连等赋值，两个变量指向的是同一个地方。现在我通过 `A` 调用 `.append(0)`。会发生什么？我会操作这个列表……

**58:51 - 58:59｜发言人 1**

**英文原文** Okay，and then I add zero at the end。Okay，I add zero at the end。Right，okay，I go to a.  
**中文译文** 然后在末尾加一个零。我在列表末尾加零。好，再回到 `A`。

**59:00 - 59:15｜发言人 1**

**英文原文** Okay，so A pointing to this，I append0 at the end of the list，right？Stop。AND THEN I'M GOING BACK TO A, RIGHT?  
**中文译文** `A` 指向这个列表，我在末尾追加了零。

**英文原文** I'M GOING BACK TO A.  
**中文译文** 现在再看 `A`。

**59:15 - 59:38｜发言人 1**

**英文原文** Right，and then I put it as four five，OK，now。My question, are we going to put four five for example over here? Okay，or we are going to override this one，two，four，five，tell me which one。  
**中文译文** 然后我把一个变量赋值成四、五。问题是，四、五会放在另一个地方，还是会覆盖刚才的列表？你们选哪个？

**59:38 - 59:55｜发言人 1**

**英文原文** Don't run it, don't run it. It pointing to the new place or it will override the old value. New list, how many of you say pointing to the new list? New location.  
**中文译文** 先别运行。它会指向新地方，还是覆盖旧的值？觉得会指向新列表、新位置的有多少人？

**59:55 - 59:56｜发言人 2**

**英文原文** Raise your hand.  
**中文译文** 举一下手。

**01:00:11 - 01:00:50｜发言人 1**

**英文原文** 现在他他这个输入是。Right, you don't know where to stand. ごはんたっぷりひなけです。But it was finding. To other location, so what happened is when we put B equal to four five, so it will have a new list and new location, and A instead of pointing to here. All right, it will be pointing to the new location of the.  
**中文译文** [开头夹杂旁白，部分不清。] 它会指向另一个地方。把变量赋值成列表四、五，就有一个新列表和新位置。被重新赋值的那个变量会指向新列表。[这里转录在 A、B 两个名字之间不一致。]

**01:00:51 - 01:01:17｜发言人 1**

**英文原文** 来，随便挑一个。Okay，these and couples are semantically similar，though couple cannot be modified，and can be used interchangeably in many functions，so the list function is frequently used。In data processing as a way to materialize an iterator or generator expression.  
**中文译文** 来，随便挑一个。｜列表和元组用起来有些相似，不过元组不能修改。许多函数两种都能用。数据处理中常用 `list()` 把迭代器或生成器表达式给出的值实际收集起来。

**01:01:17 - 01:01:44｜发言人 1**

**英文原文** Okay, I want to explain about materialize an iterator or generator. Right? Okay, so let's say we have. Alright，so we have a keyword which，right，so we have a keyword which，and then we specify value set，right，so what happen is we are telling Python to create。  
**中文译文** 我解释一下“把迭代器或生成器的值收集起来”是什么意思。比如这里用到 `range()`，指定一个范围，等于告诉 Python 产生……

**01:01:45 - 01:01:59｜发言人 1**

**英文原文** 三呢。Starting from zero, right? So zero one two three up to nine, right? And then if you check for the type of gel, right? So the type.  
**中文译文** 从零开始的数，零、一、二、三，一直到九。然后查这个变量的类型，类型是……

**01:02:00 - 01:02:14｜发言人 1**

**英文原文** Is range, right?  
**中文译文** `range`。

**英文原文** And then if you want to bring gel, it will bring zero ten.  
**中文译文** 直接显示这个变量，看到的是类似 `range(0, 10)`。

**英文原文** So means that it start from zero, it will end at ten, but ten is exclusive.  
**中文译文** 从零开始，到十为止，但十排除在外。

**01:02:15 - 01:02:30｜发言人 1**

**英文原文** So he said zero one two three up to nine right so ten he said ten ten ten babies. THIS IS NOT WHAT YOU WANT. YOU WANT TO HAVE THE VALUE ZERO, ONE, TWO, THREE, RIGHT? OKAY!  
**中文译文** 所以是零、一、二、三，一直到九。可我们想看到的是这些数字本身。

**01:02:30 - 01:02:51｜发言人 1**

**英文原文** SO THIS IS WHAT WE CALL...  
**中文译文** 这里老师把它叫作“生成器”，因为它能依次提供值。

**英文原文** THIS IS A GENERATOR BECAUSE WE GENERATE VALUES.  
**中文译文** 直接看这个对象时，不会把零到九一个个列出来，只看到范围的表示。

**英文原文** It cannot be materialized.  
**中文译文** [术语见后面的讲解。

**英文原文** It means that you cannot see the number zero one two three four five six seven until nine, you can only see okay zero seven, so you cannot materialize the number right?  
**中文译文** ]

**01:02:51 - 01:03:07｜发言人 1**

**英文原文** So this is where this will help you. So what happened is right, so you can convert this gen. into a list right, and then you can save it into whatever drive of you want right?  
**中文译文** 这时 `list()` 就派上用场了。把这个对象转成列表，再保存到你想用的变量里。

**01:03:07 - 01:03:19｜发言人 1**

**英文原文** So you can see that now it will give you. It will materialize the generator from zero until nine. Now you can see the whole number.  
**中文译文** 现在你能看到，从零到九的值全都收集出来了，可以看到每个数字。

**01:03:19 - 01:03:29｜发言人 1**

**英文原文** Right? So this is what we say materialize. Okay, this is what the statement says materialize and iterator or generator.  
**中文译文** 这就是这里所说的“物化”，也就是把迭代时产生的值实际收集起来。

**01:03:29 - 01:03:42｜发言人 1**

**英文原文** So I can here eventually. Right, so you can materialize. So you can use this right to materialize, so that you can see the phone number over here.  
**中文译文** 对，可以用这种方法把值收集出来，这里就看得到所有数字。

**01:03:43 - 01:04:04｜发言人 1**

**英文原文** 喂。Okay，so this one is just how you access the values inside the list by index，right？The same effort is. Right, so let's say you have this one. I mentioned that this can be.  
**中文译文** 喂。｜好，这里演示如何通过索引访问列表里的值。做法和前面一样。刚才说过，列表可以放……

**01:04:05 - 01:04:28｜发言人 1**

**英文原文** Any data type，you can have integers，you can have string，they will just have flow，right？And then you can call length，length means that what is the length of your list，what is the size of your list，so it will tells you how many items inside your list。So that is that, that that.  
**中文译文** 各种类型的数据。可以有整数、字符串和浮点数。还可以调用 `len()`。它会告诉你列表多长，也就是有多少个元素。

**01:04:31 - 01:04:43｜发言人 1**

**英文原文** Alright，and then you can also clear empty this empty this means。This which has no value, alright? So C equal to.  
**中文译文** 也可以创建空列表。空列表就是没有任何元素的列表。比如 `c` 等于……

**01:04:44 - 01:04:59｜发言人 1**

**英文原文** ONLY THE SQUARE BRACKET, SO WE KNOW THAT THE LINE OF C IS ZERO. IT IS AN EMPTY LIKE EMPTY LIST, RIGHT? Okay，now we can do adding and removing animals in it。  
**中文译文** 只有一对方括号 `[]`，所以 `c` 的长度是零，它是空列表。接下来讲怎样添加和移除元素。

### 1:05:00–1:27:15 · 列表的增删和拼接

**01:05:00 - 01:05:10｜发言人 1**

**英文原文** Okay，as I mentioned，we can change the link，right？So we can do the editing，and then we can also remove，right？So we have several methods，right？  
**中文译文** 就像刚才说的，长度可以变。我们可以编辑，也可以移除元素。有几种方法。

**01:05:10 - 01:05:18｜发言人 1**

**英文原文** The first one is a pen，right？A pen，okay？So I think that you recognize that，right？  
**中文译文** 第一个是 `append()`。你们应该见过了，对吧？

**01:05:43 - 01:05:57｜发言人 1**

**英文原文** Okay，alright，so this is characters，movie characters from the movie，alright，um。哎，这个不行，一般在。  
**中文译文** 好，这些是某部电影里的角色。[后有中文插话。]

**01:06:15 - 01:06:20｜发言人 2**

**中文原话** 这上面的这上面列表就是角色一个电影的角色名看过没？

**01:06:21 - 01:06:57｜发言人 1**

**英文原文** Alright, let we have right okay so what happened is when I use a pen okay, and then I specify whatever I want to a pen what happened is it will add that value or that item. To the end of the list, right? And then I do again, got a pen, go on here to the end of the list. So then you can see, I...  
**中文译文** 当我调用 `append()`，给出要添加的值，它就会把这个值或元素放到列表末尾。我再调用一次，也会加到末尾。于是你能看到……

**01:06:58 - 01:06:59｜发言人 2**

**英文原文** I have 加进来。  
**中文译文** 我已经加进来了。

**01:07:00 - 01:07:10｜发言人 1**

**英文原文** Sam and Boronia to the end of the list, so that is done. Perfect! And then I can use dot insert.  
**中文译文** 把 Sam 和另一个角色 [名字转录不清] 加到了列表末尾。好了，然后可以用 `insert()`。

**01:07:11 - 01:07:27｜发言人 1**

**英文原文** Can I use insert? Using insert, you can insert an element at a specific location in the list. So the insertion index must be between zero and the length of the inclusive, okay? So.  
**中文译文** `insert()` 可以把一个元素插到列表指定位置。课堂这里用的是零到列表长度之间的位置，两端也包括在内。

**01:07:28 - 01:07:43｜发言人 1**

**英文原文** If you want, if you don't know what is insert, you can call your brother and then put the insert, and then put a question mark. It will give you the headphone right? It will give you the headphone right?  
**中文译文** 如果不清楚 `insert` 的用法，可以在课堂用的交互环境里，在相应方法名后面加问号，就会显示帮助。

**01:07:43 - 01:07:59｜发言人 1**

**英文原文** So what I'm going to do is I'm going to call your insert.  
**中文译文** 我要调用 `insert()`。

**英文原文** Right, so by calling what insert you can specify where do you want to put the new item.  
**中文译文** 用它可以指定新元素放在哪个位置。

**英文原文** If we put that a pen, that a pen means that.  
**中文译文** 如果用 `append()`，意思就是……

**01:08:00 - 01:08:22｜发言人 1**

**英文原文** Put the item, the new item at the end of the list, right? But not insert, you can put at any index that you want, right? For example, I said that, okay, I want to have, okay, let's say. Okay，I have my teammates over here。  
**中文译文** 把新元素放到列表末尾。`insert()` 可以在指定索引处插入。比如这里，我有几个同学。

**01:08:28 - 01:08:38｜发言人 1**

**英文原文** Alright, so this is if I put series, it will be like that. I don't want it to be like that. I put three, okay? Then it will go like this.  
**中文译文** 好，如果这里这样写，结果就是这样。我想换个位置，放三，结果就会变成这样。[画面指代。]

**01:08:39 - 01:08:49｜发言人 1**

**英文原文** Alright, okay, so this is my initial series, right? And then I said that okay, I call series. Please got insert one element.  
**中文译文** 这是我一开始的列表。然后我调用它的 `insert()`，在索引一插一个元素。

**01:08:49 - 01:09:17｜发言人 1**

**英文原文** Alright, so means that I want to put new value at index one. So what happen is, alright, we will put element over here. And then from beginning until the end we shift one location, right? Okay, and then if I say insert random at index3, right? So0,1,0.  
**中文译文** 就是在索引一放入新值，原来占这个位置的元素和后面的元素都往后移一格。再比如在索引三插入另一个值。从零开始数……

**01:09:18 - 01:09:19｜发言人 2**

**中文原话** 一、零……[报数不清。]

**01:09:20 - 01:09:43｜发言人 1**

**英文原文** 3.  
**中文译文** 三。

**英文原文** Shift some element and again alright okay so we put them down there alright okay insert is computationally expensive compared this of ten because by traverses two subsequent elements have to be shifted.  
**中文译文** 后面的一些元素再挪一下，给新值让位。

**英文原文** Then I need to make room for the new element.  
**中文译文** 跟 `append()` 相比，`insert()` 往往要做更多计算，因为它得移动插入位置之后的元素。

**01:09:43 - 01:09:57｜发言人 1**

**英文原文** Okay. So what does it mean by this statement? Right, when I say insert is computationally expensive, it's not because of the money, it's because of the task, the effort that we need to spend.  
**中文译文** 这里说“开销大”是什么意思？说的不是钱，而是为了完成这件事要花多少功夫。

**01:09:57 - 01:10:10｜发言人 1**

**英文原文** Okay, for example, if I say, okay. All of you line up, they make one straight line right? And then I say okay, you right? I want to put that dot.  
**中文译文** 比如我让你们都站成一排。然后我说，你，我要把你……

**01:10:10 - 01:10:19｜发言人 1**

**英文原文** Compare what is your name? What is your name? Pink way. I say dot a family way. So what happened is.  
**中文译文** 你叫什么名字？[名字转录不清。] 假设我用 `append()` 把你加进队伍，会怎样？

**01:10:20 - 01:10:32｜发言人 1**

**英文原文** Anyway will be at the end of the line, right? So if I said that got a pair anyway three, right? So after the second person, right?  
**中文译文** 就站在队伍末尾。如果说要插到某个位置，比如第二个人后面呢？

**01:10:32 - 01:10:42｜发言人 1**

**英文原文** So anyway will go to here say, shoot, go there. I'm going to stand here, so. Everybody needs to move one step.  
**中文译文** 那就要走到那个位置，说你们往后挪，我要站这里。后面的人都要挪一步。

**01:10:42 - 01:10:57｜发言人 1**

**英文原文** So this is what we say computationally expensive, but it takes a lot of effort. Okay, especially if you want to do it at the beginning of your list, right? Okay, now if you.  
**中文译文** 这就叫计算开销较大，尤其是往列表最前面插的时候。接下来，如果你……

**01:10:58 - 01:11:12｜发言人 1**

**英文原文** INSERT ANIMALS AND. The beginning and end of a sequence, you may wish to explore collections that did you get a double and then queue for this purpose. So this one is not.  
**中文译文** 经常需要在序列的两头插入元素，可以了解 `collections.deque`，也就是双端队列。这个没有写在……

**01:11:12 - 01:11:27｜发言人 2**

**英文原文** in our speaker's right? Okay, so I put it here. We have two things just now. 懂懂。  
**中文译文** 我们的课堂材料里，所以我放在这儿补充。刚才我们讲了两种。

**01:11:29 - 01:11:59｜发言人 1**

**英文原文** So WE HAVE DOT AND WE HAVE DOT个是指定问题。Right，okay，the inverse operation to insert is pop，right，which removes and returns an element at a particular index。Okay，for example，this is our list just now。  
**中文译文** 刚才说了两种添加方式。和插入相对的操作是 `pop()`，它会按索引移除并返回一个元素。比如看刚才这个列表。

**01:12:00 - 01:12:28｜发言人 1**

**英文原文** Right，when I said see this got pop five，so what happens it will go to the item five，zero one two three four five，is this a，it is photo，right，so you can see that it will give the output。Item that going to be removed, right? The output is the item that going to be removed.  
**中文译文** 调用列表的 `pop(5)`，会到索引五。从零数到五，取到这里的角色 [名字转录不清]。它显示的结果就是那个被移除的元素。

**01:12:28 - 01:12:58｜发言人 1**

**英文原文** So if you want to look back at your original, the actual list, you need to call your list, and then you can see that your word. Right，okay，that is dot four，okay，and then we have the deal operator that does the division，right？In the simple case，it can remove the definition of a variable as.  
**中文译文** 想看移除之后的列表，要再查看列表变量本身。这是 `pop()`。然后有 `del` 语句，简单情况下可以删除一个变量名的绑定……

**01:12:59 - 01:13:20｜发言人 1**

**英文原文** 哎，过来坐。Not been defined, so deal can also be used on these elements or slice to delete that part of the list. Okay, for example, right? This is our... um... our latest list, right? And then I said deal.  
**中文译文** 之后再用这个名字，可能会显示未定义。`del` 也可以用来删除列表的单个元素或一个切片。比如这是最新的列表，我写 `del`……

**01:13:20 - 01:13:39｜发言人 1**

**英文原文** LIST THAT I WANT TO DELETE, RIGHT? AND THEN I CALL MY LIST, AND THEN I TAKE THE INDEX, RIGHT? SO I WANT TO REMOVE THE BONUS, RIGHT? AND THEN YOU CAN SEE WE HAVE THE REST, RIGHT? AND THEN I CAN DO ANOTHER DECISION.  
**中文译文** 然后写列表名和要删除的索引。这里想删掉这个角色 [名字转录不清]，再查看就只剩其他值。还可以再做一次删除。

**01:13:39 - 01:13:59｜发言人 1**

**英文原文** OKAY, I CALL BILL. Alright，and then I have the index，let's see two until the end，okay？Which part that I'm going to remove？the last two one last two one last.  
**中文译文** 写 `del`，然后写切片，从倒数第二个到结尾。我们会删掉哪一段？最后两个。

**01:14:00 - 01:14:17｜发言人 1**

**英文原文** Two, who, who are they? Aquatic, they are Sam and Bob. So we have Sam and Bob. So you can see that we will stop at England, right? So that is for Bill.  
**中文译文** 最后两个是谁？是 Sam 和另一个角色 [名字转录不清]。删完会在前一个角色处结束。这就是 `del` 的用法。

**01:14:18 - 01:14:54｜发言人 1**

**英文原文** AllAlright, elements can be removed by value with remove right which loc the first such value and remove it from the list. okay for example, they say I have list right okay, and then I said see list got remove really. Right, I have gimli, I have another gimli over here. Right? So when we put remove the first gimli that it found, it will delete it and then stop.  
**中文译文** 也可以用 `remove()` 按值移除。它找到第一个匹配的值，把它从列表里移除。比如列表里有两个 Gimli，调用 `.remove('Gimli')`，找到第一个就删掉，然后停止。

**01:14:55 - 01:15:35｜发言人 1**

**英文原文** Okay, it won't search for any gimli, right? So you can see that the first green leaf over here has been removed, okay? The second one still there, right? Okay，if performance is not a concern，by using a pen and remove，we can use a python list as a perfectly suitable multi set data structure，right？So if you want to check whether the item is. In your list or not, you can use it right? So for example, I put someone in series, so I want to.  
**中文译文** 它不会继续找。第一个 Gimli 被移除了，第二个还在。性能要求不高时，用 `append()` 和 `remove()`，列表就能存一批允许重复的值。想知道某个值是否在列表里，可以用 `in`。比如写某个值 `in` 这个列表……

**01:15:35 - 01:15:36｜发言人 2**

**英文原文** check whether I have someone.  
**中文译文** 我就是要查有没有这个值……

**01:15:36 - 01:15:38｜发言人 1**

**英文原文** in my list or not, right?  
**中文译文** 在我的列表里，对吧？

**01:15:38 - 01:15:40｜发言人 2**

**英文原文** So if it is there.  
**中文译文** 如果它在里面……

**01:15:40 - 01:15:58｜发言人 1**

**英文原文** it will give you true, if not, it will give you false, right? doctor，if we want remove both，give me how can we do that？Repeat, you will want remove all the in the last how you want to do that.  
**中文译文** 就得到 `True`，否则得到 `False`。｜老师，如果两个 Gimli 都想删掉怎么办？｜你是问怎样删掉列表里所有这个值？

**01:15:58 - 01:16:11｜发言人 1**

**英文原文** Ok, if you want to remove. All the game in their list, how much to do that? Poly, you will use poly, only poly, poly.  
**中文译文** 好，要把列表中所有 Gimli 删掉，怎么做？[此处方法名转录不清，下文讲逐个检查。]

**01:16:12 - 01:16:19｜发言人 1**

**英文原文** Why? Because when you use poly, right? When you use poly, it will start from the first.  
**中文译文** 为什么？因为用循环时，它会从第一个……

**01:16:19 - 01:16:34｜发言人 1**

**英文原文** Character first value, it will check whether this is same as D or not, right? And then it will move until the end. So whenever you find D, then you can get moving.  
**中文译文** 值开始，检查这个值是否等于目标，再继续往后。每当找到目标，就处理它。

**01:16:34 - 01:16:55｜发言人 1**

**英文原文** So of course you will need to do the operation for whatever. Okay，in whatever this right，and then you need to check first whether that pointing is to a string you leave right？If that is true，then you will remove it right？  
**中文译文** 你需要先判断当前值是不是字符串 “Gimli”。如果是，就把它移除。[具体安全写法见后面的讲解。]

**01:16:56 - 01:17:17｜发言人 1**

**英文原文** Okay，all right，so now we have three things。Okay，we have the pop，and we have the，we don't have the beer，we only have beer，right？And then we have the remote。  
**中文译文** 好，现在有三种删除方式。`pop()`、`del`，还有 `remove()`。

**01:17:19 - 01:17:28｜发言人 1**

**英文原文** Okay，right？So we have three things. They agreed the same thing.  
**中文译文** 好，一共三种，做的都是同一类事。

**01:17:28 - 01:17:46｜发言人 1**

**英文原文** Removing item，so what is the difference？What is the difference between those two? Look back at the previous lecture notes, and then try to think what is the difference between those two.  
**中文译文** 都是删元素。它们有什么区别？看看前面的讲义，想一下区别在哪。

**01:17:47 - 01:17:55｜发言人 1**

**英文原文** Okay, their main task is to remove the item, right?  
**中文译文** 主要任务都是移除元素。

**英文原文** But how they work, right?  
**中文译文** 可它们怎么运作？

**英文原文** So when you're talking about drop box.  
**中文译文** 先看 `pop()`……

**01:18:18 - 01:18:33｜发言人 1**

**英文原文** We take this value out. So the output is the item that you want to, and the remove item. Right? It will tells you what is the remove item.  
**中文译文** 把这个值拿出来。它返回的就是被移除的元素，会告诉你拿走了什么。

**01:18:33 - 01:18:48｜发言人 1**

**英文原文** For example, when we put celery support part. So the output is module, so it will tell you that we are going, we have removed modules, right? Okay, so that's the output, right?  
**中文译文** 比如对角色列表调用 `pop()`，显示出来的是被移除的那个角色。[示例中的索引和角色名转录不清。]

**01:18:48 - 01:19:03｜发言人 1**

**英文原文** So I do, okay, and then this one is you can only remove. One item. One item at a time, right?  
**中文译文** 好，而且这种方法一次只移除一个元素。

**01:19:03 - 01:19:10｜发言人 1**

**英文原文** You cannot remove so many items. So, deal. What happened with you?  
**中文译文** 一次不能移除很多元素。那 `del` 呢？

**01:19:27 - 01:19:43｜发言人 1**

**英文原文** Alright，and then the output will be the new list。Alright，so the output will be a new list。Alright，but the thing is you can remove more than one item。  
**中文译文** [这里说的是执行后查看的列表。] 删除之后，可以查看改过的列表。它还可以一次删掉不止一个元素。

**01:19:44 - 01:19:55｜发言人 1**

**英文原文** Alright，you can do slicing。Remember we do negative two until the end, so you can remove more than one item, right? So you remove.  
**中文译文** 可以用切片。记得刚才从负二到末尾吗？这样就可以一次删除多个元素。

**01:19:57 - 01:20:02｜发言人 2**

**英文原文** More than one item.  
**中文译文** 可以删掉不止一个。

**英文原文** Okay, come on!  
**中文译文** 好，继续。

**01:20:29 - 01:20:57｜发言人 1**

**英文原文** Give value, give value right?  
**中文译文** 这里给的是你想删的值，前面的操作用位置，这里给想删除的那个元素。

**英文原文** For the first two part and then you give index right here.  
**中文译文** 它一次能删几个？

**英文原文** Right here you give give items that you want to remove right yeah and it can only remove how many items one one item only.  
**中文译文** 一个。

**01:20:58 - 01:21:29｜发言人 1**

**英文原文** Alright, so if you want to. All the items, maybe you can have the quality, right? Okay, if we have, for example, let's say I have a lot of gym, okay, I only want to remove three. We have four look and then. 嗯，schedule the time。  
**中文译文** 如果想删掉所有匹配项，可以用循环。如果有很多 Gimli，我只想删三个，就可以用循环，然后……

**01:21:41 - 01:21:48｜发言人 1**

**英文原文** Come to my counter, right? If the counter hit three, right? Then break, break.  
**中文译文** 用一个计数器。计数到三，就用 `break` 跳出循环。

**01:21:49 - 01:21:58｜发言人 1**

**英文原文** Come to my customer. See you tomorrow. All right. I can get it. All right, um.  
**中文译文** [前半句转录不清。] 明天见。好，我明白了，嗯。

**01:22:01 - 01:22:28｜发言人 1**

**英文原文** Okay，and then we have concatenating and combining，okay，before that，alright，so I want just to complete that，so that a pen is uh an item at the end。Okay，and that is only one item。Okay, inside.  
**中文译文** 接下来是拼接和合并。之前先补一句，`append()` 把一个元素放在末尾，一次只加一个。接着说 `insert()`。

**01:22:31 - 01:22:59｜发言人 1**

**英文原文** Inside. Okay, you can edge. Okay，add any index，right？Add any index，okay。But also you can add one item。我要看看有。可爱。Okay，so the the difference is，apparently you put it at the end of your list，right？Inside you put at any place that you want，right？  
**中文译文** `insert()` 可以往指定索引加一个元素，也是一回加一个。区别在于 `append()` 放到末尾，`insert()` 可以指定位置。[中间有中文插话。]

**01:23:01 - 01:23:05｜发言人 2**

**英文原文** Okay，so the next one is concatenating and combining this.  
**中文译文** 好，下一项是拼接和合并列表。

**01:23:05 - 01:23:25｜发言人 1**

**英文原文** or this is the same as what we did in chapter one，right？So you just have two list，and then you concatenate，if I wanna add a few items in one time，how can I do that？If you want to add a few items, you want items, and you need to do this separately.  
**中文译文** 和第一章做的类似，把两个列表拼起来。｜如果我想一次添加好几个元素，怎么做？｜要加好几个，可以分别做……

**01:23:25 - 01:23:37｜发言人 1**

**英文原文** Oh, you will have a lot of data. You can go ahead for you, right? And then maybe you have some rules out what kind of index that you are looking for, right? Then you can also use.  
**中文译文** 如果有很多数据，也可以用 `for` 循环。也许你要按某些条件找索引，那么也可以用……

**01:23:38 - 01:23:50｜发言人 1**

**英文原文** 哦，哎。什么。Okay，so we have concatenation，this and this，you can put it as our assignment，right？  
**中文译文** 哦，哎。什么。｜好，可以把这两个列表拼接，再把结果赋给变量。

**01:23:50 - 01:24:06｜发言人 1**

**英文原文** Okay，so this with this，you can do the concatenation，right？If you have a list already defined，for example，already have. This means set as X, right? You can put your extend, right?  
**中文译文** 这两个列表可以拼接。如果已经定义了一个列表，比如 `x`，可以用它的 `extend()`。

**01:24:06 - 01:24:25｜发言人 1**

**英文原文** Your extend is you can add more than one, so the one that you have this one, but it will put at the end of the. At the end of the list, right? So you can have extend over here.  
**中文译文** `extend()` 可以追加多个元素，都会放到原列表的末尾。这里可以用 `extend()`。

**01:24:32 - 01:24:47｜发言人 1**

**英文原文** Right? So, anyone you add items, I could add. Right，and then you can add more than one。  
**中文译文** 对，用它可以添加元素，而且一次能加多个。

**01:24:55 - 01:25:28｜发言人 1**

**英文原文** And then got a pen.  
**中文译文** 然后是 `append()`。

**英文原文** Okay，a pen also，okay，you can have a pen also，you can put more than one item。Okay，so what is the difference between a pen and a pencil？啊，也会。  
**中文译文** 它也可以……哦，`append()` 和 `extend()` 有什么区别？

**01:25:32 - 01:25:51｜发言人 1**

**英文原文** Sorry，append，you can only add one item，right？So what happen here is，you only append one item，which is amazing，right？So that's the difference between extend and append，both are going to add item at the.  
**中文译文** 刚才说得不准确。`append()` 一次只加一个元素，哪怕那个元素本身是一个列表。两者都会在末尾添加元素。

**01:25:51 - 01:26:09｜发言人 1**

**英文原文** End of the list, expand you can put more than one, right? Expand sorry, expand you put number one. Okay, so here. So this is the key list.  
**中文译文** `extend()` 可以逐个加入多个元素，`append()` 一次加一个。好，来看这份列表。

**01:26:10 - 01:26:28｜发言人 1**

**英文原文** Right, uh, this we have photo and send, there are only two items, right? And then we have another empty list for everything. But now I'm going to iterate over the list for item in this, everything that extends below.  
**中文译文** 列表里有两个角色 [其中一个名字转录不清]，还有一个叫 `everything` 的空列表。现在我要遍历原列表，每轮都对 `everything` 调用 `extend()`。

**01:26:28 - 01:26:47｜发言人 1**

**英文原文** So what happened is item will pointing to photo right? Will pointing to photo okay, and then everything which is this empty list will add the whole list into the list right? So you add photo and sam.  
**中文译文** 第一轮 `item` 指向第一个角色。空列表加入的是整个原列表里的元素，所以两个角色都加了进来。

**01:26:47 - 01:27:15｜发言人 1**

**英文原文** Alright，and then you go here back，item on now，poison to send。So everything here，you already have photo and send，and you extend with he is a. Photo and set，so you have two times photo and set。Okay，and then we have sorting this，you can sort a list in.  
**中文译文** 第二轮 `item` 指向第二个角色。现在 `everything` 里已经有这两个角色，又把整个原列表加一遍，于是两个角色各出现两次。接下来讲列表排序。可以把列表原地……

### 1:27:15–1:40:37 · 排序与二分查找

**01:27:15 - 01:27:16｜发言人 2**

**英文原文** place without.  
**中文译文** 排序，不用……

**01:27:16 - 01:27:26｜发言人 1**

**英文原文** creating any object by calling its sort function，right？So let's say you have a here，seven two five one three。  
**中文译文** 创建一个新列表，只需调用 `sort()`。例如 `a` 里有七、二、五、一、三。

**01:27:34 - 01:27:49｜发言人 2**

**中文原话** 不，它循环的是。我的理解是他第一次循环的是他们是两项嘛，全部两次，第一次加上第二次，再加整个表格，就拼到一起。

**01:27:49 - 01:27:59｜发言人 1**

**英文原文** Whatever, eh, I think that yeah, so he equals nine, this equals two, four, here's the first one, this is the second one, before betting.  
**中文译文** [课堂对话，转录不清。]

**01:28:00 - 01:28:05｜发言人 2**

**英文原文** So reverse equal to false means that by this one you can add a.  
**中文译文** `reverse=False` 表示……[此处叠有关于添加元素的对话。]

**01:28:05 - 01:28:08｜发言人 1**

**英文原文** pen that's one thing one.  
**中文译文** `append()` 就是一次加一个……

**01:28:08 - 01:28:10｜发言人 2**

**英文原文** thing.  
**中文译文** 一个元素。

**01:28:10 - 01:28:23｜发言人 1**

**英文原文** but it's largest baby，right？This is accepting order.  
**中文译文** 默认是升序，从小到大。

**英文原文** Right，so that's why before，right？If you put reverse.  
**中文译文** 现在，如果写 `reverse`……

**01:28:23 - 01:28:30｜发言人 2**

**英文原文** equal to true，then you will have this angle，put里面，对，put里面。Okay.  
**中文译文** 设为 `True`，就会得到降序。[随后有插话。]

**01:28:31 - 01:28:36｜发言人 1**

**英文原文** right，and then Scott has a few options that were occasionally cut.  
**中文译文** 好，`sort()` 还有几个可用的选项。

**01:28:58 - 01:29:04｜发言人 2**

**英文原文** 姐姐，快快，你。However, it has to be calculated.  
**中文译文** 姐姐，快快，你。｜不过这里得先算出……[语句不完整。]

**01:29:04 - 01:29:16｜发言人 1**

**英文原文** once it reversed.  
**中文译文** ……反向以后。[语句不完整。]

**01:29:22 - 01:29:25｜发言人 2**

**中文原话** 稍等，我我让今天给你解释。

**01:29:35 - 01:30:06｜发言人 1**

**英文原文** Okay，so let's say we have a list B，so we have six boxes T two group so right，so let us look at the first one right，B drop swap，so means that I take whatever import value there。Right, so what happened is he got shot, okay? So it will have he.  
**中文译文** 假设有一个单词列表 `b`。先看第一种写法，`b.sort()`，直接对列表排序。排完以后……

**01:30:11 - 01:30:32｜发言人 1**

**英文原文** THEN IT WILL HAVE KEY BOXES FOR SIX MONTHS, SO WHY WE HAVE KEY FIRST? REASON THAT H COMES LATER THAN S, SO WHY WE HAVE KEY AS THE FIRST ONE? H H.  
**中文译文** ……为什么这个词先出来？因为要看前面的字母。[具体单词与字母转录不清。]

**01:30:37 - 01:30:41｜发言人 2**

**中文原话** 就是就是他整个循环就循环两次，你知道吗？

**01:30:51 - 01:30:51｜发言人 1**

**中文原话** 不是不是。

**01:30:54 - 01:31:02｜发言人 2**

**中文原话** 我第一次加了一个整个的目录，是吧？第一次，来，我的，喂，听。第次选么又加了就是选择又。

**01:31:02 - 01:31:29｜发言人 1**

**英文原文** 加了 rest rest we will have small of f will have the one right and then we have. For six months, okay? For the first direction, having the same RSI value, and then you will look at the second direction. So A comes before I.  
**中文译文** ……前一个位置的字符相同，就看下一个位置的字符。比如 A 排在 I 前面……

**01:31:29 - 01:31:32｜发言人 2**

**英文原文** comes before H. So that's why it is.  
**中文译文** ……[字母顺序的举例转录不清。] 所以它排在这里。

**01:31:32 - 01:31:42｜发言人 1**

**英文原文** in the third order. Alright, okay, next. Say, I add an argument inside it. Okay, so what happened now?  
**中文译文** 在这个顺序里。接下来，我传进一个参数。会发生什么？

**01:31:42 - 01:31:58｜发言人 1**

**英文原文** I say that, okay, I want to sort this one, but I want to sort it by length. It means that how many characters it has. So when we're talking about by length, right? So remember that in our sort, we.  
**中文译文** 我想给这个列表排序，这次按长度排，也就是看每个单词有多少个字符。记得 `sort()` 里有……

**01:31:58 - 01:32:16｜发言人 1**

**英文原文** 这里他们说的行。One is key, one is reverse sort. By default, it must be ascending order. Make ascending order. So when we put key into the key equal length, so means that we want to sort by its.  
**中文译文** 两个参数，一个叫 `key`，一个叫 `reverse`。默认按升序排。写 `key=len`，意思是按每一项的……

**01:32:16 - 01:32:17｜发言人 2**

**英文原文** length.  
**中文译文** 长度……

**01:32:17 - 01:32:31｜发言人 1**

**英文原文** in ascending order.  
**中文译文** 从小到大排。

**英文原文** So means the shortest first.  
**中文译文** 所以最短的单词在前面，最长的放到最后。

**英文原文** Right，and then the longest word will come last one，right？Okay，so when we print it out，right？  
**中文译文** 来打印看看。

**01:32:31 - 01:32:49｜发言人 1**

**英文原文** So of course he will come first because it only has two characters，length two，right？And then it will. So we have six, we have short, right? So the result is six and then short.  
**中文译文** 一个只有两个字符的词排最前面。然后是 “six” 和另一个词。[另一单词转录不一致。]

**01:32:49 - 01:32:59｜发言人 1**

**英文原文** Okay, remember that we are sorting it by length. So here we don't care about activity. Okay, we don't care about the activity.  
**中文译文** 记住，这次是按长度排序，这里不看字母顺序。

**01:33:00 - 01:33:13｜发言人 1**

**英文原文** Because we are sorting with length, so the shortest length is B which is two, right? And then the next one is length three. We have six and so.  
**中文译文** 因为按长度排，最短的是两个字符，下一组是三个字符，里面有 “six” 和另一个词。

**01:33:13 - 01:33:38｜发言人 1**

**英文原文** So when we have two similar items with the same length. So the output will appear according to its position, because in the list six come first, then six will be first right? So comes later, so so will come after right? And then okay finish length four, so length four.  
**中文译文** 两项一样长时，就按它们原来的先后次序出现。原列表里 “six” 先出现，它就先排，另一个在后。再看长度为四的……

**01:33:39 - 01:33:52｜发言人 1**

**英文原文** We don't have any length form, right?  
**中文译文** 没有长度为四的。

**英文原文** Length five we have boxes, we have small again.  
**中文译文** 长度为五的有 “boxes” 和 “small”。

**英文原文** It will see who comes first in the in the initial list, right?  
**中文译文** 还是看它们在原列表中谁先出现。

**01:33:52 - 01:34:07｜发言人 1**

**英文原文** So boxes and then small, so it it works like that, right? Okay，now we have. THE SAME LIST, BUT HERE I WANT TO SORT WITH ANOTHER ARGUMENT.  
**中文译文** 所以是 “boxes” 再到 “small”。好，现在用同一份列表，试另一个参数。

**01:34:07 - 01:34:30｜发言人 1**

**英文原文** I PUT REVERSED EQUAL TO TRUE, THAT MEANS THAT I WANT IT TO SORT BY DESCENDING ORDER.  
**中文译文** 我写 `reverse=True`，表示按降序排。

**英文原文** OKAY, THE HIGHEST.  
**中文译文** 较大的值放在前面，较小的在后面。

**英文原文** Asking value must come first, and then lowers.  
**中文译文** 谁先排？

**英文原文** So which one first?  
**中文译文** [末尾有中文插话。

**英文原文** 不是那个。  
**中文译文** ]

**01:34:37 - 01:34:56｜发言人 1**

**英文原文** So you will have small, right? And then you have six, you have saw, you have boxes, and then you have key, right? Because you are going to sort it by descending order. So descending order means that you have the highest.  
**中文译文** 会看到 “small” 等单词，顺序从大到小。这里讲的是降序，较大的先出来。[完整单词顺序转录不清。]

**01:34:56 - 01:35:21｜发言人 1**

**英文原文** 打。I'm saying the lower is faster, right?  
**中文译文** 现在我要把两个参数一起用。

**英文原文** Okay，so we're going to do that thing okay，yes，right now I'm going to put both of them，right？I want to put both of them，I want to sort them by reverse order，right？This this and this，and then I want to have it three equal to length。  
**中文译文** 我想反向排序，并把排序依据设为长度，也就是 `key=len`。

**01:35:22 - 01:35:33｜发言人 1**

**英文原文** What are we going to do? 快当生日礼物。当然，这个是另外一件。  
**中文译文** 我们会得到什么？[随后有中文插话。]

**01:35:39 - 01:36:03｜发言人 1**

**英文原文** We want to, okay, we know that we want to, uh, to, to meet in recently for this, and then what recently were there? Husky radio，no，the length，the length，right？So means that you start with the strongest length。Right there you go to the shopkeeper side.  
**中文译文** 我们要按降序排。按什么降序？按长度。也就是从最长的开始，然后到较短的。

**01:36:03 - 01:36:24｜发言人 1**

**英文原文** Okay, let me know what is running on your computer. What is running up? boxes one six double.  
**中文译文** 看一下你电脑上的运行结果，显示的是什么？[输出中的单词转录不清。]

**01:36:27 - 01:36:46｜发言人 1**

**英文原文** 是。And then we have binary search and maintaining assorted list. Alright, the built-in bisect module implements binary search and insertion into assorted list.  
**中文译文** 对。接下来是二分查找和维护有序列表。标准库的 `bisect` 模块可以在有序列表上查找插入位置，也可以做有序插入。

**01:36:47 - 01:37:11｜发言人 1**

**英文原文** Bisect, bisect. Find the location where an element should be inserted to keep it sorted, while binary search actually inserts. THE ELEMENT INTO THAT LOCATION, okay? So we have a module called BICEP, right? You can import that module by using import.  
**中文译文** `bisect()` 找到能保持排序的插入位置。实际插入由 `insort()` 完成。[原转录把后者写成了 binary search，按下文校正。] 要使用 `bisect` 模块，先用 `import`。

**01:37:11 - 01:37:22｜发言人 1**

**英文原文** You can see that it is green color, right? So import BICEP, right? And then let's say I have this. Okay，I have this list。  
**中文译文** 可以看到这里的颜色是绿色。写 `import bisect`。假设我有这样一个列表。

**01:37:23 - 01:37:57｜发言人 1**

**英文原文** Right，so when I say bisect that bisect C five，so what I'm going to say is okay，go to this list C，I want to insert value five，I want to insert value five。So when I put bicep, bicep it will tell you where the value five should be located.  
**中文译文** 调用 `bisect.bisect(c, 5)`，就是到列表 `c` 里问，值五应该插在哪里？

**英文原文** It should be located so it will say that okay value five should be inserted at six location.  
**中文译文** 它会告诉你插入位置，示例中得到六。

**01:37:58 - 01:38:15｜发言人 1**

**英文原文** But okay, but it haven't done anything. It just tells you that okay, bisect the bisect only tells you that okay, you need to put this item at this location. But the item is still even put inside the list, right?  
**中文译文** 但此时还没真正插入。`bisect.bisect()` 只是说该放在哪个位置，元素还没放进列表。

**01:38:16 - 01:38:32｜发言人 1**

**英文原文** Okay, they say I have another one bicep, the bicep C eight, so it will tell us that eight should be put at the seventh location, right? But if you call C. You cannot see it yet.  
**中文译文** 再举一个，`bisect.bisect(c, 8)` 会告诉你示例中八应该放在索引七。查看 `c` 时还看不到新增元素。

**01:38:33 - 01:38:48｜发言人 1**

**英文原文** It is still not added into the list, right? So how you want to add it? Okay, you add it by bicep dot inside, right? So you put bicep dot inside, then you can see that it is already.  
**中文译文** 因为它还没有加进去。怎样实际加？调用 `bisect.insort()`，这样就能看到已经插入。

**01:38:49 - 01:39:19｜发言人 1**

**英文原文** Right，sometimes you can，if you don't，if you don't，don't want to know where it will be added，then you can simply go to bisect the picture。But if you want to know where is the location that will be added, then you can put bicep or bicep, then you will put it by bicep up.  
**中文译文** 如果只想实际插入，可以直接用 `insort()`。

**英文原文** Alright, okay, the bicep module function do not check whether the list is sorted or not.  
**中文译文** 如果只想知道插到哪里，就调用 `bisect()`。`bisect` 模块的这些函数不会帮你检查列表是否有序。

**01:39:19 - 01:39:50｜发言人 1**

**英文原文** Alright，so make sure when you want to use bisect，it is done on already sorted list，okay？Because it will look like this，I I have unsorted list，one two eight five three four seven，this is unsorted list，and then I put bisect got in sort C six。Right, it doesn't give me any error means that it can put it successfully added six but.  
**中文译文** 要在已经排好序的列表上使用。比如我拿一个乱序的列表，一、二、八、五、三、四、七，然后调用 `bisect.insort(c, 6)`。它可能没有报错，也确实加进了六，但是……

**01:39:50 - 01:40:09｜发言人 1**

**英文原文** Look the the short the short the socket please not be incorrect right so make sure that whenever you want to have bike stand. It was begun on the softness, right? Okay.  
**中文译文** 结果的顺序并没有正确整理。所以用 `bisect` 前，要确认列表已经按要求排好。

**01:40:10 - 01:40:31｜发言人 1**

**英文原文** Alright, so my idea here is I'm going to sort by reverse order, right? And then I want to use one step back to sort six, right? So again, right. When we say about salted, it must be in the family for you. Right?  
**中文译文** 假设我先按降序排，再尝试用它插入六。这里要留意，默认的写法要求按正确的方向排好，也就是升序。

**01:40:37 - 01:40:37｜发言人 1**

**中文原话** 我刚才。

### 1:40:59–1:45:40 · 切片

**01:40:59 - 01:41:07｜发言人 1**

**英文原文** 不是。Practice start, practice stop, and then the stop index must be next to that. Remember I.  
**中文译文** 不是。｜切片用方括号写起点和终点。终点索引不包含在结果里。还记得我……

**01:41:07 - 01:41:14｜发言人 2**

**英文原文** already told you in last class, right?  
**中文译文** 上节课讲过吗？

**英文原文** So when I want to class.  
**中文译文** 我做切片的时候……

**01:41:14 - 01:41:25｜发言人 1**

**英文原文** right? So means that I want to have from index two. Until index five, but index five is excluded. So you actually have two, three.  
**中文译文** 比如从索引二到索引五，索引五排除，所以会取到二、三……[根据起止规则还包含索引四。]

**01:41:32 - 01:41:58｜发言人 1**

**英文原文** Right, so here, right when I said sequence one five, so start from index one one two three four five, which one is excluded, so that's why you stop at five, right? Slicing a list doesn't change the original list. Okay, even though you already slice it, right? If you call back the original list, the original list is still there.  
**中文译文** 这里写 `sequence[1:5]`，从索引一开始，到了五就停，不取五。对列表取切片不会改动原列表。切完再去看，原列表还在那里。

**01:41:58 - 01:42:08｜发言人 1**

**英文原文** Okay. Slices can also be assigned to a sequence. This time the original list will change.  
**中文译文** 也可以对切片赋值。这时原列表会变。

**01:42:08 - 01:42:19｜发言人 1**

**英文原文** For example, they say this is our list, and then I say that index3 to5. Okay,0,1,2,3. We start from here,3,4,5.  
**中文译文** 比如这是原来的列表，我写索引三到五。从零数，一、二、三，从这里开始。

**01:42:19 - 01:42:31｜发言人 1**

**英文原文** Okay, this one is excluded. So we actually have7,5. Okay，I say for that class I want to change it into sixty，right？  
**中文译文** 索引五不包括，所以实际取到这里的七和五。然后我说，要把这一段换成六十。

**01:42:31 - 01:42:42｜发言人 1**

**英文原文** Then you can see that seven five is no more there，right？It has been。Over right with sixty.  
**中文译文** 你会看到七和五已经不在那个位置了，被六十替换了。

**01:42:42 - 01:42:51｜发言人 1**

**英文原文** So now the original is perfect.  
**中文译文** 原来的列表已经被改动。

**英文原文** So it has been changed.  
**中文译文** 现在只剩……[末尾数字语义不清。

**英文原文** Right now we only have seven.  
**中文译文** ]

**01:42:51 - 01:42:54｜发言人 2**

**英文原文** But.  
**中文译文** 不过……

**01:42:55 - 01:43:04｜发言人 1**

**英文原文** there are many methods. 喂你说。I want to add nine eight twenty.  
**中文译文** 方法有不少。喂，你说。这里我想加九、八、二十。[具体操作需看画面。]

**01:43:07 - 01:43:25｜发言人 1**

**英文原文** Okay, this one you already done this. Okay, if you specify one value, so that's the effect that you want. Okay, this one slice from the beginning until. Index five index five is excluded. Index five is excluded.  
**中文译文** 这个前面已经做过了。只写一个端点也可以。这里从开头切到索引五，索引五不包含在结果里。

**01:43:28 - 01:43:47｜发言人 1**

**英文原文** Right here starting from index three until the end, right?  
**中文译文** 这里从索引三一直切到末尾。

**英文原文** Index negative four means that from the end you count four, right?  
**中文译文** 负四是从结尾往回数第四个位置。

**英文原文** So the last four so means that you want to discard the last four indexes.  
**中文译文** 如果把它写在冒号右边，就不取最后四项。

**01:43:47 - 01:44:04｜发言人 1**

**英文原文** Right，and then negative six，negative two，right slice from the last six index up to the second last index exclusive，right？Okay，this one is.  
**中文译文** 然后是负六到负二，从倒数第六项开始，到倒数第二项前结束。

**英文原文** Because students ask me, right?  
**中文译文** 这里是因为刚才有同学问我……

**01:44:04 - 01:44:18｜发言人 1**

**英文原文** If I want to remove negative to negative states, we also did this in last class, right?  
**中文译文** 如果想从负二切到负六怎么办？

**英文原文** This session we also asked last class, right?  
**中文译文** 上节课也讲过。

**英文原文** We are moving from left to right.  
**中文译文** 默认是从左往右走。

**01:44:18 - 01:44:39｜发言人 1**

**英文原文** So there is no way that you want to remove from left or from right to left, so that's why it was using empty results. Right, so I've also already give this example in last class, right? So I'm not going to repeat it.  
**中文译文** 默认方向下，从右边较靠后的位置出发，走不到左边较靠前的位置，所以结果是空的。上节课已经给过这个例子，我就不再重复。

**01:44:40 - 01:45:00｜发言人 1**

**英文原文** Remember steps last time we do steps start stop steps.  
**中文译文** 还记得上次讲的步长吗？

**英文原文** Can you still remember right?  
**中文译文** 起点、终点、步长。

**英文原文** So step means that how many steps that you need to take before you take the elements, right?  
**中文译文** 步长是每取一个元素后，下次往前或往后走几格。

**01:45:03 - 01:45:20｜发言人 1**

**英文原文** Okay，and then the clever use of this is to pass negative one，so negative one is actually you are doing it in reverse order，right？Step in reverse order。Alright，ok，赶紧跟上说话。  
**中文译文** 把步长写成负一，就可以反着走。也就是按反方向取元素。好。[末尾有中文插话。]

**01:45:21 - 01:45:22｜发言人 2**

**英文原文** Anything?  
**中文译文** 还有吗？

**01:45:22 - 01:45:25｜发言人 1**

**英文原文** Anyone? I will miss my turn.  
**中文译文** 有人要问吗？[后半句转录不清。]

**01:45:26 - 01:45:40｜发言人 2**

**英文原文** Right? Okay, any question so far? No question? Okay, alright. Okay, so if you don't have any question, can we stop here? Alright, so next.  
**中文译文** 到这里还有问题吗？没有吗？好，那没有问题的话，我们就讲到这里吧。好，下次……

### 1:45:40–1:50:38 · 下课后的对话

**01:45:40 - 01:45:45｜发言人 1**

**中文原话** 啊，我们继续到点。

**01:45:47 - 01:46:43｜发言人 2**

**中文原话** 其他语言上班那个里面有异常，但是拍摄它也有，就是平常用到这里的时候，基本上都起始跟截止，只有起始跟截止位。其实包含截图，包含步骤的还原，下课了啊，啊，快点吧，下课了姐姐，下课了是吧？沙哥啊，我听课不是我，我今天好不容易听课，他他就讲那么真的真的就胡杨坐我身边我才听课，因为啥？因为胡杨动不动来问我两句，问我两句我就不懂。

**01:46:45 - 01:46:59｜发言人 1**

**中文原话** 没必进学霸装，这属于学霸的范畴。上次我我上课，我就一直问老师，问个不停，主要是这次我真的这个太难了，对我来说编程。

**01:46:59 - 01:47:15｜发言人 2**

**中文原话** 因为。这个我能听懂，我就是没有基础，我就一直不听，我就觉得没没必要听，我下次自己去研究。然后你在那问我，我都不知道讲到哪了，然后我就去听，然后发现好多又问完了，下次还坐那，下次还坐我身边。

**01:47:22 - 01:47:55｜发言人 2**

**中文原话** 真的属于是那个老师在群里说的啥意思啊就他问的。哈哈，回来，我没看懂啥意思，怎么会呢？翻译也没看懂，快快快，全都看一眼，就这个，就。

**01:48:01 - 01:48:05｜发言人 2**

**中文原话** 走了走了，慢慢走，好，慢慢走，过去了。

**01:48:31 - 01:48:45｜发言人 2**

**中文原话** 这次我就没听错，是。配了胡洋啊，他坐我旁边，然后他他就是，他不应该是没学过，然后一会儿问一个，一会儿问我一个。

**01:48:45 - 01:48:52｜发言人 1**

**中文原话** 然后给我问懵了，我都胡洋现在差不多，我也是自学的，到这边已经一下预学那个没有。

**01:48:52 - 01:48:56｜发言人 2**

**中文原话** 然后我听了之后呢，我就觉得嗯好多之前忘了。

**01:48:56 - 01:49:04｜发言人 1**

**中文原话** 而且你听课的过程中吧，你可以输出第三。呵呵呵。要考试的时候你会你都看不看不懂的那个词儿啊。

**01:49:05 - 01:49:10｜发言人 2**

**中文原话** 哎呀我才知到那个年是吧。

**01:49:11 - 01:49:12｜发言人 1**

**英文原文** ple.  
**中文译文** [只能辨认到词尾 “ple”，结合前文可能是 tuple。]

**01:49:14 - 01:49:23｜发言人 2**

**中文原话** 我终于知道我我之前是我完全会会知道吧我之前我完全。不是我完全听不懂，是我今天看到他。

**01:49:34 - 01:49:39｜发言人 1**

**中文原话** 发那个那个烟发不咬舌不咬舌的。

**01:49:46 - 01:49:51｜发言人 2**

**中文原话** 你走下去吧，咱走下去吧。

**01:50:10 - 01:50:17｜发言人 2**

**中文原话** 看我都没我都专心的群消息我都没看群里在干嘛呀刷了几百条你们在群里干嘛刷了几百条。

**01:50:18 - 01:50:22｜发言人 1**

**中文原话** 熊老师这节课听的老认真了琴都顾不上看。

**01:50:22 - 01:50:24｜发言人 2**

**中文原话** 乱讲。但确实确实。

**01:50:24 - 01:50:26｜发言人 1**

**中文原话** 学霸卷起来了。

**01:50:26 - 01:50:27｜发言人 2**

**中文原话** 确实确实很尽兴。

**01:50:28 - 01:50:29｜发言人 1**

**中文原话** 那如果你理解的话。

**01:50:29 - 01:50:38｜发言人 2**

**中文原话** 你也会去考虑麦克是吗你们在讨论麦克吗你们在讨论麦克吗他取消不了是因为二二流。

