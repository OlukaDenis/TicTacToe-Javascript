import Gameboard from '../src/modules/board';
import Player from '../src/modules/player';

describe('Test for Gameboard module', () => {
  let board = '';
  beforeEach(() => { board = Gameboard; });
  test('It should return and empty gameboard', () => {
    const emptyBoard = Array.from(Array(3), () => new Array(3));
    expect(board.getBoard()).toEqual(emptyBoard);
  });

  test('It should add a move to the Gameboard', () => {
    board.turn('X', 0, 0);
    const desiredBoard = [
      ['X', undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ];
    expect(Gameboard.getBoard()).toEqual(desiredBoard);
  });

  test('It should return true when checking if there is a winner', () => {
    board.turn('X', 0, 0);
    board.turn('X', 0, 1);
    board.turn('X', 0, 2);
    expect(board.checkWinner()).toBeTruthy();
  });

  test('It should return false when checking if there is no winner', () => {
    board.reset();
    expect(board.checkWinner()).toBeFalsy();
  });

  test('It should reset the board', () => {
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

  test('It should set the name and marker of the player1', () => {
    expect(player1.name).toEqual('John Doe');
  });

  test('It should set player 2 turn to be true', () => {
    expect(player2.getTurn()).toBeTruthy();
  });

  test('It should return the players turn to be false', () => {
    player1.setTurn(false);
    expect(player1.getTurn()).toBeFalsy();
  });

  test('It should return another player\'s win', () => {
    player1.setWin();
    expect(player1.getWins()).toEqual(1);
  });
});