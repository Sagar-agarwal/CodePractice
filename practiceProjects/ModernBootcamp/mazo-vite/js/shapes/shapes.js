import { Bodies, World } from 'matter-js';
import Walls from './walls';

export default class Shapes {
  constructor(render, world) {
    this.world = world;
    this.render = render;
    this.canvasWidth = render ? render.options.width : undefined;
    this.canvasHeight = render ? render.options.height : undefined;

    this.defaultRadiusMax = Math.floor(this.canvasWidth / 10);
    this.defaultRadiusMin = 40;
    this.defaultSidesMax = 8;
    this.defaultShapeWidthMax = Math.floor(this.canvasWidth / 10);
    this.defaultShapeHeightMax = Math.floor(this.canvasHeight / 10);
    this.defaultShapeMinWidthOrHeight = Math.floor(this.canvasHeight / 15);
    this.defaultSlopeMax = 3;
  }

  addShapeToWorld(shape) {
    World.add(this.world, shape);
  }

  getRandom(max, min = 1) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getRandomX() {
    return this.getRandom(this.canvasWidth);
  }

  getRandomY() {
    return this.getRandom(this.canvasHeight);
  }

  circleRandom = (x, y) => {
    const radius = this.getRandom(this.defaultRadiusMax, this.defaultRadiusMin);
    return Bodies.circle(x, y, radius, { render: { fillStyle: '#419D78' } });
  };

  polygonRandom = (x, y) => {
    const sides = this.getRandom(this.defaultSidesMax, 5);
    const radius = this.getRandom(this.defaultRadiusMax, this.defaultRadiusMin);

    return Bodies.polygon(x, y, sides, radius, { render: { fillStyle: '#2D3047' } });
  };

  rectangleRandom = (x, y) => {
    const width = this.getRandom(this.defaultShapeWidthMax, this.defaultShapeMinWidthOrHeight);
    const height = this.getRandom(this.defaultShapeHeightMax, this.defaultShapeMinWidthOrHeight);

    return Bodies.rectangle(x, y, width, height, { render: { fillStyle: '#E0A458' } });
  };

  rectangle = (x, y, w, h, isStatic = true, fillStyle = '#ddd') => {
    return Bodies.rectangle(x, y, w, h, { isStatic, render: { fillStyle } });
  };

  trapezoidRandom = (x, y) => {
    const width = this.getRandom(this.defaultShapeWidthMax / 2, this.defaultShapeMinWidthOrHeight);
    const height = this.getRandom(this.defaultShapeHeightMax, this.defaultShapeMinWidthOrHeight);
    const slope = this.getRandom(this.defaultSlopeMax, 2);

    return Bodies.trapezoid(x, y, width, height, slope, { render: { fillStyle: '#C04ABC' } });
    // return Bodies.trapezoid(x, y, 100, 100, 3, { render: { fillStyle: '#C04ABC' } });
  };

  getRandomShapes(number = 0) {
    const allShapes = [];
    const availableShapes = [
      this.circleRandom,
      this.polygonRandom,
      this.rectangleRandom,
      this.trapezoidRandom,
    ];

    for (let i = 0; i < number; i += 1) {
      const shapeIndex = Math.floor(Math.random() * availableShapes.length);
      // const shapeConstruct = availableShapes[shapeIndex];
      // const shape = shapeConstruct(this.getRandomX(), this.getRandomY());
      allShapes.push(availableShapes[shapeIndex](this.getRandomX(), this.getRandomY()));
      // allShapes.push(shape);
    }

    return allShapes;
  }

  addWalls() {
    return new Walls(this.render, this.world).addWalls();
  }

  get width() {
    return this.canvasWidth;
  }

  set width(width) {
    this.canvasWidth = width;
  }

  get height() {
    return this.canvasHeight;
  }

  set height(height) {
    this.canvasHeight = height;
  }

  get borderWidth() {
    return new Walls(this.render, this.world).thickness;
  }
}
