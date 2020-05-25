
const Player = (name, marker, turn = true, wins = 0) => {
  const getTurn = () => turn;
  const setTurn = (newTurn) => {
    turn = newTurn;
    return newTurn;
  };
  const getMarker = () => (marker === 'X' ? 'X' : 'O');
  const getWins = () => wins;
  const setWin = () => {
    wins += 1;
    return getWins();
  };
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

export default Player;