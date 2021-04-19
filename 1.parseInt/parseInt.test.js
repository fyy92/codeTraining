
const _parseInt = require('./index.js')

test(` '42' => 42 `,()=>{
    expect(_parseInt('42')).toBe(42)
})
test(` '  -42' => -42`,()=>{
    expect(_parseInt('  -42')).toBe(-42)
})

test(` '  +42' => 42`,()=>{
    expect(_parseInt('  +42')).toBe(42)
})

test(` '4193 with words' => 4193`,()=>{
    expect(_parseInt('4193 with words')).toBe(4193)
})
test(` 'words and 987' => NaN`,()=>{
    expect(_parseInt('words and 987')).toBeNaN()
})