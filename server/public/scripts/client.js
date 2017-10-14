console.log('javascript loaded');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery loaded');
    $('.numBtn').on('click', numbers);
    $('.mathBtn').on('click', calculation);
    //$('.equalsButton').on('click', equalsFunction);
    //$('.backButton').on('.click', backValue);
}

var calcArray = [""];

function numbers() {
    var numBtn = $(this).val();
    calcArray[calcArray.length-1] += numBtn; //appending to the end of the string
    $('.display').text(calcArray.join(""));
}
function calculation() {
    var mathBtn = $(this).val();
    calcArray.push(mathBtn);
    calcArray.push("");
    $('.display').text(calcArray.join(""));
}