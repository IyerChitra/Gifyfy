var express = require('express');
var http = require('http');
var cors = require('cors');
var app = express()
const port = 5000;

app.use(cors())

app.get('/', function(req, res){
    var searchParam = req.query.param;
    var dataArray;
    var body = "";
    var baseUrl = 'http://api.giphy.com/v1/gifs/search?q='+searchParam+'&api_key=YOUR_API_KEY&limit=9';
    var req = http.get(baseUrl, function(response){
        
        response.on('data', function(data) {
            body += data;
        });
        response.on('end', function() {
            console.log('ended too');
            dataArray = JSON.parse(body);
            var urlArray = Array(9).fill('test');
            for(var i=0; i< dataArray.data.length; i++){
                urlArray[i] = dataArray.data[i].images.original.url;
            }
    res.send(urlArray);
        });
    });
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));