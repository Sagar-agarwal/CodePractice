import Shapes from '../shapes/shapes';
import Walls from '../shapes/walls';

export default class MazeGenerator {
  constructor(num) {
    this.shapes;

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

  createWalls() {}

  addMazeWallsToGrid() {
    const { width, height, borderWidth } = this.shapes;
    const horizontalVerticesWidth = (width - borderWidth * 2) / this.gridDimension;
    const verticalVerticesHeight = (height - borderWidth * 2) / this.gridDimension;
    const borderThickness = this.shapes.borderWidth;

    this.addMazeVerticalWallsToGrid(
      horizontalVerticesWidth,
      verticalVerticesHeight,
      borderThickness
    );
    this.addMazeHorizontalWallsToGrid(
      horizontalVerticesWidth,
      verticalVerticesHeight,
      borderThickness
    );
  }

  addMazeHorizontalWallsToGrid(width, height, borderThickness) {
    console.log('width:', width);
    let i = 0;
    const len = this.horizontal.length;
    while (i < len) {
      const row = this.horizontal[i];
      const jLen = row.length;
      let j = 0;
      while (j < jLen) {
        if (!row[j]) {
          const posX = j * width + width / 2 + borderThickness;
          const posY = (i + 1) * height + borderThickness;
          const w = width;
          const h = 2;
          this.shapes.addShapeToWorld(this.shapes.rectangle(posX, posY, w, h));
        }
        j += 1;
      }
      i += 1;
    }
  }

  addMazeVerticalWallsToGrid(width, height, borderThickness) {
    let i = 0;
    const len = this.vertical.length;
    while (i < len) {
      const column = this.vertical[i];
      const jLen = column.length;
      let j = 0;
      while (j < jLen) {
        if (!column[j]) {
          const posX = (j + 1) * width + borderThickness;
          const posY = i * height + height / 2 + borderThickness;
          const w = 2;
          const h = height;
          this.shapes.addShapeToWorld(this.shapes.rectangle(posX, posY, w, h));
        }
        j += 1;
      }
      i += 1;
    }
  }

  generateRandomMaze(render, world) {
    this.render = render;
    this.world = world;
    this.shapes = new Shapes(this.render, this.world);
    // Random Starting Point
    // this.stepThrough(this.getRandom(), this.getRandom());

    // Top left corner starting point;
    this.stepThrough(0, 0);
    this.createWalls();
    this.addMazeWallsToGrid();
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
    const copyGrid = [...this.grid];
    const copyHor = [...this.horizontal];
    const copyVer = [...this.vertical];
    console.log('Grid at start: ', copyGrid);
    console.log('Hori at start: ', copyHor);
    console.log('Ver at start: ', copyVer);

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

    // Filter Out of bound Cells
    const neighbors = [top, right, bottom, left].filter((neighbor) => neighbor);
    // Filter Already visited Neighbors
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
