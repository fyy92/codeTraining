/**
 * 防抖 延迟执行   适用：搜索框 输入框
 //这里做了简化，写的默认options.leading=false options.trailing=true的版本
 */


let debounce = function(fn,delay){
    let timer,res
    return (...args)=>{
            // fn绑定的是这里的this
            clearTimeout(timer)
            timer = setTimeout(()=>{
                res = fn(...args)
            },delay)
        return res
    }
    
}
// let debounce = require('lodash').debounce
module.exports = {
    debounce
}