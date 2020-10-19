---
title: Centos7 config Nginx
date: 2015-12-28
tags: essay
---

## 概述

> 以前觉得在 CentOS 上面安装配置 Nginx 肯定麻烦，所以一直没有动。今天试了一下发现还挺简单的，只需要几步就 OK。

## 安装 Nginx

> Nginx 官网给出了详细的安装教程，安装 Nginx
> 总结了一些 CentOS 上面的安装步骤：

### 配置 yum 源：

1. 需要在新建 `/etc/yum.repos.d/nginx.repo` 文件，
2. 并且编辑文件内容为：

```shell
 [nginx] name=nginx repo
baseurl=http://nginx.org/packages/mainline/centos/7/$basearch/
gpgcheck=0
enabled=1
```

3. 安装 Nginx 只需执行命令：`yum -y install nginx`
4. 启动 Nginx
   下面总结了一些启动 Nginx 的命令：

```shell
systemctl start nginx.service //启动apache
systemctl stop nginx.service //停止apache
systemctl restart nginx.service //重启apache
systemctl enable nginx.service //设置apache开机启动
```

## 修改配置文件

如果有特殊要求可以修改 `/etc/nginx/`下面相应的配置文件
