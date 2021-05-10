/**
 * 柯里化
 * 
 * 知识点1：node中全局this指向一个空对象，函数中的this指向一个global对象
 * 
 * 知识点2：这里不能使用箭头函数，会绑定定义时的this,也就是空对象，跑不通测试用例
 * 
 * 知识点3：哪些情况下不能使用箭头函数，需要动态改变this的时候， - 原型方法 - dom绑定 
 * - 字面量定义对象方法（第一层）
 * 
 * // 也就是这样是不行的
 * const calculator = {
    array: [1, 2, 3],
    sum: () => {
            return this.array.reduce((result, item) => result + item);
        }
    };
    // 这样是可以的
    const calculator = {
    array: [1, 2, 3],
    sum: function() {
            return ()=>{
                return this.array.reduce((result, item) => result + item);
            }
        }
    };
 * 
 * 
 * 
 * 
 * 
 *
 * 
 */

// 这种实现无法实现this绑定   
// var curry = fn =>
//     judge = (...args) =>
//         args.length === fn.length
//             ? fn(...args)
//             : (...arg) => judge(...args, ...arg)



const curry = function(fn){
    return function curried(...args){
        if(fn.length===args.length){
            return fn.apply(this,args)
        }else{
            return function(...args1){
                return curried.apply(this,args.concat(args1))
            }
        }
    }
}
module.exports = {
    curry
}
