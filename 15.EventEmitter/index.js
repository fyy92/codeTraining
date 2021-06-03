// class emitter{
//     constructor(){
//         this.queue = {}
//     }
//     on(eventName,cb){
//         if(!this.queue[eventName]){
//             this.queue[eventName] = []
//         }
//         this.queue[eventName].push(cb)
//     }
//     emit(eventName){
//         if(this.queue[eventName]){
//             this.queue[eventName].forEach(cb=>cb())
//         }
        
//     }
//     off(eventName){
//         delete this.queue[eventName]
//     }
//     once(eventName,cb){
//         let fn = function(){
//             let time = 1
//             return function(){
//                 if(time===1){
//                     cb()
//                     time--
//                 }
//             }
//         } 

//         this.on(eventName,fn())
//     }
// }

// module.exports = {
//     emitter
// }







var removeNthFromEnd = function(head, n) {
    let  len = 0
    let cur = head
    while(cur!=null){
        len++
        cur = cur.next
    }
    let index = len + 1 - n // 正数第几个元素待删除
    if(index<1) return null
    if(index=1) return head.next
    debugger
    cur = head
    let i =1
    while(i!==index-1){ //这里默认index至少从2开始 所以前面要加一下边界条件
        cur = cur.next
        i++
    }
    // cur为待删前一个元素
    cur.next = cur.next.next
    return head
};
var head = {
    val:1,
    next: {
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next: null
                } 
            } 
        }
    }
}
removeNthFromEnd(head,2)