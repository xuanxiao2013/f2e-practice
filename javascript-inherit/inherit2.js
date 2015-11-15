/**
 *
 * 实现原理: 修改原型链(通过加入临时函数，阻止子类修改父类)实现继承
 * 优点: 子类即能继承父类，又基本不影响父类，达到真正意义上的继承
 * 缺点: 实例的对象和父类原型的对象相同的时候(父类的love)，可能会出现子类修改父类对象
 *      原型中的所有属性被实例共享，共享很适合函数，对基本值的属性也可以（实例上添加同名属性），但是对引用类型的值的属性来说，就会有问题
 * 改进: inherit3.js 或者 把 引用类型的值的属性 写进构造函数
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
/**
 * // es5 新增方法实现
 function Son(){
    Parent.apply(this, arguments);
 }
 Son.prototype = Object.create(Parent.prototype)
 Son.prototype.constructor = Son;
 */

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

var parent = new Parent('jack', 40);
log('parentName:' + parent.getName()); // parentName:jack
var son = new Son('tom', 20);
Son.prototype.getName = function(){
    return this.name + ' has good father';
};
log('sonName:' + son.getName()); // sonName:tom has good father
log('parentName:' + parent.getName()); // parentName:jack


log(Son.prototype.constructor === Son); // true
log(son instanceof Son); // true
log(son instanceof Parent); // true
log(son instanceof Object); // true


log('parent love:' + parent.love.game); // parent love:DoTa
log('son love:' + son.love.game); // son love:DoTa

log('------------------------');

son.love.game = 'DoTa2';
log('parent love:' + parent.love.game); // parent love:DoTa2
log('son love:' + son.love.game); // son love:DoTa2

log('------------------------');
son.love = {
    game: 'DoTa3'
};
log('parent love:' + parent.love.game); // parent love:DoTa2
log('son love:' + son.love.game); // son love:DoTa3
