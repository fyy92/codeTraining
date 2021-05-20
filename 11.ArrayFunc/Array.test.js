const {map} = require('./map')
const {reduce} = require('./reduce')



test('array_map',function(){
    Array.prototype._map = map
    const res1 = [{age: 25},{age: 30}].map(function(item,index){
        console.log(this);
        return `${this.name}${index}:${item.age}`
    },{name:'person'})
    expect(res1).toEqual(['person0:25','person1:30'])
})



test('array_reduce',function(){
    Array.prototype._reduce = reduce
    const res1= [1,2,3]._reduce((pre,cur)=>{
        pre += cur
        return pre 
    })
    const res2= [1,2,3]._reduce((pre,cur)=>{
        pre += cur
        return pre 
    },4)
    expect(res1).toBe(6)
    expect(res2).toBe(10)
    
})
