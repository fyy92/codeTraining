class emitter{
    constructor(){
        this.queue = {}
    }
    on(eventName,cb){
        if(!this.queue[eventName]){
            this.queue[eventName] = []
        }
        this.queue[eventName].push(cb)
    }
    emit(eventName){
        if(this.queue[eventName]){
            this.queue[eventName].forEach(cb=>cb())
        }
        
    }
    off(eventName){
        delete this.queue[eventName]
    }
    once(eventName,cb){
        let fn = function(){
            let time = 1
            return function(){
                if(time===1){
                    cb()
                    time--
                }
            }
        } 

        this.on(eventName,fn())
    }
}

module.exports = {
    emitter
}





