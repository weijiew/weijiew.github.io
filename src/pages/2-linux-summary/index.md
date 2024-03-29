---
title: 'Linux 学习总结'
date: '2019-06-13'
cta: 'Linux'
---

# 1.0 什么是Linux？

Linux 是一个操作系统，主要用于服务器端！

## 1.1 Linux 特点

1. 与Unix兼容。
2. 开源。
3. 高性能且安全。
4. 可被定制。
5. 可操作性高。
6. 多用户，多任务的32位操作系统。

## 1.2 Linux的版本

Linux的版本分为**核心板**和**发行版**两种。

**核心版本：** A.B.C

* A：代表主版本号
* B：代表次版本号
* C：代表代表当前版本修订次数。

次版本号（B）的奇数代表**不稳定**，偶数代表**稳定**版本。

**发行版本：** 发行版本是各个公司推出来的，有很多，主要有以下几个！

* Red Hat Linux
* Debian
* Ubuntu
* 红旗Linux

## 1.3 Linux 的图形环境

Linux的图形环境分为 GNOME 和 KDE 两种，二者都是基于 X Windows发展而来。

# 2.0 简单命令

普通用户和root用户的切换：

```bash
$su     # 切换到root用户
$su wije(用户名) # 切换到普通用户
```

```bash
$who  # 获得当前用户信息
```

```bash
$echo  # 将参数输出到屏幕上，如果不加双引号会输出成字符串以空格隔开，如果加则原样输出。
```

```bash
$date # 显示时间
```

```bash
$cal # 显示月份
```

```bash
$clear # 清屏
```

```bash
$passwd # 修改密码
```

# 3.0 文本概念和文件类型

**文件系统：** 由若干目录和其子目录组成的层次结构，根目录是最上层的。

**文件结构：** 分为成分和命名两种。

**文件类型：** 分别为普通文件，目录文件，设备文件，符号链接文件。

## 3.1 文件操作命令

**文件显示命令**

```bash
$cat 具有两个功能：显示文件中的内容和将两个文件中的内容填充到第三个文件中。
```

```bash
$more  		显示文件中的内容但每次只显示一屏
			按space 显示下一屏内容
			按enter 显示下一行内容
			按H键 则显示帮助内容
			按B键显示上一屏内容
			按Q键退出more命令

```

```bash
$head -5 cc 显示文件名为cc头五行的内容
```

```bash
$tail cc 默认显示后10行的内容
$tail -5 cc 显示后五行内容
$tail +5 cc 显示从第五行开始到文本末尾的内容
$tail -c 5 cc 显示文件最后五个字符
```

```bash
$touch aa 创建文件aa
```

**匹配排序显示指定内容命令**

```bash
$grep 检索命令
```

```bash
$sort 排序命令
$sort -k 2,3 cc 以第二个字段为排序关键字进行排序
```

```bash
$uniq 在拍好序的文件中去除重复的行
```

```bash
comm  m1 m2 比较m1和m2文件中的行，输出三列，分别是m1中单独出现，m2中单独出现，m1m2共有
comm m1 m2 -1 不显示m1单独出现的行
comm m1 m2 -2 不显示m2单独出现的行
comm m1 m2 -12 只显示共有的行
出现哪个数字代表哪个数字对应的信息不出现
```

```bash
$diff 逐行比较两个文件，列出不同
```

```bash
$cp cc /home/dsj 将cc文件复制到/home/dsj 目录下
```

```bash
$rm -rf cc 删除cc文件
```

```bash
$mv source target 将source文件中的信息放到target中
```

```bash
$wc -c 统计字节数
-l 统计行数
-w 统计字数
```

## 3.2 目录及其操作命令

### 3.2.1 目录结构

1.用户主目录
2.路径名：分为绝对路径和相对路径两种。

绝对路径：从盘符开始以根目录开始，总是以（/）开始。

相对路径：从当前目录开始。

**创建目录命令**

```bash
$mkdir aa 创建目录aa
-p 批量创建目录。
-m 700 文件主具有读写执行权限。
-m 750 组用户具有可读 可执行权限。
不能写成 /a/b/c
```
**删除目录命令**

```bash
$rmdir -p a/b/c 删除a/b/c目录
不能写成 /a/b/c
```

**改变工作目录和显示工作目录内容**

```bash
$cd .. 切入上一个目录
$cd 返回主目录
$pwd 显示当前目录
$ls 显示目录中的内容
```
**链接文件的命令**

链接文件分为**硬链接**和**软链接**两种。

区别：硬链接拿到的是索引节点类似于地址，两个文件级别相同，删掉其中任何一个都不影响另一个。而软链接储存的则是路径名，类似于**快捷方式**，文件级别一高一低。若删除路径指向的文件则此链接就无效了。

**改变文件或目录存取权限的命令**

用户分为三种：**用户主**，**组用户**，**其他用户**，对应不同的存储权限

chmod 用于改变或设置文件或目录的存取权限，分为两种以**符号模式**改变权限和以**绝对方式**改变权限两种。

```bash
$chmod 
```

**以符号模式改变权限**

a：所有用户
u：用户
g：同组 
o：其他

**以数字模式改变权限**

**文件未被创建时直接设置权限**

* 创建的是文件权限是 666
* 创建的是目录权限是 777

同 chmod 命令相反

**两者都改变用户组，但后者改变用户组的同时改变所有组**

**文件压缩与解压缩**

gzip

unzip

# 4.0 命令 again

## 4.1 cd

```bash
$cd ..	 	进入父目录
$cd /			进入根目录
$cd - 		回退到上一次的目录
```

## 4.2 pwd

```bash
$pwd -P  	显示当前目录的物理路径 
$pwd -L 	显示当前目录的链接路径
```
## 4.3 mkdir

```bash
$mkdir -p zhou/test	创建多个目录。
$mkdir -m 777 wu	将目录wu 权限设置为【rwxrwxr-x】。
$mkdir -vp zhou/wu 	创建目录并显示。
```
## 4.4 rm

```bash
$rm * rf  根目录下执行这条命令会将整个系统毁掉。
$rm *.log 可以讲后缀名为.log的文件交互式删除。
```
## 4.5 mv

```bash
$mv a b 将文件a更名为b,或将文件a放入b目录中
```
## 4.6 which
```bash
$which gcc 判断是否安装了gcc 若安装则给出路径。
```
## 4.7 whereis
```bash
$whreeis 检索文件并判断位置。
```

## 4.8 vi
**移动光标**
```bash
hjkl 分别代表 ← ↓ ↑ →
Ctrl + m 代表↓
Ctrl + p 代表↑
```
## 4.9 行间跳转
```bash
0代表光标以东到此行包含空格的开头部分
^代表光标移动到此行不包含空格开头部分
$移动光标到行尾，8$ 光标向下移动7行
```
```bash
G移动到行尾
5G移动到第五行开头
9| 移动到第九列
```
## 4.10 行内跳转
```bash
w 光标移动到下一个单词的开头判断包含标点个空格
W 光标移动到下一个单词开头，只识别空格
b 光标退到前一个词的开头，识别空格个标点
B 光标退到前一个词的开头只识别空格
e光标移动到单词末尾,识别空格和标点
E光标移动到单词末尾，只识别空格
（
）以句子为单位进行移动
```

```bash
H移动到屏幕左上角的
8H 从屏幕开头向下移动到第八行开头
M 移动到屏幕中部
L 移动到屏幕最后一行，若超过一屏，则移动到此屏最后一行
3L 从屏幕底部向上移动2行到行首
```

> 2019/7/3 07:35:12

# 5.0 shell概述

## 5.1 shell的特点

八种特点：组合方式简单，名字可扩展，shell内置命令可直接使用，允许使用数据流等模式，结构化程序设计，可以后台执行，环境可配置，可以设计shell脚本。

四个种类：sh ，csh，ksh，bash四种。

**脚本建立**

通过vi 编辑脚本 ，bash 执行脚本

#!/bin/bash  类似于头文件，调用bash程序对它进行解释。

**脚本执行**

分三种方式执行：

 1. bash < ex1 （通过输入重新定向符来执行）
 2. bash  ex1  （将脚本作为参数执行）
 3. chmod 750 ex1  PATH=PATH:.   ex1（将脚本设置为可执行权限）然后添加当前路径到脚本中可直接执行

**历史命令：**

* $history 显示历史命令
* $!! 重复执行上一条命令
* $!81 执行第81条命令
* $history 10 显示后十行命令


**别名的定义与取消：**

* $alias aa='cd'
* $unalias aa


**三种引号的使用：**
* 双引号中的内容会原样输出
* 倒引号中的内容会当成命令进行输出
* 单引号如果单独使用中的内容都会被当成普通字符输出对待，
* 如果套在双引号内部会单引号中的命令会被解释。

**注释：**

以 # 开头

>2019年07月02日 20:04:55

# 6.0 系统管理概述

对Linux服务器端进行的管理和配置

## 6.1 用户和工作组管理

Linux是多用户操作系统。

**工作组：**

 将权限类似的用户放在一起，方便管理

**和用户账号有关的文件：** 

* /etc/passwd ：和账号信息相关的都存在这个文件夹中。
* /etc/shadow ： 存放账号密码的有效期。
* /etc/group ： 存放组用户信息文件

**创建用户：**

命令界面下创建： 首先必须是超级用户（rooot）：

```bash
# su 获取超级用户
# useradd 增加用户
```
**删除用户：**

```bash
# userdel username  如果加上-r 将会连带这目录一块删掉
```
**文件系统：**

linux采用将文件放在不同的磁盘中，防止文件受损时影响其他文件。
Linux默认的三个文件系统为：ext2 /ext3 /proc 三种

```bash
$mkfs 建立文件系统
```

**Linux的主要目录：**

```bash
/ 主目录
/bin 存放命令
/boot 引导核心程序 
/dev 外部设备的驱动存放
/etc 系统管理配置的文件和子目录（最重要的目录）
/home 存放主目录文件的地方
/lib 存放动态链接的目录
/lost+found 当系统发生故障时，于此目录存放临时文件
/opt 存放可用于安装的软件包
/proc 此目录存于内存中，时Linux的虚拟系统
/root 超级用户的的默认主目录
/sbin 存放系统管理程序
/tmp 存放临时文件
/user 用户的大多数文件都存于此
/var 存放记录文件和系统文件
```
## 6.2 文件系统的备份

**备份分三种：**
完全备份：每隔一段时间对系统进行全部备份。
增量备份：以时间为单位，每次备份这段时间内更新的东西。
间隔备份：以次数为单位，更新两次间隔中更新的部分。

## 6.3 系统安全管理

**三要素：** 
物理安全：通信设备安全
普通用户安全：保护用户资料
超级用户安全：不要轻易root。。。。。

**用户账号：**
 密码设置时效性，在/passwd/shadow

**文件目录的安全问题：** 
/boot Linux 

**系统日志：** 
记录用户的登陆信息。