//Gameboard: Stored as array within Gameboard object

function createGameboard() {
    let board = [["-","-","-"],["-","-","-"],["-","-","-"]]; //length 3x3
    return board;
    //potentially add modifyGameboard() and viewGameboard() as getter and setter functions
}
//Player Object
function createPlayer(name,playerNumber) {
    const playerName = name;
    let playerIcon = "";
    if(playerNumber == 1) {
        playerIcon = "o";
    }
    else if(playerNumber == 2) {
        playerIcon = "x";
    }
    else {
        playerIcon = "-";
    }
    return {playerName, playerNumber, playerIcon};
}

//Game Logic Object
/* Logic: 3 in a row = win, 3 in column = win, 3 in diagonal = win
   Row logic: check adjacent boxes in row -> ex: when player makes move, check board[x][1], board[x][2], and board[x][3] and if all match, declare winner
   Column logic: check adjacent boxes in column -> ex: player makes move, check board[1][x], board [2][x], and board[3][x]
   Diagonal logic: Since there are only two possible diagonals, hardcode the check for these on every move
*/

function isRowEqual(arr, row) {
    return arr[row].every((val, _, array) => val === array[0]);
}
function isColumnEqual(arr,col) {
    return arr.every(row => row[col] === arr[0][col]);
}

function playGame(board) {
    console.log("Start!");
    const playerOne = createPlayer("Player 1", 1);
    const playerTwo = createPlayer("Player 2", 2);
    let i = 0;
    let modifyBoard = 0;
    let winnerMarker = "-";
    while(true) {
        //Places icons on the board
        if(i % 2 == 0) {
            modifyBoard = prompt(playerOne.playerName + ", please pick a tile!");
            console.log("first number: " + (Math.floor(modifyBoard / 3)) + " , second number: " + ((modifyBoard % 3)));
            if(board[Math.floor(modifyBoard / 3)][(modifyBoard % 3)] == "-") {
                board[Math.floor(modifyBoard / 3)][(modifyBoard % 3)] = playerOne.playerIcon;
                winnerMarker = playerOne.playerIcon;
            }
            else {
                continue;
            }
            console.log(board)
        }
        else {
            modifyBoard = prompt(playerTwo.playerName + ", please pick a tile!");
            console.log("first number: " + (Math.floor(modifyBoard / 3)) + " , second number: " + ((modifyBoard % 3)));
            if(board[Math.floor(modifyBoard / 3)][(modifyBoard % 3)] == "-") {
                board[Math.floor(modifyBoard / 3)][(modifyBoard % 3)] = playerTwo.playerIcon;
                winnerMarker = playerTwo.playerIcon;
            }
            else {
                continue;
            }
            console.log(board)
        }

        //Checks for win condition
        //row condition
        if(isRowEqual(board,(Math.floor(modifyBoard / 3))) === true && board[Math.floor(modifyBoard / 3)][0] != "-") {
            break;
        }
        //column condition
        else if(isColumnEqual(board,(modifyBoard % 3)) === true && board[0][modifyBoard % 3] != "-") {
            break;
        }
        //diagonals
        else if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[1][1] != "-") {
            break;
        }
        else if(board[1][1] == board[0][2] && board[1][1] == board[2][0] && board[1][1] != "-") {
            break;
        }
        /*
        else if(board.includes("-") == false) {
            winnerMarker = "-";
            break;
        }
        */
        i++;
    }

    if(winnerMarker == playerOne.playerIcon) {
        console.log(playerOne.playerName + " wins! Congratulations!");
    }
    else if(winnerMarker == playerTwo.playerIcon) {
        console.log(playerTwo.playerName + " wins! Congratulations!");
    }
    else {
        console.log("Tie!")
    }

}

playGame(createGameboard());
