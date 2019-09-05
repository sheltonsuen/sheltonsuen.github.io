# 一.概述

> 在这里我想跟大家分享一下，Window 平台安装配置 Java 开发环境。能力有限，如有不足的地方还请多多指教，不喜勿喷哦！ sheltonsuen@gmail.com only for feedback

# 二.下载 JDK

> Java 以前是 sun 公司的，随着 sun 公司被 oracle 收购，Java 自然就成了 Oracle 公司的产品。所以我们推荐到 Oracle 的官网去下载 Java 安装包,也就是 JDK。当然其他地方下载也是一样的。
> 附上网址：`http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html`
> 附上图片：image lost during migration

# 三.安装 JDK

> 安装 JDK 就像安装普通的软件一样，但是安装过程注意两个地方可以自定义安装目录。建议大家自定义，这样的话方便以后找得到。分别是 JDK 和 JRE 的路径。仅以我的安装路径为例。
> JDK: `D:\Developer\Java\jdk1.8.0_60`
> JRE: `D:\Developer\Java\jre1.8.0_60`

附上图片：image lost during migration

# 四.配置环境变量

> 最后一个步骤就是将 JDK 和 JRE 的目录添加到系统环境变量里面了。需要添加如下三个环境变量。
> 新建 `JAVA_HOME` 系统环境变量 ：`D:\Developer\Java\jdk1.8.0_60`
> 添加 JDK bin 到 path 系统环境变量后面 ：`%JAVA_HOME%\bin`
> 添加 JDK jre\bin 到 path 系统环境变量后面 : `%JAVA_HOME%\jre\bin`

附上图片：image lost during migration.

如有特殊需求 可以将 JRE 也添加到系统环境变量。

# 五.测试 是否安装成功

> 最后一个步骤就是测试自己是否已经安装成功 JDK。测试非常简单只需运行 CMD 然后以此输入如下命令：
> `java -version` > `javac`

如果出现如下图所示的结果就表示安装成功。
Image lost during migration.

如果 `java -version` 不好使则表明你的 JDK 没有安装好。
如果 `javac` 不好使则表示你的环境变量没有配好。
