/**
 * 防抖 延迟执行   适用：搜索框 输入框
 */

let debounce = function(fn,delay=100){
    let t
    return (...args)=>{
        if(!t){
            // fn绑定的是这里的this
            t = setTimeout(()=>{
                fn(...args)
                clearTimeout(t)
            },delay)
        }
    }
    
}
const fn = val=>val
const d_fn = debounce(fn,32)
d_fn('a');

setTimeout(function() {
    console.log(1,d_fn('b'));
}, 64);

setTimeout(function() {
    console.log(1,d_fn('c'));
}, 128);




module.exports = {
    debounce
}