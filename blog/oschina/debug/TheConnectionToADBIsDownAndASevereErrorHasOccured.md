### 这几天 在写 android 的时候启动 eclipse 后用 genymotion 调试老师出现这个错误

```c
        The connection to adb is down, and a severe error has occured.
        You must restart adb and Eclipse.
        Please ensure that adb is correctly located at 'D:\adt-bundle-windows-x86_64-20140702\sdk\platform-tools\adb.exe' and can be executed.
```

我就纳闷了 我也没干什么坏事，怎么就不行了，经过多方卖查找资料总算知道了。
原来是 genymotion 自带了 adb 然后 eclipse 也带了 adb 两个的端口号还都一样，当你先启动了 genymotion 的 adb 那你的 eclipse 肯定就会报这个错误了。
解决方法就是，你先把 eclipse 的 adb 先启动了，让 genymotion 的 adb 启动不了或者是你把 adb 关了 至于怎么关， 相信你都会了
