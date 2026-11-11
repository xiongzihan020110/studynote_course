# Chapter 2 · Python 01 逐行讲解

这份讲义按原 Notebook 的顺序编排。**单元格编号从文件第一格开始数，包含正文格**，所以编号会跳过一些数字。每段先放原代码，再解释每个有内容的行。空行只用来分隔代码。如果变量看起来凭空出现，往前找它上一次赋值的位置。

- `x = 4` 可以读成“把名字 x 绑到数字 4 上”。`=` 用来赋值，`==` 用来问“两边是否相等”。
- `print(x)` 会输出。Jupyter 也通常会显示一个单元格最后的表达式，例如单写 `x`。如果写到普通 Python 脚本里，要看到它就写 `print(x)`。
- `#` 开头的注释是给人看的。循环和条件里的缩进表示哪些语句属于同一组。
- 输出按从上到下运行后的状态展示。碰到示范报错，可以继续执行下一格。集合显示顺序、对象地址和部分哈希值可能随环境变化。

## 1. 元组 tuple

可以把元组想成一排固定的座位。座位里放的对象不能直接换掉。如果一个座位放着可修改的列表，你仍然可以往那个列表里加东西。

### 代码单元格 003

```python
t = 4,

print(t)
type(t)
```

- **第 1 行**　`t = 4,` — 逗号把单个整数 4 变成只有一个元素的元组。
- **第 3 行**　`print(t)` — 打印 (4,)，最后的逗号是单元素元组的标记。
- **第 4 行**　`type(t)` — 查看 t 的类型，得到 tuple。

**运行结果**

```text
(4,)
<class 'tuple'>
```

### 代码单元格 004

```python
t = 4

print(t)
type(t)
```

- **第 1 行**　`t = 4` — 把整数 4 赋给 t，覆盖上一个单元格里的绑定。
- **第 3 行**　`print(t)` — 打印整数 4。
- **第 4 行**　`type(t)` — 查看类型，得到 int。

**运行结果**

```text
4
<class 'int'>
```

### 代码单元格 005

```python
tup = 4,5,6

tup
```

- **第 1 行**　`tup = 4,5,6` — 用逗号把三个整数组成元组，并把它交给变量 tup。
- **第 3 行**　`tup` — 显示整个元组 (4, 5, 6)。

**运行结果**

```text
(4, 5, 6)
```

### 代码单元格 006

```python
type(tup)
```

- **第 1 行**　`type(tup)` — 确认 tup 的类型为 tuple。

**运行结果**

```text
<class 'tuple'>
```

### 代码单元格 007

```python
a,b,c = 1,2,3

print(a)
print(b)
print(c)
print(type(a))
```

- **第 1 行**　`a,b,c = 1,2,3` — 把右边三个值依次分给 a、b、c。
- **第 3 行**　`print(a)` — 打印 a，得到 1。
- **第 4 行**　`print(b)` — 打印 b，得到 2。
- **第 5 行**　`print(c)` — 打印 c，得到 3。
- **第 6 行**　`print(type(a))` — 先查 a 的类型，再打印出来，得到 int。

**运行结果**

```text
1
2
3
<class 'int'>
```

### 代码单元格 008

```python
test = 1,2,3
print(test)
```

- **第 1 行**　`test = 1,2,3` — 创建包含 1、2、3 的元组。
- **第 2 行**　`print(test)` — 打印整个元组。

**运行结果**

```text
(1, 2, 3)
```

### 代码单元格 010

```python
# Example of creating a tuple of tuples

nested_tup = (4,5,6),(7,8)

nested_tup
```

- **第 1 行**　`# Example of creating a tuple of tuples` — 注释说明这个例子会创建一个里面还有元组的元组。
- **第 3 行**　`nested_tup = (4,5,6),(7,8)` — 外层有两个元素，第一个是 (4, 5, 6)，第二个是 (7, 8)。
- **第 5 行**　`nested_tup` — 显示外层元组，注意两层括号。

**运行结果**

```text
((4, 5, 6), (7, 8))
```

### 代码单元格 012

```python
x = tuple([4,0,2])
y = 4,0,2

print(x)
print(y)
```

- **第 1 行**　`x = tuple([4,0,2])` — 将列表逐项读出，得到元组 (4, 0, 2)。
- **第 2 行**　`y = 4,0,2` — 直接用逗号创建内容相同的元组。
- **第 4 行**　`print(x)` — 打印转换得到的 x。
- **第 5 行**　`print(y)` — 打印直接创建的 y。

**运行结果**

```text
(4, 0, 2)
(4, 0, 2)
```

### 代码单元格 014

```python
tup = tuple('hello')
tup1 = tuple(['hello']) 
print(tup)
print(tup1)
print(type(tup1))
```

- **第 1 行**　`tup = tuple('hello')` — 字符串可以逐字符读取，所以生成五个元素。
- **第 2 行**　`tup1 = tuple(['hello'])` — 列表里只有一个元素 'hello'，所以转换后仍只有一个元素。
- **第 3 行**　`print(tup)` — 打印逐字符拆开的元组。
- **第 4 行**　`print(tup1)` — 打印只含完整单词的元组。
- **第 5 行**　`print(type(tup1))` — 确认 tup1 的类型是 tuple。

**运行结果**

```text
('h', 'e', 'l', 'l', 'o')
('hello',)
<class 'tuple'>
```

### 代码单元格 015

```python
tup = ('hello',)
print(tup)
print(type(tup))
```

- **第 1 行**　`tup = ('hello',)` — 括号内的逗号让 'hello' 成为元组的唯一元素。
- **第 2 行**　`print(tup)` — 打印这个单元素元组。
- **第 3 行**　`print(type(tup))` — 确认其类型是 tuple。

**运行结果**

```text
('hello',)
<class 'tuple'>
```

### 代码单元格 017

```python
list_of_objects = [1,2,3,4,5]
print(type(list_of_objects))

list_1 = tuple(list_of_objects)
print(type(list_1))
```

- **第 1 行**　`list_of_objects = [1,2,3,4,5]` — 用方括号创建五个整数的列表。
- **第 2 行**　`print(type(list_of_objects))` — 打印原变量的类型 list。
- **第 4 行**　`list_1 = tuple(list_of_objects)` — 把列表转成元组，保存到 list_1。
- **第 5 行**　`print(type(list_1))` — 虽然变量名里有 list，实际类型是 tuple。

**运行结果**

```text
<class 'list'>
<class 'tuple'>
```

### 代码单元格 019

```python
tup1 = tuple('python')
print(tup1)
```

- **第 1 行**　`tup1 = tuple('python')` — 把 'python' 按字符拆成元组。
- **第 2 行**　`print(tup1)` — 打印六个字符组成的元组。

**运行结果**

```text
('p', 'y', 't', 'h', 'o', 'n')
```

### 代码单元格 020

```python
tup1[4]
```

- **第 1 行**　`tup1[4]` — 下标从 0 开始，索引 4 取第 5 个字符 'o'。

**运行结果**

```text
'o'
```

### 代码单元格 022

```python
tup = tuple(['amin',[1,2],True])
print(tup)
```

- **第 1 行**　`tup = tuple(['amin',[1,2],True])` — 先创建含有字符串、列表和布尔值的列表，再把最外层转成元组。
- **第 2 行**　`print(tup)` — 显示三个元素，内部的 [1, 2] 仍然是列表。

**运行结果**

```text
('amin', [1, 2], True)
```

### 代码单元格 023

```python
tup[0] = 'False'  # this will raise an error
```

- **第 1 行**　`tup[0] = 'False'  # this will raise an error` — 尝试替换元组的第一个位置，会触发 TypeError。引号内的 'False' 是字符串。

**运行结果**

```text
TypeError: 'tuple' object does not support item assignment
```

### 代码单元格 025

```python
tup
```

- **第 1 行**　`tup` — 查看元组，失败的赋值没有改变它。

**运行结果**

```text
('amin', [1, 2], True)
```

### 代码单元格 026

```python
tup[1]=[2,4,5]
```

- **第 1 行**　`tup[1]=[2,4,5]` — 尝试把元组第二个位置整体替换成新列表，同样触发 TypeError。

**运行结果**

```text
TypeError: 'tuple' object does not support item assignment
```

### 代码单元格 027

```python
tup[1].append(3)  # add an element at the end of the list [1,2]

tup
```

- **第 1 行**　`tup[1].append(3)  # add an element at the end of the list [1,2]` — 先取出索引 1 上已有的列表，再向列表末尾加 3。这个操作保留元组原来的位置绑定。
- **第 3 行**　`tup` — 查看元组，内部列表现在是 [1, 2, 3]。

**运行结果**

```text
('amin', [1, 2, 3], True)
```

### 代码单元格 029

```python
print(tup)
print(tup1)
```

- **第 1 行**　`print(tup)` — 打印包含内部列表的 tup。
- **第 2 行**　`print(tup1)` — 打印由 'python' 拆成字符的 tup1。

**运行结果**

```text
('amin', [1, 2, 3], True)
('p', 'y', 't', 'h', 'o', 'n')
```

### 代码单元格 030

```python
# Example 1
print()
add_tup = tup + tup1
print(add_tup)
type(add_tup)
```

- **第 1 行**　`# Example 1` — 这条注释给第一个拼接示例编号。
- **第 2 行**　`print()` — 无参数的 print 输出一个空行。
- **第 3 行**　`add_tup = tup + tup1` — 将两个元组的元素依次放进一个新元组。
- **第 4 行**　`print(add_tup)` — 打印拼接结果。
- **第 5 行**　`type(add_tup)` — 查看结果类型，仍是 tuple。

**运行结果**

```text

('amin', [1, 2, 3], True, 'p', 'y', 't', 'h', 'o', 'n')
<class 'tuple'>
```

### 代码单元格 031

```python
# Example 2

(4, None, 'amin')+(6,0)+('hello',)+(10,)
```

- **第 1 行**　`# Example 2` — 这条注释给第二个拼接示例编号。
- **第 3 行**　`(4, None, 'amin')+(6,0)+('hello',)+(10,)` — 用 + 依次拼接四个元组。None 表示没有值，('hello',) 和 (10,) 各只有一个元素。

**运行结果**

```text
(4, None, 'amin', 6, 0, 'hello', 10)
```

### 代码单元格 034

```python
('amin', 'ila')*3

# Note that the objects themselves are not copied, only the references to them
```

- **第 1 行**　`('amin', 'ila')*3` — 将两个名字组成的元组按原顺序重复三次。
- **第 3 行**　`# Note that the objects themselves are not copied, only the references to them` — 注释提醒，重复的是元素引用。如果元组里装的是列表，几个重复位置可能指向同一个列表。

**运行结果**

```text
('amin', 'ila', 'amin', 'ila', 'amin', 'ila')
```

## 元组解包

解包就是把一包值分给多个变量。例如 `name, age = ("小明", 18)` 会让 `name` 得到姓名，`age` 得到年龄。

### 代码单元格 036

```python
tup = (4,5,6)

a,b,c = tup   # the number of variables must equal to the number of elements in tuple

print(a)
print(b)
print(c)
```

- **第 1 行**　`tup = (4,5,6)` — 创建含有 4、5、6 的元组。
- **第 3 行**　`a,b,c = tup   # the number of variables must equal to the number of elements in tuple` — 将三个元素分别赋给 a、b、c。普通解包时，左边变量数量需要和右边元素数量一致。
- **第 5 行**　`print(a)` — 打印 a 的值 4。
- **第 6 行**　`print(b)` — 打印 b 的值 5。
- **第 7 行**　`print(c)` — 打印 c 的值 6。

**运行结果**

```text
4
5
6
```

### 代码单元格 038

```python
tup = 4,5,(6,7)

a,b,(c,d) = tup

print(d)
```

- **第 1 行**　`tup = 4,5,(6,7)` — 创建三个元素的外层元组，第三个元素本身是元组。
- **第 3 行**　`a,b,(c,d) = tup` — 将前两项交给 a 和 b，再将内部两项交给 c 和 d。
- **第 5 行**　`print(d)` — 打印内部元组的第二项 7。

**运行结果**

```text
7
```

### 代码单元格 039

```python
tup2 = 4,5,(7,8)
x,y,z = tup2

print(z)
print(z[0])
print(z[1])
```

- **第 1 行**　`tup2 = 4,5,(7,8)` — 创建外层元组，最后一项是 (7, 8)。
- **第 2 行**　`x,y,z = tup2` — 把 4、5 和整个内部元组依次交给 x、y、z。
- **第 4 行**　`print(z)` — 打印 z 的全部内容。
- **第 5 行**　`print(z[0])` — 打印 z 的第一项 7。
- **第 6 行**　`print(z[1])` — 打印 z 的第二项 8。

**运行结果**

```text
(7, 8)
7
8
```

### 正文里的代码 · 单元格 040

```python
tmp = a
a = b
b = tmp
```

- **第 1 行**　`tmp = a` — 先把 a 的旧值存入临时变量 tmp。
- **第 2 行**　`a = b` — 让 a 取得 b 的旧值。
- **第 3 行**　`b = tmp` — 再把保存的 a 旧值给 b，完成交换。

### 代码单元格 041

```python
a,b = 1,2
print('a =',a)
print('b =', b)

b,a = a,b
print('After swapping')
print('a =',a)
print('b =',b)
```

- **第 1 行**　`a,b = 1,2` — 给 a 和 b 分别赋值 1 和 2。
- **第 2 行**　`print('a =',a)` — 打印交换前的 a。
- **第 3 行**　`print('b =', b)` — 打印交换前的 b。
- **第 5 行**　`b,a = a,b` — 先读取右边 a 和 b 的旧值，再依次赋给左边 b 和 a。
- **第 6 行**　`print('After swapping')` — 打印提示文字，标记接下来是交换后的结果。
- **第 7 行**　`print('a =',a)` — 打印交换后的 a，其值为 2。
- **第 8 行**　`print('b =',b)` — 打印交换后的 b，其值为 1。

**运行结果**

```text
a = 1
b = 2
After swapping
a = 2
b = 1
```

### 代码单元格 043

```python
seq = [(1,2,3),(4,5,6),(7,8,9)]

for a,b,c in seq:
    print('a={0},b={1},c={2}'.format(c,a,b))
    print(a)
    print(b)
    print(c)
```

- **第 1 行**　`seq = [(1,2,3),(4,5,6),(7,8,9)]` — 创建一个列表，其中每项都是三个数字组成的元组。
- **第 3 行**　`for a,b,c in seq:` — 每轮取一个元组，并把它拆给 a、b、c。冒号后的缩进内容属于循环。
- **第 4 行**　`print('a={0},b={1},c={2}'.format(c,a,b))` — 占位符 {0}、{1}、{2} 依次填入 c、a、b，所以第一轮显示 a=3,b=1,c=2。
- **第 5 行**　`print(a)` — 打印变量 a 的实际值。
- **第 6 行**　`print(b)` — 打印变量 b 的实际值。
- **第 7 行**　`print(c)` — 打印变量 c 的实际值。

**运行结果**

```text
a=3,b=1,c=2
1
2
3
a=6,b=4,c=5
4
5
6
a=9,b=7,c=8
7
8
9
```

### 代码单元格 045

```python
tup = (5,1,[7,8],3,'Python','Java','Ç++')
print(tup)

C, D, *rest, A = tup
print(A)
print(*rest)
print(C)
print(D)
```

- **第 1 行**　`tup = (5,1,[7,8],3,'Python','Java','Ç++')` — 创建包含数字、列表和字符串的元组。'Ç++' 是原文件里的拼写。
- **第 2 行**　`print(tup)` — 打印整个元组。
- **第 4 行**　`C, D, *rest, A = tup` — C 收第一项，D 收第二项，A 收最后一项。中间剩下的项收进列表 rest。
- **第 5 行**　`print(A)` — 打印最后一项 'Ç++'。
- **第 6 行**　`print(*rest)` — 星号在调用时把 rest 的每项当作一个单独参数传给 print。内部的 [7, 8] 作为一项输出。
- **第 7 行**　`print(C)` — 打印第一项 5。
- **第 8 行**　`print(D)` — 打印第二项 1。

**运行结果**

```text
(5, 1, [7, 8], 3, 'Python', 'Java', 'Ç++')
Ç++
[7, 8] 3 Python Java
5
1
```

### 代码单元格 046

```python
values = 1,2,3,4,5

a,b,*rest = values

print(*rest)
a,b
```

- **第 1 行**　`values = 1,2,3,4,5` — 创建包含 1 到 5 的元组。
- **第 3 行**　`a,b,*rest = values` — 前两项给 a 和 b，剩余的三项放入列表 rest。
- **第 5 行**　`print(*rest)` — 展开 rest，打印 3 4 5。
- **第 6 行**　`a,b` — 用逗号将 a 和 b 组成元组，显示 (1, 2)。

**运行结果**

```text
3 4 5
(1, 2)
```

### 代码单元格 048

```python
tup = (5,1,[7,8],3,'Python','Java','Ç++')
print(tup)

C, D, *_, A = tup
print(A)
print(C)
print(D)
print(*_)
```

- **第 1 行**　`tup = (5,1,[7,8],3,'Python','Java','Ç++')` — 再次创建示例元组。
- **第 2 行**　`print(tup)` — 打印整个元组。
- **第 4 行**　`C, D, *_, A = tup` — 同样将首两项和末项分别取出，中间的列表保存到变量 _。下划线通常暗示这部分可以忽略。
- **第 5 行**　`print(A)` — 打印末项。
- **第 6 行**　`print(C)` — 打印第一项。
- **第 7 行**　`print(D)` — 打印第二项。
- **第 8 行**　`print(*_)` — 展开并打印 _ 保存的中间元素。

**运行结果**

```text
(5, 1, [7, 8], 3, 'Python', 'Java', 'Ç++')
Ç++
5
1
[7, 8] 3 Python Java
```

### 代码单元格 049

```python
a,b,*_ = values

print(*_)
```

- **第 1 行**　`a,b,*_ = values` — 给 a 和 b 分配 values 的前两项，剩下的项放进 _。
- **第 3 行**　`print(*_)` — 展开 _，打印 3 4 5。

**运行结果**

```text
3 4 5
```

## 元组的方法

`对象.方法(参数)` 可以读成“请这个对象做一件事”。例如 `("红", "蓝", "红").count("红")` 得到 2。

### 代码单元格 051

```python
a = (1,2,2,2,3,4,2)

a.count(2)
```

- **第 1 行**　`a = (1,2,2,2,3,4,2)` — 创建一个包含多次数字 2 的元组。
- **第 3 行**　`a.count(2)` — 统计 2 出现了几次，结果是 4。

**运行结果**

```text
4
```

## 2. 列表 list

把列表想成购物清单。它有顺序，允许重复，也能增删。索引从 0 开始，所以 `["牛奶", "鸡蛋"][1]` 取到鸡蛋。

### 代码单元格 054

```python
a_list = [2,3,7,None]
tup = ('amin', 'foo', 'david')

print(a_list)
print(type(a_list))
print(tup)
print(type(tup))
```

- **第 1 行**　`a_list = [2,3,7,None]` — 创建列表，最后一项是表示无值的 None。
- **第 2 行**　`tup = ('amin', 'foo', 'david')` — 创建含三个名字的元组。
- **第 4 行**　`print(a_list)` — 打印列表，观察外面的方括号。
- **第 5 行**　`print(type(a_list))` — 打印列表的类型 list。
- **第 6 行**　`print(tup)` — 打印元组，观察外面的圆括号。
- **第 7 行**　`print(type(tup))` — 打印元组的类型 tuple。

**运行结果**

```text
[2, 3, 7, None]
<class 'list'>
('amin', 'foo', 'david')
<class 'tuple'>
```

### 代码单元格 055

```python
b_list = list(tup)
print(b_list)
print(type(b_list))
```

- **第 1 行**　`b_list = list(tup)` — 用 list 逐项读取 tup，得到一个新的列表。
- **第 2 行**　`print(b_list)` — 打印名字列表。
- **第 3 行**　`print(type(b_list))` — 确认新变量的类型为 list。

**运行结果**

```text
['amin', 'foo', 'david']
<class 'list'>
```

### 代码单元格 056

```python
b_list
```

- **第 1 行**　`b_list` — 查看上一格得到的列表。

**运行结果**

```text
['amin', 'foo', 'david']
```

### 代码单元格 057

```python
tup
```

- **第 1 行**　`tup` — 查看原元组，它仍然存在。

**运行结果**

```text
('amin', 'foo', 'david')
```

### 代码单元格 058

```python
# you can always modifies the list

#tup[0]='aminah'

b_list[1] = 'amirah'

b_list
```

- **第 1 行**　`# you can always modifies the list` — 注释说明列表里的位置可以直接改写。
- **第 3 行**　`#tup[0]='aminah'` — 这行被注释掉。去掉井号会尝试修改元组，触发 TypeError。
- **第 5 行**　`b_list[1] = 'amirah'` — 索引 1 是第二项，把 'foo' 换成 'amirah'。
- **第 7 行**　`b_list` — 显示修改后的列表。

**运行结果**

```text
['amin', 'amirah', 'david']
```

### 代码单元格 060

```python
b = a = [1,2,3,5,6]
a.append(0)
a = [4,5]
print(b)
print(a)

# Note: The above is true for all objects in Python, not only lists.
```

- **第 1 行**　`b = a = [1,2,3,5,6]` — 只创建一个列表，让 a 和 b 指向它。
- **第 2 行**　`a.append(0)` — 通过 a 把 0 加到共享列表末尾，b 也会看到这个变化。
- **第 3 行**　`a = [4,5]` — 让 a 指向一个新列表，b 仍指向旧列表。
- **第 4 行**　`print(b)` — 打印旧列表 [1, 2, 3, 5, 6, 0]。
- **第 5 行**　`print(a)` — 打印新列表 [4, 5]。
- **第 7 行**　`# Note: The above is true for all objects in Python, not only lists.` — 注释说明赋值绑定名字的规则适用于 Python 对象。这里用列表的原地修改把共享效果显示出来。

**运行结果**

```text
[1, 2, 3, 5, 6, 0]
[4, 5]
```

### 代码单元格 062

```python
gen = range(10)
print(type(gen))
print(gen)
```

- **第 1 行**　`gen = range(10)` — 创建代表 0 到 9 的 range 对象。
- **第 2 行**　`print(type(gen))` — 打印类型 range。
- **第 3 行**　`print(gen)` — 打印对象本身，显示 range(0, 10)。

**运行结果**

```text
<class 'range'>
range(0, 10)
```

### 代码单元格 063

```python
c_list=list(gen)
print(type(c_list))
print(c_list)
```

- **第 1 行**　`c_list=list(gen)` — 把 gen 里的数字逐个收集到列表。
- **第 2 行**　`print(type(c_list))` — 确认转换后的类型为 list。
- **第 3 行**　`print(c_list)` — 打印 0 到 9，右端 10 不包含在内。

**运行结果**

```text
<class 'list'>
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 代码单元格 064

```python
colors = ['red', 'blue', 'green']
print(colors[0])
print(colors[1])
print(colors[2])
print()
```

- **第 1 行**　`colors = ['red', 'blue', 'green']` — 创建三个颜色的列表。
- **第 2 行**　`print(colors[0])` — 取索引 0，打印 red。
- **第 3 行**　`print(colors[1])` — 取索引 1，打印 blue。
- **第 4 行**　`print(colors[2])` — 取索引 2，打印 green。
- **第 5 行**　`print()` — 打印一个空行。

**运行结果**

```text
red
blue
green

```

### 代码单元格 065

```python
numbers = [5, 4, 3, 2, 1, 'hello', 2.3]
print(len(numbers))
```

- **第 1 行**　`numbers = [5, 4, 3, 2, 1, 'hello', 2.3]` — 创建七项列表，其中包括整数、字符串和小数。
- **第 2 行**　`print(len(numbers))` — len 计算外层元素数量，打印 7。

**运行结果**

```text
7
```

### 代码单元格 066

```python
list_of_lists = [[1,2,3],[4,5,6],[7,8,9]]
print(list_of_lists)
print(len(list_of_lists))
```

- **第 1 行**　`list_of_lists = [[1,2,3],[4,5,6],[7,8,9]]` — 创建列表，每个外层元素本身都是一个列表。
- **第 2 行**　`print(list_of_lists)` — 打印整个嵌套列表。
- **第 3 行**　`print(len(list_of_lists))` — 外层共有三个元素，所以打印 3。

**运行结果**

```text
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
3
```

### 代码单元格 067

```python
# Empty list
c = []
print(c)
print(len(c))
```

- **第 1 行**　`# Empty list` — 注释说明下面的方括号表示空列表。
- **第 2 行**　`c = []` — 创建空列表并交给 c。
- **第 3 行**　`print(c)` — 打印 []。
- **第 4 行**　`print(len(c))` — 打印长度 0。

**运行结果**

```text
[]
0
```

## 列表的增加和删除

`append` 在末尾加，`insert` 在指定位置加。`pop` 按位置删并返回旧值，`remove` 按内容删掉第一次出现的值。

### 代码单元格 069

```python
c_list = ['Legolas','Gimli','Saruman','Frodo','Merry','Pippin', 
          'Merry','Gimli']

c_list.append('Sam')
c_list.append('Boromir')

print(c_list)
```

- **第 1 行**　`c_list = ['Legolas','Gimli','Saruman','Frodo','Merry','Pippin',` — 开始创建角色名列表，方括号尚未闭合，所以可以继续写到下一行。
- **第 2 行**　`'Merry','Gimli']` — 写完剩下两个名字并闭合列表。重复的名字也各占一个位置。
- **第 4 行**　`c_list.append('Sam')` — 在末尾加上 Sam。
- **第 5 行**　`c_list.append('Boromir')` — 再在末尾加上 Boromir。
- **第 7 行**　`print(c_list)` — 打印包含两个新名字的列表。

**运行结果**

```text
['Legolas', 'Gimli', 'Saruman', 'Frodo', 'Merry', 'Pippin', 'Merry', 'Gimli', 'Sam', 'Boromir']
```

### 代码单元格 071

```python
c_list.insert?
```

- **第 1 行**　`c_list.insert?` — 末尾的问号是 IPython/Jupyter 的帮助语法，用来查看 insert 的说明。普通 .py 文件可写 help(c_list.insert)。

### 代码单元格 072

```python
c_list.insert(1,'Aragorn')
print(c_list)
```

- **第 1 行**　`c_list.insert(1,'Aragorn')` — 在索引 1 插入 Aragorn，原来的第二项及后面各项向右移动。
- **第 2 行**　`print(c_list)` — 打印插入后的列表。

**运行结果**

```text
['Legolas', 'Aragorn', 'Gimli', 'Saruman', 'Frodo', 'Merry', 'Pippin', 'Merry', 'Gimli', 'Sam', 'Boromir']
```

### 代码单元格 073

```python
c_list.insert(3,'Gandalf')

print(c_list)
```

- **第 1 行**　`c_list.insert(3,'Gandalf')` — 在当前索引 3 插入 Gandalf，也就是把它放在第四个位置。
- **第 3 行**　`print(c_list)` — 打印第二次插入后的列表。

**运行结果**

```text
['Legolas', 'Aragorn', 'Gimli', 'Gandalf', 'Saruman', 'Frodo', 'Merry', 'Pippin', 'Merry', 'Gimli', 'Sam', 'Boromir']
```

### 代码单元格 075

```python
print(c_list)
```

- **第 1 行**　`print(c_list)` — 查看删除前的列表。

**运行结果**

```text
['Legolas', 'Aragorn', 'Gimli', 'Gandalf', 'Saruman', 'Frodo', 'Merry', 'Pippin', 'Merry', 'Gimli', 'Sam', 'Boromir']
```

### 代码单元格 076

```python
c_list.pop(5)
```

- **第 1 行**　`c_list.pop(5)` — 删除索引 5 的第六项，并返回被删除的 'Frodo'。

**运行结果**

```text
'Frodo'
```

### 代码单元格 077

```python
print(c_list)
```

- **第 1 行**　`print(c_list)` — 打印移除 Frodo 后的列表。

**运行结果**

```text
['Legolas', 'Aragorn', 'Gimli', 'Gandalf', 'Saruman', 'Merry', 'Pippin', 'Merry', 'Gimli', 'Sam', 'Boromir']
```

### 代码单元格 079

```python
print(c_list)
```

- **第 1 行**　`print(c_list)` — 再看一次当前列表，方便与下一格比较。

**运行结果**

```text
['Legolas', 'Aragorn', 'Gimli', 'Gandalf', 'Saruman', 'Merry', 'Pippin', 'Merry', 'Gimli', 'Sam', 'Boromir']
```

### 代码单元格 080

```python
del c_list[0]
print(c_list)
```

- **第 1 行**　`del c_list[0]` — 用 del 删除索引 0 的 'Legolas'。
- **第 2 行**　`print(c_list)` — 打印删除后的列表。

**运行结果**

```text
['Aragorn', 'Gimli', 'Gandalf', 'Saruman', 'Merry', 'Pippin', 'Merry', 'Gimli', 'Sam', 'Boromir']
```

### 代码单元格 081

```python
del c_list[-2:]
print(c_list)
```

- **第 1 行**　`del c_list[-2:]` — 从倒数第二项删到末尾，一次删去 Sam 和 Boromir。
- **第 2 行**　`print(c_list)` — 打印删掉末尾两项的列表。

**运行结果**

```text
['Aragorn', 'Gimli', 'Gandalf', 'Saruman', 'Merry', 'Pippin', 'Merry', 'Gimli']
```

### 代码单元格 083

```python
print(c_list)
```

- **第 1 行**　`print(c_list)` — 查看删除 Gimli 之前的列表。

**运行结果**

```text
['Aragorn', 'Gimli', 'Gandalf', 'Saruman', 'Merry', 'Pippin', 'Merry', 'Gimli']
```

### 代码单元格 084

```python
c_list.remove('Gimli')
print(c_list)
```

- **第 1 行**　`c_list.remove('Gimli')` — remove 按值查找并删除第一个 'Gimli'。后面重复出现的 Gimli 还在。
- **第 2 行**　`print(c_list)` — 打印删除后的列表。

**运行结果**

```text
['Aragorn', 'Gandalf', 'Saruman', 'Merry', 'Pippin', 'Merry', 'Gimli']
```

### 代码单元格 086

```python
# Check if a list contains a value using the in keyword

print('Saruman' in c_list)
print('Legolas' in c_list)
```

- **第 1 行**　`# Check if a list contains a value using the in keyword` — 注释说明接下来用 in 检查某个值是否在列表里。
- **第 3 行**　`print('Saruman' in c_list)` — Saruman 仍在列表里，打印 True。
- **第 4 行**　`print('Legolas' in c_list)` — Legolas 之前已经删除，打印 False。

**运行结果**

```text
True
False
```

### 代码单元格 088

```python
c_list
```

- **第 1 行**　`c_list` — 显示当前列表，里面有两个 Merry。

**运行结果**

```text
['Aragorn', 'Gandalf', 'Saruman', 'Merry', 'Pippin', 'Merry', 'Gimli']
```

### 代码单元格 089

```python
# Write your code here
# Hint: You can use for loop
```

- **第 1 行**　`# Write your code here` — 这是练习留白，提示在这里填写代码。
- **第 2 行**　`# Hint: You can use for loop` — 原文件提示可以用循环解决；下文给出一个每轮删掉一个 Merry 的写法。

**练习参考答案**

```python
while 'Merry' in c_list:
    c_list.remove('Merry')
print(c_list)
```

- **第 1 行**　`while 'Merry' in c_list:` — 每轮先问列表里是否还有 Merry。
- **第 2 行**　`c_list.remove('Merry')` — 如果有，就删掉第一个 Merry，然后回去再次检查。
- **第 3 行**　`print(c_list)` — 循环结束后打印。按本讲义运行到这里，两个 Merry 都已删掉。

**运行结果**

```text
['Aragorn', 'Gandalf', 'Saruman', 'Pippin', 'Gimli']
```

## 拼接和扩展列表

想象有一个购物篮。`append(["苹果", "梨"])` 放进一整袋水果，`extend(["苹果", "梨"])` 把两样水果分别放进去。

### 代码单元格 091

```python
# Similar to tuples, adding two lists together with + concatenates them

[4,None,'amin'] + [7,8,(2,3)]
```

- **第 1 行**　`# Similar to tuples, adding two lists together with + concatenates them` — 注释说明列表也可以用 + 拼接。
- **第 3 行**　`[4,None,'amin'] + [7,8,(2,3)]` — 把右边的三项接到左边三项之后，创建新列表，其中 (2, 3) 作为一个元素。

**运行结果**

```text
[4, None, 'amin', 7, 8, (2, 3)]
```

### 代码单元格 093

```python
x = [4,None,'amin']

x.extend([7,8,(2,3)])
x.append([1,2])
x
```

- **第 1 行**　`x = [4,None,'amin']` — 创建三个元素的列表。
- **第 3 行**　`x.extend([7,8,(2,3)])` — 把参数列表中的 7、8、(2, 3) 分别加到 x 末尾。
- **第 4 行**　`x.append([1,2])` — 把整个 [1, 2] 当作一个元素加到 x 末尾。
- **第 5 行**　`x` — 显示 x，观察末尾的 [1, 2] 仍有自己的方括号。

**运行结果**

```text
[4, None, 'amin', 7, 8, (2, 3), [1, 2]]
```

### 代码单元格 095

```python
d_list = ['Frodo', 'Sam']

everything = []

for item in d_list:
    everything.extend(d_list)

everything
```

- **第 1 行**　`d_list = ['Frodo', 'Sam']` — 创建一个含两个名字的列表。
- **第 3 行**　`everything = []` — 创建空列表，用于收集结果。
- **第 5 行**　`for item in d_list:` — 循环两次，item 先后是 Frodo 和 Sam。
- **第 6 行**　`everything.extend(d_list)` — 循环体每次追加的都是 d_list 的全部元素，因此两个名字都会出现两次。
- **第 8 行**　`everything` — 显示最终列表。

**运行结果**

```text
['Frodo', 'Sam', 'Frodo', 'Sam']
```

## 列表排序

`sort()` 会直接整理原来的列表。`key=len` 可以读成“用长度来比较”，例如按名字的字数排队。

### 代码单元格 097

```python
a = [7,2,5,1,3]

a.sort()

a
```

- **第 1 行**　`a = [7,2,5,1,3]` — 创建还未排序的整数列表。
- **第 3 行**　`a.sort()` — 直接把原列表按升序排序。
- **第 5 行**　`a` — 显示 [1, 2, 3, 5, 7]。

**运行结果**

```text
[1, 2, 3, 5, 7]
```

### 代码单元格 098

```python
a.sort?
```

- **第 1 行**　`a.sort?` — 在 Jupyter/IPython 查看 sort 的帮助。在 .py 中可用 help(a.sort)。

### 代码单元格 100

```python
b = ['six','foxes','He','small','saw']

#b.sort()
b.sort(key=len)

b
# Note that if two strings have the same length, 
# it will appear according to the order of their occurance
```

- **第 1 行**　`b = ['six','foxes','He','small','saw']` — 创建五个字符串的列表。
- **第 3 行**　`#b.sort()` — 注释掉的写法如果执行，会使用默认字符串顺序。
- **第 4 行**　`b.sort(key=len)` — 把 len 函数交给 sort，让它用每个单词的长度决定位置。
- **第 6 行**　`b` — 显示按长度排序后的列表。
- **第 7 行**　`# Note that if two strings have the same length,` — 注释开始介绍两个字符串长度相同的情况。
- **第 8 行**　`# it will appear according to the order of their occurance` — 同长度的字符串保留它们在排序前的相对顺序。

**运行结果**

```text
['He', 'six', 'saw', 'foxes', 'small']
```

### 代码单元格 101

```python
b = ['six','foxes','He','small','saw']
b.sort(reverse = True)

print(b)

#b.sort()
#print(b)
```

- **第 1 行**　`b = ['six','foxes','He','small','saw']` — 重新创建五个单词的列表。
- **第 2 行**　`b.sort(reverse = True)` — 按字符串默认比较规则倒序排列。这里小写字母在倒序中排在大写字母 H 前。
- **第 4 行**　`print(b)` — 打印排序后的列表。
- **第 6 行**　`#b.sort()` — 被注释的代码若执行，会把列表重新按默认升序排。
- **第 7 行**　`#print(b)` — 被注释的代码若执行，会打印上一步升序后的列表。

**运行结果**

```text
['small', 'six', 'saw', 'foxes', 'He']
```

### 代码单元格 102

```python
b = ['six','foxes','He','small','saw']

b.sort(reverse = True, key = len)
print(b)
```

- **第 1 行**　`b = ['six','foxes','He','small','saw']` — 重新创建原始单词列表。
- **第 3 行**　`b.sort(reverse = True, key = len)` — 用 len 作为排序依据，并用 reverse=True 让长单词排在前面。
- **第 4 行**　`print(b)` — 打印结果，等长的 foxes 和 small 保留原来的相对顺序。

**运行结果**

```text
['foxes', 'small', 'six', 'saw', 'He']
```

### 代码单元格 103

```python
b.sort(key = len)
print(b)
```

- **第 1 行**　`b.sort(key = len)` — 按长度升序重新排序当前列表。
- **第 2 行**　`print(b)` — 打印结果，He 最短，foxes 和 small 最长。

**运行结果**

```text
['He', 'six', 'saw', 'foxes', 'small']
```

## 在有序列表中找插入位置

想把 4 放进 `[1, 3, 5]` 并保持升序，插入下标是 2。`bisect.bisect` 只报位置，`bisect.insort` 会动手插进去。

### 代码单元格 106

```python
import bisect

c = [1,2,2,2,3,4,7]

bisect.bisect(c,5)  # value 5 should be inserted at 6th location
```

- **第 1 行**　`import bisect` — 导入标准库 bisect，便于在升序列表中找插入位置。
- **第 3 行**　`c = [1,2,2,2,3,4,7]` — 创建已按升序排列的整数列表。
- **第 5 行**　`bisect.bisect(c,5)  # value 5 should be inserted at 6th location` — 计算插入 5 的下标 6，也就是从 1 数的第 7 个位置。原注释的 6th 容易和下标混淆。

**运行结果**

```text
6
```

### 代码单元格 107

```python
bisect.bisect(c,8)  # value 8 should be inserted at 7th location
```

- **第 1 行**　`bisect.bisect(c,8)  # value 8 should be inserted at 7th location` — 返回插入 8 的下标 7，即排到最后一个元素后面。查找位置的操作只返回数字。

**运行结果**

```text
7
```

### 代码单元格 108

```python
c
```

- **第 1 行**　`c` — 检查 c，之前两次查位置都没有改动它。

**运行结果**

```text
[1, 2, 2, 2, 3, 4, 7]
```

### 代码单元格 109

```python
bisect.insort(c,8)

c
```

- **第 1 行**　`bisect.insort(c,8)` — 按升序规则把 8 插入原列表。
- **第 3 行**　`c` — 显示列表，8 在末尾。

**运行结果**

```text
[1, 2, 2, 2, 3, 4, 7, 8]
```

### 代码单元格 111

```python
c = [1,2,8,5,3,4,7]
bisect.insort(c,6)
c
```

- **第 1 行**　`c = [1,2,8,5,3,4,7]` — 创建没有按升序排列的列表。
- **第 2 行**　`bisect.insort(c,6)` — insort 假定输入是升序列表，仍会插入 6。这个输入违反它的前提。
- **第 3 行**　`c` — 查看结果，可以看到列表没有排成升序。

**运行结果**

```text
[1, 2, 8, 5, 3, 4, 6, 7]
```

### 代码单元格 112

```python
c = [1,2,8,5,3,4,7]
c.sort(reverse=True)
bisect.insort(c,6)
c
```

- **第 1 行**　`c = [1,2,8,5,3,4,7]` — 再创建原始无序列表。
- **第 2 行**　`c.sort(reverse=True)` — 先按降序排序。
- **第 3 行**　`bisect.insort(c,6)` — insort 要求升序，降序列表也不满足要求。
- **第 4 行**　`c` — 显示插入后的列表，结果连原来的降序也没保持。

**运行结果**

```text
[8, 7, 5, 4, 3, 2, 1, 6]
```

### 代码单元格 114

```python
import bisect

courses = ['SCSI 1103', 'SCSJ 1013', 'SCSJ 3213', 'SCSR 2103', 'SCSV 4312']

# Write your code here
```

- **第 1 行**　`import bisect` — 导入 bisect 模块。
- **第 3 行**　`courses = ['SCSI 1103', 'SCSJ 1013', 'SCSJ 3213', 'SCSR 2103', 'SCSV 4312']` — 创建已经按字符串升序排列的课程列表。
- **第 5 行**　`# Write your code here` — 这是留给你写查找位置和插入代码的地方。

**练习参考答案**

```python
position = bisect.bisect(courses, 'SCSP 3223')
print(position)
bisect.insort(courses, 'SCSP 3223')
print(courses)
```

- **第 1 行**　`position = bisect.bisect(courses, 'SCSP 3223')` — 计算新课程应该插入的位置。
- **第 2 行**　`print(position)` — 输出下标 3，也就是第 4 个位置。
- **第 3 行**　`bisect.insort(courses, 'SCSP 3223')` — 真正把课程插入列表。
- **第 4 行**　`print(courses)` — 打印列表，可以看到新课程在 SCSJ 3213 和 SCSR 2103 之间。

**运行结果**

```text
3
['SCSI 1103', 'SCSJ 1013', 'SCSJ 3213', 'SCSP 3223', 'SCSR 2103', 'SCSV 4312']
```

## 切片

`列表[起点:终点:步长]` 读作“从起点开始，每隔指定步长取一项，在终点之前停下”。例如 `["甲", "乙", "丙"][0:2]` 取到甲和乙。

### 代码单元格 116

```python
seq = [7,2,3,7,5,6,0,1]

seq[1:5]    # sliced the items at index 1 up to 4 only (index 5 is excluded)
```

- **第 1 行**　`seq = [7,2,3,7,5,6,0,1]` — 创建八项列表，准备练习切片。
- **第 3 行**　`seq[1:5]    # sliced the items at index 1 up to 4 only (index 5 is excluded)` — 从索引 1 取到索引 5 前，实际选中 1、2、3、4 四个位置。

**运行结果**

```text
[2, 3, 7, 5]
```

### 代码单元格 118

```python
print(seq)
print(len(seq))
```

- **第 1 行**　`print(seq)` — 打印原始列表，切片读取没有改动它。
- **第 2 行**　`print(len(seq))` — 打印原列表长度 8。

**运行结果**

```text
[7, 2, 3, 7, 5, 6, 0, 1]
8
```

### 代码单元格 120

```python
seq
```

- **第 1 行**　`seq` — 查看准备修改的原列表。

**运行结果**

```text
[7, 2, 3, 7, 5, 6, 0, 1]
```

### 代码单元格 121

```python
seq[3:5] = [16]   
print(seq)
print(len(seq))
```

- **第 1 行**　`seq[3:5] = [16]` — 用一个元素 [16] 替换索引 3、4 两项，外层列表少一项。
- **第 2 行**　`print(seq)` — 打印替换后的列表。
- **第 3 行**　`print(len(seq))` — 打印新长度 7。

**运行结果**

```text
[7, 2, 3, 16, 6, 0, 1]
7
```

### 代码单元格 122

```python
seq
```

- **第 1 行**　`seq` — 查看上一格修改后的列表。

**运行结果**

```text
[7, 2, 3, 16, 6, 0, 1]
```

### 代码单元格 123

```python
seq[3:4] = [9,8]    # sliced the item at index 3 (index 4 is excluded), insert value 9,8 at index 3   

print(seq)
print(len(seq))
```

- **第 1 行**　`seq[3:4] = [9,8]    # sliced the item at index 3 (index 4 is excluded), insert value 9,8 at index 3` — 用 9、8 两项替换索引 3 上的单个元素 16，外层列表多一项。
- **第 3 行**　`print(seq)` — 打印替换结果。
- **第 4 行**　`print(len(seq))` — 打印长度 8。

**运行结果**

```text
[7, 2, 3, 9, 8, 6, 0, 1]
8
```

### 代码单元格 124

```python
seq[4]
```

- **第 1 行**　`seq[4]` — 读索引 4，即第 5 项，得到 8。

**运行结果**

```text
8
```

### 代码单元格 126

```python
seq
```

- **第 1 行**　`seq` — 查看后面几种切片共用的列表。

**运行结果**

```text
[7, 2, 3, 9, 8, 6, 0, 1]
```

### 代码单元格 127

```python
seq[:5]    # sliced the list up to index 5 (index 5 is excluded)
```

- **第 1 行**　`seq[:5]    # sliced the list up to index 5 (index 5 is excluded)` — 省略起点，从开头取到索引 5 前。

**运行结果**

```text
[7, 2, 3, 9, 8]
```

### 代码单元格 128

```python
seq[3:]   # sliced the list starts from index 3 to the end
```

- **第 1 行**　`seq[3:]   # sliced the list starts from index 3 to the end` — 从索引 3 开始取到最后。

**运行结果**

```text
[9, 8, 6, 0, 1]
```

### 代码单元格 129

```python
seq[-4:]   # sliced the list from the last 4 indexes
```

- **第 1 行**　`seq[-4:]   # sliced the list from the last 4 indexes` — -4 指向倒数第四项，从那里取到最后，总共四项。

**运行结果**

```text
[8, 6, 0, 1]
```

### 代码单元格 130

```python
seq[-6:-2]   # sliced the list starts from the last 6 indexes up to 2nd last index (excluded)
```

- **第 1 行**　`seq[-6:-2]   # sliced the list starts from the last 6 indexes up to 2nd last index (excluded)` — 从倒数第六项向右取，到倒数第二项之前停下。

**运行结果**

```text
[3, 9, 8, 6]
```

### 代码单元格 131

```python
seq[-2:-6]
```

- **第 1 行**　`seq[-2:-6]` — 默认步长是 +1。起点比终点更靠右，向右走取不到元素，所以得到 []。

**运行结果**

```text
[]
```

### 代码单元格 134

```python
print(seq)
print(seq[::2])
print(seq[::1])
print(seq[::3])
```

- **第 1 行**　`print(seq)` — 打印当前列表方便对照。
- **第 2 行**　`print(seq[::2])` — 每隔一项取一个，取索引 0、2、4、6。
- **第 3 行**　`print(seq[::1])` — 步长 1，从头到尾每项都取。
- **第 4 行**　`print(seq[::3])` — 步长 3，取索引 0、3、6。

**运行结果**

```text
[7, 2, 3, 9, 8, 6, 0, 1]
[7, 3, 8, 0]
[7, 2, 3, 9, 8, 6, 0, 1]
[7, 9, 0]
```

### 代码单元格 136

```python
print(seq)

print(seq[::])
print(seq[::-1])
```

- **第 1 行**　`print(seq)` — 先打印当前列表。
- **第 3 行**　`print(seq[::])` — 起点、终点和步长都用默认值，得到一个内容相同的新列表。
- **第 4 行**　`print(seq[::-1])` — 步长 -1，从末尾往前逐项读，得到反向的新列表。

**运行结果**

```text
[7, 2, 3, 9, 8, 6, 0, 1]
[7, 2, 3, 9, 8, 6, 0, 1]
[1, 0, 6, 8, 9, 3, 2, 7]
```

### 正文里的代码 · 单元格 137

```python
i = 0
for value in collection:
    #do something with value
    i += 1

for i, value in enumerate(collection):
    #do something with value
```

- **第 1 行**　`i = 0` — 手动计数时，从 0 开始。
- **第 2 行**　`for value in collection:` — 每轮取 collection 中的下一项，放到 value。
- **第 3 行**　`#do something with value` — 这里提示你添加真正的处理代码。
- **第 4 行**　`i += 1` — 处理完一项后，将计数器加 1。
- **第 6 行**　`for i, value in enumerate(collection):` — enumerate 可以在每轮一起提供编号 i 和内容 value。
- **第 7 行**　`#do something with value` — 这是循环体留白，复制运行时要换成一条实际语句，例如 print(i, value)。

## 3. 常用序列函数

### 代码单元格 138

```python
my_fruit_list = ['apple', 'banana', 'grapes', 'pear']

for f, value in enumerate(my_fruit_list,1):  # start the index from 1 instead of 0
    print(f, value)
```

- **第 1 行**　`my_fruit_list = ['apple', 'banana', 'grapes', 'pear']` — 创建四种水果组成的列表。
- **第 3 行**　`for f, value in enumerate(my_fruit_list,1):  # start the index from 1 instead of 0` — enumerate 同时给出编号和水果。参数 1 让编号从 1 开始，每轮拆给 f 和 value。
- **第 4 行**　`print(f, value)` — 逐行打印编号和水果，中间默认用空格隔开。

**运行结果**

```text
1 apple
2 banana
3 grapes
4 pear
```

### 代码单元格 139

```python
some_list = ['foo', 'baz', 'bar']

mapping = {}

for i,v in enumerate(some_list):
    mapping[v] = i

mapping
```

- **第 1 行**　`some_list = ['foo', 'baz', 'bar']` — 创建三个字符串的列表。
- **第 3 行**　`mapping = {}` — 用 {} 创建空字典，用来记录每个字符串的位置。
- **第 5 行**　`for i,v in enumerate(some_list):` — enumerate 默认从 0 编号，i 接编号，v 接字符串。
- **第 6 行**　`mapping[v] = i` — 把字符串 v 当作键，把编号 i 存为值。
- **第 8 行**　`mapping` — 显示字典，例如 'baz' 对应 1。

**运行结果**

```text
{'foo': 0, 'baz': 1, 'bar': 2}
```

### 代码单元格 140

```python
# returns a list whose items are the same and in the same order as iterable‘s items

choices = ['pizza', 'pasta', 'salad', 'nachos']

print(enumerate(choices,1))

list(enumerate(choices,1))
```

- **第 1 行**　`# returns a list whose items are the same and in the same order as iterable‘s items` — 注释在描述 list 的用途。在本格里，list 收集的是 enumerate 产生的编号与内容配对。
- **第 3 行**　`choices = ['pizza', 'pasta', 'salad', 'nachos']` — 创建四种食物的列表。
- **第 5 行**　`print(enumerate(choices,1))` — 打印 enumerate 对象本身，通常只看到类型和地址。
- **第 7 行**　`list(enumerate(choices,1))` — 把从 1 开始的编号与食物组成一对对的元组，再收集为列表。

**运行结果**

```text
<enumerate object at 0x…>
[(1, 'pizza'), (2, 'pasta'), (3, 'salad'), (4, 'nachos')]
```

### 代码单元格 141

```python
tuple(enumerate(choices))
```

- **第 1 行**　`tuple(enumerate(choices))` — 默认从 0 编号，把所有 (编号, 食物) 对放入一个元组。

**运行结果**

```text
((0, 'pizza'), (1, 'pasta'), (2, 'salad'), (3, 'nachos'))
```

### 代码单元格 142

```python
dict(enumerate(choices))
```

- **第 1 行**　`dict(enumerate(choices))` — 用每一对的第一项作为键、第二项作为值，生成字典。

**运行结果**

```text
{0: 'pizza', 1: 'pasta', 2: 'salad', 3: 'nachos'}
```

## sorted 排序

`sorted(x)` 返回新的列表。`x.sort()` 直接改列表 x。

### 代码单元格 144

```python
a = [7,1,2,6,0,3,2]
a.sort()
a
```

- **第 1 行**　`a = [7,1,2,6,0,3,2]` — 创建未排序列表，数字 2 出现两次。
- **第 2 行**　`a.sort()` — 原地按升序排列 a。
- **第 3 行**　`a` — 显示 a，重复的两个 2 都保留。

**运行结果**

```text
[0, 1, 2, 2, 3, 6, 7]
```

### 代码单元格 145

```python
sorted([7,1,2,6,0,3,2])
```

- **第 1 行**　`sorted([7,1,2,6,0,3,2])` — 对临时列表排序，返回一个新的升序列表。

**运行结果**

```text
[0, 1, 2, 2, 3, 6, 7]
```

### 代码单元格 146

```python
sorted(a)
```

- **第 1 行**　`sorted(a)` — 对 a 生成一份排好序的新列表。a 在第 144 格已经有序，因此这里看起来内容相同。

**运行结果**

```text
[0, 1, 2, 2, 3, 6, 7]
```

### 代码单元格 147

```python
a.sorted()
```

- **第 1 行**　`a.sorted()` — 尝试调用列表不存在的 sorted 方法，触发 AttributeError。可写 sorted(a) 或 a.sort()。

**运行结果**

```text
AttributeError: 'list' object has no attribute 'sorted'
```

### 代码单元格 148

```python
sorted(['Python','Class'])
```

- **第 1 行**　`sorted(['Python','Class'])` — 按默认字符串比较规则生成新列表，得到 ['Class', 'Python']。

**运行结果**

```text
['Class', 'Python']
```

### 代码单元格 150

```python
import bisect

courses = ['SCSJ 1013','SCSR 2103', 'SCSJ 3213','SCSV 4312', 'SCSI 1103']

# Write your code here
```

- **第 1 行**　`import bisect` — 导入 bisect，供后面查位置和插入。
- **第 3 行**　`courses = ['SCSJ 1013','SCSR 2103', 'SCSJ 3213','SCSV 4312', 'SCSI 1103']` — 创建课程列表，此时课程顺序没有排好。
- **第 5 行**　`# Write your code here` — 练习留白，需要先排序，再找位置并插入。

**练习参考答案**

```python
courses.sort()
position = bisect.bisect(courses, 'SCSP 3223')
print(position)
bisect.insort(courses, 'SCSP 3223')
print(courses)
```

- **第 1 行**　`courses.sort()` — 先把无序的课程列表按升序排好。
- **第 2 行**　`position = bisect.bisect(courses, 'SCSP 3223')` — 在排好序的列表里找新课程的下标。
- **第 3 行**　`print(position)` — 打印下标 3。
- **第 4 行**　`bisect.insort(courses, 'SCSP 3223')` — 按升序规则插入新课程。
- **第 5 行**　`print(courses)` — 打印完成后的课程列表。

**运行结果**

```text
3
['SCSI 1103', 'SCSJ 1013', 'SCSJ 3213', 'SCSP 3223', 'SCSR 2103', 'SCSV 4312']
```

## zip 配对

把 zip 想成拉链。左边是两个人的名字，右边是他们的分数，拉起来就得到一对对姓名和分数。

### 代码单元格 152

```python
seq1 = ['foo', 'baz', 'bar']
seq2 = ['one','two','three']

zipped = zip(seq1,seq2)

print(zipped)
```

- **第 1 行**　`seq1 = ['foo', 'baz', 'bar']` — 创建第一列，包含 foo、baz、bar。
- **第 2 行**　`seq2 = ['one','two','three']` — 创建第二列，包含 one、two、three。
- **第 4 行**　`zipped = zip(seq1,seq2)` — zip 按相同位置配对，返回可逐组读取的对象。
- **第 6 行**　`print(zipped)` — 直接打印对象时，通常显示类型和地址。

**运行结果**

```text
<zip object at 0x…>
```

### 代码单元格 153

```python
x = list(zipped)
print(type(x))
print(x)
```

- **第 1 行**　`x = list(zipped)` — 把 zipped 里的所有配对读出来，放入列表。该 zip 对象已被读完。
- **第 2 行**　`print(type(x))` — 打印 x 的类型 list。
- **第 3 行**　`print(x)` — 显示三个二元素元组，每组来自两个列表的同一位置。

**运行结果**

```text
<class 'list'>
[('foo', 'one'), ('baz', 'two'), ('bar', 'three')]
```

### 代码单元格 154

```python
s1, s2 = zip(*x)
print(s1)
print(s2)
```

- **第 1 行**　`s1, s2 = zip(*x)` — 星号把三行配对当作三个参数交给 zip，zip 把每行的第一项合成一列，把每行的第二项合成另一列。解包后交给 s1 和 s2。
- **第 2 行**　`print(s1)` — 打印第一列元组。
- **第 3 行**　`print(s2)` — 打印第二列元组。

**运行结果**

```text
('foo', 'baz', 'bar')
('one', 'two', 'three')
```

### 代码单元格 156

```python
seq3 = [False, True]

y = list(zip(seq1,seq2,seq3))
print(y)
```

- **第 1 行**　`seq3 = [False, True]` — 创建第三列，只有两个布尔值。
- **第 3 行**　`y = list(zip(seq1,seq2,seq3))` — 同时配对三个列表，并收集成列表。最短的 seq3 只有两项，因此只生成两组。
- **第 4 行**　`print(y)` — 打印两组配对，bar 和 three 没有对应的第三列值。

**运行结果**

```text
[('foo', 'one', False), ('baz', 'two', True)]
```

### 代码单元格 157

```python
s1, s2, s3 = zip(*y)
print(s1)
print(s2)
print(s3)
```

- **第 1 行**　`s1, s2, s3 = zip(*y)` — 将两行三列的数据按列拆开，得到三个元组。
- **第 2 行**　`print(s1)` — 打印第一列的 foo、baz。
- **第 3 行**　`print(s2)` — 打印第二列的 one、two。
- **第 4 行**　`print(s3)` — 打印第三列的 False、True。

**运行结果**

```text
('foo', 'baz')
('one', 'two')
(False, True)
```

### 代码单元格 158

```python
print(seq1)
print(seq2)
```

- **第 1 行**　`print(seq1)` — 打印完整的 seq1，包含 bar。
- **第 2 行**　`print(seq2)` — 打印完整的 seq2，包含 three。zip 之前只读取了输入列表。

**运行结果**

```text
['foo', 'baz', 'bar']
['one', 'two', 'three']
```

### 代码单元格 160

```python
list(enumerate(zip(seq1,seq2),1))
```

- **第 1 行**　`list(enumerate(zip(seq1,seq2),1))` — 先用 zip 把两列配对，再用 enumerate 从 1 给每组编号，最后用 list 收集所有结果。

**运行结果**

```text
[(1, ('foo', 'one')), (2, ('baz', 'two')), (3, ('bar', 'three'))]
```

### 代码单元格 161

```python
for i, (a,b) in enumerate(zip(seq1,seq2)):
    print('{0}:{1},{2}'.format(i,a,b))
```

- **第 1 行**　`for i, (a,b) in enumerate(zip(seq1,seq2)):` — zip 生成 (a, b) 的配对，enumerate 加上从 0 开始的编号 i。左边同时把编号和内部的两项拆开。
- **第 2 行**　`print('{0}:{1},{2}'.format(i,a,b))` — 把 i、a、b 依次填入 {0}、{1}、{2}，第一轮显示 0:foo,one。

**运行结果**

```text
0:foo,one
1:baz,two
2:bar,three
```

### 代码单元格 163

```python
person = [('Misbun','Sidek'),('Chong Wei','Lee'),('Mei Choo','Wong')]

first_names, last_names = zip(*person)

print(list(first_names))
print(list(last_names))
```

- **第 1 行**　`person = [('Misbun','Sidek'),('Chong Wei','Lee'),('Mei Choo','Wong')]` — 创建三行姓名数据，每行用一个元组保存。
- **第 3 行**　`first_names, last_names = zip(*person)` — 星号把每行作为 zip 的一个参数，zip 把所有名字聚成第一列，把所有姓氏聚成第二列。
- **第 5 行**　`print(list(first_names))` — 把名字元组转成列表并打印。
- **第 6 行**　`print(list(last_names))` — 把姓氏元组转成列表并打印。

**运行结果**

```text
['Misbun', 'Chong Wei', 'Mei Choo']
['Sidek', 'Lee', 'Wong']
```

## reversed 逆序

`reversed([1, 2, 3])` 提供从后往前读取的迭代器。用 list 把读到的值收起来，结果是 `[3, 2, 1]`。

### 代码单元格 165

```python
y = list(range(10))
print(y)
```

- **第 1 行**　`y = list(range(10))` — 用 range 产生 0 到 9，再收集成列表 y。
- **第 2 行**　`print(y)` — 打印从 0 到 9 的列表。

**运行结果**

```text
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 代码单元格 166

```python
x = list(reversed(y))
print(x)
```

- **第 1 行**　`x = list(reversed(y))` — reversed(y) 提供逆序迭代器，list 逐个收集成新列表 x。
- **第 2 行**　`print(x)` — 打印从 9 到 0 的列表。

**运行结果**

```text
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

### 代码单元格 167

```python
print(y[::-1])
```

- **第 1 行**　`print(y[::-1])` — 通过步长 -1 的切片得到逆序列表并打印。

**运行结果**

```text
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

### 代码单元格 168

```python
# Example of range usage

a0 = list(range(10))
print(a0)

a1 = list(range(100, 110))
print(a1)

a2 = list(range(20,10,-2)) #start from 20, decrement of 2, until 10
print(a2)
```

- **第 1 行**　`# Example of range usage` — 注释说明下面演示 range 的不同参数。
- **第 3 行**　`a0 = list(range(10))` — 只有终点参数，默认从 0 开始，到 10 前结束。
- **第 4 行**　`print(a0)` — 打印 0 到 9。
- **第 6 行**　`a1 = list(range(100, 110))` — 两个参数分别指定起点 100 和不包含的终点 110。
- **第 7 行**　`print(a1)` — 打印 100 到 109。
- **第 9 行**　`a2 = list(range(20,10,-2)) #start from 20, decrement of 2, until 10` — 从 20 开始，每次减 2，遇到边界 10 就停下，10 不会进入结果。
- **第 10 行**　`print(a2)` — 打印 [20, 18, 16, 14, 12]。

**运行结果**

```text
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
[100, 101, 102, 103, 104, 105, 106, 107, 108, 109]
[20, 18, 16, 14, 12]
```

### 代码单元格 170

```python
a1 = range(100, 110)
a1 = list(range(100, 110))
print(a1)
```

- **第 1 行**　`a1 = range(100, 110)` — 把代表 100 到 109 的 range 对象交给 a1。
- **第 2 行**　`a1 = list(range(100, 110))` — 重新创建相同范围并转成列表，再让 a1 指向这个列表。
- **第 3 行**　`print(a1)` — 打印 100 到 109。

**运行结果**

```text
[100, 101, 102, 103, 104, 105, 106, 107, 108, 109]
```

## 4. 字典 dict

字典像通讯录。名字是键，电话号码是值。`{"小明": "123"}["小明"]` 查到字符串 "123"。

### 代码单元格 174

```python
d1 = {}

d1 = {'a':'some value', 'b':[1,2,3,4]}

print(d1)

len(d1)
```

- **第 1 行**　`d1 = {}` — 创建空字典。
- **第 3 行**　`d1 = {'a':'some value', 'b':[1,2,3,4]}` — 重新给 d1 赋值，新字典有两个键 a、b，b 对应一个列表。
- **第 5 行**　`print(d1)` — 打印字典里的键值对。
- **第 7 行**　`len(d1)` — len 计算键值对数量，得到 2。b 内部列表的四项只属于同一对。

**运行结果**

```text
{'a': 'some value', 'b': [1, 2, 3, 4]}
2
```

### 代码单元格 175

```python
print(type(d1))
print(d1['b'])
```

- **第 1 行**　`print(type(d1))` — 打印字典类型 dict。
- **第 2 行**　`print(d1['b'])` — 用键 'b' 查出它对应的列表并打印。

**运行结果**

```text
<class 'dict'>
[1, 2, 3, 4]
```

### 代码单元格 176

```python
#to list all the keys and its value
for k in d1: #iterate over the keys
    print(k,d1[k])
```

- **第 1 行**　`#to list all the keys and its value` — 注释说明接下来会列出键和对应值。
- **第 2 行**　`for k in d1: #iterate over the keys` — 直接遍历字典时，每轮得到一个键 k。
- **第 3 行**　`print(k,d1[k])` — 先用 k 查值，再把键和值一起打印。

**运行结果**

```text
a some value
b [1, 2, 3, 4]
```

### 代码单元格 177

```python
print(d1.items())
for v in d1.items(): #iterate over the value
    print(v)
```

- **第 1 行**　`print(d1.items())` — items() 返回字典的键值对视图，打印时可看到它包含的配对。
- **第 2 行**　`for v in d1.items(): #iterate over the value` — 每轮取得一个 (键, 值) 元组，整个交给 v。原注释里的 value 容易让人误以为只取值。
- **第 3 行**　`print(v)` — 打印整对，所以输出带括号。

**运行结果**

```text
dict_items([('a', 'some value'), ('b', [1, 2, 3, 4])])
('a', 'some value')
('b', [1, 2, 3, 4])
```

### 代码单元格 178

```python
for i,v in d1.items(): #iterate over the value
    print(i,v)
```

- **第 1 行**　`for i,v in d1.items(): #iterate over the value` — 每轮把 items() 产生的元组拆开，i 接键，v 接值。
- **第 2 行**　`print(i,v)` — 分两个参数打印键和值，默认用空格隔开。

**运行结果**

```text
a some value
b [1, 2, 3, 4]
```

### 代码单元格 180

```python
d1
```

- **第 1 行**　`d1` — 查看当前字典内容。

**运行结果**

```text
{'a': 'some value', 'b': [1, 2, 3, 4]}
```

### 代码单元格 181

```python
d1[7] = 'an integer'

print(d1)
print(d1[7])
```

- **第 1 行**　`d1[7] = 'an integer'` — 给字典增加整数键 7，值是 'an integer'。字典中的 7 是用来查值的键。
- **第 3 行**　`print(d1)` — 打印新增键后的字典。
- **第 4 行**　`print(d1[7])` — 用键 7 查出并打印字符串。

**运行结果**

```text
{'a': 'some value', 'b': [1, 2, 3, 4], 7: 'an integer'}
an integer
```

### 代码单元格 183

```python
d1
```

- **第 1 行**　`d1` — 查看字典，确认有 a 和 b，没有 z。

**运行结果**

```text
{'a': 'some value', 'b': [1, 2, 3, 4], 7: 'an integer'}
```

### 代码单元格 184

```python
d1.get('a')
```

- **第 1 行**　`d1.get('a')` — get 查找 a，返回 'some value'。

**运行结果**

```text
'some value'
```

### 代码单元格 185

```python
d1.get('z')
```

- **第 1 行**　`d1.get('z')` — z 不存在，又没提供默认值，所以 get 返回 None。Jupyter 通常不给单独的 None 表达式显示结果，可用 print 显示。

### 代码单元格 186

```python
d1.get('z','sorry not found')
```

- **第 1 行**　`d1.get('z','sorry not found')` — z 不存在，返回你给的默认字符串 'sorry not found'，字典内容保持原样。

**运行结果**

```text
'sorry not found'
```

### 代码单元格 188

```python
'z' in d1
```

- **第 1 行**　`'z' in d1` — in 检查的是键。z 不是当前字典里的键，结果为 False。

**运行结果**

```text
False
```

### 代码单元格 190

```python
d1[5] = 'some value'
print(d1)

print()

d1['dummy'] = 'another value'
print(d1)
```

- **第 1 行**　`d1[5] = 'some value'` — 加入整数键 5，对应 'some value'。
- **第 2 行**　`print(d1)` — 打印新增后的字典。
- **第 4 行**　`print()` — 输出空行，把两次结果隔开。
- **第 6 行**　`d1['dummy'] = 'another value'` — 加入字符串键 dummy 和对应值。
- **第 7 行**　`print(d1)` — 打印含 dummy 的字典。

**运行结果**

```text
{'a': 'some value', 'b': [1, 2, 3, 4], 7: 'an integer', 5: 'some value'}

{'a': 'some value', 'b': [1, 2, 3, 4], 7: 'an integer', 5: 'some value', 'dummy': 'another value'}
```

### 代码单元格 191

```python
del d1[7]

print(d1)
```

- **第 1 行**　`del d1[7]` — 删除键 7 和对应值。
- **第 3 行**　`print(d1)` — 打印已经没有键 7 的字典。

**运行结果**

```text
{'a': 'some value', 'b': [1, 2, 3, 4], 5: 'some value', 'dummy': 'another value'}
```

### 代码单元格 192

```python
del d1[7]
```

- **第 1 行**　`del d1[7]` — 7 已经删过，再删会触发 KeyError。

**运行结果**

```text
KeyError: 7
```

### 代码单元格 193

```python
print(d1)
```

- **第 1 行**　`print(d1)` — 打印字典，上一格的失败没有继续删除任何条目。

**运行结果**

```text
{'a': 'some value', 'b': [1, 2, 3, 4], 5: 'some value', 'dummy': 'another value'}
```

### 代码单元格 194

```python
d1.pop('dummy')
```

- **第 1 行**　`d1.pop('dummy')` — 删除键 dummy，并返回它原来的值 'another value'。

**运行结果**

```text
'another value'
```

### 代码单元格 195

```python
d1
```

- **第 1 行**　`d1` — 查看字典，确认 dummy 已经删除。

**运行结果**

```text
{'a': 'some value', 'b': [1, 2, 3, 4], 5: 'some value'}
```

### 代码单元格 196

```python
d1.pop('dummy')
```

- **第 1 行**　`d1.pop('dummy')` — 再次 pop 已不存在的 dummy，又没提供默认值，会触发 KeyError。

**运行结果**

```text
KeyError: 'dummy'
```

### 代码单元格 197

```python
ret = d1.pop('dummy','not found')

print(ret)
print(d1)
```

- **第 1 行**　`ret = d1.pop('dummy','not found')` — dummy 不存在，pop 返回默认值 'not found' 并把它存到 ret。
- **第 3 行**　`print(ret)` — 打印默认值。
- **第 4 行**　`print(d1)` — 打印字典，确认没有因这次查找而新增条目。

**运行结果**

```text
not found
{'a': 'some value', 'b': [1, 2, 3, 4], 5: 'some value'}
```

### 代码单元格 198

```python
d1[9]='number 9'
d1[5]='number 5'

print(d1)
```

- **第 1 行**　`d1[9]='number 9'` — 新增整数键 9，值为 'number 9'。
- **第 2 行**　`d1[5]='number 5'` — 更新已存在的键 5 的值，键 5 保留原来的插入位置。
- **第 4 行**　`print(d1)` — 打印更新后的字典。

**运行结果**

```text
{'a': 'some value', 'b': [1, 2, 3, 4], 5: 'number 5', 9: 'number 9'}
```

### 代码单元格 200

```python
list(d1.keys())
```

- **第 1 行**　`list(d1.keys())` — keys() 提供键视图，list 将它转成列表，按插入顺序列出键。

**运行结果**

```text
['a', 'b', 5, 9]
```

### 代码单元格 201

```python
list(d1.values())
```

- **第 1 行**　`list(d1.values())` — values() 提供值视图，list 将它转成列表，顺序与上一格的键对应。

**运行结果**

```text
['some value', [1, 2, 3, 4], 'number 5', 'number 9']
```

### 代码单元格 203

```python
d1
```

- **第 1 行**　`d1` — 查看调用 update 前的 d1。

**运行结果**

```text
{'a': 'some value', 'b': [1, 2, 3, 4], 5: 'number 5', 9: 'number 9'}
```

### 代码单元格 204

```python
d1.update({'b':'foo', 'c':12})
d1
```

- **第 1 行**　`d1.update({'b':'foo', 'c':12})` — 批量写入两个键值对，键 b 已存在，所以替换其值，键 c 尚不存在，所以新增。
- **第 2 行**　`d1` — 显示更新后的 d1。

**运行结果**

```text
{'a': 'some value', 'b': 'foo', 5: 'number 5', 9: 'number 9', 'c': 12}
```

### 正文里的代码 · 单元格 205

```python
mapping = {}
for key, value in zip(key_list, value_list):
    mapping[key] = value
```

- **第 1 行**　`mapping = {}` — 创建空字典。
- **第 2 行**　`for key, value in zip(key_list, value_list):` — 把两个列表里位置相同的内容配成一对，再拆给 key、value。
- **第 3 行**　`mapping[key] = value` — 把这一对存入字典。相同的键再次出现时，后写入的值会覆盖旧值。

## 用两个序列构造字典

### 代码单元格 206

```python
print(list(range(5)))
print(list(reversed(range(5))))
```

- **第 1 行**　`print(list(range(5)))` — 把 range(5) 转为列表并打印，得到 0 到 4。
- **第 2 行**　`print(list(reversed(range(5))))` — 把同一数字范围倒过来收集并打印，得到 4 到 0。

**运行结果**

```text
[0, 1, 2, 3, 4]
[4, 3, 2, 1, 0]
```

### 代码单元格 207

```python
mapping = dict(zip(range(5), reversed(range(5))))

mapping
```

- **第 1 行**　`mapping = dict(zip(range(5), reversed(range(5))))` — zip 把正序数字和倒序数字逐项配对，dict 将每对的左项当键、右项当值。
- **第 3 行**　`mapping` — 显示映射，其中 0 对应 4、1 对应 3。

**运行结果**

```text
{0: 4, 1: 3, 2: 2, 3: 1, 4: 0}
```

### 正文里的代码 · 单元格 208

```python
if key in some_dict:
    value = some_dict[key]
else:
    value = default_value

value = some_dict.get(key, default_value)
```

- **第 1 行**　`if key in some_dict:` — 检查 some_dict 是否有这个键。
- **第 2 行**　`value = some_dict[key]` — 找到键时取出对应值。
- **第 3 行**　`else:` — 键缺失时进入 else 分支。
- **第 4 行**　`value = default_value` — 使用提前准备好的默认值。
- **第 6 行**　`value = some_dict.get(key, default_value)` — 这一行单独使用可以实现前面四行的效果。

## 字典的默认值与分组

把单词按首字母分组，就像给每个字母准备一个文件夹。先找到文件夹，再把单词放进去。

### 代码单元格 209

```python
words = ['apple', 'bat', 'bar', 'atom', 'book']

by_letter = {}

for word in words:
    letter = word[0]
    if letter not in by_letter:
        by_letter[letter] = [word]
    else:
        by_letter[letter].append(word)
        
by_letter
```

- **第 1 行**　`words = ['apple', 'bat', 'bar', 'atom', 'book']` — 创建五个单词的列表。
- **第 3 行**　`by_letter = {}` — 创建空字典，准备按首字母分组。
- **第 5 行**　`for word in words:` — 依次取一个单词交给 word。
- **第 6 行**　`letter = word[0]` — 字符串索引 0 取第一个字符。
- **第 7 行**　`if letter not in by_letter:` — 检查字典里是否还没有这个首字母。
- **第 8 行**　`by_letter[letter] = [word]` — 首次遇到该字母时，用一个只含当前单词的列表创建分组。
- **第 9 行**　`else:` — 如果分组已经存在，就运行这个分支。
- **第 10 行**　`by_letter[letter].append(word)` — 取出已有的列表，把当前单词追加进去。
- **第 12 行**　`by_letter` — 显示结果，a 组有 apple 和 atom，b 组有 bat、bar、book。

**运行结果**

```text
{'a': ['apple', 'atom'], 'b': ['bat', 'bar', 'book']}
```

### 代码单元格 211

```python
words = ['apple', 'bat', 'bar', 'atom', 'book']

by_letter = {}
for word in words:    
    letter = word[0]    
    by_letter.setdefault(letter, []).append(word) 
    
by_letter
```

- **第 1 行**　`words = ['apple', 'bat', 'bar', 'atom', 'book']` — 再创建同一组单词。
- **第 3 行**　`by_letter = {}` — 创建空字典。
- **第 4 行**　`for word in words:` — 每轮处理一个单词。
- **第 5 行**　`letter = word[0]` — 取当前单词首字母。
- **第 6 行**　`by_letter.setdefault(letter, []).append(word)` — setdefault 先取得该字母的列表。没有这个键时，它先存入空列表并返回它。随后 append 把单词加入该列表。
- **第 8 行**　`by_letter` — 显示分组结果。

**运行结果**

```text
{'a': ['apple', 'atom'], 'b': ['bat', 'bar', 'book']}
```

### 代码单元格 213

```python
from collections import defaultdict 
    
by_letter = defaultdict(list) 
for word in words:    
    by_letter[word[0]].append(word)
    
print(by_letter)
```

- **第 1 行**　`from collections import defaultdict` — 从标准库 collections 导入 defaultdict。
- **第 3 行**　`by_letter = defaultdict(list)` — 创建默认字典，第一次读取缺少的键时调用 list() 创建该键对应的空列表。
- **第 4 行**　`for word in words:` — 逐个取出 words 中的单词。
- **第 5 行**　`by_letter[word[0]].append(word)` — 以单词首字母为键，取得对应的列表并追加当前单词。
- **第 7 行**　`print(by_letter)` — 打印结果，同时可以看到它使用 list 创建默认值。

**运行结果**

```text
defaultdict(<class 'list'>, {'a': ['apple', 'atom'], 'b': ['bat', 'bar', 'book']})
```

## 哪些值可以作为字典的键

字典使用哈希值帮助快速查找。可以把哈希值想成用于定位的编号。不同值可能得到相同编号，字典还会比较键本身。常用键有字符串、数字，以及每项都可哈希的元组。

### 代码单元格 215

```python
x = hash('string')
print(x)
```

- **第 1 行**　`x = hash('string')` — 将字符串 'string' 交给 hash 计算整数哈希值。
- **第 2 行**　`print(x)` — 打印这个整数。字符串哈希在不同 Python 进程中可能不同。

**运行结果**

```text
-8460529269082017892
```

### 代码单元格 216

```python
hash((1,2,(2,3)))
```

- **第 1 行**　`hash((1,2,(2,3)))` — 计算嵌套元组的哈希值。里面都是可哈希的整数和元组，因此可以计算。

**运行结果**

```text
-9209053662355515447
```

### 代码单元格 218

```python
hash((1,2,[2,3]))    # fails because lists are mutable
```

- **第 1 行**　`hash((1,2,[2,3]))    # fails because lists are mutable` — 里面含有列表，列表不可哈希，因此整个元组也不可哈希，触发 TypeError。

**运行结果**

```text
TypeError: unhashable type: 'list'
```

### 代码单元格 220

```python
d = {}

#d[[1,2,3]] = 5
d[tuple([1,2,3])] = 5

print(d)
print(type(d))
```

- **第 1 行**　`d = {}` — 创建空字典。
- **第 3 行**　`#d[[1,2,3]] = 5` — 注释掉了直接拿列表当键的写法。执行会触发 TypeError。
- **第 4 行**　`d[tuple([1,2,3])] = 5` — 先把 [1, 2, 3] 转成可哈希的元组，再以整个元组为键存入 5。
- **第 6 行**　`print(d)` — 打印键为元组的字典。
- **第 7 行**　`print(type(d))` — 确认 d 是字典类型 dict。

**运行结果**

```text
{(1, 2, 3): 5}
<class 'dict'>
```

### 代码单元格 222

```python
cart = {'apple':12, 
       'banana': 1,
       'orange':2,
       'pear':10}

prices = {'mango':12,
         'apple':2.5,
         'orange':5.5,
         'banana':3}

#write your code here
```

- **第 1 行**　`cart = {'apple':12,` — 创建购物车字典，apple 对应数量 12，花括号里的内容可以分多行。
- **第 2 行**　`'banana': 1,` — 添加 banana 和购买数量 1。
- **第 3 行**　`'orange':2,` — 添加 orange 和购买数量 2。
- **第 4 行**　`'pear':10}` — 添加 pear 和购买数量 10，结束购物车字典。
- **第 6 行**　`prices = {'mango':12,` — 开始创建单价字典，mango 的单价是 12。
- **第 7 行**　`'apple':2.5,` — 设置 apple 的单价为 2.5。
- **第 8 行**　`'orange':5.5,` — 设置 orange 的单价为 5.5。
- **第 9 行**　`'banana':3}` — 设置 banana 的单价为 3，结束价格字典。
- **第 11 行**　`#write your code here` — 练习留白。题目要求未标价的商品按 RM1 计价。

**练习参考答案**

```python
total = 0
for fruit, quantity in cart.items():
    unit_price = prices.get(fruit, 1)
    total += unit_price * quantity
print(total)
```

- **第 1 行**　`total = 0` — 把总价从 0 开始记。
- **第 2 行**　`for fruit, quantity in cart.items():` — 每轮拿到一种水果和它的购买数量。
- **第 3 行**　`unit_price = prices.get(fruit, 1)` — 查这种水果的单价。没有记录的 pear 按 1 计算。
- **第 4 行**　`total += unit_price * quantity` — 用单价乘数量得到小计，加进总价。
- **第 5 行**　`print(total)` — 输出 54.0，表示 RM54。mango 虽然有标价，但没有加入购物车。

**运行结果**

```text
54.0
```

## 5. 集合 set

把集合想成一份去重后的名单。`{1, 1, 2}` 只有两个成员。空集合写 `set()`，因为 `{}` 会创建空字典。

### 代码单元格 224

```python
set([2,2,2,1,3,3])
```

- **第 1 行**　`set([2,2,2,1,3,3])` — 把列表交给 set 去重，得到只含 1、2、3 的集合。

**运行结果**

```text
{1, 2, 3}
```

### 代码单元格 225

```python
{2,2,2,1,3,3}
```

- **第 1 行**　`{2,2,2,1,3,3}` — 直接用花括号创建集合，重复的数字只保留一份。

**运行结果**

```text
{1, 2, 3}
```

### 代码单元格 226

```python
type({2,2,2,1,3,3})
```

- **第 1 行**　`type({2,2,2,1,3,3})` — 用 type 确认这个对象是 set。

**运行结果**

```text
<class 'set'>
```

### 代码单元格 228

```python
a = {1,2,3,4,5}
b = {3,4,5,6,7,8}
```

- **第 1 行**　`a = {1,2,3,4,5}` — 创建包含 1 到 5 的集合 a。
- **第 2 行**　`b = {3,4,5,6,7,8}` — 创建包含 3 到 8 的集合 b，两组数字有重叠。

### 代码单元格 230

```python
print(a.union(b))
print(a | b)
```

- **第 1 行**　`print(a.union(b))` — union 计算并集，把任意一边有的数字都纳入结果，并打印。
- **第 2 行**　`print(a | b)` — 竖线运算符也计算并集，结果包含 1 到 8。

**运行结果**

```text
{1, 2, 3, 4, 5, 6, 7, 8}
{1, 2, 3, 4, 5, 6, 7, 8}
```

### 代码单元格 232

```python
print(a.intersection(b))
print(a & b)
```

- **第 1 行**　`print(a.intersection(b))` — intersection 计算交集，打印两边都有的 3、4、5。
- **第 2 行**　`print(a & b)` — 与号运算符也计算交集。

**运行结果**

```text
{3, 4, 5}
{3, 4, 5}
```

### 代码单元格 234

```python
print(a)
c = a.copy()
print(c)
print(b)
c |= b  # set the content of c to be the union of elements in c and b

c
```

- **第 1 行**　`print(a)` — 打印集合 a。
- **第 2 行**　`c = a.copy()` — 复制 a，c 是一个独立的集合。
- **第 3 行**　`print(c)` — 打印 c，此时元素与 a 相同。
- **第 4 行**　`print(b)` — 打印接下来要合并进来的 b。
- **第 5 行**　`c |= b  # set the content of c to be the union of elements in c and b` — 原地更新 c，让它包含 c 和 b 的所有元素。
- **第 7 行**　`c` — 显示更新后的并集 c。

**运行结果**

```text
{1, 2, 3, 4, 5}
{1, 2, 3, 4, 5}
{3, 4, 5, 6, 7, 8}
{1, 2, 3, 4, 5, 6, 7, 8}
```

### 代码单元格 235

```python
d = a.copy()
print(d)
print(b)
d &= b   # set the content of d to be the intersection of elements in d and b

d
```

- **第 1 行**　`d = a.copy()` — 再复制一次 a，得到独立集合 d。
- **第 2 行**　`print(d)` — 打印 d 的初始内容。
- **第 3 行**　`print(b)` — 打印用来比较的 b。
- **第 4 行**　`d &= b   # set the content of d to be the intersection of elements in d and b` — 原地把 d 更新为 d 和 b 的交集。
- **第 6 行**　`d` — 显示 d，此时只含 3、4、5。

**运行结果**

```text
{1, 2, 3, 4, 5}
{3, 4, 5, 6, 7, 8}
{3, 4, 5}
```

### 代码单元格 236

```python
a
```

- **第 1 行**　`a` — 查看 a，之前修改的是独立副本 c 和 d。

**运行结果**

```text
{1, 2, 3, 4, 5}
```

### 代码单元格 238

```python
my_data = [1,2,3,4]

my_set = {tuple(my_data)}

my_set
```

- **第 1 行**　`my_data = [1,2,3,4]` — 创建一个包含四个整数的列表。
- **第 3 行**　`my_set = {tuple(my_data)}` — 先将列表转成可哈希的元组，再将整个元组作为集合唯一的元素。
- **第 5 行**　`my_set` — 显示集合，里面只有一项 (1, 2, 3, 4)。

**运行结果**

```text
{(1, 2, 3, 4)}
```

### 代码单元格 240

```python
a_set = {1,2,3,4,5}

{1,2,3}.issubset({1,2,3})
```

- **第 1 行**　`a_set = {1,2,3,4,5}` — 创建后续用来比较的 a_set。
- **第 3 行**　`{1,2,3}.issubset({1,2,3})` — 检查左边每个元素是否都在右边。相同集合也满足子集关系，得到 True。

**运行结果**

```text
True
```

### 代码单元格 241

```python
{1,2,3}.issubset(a_set)
```

- **第 1 行**　`{1,2,3}.issubset(a_set)` — 左边的 1、2、3 都在 a_set，得到 True。

**运行结果**

```text
True
```

### 代码单元格 242

```python
{1,2,3,7}.issubset(a_set)
```

- **第 1 行**　`{1,2,3,7}.issubset(a_set)` — 左边有 7，但 a_set 没有 7，得到 False。

**运行结果**

```text
False
```

### 代码单元格 243

```python
a_set = {1,2,3,4,5}
a_set.issuperset({1,2,3})
```

- **第 1 行**　`a_set = {1,2,3,4,5}` — 重新创建包含 1 到 5 的集合。
- **第 2 行**　`a_set.issuperset({1,2,3})` — 检查左边是否包含右边全部元素，结果为 True。

**运行结果**

```text
True
```

### 代码单元格 244

```python
a_set.issuperset({1,2,3,5,7})
```

- **第 1 行**　`a_set.issuperset({1,2,3,5,7})` — 右边需要 7，但左边没有，得到 False。

**运行结果**

```text
False
```

### 代码单元格 245

```python
{1,2,3,4,5,7}.issuperset(a_set)
```

- **第 1 行**　`{1,2,3,4,5,7}.issuperset(a_set)` — 左边包含 a_set 的全部元素，并额外包含 7，得到 True。

**运行结果**

```text
True
```

### 代码单元格 247

```python
{1,2,3} == {2,3,1,1,1,1,1,1}
```

- **第 1 行**　`{1,2,3} == {2,3,1,1,1,1,1,1}` — == 比较两个集合是否拥有完全相同的元素。右边去重后也是 1、2、3，所以结果为 True。

**运行结果**

```text
True
```

### 正文里的代码 · 单元格 248

```python
output = []
for element in iterable:
    if condition(element):
        output.append(expression(element))

[expression(element) for element in iterable if condition(element)]
```

- **第 1 行**　`output = []` — 创建空列表来收集结果。
- **第 2 行**　`for element in iterable:` — 遍历可逐个读取的数据 iterable。
- **第 3 行**　`if condition(element):` — 用 condition 判断当前元素要不要留下。
- **第 4 行**　`output.append(expression(element))` — 如果条件成立，就算出 expression(element) 并加进结果。此行比 if 多一层缩进。
- **第 6 行**　`[expression(element) for element in iterable if condition(element)]` — 用推导式把循环、筛选和计算合在一行。这里的 condition 和 expression 是占位函数。

## 6. 推导式

遇到 `[表达式 for 变量 in 数据 if 条件]`，先读 for，再读 if，最后回到最前面读“保留下来的元素要怎么算”。例如 `[n * 2 for n in [1, 2, 3] if n > 1]` 得到 `[4, 6]`。

### 代码单元格 249

```python
# An example of a list comprehension with strings
fruits = ['banana', 'apple', 'cherry', 'lime', 'mango']

my_list = [s.upper() + '!!!' for s in fruits if 'a' in s]

print(my_list)
```

- **第 1 行**　`# An example of a list comprehension with strings` — 注释说明这是用字符串演示列表推导式。
- **第 2 行**　`fruits = ['banana', 'apple', 'cherry', 'lime', 'mango']` — 创建水果名称列表。
- **第 4 行**　`my_list = [s.upper() + '!!!' for s in fruits if 'a' in s]` — 逐个检查水果名，保留含小写 a 的名字，把它转成大写并拼上三个感叹号，再收集进新列表。
- **第 6 行**　`print(my_list)` — 打印三个符合条件的结果。

**运行结果**

```text
['BANANA!!!', 'APPLE!!!', 'MANGO!!!']
```

### 代码单元格 250

```python
# without list comprehension
numbers = [1, 2, 3, 4, 5, 6, 7, 8]

squares = []
for n in numbers:
    squares.append(n*n)
print(squares)

# with list comprehension
squares = [n*n for n in numbers]
print(squares)
```

- **第 1 行**　`# without list comprehension` — 注释标记下面先用普通循环。
- **第 2 行**　`numbers = [1, 2, 3, 4, 5, 6, 7, 8]` — 准备数字 1 到 8。
- **第 4 行**　`squares = []` — 创建空列表 squares。
- **第 5 行**　`for n in numbers:` — 每轮取一个数字放到 n。
- **第 6 行**　`squares.append(n*n)` — 计算 n 乘以自己，再把结果追加到 squares。
- **第 7 行**　`print(squares)` — 打印循环生成的八个平方数。
- **第 9 行**　`# with list comprehension` — 注释标记下面改用列表推导式。
- **第 10 行**　`squares = [n*n for n in numbers]` — 依次取每个 n，计算 n*n，把结果组成新列表，再交给 squares。
- **第 11 行**　`print(squares)` — 打印结果，与前面循环得到的内容相同。

**运行结果**

```text
[1, 4, 9, 16, 25, 36, 49, 64]
[1, 4, 9, 16, 25, 36, 49, 64]
```

### 代码单元格 252

```python
strings = ['a','as','bat','car','dove','python']

strings = [x.upper() for x in strings if len(x) > 2]

strings
```

- **第 1 行**　`strings = ['a','as','bat','car','dove','python']` — 创建原始字符串列表。
- **第 3 行**　`strings = [x.upper() for x in strings if len(x) > 2]` — 先遍历旧列表，只保留长度大于 2 的字符串，将这些字符串转成大写，再让 strings 指向新列表。
- **第 5 行**　`strings` — 显示 BAT、CAR、DOVE、PYTHON。

**运行结果**

```text
['BAT', 'CAR', 'DOVE', 'PYTHON']
```

### 正文里的代码 · 单元格 253

```python
dict_comp = {key_expr : value-expr for value in collection if condition}

set_comp = {expr for value in collection if condition}
```

- **第 1 行**　`dict_comp = {key_expr : value-expr for value in collection if condition}` — 字典推导式用冒号分隔键和值。原文的 value-expr 是占位写法，实际代码应写可求值的表达式，例如 {name: len(name) for name in names}。
- **第 3 行**　`set_comp = {expr for value in collection if condition}` — 集合推导式只在花括号中给出元素表达式，没有键值对冒号。例如 {len(name) for name in names}。

### 代码单元格 254

```python
strings
```

- **第 1 行**　`strings` — 查看筛选并转大写后的字符串列表。

**运行结果**

```text
['BAT', 'CAR', 'DOVE', 'PYTHON']
```

### 代码单元格 255

```python
loc_mapping = {}
for index, val in enumerate(strings):
   loc_mapping[val] = index

print(loc_mapping)
```

- **第 1 行**　`loc_mapping = {}` — 创建空字典，用来记录每个字符串的位置。
- **第 2 行**　`for index, val in enumerate(strings):` — enumerate 从 0 开始，为每个字符串提供索引和内容。
- **第 3 行**　`loc_mapping[val] = index` — 把字符串 val 作为键，把索引 index 作为值。
- **第 5 行**　`print(loc_mapping)` — 打印映射结果，例如 'DOVE' 对应 2。

**运行结果**

```text
{'BAT': 0, 'CAR': 1, 'DOVE': 2, 'PYTHON': 3}
```

### 代码单元格 256

```python
loc_mapping={val:index for index, val in enumerate(strings)}
loc_mapping
```

- **第 1 行**　`loc_mapping={val:index for index, val in enumerate(strings)}` — 用字典推导式完成上一格的循环。enumerate 给出 index、val，冒号左边的 val 做键，右边的 index 做值。
- **第 2 行**　`loc_mapping` — 显示字典结果。

**运行结果**

```text
{'BAT': 0, 'CAR': 1, 'DOVE': 2, 'PYTHON': 3}
```

### 代码单元格 257

```python
loc_mapping = {val: index for index, val in enumerate(strings)}

loc_mapping
```

- **第 1 行**　`loc_mapping = {val: index for index, val in enumerate(strings)}` — 再做一次相同的字典推导式，这一行调整了空格方便阅读。
- **第 3 行**　`loc_mapping` — 显示结果，与上一格相同。

**运行结果**

```text
{'BAT': 0, 'CAR': 1, 'DOVE': 2, 'PYTHON': 3}
```

### 代码单元格 258

```python
print(strings)
unique_lengths = {len(x) for x in strings}

unique_lengths
```

- **第 1 行**　`print(strings)` — 先打印字符串列表，方便对照每个词的长度。
- **第 2 行**　`unique_lengths = {len(x) for x in strings}` — 逐个算长度并存入集合。BAT 和 CAR 都长 3，集合里只保留一个 3。
- **第 4 行**　`unique_lengths` — 显示长度集合，包含 3、4、6。

**运行结果**

```text
['BAT', 'CAR', 'DOVE', 'PYTHON']
{3, 4, 6}
```

### 代码单元格 260

```python
set(map(len,strings))
```

- **第 1 行**　`set(map(len,strings))` — map(len, strings) 依次给出每个字符串的长度，set 收集并去重，得到同一个长度集合。

**运行结果**

```text
{3, 4, 6}
```

### 代码单元格 263

```python
a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# write your code here
b=[n*n*n for n in a if n%2!=0]
b
```

- **第 1 行**　`a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]` — 创建由十个平方数组成的列表。
- **第 3 行**　`# write your code here` — 这是原题留下的注释，下一行已经有一份答案。
- **第 4 行**　`b=[n*n*n for n in a if n%2!=0]` — n % 2 是除以 2 的余数。用 != 0 保留奇数，再用 n*n*n 算立方并放进 b。
- **第 5 行**　`b` — 显示 b，原列表里的偶数都被过滤掉了。

**运行结果**

```text
[1, 729, 15625, 117649, 531441]
```

### 代码单元格 264

这一格是空的，没有代码要执行。
