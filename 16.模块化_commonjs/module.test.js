const {req}  = require('./index.js')

test('commonjs_req',()=>{
    const mod = req('./a.js')
    expect(mod.counter).toBe(3)
    mod.add(); 
    expect(mod.counter).toBe(4)
    const mod1 = req('./a.js')
    expect(mod1.counter).toBe(4)
})
