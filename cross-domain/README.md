####jsonp
这个就是注意回到的函数名容易冲突，最好加上命名空间

####window.name 跨域传递参数
window.name值的长度据说是2M，这个没有真实测过。原理如下：在同一个窗口中，共享window.name的值。跨域传递参数成功的核心就是利用者一点。在a.com/a.html中创建iframe指向b.com/b.com，在b.com/b.com中设置window.name='所需要传递的参数'；等待iframe加载成功，把iframe重新指向a.com/proxy.html, 这个代理页面的内容为空；等待此时iframe加载成功，因为此时同域，就可以获取此时iframe中的window.name的值就是刚才b.com/b.com中传递的参数。这里要注意的就是此窗口中要是还有其它的iframe也使用iframe，就是导致参数传递失败。

应用实例：

- iframe高度自适应

####利用document.domain跨子域post提交
原理如下：就是给两个自域的document.domain 都设置为相同的主语

####嵌套iframe跨主域post提交
原理如下：d.com/login.html iframe嵌套 e.com/login.html,然后在e.com下登陆，此时已经不存在跨域问题。登陆成功后e.com的服务端对d.com的服务端种cookie，然后利用window.top.loaction.href跳转到d.com指定的登陆成功后的跳转地址，d.com读取e.com种的cookie，就知道登陆了，利用这个cookie值就可以在e.dom得到用户的信息。e.com的服务端对d.com的服务端种cookie这个是我同事给我讲得，大概的意思是让1.d.com和1.e.com对应到同一台机器，这时e.com就可以给d.com种上了cookie了，这个没有实地操作。

####利用服务端cookie跨主域post提交
原理如下：h.com/login.html 表单提交返回指向隐藏的iframe, 服务端cookie记录状态, iframe加载成功，发送jsonp请求获取cookie状态，同时移除iframe。

####利用postMessage传递参数
html5 的 postMessage ，可以在不同的 window 之间、甚至在不同域的 window 之间传递数据。 现阶段唯一的问题是浏览器的兼容问题， postMessage 支持 IE8+ 和其他现代浏览器。
postMessage 的使用语法：
window.postMessage( data, targetOrigin)

- window 是目标 window 对象，可以为 iframe 的 contentWindow，或者 window.open 的返回值……
- data 是要传递的数据，字符串类型，可以将复杂的类型序列化为字符串传送
- targetOrigin 是目标域，假如设为 `http://a.com` 那么 `http://b.com` 就不会收到传送的数据
