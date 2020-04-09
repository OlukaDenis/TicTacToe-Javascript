let player1 = "";
let player2 = "";
let lastClick = "";
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
  const move = (row, column, cell) => {
    let tempMarker = "";
    if (player1.getTurn() === true) {
      player1.setTurn(false);
      player2.setTurn(true);
      tempMarker = player1.getMarker();
    } else {
      player1.setTurn(true);
      player2.setTurn(false);
      tempMarker = player2.getMarker();
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
  player1 = Player(nameOne, "X");
  player1.setTurn(true);
  player2 = Player(nameTwo, "0");
  player2.setTurn(false);
  const boardContainer = document.querySelector("#boardContainer");
  boardContainer.style.display = "flex";
});

document.querySelectorAll(".board-cell").forEach(function (el) {
  let cell = el;
  el.addEventListener("click", function () {
    if (el.id === lastClick) {
      return;
    }
    lastClick = el.id;
    let row = +this.id.split("|")[0];
    let column = +this.id.split("|")[1];
    if (cell.textContet === "X" || cell.textContent === "0") {
      return;
    }
    Game.move(row, column, cell);
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
