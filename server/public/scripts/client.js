console.log('javascript loaded');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery loaded');
    $('.numBtn').on('click', numToInput)
}

function numToInput() {
    console.log($(this).val());
    
}