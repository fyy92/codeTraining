let resolvePromise = (promise2, x, resolve, reject) => {
    // 监测到环形链
    console.log(x);
    // if(promise2===x) return new TypeError('chaining cycle detected for promise')
    // if(typeof x ==='function' ||(typeof x ==='object' && x!==null)){
    //     try{
    //         //尝试取出then，有问题报错
    //         let then = x.then
    //         if(typeof then === 'function'){ //这里是最绕的，想清楚promise2和x的关系,x.then会不会执行取决于使用者的逻辑,会不会在第一个then中回调函数中返回的promise中调用它的resolve改变状态
    //             then.call(x,resolve,reject)
    //         }else{// then不是function
    //             resolve(x)
    //         }
    //     }catch (e) {
    //         reject(e)
    //     }
    // }else{ //普通类型
    //     resolve(x)
    // }
    //------------------简化一下 

    if(x instanceof Promise){
        try{
            x.then(resolve,reject) // 根据问题1 这个then中res是上一个then的
        }catch (e) {
            reject(e)
        }
    }else{ //普通类型
        resolve(x) //根据问题1 ，这个x传入下一个then的成功回调中
    }
}

class myPromise {
    constructor(executor) {
        this.status = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallback = []
        this.onRejectedCallback = []
        let resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = value
                this.onFulfilledCallback.forEach(fn => fn(this.value))
            }

        }
        let reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason
                this.onRejectedCallback.forEach(fn => fn(this.reason))
            }
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }

    }

    then(onFulfilled, onRejected) { // 如果then的时候 根据当前状态执行成功或者失败
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === 'fulfilled') {
                setTimeout(() => { //这里之所以异步是因为必须保证resolvePromise(promise2, x, resolve, reject)时Promise2创建完成
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
            if (this.status === 'rejected') {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
            if (this.status === 'pending') {
                this.onFulfilledCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    })

                })
                this.onRejectedCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
            }
        })
        return promise2
    }

}

new myPromise((resolve,reject)=>{
    resolve(1)
}).then(res=>{
    return Promise.resolve('return promise')
}).then(res=>{
    console.log('自己的promisie',res);
})

new Promise((resolve,reject)=>{
    resolve(1)
}).then(res=>{
    return Promise.resolve('return promise')
}).then(res=>{
    console.log('原生promisie',res);
})


/**
 * 问题1 then成功回调接受的参数为什么是resolve中的参数
 * resolve(value)的时候 this.value=value   
 * 然后执行成功回调队列中的成功函数，把this.value传过去了 this.onFulfilledCallback.forEach(fn => fn(this.value))
 * 
 * => 所以只要'当前'调用resolve状态改变了，'下一个then'的成功回调中的参数只能是resolve传入的参数
 * 
 * 
 * 
 * */