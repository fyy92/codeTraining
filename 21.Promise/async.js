const getData = () => new Promise(resolve => setTimeout(() => {
    console.log(1)
    resolve("data")
}, 1000))

const it = (function * read() {
    yield getData();
    yield getData();
    return 3
})()




const co = (it)=>{

    return new Promise((resolve,reject)=>{
        function next(val){
            const {value,done}=it.next(val)  //手动next程序到第一个yield的地方
            if(done){ //都已经成功了还有什么好说的，直接返回结果就行了
                resolve(value)
            }else{
                return Promise.resolve(value).then(next,reject)  //核心，看懂co的思想就会了
            }
        }
        next(undefined)
    })
}

co(it).then(res=>{
    console.log(res)
})

