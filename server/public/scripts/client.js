console.log('javascript loaded');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery loaded');
    $('.equalsButton').on('click', doMath);
}

var add = $('.add')

var dataToCalculate = {
    
}

function doMath() {

}