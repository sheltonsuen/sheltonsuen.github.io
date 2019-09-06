---
title: Force Point to Google
date: 2015-12-28
tags: essay
---

# 一.概述

首先声明，在这里我只是给大家分享一个翻墙的方法，以便于更好的学习，请大家不要挪作他用。嘿嘿，能力有限，还请大神们多多指教，不喜勿喷哦！ kensoon918@163.com `only for feedback.`

翻墙的方法有很多，给我的感觉用的比较多的应该是 vpn。但是 vpn 大多是要钱的。。。所以在这里给大家分享一个不要钱的方法，那就是更改 host 文件，来跳过域名长城防火墙。

# 二.下载 host 文件

要通过更改 host 文件的方法来翻墙的话，首先你得下载一个可用的 host 文件。给大家提供一个长期更新可用 host 文件的网址。
> 老 D ：`http://laod.cn/hosts/2016-google-hosts.html`
> 配上图片：Image lost during migration
> 然后根据网站的提示下载相应的 host 文件。

# 三.修改 host 文件

> 将刚刚下载好的 host 文件解压后得到 hsot 文件。
> 配上图片：Image lost during migration

然后用这个文件去替换 相应系统的 host 文件
Windows 系统 hosts 位于 : `C:\Windows\System32\drivers\etc\hosts`
Android（安卓）系统 hosts 位于: `/system/etc/hosts`
Mac（苹果电脑）系统 hosts 跟 Linux 一样位于: `/etc/hosts`
iPhone（iOS）系统 hosts 跟 Linux Mac 一样位于: `/etc/hosts`
Linux 系统 hosts 位于: `/etc/hosts`

更改完成过后就差最后一步了，那就是你在访问国外被墙的网站的时候记得用 `https` 加密方式访问，不然又被墙了。
配上图片：Image lost during migration

# 四.维护

这个方法没有 vpn 方法方便就在于，需要定期更换可用的 host 文件。有一些 host 文件过一段时间就没办法用了。

> This post is too old, and right now I perfer to use VPN or SS.
