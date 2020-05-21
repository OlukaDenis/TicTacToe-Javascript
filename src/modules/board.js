const Gameboard = (() => {
  let gameBoard = Array.from(Array(3), () => new Array(3));

  const getBoard = () => gameBoard;

  const turn = (playerMarker, row, column) => {
    gameBoard[row][column] = playerMarker;
  };

  const checkWinner = () => {
    if (
      (gameBoard[0][0] != null && (gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][1] === gameBoard[0][2]))
        || (gameBoard[1][0] != null && (gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[1][2]))
        || (gameBoard[2][0] != null && (gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][1] === gameBoard[2][2]))
        || (gameBoard[0][0] != null && (gameBoard[0][0] === gameBoard[1][0] && gameBoard[1][0] === gameBoard[2][0]))
        || (gameBoard[0][1] != null && (gameBoard[0][1] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][1]))
        || (gameBoard[0][2] != null && (gameBoard[0][2] === gameBoard[1][2] && gameBoard[1][2] === gameBoard[2][2]))
        || (gameBoard[0][0] != null && (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]))
        || (gameBoard[0][2] != null && (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]))
    ) {
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
})();

export default Gameboard;