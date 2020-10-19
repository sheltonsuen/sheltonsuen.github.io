---
title: Generate SHA1 using Android Studio
date: 2015-12-28
tags: essay
---

# 概述

> 因为在百度开发者平台创建应用的时候，需要发布版和开发版 SHA1，所以才急着学了以下。不难，只需要在 Android Studio 的 Terminal 里面输入相应的命令就行。

### 获得开发版 SHA1

获得开发版 SHA1 需要输入如下命令：

```java
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

### 获得发布版 SHA1

获得发布版 SHA1 需要输入如下命令：

```java
keytool -list -v -keystore 签名路径
```
