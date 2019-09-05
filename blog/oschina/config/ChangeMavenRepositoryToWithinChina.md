# 大概步骤

### 切换到 Maven conf 目录

    ～/conf/setting.xml

### 添加阿里云的 公共镜像

```shell
<mirrors>
    <mirror>
      <id>alimaven</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    </mirror>
  </mirrors>
```
