// 严谨一点的写法是 随机一个方法名避免冲突(现在用symbol)，调用之后再删除掉

const call = function(thisArg,...args){
    const s = Symbol()
    thisArg[s] = this
    let res =  thisArg[s](...args)
    delete thisArg[s]
    return res
}



const bind = function(thisArg,...preargs){ //预设函数变量，类似偏函数
    // 必须要用箭头函数，因为这里是闭包，否则无法固化this,指向global变量
    return (...args)=>this.call(thisArg,...preargs,...args)
}


module.exports = {
    call,
    bind
}


