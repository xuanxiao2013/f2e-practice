

function assign(target, sources) {
    if (target == null) {
        throw new TypeError('Object.assign target cannot be null or undefined');
    }

    var to = Object(target);
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
        var nextSource = arguments[nextIndex];
        if (nextSource == null) {
            continue;
        }

        var from = Object(nextSource);

        // We don't currently support accessors nor proxies. Therefore this
        // copy cannot throw. If we ever supported this then we must handle
        // exceptions and side-effects. We don't support symbols so they won't
        // be transferred.

        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
    }

    return to;
}


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
assign(Son.prototype, Parent.prototype);


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



