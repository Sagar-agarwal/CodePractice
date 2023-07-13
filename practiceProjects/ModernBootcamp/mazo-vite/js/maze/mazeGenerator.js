/*
    Grid Array [cells]


    Walls Array [Vertical, horizontal]
      Values: true, false
        true > NO wall
        false > has wall
*/

/*
  for 3 x 3 Grid

*/
export default class MazeGenerator {
  constructor(num) {
    this.gridDimension = num;

    this.grid = Array(this.gridDimension)
      .fill(null)
      .map(() => Array(this.gridDimension).fill(false));
    this.vertical = Array(this.gridDimension)
      .fill(null)
      .map(() => Array(this.gridDimension - 1).fill(false));
    this.horizontal = Array(this.gridDimension - 1)
      .fill(null)
      .map(() => Array(this.gridDimension).fill(false));
  }

  init() {}

  generateRandomMaze() {
    this.stepThrough(this.getRandom(), this.getRandom());
  }

  getRandom = (max = this.gridDimension - 1, min = 0) =>
    Math.floor(Math.random() * (max - min) + min);

  generateMultiDimensionArray = (dimension) =>
    Array(dimension)
      .fill(null)
      .map(() => Array(dimension).fill(false));

  shuffleArray = (arr) => {
    let currentIndex = arr.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }

    return arr;
  };

  updateVertices = (origCell, newCell) => {
    const [row, col] = origCell;
    const [nextRow, nextCol] = newCell;

    // Moved horizontally
    if (col !== nextCol) {
      const verticalCol = nextCol < col ? nextCol : col;
      this.vertical[row][verticalCol] = true;
    }
    // Moved Vertically
    if (row !== nextRow) {
      const horizontalRow = nextRow < row ? nextRow : row;
      this.horizontal[horizontalRow][col] = true;
    }
  };

  stepThrough(row, col) {
    // If I have visited the cell [row, col], then return
    if (this.grid[row][col]) {
      return;
    }

    // Mark this cell as visited
    this.grid[row][col] = true;
    console.log('Orig: ', [row, col]);
    const copy = [...this.grid];
    console.log('Grid at start: ', copy);

    // get All Valid Neighbors
    // For each neighbor
    // Check if neighbor is out of bound
    // Assemble randomly ordered list of neighbors
    const neighbors = this.shuffleArray(this.getValidNeighbors(row, col));

    if (neighbors.length === 0) {
      return;
    }

    const nextCell = neighbors[this.getRandom(neighbors.length - 1)];
    const [nextRow, nextCol] = nextCell;
    // Remove a wall from either horizontal or vertical
    this.updateVertices([row, col], nextCell);

    // visit that cell next
    this.stepThrough(nextRow, nextCol);
  }

  getValidNeighbors(row, col) {
    const top = col - 1 >= 0 ? [row, col - 1] : false;
    const right = row + 1 < this.gridDimension ? [row + 1, col] : false;
    const bottom = col + 1 < this.gridDimension ? [row, col + 1] : false;
    const left = row - 1 >= 0 ? [row - 1, col] : false;

    const neighbors = [top, right, bottom, left].filter((neighbor) => neighbor);
    const validNeighbors = neighbors.filter(([row, col] = neighbor) => !this.grid[row][col]);

    return validNeighbors;
  }

  get getGrid() {
    return this.grid;
  }

  set setGrid(grid) {
    this.grid = grid;
  }
}
