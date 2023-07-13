import '../css/style.css';

import { Engine, World, Render, Runner } from 'matter-js';
import Shapes from './shapes/shapes.js';
import MazeGenerator from './maze/mazeGenerator';

const engine = Engine.create();
const { world } = engine;

const render = Render.create({
  element: document.querySelector('#app'),
  engine,
  options: {
    wireframes: false,
    width: 650,
    height: 650,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

const shapes = new Shapes(render, world);
shapes.addWalls();

const mazeGridSize = 10;
const Maze = new MazeGenerator(mazeGridSize);
Maze.generateRandomMaze();
