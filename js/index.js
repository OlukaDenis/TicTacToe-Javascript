let player1 = "";
let player2 = "";
const Gameboard = (function () {
  let gameBoard = Array.from(Array(3), () => new Array(3));

  const getBoard = () => {
    return gameBoard;
  };

  const turn = (playerMarker, row, column) => {
    gameBoard[row][column] = playerMarker;
  };

  const reset = () => {
    gameBoard = Array.from(Array(3), () => new Array(3));
    console.log(gameBoard);
  };
  return { getBoard, turn, reset };
})();

const Player = (name, marker) => {
  let turn = true;
  let wins = 0;

  const getTurn = () => turn;
  const setTurn = (newTurn) => (turn = newTurn);
  const getMarker = () => (marker === "X" ? "X" : "O");
  const getWins = () => wins;
  const setWin = () => (wins += 1);

  return { name, marker, getMarker, setTurn, getTurn, getWins, setWin };
};

const Game = (() => {
  const move = (player1, player2, row, column, cell) => {
    let tempMarker = "";
    if (player1.turn == true) {
      player1.turn = false;
      player2.turn = true;
      tempMarker = "X";
    } else {
      player1.turn = true;
      player2.turn = false;
      tempMarker = "0";
    }
    cell.innerHTML = tempMarker;
    Gameboard.turn(tempMarker, row, column);
  };

  return { move };
})();

Gameboard.getBoard();
// playerB.setTurn(false);

// setTimeout(function () {
//   Game.move(playerA, playerB, 0, 1);
//   console.log(Gameboard.getBoard());
//   setTimeout(function () {
//     Game.move(playerA, playerB, 1, 2);
//     console.log(Gameboard.getBoard());
//     setTimeout(function () {
//       Game.move(playerA, playerB, 0, 2);
//       console.log(Gameboard.getBoard());
//       setTimeout(function () {
//         Game.move(playerA, playerB, 2, 1);
//         console.log(Gameboard.getBoard());
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

const form = document.getElementById("form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
const btnSetPlayers = document.getElementById("setPlayerBtn");
btnSetPlayers.addEventListener("click", () => {
  const nameOne = document.getElementById("player1");
  const nameTwo = document.getElementById("player2");
  playerA = Player(nameOne, "X");
  playerB = Player(nameTwo, "O");
  const boardContainer = document.querySelector("#boardContainer");
  boardContainer.style.display = "flex";
});

document.querySelectorAll(".board-cell").forEach(function (el) {
  let cell = el;
  el.addEventListener("click", function () {
    let row = +this.id.split("|")[0];
    let column = +this.id.split("|")[1];
    if (cell.textContet === "X" || cell.textContent === "0") {
      return;
    }
    Game.move(playerA, playerB, row, column, cell);
    console.log(Gameboard.getBoard());
    cell.classList.remove("cursor-pointer");
    cell.classList.add("cursor-not-allowed");
  });
});
/*  */

// const turn3 = Gameboard.turn(playerA.getMarker(), 2, 2);
// console.log(turn3);
// playerA.setTurn(false);
// playerB.setTurn(true)

// const turn4 = Game.turn(playerB.getMarker, 1, 2);
// console.log(turn4);
// playerB.setTurn(false);
// playerA.setTurn(true);
