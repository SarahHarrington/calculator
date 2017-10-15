$(document).ready(readyNow);

function readyNow() {
    //event handlers
    $('.numBtn').on('click', numbers);
    $('.mathBtn').on('click', calculation);
    $('.equalsButton').on('click', equalsFunction);
    $('.backButton').on('click', backBtn);
    $('.clearButton').on('click', clearButton);
}

//array for button pushes to go in to as strings
var calcArray = [""];

//collects the numbers pushed to array
function numbers() {
    var numBtn = $(this).val();
    //appending to the end of the string
    calcArray[calcArray.length-1] += numBtn;
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

function clearButton() {
    clearDisplay();
    calcArray = [''];
}

function backBtn() {
    console.log('back clicked');
    var calcString = calcArray.pop();
    var sbString = calcString.slice(0, calcString.length-1);
    calcArray.push(sbString);
    updateDisplay();
}

function appendFunctionToHistory() {
    var fullFunction = calcArray.join('');
    $('.functionHistory').append('<div>' + fullFunction + '=</div>')
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
        totalToDisplay = response.totalSent;
        $('.display').text(totalToDisplay);
        $('.totalHistory').append('<div>' + totalToDisplay + '</div>')
        calcArray = [''];
    })
    .fail(function(message) {
        console.log('message', message);
    })
}