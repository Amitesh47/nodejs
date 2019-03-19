var EventEmitter = require('events');
class Publish extends EventEmitter{};

let testPublish = new Publish();
testPublish.on('check',function(a,b){
    console.log(a,b,this);
});

testPublish.emit('check','Sapient','Nodejs')