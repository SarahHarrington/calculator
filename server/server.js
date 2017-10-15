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
    
    var a = parseInt(arrayToCalculate[0]);
    var b = parseInt(arrayToCalculate[2]);
    var total = 0;
    switch(arrayToCalculate[1]) {
        case '+':
            total = a + b;
            break;
        case '-':
            total = a - b;
            break;
        case '*':
            total = a * b;
            break;
        case '/':
            total = a / b;
            break;
        default:
            console.log('this is not valid');
    }
    totalSendBack = {
        totalSent: total
    }
    res.send(totalSendBack);
})


