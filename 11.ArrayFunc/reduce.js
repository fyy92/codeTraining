/**
 * Array.prototype.reducd(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, initialValue])
    callback
        生成新数组元素的函数，使用三个参数：
        accumulator
            累计器累计回调的返回值; 它是上一次调用回调时返回的累积值
        currentValue
            数组中正在处理的元素。
        index 可选
            数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
        array 可选
            调用reduce()的数组
    initialValue
        作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 
        在没有初始值的空数组上调用 reduce 将报错。
 */
// 关于this，由于箭头函数没有自己的this,所以通过call() 或 apply() 方法调用一个函数时，
//只能传递参数（不能绑定this），他们的第一个参数会被忽略。    
//原生map里面callback如果是箭头函数也不支持this

const reduce = function(callback,initiaValue){
    if (this == undefined) {
        throw new TypeError('this is null or not defined');
      }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    let pre = initiaValue?initiaValue:this[0]
    for(var i = initiaValue?0:1;i<this.length;i++){
        pre = callback(pre,this[i],i,this)
    }
    return pre
    

}


module.exports = {
    reduce
}