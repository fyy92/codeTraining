const {emitter} = require('./index')

test('emitter=>on off emit',(next)=>{
    var event = new emitter();
    res = 1
    event.on('handlerAdd',function(){
        res++
    })
    setTimeout(()=>{
        event.emit('handlerAdd')
        expect(res).toBe(2)
        event.off('handlerAdd')
        event.emit('handlerAdd')
        expect(res).toBe(2)
        next()
    },20)
})

test('emitter=>once',(next)=>{
    var event = new emitter();
    res = 1
    event.once('handlerAdd',function(){
        res++
    })
    setTimeout(()=>{
        event.emit('handlerAdd')
        event.emit('handlerAdd')
        event.emit('handlerAdd')
        expect(res).toBe(2)
        next()
    },20)
})