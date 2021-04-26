const {debounce} = require('./index')

const fn = jest.fn(function(){
    return this
});
const d_fn = debounce(fn)



describe('debounce', function() {
    it('不断延迟执行',done=>{
        const fn = jest.fn()
        fn()
        fn()
        fn()
        // var obj = {name:'张三'}
        // d_fn.call(obj,'a')
        // d_fn.call(obj,'b')
        // 1 延迟执行
        setTimeout(()=>{
            expect(fn.mock.calls.length).toBe(1)
            // 
            // expect(fn.mock.calls[0][0]).toBe('a')
            // expect(fn.mock.results[0]).toEqual(obj)
            done()
        },1000)
    })
})
