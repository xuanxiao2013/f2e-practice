/**
 *
 * 实现原理：通过深度复制把父类的方法复制一份给子类来实现继承
 * 优点: 子类即能继承父类，又不影响父类，达到真正意义上的继承
 * 缺点: 复杂
 * 改进: inherit3.js
 */

var extend = function(Child, Parent){
    function deepCopy(target, parent){
        target = target || {};
        parent = parent || {};
        var isObject = function (){
            return Object.prototype.toString.apply(arguments[0]).toLowerCase() === '[object object]';
        }
        var isArray = function (){
            return Object.prototype.toString.apply(arguments[0]).toLowerCase() === '[object array]';
        }

        for(var key in parent){
            if(parent.hasOwnProperty(key)){
                var item = parent[key];

                if(isObject(item)){
                    target[key] = isArray(item) ? [] : {};
                    deepCopy(target[key], item);
                }else{
                    target[key] = item;
                }
            }
        }
        return target;
    }
    deepCopy(Child.prototype, Parent.prototype);
    Child.prototype.constructor = Child;
    return Child;
};

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

function Son(){
    Parent.apply(this, arguments);
}
extend(Son, Parent);


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
// 复制过来的当然不是了
log(son instanceof Parent); // false
log(son instanceof Object); // true


log('parent love:' + parent.love.game); // parent love:DoTa
log('son love:' + son.love.game); // son love:DoTa
son.love.game = 'DoTa2';
log('parent love:' + parent.love.game); // parent love:DoTa
log('son love:' + son.love.game); // son love:DoTa2



