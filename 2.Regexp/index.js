const toThousands = (val)=>{
    val = val+''
    let reg = /\d{1,3}(?=(\d{3})+$)/g
    return val.replace(reg,res=>`${res},`)
    
}


const formatTime = (str)=>{
    // 1.不能有g修饰符否则就是全局匹配 
    // 2.match方法没有回调函数和replace不一样，所以不能用s1这种变量
    let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})$/
    let res = str.match(reg)
    return  `${res[1]}年${res[2]}月${res[3]}日 ${res[4]}时${res[5]}分${res[6]}秒`
}


const getMostAppearChart = (str)=>{
    let reg = /(\w)\1*/g
    let max = 0
    let maxchar = ''
    str.replace(reg,(c)=>{
        console.log(c);
        if(c.length>max){
            max = c.length
            maxchar = c[0]
        }
    })
    return [maxchar,max]
}
module.exports =  {
    toThousands,
    formatTime,
    getMostAppearChart
}