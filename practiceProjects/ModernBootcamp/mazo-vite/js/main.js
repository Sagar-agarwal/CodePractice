import '../css/style.css';

import { Engine, World, Render, Runner, Bodies } from 'matter-js';
import Borders from './shapes/borders';

const engine = Engine.create();
const { world } = engine;
const Border = new Borders();

const render = Render.create({
  element: document.querySelector('#app'),
  engine,
  option: {
    width: 1000,
    height: 1000,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Add borders to the world
Border.addAllBorders(render, world);

const rect = Bodies.rectangle(300, 300, 50, 50, { isStatic: false });
World.add(world, rect);
