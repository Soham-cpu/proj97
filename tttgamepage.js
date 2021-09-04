player1 = localStorage.getItem("user_name_1");
console.log(player1);
player2 = localStorage.getItem("user_name_2");
console.log(player2);

var gamestart = ""

function start() {
    document.getElementById("player1Lab").innerHTML = "Player 1 : " + player1;
    document.getElementById("player2Lab").innerHTML = "Player 2 : " + player2;
    document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "'s Turn </h4>";
    gamestart = "start";
    console.log("started");
    document.getElementById("buttonbutton").style.display = "none";
}

var turnoff = 1;

function a1() {
    if (gamestart == "start") {

        if (turnoff == 1) {
            check();
            document.getElementById("a1").innerHTML = "O"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "'s Turn </h4>";
            turnoff = 2;
        }
        else if (turnoff == 2) {
            check();
            document.getElementById("a1").innerHTML = "X"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "'s Turn </h4>";
            turnoff = 1;
        }
    }
}

function a2() {
    if (gamestart == 'start') {

        if (turnoff == 1) {
            check();
            document.getElementById("a2").innerHTML = "O"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "'s Turn </h4>";
            turnoff = 2;
        }
        else if (turnoff == 2) {
            check();
            document.getElementById("a2").innerHTML = "X"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "'s Turn </h4>";
            turnoff = 1;
        }
    }
}
function a3() {
    if (gamestart == 'start') {

        if (turnoff == 1) {
            check();
            document.getElementById("a3").innerHTML = "O"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "'s Turn </h4>";
            turnoff = 2;
        }
        else if (turnoff == 2) {
            check();
            document.getElementById("a3").innerHTML = "X"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "'s Turn </h4>";
            turnoff = 1;
        }
    }
}

function b1() {
    if (gamestart == 'start') {

        if (turnoff == 1) {
            check();
            document.getElementById("b1").innerHTML = "O"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "'s Turn </h4>";
            turnoff = 2;
        }
        else if (turnoff == 2) {
            check();
            document.getElementById("b1").innerHTML = "X"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "'s Turn </h4>";
            turnoff = 1;
        }
    }
}

function b2() {
    if (gamestart == 'start') {

        if (turnoff == 1) {
            check();
            document.getElementById("b2").innerHTML = "O"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "'s Turn </h4>";
            turnoff = 2;
        }
        else if (turnoff == 2) {
            check();
            document.getElementById("b2").innerHTML = "X"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "'s Turn </h4>";
            turnoff = 1;
        }
    }
}

function b3() {
    if (gamestart == 'start') {

        if (turnoff == 1) {
            check();
            document.getElementById("b3").innerHTML = "O"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "'s Turn </h4>";
            turnoff = 2;
        }
        else if (turnoff == 2) {
            check();
            document.getElementById("b3").innerHTML = "X"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "'s Turn </h4>";
            turnoff = 1;
        }
    }
}

function c1() {
    if (gamestart == 'start') {

        if (turnoff == 1) {
            check();
            document.getElementById("c1").innerHTML = "O"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "'s Turn </h4>";
            turnoff = 2;
        }
        else if (turnoff == 2) {
            check();
            document.getElementById("c1").innerHTML = "X"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "'s Turn </h4>";
            turnoff = 1;
        }
    }
}

function c2() {
    if (gamestart == 'start') {

        if (turnoff == 1) {
            check();
            document.getElementById("c2").innerHTML = "O"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "'s Turn </h4>";
            turnoff = 2;
        }
        else if (turnoff == 2) {
            check();
            document.getElementById("c2").innerHTML = "X"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "'s Turn </h4>";
            turnoff = 1;
        }
    }
}

function c3() {
    if (gamestart == 'start') {

        if (turnoff == 1) {
            check();
            document.getElementById("c3").innerHTML = "O"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "'s Turn </h4>";
            turnoff = 2;
        }
        else if (turnoff == 2) {
            check();
            document.getElementById("c3").innerHTML = "X"
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "'s Turn </h4>";
            turnoff = 1;
        }
    }
}

fucntion check(){
    if (turnoff == 1) {
        if (document.getElementById("a1").innerHTML == "O" && document.getElementById("a2").innerHTML == "O" && document.getElementById("a3").innerHTML == "O") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "won</h4>";
        }
        else if (document.getElementById("b1").innerHTML == "O" && document.getElementById("b2").innerHTML == "O" && document.getElementById("b3").innerHTML == "O") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "won</h4>";
        }
        else if (document.getElementById("c1").innerHTML == "O" && document.getElementById("c2").innerHTML == "O" && document.getElementById("c3").innerHTML == "O") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "won</h4>";
        }
        else if (document.getElementById("a1").innerHTML == "O" && document.getElementById("b1").innerHTML == "O" && document.getElementById("c1").innerHTML == "O") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "won</h4>";
        }
        else if (document.getElementById("a2").innerHTML == "O" && document.getElementById("b2").innerHTML == "O" && document.getElementById("c2").innerHTML == "O") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "won</h4>";
        }
        else if (document.getElementById("a3").innerHTML == "O" && document.getElementById("b3").innerHTML == "O" && document.getElementById("c3").innerHTML == "O") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "won</h4>";
        }
        else if (document.getElementById("a1").innerHTML == "O" && document.getElementById("b2").innerHTML == "O" && document.getElementById("c3").innerHTML == "O") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "won</h4>";
        }
        else if (document.getElementById("a3").innerHTML == "O" && document.getElementById("b2").innerHTML == "O" && document.getElementById("c1").innerHTML == "O") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player1 + "won</h4>";
        }
    }
    if (turnoff == 2) {
        if (document.getElementById("a1").innerHTML == "X" && document.getElementById("a2").innerHTML == "X" && document.getElementById("a3").innerHTML == "X") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "won</h4>";
        }
        else if (document.getElementById("b1").innerHTML == "X" && document.getElementById("b2").innerHTML == "X" && document.getElementById("b3").innerHTML == "X") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "won</h4>";
        }
        else if (document.getElementById("c1").innerHTML == "X" && document.getElementById("c2").innerHTML == "X" && document.getElementById("c3").innerHTML == "X") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "won</h4>";
        }
        else if (document.getElementById("a1").innerHTML == "X" && document.getElementById("b1").innerHTML == "X" && document.getElementById("c1").innerHTML == "X") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "won</h4>";
        }
        else if (document.getElementById("a2").innerHTML == "X" && document.getElementById("b2").innerHTML == "X" && document.getElementById("c2").innerHTML == "X") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "won</h4>";
        }
        else if (document.getElementById("a3").innerHTML == "X" && document.getElementById("b3").innerHTML == "X" && document.getElementById("c3").innerHTML == "X") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "won</h4>";
        }
        else if (document.getElementById("a1").innerHTML == "X" && document.getElementById("b2").innerHTML == "X" && document.getElementById("c3").innerHTML == "X") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "won</h4>";
        }
        else if (document.getElementById("a3").innerHTML == "X" && document.getElementById("b2").innerHTML == "X" && document.getElementById("c1").innerHTML == "X") {
            document.getElementById("playerTurn").innerHTML = "<h4>" + player2 + "won</h4>";
        }
    }
}