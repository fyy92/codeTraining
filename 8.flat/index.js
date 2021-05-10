/**
 *  扁平化一个数组
 *  const arr = [1, [2, [3, [4, 5]]], 6];
 *  => [1, 2, 3, 4, 5, 6]
 */

// 方案一 使用falt
// 方案二 利用正则
// const _flat = arr=>JSON.parse(`[${JSON.stringify(arr).replace(/\[|\]/g, '')}]`);
// 方案三 reduce
// const _flat = arr=>{
//     return arr.reduce((pre,cur)=>{
//         Array.isArray(cur)?pre.push(..._flat(cur)):pre.push(cur)
//         return pre
//     },[])
// }

// 升级   flat接受depth参数，即如何控制递归深度    记录递归层数 要么用参数，用么用闭包 这里用参数
const _flat = (arr,dep=1)=>{
    return arr.reduce((pre,cur)=>{
        if(dep===0){
            pre.push(cur)
        }else{
            if(Array.isArray(cur)){
                pre.push(..._flat(cur,dep-1))
            }else{
                pre.push(cur)
            }
        }
        return pre
    },[])
}

module.exports = {
    _flat
}