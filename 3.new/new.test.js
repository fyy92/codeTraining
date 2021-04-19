const {_new} = require('./index')


function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.say = function(){
    return `${this.name},${this.age}`
}



test(`new `,()=>{
    let person = _new (Person,['fyy',29])
    expect(person.name).toBe('fyy')
    expect(person.age).toBe(29)
    expect(person.say()).toBe('fyy,29')
})