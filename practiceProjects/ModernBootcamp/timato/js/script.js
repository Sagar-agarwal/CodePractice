/**
 * --- Architecture: Event Based ---
 *  EL to watch for click on start button
 *    - Emit event that timer has start
 *    Start Counting down the timer
 *    - Emit an event that the timer has ticked
 *    Each time timer counts down, update the text
 *    If we counted down and timer reached 0
 *      - Emit event that timer is zero
 *      Reset internal timer
 *
 * */

// Imports
import Timato from './Timato.js';

/**
 * Timer UI Handler
 */

const init = () => {
  const duration = document.querySelector('#duration');
  const startButton = document.querySelector('#button-start');
  const pauseButton = document.querySelector('#button-pause');
  const resetButton = document.querySelector('#button-reset');
  const circle = document.querySelector('.t__circle--outer');
  const Timer = new Timato(duration, startButton, pauseButton, resetButton, circle, {
    onStart() {
      console.log('Timer Started');
    },
    onTick() {
      console.log('Ticking');
    },
    onComplete() {
      console.log('Timer Completed');
    },
  });
};

init();
