const {deepClone,shallowClone} = require('./index')



test(`deepClone `,()=>{
    var obj = {
        name: 'fyy',
        friend: {
            company: '张三',
        }
    }
    // 循环引用   不能直接在对象上定义，否则是undefined（声明的时候）
    obj.self = obj
    
    var obj1 = deepClone(obj)
    var obj2 = shallowClone(obj)

    // 改变原来的值  
    obj.friend.company = '李四'
    expect(obj1.friend.company).toBe('张三')
    expect(obj2.friend.company).toBe('李四')
})