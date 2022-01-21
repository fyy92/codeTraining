const http = require('http')
http.createServer((req,res)=>{
    
    const delay = parseInt(Math.random()*5000)
    console.log(delay);
    setTimeout(()=>{
        const returnerror = Math.random()>0.8
        // if(returnerror){
        //     res.writeHead(500,{
        //         // 'Content-Type': 'text/plain',
        //         'Access-Control-Allow-Origin':'*',
        //         'Access-Control-Allow-Headers':'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
        //         'Access-Control-Allow-Methods':'GET',
        //     }).end('error,from '+req.url+' after '+delay+'ms')
        // }else{
            res.writeHead(200,{
                // 'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
                'Access-Control-Allow-Methods':'GET',
            }).end('OK,from '+req.url+' after '+delay+'ms')
        // }
        
    },delay)   
}).listen(3000,()=>{
    console.log('服务启动在3000！');
})