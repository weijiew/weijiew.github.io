---
title: '网站用户行为分析'
date: 2020-12-19
published: true
slug: 13-website-user-behavior-analysis
tags: ['大数据']
cover_image: "./images/p13.jpg"
canonical_url: false
description: '大数据技术结课作业'
---

:::note
随着时间的改变这篇文章就没有什么参考价值了，因为软件版本在不断的变换。
文章的半衰期很短，权当做个记录吧，以后我会尽量避免写此类文章。

本篇为大数据技术结课作业的实验报告，所以只是记录了流程以及关键的一些步骤。

实验来源：http://dblab.xmu.edu.cn/post/7499/
:::

# 网站用户行为分析

## 实验环境

* Windows 10
* Vmware 15.5.6 
* WSL2 Ubuntu 20.04
* Ubuntu 16.04
* MySQL 5.7
* Hadoop 2.7.1
* HBase：1.1.2
* Hive:1.2.1
* Sqoop 1.4.6
* R 3.4
* Eclipse

## 实验内容

### 1.0 环境安装

1. 虚拟机安装成功

![image-1](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.5woob58qbj80.png)

2. Ubuntu 16.04 安装成功

![image-2](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.1icldwmlfqow.png)

3. WSL 访问虚拟机

为方便使用，我采用 WSL 终端来连接虚拟机。其中 WSL 为 Ubuntu 20.04 LTS 。

![image-3](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.4s4qzbllrs00.png)

4. JDK 安装成功

![image-4](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.51dnmj6djvg0.png)

5. Hadoop 2.7.1 安装成功

![image-5](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.7l9gf0n7w640.png)

启动成功：

![image-6](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.12pmzy9rzfn.png)

6. Mysql 安装成功

![image-7](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.2rbfv7yuj100.png)

7. Hbase 安装并启动成功

![image-8](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.3vglhn5hrtq0.png)

8. Hive 安装成功

![image-9](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.7f4sqgrp8z40.png)

9. Sqoop 安装并使用 

Sqoop 可以运行并成功访问 Mysql

![image-10](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.6qxl6xwr77w0.png)


### 2.0 导入数据集

2.1 首先将数据集导入系统中：

![image-11](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.3ym4j8127bg0.png)

2.2 将数据上传至 Hadoop 的 HDFS 中：

![image-12](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.2fsm115njy80.png)

2.3 将数据从 HDFS 中导入 Hive 中，并通过查询语句查看部分数据，结果如下：

![image-13](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.74epy7ftr1k0.png)

### 3.0 Hive 数据分析

3.1 查看该数据库中的所有表格以及字段

![image-14](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.34cfajwde6y0.png)

3.2 查看前 20 位用户购买商品时的时间和商品种类

![image-15](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.773wkmue75k0.png)

3.3 用户行为分析

以下是教程中没有给出答案的几个查询，为节省篇幅，删除了部分内容，只留下了查询时间和查询结果：

    hive> select count(*) from bigdata_user where visit_date ='2014-12-11';
    2020-12-19 18:30:15,311 Stage-1 map = 100%,  reduce = 100%
    10649

    hive> select count(*) from bigdata_user where uid=10001082 and visit_date='2014-12-12';
    2020-12-19 18:30:21,551 Stage-1 map = 100%,  reduce = 100%
    69

    hive> select count(*) from bigdata_user where visit_date='2014-12-12';
    2020-12-19 18:30:29,437 Stage-1 map = 100%,  reduce = 100%
    17494

    hive> select uid from bigdata_user where behavior_type='4' and visit_date='2014-12-12' group by uid having count(behavior_type='4')>5;
    2020-12-19 18:30:36,354 Stage-1 map = 100%,  reduce = 100%
    100226515
    100300684
    100555417
    100605
    ...
    Time taken: 1.466 seconds, Fetched: 18 row(s)

### 4.0 Hive、MySQL、HBase数据互导

此时数据已经进入 Hive 中，下一步是采用 Sqoop 将数据从 Hive 中导入 Mysql 中，结果如下：

![image-16](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.3ztxxdt3fd00.png)

数据从 Mysql 中成功导入 HBase 。

![image-17](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.t1425qj35m8.png)

### 5.0 利用R进行数据可视化分析

R 语言连接 Mysql 成功！

![image-18](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.5fgxxwfxjb00.png)

用户行为分布情况如下：

![image-19](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/a2.4npqa811ery0.png)

不同类别的商品消费分布如下：

![image-20](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/a3.5k6sk11jnr00.png)

11，12 月用户行为分布：

![image-21](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/a4.8cj09bn03yg.png)

不同省份的销售情况分布：

![image-22](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.30okxmtn5ee0.png)

## 出现的问题和解决方案

前四个实验都比较简单，虽然存在一些 bug 但马上都能解决，但最后一个实验耗时非常多！

1. 换源之时存在镜像缺失公钥问题，花费一段时间后解决。
2. 换源后 R 内部下载其他包时也存在一个换源问题，之前没有注意到花费了很多时间在下包。
3. 在安装 ggplot2 时缺少几个依赖包，但幸好安装顺利。
4. 安装 devtools 这个包时却无法正常下载，经过不断尝试 3.4.4 版本的 R 无法下载。
5. 改为 3.2.1 的 R 后发现 ggplot2 又无法安装。
6. 由于无法下载 3.3.2 的 R ，于是开始本地编译源代码，编译之时依旧缺少依赖，经过努力最终安装成功。

![image-23](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.674ewf9lepg0.png)

7. 编译源码之时还存在一个问题，`g++: internal compiler error: Killed (program cc1plus)`

这个问题是内存不足导致，采取的措施是用交换分区来解决。首次见这种类型的错误。

8. R 3.3.2 在安装 devtools 和 ggplot2 时虽然下载缓慢但是还好安装上了，但是字体存在问题，无法渲染字体o

![image-24](https://cdn.jsdelivr.net/gh/weijiew/pic@master/images/image.22seykq36c9s.png)

9. 于是我开始了修改字体 😡 。

## 总结

这是首次涉及大数据技术栈之类的项目，虽然没怎么写代码，大部分时间都在同配环境打交道，但是整体做下来知晓了整个流程。

通过该项目我深刻的意思到如果不清楚原理，很多错误无法解决，无法站在更高的层次上知晓问题的本质。例如上面提及的一个编译源码之时导致内存不足的 bug ，由于没有学过计算机组成原理，对于这方面知识的缺乏导致很盲目。

总之该项目最大的意义是令我明白的了大数据的业务流程！