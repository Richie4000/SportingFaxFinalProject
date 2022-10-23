
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
        winner.innerText = "User 1 Wins. I love the winning, I can take the losing, but most of all I love to play.";             
    } else {
        winner.innerText = "User 2 Wins. I never look back, I look forward";
    }
    gameOver = true;
}

// need to add some JS relating to the facts

// Sporting Fax for User 1, every 6 seconds a fact will show up

setTimeout(TimeoutFax, 6000)
setTimeout(TimeoutFax2, 12000)
setTimeout(TimeOutFax3, 18000)
setTimeout(TimeoutFax4, 24000)
setTimeout(TimeoutFax5, 30000)
setTimeout(TimeOutFax6, 36000)
setTimeout(TimeoutFax7, 42000)

function TimeoutFax() {
    document.getElementById("userfact").innerText = "There are 18 players on the pitch at one time: two teams of nine."
}
function TimeoutFax2() {
    document.getElementById("userfact").innerText = "The New York Yankees have won the World Series the most. 27 times!"
}
function TimeOutFax3() {
    document.getElementById("userfact").innerText = "There are 108 stitches in a baseball. They are traditionally made with cowhide with rubber layers."
}
function TimeoutFax4() {
    document.getElementById("userfact").innerText = "Baseball appeals to all ages. The oldest player was 47 years old."
}
function TimeoutFax5() {
    document.getElementById("userfact").innerText = "Baseball was created by Amber Doubleday in 1839. It was created to take the soldiers’ minds off the Civil War."
}
function TimeOutFax6() {
    document.getElementById("userfact").innerText = "The World Series is over 110 years old dating back to 1903 (the 20th century)." 
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
    document.getElementById("userfact2").innerText = "The longest game of snooker was 93 minutes and 12 seconds, during the 2008 China Open."
}
function UserTwoTimeoutFax2() {
    document.getElementById("userfact2").innerText = "The shortest frame of Snooker lasted only 3 minutes and was won by Tony Drago in 2009, Drago was a pleased well-known for his quick breaks and was often penalized by officials for not waiting for all the balls to stop moving before playing his next shot."
}
function UserTwoTimeoutFax3() {
    document.getElementById("userfact2").innerText = "Snooker was created in India."
}
function UserTwoTimeoutFax4() {
    document.getElementById("userfact2").innerText = "Ronnie Sullivan has won the World Snooker Championship seven times."
}
function UserTwoTimeoutFax5() {
    document.getElementById("userfact2").innerText = "Snooker will always be considered a game for strategies, a game meant to be played slowly. Pool, on the other hand, is fast-paced and short-lived, meant as a break between placing horse bets."
}
function UserTwoTimeoutFax6() {
    document.getElementById("userfact2").innerText = "The World Snooker Championship is an annual snooker tournament founded in 1927 and since 1977 played at the Crucible Theatre in Sheffield, England. The tournament is now played over seventeen days in late April and early May." 
}
function UserTwoTimeoutFax7() {
    document.getElementById("userfact2") = innerText = "If you win, lose or draw, press the SF logo to play again or pick a different sport." 
}