title: ECMAScript 6 and javascript
speaker: xuanxiao
url: 
transition: move
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: moon
usemathjax: yes

[slide]
cmd: nodeppt start -p 8080 -d /Users/xx/www/github/f2e-practice/es6-share/ppts/index.md  -H 127.0.0.1 -w


[slide]
![es6 and js](/img/ecmascript6.png "es6 and js")

[slide]
![](/img/js.png )

[slide]
## DOM 结构图
----
![](/img/dom.gif )


[slide]
## BOM 结构图
----
![](/img/bom.jpg )


[slide]
## ECMAScript 名词解释
----
<style>
.ecmaScript{
    color: red;
}
</style>
* <span class='ecmaScript'>ECMAScript</span>：一个由 ECMA International （欧洲计算机制造商协会）进行标准化，TC39 委员会进行监督的语言。通常用于指代标准本身。
* <span class='ecmaScript'>ECMAScript 3 (ES3)</span>：ECMAScript 的第三版修订，于 1999 年发布第一个正式版本。
* <span class='ecmaScript'>ECMAScript 5 (ES5)</span>：ECMAScript 的第五版修订，于 2009 年完成标准化。这个规范在所有现代浏览器中都相当完全的实现了。
* <span class='ecmaScript'>ECMAScript 6 (ES6) / ECMAScript 2015 (ES2015)</span>：ECMAScript 的第六版修订，于 2015 年完成标准化。
* <span class='ecmaScript'>ECMAScript 2016( ES7 )</span>：预计的第七版 ECMAScript 修订，计划于明年夏季发布。这份规范具体将包含哪些特性还没有最终确定

[slide]
## ECMAScript3 详细介绍
----

[slide]
## ECMAScript4 介绍
----

[slide]
## ECMAScript5 详细介绍
----

[slide]
## ECMAScript6 特性介绍
----
1. arrows - 箭头函数 
2. classes - 类
3. enhanced object literals - 增强对象字面量
4. template strings - 模板字符串
5. destructuring - 解构
6. default + rest + spread - 默认赋参+不定参数+参数展开
7. let + const - 块级作用域
8. iterators + for..of - 遍历器
9. generators函数
10. unicode - 字符串扩展
11. modules - 模块

[slide]
## ECMAScript6 特性介绍
----
12. module loaders - 模块加载
13. map + set + weakmap + weakset
14. proxies - 代理
15. symbols - 第七种数据类型
16. subclassable built-ins
17. promises对象
18. math + number + string + array + object APIs
19. binary and octal literals - 二进制与八进制字面量
20. reflect api - 反射API
21. tail calls - 尾调用
    
[slide]
## ECMAScript6 对前端影响
![](/img/hax-say.png )
![](/img/yubo-say.png )
![](/img/yubo-say2.png )

react ... 前端流行类库都以开始全面支持es6

[slide]
## ECMAScript6 代码展示
~~~javascript
export default function applyMiddleware(...middlewares) {
  return (next) => (reducer, initialState) => {
    var store = next(reducer, initialState)
    var dispatch = store.dispatch
    var chain = []
    var middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    }
    chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}
~~~

[slide]
## ECMAScript6 代码展示
~~~javascript
export default function compose(...funcs) {
  return arg => funcs.reduceRight((composed, f) => f(composed), arg)
}
~~~

[slide]
## ECMAScript6 对前端影响

前端日益变得复杂，对js的要求更高

设计模式是为了弥补语言的不足

[slide]
## ECMAScript6 环境篇

* [ES6 浏览器兼容](http://kangax.github.io/compat-table/es6/)
* [ES6 to ES5 code](https://github.com/hax/es6-in-action/blob/master/gulpfile.js)
* [babel.js 各种工具插件 ](https://babeljs.io/docs/setup/)


[slide]
## ECMAScript6 - arrow

[slide]
## ECMAScript6 - class


[slide]
## ECMAScript6来了，我们该怎么办?



[slide]

THANK YOU !