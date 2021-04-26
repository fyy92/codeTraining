var _ = require('lodash')



const fn = val=>val
const d_fn = _.debounce(fn)
let count = 1
let res
let t = setInterval(() => {
    res = d_fn(count++)
    console.log(res);
    if(res>=5) {
        clearInterval(t)
    }
}, 1000);