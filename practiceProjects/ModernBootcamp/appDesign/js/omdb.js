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

  searchMovies = async (q) => {
    const movies = await this.fetchData({ apikey: this.key, s: q });
    return movies.hasData ? movies.data.Search.slice(0, 9) : movies.data.Error;
  };

  searchTitle = async (id) => {
    const title = await this.fetchData({ apikey: this.key, i: id });
    return title.hasData ? title.data.Search : title.data.Error;
  };

  fetchData = async (params) => {
    const result = {};
    const res = await axios.get(this.baseURL, { params });

    // console.log(res);
    result.hasData = res.data.Response === 'True';
    result.data = res.data;

    return result;
  };
}
