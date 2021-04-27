const shallowClone =(obj)=>{
    return {...obj}
}

const deepClone = (obj,hash=new WeakMap())=>{
    // return JSON.parse(JSON.stringify(obj))   这个做也不能处理循环引用
    if(obj==undefined) return  undefined
    if(obj instanceof RegExp) return  new RegExp(obj)
    if(obj instanceof Date) return  new Date(obj)
    if(typeof obj !=='object') return obj
    if(hash.get(obj)) return hash.get(obj)  //把已经处理好的结果返回
    let newObj = new obj.constructor()
    hash.set(obj,newObj)
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = deepClone(obj[key],hash)
        }  
    }
    return newObj

}




module.exports = {
    deepClone,
    shallowClone
}


