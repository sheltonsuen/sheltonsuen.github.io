# 概述

> 尽管一般表单提交足以满足对典型的基本文本提交，但是当面对传送二进制数据，例如图片，视频等就显得力不从心了。与之不同的是，multipart 格式的数据会将一个表单拆分为多个部分 ，每个部分对应一个输入域。在一般的表单输入域中，它所对应的部分会放置文本型数据，但是如果是上传文件的话，所对应的就是二进制。

### 修改表单

> 首先你得修改你的表单，告诉浏览器以 multipart 数据的形式提交表单，而不是以表单数据的形式提交。

```html
<form method="POST" enctype="multipart/form-data">
  <!---
    your form
    -->
</form>
```

### 配置 multipart 解析器

> DispatcherServlet 并没有实现任何解析 multipart 请求数据的功能。它将该功能委托给了 MultipartResolver 策略接口的实现，通过这个实现类来解析 multipart 请求中的内容。从 Spring 3.1 开始,Spring 内置的两个 MultipartResolver:

- CommonsMultipartResolver：使用 Jakarta Commons FileUpload 解析。
- StandardServletMultipartResolver ： 依赖 Servlet 3.0 对 Multipart 的支持。

#### StandardServletMultipartResolver

1. 将其声明位 Spring 上下文中的一个 Bean

```java
   @Bean
    public MultipartResolver multipartResolver() throws IOException {
        return new StandardServletMultipartResolver();
    }
```

2. 配置 StandardServletMultipartResolver

```java
public class ZKepsWebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    //....other code
    @Override
    protected void customizeRegistration(ServletRegistration.Dynamic registration) {
        //缓存目录 这里可以做很多配置，例如上传文件的大小等
        registration.setMultipartConfig(new MultipartConfigElement("/var/local/tmp"));
    }
}
```

#### CommonsMultipartResolver

> 这个配置可以一气呵成

```java
    @Bean
    public MultipartResolver multipartResolver() throws IOException{
        //同样的 可以配置很多参数
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
        multipartResolver.setUploadTempDir(new FileSystemResource("/var/local/tmp"));
        return multipartResolver;
    }
```

### 处理 multipart 请求

> Spring 提供了一个 MultipartFile 接口，它为处理 multipart 数据提供了内容丰富的对象。所以可以改写你的 Controller 了。

```java
    @RequestMapping(value = "/detailRegister", method = RequestMethod.POST)
    public String detailRegister(@RequestPart("avator") MultipartFile avator) {
        //MultipartFile 接口有很多方法，这只是其中一个。
        try {
            avator.transferTo(
                    new File("/var/local/avators/" + avator.getOriginalFilename())
            );
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "index";
    }
```
