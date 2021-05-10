const{curry} = require('./index')

test('curry',()=>{
    const add = (a,b,c)=>{
        return a+b+c
    }
    const sayhi = function(){
        return this.name
    }
    const curry_add = curry(add)
    const curry_sayhi = curry(sayhi)
    const obj = {name:'fyy'}
    expect(curry_sayhi.call(obj)).toBe('fyy')
    expect(curry_add(2)(3)(4)).toBe(9)
    expect(curry_add(1)(2,3)).toBe(6)
    expect(curry_add(1,2)(2)).toBe(5)
    expect(curry_add(1,2,1)).toBe(4)
})



