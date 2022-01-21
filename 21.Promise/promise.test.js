const {myPromise} = require('./simplePromise.js')



test(`promise的异步特性 执行顺序1`,()=>{
    let str = ''
    let promise = new myPromise(function(resolve, reject) {
        str+='Promsise'
        resolve();
      });
      
      let res = promise.then(function() {
        str+='resolved'
        expect(str).toBe('Promsisehiresolved')
      });
      
      str +='hi'
      return res
})



test(`promise的异步特性 执行顺序2`,()=>{
    let str = ''
    let promise = new myPromise(function(resolve, reject) {
        setTimeout(()=>{
            str+='Promsise'
            resolve();
        })
        
      });
      
      let res = promise.then(function() {
        str+='resolved'
        expect(str).toBe('hiPromsiseresolved')
      });
      
      str +='hi'
      return res
})


test(`1秒后resovle传值  值穿透  链式调用`,()=>{
    let person = new myPromise((resolve,reject)=>{
        setTimeout(()=>resolve(1),1000)
    })
    return person.then(res=>{
        expect(res).toBe(1)
        return 'a'
    }).then(2).then(res=>{
        expect(res).toBe('a')
    })
})