import { World, Bodies } from 'matter-js';

export default class Walls {
  constructor(render, world, thickness = 20) {
    this.Bodies = Bodies;
    this.render = render;
    this.world = world;
    this.width = this.render.options.width;
    this.height = this.render.options.height;
    this.wallThickness = thickness;
  }

  get thickness() {
    return this.wallThickness;
  }
  set thickness(thickness) {
    this.wallThickness = thickness;
  }

  createWall(placement, width, height) {
    let y;
    let x;

    switch (placement) {
      case 'top':
        y = 0;
        x = this.width / 2;
        break;
      case 'right':
        y = this.height / 2;
        x = this.width;
        break;
      case 'bottom':
        y = this.height;
        x = this.width / 2;
        break;
      case 'left':
        y = this.height / 2;
        x = 0;
        break;
      default:
    }
    return this.Bodies.rectangle(x, y, width, height, {
      isStatic: true,
      render: { fillStyle: 'darkblue' },
    });
  }

  wallTop() {
    const placement = 'top';
    return this.createWall(placement, this.width, this.wallThickness);
  }

  wallRight() {
    const placement = 'right';
    return this.createWall(placement, this.wallThickness, this.height);
  }

  wallBottom() {
    const placement = 'bottom';
    return this.createWall(placement, this.width, this.wallThickness);
  }

  wallLeft() {
    const placement = 'left';
    return this.createWall(placement, this.wallThickness, this.height);
  }

  addWalls() {
    // this.setDefaults(render);

    World.add(this.world, [this.wallTop(), this.wallRight(), this.wallBottom(), this.wallLeft()]);
  }
}
