---
title: Can't bind Nginx port
date: 2015-12-28
tags: essay
---

## 错误概述

> 这个错误真的很坑人，第一次安装然后可能是启动了多起，出现这个错误，80 端口被占用

## 解决方法

> 当然是 把占用 80 端口的的杀掉，当然在这列就是 nginx 自己

```shell
killall -9 nginx
```
