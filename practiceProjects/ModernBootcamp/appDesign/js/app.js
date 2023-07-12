import OMDB from './omdb.js';
import TMDB from './tmdb.js';
import displayMovie from './movie.js';

export default class App {
  constructor(root, dropDown, results) {
    this.root = root;
    this.dropDown = dropDown;
    this.results = results;

    this.debounceID = '';
    this.movieTitle = '';

    this.OMDB = new OMDB();
    this.init();
  }

  init = () => {
    this.root.addEventListener('input', this.debounce(this.getMovies));
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
    this.dropDown.innerHTML = '';
    const div = document.createElement('div');
    div.classList = 'results__error';
    const error = document.createElement('h3');
    error.textContent = err.error;
    div.appendChild(error);
    this.dropDown.appendChild(div);
  }

  restPage = () => {
    this.results.innerHTML = '';
    this.dropDown.innerHTML = '';
  };

  getMovies = async (event) => {
    this.restPage();
    if (event.target.value) {
      const movies = await this.OMDB.searchMovies(event.target.value);
      if (movies.hasData) {
        const self = this;
        movies.data.forEach((movie) => {
          const listItem = self.getResultsListElements(movie);
          this.dropDown.appendChild(listItem);
        });
      } else {
        this.errorHandler(movies);
      }
    }
  };

  getCollectionInMillions = (amountInString) => {
    console.log(amountInString);
    if (amountInString == 'N/A') {
      return 'N/A';
    }
    let amount = amountInString.replace('$', '').replaceAll(',', '');
    amount = parseInt(amount, 10);
    amount /= 1000000;
    amount = Math.round(amount);
    if (amount > 1000) {
      amount /= 1000;
      amount = Math.round(amount);
      amount = `$${amount}B`;
    } else {
      amount = `$${amount}M`;
    }
    return amount;
  };

  getMovieTitle = async (movieID) => {
    this.restPage();
    if (movieID) {
      const movie = await this.OMDB.searchTitle(movieID);
      console.log(movie);
      if (movie.hasData) {
        displayMovie(this.results, {
          title: movie.data.Title,
          image: movie.data.Poster,
          genres: movie.data.Genre.split(','),
          directors: movie.data.Director,
          releaseDate: movie.data.Released,
          collection: this.getCollectionInMillions(movie.data.BoxOffice),
          runTime: movie.data.Runtime,
        });
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
