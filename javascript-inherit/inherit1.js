/**
 *
 * 实现原理: 修改原型链(子类的原型指向父类的原型)实现继承
 * 优点: 简单
 * 缺点: 子类修改影响父类
 * 改进: inherit2.js  inherit.es6
 */

function Parent(name, age) {
    this.name = name;
    this.age = age;
}
Parent.prototype.getName = function () {
    return this.name;
};
Parent.prototype.getAge = function () {
    return this.age;
};
Parent.prototype.love = {
    game: ['DoTa']
};

Parent.pay = function(){
  return 1000;
};

/*
 // 不调用构造方法实现
function Son(){
    // 如果 Son 的构造方法有参数需要处理，需要调用父类的构造方法
    // 如果没有，可以不调用父类的构造方法
    Parent.apply(this, arguments)
}
Son.prototype = new Parent();
Son.prototype.constructor = Son;
*/

// 调用构造方法实现
function Son(){
    Parent.apply(this, arguments)
}
Son.prototype = Parent.prototype;
Son.prototype.constructor = Son;


var parent = new Parent('jack', 40);
log('parentName:' + parent.getName()); // parentName:jack
var son = new Son('tom', 20);

log(Son.prototype.constructor === Son); // true
log(son instanceof Son); // true
log(son instanceof Parent); // true
log(son instanceof Object); // true


Son.prototype.getName = function(){
    return this.name + ' has good father';
};
log('sonName:' + son.getName()); // sonName:tom has good father
log('parentName:' + parent.getName()); // jack has good father




