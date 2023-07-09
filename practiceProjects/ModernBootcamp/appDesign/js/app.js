import OMDB from './omdb.js';
import TMDB from './tmdb.js';

export default class App {
  constructor(input, resultsList, movie) {
    this.input = input;
    this.resultsList = resultsList;
    this.movie = movie;

    this.debounceID = '';
    this.movieTitle = '';

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

  errorHandler(err) {
    this.resultsList.innerHTML = '';
    const div = document.createElement('div');
    div.classList = 'results__error';
    const error = document.createElement('h3');
    error.textContent = err.error;
    div.appendChild(error);
    this.resultsList.appendChild(div);
  }

  restPage = () => {
    this.movie.innerHTML = '';
    this.resultsList.innerHTML = '';
  };

  getMovies = async (event) => {
    this.restPage();
    if (event.target.value) {
      const movies = await this.OMDB.searchMovies(event.target.value);
      if (movies.hasData) {
        const self = this;
        movies.data.forEach((movie) => {
          const listItem = self.getResultsListElements(movie);
          this.resultsList.appendChild(listItem);
        });
      } else {
        this.errorHandler(movies);
      }
    }
  };

  getMovieTitle = async (movieID) => {
    this.restPage();
    if (movieID) {
      const movie = await this.OMDB.searchTitle(movieID);
      console.log(movie);
      if (movie.hasData) {
        console.log(movie.data);
      } else {
        this.errorHandler(movie.error);
      }
    }
  };

  getResultsListElements = (movie) => {
    const listItem = document.createElement('div');
    listItem.classList = 'results__list-item';

    listItem.addEventListener('click', (e) => {
      this.getMovieTitle(movie.imdbID);
    });

    const imageDiv = document.createElement('div');
    imageDiv.classList = 'item__img';
    const titleImg = document.createElement('img');
    titleImg.setAttribute('src', movie.Poster);
    titleImg.setAttribute('alt', movie.Title);
    imageDiv.appendChild(titleImg);
    listItem.appendChild(imageDiv);

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

    listItem.appendChild(titleDetails);
    return listItem;
  };
}
