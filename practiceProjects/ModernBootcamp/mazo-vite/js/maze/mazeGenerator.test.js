// const MazeGenerator  = require('./mazeGenerator');
import MazeGenerator from './mazeGenerator';

// Neighbors output pattern > [left, bottom, right, top]

test('Grid of 3 is created', () => {
  const maze = new MazeGenerator(3);
  const testGrid = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  expect(maze.getGrid).toEqual(testGrid);
});

test('Generate Valid Neighbors: 4 Neighbors / center / no outbound / non visited', () => {
  const maze = new MazeGenerator(3);
  const testGrid = [
    [false, false, false],
    [false, true, false],
    [false, false, false],
  ];
  maze.setGrid = testGrid;

  const currentRow = 1;
  const currentCol = 1;
  const output = [
    [1, 0],
    [2, 1],
    [1, 2],
    [0, 1],
  ];
  expect(maze.getValidNeighbors(currentRow, currentCol)).toEqual(output);
});

test('Generate Valid Neighbors: 2 Neighbors / center / no outbound / center col visited', () => {
  const maze = new MazeGenerator(3);
  const testGrid = [
    [false, true, false],
    [false, true, false],
    [false, true, false],
  ];
  maze.setGrid = testGrid;

  const currentRow = 1;
  const currentCol = 1;
  const output = [
    [1, 0],
    [1, 2],
  ];
  expect(maze.getValidNeighbors(currentRow, currentCol)).toEqual(output);
});

test('Generate Valid Neighbors: 2 Neighbors / top left / top left outbound / non visited', () => {
  const maze = new MazeGenerator(3);
  const testGrid = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  maze.setGrid = testGrid;

  const currentRow = 0;
  const currentCol = 0;
  const output = [
    [1, 0],
    [0, 1],
  ];
  expect(maze.getValidNeighbors(currentRow, currentCol)).toEqual(output);
});

test('Generate Valid Neighbors: 2 Neighbors / top mid / left outbound / non visited', () => {
  const maze = new MazeGenerator(3);
  const testGrid = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  maze.setGrid = testGrid;

  const currentRow = 1;
  const currentCol = 0;
  const output = [
    [2, 0],
    [1, 1],
    [0, 0],
  ];
  expect(maze.getValidNeighbors(currentRow, currentCol)).toEqual(output);
});

test('Generate Valid Neighbors: 2 Neighbors / top mid / left outbound / center visited', () => {
  const maze = new MazeGenerator(3);
  const testGrid = [
    [false, false, false],
    [false, true, false],
    [false, false, false],
  ];
  maze.setGrid = testGrid;

  const currentRow = 1;
  const currentCol = 0;
  const output = [
    [2, 0],
    [0, 0],
  ];
  expect(maze.getValidNeighbors(currentRow, currentCol)).toEqual(output);
});
