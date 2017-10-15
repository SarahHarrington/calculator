var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));

app.listen(port, function() {
    console.log('listening on port', port);
})

app.post('/alldata', function(req, res){
    var mathArray = req.body;
    var arrayToCalculate = mathArray.allData;
    console.log('arrayToCalculate', arrayToCalculate);
    
    var a = arrayToCalculate[0];
    var b = arrayToCalculate[2];
    
    res.sendStatus(201);
})


