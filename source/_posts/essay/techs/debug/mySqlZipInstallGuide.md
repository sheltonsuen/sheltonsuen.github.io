---
title: MySql Zip installation
date: 2015-12-28
tags: essay
---

### 第一

你得把 MySQL 的安装目录加到环境变量

### 第二

你得改`my-default.ini`或者`my.ini`配置文件

将

```c
#basedir = .....
#datadir = .....
```

改为

```c
basedir = D:\Environment\mysql-5.6.27-winx64
datadir = D:\Environment\mysql-5.6.27-winx64\data
```

记得一定要把前面的“#”号去掉，不然改了跟没改是一样的，当然这只是简单的配置一下配置文件，如果有特别要求，比如默认字符集等还得再改

### 第三

将 MySql 加到服务

> 这个你一定要注意，我就是在这儿吃的亏，安了一天都没装上。

#### 第一步：你得打开 cmd（记住一定得用管理员权限，不然可能会有权限不足的错误提示）

#### 第二步：切换到 MySql 的安装目录下的 bin 目录下（这个千万的注意，别一打开就运行 mysqld -install，一定得切换到安装目录下的 bin 目录，不然就会出现错误 2, 系统找不到指定文件 的奇葩错误）

#### 第三步： 运行`mysqld -install`命令将 mysql 加到服务里面去

#### 第四： 这也是最后的操作了，通过 `net start mysql`命令将服务启动起来， 当然你也可以到管理工具里面找到 mysql 服务将其启动，到此 mysql 就安装好了
