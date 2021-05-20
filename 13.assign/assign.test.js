const {assign}  = require('./index')

const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { b: 5, d: 6 };
const returnedTarget = assign(target, source1, source2)

test('assign',()=>{
    expect(returnedTarget).toEqual({ a: 1, b: 5, c: 5, d:6 })
})
