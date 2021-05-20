//Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。


const assign = function(target,...sources){
    // return {...target,...source}
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object')
    }
    let res = Object(target)  //因为会返回一个新的指针
    sources.forEach(obj=>{
        if(obj!=null){
            for(var key in obj){
                if(obj.hasOwnProperty(key)){
                    res[key] = obj[key]
                }
            }
        }
    })
    return res

}

module.exports = {
    assign
}