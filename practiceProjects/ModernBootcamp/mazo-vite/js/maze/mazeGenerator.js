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
    this.vertical = Array(this.gridDimension - 1)
      .fill(null)
      .map(() => Array(this.gridDimension).fill(false));
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

  stepThrough(row, col) {
    // If I have visited the cell [row, col], then return
    if (this.grid[row][col]) {
      return;
    }

    // Mark this cell as visited
    this.grid[row][col] = true;
    // Assemble randomly ordered list of neighbors
    const neighbors = this.getValidNeighbors(row, col);
    // For each neighbor
    // Check if neighbor is out of bound
    // If neighbor is already visited then continue to next neighbor
    // Remove a wall from either horizontal or vertical
    // visit that cell next
    console.log('MazeGenerator Construct: ', this.grid, this.vertical, this.horizontal);
  }

  getValidNeighbors(row, col) {
    const top = col - 1 >= 0 ? [row, col - 1] : false;
    const right = row + 1 <= this.gridDimension ? [row + 1, col] : false;
    const bottom = col + 1 <= this.gridDimension ? [row, col + 1] : false;
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
