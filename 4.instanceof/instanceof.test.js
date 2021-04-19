Object.prototype._instanceof = function(o){
    // 这个判断的是原型而不是构造函数，因为方法的构造函数还是方法，会造成无限循环
    // console.log(this);
    let cur = this.__proto__  //让cur指向原型
    while(cur!==null){
        if(cur===o.prototype) {
            return true
        }else{
            cur = cur.__proto__
        }
        
    }
    return false
}




test(`instanceof `,()=>{
    expect([1,2]._instanceof(Array)).toBeTruthy()
    expect([1,2]._instanceof(Object)).toBeTruthy()
    expect([1,2]._instanceof(Function)).toBeFalsy()
    expect({}._instanceof(Array)).toBeFalsy()
    expect({}._instanceof(Object)).toBeTruthy()
    expect({}._instanceof(Function)).toBeFalsy()
    expect('1'._instanceof(Function)).toBeFalsy()
    expect('1'._instanceof(Object)).toBeTruthy() //自动装包 '1'-> String->Object
    expect('1'._instanceof(Number)).toBeFalsy()
    expect('1'._instanceof(String)).toBeTruthy()
    expect(1.._instanceof(Function)).toBeFalsy()
    expect(1.._instanceof(Number)).toBeTruthy()
    expect(1.._instanceof(String)).toBeFalsy()
})