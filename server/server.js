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
    console.log('mathArray', mathArray);
    
    var arrayToCalculate = mathArray.allData;
    console.log('arrayToCalculate', arrayToCalculate);

    while (arrayToCalculate.length > 1) {
        var a = parseFloat(arrayToCalculate.shift());
        console.log('a', a);
        
        var b = arrayToCalculate.shift();
        console.log('b', b);
        
        var c = parseFloat(arrayToCalculate.shift());
        console.log('c', c);
        
        var total = 0;
        switch(b) {
            case '+':
                total = a + c;
                break;
            case '-':
                total = a - c;
                break;
            case '*':
                total = a * c;
                break;
            case '/':
                total = a / c;
                break;
            default:
                console.log('this is not valid');
        }
        arrayToCalculate.unshift('' + total);
    }
    console.log('total', total);
    
    var totalSendBack = {
        totalSent: total
    }
    res.send(totalSendBack);
})


