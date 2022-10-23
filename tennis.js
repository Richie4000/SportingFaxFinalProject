
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
        winner.innerText = "User 1 Wins. It is not the strong one that wins, the one that wins is strong.";             
    } else {
        winner.innerText = "User 2 Wins. Winning takes talent; to repeat takes character.";
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
setTimeout(TimeOutFax6, 38000)
setTimeout(TimeoutFax7, 44000)

function TimeoutFax() {
    document.getElementById("userfact").innerText = "Venus and Serena Williams were the first sisters to win Olympic gold medals in tennis."
}


function TimeoutFax2() {
    document.getElementById("userfact").innerText = "Wimbledon has been around since the 19th century dating back to 1877."
}


function TimeOutFax3() {
    document.getElementById("userfact").innerText = "Grunts are measured in tennis. Maria Sharapova’s grunt was 105 decibels, it was recorded as the loudest."
}

function TimeoutFax4() {
    document.getElementById("userfact").innerText = "In the 12th century, tennis was played with hands. Eventually, rackets were introduced in the 16th century because people’s hands got sore."
}

function TimeoutFax5() {
    document.getElementById("userfact").innerText = "Novak Djokovic tops the male tennis players in terms of the highest number of prizes achieved, with over $143 million in winnings!."
}

function TimeOutFax6() {
    document.getElementById("userfact").innerText = "According to the International Tennis Federation, the weight of a tennis ball should be between 56 and 59.4 grams"
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
    document.getElementById("userfact2").innerText = "There are 18 players on the pitch at one time: two teams of nine. "
}
function UserTwoTimeoutFax2() {
    document.getElementById("userfact2").innerText = "The New York Yankees have won the World Series the most. 27 times!"
}
function UserTwoTimeoutFax3() {
    document.getElementById("userfact2").innerText = "There are 108 stitches in a baseball. They are traditionally made with cowhide with rubber layers."
}
function UserTwoTimeoutFax4() {
    document.getElementById("userfact2").innerText = "Baseball appeals to all ages. The oldest player was 47 years old."
}
function UserTwoTimeoutFax5() {
    document.getElementById("userfact2").innerText = "Baseball was created by Amber Doubleday in 1839. It was created to take the soldiers’ minds off the Civil War."
}
function UserTwoTimeoutFax6() {
    document.getElementById("userfact2").innerText = "The World Series is over 110 years old dating back to 1903 (the 20th century)." 
}
function UserTwoTimeoutFax7() {
    document.getElementById("userfact2") = innerText = "If you win, lose or draw, press the SF logo to play again or pick a different sport."
}