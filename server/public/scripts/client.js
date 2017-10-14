console.log('javascript loaded');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery loaded');
    $('.calcBtn').on('click', arrayToCalculate);
    //$('.backButton').on('.click', backValue);
}

//number inputs being pushed
var calculationArray = [];
function arrayToCalculate() {
    var calcButton = $(this).val();
    //var mathFunction = $(this).val();
    $('.display').append(calcButton);
    calculationArray.push(calcButton);
    $('.backButton').on('.click', backValue);
}

function backValue() {
    
}