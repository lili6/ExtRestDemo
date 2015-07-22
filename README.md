# ExtRestDemo
1、ExtJsWeb 客户端 2、SpringRestServer 服务器 提供restful服务

运行SpringRestServer，启动服务器端
mvn jetty:run 

运行ExtJSWeb ，启动客户端
mvn jetty:run -Djetty.port=8081

访问http://localhost:8081/ExtJSWeb

username和password任意输入超过4位即可，提交表单。
