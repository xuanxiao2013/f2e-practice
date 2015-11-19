title: ECMAScript 6 and javascript
speaker: xuanxiao
url: 
transition: move
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: moon
usemathjax: yes

[slide]
cmd: nodeppt start -p 8080 -d /Users/xx/www/github/f2e-practice/es6-share/ppts/  -H 127.0.0.1 -w


[slide]
![es6 and js](/img/ecmascript6.png "es6 and js")

[slide]
![](/img/js.png )


[slide]
## BOM介绍
----
![](/img/bom.jpg )

[slide]
## DOM介绍
----
![](/img/dom.gif )

* DOM操作：节点查找、创建、插入、删除、复制、替换、html文本或值、样式、属性
* DOM级别: DOM-1、DOM-2、DOM-3
* 核心重点: 事件流、性能

[slide]
## DOM标准
----
![](/img/dom-stds.png )

[DOM Events](http://www.w3.org/TR/tr-technology-stds#tr_DOM_events)

[slide]
## ECMAScript 介绍
----

![](/img/ecmascript.png)
<div class="f16">
* 简单地说，ECMAScript 描述了：语法、类型、语句、关键字、保留字、运算符、对象等内容 {:&.rollIn}
* ECMAScript 是基于对象的：语言的基本部分和宿主设施由对象提供，一个 ECMAScript 程序是一组可通信的对象。
* 每个浏览器都有它自己的 ECMAScript 接口的实现，然后这个实现又被扩展，包含了 DOM 和 BOM。当然还有其他实现并扩展了 ECMAScript 的语言，例如 Windows 脚本宿主（Windows Scripting Host, WSH）、Macromedia 在 Flash 和 Director MX 中的 ActionScript，以及 Nombas ScriptEase。
<div>

[slide]
## ECMAScript 名词解释
----
<style>
.ecmaScript{
    color: red;
}
</style>
<div class="f28">
* **ECMAScript**：一个由 ECMA International （欧洲计算机制造商协会）进行标准化，TC39 委员会进行监督的语言。通常用于指代标准本身。 {:&.rollIn}
* **ECMAScript 3 (ES3)**：ECMAScript 的第三版修订，于 1999 年发布第一个正式版本。
* **ECMAScript 5 (ES5)**：ECMAScript 的第五版修订，于 2009 年完成标准化。这个规范在所有现代浏览器中都相当完全的实现了。
* **ECMAScript 6 (ES6) / ECMAScript 2015 (ES2015)**：ECMAScript 的第六版修订，于 2015 年完成标准化。
* **ECMAScript 2016( ES7 )**：预计的第七版 ECMAScript 修订，计划于明年夏季发布。这份规范具体将包含哪些特性还没有最终确定


[slide]
## ECMAScript3 详细介绍
----
![](/img/ecmascript3.png)

[JavaScript实现ECMAScript](http://www.w3school.com.cn/js/pro_js_implement.asp) 

[slide]
## ECMAScript3 详细介绍
----

* js核心概念  {:&.rollIn}
 * this、函数(bind, call, apply)、闭包、原型、原型链、作用域 {:&.rollIn}
 * 继承、设计模式
* 文章推荐 
  * [ECMA-262-3 in detail](http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/) {:&.rollIn}
  * [深入学习JavaScript](http://goddyzhao.tumblr.com/JavaScript-Internal)
  


[slide]
## ECMAScript4 介绍
----

* hax(贺师俊): ES4被干掉我个人觉得很大程度上是“政治”原因而非技术原因
* 尤雨溪(vue作者): 整体上 web 前端应用化、工程化的趋势不可逆转，对于支持工程化的语言特性需求也确实比当年高。随着 Node.js 的爆发，JS 在后端的需求增长的同时也开始暴露出语言本身对大型工程的不足。根本上来讲，就是 ES4 的时候业界对 js 工程化的需求没有那么高，所以 ES4 那些考量受众不足

<br />
[ECMAScript 6 会重蹈 ECMAScript 4 的覆辙吗？](http://www.zhihu.com/question/24715618)

[slide]
## ECMAScript5 详细介绍
----
* 浏览器支持(Opera 11.60、Internet Explorer 9*、Firefox 4、Safari 5.1**、Chrome 13)
* 严格模式(使用变量前必须先定义，即不允许隐式的全局变量)

~~~javascript
function strict(){
    a = 2;
    console.log(a);
    // 2
}
strict();
~~~
~~~javascript
function strict(){
    "use strict";
    a = 2;
    console.log(a);
    //  ReferenceError: assignment to undeclared variable a
}
strict();
~~~

[slide]
## ECMAScript5 详细介绍
----
内建对象的变化
<br />
![](/img/ecmascript5.png)
<br />
[详细](http://www.cnblogs.com/moveofgod/archive/2012/11/03/2751745.html)

[slide]
## ECMAScript6 特性介绍
----
<div class="f28">
1. arrows - 箭头函数  {:&.rollIn}
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
----
![](/img/hax-say.png )
![](/img/yubo-say.png )
![](/img/yubo-say2.png )

react ... 前端流行类库都以开始全面支持es6

[slide]
## ECMAScript6 代码展示
----
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
----
~~~javascript
export default function compose(...funcs) {
  return arg => funcs.reduceRight((composed, f) => f(composed), arg)
}
~~~

[slide]
## ECMAScript6 代码展示
----
~~~javascript
// es3
function create(proto){
  var F = function(){};
  F.prototype = proto;
  return new F();
}
function Son(){
  Parent.apply(this, arguments);
}
Son.prototype = create(Parent.prototype);
Son.prototype.constructor = Son;
~~~
~~~javascript
// es5
function Son(){
  Parent.apply(this, arguments);
}
Son.prototype = Object.create(Parent.prototype)
Son.prototype.constructor = Son;
~~~
~~~javascript
// es6
class Son extends Parent {
  constructor(...args){
    super(...args);
  }
}
~~~



[slide]
## ECMAScript6 什么时候流行
----

![](/img/ryf.png )

前端日益变得复杂，对js的要求更高

设计模式是为了弥补语言的不足

[slide]
## ECMAScript6 环境篇
----

* [ES6 浏览器兼容](http://kangax.github.io/compat-table/es6/)   {:&.rollIn}
* [ES6 to ES5 code](https://github.com/hax/es6-in-action/blob/master/gulpfile.js)
* [babel.js 各种工具插件 ](https://babeljs.io/docs/setup/)


[slide]
## ECMAScript6 - arrow
----
~~~javascript
var result = values.sort(function(a, b) {
  return a - b;
});
~~~
~~~javascript
var result = values.sort((a, b) => a - b);
var result = values.sort((a, b) =>{
     return  a - b;
});
~~~
[slide]
## ECMAScript6 - arrow 说明
----
<div class="f28">
* 不同点: {:&.rollIn}
  * this: 函数内的this值取决于箭头函数在哪里定义，而不是箭头函数的执行的上下文， this不可变
  * new: 箭头函数不能使用new 关键字来实例化对象，会报错
  * arguments 对象: 不能通过arguments 对象访问参数，只能通过显式命名或者 rest 参数获取 来获取
* 相同点:
  * 对箭头函数进行typeof操作会返回“function”。
  * 箭头函数仍是Function的实例，故而instanceof的执行方式与传统函数一致。
  * 箭头函数没有自己的this，箭头函数中的this值始终来自闭包所在的作用域, call(), apply(), bind()方法在箭头函数上依然可用，虽然没有太大的价值。
* 结论： 推荐使用
[slide]
## ECMAScript6 - class

<div class="columns-2">
    <pre><code class="javascript">
    // es3
    function Point(x,y){
     this.x = x;
     this.y = y;
    }
    Point.prototype.toString = function () {
     return '(' + this.x + ', ' + this.y + ')';
    }
    Point.prototype.radius = function () {
     return 10;
    }
    Point.bgColor = function () {
     return 'red';
    }
    </code></pre>
    <pre><code class="javascript">
    // es6
    class Point {
     constructor(x, y) {
       this.x = x;
       this.y = y;
     }
     toString() {
       return '(' + this.x + ', ' + this.y + ')';
     }
    }
    Point.prototype.radius = function () {
     return 10;
    }
    Point.bgColor = function () {
     return 'red';
    }
    </code></pre>
</div>


[slide]
## ECMAScript6 - class 说明
---
<div class="f28">
* es6 内部定义的方法 不可枚举，但是es5 是可以的    {:&.rollIn}
* class不存在变量提升
* 类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。考虑到未来所有的代码，其实都是运行在模块之中，所以ES6实际上把整个语言升级到了严格模式。
* 静态方法前面添加static 关键字
* 新增new.target属性: 在构造函数中）返回new命令作用于的那个构造函数。如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。
* 通过extends 关键字实现继承
  * 注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。
  * ES5的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。

* 结论： 推荐使用

[slide]
## enhanced object literals - 增强对象字面量
---
~~~javascript
var obj = {
    // __proto__
    __proto__: theProtoObj,
    //  ‘handler: handler’的缩写
    handler,
    // 方法
    // 之前写法: toString: function(){
    // 配合箭头函数:  toString = () => "d " + super.toString();
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // 计算（动态的）属性名
    [ 'prop_' + (() => 42)() ]: 42
};
~~~

<div class="f28" style="text-align:left;line-height:30px;">
* 对象字面量将扩展到可以支持在设置当前对象的prototype对象，对于foo: foo赋值的缩写，定义方法，使用父调用，以及通过表达式计算（动态的）属性名。这些也使得对象字面量和类的声明的关系更加紧密了，基于对象的设计也能从这些相同的便利条件中得到一些益处。
* 结论： 推荐使用

[slide]
## template strings - 模板字符串
---
~~~javascript
// 基本的文字字符串创建
`In JavaScript '\n' is a line-feed.`

// 多行字符串
`In JavaScript this is
 not legal.`

// 字符串插值
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
~~~

结论： 推荐使用

[slide]
## destructuring - 解构
---
<div class="f28" style="text-align:left;line-height:30px;">
解构允许使用模式匹配进行绑定，支持数组和对象的匹配。解构具有容错性，与在标准对象foo["bar"]里面做查询,若找不到则返回undefined这种处理方式相似。

<div class="columns-3">
    <pre><code class="javascript">
    // 数组匹配
    var [a, , b] = [1,2,3];
    log(a) // 1
    log(b) // 3
    // 对象匹配
    var getASTNode = { op: a, lhs: { op: b }, rhs: 'c' }
    // 对象匹配简写
    // 绑定 `op`, `lhs` and `rhs` 进当前作用域
    var {op, lhs, rhs} = getASTNode
    log(op) // 1
    log(lhs) // {op: 3}
    log(rhs) // c
    </code></pre>
    
    <pre><code class="javascript">
    //// 也能用在参数的位置上
    function g({name: x}) {
        console.log(x); // 5
    }
    g({name: 5})
    </code></pre>
    
    <pre><code class="javascript">
    // 解构的容错性
    var [a] = [];
    log(a === undefined); // true
    // 解构具有默认值的容错性
    var [a = 1] = [];
    log(a === 1); // true
    </code></pre>
</div>

结论： 使用情况比较复杂， 有考虑地使用


[slide]
## default + rest + spread - 默认赋参+不定参数+参数展开
---
~~~javascript
function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f(3) == 15
function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6
function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6
~~~
结论： 推荐使用
[slide]
## rest 不定参数说明-函数调用
---
~~~javascript
function push(array, ...items) {
  array.push(...items);
}
var arr = [];
push(arr, 10, 20, 30)
log(arr) // [10, 20, 30]

function add(x, y) {
  return x + y;
}
var numbers = [1, 2, 3];
log(add(...numbers)) // 3
~~~

[slide]
## rest 不定参数说明-合并数组
---
~~~javascript
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];
// ES3的合并数组
arr1.concat(arr2, arr3));
// [ 'a', 'b', 'c', 'd', 'e' ]
// ES6的合并数组
[...arr1, ...arr2, ...arr3]
~~~

[slide]
## rest 不定参数说明-和解构赋值结合
---
~~~javascript
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest // [2, 3, 4, 5]

function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f(3) == 15
function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6
function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6
~~~

[slide]
## let + const - 块级作用域
---

<style>
.pageLetConst pre code{
    margin-top:20px;
}
</style>
<div class="txtLeft pageLetConst">
块级作用域绑定构造体。let是新的var。 const是单次赋值。静态的约束使得变量要在赋值之后才可使用。
~~~javascript
function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      x = "foo";
    }
    // error, already declared in block
    let x = "inner";
  }
}
~~~

[slide]
## let + const - 块级作用域
---
<div class="columns-3">
    <pre><code class="javascript">
     // 不存在变量提升
     console.log(foo); // ReferenceError
     let foo = 2;
    </code></pre>
    <pre><code class="javascript">
      //不允许重复声明
      // 报错
      function test() {
        let a = 10;
        var a = 1;
      }
      // 报错
      function test() {
        let a = 10;
        let a = 1;
      }
      
      function func(arg) {
        let arg; // 报错
      }
      function func(arg) {
        {
          let arg; // 不报错
        }
      }
    </code></pre>
    <pre><code class="javascript">
        // 块级作用域
        function f1() {
          let n = 5;
          if (true) {
            let n = 10;
          }
          console.log(n); // 5
        }
        // IIFE写法
        (function () {
          var tmp = ...;
          ...
        }());
        // 块级作用域写法
        {
          let tmp = ...;
          ...
        }
    </code></pre>
</div>


* 结论： 推荐使用

[slide]
## iterators + for..of - 遍历器
---
<div class="columns-2">
    <pre><code class="javascript">
    for (var index in myArray) {
      console.log(myArray[index]);
    }
    </code></pre>
    <pre><code class="javascript">
    for (let value of myArray) {
      console.log(value);
    }
    </code></pre>
</div>

<div class="f28" style="text-align:left;">
* for...in循环有几个缺点。
  * 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
  * for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
  * 某些情况下，for...in循环会以任意顺序遍历键名。
* for...of循环相比上面几种做法，有一些显著的优点。
  * 有着同for...in一样的简洁语法，但是没有for...in那些缺点。
  * 不同用于forEach方法，它可以与break、continue和return配合使用。
  * 提供了遍历所有数据结构的统一操作接口。
* 结论： 使用情况比较复杂， 有考虑地使用

[slide]
## generators函数
---

* 结论： 慎重地使用


[slide]
## unicode - 字符串扩展
---
* 基本没什么影响，我们很少遇到这些情况且已经习惯了这些情况，所以可以认为这个特性不存在而继续开发。

* 结论： 不使用

[slide]
## modules - 模块
---
<div class="columns-2">
    <pre><code class="javascript">
    // lib/math.js
    export function sum(x, y) {
      return x + y;
    }
    export var pi = 3.141593;
    // app.js
    import * as math from "lib/math";
    alert("2π = " + math.sum(math.pi, math.pi));
    // otherApp.js
    import {sum, pi} from "lib/math";
    alert("2π = " + sum(pi, pi));
    </code></pre>
    <pre><code class="javascript">
    // lib/math.js
    export * from "lib/math";
    export var e = 2.71828182846;
    export default function(x) {
        return Math.log(x);
    }
    // app.js
    import ln, {pi, e} from "lib/mathplusplus";
    alert("2π = " + ln(e)*pi*2);
    </code></pre>
</div>

<br />
* 结论： 使用情况比较复杂， 有考虑地使用
[slide]
## module loaders - 模块加载
---
<div class="f28" style="line-height:30px;">
* ES6终于在语言层面上定义了模块的语法，但这并不代表我们现在可以使用ES6的模块，因为实际在ES6定稿的时候，它把模块加载器的规范给移除了。因此我们现在有的仅仅是一个模块的import和export语法，但具体如“模块名如何对应到URL”、“如何异步/同步加载模块”、“如何按需加载模块”等这些均没有明确的定义。

* 因此，在模块这一块，我们的建议是使用标准语法书写模块，但使用AMD作为运行时模块解决方案，其特点有：
  * 保持使用import和export进行模块的引入和定义，可以安全地使用命名export和默认export。
  * 在使用Babel转换时，配置modules: 'amd'转换为AMD的模块定义。
  * 假定模块的URL解析是AMD的标准，import对应的模块名均以AMD标准书写。
  * 不要依赖SystemJS这样的ES6模块加载器。
* 这虽然很可能导致真正模块加载器规范定型后，我们的import模块路径是不规范的。但出于ES6的模块不配合HTTP/2简直没法完的考虑，AMD一定很长一段时间内持续存在，我们的应用基本上都是等不到HTTP/2实际可用的日子的，所以无需担心。
* 结论： 不使用

[slide]
## map + set + weakmap + weakset
---
~~~javascript
// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set
~~~
<div class="f28" style="line-height:30px;text-align:left;">
* WeakMap和WeakSet是没有办法模拟实现的，因此不要使用。
* 结论： 使用情况比较复杂， 有考虑地使用
[slide]
## proxies - 代理
---
代理可以创造一个具备宿主对象全部可用行为的对象。可用于拦截、对象虚拟化、日志/分析等。
~~~javascript
// Proxying a normal object
var target = {};
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`;
  }
};

var p = new Proxy(target, handler);
p.world === 'Hello, world!';
~~~

结论： 不使用
[slide]
## symbols - 第七种数据类型
---
* Symbol最简单的解释是“可用于键值的对象”，最大的用处可能就是用来定义一些私有属性了。
* 我们建议谨慎使用Symbol，如果你使用它来定义私有属性，那么请保持整个项目内是一致的，不要混用Symbol和闭包定义私有属性等手段。
* 结论：慎重地使用
[slide]
## subclassable built-ins
---
~~~javascript
// Pseudo-code of Array
class Array {
    constructor(...args) { /* ... */ }
    static [Symbol.create]() {
        // Install special [[DefineOwnProperty]]
        // to magically update 'length'
    }
}

// User code of Array subclass
class MyArray extends Array {
    constructor(...args) { super(...args); }
}

// Two-phase 'new':
// 1) Call @@create to allocate object
// 2) Invoke constructor on new instance
var arr = new MyArray();
arr[1] = 12;
arr.length == 2
~~~

* 按照ES6的规范，内置类型如Array、Function、Date等都是可以继承且没有什么坑的。但是我们的代码要跑在ES3-5的环境下，显然这一特性是不能享受的。
* 结论： 不使用

[slide]
## promises对象
---
~~~javascript
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})
~~~

结论： 推荐使用

[slide]
## math + number + string + array + object APIs
---
<div class="txtLeft" style="margin-bottom:20px;">
新加入了许多库，包括核心数学库，进行数组转换的协助函数，字符串 helper，以及用来进行拷贝的Object.assign。
</div>
~~~javascript
Number.EPSILON
Number.isInteger(Infinity) // false
Number.isNaN("NaN") // false

Math.acosh(3) // 1.762747174039086
Math.hypot(3, 4) // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

"abcde".includes("cd") // true
"abc".repeat(3) // "abcabcabc"

Array.from(document.querySelectorAll('*')) // Returns a real Array
Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
[0, 0, 0].fill(7, 1) // [0,7,7]
[1, 2, 3].find(x => x == 3) // 3
[1, 2, 3].findIndex(x => x == 2) // 1
[1, 2, 3, 4, 5].copyWithin(3, 0) // [1, 2, 3, 1, 2]
["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
["a", "b", "c"].keys() // iterator 0, 1, 2
["a", "b", "c"].values() // iterator "a", "b", "c"

Object.assign(Point, { origin: new Point(0,0) })
~~~

结论： 使用

[slide]
## binary and octal literals - 二进制与八进制字面量
---
* 这个特性基本上是留给算法一族用的，因此我们的建议是除非数字本身在二/八进制下才有含义，否则不要使用。
* 结论：慎重地使用

[slide]
## reflect api - 反射API
---
结论： 不使用

[slide]
## tail calls - 尾调用
---
保证尾部调用时栈不会无限增长，这使得递归算法在面对未作限制的输入时，能够安全地执行。
~~~javascript
function factorial(n, acc = 1) {
    'use strict';
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

// Stack overflow in most implementations today,
// but safe on arbitrary inputs in ES6
// 栈溢出存在于现在绝大多数的实现中，
// 但是在 ES6 中，针对任意的输入都很安全
factorial(100000)
~~~
结论： 使用情况比较复杂， 有考虑地使用

[slide]
##参考
---

<div class="txtLeft f28" style="margin-bottom:20px;">
* ECMAScript 入门: http://es6.ruanyifeng.com/#README
* es6 特性：https://github.com/rse/es6-features
* es6转es5: https://babeljs.io/
* 透过es6看js的未来: http://johnhax.net/2014/es6-js-future/
* es6 测试题： http://perfectionkills.com/javascript-quiz-es6/,
* es6 测试题答案： https://gist.github.com/DmitrySoshnikov/3928607cb8fdba42e712
* 深入浅出es6系列：https://hacks.mozilla.org/category/es6-in-depth/
* es6标准 网站: http://www.ecma-international.org/ecma-262/6.0/
* 浏览器兼容: http://kangax.github.io/compat-table/es6/
* 在线学习网站： 
    * http://www.es6fiddle.net/  
    * http://learnharmony.org/#lessons/destructuring    
    * http://learnharmony.org/
* es6 资料汇集： https://github.com/ericdouglas/ES6-Learning
* es6 在线书籍： 
    * https://leanpub.com/javascriptallongesix/read
    * http://chimera.labs.oreilly.com/books/1234000001623/index.html
    * https://leanpub.com/understandinges6/read/
* 给 JavaScript 初心者的 ES2015 实战: http://gank.io/post/564151c1f1df1210001c9161

[slide]

THANK YOU !