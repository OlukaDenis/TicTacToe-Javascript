import Gameboard from '../src/modules/board';
import Player from '../src/modules/player';

describe('Test for Gameboard module', () => {
  let board = '';
  beforeEach(() => { board = Gameboard; });
  test('It should return and empty gameboard, test for getBoard()', () => {
    const emptyBoard = Array.from(Array(3), () => new Array(3));
    expect(board.getBoard()).toEqual(emptyBoard);
  });

  test('It should add a move to the Gameboard, test for turn()', () => {
    board.turn('X', 0, 0);
    const desiredBoard = [
      ['X', undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ];
    expect(Gameboard.getBoard()).toEqual(desiredBoard);
  });

  test('It should return true when checking if there is a winner, test for checkWinner()', () => {
    board.turn('X', 0, 0);
    board.turn('X', 0, 1);
    board.turn('X', 0, 2);
    expect(board.checkWinner()).toBeTruthy();
  });

  test('It should return false when checking if there is no winner, test for checkWinner()', () => {
    board.reset();
    expect(board.checkWinner()).toBeFalsy();
  });

  test('It should reset the board, test for reset()', () => {
    board.turn('X', 0, 0);
    board.turn('X', 0, 1);
    board.turn('X', 0, 2);
    const emptyBoard = Array.from(Array(3), () => new Array(3));
    board.reset();
    expect(board.getBoard()).toEqual(emptyBoard);
  });
});

describe('Test for the Players', () => {
  const player1 = Player('John Doe', 'X');
  const player2 = Player('Alice Doe', 'O');

  test('It should set the name and marker of the player1, test for name()', () => {
    expect(player1.name).toEqual('John Doe');
  });

  test('It should return the marker of the player, test for marker()', () => {
    expect(player1.marker).toEqual('X');
  });

  test('It should return the marker of the player, test for getMarker()', () => {
    expect(player1.getMarker()).toEqual('X');
  });

  test('It should set player 1 turn to be false, test for setTurn()', () => {
    expect(player1.setTurn(false)).toBeFalsy();
  });

  test('It should return false for the turn of the Player1, test for getTurn()', () => {
    expect(player2.getTurn()).toBeTruthy();
  });


  test('It should return set player\'s win, test for setWins()', () => {
    expect(player1.setWin()).toEqual(1);
  });

  test('It should return the player\'s number of wins, test for getWins()', () => {
    expect(player2.getWins()).toEqual(0);
  });
});