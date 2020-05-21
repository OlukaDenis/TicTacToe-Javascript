const Player = (() => {
  let turn = true;
  let wins = 0;
  let mName = '';
  let mMarker = '';

  const name = () => mName;
  const setName = (nm) => (mName = nm);
  const setMarker = (mkr) => (mMarker = mkr);

  const marker = () => mMarker;

  const getTurn = () => turn;
  const setTurn = (newTurn) => (turn = newTurn);
  const getMarker = () => (marker === 'X' ? 'X' : 'O');
  const getWins = () => wins;
  const setWin = () => (wins += 1);

  return {
    name,
    setName,
    setMarker,
    marker, 
    getMarker,
    setTurn,
    getTurn, 
    getWins, 
    setWin,
  };

})();

export default Player;