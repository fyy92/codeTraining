const {Student}  = require('./index')

test('test class',()=>{
    const std = new Student('fyy',29)
    expect(std.introduce()).toBe('I am fyy and 29 years old')
    expect(std.say()).toBe('fyy')
    expect(std.constructor.name).toBe('Student')
})