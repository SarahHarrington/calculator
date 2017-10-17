var express = require('express');
var router = express.Router();

var historyArray = [];

var maths;
var mathTotal;

router.post('/', function (req, res) {
    var mathArray = req.body; //data coming through body-parse
    
    var arrayToCalculate = mathArray.allData;
    maths = arrayToCalculate.join();

    //while loop for math functions
    while (arrayToCalculate.length > 1) {
        var a = parseFloat(arrayToCalculate.shift()); //changes value to number
        var b = arrayToCalculate.shift();
        var c = parseFloat(arrayToCalculate.shift()); //changes value to number

        var total = 0;
        switch (b) { // parses out the math function and completes it
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
        arrayToCalculate.unshift('' + total); //puts the totalled number back on the front
    }
    var totalSendBack = {
        totalSent: total
    }
    mathTotal = total;

    var totalHistory = {
        mathFunction: maths,
        mathTotal: mathTotal
    }

    historyArray.push(totalHistory);
    res.send(totalSendBack);
})

router.get('/', function(req, res){
    res.send(historyArray);
})

module.exports = router;