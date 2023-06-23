/**
 * Class Structure
 * @constructor: durationInput, startButton, pauseButton
 * @start
 * @pause
 * @onDurationChange
 * @tick
 */

export default class Timato {
  constructor(durationInput, startButton, pauseButton, resetButton, circle, callbacks) {
    this.defaultDuration = 30;
    this.defaultCirclePerimeter = 880;
    this.defaultOffset = -10;
    this.smoothFactor = 20; // Max: 20, Min 1;
    this.durationInput = durationInput;
    this.internalTimer = 0;
    this.internalDashOffset = -1000;
    this.remainder = 0;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.resetButton = resetButton;
    this.circle = circle;
    this.stepWidth = 0;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.timer = '';

    this.init();
  }

  setDefaults = () => {
    this.duration = this.defaultDuration;
    this.dashOffset = this.defaultOffset;
    this.internalTimer = this.defaultDuration;
    this.timer = '';
  };

  init = () => {
    // Setting Default Duration
    this.setDefaults();

    // Initializing Event Listeners
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
    this.resetButton.addEventListener('click', this.reset);
  };

  start = () => {
    if (this.timer) {
      console.log(`timer: ${this.timer}`);
      return;
    }
    if (this.onStart) {
      this.onStart();
    }
    this.internalTimer = this.duration;
    this.stepWidth = (this.defaultCirclePerimeter / this.duration / this.smoothFactor).toFixed(2);
    this.tick();
    this.timer = setInterval(this.tick, 1000 / this.smoothFactor);
  };

  pause = () => {
    clearInterval(this.timer);
    this.timer = '';
  };

  tick = () => {
    if (this.onTick()) {
      this.onTick();
    }

    // Handle smoothing error
    // this.remainder += this.stepWidth % 1;
    // console.log(`remainder: ${this.remainder}`);
    // if (this.remainder / 1 >= 1) {
    //   this.dashOffset -= 1;
    //   this.remainder -= 1;
    // }
    this.internalTimer -= (1 / this.smoothFactor).toFixed(2);
    this.duration = Math.round(this.internalTimer);
    this.internalDashOffset -= Math.round(this.stepWidth * 100);
    this.dashOffset = Math.round(this.internalDashOffset / 100);
    console.log(
      `offset: ${this.dashOffset} \n step: ${this.stepWidth} \n intOffset: ${this.internalDashOffset} \n intTimer: ${this.internalTimer}`
    );
    if (this.duration === 0) {
      if (this.onComplete()) {
        this.onComplete();
      }
      this.pause();
    }
  };

  reset = () => {
    clearInterval(this.timer);
    this.setDefaults();
  };

  get duration() {
    return parseInt(this.durationInput.value, 10);
  }

  set duration(time) {
    // this.durationInput.value = Math.round(time);
    this.durationInput.value = time;
  }

  get dashOffset() {
    return parseInt(this.circle.style.strokeDashoffset, 10);
  }

  set dashOffset(newOffset) {
    this.circle.style.strokeDashoffset = newOffset;
  }
}
