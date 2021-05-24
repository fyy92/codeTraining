const _new = (fn,args)=>{
    // const o1 = Object.create(fn.prototype)      创建一个新对象继承fn
    // const o1 = _create(fn.prototype) // 由于这里crete还是用到了new 所以也不是很严谨
    let o1 = {}
    o1.__proto__ = fn.prototype
    const o2 = fn.call(o1,...args)
    return typeof o2==='object'?o2:o1
}

const _create = (o)=>{
    function F (){}
    // const F = ()=>{}  箭头函数不能做构造函数 所以这里不能用这种写法
    F.prototype = o
    return new F()
}


module.exports = {
    _new
}