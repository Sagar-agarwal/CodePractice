import { World, Bodies } from 'matter-js';

export default class Borders {
  constructor() {
    this.Bodies = Bodies;
    this.render = undefined;
    this.width = undefined;
    this.height = undefined;
    this.borderThickness = 30;
  }

  createBorder(placement, width, height) {
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
    return this.Bodies.rectangle(x, y, width, height, { isStatic: true });
  }

  setDefaults(render) {
    this.render = render;
    this.width = render.options.width;
    this.height = render.options.height;
  }

  borderTop() {
    const placement = 'top';
    return this.createBorder(placement, this.width, this.borderThickness);
  }

  borderRight() {
    const placement = 'right';
    return this.createBorder(placement, this.borderThickness, this.height);
  }

  borderBottom() {
    const placement = 'bottom';
    return this.createBorder(placement, this.width, this.borderThickness);
  }

  borderLeft() {
    const placement = 'left';
    return this.createBorder(placement, this.borderThickness, this.height);
  }

  addAllBorders(render, world) {
    this.setDefaults(render);

    World.add(world, this.borderTop());
    World.add(world, this.borderRight());
    World.add(world, this.borderBottom());
    World.add(world, this.borderLeft());
  }
}
