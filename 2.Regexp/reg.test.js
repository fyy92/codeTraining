// https://juejin.cn/post/6872236622591721485#heading-23
/*
    1.千分位
    2.时间格式化 '2020-9-10 13:23:23' -> 2020年9月10日 13时23分23秒
    3.字符串中出现最多的字符,出现的次数
    4.获取url中的传参
    5.单词去重 “Is is the cost of of gasoline going up up” => ""is the cost of gasoline going up""
    6.有效数字验证：整数负数0小数
    // 7.有效数字验证：整数负数0小数
    // 8.有效数字验证：整数负数0小数
    // 9.有效数字验证：整数负数0小数
    // 10.有效数字验证：整数负数0小数

*/    
const {toThousands,getMostAppearChart,formatTime}  = require('./index')

test(`toThousands `,()=>{
    expect(toThousands(10000)).toBe('10,000')
    expect(toThousands(1000000)).toBe('1,000,000')
    expect(toThousands(100)).toBe('100')
})

test(`formatTime `,()=>{
    expect(formatTime('2020-9-10 13:23:23')).toBe('2020年9月10日 13时23分23秒')
})

test(`getMostAppearChart `,()=>{
    expect(getMostAppearChart('aaabbcdddde')).toEqual(['d',4])
})

// test(`formatTime `,()=>{
//     expect(formatTime('2020-9-10 13:23:23')).toBe('2020年9月10日 13时23分23秒')
// })

// test(`formatTime `,()=>{
//     expect(formatTime('2020-9-10 13:23:23')).toBe('2020年9月10日 13时23分23秒')
// })