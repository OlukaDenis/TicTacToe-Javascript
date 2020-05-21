const Player = ((name, marker) => {
  let turn = true;
  let wins = 0;

  const getTurn = () => turn;
  const setTurn = (newTurn) => (turn = newTurn);
  const getMarker = () => (marker === 'X' ? 'X' : 'O');
  const getWins = () => wins;
  const setWin = () => (wins += 1);

  return {
    name, marker, getMarker, setTurn, getTurn, getWins, setWin,
  };
})();

export default Player;