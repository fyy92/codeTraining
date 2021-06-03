// 实现一个简版commonjs  
//1、基础功能  2、缓存
 
// 知识点：模块中的this是module.exports（在最开始初始化后是空对象）
// 实现一个简版commonjs 
// 实现一个简版commonjs 



const { readFileSync } = require('fs')
const path = require('path')
const vm = require('vm')
class Module{
    constructor(id){
        this.id = id,
        this.exports = {}
    }
}
Module._cache = {};

const req = (filePath)=>{
    const abspath = path.resolve(__dirname,filePath)
    if(Module._cache[abspath]){
        return Module._cache[abspath].exports
    }
    const content = readFileSync(abspath)
    let module = new Module(abspath)
    Module._cache[abspath] = module
    const script = `(function(exports,module,req){
        ${content}
    })` // 函数执行需要加括号
    let fn = vm.runInThisContext(script)
    fn.call(module.exports,module.exports,module,req)
    return module.exports
}
module.exports ={
    req
}

