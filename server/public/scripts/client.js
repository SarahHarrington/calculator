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

//collects the numbers as strings, pushes to calcArray
function numbers() {
    var numBtn = $(this).val();
    //appending to the end of the string
    calcArray[calcArray.length-1] += numBtn;
    updateDisplay();
}

//collects math functions as strings, pushes to calcArray
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

//clears the display
function clearDisplay() {
    $('.display').empty();
    calcArray = [''];
}

//clears existing operations
function clearButton() {
    clearDisplay();
    //calcArray = [''];
}

//back numbers out, ends at operator
function backBtn() {
    console.log('back clicked');
    var calcString = calcArray.pop();
    var sbString = calcString.slice(0, calcString.length-1);
    calcArray.push(sbString);
    updateDisplay();
}

//appends calcArray to history
function appendFunctionToHistory() {
    var fullFunction = calcArray.join('');
    $('.functionHistory').append('<div>' + fullFunction + '=</div>')
}

//sends data to server
function equalsFunction() {
    var dataForServer = {
        allData: calcArray
    }
    $.ajax({
        method: 'POST',
        url: '/allData',
        data: dataForServer
    })
    //receives response and appends to the DOM
    .done(function(response) {
        console.log('response', response);
        appendFunctionToHistory(); //appends function sent to DOM
        clearDisplay(); //clears display
        totalToDisplay = response.totalSent;
        $('.display').text(totalToDisplay);
        $('.totalHistory').append('<div>' + totalToDisplay + '</div>')//appends total to DOM
    })
    .fail(function(message) {
        console.log('message', message);
    })
}