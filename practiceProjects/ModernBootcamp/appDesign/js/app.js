import OMDB from './omdb.js';

export default class App {
  constructor(input, dropdownList) {
    this.input = input;
    this.dropdownList = dropdownList;

    this.debounceID = '';

    this.OMDB = new OMDB();
    // Initialize
    this.init();
  }

  init = () => {
    this.input.addEventListener('input', this.debounce(this.getMovies));
  };

  debounce = (func) => {
    const result = (...args) => {
      if (this.debounceID) {
        clearTimeout(this.debounceID);
      }

      this.debounceID = setTimeout(() => {
        func(...args);
      }, 1000);
    };
    return result;
  };

  getMovies = async (event) => {
    this.dropdownList.innerHTML = '';
    if (event.target.value) {
      const movies = await this.OMDB.searchMovies(event.target.value);
      console.log(movies);
      const self = this;
      movies.forEach((movie) => {
        const listItem = self.getDropDownListElement(movie);
        this.dropdownList.appendChild(listItem);
      });
    }
  };

  getDropDownListElement = (movie) => {
    const listItem = document.createElement('div');
    listItem.classList = 'dropdown__list-item';

    const imageDiv = document.createElement('div');
    imageDiv.classList = 'item__img';
    const titleImg = document.createElement('img');
    titleImg.setAttribute('src', movie.Poster);
    titleImg.setAttribute('alt', movie.Title);
    imageDiv.appendChild(titleImg);

    const titleDetails = document.createElement('div');
    titleDetails.classList = 'item__movie';
    const movieName = document.createElement('div');
    movieName.classList = 'item__movie--name';
    movieName.textContent = movie.Title;
    titleDetails.appendChild(movieName);
    const movieYear = document.createElement('div');
    movieYear.classList = 'item__movie--year';
    movieYear.textContent = '(' + movie.Year + ')';
    titleDetails.appendChild(movieYear);

    imageDiv.appendChild(titleDetails);
    listItem.appendChild(imageDiv);

    return listItem;
  };
}
