
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
        winner.innerText = "User 1 Wins. You can't win unless you learn how to lose.";             
    } else {
        winner.innerText = "User 2 Wins. The more difficult the victory, the greater the happiness in winning.";
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

// Every 6 seconds, facts will print out on the screen
function TimeoutFax() {
    document.getElementById("userfact").innerText = "Basketball was invented by Dr. James Naismith in 1891."
}
function TimeoutFax2() {
    document.getElementById("userfact").innerText = "The NBA has been around since the 1970s."
}
function TimeOutFax3() {
    document.getElementById("userfact").innerText = "Wilt Chamberlain broke the record for 100 points in a single game."
}
function TimeoutFax4() {
    document.getElementById("userfact").innerText = "Kobe Bryant was the youngest player to start an NBA Match."
}
function TimeoutFax5() {
    document.getElementById("userfact").innerText = "The average that an NBA player runs is 2.5 miles per game. "
}
function TimeOutFax6() {
    document.getElementById("userfact").innerText = "Women’s basketball was officially added as an Olympic sport during the 1976 Summer Olympics in Montreal."
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
    document.getElementById("userfact2").innerText = "Venus and Serena Williams were the first sisters to win Olympic gold medals in tennis."
}
function UserTwoTimeoutFax2() {
    document.getElementById("userfact2").innerText = "Wimbledon has been around since the 19th century dating back to 1877."
}
function UserTwoTimeoutFax3() {
    document.getElementById("userfact2").innerText = "Grunts are measured in tennis. Maria Sharapova’s grunt was 105 decibels, it was recorded as the loudest."
}
function UserTwoTimeoutFax4() {
    document.getElementById("userfact2").innerText = "In the 12th century, tennis was played with hands. Eventually, rackets were introduced in the 16th century because people’s hands got sore."
}
function UserTwoTimeoutFax5() {
    document.getElementById("userfact2").innerText = "Novak Djokovic tops the male tennis players in terms of the highest number of prizes achieved, with over $143 million in winnings!"
}
function UserTwoTimeoutFax6() {
    document.getElementById("userfact2").innerText = "According to the International Tennis Federation, the weight of a tennis ball should be between 56 and 59.4 grams" 
}
function UserTwoTimeoutFax7() {
    document.getElementById("userfact2") = innerText = "If you win, lose or draw, press the SF logo to play again or pick a different sport."
}