console.log('javascript loaded');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery loaded');
    $('.numBtn').on('click', numToInput);
    $('.mathFunction').on('click', mathFunction);
}

//number inputs being pushed
var inputOne = [];
function numToInput() {
    var numberPushedOne = $(this).val()
    //console.log(numberPushed);
    $('.display').append(numberPushedOne);
    inputOne.push(numberPushedOne);
    console.log(inputOne);
}

var mathFun;
function mathFunction(){
    var mathFunction = $(this).val();
    $('.display').empty();
    mathFun = mathFunction;
   
}

numberPushedTwo
var numberPushedTwo = $(this).val();
var numberPushedTwo = $(this).val();
console.log(mathFunction);
$('.display').empty();
$('.display').append(numberPushedTwo);
inputTwo.push(numberPushedTwo);
console.log(inputTwo);
