const {_flat} = require('./index')

test('test _flat',()=>{
    const arr = [1, [2, [3, [4, 5]]], 6]
    const res1 = _flat(arr,1)
    const res2 = _flat(arr,2)
    const res3 = _flat(arr,3)
    const res4 = _flat(arr,4)
    expect(res1).toEqual([1,2,[3,[4,5]],6])
    expect(res2).toEqual([1,2,3,[4,5],6])
    expect(res3).toEqual([1,2,3,4,5,6])
    expect(res4).toEqual([1,2,3,4,5,6])
})