/**
 * Class Structure
 * @constructor: durationInput, startButton, pauseButton
 * @start
 * @pause
 * @onDurationChange
 * @tick
 */

export default class Timato {
  constructor(durationInput, startButton, pauseButton, resetButton, callbacks) {
    this.defaultDuration = 30;
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.resetButton = resetButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.timer = '';

    this.init();
  }

  init = () => {
    // Setting Default Duration
    this.duration = this.defaultDuration;

    // Initializing Event Listeners
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
    this.resetButton.addEventListener('click', this.reset);
  };

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.timer = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.timer);
  };

  tick = () => {
    if (this.onTick()) {
      this.onTick();
    }
    this.duration -= 1;
    if (this.duration === 0) {
      if (this.onComplete()) {
        this.onComplete();
      }
      this.pause();
    }
  };

  reset = () => {
    clearInterval(this.timer);
    this.duration = this.defaultDuration;
  };

  get duration() {
    return parseInt(this.durationInput.value, 10);
  }

  set duration(time) {
    this.durationInput.value = time;
  }
}
