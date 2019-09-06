---
title: Ubuntu can't install StarUML
date: 2015-12-28
tags: essay
---

### 错误信息

```shell
$ sudo dpkg -i StarUML-v2.7.0-64-bit.deb
Selecting previously unselected package staruml.
(Reading database ... 212003 files and directories currently installed.)
Preparing to unpack StarUML-v2.7.0-64-bit.deb ...
Unpacking staruml (2.7.0) ...
dpkg: dependency problems prevent configuration of staruml:
 staruml depends on libgcrypt11 (>= 1.4.5); however:
  Package libgcrypt11 is not installed.

dpkg: error processing package staruml (--install):
 dependency problems - leaving unconfigured
Processing triggers for hicolor-icon-theme (0.15-0ubuntu1) ...
Errors were encountered while processing:
 staruml
```

### 解决方法

#### 1.Download libgcrypt11_1.5.3 from:

> https://launchpad.net/ubuntu/+archive/primary/+files/libgcrypt11_1.5.3-2ubuntu4.2_amd64.deb

#### 2.Install lib with dpkg

```shell
sudo dpkg -i libgcrypt11_1.5.3-2ubuntu4.2_amd64.deb
```

#### 3.Install StarUML with dpkg

```shell
sudo dpkg -i StarUML-v2.7.0-64-bit.deb
```

### 如果还是不行的话

#### 1.首先修正一下依赖

```shell
apt-get -f install
```

#### 2.重复上述方法
