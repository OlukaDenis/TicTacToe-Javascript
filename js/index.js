let player1 = '';
let player2 = '';
let lastClick = '';
let gameState = false;
let counter = 0;
const playerX = document.querySelector('#playerX');
const playerO = document.querySelector('#playerO');
const xWins = document.getElementById('xWins');
const oWins = document.getElementById('oWins');
const oLost = document.getElementById('oLost');
const xLost = document.getElementById('xLost');
const playerStatus = document.querySelector('#playerStatus');

const Gameboard = (function c() {
  let gameBoard = Array.from(Array(3), () => new Array(3));
  const getBoard = () => gameBoard;
  const turn = (playerMarker, row, column) => {
    gameBoard[row][column] = playerMarker;
  };
  const checkWinner = () => {
    if ((gameBoard[0][0] != null
      && gameBoard[0][0] === gameBoard[0][1]
      && gameBoard[0][1] === gameBoard[0][2])
      || (gameBoard[1][0] != null
      && gameBoard[1][0] === gameBoard[1][1]
      && gameBoard[1][1] === gameBoard[1][2])
      || (gameBoard[2][0] != null
      && gameBoard[2][0] === gameBoard[2][1]
      && gameBoard[2][1] === gameBoard[2][2])
      || (gameBoard[0][0] != null
      && gameBoard[0][0] === gameBoard[1][0]
      && gameBoard[1][0] === gameBoard[2][0])
      || (gameBoard[0][1] != null
      && gameBoard[0][1] === gameBoard[1][1]
      && gameBoard[1][1] === gameBoard[2][1])
      || (gameBoard[0][2] != null
      && gameBoard[0][2] === gameBoard[1][2]
      && gameBoard[1][2] === gameBoard[2][2])
      || (gameBoard[0][0] != null
      && gameBoard[0][0] === gameBoard[1][1]
      && gameBoard[1][1] === gameBoard[2][2])
      || (gameBoard[0][2] != null
      && gameBoard[0][2] === gameBoard[1][1]
      && gameBoard[1][1] === gameBoard[2][0])) {
      return true;
    }
    return false;
  };
  const reset = () => {
    gameBoard = Array.from(Array(3), () => new Array(3));
  };
  return {
    checkWinner,
    getBoard,
    turn,
    reset,
  };
}());

const Player = (name, marker, turn = true, wins = 0) => {
  const getTurn = () => turn;
  const setTurn = (newTurn) => {
    turn = newTurn;
    return newTurn;
  };
  const getMarker = () => (marker === 'X' ? 'X' : 'O');
  const getWins = () => wins;
  const setWin = () => (wins += 1);
  return {
    name,
    marker,
    getMarker,
    setTurn,
    getTurn,
    getWins,
    setWin,
  };
};

const getGameStats = () => {
  playerX.innerHTML = player1.name;
  playerO.innerHTML = player2.name;
  xWins.innerHTML = player1.getWins();
  oWins.innerHTML = player2.getWins();
  xLost.innerHTML = player2.getWins();
  oLost.innerHTML = player1.getWins();
};

const Game = (() => {
  const move = (row, column, cell) => {
    let tempMarker = '';
    let winner = '';
    counter += 1;
    if (player1.getTurn() === true) {
      player1.setTurn(false);
      player2.setTurn(true);
      winner = player1;
      tempMarker = player1.getMarker();
    } else {
      player1.setTurn(true);
      player2.setTurn(false);
      winner = player2;
      tempMarker = player2.getMarker();
    }
    cell.innerHTML = tempMarker;
    Gameboard.turn(tempMarker, row, column);
    if (Gameboard.checkWinner()) {
      gameState = true;
      winner.setWin();
      playerStatus.style.display = 'block';
      playerStatus.innerHTML = `${winner.name} has won!`;
      getGameStats();
    }
    if (counter === 9) {
      playerStatus.style.display = 'block';
      playerStatus.innerHTML = 'It is a draw';
    }
  };
  return { move };
})();

const form = document.getElementById('form');
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);
const btnSetPlayers = document.getElementById('setPlayerBtn');
const gameSetting = document.querySelector('.game-settings');
btnSetPlayers.addEventListener('click', () => {
  const nameOne = document.getElementById('player1').value;
  const nameTwo = document.getElementById('player2').value;
  const oError = document.getElementById('error2');
  const xError = document.getElementById('error1');
  if (nameOne === '' || nameOne === null) {
    xError.style.display = 'block';
    oError.style.display = 'none';
  } else if (nameTwo === '' || nameTwo === null) {
    oError.style.display = 'block';
    xError.style.display = 'none';
  } else {
    oError.style.display = 'none';
    xError.style.display = 'none';
    player1 = Player(nameOne, 'X');
    player1.setTurn(true);
    player2 = Player(nameTwo, 'O');
    player2.setTurn(false);
    const boardContainer = document.querySelector('#boardContainer');
    boardContainer.style.display = 'flex';
    gameSetting.style.display = 'block';
    form.style.display = 'none';
    getGameStats();
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
  }
});

document.querySelectorAll('.board-cell').forEach(el => {
  const cell = el;
  el.addEventListener('click', function d() {
    if (el.id === lastClick) {
      return;
    }
    if (gameState === true) {
      return;
    }
    lastClick = el.id;
    const row = +this.id.split('|')[0];
    const column = +this.id.split('|')[1];
    if (cell.textContet === 'X' || cell.textContent === 'O') {
      return;
    }
    Game.move(row, column, cell);
    cell.classList.remove('cursor-pointer');
    cell.classList.add('cursor-not-allowed');
  });
});

const resetGame = () => {
  Gameboard.reset();
  playerStatus.style.display = 'none';
  counter = 0;
};

const finishGame = document.getElementById('finishGame');
finishGame.addEventListener('click', () => {
  const boardContainer = document.querySelector('#boardContainer');
  boardContainer.style.display = 'none';
  gameSetting.style.display = 'none';
  form.style.display = 'flex';
  resetGame();
});

const resetBtn = document.getElementById('resetGame');
resetBtn.addEventListener('click', () => {
  for (let i = 0; i < 3; i += 1) {
    const firstRow = document.getElementById(`0|${i}`);
    const secondRow = document.getElementById(`1|${i}`);
    const thirdRow = document.getElementById(`2|${i}`);
    firstRow.innerHTML = '';
    secondRow.innerHTML = '';
    thirdRow.innerHTML = '';
    firstRow.classList.remove('cursor-not-allowed');
    firstRow.classList.add('cursor-pointer');
    secondRow.classList.remove('cursor-not-allowed');
    secondRow.classList.add('cursor-pointer');
    thirdRow.classList.remove('cursor-not-allowed');
    thirdRow.classList.add('cursor-pointer');
    gameState = false;
    resetGame();
  }
});