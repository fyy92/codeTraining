define(['mylib'],function(mylib){
    function fn(){
     return `I run code in a and get some item from ${mylib.libItem}`
    }

    return {
        fn
    }
})
