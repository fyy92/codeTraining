 const _parseInt = function(str){
     let reg = /^\s*(\+|\-)?(\d+)/
     let res = reg.exec(str)
     if(!res) return NaN
     return res[1]==='-'?-Number(res[2]):Number(res[2])
    
 }




 module.exports = _parseInt



 