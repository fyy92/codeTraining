const {map} = require('./map')



test('array_map',function(){
    Array.prototype._map = map
    const res1 = [{age: 25},{age: 30}].map(function(item,index){
        console.log(this);
        return `${this.name}${index}:${item.age}`
    },{name:'person'})
    expect(res1).toEqual(['person0:25','person1:30'])
})

