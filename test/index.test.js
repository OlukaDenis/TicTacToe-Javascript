import Gameboard from '../src/modules/board';

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