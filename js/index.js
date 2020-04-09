const Gameboard = (function() {
    let gameBoard = Array.from(Array(3), () => new Array(3));

    const getBoard = () => {
        gameBoard;
        console.log(gameBoard);
    }

    const turn = (playerMarker, row, column) => {
        gameBoard[row][column] = playerMarker;
        console.log(gameBoard);
    };
    
    const reset = () => {
        gameBoard = Array.from(Array(3), () => new Array(3));
        console.log(gameBoard)
    }
    return { getBoard, turn, reset };
})();

const Player = (name, marker) => {
    let turn =true;
    let wins = 0;
    
    const getTurn = () => turn;
    const setTurn = (newTurn) => (turn = newTurn); 
    const getMarker = () => 
        marker === "X" ? "X" : "O";
    const getWins = () => wins;
    const setWin = () => (wins += 1);

    return { name, marker, getMarker, setTurn, getTurn, getWins, setWin };
};



const Game = (() => {   
    
    const move = (player1, player2) => {
        if (player1.turn == true){
            player1.turn = false;
            player2.turn = true;
        } else {
            player1.turn = true;
            player2.turn = false;
        }
    };

    return { move };
})();


Gameboard.getBoard();
let playerA = Player("Denis", "X");
let playerB = Player("Josue", "O");
playerB.setTurn(false);

const turn1 = Gameboard.turn(playerA.getMarker(), 0, 0);
console.log(turn1);
Game.move(playerA, playerB);

const turn2 = Gameboard.turn(playerB.getMarker(), 0, 2);
console.log(turn2);
Game.move(playerA, playerB);

// const turn3 = Gameboard.turn(playerA.getMarker(), 2, 2);
// console.log(turn3);
// playerA.setTurn(false);
// playerB.setTurn(true)

// const turn4 = Game.turn(playerB.getMarker, 1, 2);
// console.log(turn4);
// playerB.setTurn(false);
// playerA.setTurn(true);
