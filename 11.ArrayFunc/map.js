/**
 * Array.prototype.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg])
    callback
        生成新数组元素的函数，使用三个参数：
        currentValue
            callback 数组中正在处理的当前元素。
        index可选
            callback 数组中正在处理的当前元素的索引。
        array可选
            map 方法调用的数组。
        thisArg可选
            执行 callback 函数时值被用作this。 默认undefined
 */
// 关于this，由于箭头函数没有自己的this,所以通过call() 或 apply() 方法调用一个函数时，
//只能传递参数（不能绑定this），他们的第一个参数会被忽略。    
//原生map里面callback如果是箭头函数也不支持this

const map = function(callback,thisArg){
    if (this == undefined) {
        throw new TypeError('this is null or not defined');
      }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    let res = []
    for(var i=0;i<this.length;i++){
        res.push(callback.call(thisArg,this[i],i,this))
    }
    return res

}


module.exports = {
    map
}