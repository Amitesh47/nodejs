var fs = require('fs');
fs.writeFile('./demo/myfile.txt','hello how are you',(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file created');
    }
});

let file = fs.createWriteStream('./jumbo.txt');
for(let i=0; i<=100000; i++){
    file.write('The most complicated function is finmding the function that holds all these tools, q and dl');
}
file.end();   