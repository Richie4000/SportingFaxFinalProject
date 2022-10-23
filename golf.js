
// player one and two variable
var playerOne = "1";
var playerTwo = "2";
var currPlayer = playerOne;

var gameOver = false;
var board;

var rows = 6; // 6 rows
var columns = 7; // 7 columns
var currColumns = []; //keeps track of which row each column is at.

// functions of the game
window.onload = function() {
    setGame();
}

// functions of the board
function setGame() {
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // JS
            row.push(' ');
            // HTML
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) {
        return;
    }

    //get coords of that tile clicked
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    // figure out which row the current column should be on
    r = currColumns[c]; 

    if (r < 0) { // board[r][c] != ' '
        return;
    }

    board[r][c] = currPlayer; //update JS board
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currPlayer == playerOne) {
        tile.classList.add("red-piece");
        currPlayer = playerTwo;
    }
    else {
        tile.classList.add("yellow-piece");
        currPlayer = playerOne;
    }

    r -= 1; //update the row height for that column
    currColumns[c] = r; //update the array

    checkWinner();
}

function checkWinner() {
     // horizontal
     for (let r = 0; r < rows; r++) {
         for (let c = 0; c < columns - 3; c++){
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
         }
    }

    // vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // anti diagonal
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // diagonal
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
}

// this determines the winner, insert motivational quote here.
function setWinner(r, c) {
    let winner = document.getElementById("winner");
    if (board[r][c] == playerOne) {
        winner.innerText = "User 1 Wins. Never give up. Failure and rejection are just the first steps to succeeding";             
    } else {
        winner.innerText = "User 2 Wins. Losing feels worse than winning feels good";
    }
    gameOver = true;
}


// need to add some JS relating to the facts

// Sporting Fax for User 1, every 4 seconds a fact will show up

setTimeout(TimeoutFax, 6000)
setTimeout(TimeoutFax2, 12000)
setTimeout(TimeOutFax3, 18000)
setTimeout(TimeoutFax4, 24000)
setTimeout(TimeoutFax5, 30000)
setTimeout(TimeOutFax6, 36000)
setTimeout(TimeoutFax7, 42000)

function TimeoutFax() {
    document.getElementById("userfact").innerText = "The odds of getting a hole-in-one is 12,500 to one."
}


function TimeoutFax2() {
    document.getElementById("userfact").innerText = "The odds of getting two holes in one are 67 million to one!"
}


function TimeOutFax3() {
    document.getElementById("userfact").innerText = "St Andrews, Scotland has a famous course that has been around since the 15th century."
}

function TimeoutFax4() {
    document.getElementById("userfact").innerText = "The record for the longest putt is 375 feet."
}

function TimeoutFax5() {
    document.getElementById("userfact").innerText = "Golf is a relaxing and sociable sport that can burn calories."
}

function TimeOutFax6() {
    document.getElementById("userfact").innerText = "There are claims that the Scots invented golf in the 19th century, or the Chinese invented it in the 10th century."
}

function TimeoutFax7() {
    document.getElementById("userfact").innerText = "If you win, lose or draw, press the SF logo to play again or pick a different sport."
}


// User Two's Timeout Functions
setTimeout(UserTwoTimeoutFax, 10000)
setTimeout(UserTwoTimeoutFax2, 20000)
setTimeout(UserTwoTimeoutFax3, 30000)
setTimeout(UserTwoTimeoutFax4, 40000)
setTimeout(UserTwoTimeoutFax5, 50000)
setTimeout(UserTwoTimeoutFax6, 60000)
setTimeout(UserTwoTimeoutFax7, 65000)

function UserTwoTimeoutFax() {
    document.getElementById("userfact2").innerText = "Brazil won the World Cup in 1958, 1962, 1970, 1994, and 2002."
}
function UserTwoTimeoutFax2() {
    document.getElementById("userfact2").innerText = "Women’s football has been in demand after England women’s won the Euros in 2022."
}
function UserTwoTimeoutFax3() {
    document.getElementById("userfact2").innerText = "A football team has a maximum of 11 players. 10 outfield players and one goalkeeper."
}
function UserTwoTimeoutFax4() {
    document.getElementById("userfact2").innerText = "Football (the English kind) is the most recognized sport in the world with 250 million users in 200 countries."
}
function UserTwoTimeoutFax5() {
    document.getElementById("userfact2").innerText = "Greenland cannot compete in the World Cup because they do not have enough grass for a football field"
}
function UserTwoTimeoutFax6() {
    document.getElementById("userfact2").innerText = "Referees were not involved in the sport until 1881. Before a player had to make their own decision." 
}
function UserTwoTimeoutFax7() {
    document.getElementById("userfact2") = innerText = "If you win, lose or draw, press the SF logo to play again or pick a different sport."
}