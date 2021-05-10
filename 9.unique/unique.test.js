const {unique}  = require('./index')

test('unique',()=>{
    const arr = [1,2,3,3,2,1,1,'a']
    const res = unique(arr)
    console.log(res);    
    expect(res.length).toBe(4)
    expect(res.includes('a')).toBeTruthy()
    expect(res.includes(1)).toBeTruthy()
    expect(res.includes(2)).toBeTruthy()
    expect(res.includes(3)).toBeTruthy()
})