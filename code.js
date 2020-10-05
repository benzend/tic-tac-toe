/*var tdArray = [];
var TrueOrFalseArray = [];
var newArr = [];
var tdElements = document.getElementsByTagName("td");
var isNewMatch = false;

var xPoints = 0;
var oPoints = 0;
pullTdIdsFromElements();
//and for it to count the wins on each party
makePointsVisible();
//this function randomizes the O location based on the trueFalse array


//I have to figure out how to make the game say INSTANTLY when either x or o wins
//im trying to figure out where to put checkIfWon() and cycleForXO()

function makePointsVisible() {
    document.getElementById('xnum').innerHTML = xPoints;
    document.getElementById('onum').innerHTML = oPoints;
}


function nextGame() {
    var allTds = document.getElementsByTagName('td');
    for (var i = 0; i < allTds.length; i++) {
        allTds[i].classList.remove('O', 'X');
        var message = document.getElementById("msg");
        message.innerHTML = ("");
        makePointsVisible();
    }
}

function randomizeLoc() {
    cycleForXO();
    var randomLoc = Math.floor(Math.random() * tdArray.length);
    if (TrueOrFalseArray.indexOf(true) > -1){
        if (TrueOrFalseArray[randomLoc]) {
            var tdId = document.getElementById(tdArray[randomLoc].id);
            tdId.classList.add('O');
        } else {
            randomizeLoc();
        }
    } else {
        var message = document.getElementById("msg");
        message.innerHTML = ("OH LOOK, A TIE!")
        setTimeout(nextGame, 2000);
    }
}


//creates a boolean based array that is based on the tdArray
//its use is so that the O location randomizer knows where O can go
function cycleForXO() {
    for (var i = 0; i < tdArray.length; i++) {
        var classAtLocation = tdArray[i].classList;
        var classLocStr = classAtLocation + "";
        var xIndex = classLocStr.indexOf("X");
        var oIndex = classLocStr.indexOf("O");
        if (xIndex > -1) {
            TrueOrFalseArray[i] = false;
        } else if (oIndex > -1) {
            TrueOrFalseArray[i] = false;
        } else {
            TrueOrFalseArray[i] = true;
        }
    }
}


//when you click it runs drawX
function putAnXThere() {
    for (var i = 0; i < tdElements.length; i++) {
        tdElements[i].onclick = drawX;
    }
}


//adds .X class to the point in the grid you click on
function drawX(eventObj) {
    var xImgLoc = eventObj.target;
    var xImgLocClass = xImgLoc.classList;
    var xImgLocClassStr = xImgLocClass + '';
    if (xImgLocClassStr.indexOf('X') === -1 && xImgLocClassStr.indexOf('O') === -1){
        xImgLoc.classList.add('X'); 
        setTimeout(randomizeLoc, 200);
    } else {
        console.log('what the fuck');
    }
}



function pullTdIdsFromElements() {
    for (var i = 0; i < tdElements.length; i++) {
        tdArray.push(tdElements[i]);
    }
    return tdArray;
}

function turnArrToStrng(newArr, arr) {
    for (var i = 0; i < arr.length; i++) {
        var classArr = arr[i].classList;
        var str = classArr + '';
        newArr.push(str);
    }
} 

//this sets up an array
function checkIfWon() {
    var newArr = [];

    turnArrToStrng(newArr, tdArray);

    //this function places which qualifications are needed for both X and O to win
    function giveIndexAndSym(point1, point2, point3, yourSym) {
        if (newArr[point1].indexOf(yourSym) > -1 && newArr[point2].indexOf(yourSym) > -1 && newArr[point3].indexOf(yourSym) > -1) {
            console.log(yourSym + ' wins');
            setTimeout(nextGame, 2000);
            if (yourSym === 'X') {
                xPoints = xPoints + 1;
               
            } else if (yourSym === 'O') {
                oPoints = oPoints + 1;
                
            }
        }
    }
    giveIndexAndSym(0, 1, 2, 'X');
    giveIndexAndSym(0, 3, 6, 'X');
    giveIndexAndSym(0, 4, 8, 'X');
    giveIndexAndSym(1, 4, 7, 'X');
    giveIndexAndSym(2, 5, 8, 'X');
    giveIndexAndSym(3, 4, 5, 'X');
    giveIndexAndSym(6, 7, 8, 'X');
    giveIndexAndSym(2, 4, 6, 'X');

    giveIndexAndSym(0, 1, 2, 'O');
    giveIndexAndSym(0, 3, 6, 'O');
    giveIndexAndSym(0, 4, 8, 'O');
    giveIndexAndSym(1, 4, 7, 'O');
    giveIndexAndSym(2, 5, 8, 'O');
    giveIndexAndSym(3, 4, 5, 'O');
    giveIndexAndSym(6, 7, 8, 'O');
    giveIndexAndSym(2, 4, 6, 'O');
}

*/
/*

var xPoints = 0;
var oPoints = 0;
var tdElementsArray = document.getElementsByTagName('td');

var hasAnO;
var hasAnX;

var won = false;

var yourCodeHasBeenExecuted = false;

var winningLocations = [
[0, 1, 2], 
[0, 3, 6], 
[0, 4, 8], 
[1, 4, 7], 
[2, 5, 8], 
[3, 4, 5], 
[6, 7, 8], 
[2, 4, 6]
]

var interval = 400;
var timer = window.setInterval(function(){
    //this checks someone won and sets a point
    for (var i = 0; i < winningLocations.length; i++) {
        var loc = winningLocations[i];
        var tdClass0 = tdElementsArray[loc[0]].classList;
        var tdClass1 = tdElementsArray[loc[1]].classList;
        var tdClass2 = tdElementsArray[loc[2]].classList;
        if (tdClass0.contains('X') && tdClass1.contains('X') && tdClass2.contains('X')) {
            console.log('x wins');
            addPointToX();
            yourCodeHasBeenExecuted = true;
        } else if (tdClass0.contains('O') && tdClass1.contains('O') && tdClass2.contains('O')) {
            console.log('o wins');
            addPointToO();
            yourCodeHasBeenExecuted = true;
        }
    }
    if (yourCodeHasBeenExecuted === true) {
       window.clearInterval(timer);
    }
}, interval);

function nextGame() {
    if (won === true) {
        for (var i = 0; i < tdElementsArray.length; i++) {
            tdElementsArray[i].classList.remove('X');
        }
    }
}

function putAnXThere(event) {
    checkIfSomethingIsAlreadyThere();
    if (hasAnO === false && hasAnX === false) {
        var elements = event.target;
        elements.classList.add('X');
        putAnOThere(checkIfSomethingIsAlreadyThere());
    }
}

function putAnOThere(tdId) {
    if (hasAnO === false && hasAnX === false) {
        var tdElements = document.getElementById(tdId);
        tdElements.classList.add('O');
    }
}

function addPointToX() {
    var xPointElements = document.getElementById('xnum')
    xPoints++;
    xPointElements.innerHTML = xPoints;
}

function addPointToO() {
    var oPointElements = document.getElementById('onum');
    oPoints++;
    oPointElements.innerHTML = oPoints;
}

function randomizeLoc() {
    var randomNum = Math.floor( Math.random() * tdElementsArray.length);
    return 'td' + randomNum;
}

// this gets used with putanxthere and putanothere and randomizeLoc
function checkIfSomethingIsAlreadyThere() {
    var tdId = randomizeLoc();
    var elements = document.getElementById(tdId);
    var elementsClass = elements.classList;
    if (elementsClass.contains('O')) {
        hasAnO = true;
        hasAnX = false;
        return checkIfSomethingIsAlreadyThere();
    } else if (elementsClass.contains('X')) {
        hasAnX = true;
        hasAnO = false;
        return checkIfSomethingIsAlreadyThere();
    } else {
        hasAnO = false;
        hasAnX = false;
        return tdId;
    }
}   


function gameWon() {

}


//this function needs to be ran on an interval 
function checkWhoWon() {
    for (var i = 0; i < winningLocations.length; i++) {
        var loc = winningLocations[i];
        var tdClass0 = tdElementsArray[loc[0]].classList;
        var tdClass1 = tdElementsArray[loc[1]].classList;
        var tdClass2 = tdElementsArray[loc[2]].classList;
        if (tdClass0.contains('X') && tdClass1.contains('X') && tdClass2.contains('X')) {
            console.log('x wins');
            addPointToX();
        } else if (tdClass0.contains('O') && tdClass1.contains('O') && tdClass2.contains('O')) {
            console.log('o wins');
            addPointToO();
        }
    }
}
//putAnOThere(checkIfSomethingIsAlreadyThere());

*/


var tds = document.getElementsByTagName('td');
var gameEnd = false;
var oFunctionIsDone = true;
var xPoints = 0;
var oPoints = 0;
var isGameChecked = false;
// pointAdded is used because gameEnd was being used by other functions
// thus colliding with itself.
var pointAdded = false;
var boardFull = false;
var trueFalseArray = [];
var stopInterval = false;


function makeTrueOrFalseArray() {
    for (var i = 0; i < tds.length; i++) {
        if (tds[i].classList.contains('O') || tds[i].classList.contains('X')) {
            trueFalseArray[i] = true;
        } else {
            trueFalseArray[i] = false;
        }
    }
}

var winningLocations = [
    [0, 1, 2], 
    [0, 3, 6], 
    [0, 4, 8], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 4, 5], 
    [6, 7, 8], 
    [2, 4, 6]
    ]



var interval = 400;
var timer = window.setInterval(function(){
    //this checks someone won and sets a point
    console.log('your code is running');
    var yourCodeHasBeenExecuted = false;
    for (var i = 0; i < winningLocations.length; i++) {
        var loc = winningLocations[i];
        var tdClass0 = tds[loc[0]].classList;
        var tdClass1 = tds[loc[1]].classList;
        var tdClass2 = tds[loc[2]].classList;
        makeTrueOrFalseArray(); 
        (function() {
            if (trueFalseArray.every(element => element)) {
                    boardFull = true;
                }
            })();
        if (tdClass0.contains('X') && tdClass1.contains('X') && 
        tdClass2.contains('X') && pointAdded === false && stopInterval === false) {
            if (boardFull) {
                console.log('x still wins');
                stopInterval = true;
                pointAdded = true;
                addPointToX();
            } else {
                console.log('x wins');
                stopInterval = true;
                pointAdded = true;
                addPointToX();
            }
        } else if (tdClass0.contains('O') && tdClass1.contains('O') && 
        tdClass2.contains('O') && pointAdded === false && stopInterval === false) {
            if (boardFull) {
                console.log('o still wins');
                stopInterval = true;
                pointAdded = true;
                addPointToO();
            } else {
                console.log('o wins');
                stopInterval = true;
                pointAdded = true;
                addPointToO();
            }
        } 
    }
    if (boardFull && pointAdded === false && stopInterval === false) {
        stopInterval = true; 
        document.getElementById('msg').innerHTML = "It's a tie!";
        setTimeout(nextGame, 2000);
    }
    if (yourCodeHasBeenExecuted === true) {
       window.clearInterval(timer);
    }
}, interval);




for (var i = 0; i < (tds.length); i++) {
    var td = tds[i];
    td.addEventListener('click', function() {
        var currentTd = event.target;
        if (currentTd.classList.contains('X') === false && 
        currentTd.classList.contains('O') === false &&
        oFunctionIsDone === true &&
        gameEnd === false &&
        pointAdded === false) {
            currentTd.classList.add('X');

            //I added this function in, in order to get circle to not
            //be placed because the interval wasn't quick enough to 
            //switch gameEnd, allowing O to still be placed.
            var checkingGame = function() {
                for (var i = 0; i < winningLocations.length; i++) {
                    var loc = winningLocations[i];
                    var tdClass0 = tds[loc[0]].classList;
                    var tdClass1 = tds[loc[1]].classList;
                    var tdClass2 = tds[loc[2]].classList;
                    if (tdClass0.contains('X') && tdClass1.contains('X') && tdClass2.contains('X')) {
                        gameEnd = true;
                    } else if (tdClass0.contains('O') && tdClass1.contains('O') && tdClass2.contains('O')) {
                        gameEnd = true;
                    }
                }
            }
            checkingGame();
            if (gameEnd === false) {
                oFunctionIsDone = false;
                setTimeout(function() {
                    placeAnO();
                    oFunctionIsDone = true}, 400);
                    checkingGame();
                
            }
        } else {
            console.log('there is something already here');
        }
    });
}

// this is so I can set up an array to check if the gameboard is full

function randomizer() {
    var random = Math.floor( Math.random() * tds.length);
    return random;
}

function placeAnO() {
    var randomNum = randomizer();
    var randomTd = tds[randomNum]; 
    if (randomTd.classList.contains('X') === false && 
    randomTd.classList.contains('O') === false) {
        randomTd.classList.add('O');
    } else if (boardFull === false && stopInterval === false) {
        placeAnO();
    }
}

function addPointToX() {
    var xPointElements = document.getElementById('xnum')
    xPoints++;
    xPointElements.innerHTML = xPoints;
    document.getElementById('msg').innerHTML = 'X wins!'
    setTimeout(nextGame, 2000);
}

function addPointToO() {
    var oPointElements = document.getElementById('onum');
    oPoints++;
    oPointElements.innerHTML = oPoints;
    document.getElementById('msg').innerHTML = 'O wins!'
    setTimeout(nextGame, 2000);
}

function nextGame() {
    for (var i = 0; i < tds.length; i++) {
        tds[i].classList.remove('O', 'X');
    }
    boardFull = false;
    gameEnd = false;
    isGameChecked = false;
    oFunctionIsDone = true;
    pointAdded = false;
    stopInterval = false;
    document.getElementById('msg').innerHTML = ''
}

