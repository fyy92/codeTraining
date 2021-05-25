/**
 * 知识点：
   原型:
   - 实例的__proto__指向原型，
   - 原型的constructor指向构造函数
   - 构造函数的prototype属性指向原型
   - Object.__proto__ === Function.prototype Object.prototype.__proto__ = null  
   - Function.__proto__ === Function.prototype Function.prototype.__proto__===Object.prototype
   - 需要掌握的创建对象的方式  组合式   寄生式（在new出的实例上添加方法）
   继承:
   - Student.prototype = Object.create(Person.prototype)
   - Student.prototype.__proto__ = Person.prototype
 */

//  题目：es5实现下面的es6继承

// class Person {
//    constructor(name) {
//         this.name = name
//    }
//    say() {
//         return this.name
//    }
// }
// class Student extends Person{
//     constructor(name,age) {
//         super(name); // 调用父类的constructor(name)
//         this.age = age;
//     }
//     introduce(){
//         return `I am ${this.name} and ${this.age} years old`
//     }
// }


function Person (name){
    this.name = name
}
Person.prototype.say = function(){
    return this.name
}

function Student (name,age){
    Person.call(this,name)
    this.age = age
}

// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student

//或者换成一下写法 不用重写constructor
Student.prototype.__proto__ = Person.prototype



Student.prototype.introduce = function(){
    return `I am ${this.name} and ${this.age} years old`
}






module.exports = {
    Student
}




