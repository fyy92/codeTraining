/**
 * 节流 控制函数触发频率
 * 注意这里写的是简化版测试用例 也就是 options.leading=true, options.trailing=false   
 */
//  let throttle = require('lodash').throttle
let throttle = function(fn,frequency){
    let lastTime = 0,res
    return (...args)=>{
            let currentTime = +new Date()
            if(currentTime-lastTime>frequency){
                res = fn(...args)
                lastTime = currentTime
            }
            return res
    }   
}

module.exports = {
    throttle
}