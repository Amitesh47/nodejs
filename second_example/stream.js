// var fs = require('fs');
// var http = require('http');
// http.createServer((req,res)=>{
//     // fs.readFile('./jumbo.txt',(err,data) => {
//     //     if(err){
//     //         res.end(err);
//     //     }else{
//     //         res.end(data);
//     //     }
//     // })
//     let src = fs.createReadStream('./jumbo.txt');
//     src.pipe(res);
//     src.
// }).listen(5000); 
// console.log('I am running');
var http = require('http');
var server =  http.createServer();
server.on('request',(req,res)=>{
    console.log(process.pid);
    res.end('<h1>how are you</h1>')
});

server.listen(4000);
console.log(server.eventNames());