const {debounce} = require('./index')

test('debounce',done=>{
    const fn = jest.fn(val=>val)
    const debounced_fn = debounce(fn,16)
    
    var results = [debounced_fn('a'), debounced_fn('b'), debounced_fn('c')];
    // 测试异步执行
    expect(fn.mock.calls.length).toBe(0)
    expect(results).toEqual([undefined,undefined,undefined])
    setTimeout(()=>{
        // 测试防抖(单位时间多次执行只执行最后一次)
        expect(fn.mock.calls.length).toBe(1)
        results = [debounced_fn('d'), debounced_fn('e'), debounced_fn('f')];

    },32)
    setTimeout(()=>{
        expect(fn.mock.calls.length).toBe(2)
        // 测试返回值及参数
        expect(results).toEqual(['c','c','c'])
        done()
    },64)
})

