var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    var mathArray = req.body; //data coming through body-parser
    var arrayToCalculate = mathArray.allData;

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
    res.send(totalSendBack);
})

module.exports = router;