/**
 * ES6 实现继承， 和inherit.js 的原理、有点、缺点都一样，这就说明可为啥ES6 的 Class 是个语法糖了
 */

class Parent{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
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

class Son extends Parent {
    constructor(...args){
        super(...args);
    }
}

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
log(son instanceof Parent); // false
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



