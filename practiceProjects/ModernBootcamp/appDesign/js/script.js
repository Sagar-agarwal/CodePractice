import App from './app.js';

const init = () => {
  const search = document.querySelector('#search');
  const dropdownList = document.querySelector('.dropdown__list');

  const app = new App(search, dropdownList);
};

init();
