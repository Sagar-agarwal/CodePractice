import Keys from './keys.js';

export default class TMDB {
  constructor() {
    this.keyCounter = 0;
    this.TMDBKeyArr = Keys.tmdb;
    this.key = this.TMDBKeyArr[this.keyCounter];
    this.cacheSearch = {};
    this.cacheMovies = {};

    // API Configuration
    this.apiVersion = 3;
    this.baseURL = `https://api.themoviedb.org/${this.apiVersion}`;
    this.currentURL = '';

    this.init();
  }

  init = async () => {
    console.log('TMDB Initialization');
    const res = await this.searchTitle('tt0458339');
    console.log(res);
  };

  getResult = (res) => {
    const result = {
      hasData: res.hasData,
      error: Object.hasOwn(res.data, 'Error') ? res.data.Error : '',
      data: Object.hasOwn(res.data, 'Search') ? res.data.Search.slice(0, 9) : res.data,
    };

    return result;
  };

  searchMovies = async (q) => {
    const movies = await this.fetchData({ api_key: this.key, external_source: 'imdb_id' });
    return this.getResult(movies);
  };

  searchTitle = async (id) => {
    this.currentURL = `${this.baseURL}/find/${id}`;
    const title = await this.fetchData({ api_key: this.key, external_source: 'imdb_id' });
    return title;
    // return this.getResult(title);
  };

  fetchData = async (params) => {
    const result = {};
    const res = await axios.get(this.currentURL, { params });

    result.hasData = res.data.Response === 'True';
    result.data = res.data;

    return result;
  };
}
