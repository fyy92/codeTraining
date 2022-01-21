/***
 * 简化 
 * 1、忽略环形链表
 * 2、简化x的检测
 * 3、不对catch做判断
 */
let resolvePromise = (x, resolve, reject) => {
    if (x instanceof Promise) {
        try {
            x.then(resolve, reject)
        } catch (e) {
            reject(e)
        }
    } else {
        resolve(x)
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
            // ...
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFulfilled, onRejected) {
         // 值穿透处理  所以为什么会值穿透？如果是普通值 就封装成一个函数 所以传递的是上一个then的结果 
         onFulfilled = typeof onfulfilled === 'function'  ? onFulfilled : value => value;
        return new Promise((resolve, reject) => {
            const fn = () => {
                try {
                    let x = onFulfilled(this.value)
                    resolvePromise(x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }
            if (this.status === 'fulfilled') {
                queueMicrotask(fn)
            }
            // if (this.status === 'rejected') {
            //     // ...
            // }
            if (this.status === 'pending') {
                this.onFulfilledCallback.push(() => {
                    queueMicrotask(fn)
                })
                // this.onRejectedCallback.push(() => {
                //     //...
                // })
            }
        })
    }
}
module.exports = {
    myPromise
}

/*特别注意finally手写*/
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
      value  => P.resolve(callback()).then(() => value),
      reason => P.resolve(callback()).then(() => { throw reason })
    );
  };

//上面代码中，不管前面的 Promise 是fulfilled还是rejected，都会执行回调函数callback。
//从上面的实现还可以看到，finally方法总是会返回原来的值。 就是finally后面还可以接着then