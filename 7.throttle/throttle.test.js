const {throttle} = require('./index')

/*
 *   注意这里写的是简化版测试用例 也就是 options.leading=true, options.trailing=false
*/ 
test('throttle',done=>{
    const fn = jest.fn(val=>val)
    const debounced_fn = throttle(fn,16)
    results = [debounced_fn('a'), debounced_fn('b')];
    expect(results).toEqual(['a', 'a']);
    expect(fn.mock.calls.length).toBe(1)


    setTimeout(function() {
        var results = [debounced_fn('c'), debounced_fn('d')];
        expect(results).toEqual(['c', 'c']);
        done();
      }, 64);
})

