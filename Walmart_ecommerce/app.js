const exp = require('express');
const app = exp();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const rp = require('request-promise');
var myResponse = require('./data');

app.use(exp.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.sendFile('index.html', {
      root: path.join(__dirname,'./')  
    });
});

app.post('/api/search',(req,res)=>{
    let walmart = 'http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query='+req.body.item;
    console.log(walmart);
    
    rp(walmart)
    .then(function (htmlString) {
        // Process html...
        console.log(res.json(JSON.parse(htmlString)));
    })
    .catch(function (err) {
        // Crawling failed...
    });

    // res.json(
    //    // data:[],
    //    myResponse,
    // );
})

app.listen(3000);