---
title: '分治-动规-贪心总结'
date: '2020-04-09'
cta: '算法'
---

> 这是算法课上的一次总结与分享。

# 分治

分治也就是分而治之，关于分治老师已经讲了很多，但是为什么这样做可以有效的解决问题？

以我们思考问题为例。假设当遇到一个问题时，我们会习惯性想一下子搞定这个问题，直接从**输入到输出** ， 如 1 + 1 = 2 ，不用思考这个模型烂熟于心。

但是遇到了一个问题发现搞不定，感觉很难，无法**直接从输入到输出**这个时候才会考虑分治。分解成一个个小问题，也就是直接的**输入到输出**类型的知识。解决小问题最终解决大问题！这样做显然很有用。

```python
if (是否存在类似模型):
    套模型 (直接从输入到输出的知识)
else: 
    分而治之
```

举个例子：你看到了一个很好看的网站，你想做一个类似的网站，怎么解决做网站这个大问题，经过思考后发现这个不是我可以像 1 + 1 一样 **直接输入到输出** 的简单问题。一下子做不成一个网站（当然你能直接做好的话当我白说🙃）然后发现好难啊！这个时候才会去思考分解问题，网站分为前端 + 后端，然后再拆开去看需要学什么 balabalab... 这是正常思考问题的过程，很难的问题大都会先思考这个问题我之前遇到过没，不行的话再采用分治来解决。

假设当前的我只会 3 种知识并且遇到了一个我一定可以解决的问题，这些知识可以直接从**输入到输出**，但是这三种知识排列组合后会形成 7 种新的**直接输入到输出的**知识，这是一个解空间。我们从这 7 种知识种检索发现其中一种知识可以解决我们遇到的问题，然后这个问题解决了。

但是当我们会 20 种知识的时候，这些知识的排列组合会形成 1048575 种新的知识，我们习惯性的会从这里面检索能够解决问题的一种。但是这个解空间太大了是指数级别的。并且实际问题中我们会的知识远远多于 20 种，这就是为什么编程难的原因。

但是分治法呢，只需要了解问题是由哪些知识组成，挨个解决，一步一步的解决，而不是那种直接的输入输出，这将一个指数级别的问题降低到了线性。

# 贪心

我认为贪心就是朝着某个方向不断的前进，最终的得到一个结果，但是这个结果是否是整体最优的，这个有些情况下是，但是有些情况下不是。

贪心在于贪心策略的选择，也就是怎么选择方向。例如活动安排问题，一段时间内存在很多活动，如何选择才尽可能多的安排更多的活动。

我们想要安排尽可能多的活动，那么问题就变成了活动的时长尽可能短且活动与活动之间不冲突，也就是兼容的活动。

有三个方向：
* 按开始时间排序。 假设一种极端情况，一个会从头开到尾，显然不合适。
* 按时间短且兼容的活动排序。 假设这个会开始的时间很完，但是他之前的时间显然浪费掉了。也不合适。
* 按结束时间排序。 结束时间早说明时间短而且冲突小，可以按这个来排序。

例如 0/1 背包问题和背包问题，这两个问题区别很大，我认为本质在于物体是否可分割。可分割怎么来定义，就像背包里面装的是大米随便怎么拿，反之像古董这些东西不能敲碎放进去。如果可以分割的话那么用贪心就可得到最优解。

但是如果是不可分割，贪心就不可以了，容易陷入局部最优的情况，就像人生每一步一样踩下的每一步都是当前最好的选择，但是却并不能达到更高的境界。模拟退火算法引入一些不确定性，可以避免陷入局部最优的情况，SGD 里面的引入动量的概念也避免了局部最小值。

# 动态规划

动态规划的本质是搜索！动态规划的本质是数学归纳法！

这个好难，主要是动态转移方程，好多题看答案都是一看就会，一写就废的那种。

把递归树画出来，然后找规律，

KMP 里面有动态规划的感觉，

# 总结

以上的这些算法思想都有很多常见且经典的例题，总结这些例题后可以建立起对应的模型，刷题也是不断建模的过程。

通过学习以上的算法中体现出的模型，可以使得我们将这些模型变成直接的**输入输出性**的知识！下次遇到就可以直接套用。

但是更多的还是未知的问题，如何解决？

我认为更重要的是总结出模型中的共性，也就是泛化的能力！