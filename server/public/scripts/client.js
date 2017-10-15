console.log('javascript loaded');

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery loaded');
    $('.numBtn').on('click', numbers);
    $('.mathBtn').on('click', calculation);
    $('.equalsButton').on('click', equalsFunction);
    //$('.backButton').on('.click', backValue);
}

//array for button pushes to go in to as strings
var calcArray = [""];

//collects the numbers pushed to array
function numbers() {
    var numBtn = $(this).val();
    calcArray[calcArray.length-1] += numBtn; //appending to the end of the string
    updateDisplay();
}

//collects math functions
function calculation() {
    var mathBtn = $(this).val();
    calcArray.push(mathBtn);
    calcArray.push("");
    updateDisplay();
}
//adds items to display as buttons are pushed
function updateDisplay() {
    $('.display').text(calcArray.join(""));
}

function clearDisplay() {
    $('.display').empty();
}

function appendFunctionToHistory() {
    var fullFunction = calcArray.join('');
    $('.history').append('<div>' + fullFunction + '</div>')
}

//sends data to server
function equalsFunction() {
    var dataForServer = {
        allData: calcArray
    }
    console.log('data for server', dataForServer);
    $.ajax({
        method: 'POST',
        url: '/allData',
        data: dataForServer
    })
    .done(function(response) {
        console.log('response', response);
        appendFunctionToHistory();
        clearDisplay();
        var totalToDisplay = response.totalSent;
        $('.display').text(totalToDisplay);
        calcArray = [''];
    })
    .fail(function(message) {
        console.log('message', message);
    })
}