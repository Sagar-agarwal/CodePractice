import Keys from './keys.js';

export default class OMDB {
  constructor() {
    this.keyCounter = 0;
    this.OMDBKeyArr = Keys.omdb;
    this.key = this.OMDBKeyArr[this.keyCounter];
    this.cacheSearch = {};
    this.cacheMovies = {};

    // API Configuration
    this.baseURL = 'http://www.omdbapi.com/';

    // Initialize
    // this.init();
  }

  getResult = (res) => {
    const result = {
      hasData: res.hasData,
      error: Object.hasOwn(res.data, 'Error') ? res.data.Error : '',
      data: Object.hasOwn(res.data, 'Search') ? res.data.Search.slice(0, 9) : res.data,
    };

    return result;
  };

  searchMovies = async (q) => {
    const movies = await this.fetchData({ apikey: this.key, s: q });
    return this.getResult(movies);
  };

  searchTitle = async (id) => {
    const title = await this.fetchData({ apikey: this.key, i: id });
    return this.getResult(title);
  };

  fetchData = async (params) => {
    const result = {};
    const res = await axios.get(this.baseURL, { params });

    result.hasData = res.data.Response === 'True';
    result.data = res.data;

    return result;
  };
}
