/**
 * 数组去重
 * 基本上三种思路，hash（用map,因为数组中的元素可能是对象）,双循环,加集合
 * 算法复杂度肯定双循环最高
 */

// const unique = (arr)=>{
//     return [...new Set(arr)]
// }

const unique = (arr)=>{
    let res = []
    for(let i=0;i<arr.length;i++){
        res.push(arr[i])
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]===arr[i]){
                res.pop()
            } 
        }
    }
    return res
}

module.exports = {
    unique
}

