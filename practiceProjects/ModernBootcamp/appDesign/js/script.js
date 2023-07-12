import App from './app.js';
import AutoComplete from './autocomplete.js';
import TMDB from './tmdb.js';

const init = () => {
  const search = document.querySelector('#search');
  const dropdownList = document.querySelector('.results__list');
  const movie = document.querySelector('.movie');

  const autocomplete = new App(search, dropdownList, movie);

  // const t = new TMDB();
};

init();
