import '../css/style.css';

import { Engine, World, Render, Runner, Bodies, MouseConstraint, Mouse } from 'matter-js';
import Shapes from './shapes/shapes.js';

const engine = Engine.create();
const { world } = engine;

const render = Render.create({
  element: document.querySelector('#app'),
  engine,
  options: {
    wireframes: false,
    width: 800,
    height: 800,
  },
});

console.log('render: ', render);

Render.run(render);
Runner.run(Runner.create(), engine);
World.add(world, MouseConstraint.create(engine, { mouse: Mouse.create(render.canvas) }));

const shapes = new Shapes(render, world);
// Add borders to the world
shapes.addWalls();

// Add random shapes to the world
const randomShapes = shapes.getRandomShapes(20);
World.add(world, randomShapes);
