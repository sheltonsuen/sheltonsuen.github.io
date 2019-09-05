# 一.概述

> 在这里我想与大家分享简易安装 mysql 到 windows 平台的方法及总结，希望大家能够喜欢，不喜勿喷哦！如有写的不对的地方，还请多多指教：），sheltonsuen@gmail.com only for feedback.

# 二.下载 mysql .zip 包

> 下载 mysql 包的方法有很多，在这里我个人推荐上 oracle 官网上去下载，毕竟 mysql 是 oracle 旗下的。配上图片：）!
> Image lost during migration

# 三.配置 mysql

### 1.解压

> 下载完成过后，将其加压到你想安装的目录，我这里就解压到我的安装目录给大家演示了。
> `D:\Developer\mysql-5.6.27-winx64`

### 2.修改 my-default.ini

> 现在就修改 my-default.ini 的一下配置，这个文件里面有很多配置选项，我就修改必须要修改的两个来给大家演示安装。修改成
> `basedir = D:\Developer\mysql-5.6.27-winx64` > `datadir = D:\Developer\mysql-5.6.27-winx64\data`
> 配上图片方便大家理解：）
> Image lost during migration~

# 四.安装 mysql

> 修改完成后就可以安装 mysql 了，现在需要运行 cmd,进入到 mysql 目录下面的 bin 目录。
> 注意：一定要用管理员的身份运行。
> 运行 这一条命令： `mysqld -install`
> 然后如果安装成功你将会看到:`Service successfully installed.`
> 配上图片: Image lost during migration

> 如果提示 ： `install/remove ....demd` 不记得单词了，这类的那就是权限不够。

> 接下来为了方便你可以将 mysql 加入到系统的环境变量里面去，以便于以后对 mysql 的操作。

> 如果是 mysql_5.7..的话在启动之前一定得记得初始化。使用命令:`mysqld --initilize`
> 最后一步只需要启动服务：`net start MySql`

# 新版本的 mysql （5.7...）

> 命令行执行: mysqld --initialize --user=mysql --console

> 先执行以上命令, 生成库. 注意有个临时密码, 要记下来.

> 然后启动服务,
> 然后再命令行:
> mysql -uroot -p

> 该密码
> set password = password('root')

# 五.推荐工具 Navicat

> 在这里推荐一个个人觉得很好用的可视化工具 Navicat。
> 附上图片 Image lost during migration
> 至于下载地址嘛.`百度一下，你就知道了`：）。
