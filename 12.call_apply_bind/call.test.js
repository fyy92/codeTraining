const {
    call,
    bind
} =  require('./index')

test('call',()=>{
    Function.prototype._call = call
    const dofn = function(...args){
       return `${this.name} is ${args.join(' and ')}`;
    }
    expect(dofn._call({name:'fyy'},'studing')).toBe('fyy is studing')
    expect(dofn._call({name:'zs'},'sleeping','dreaming')).toBe('zs is sleeping and dreaming')
})
test('bind',()=>{
    Function.prototype._bind = bind
    const fn = function(...args){
       return `${this.name} is ${args.join(' and ')}`;
    }
    const bind_fn = fn._bind({name:'zs'},'lazy')
    expect(bind_fn('sleeping','dreaming')).toBe('zs is lazy and sleeping and dreaming')
})