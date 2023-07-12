const getGenre = (data) => {
  let genre = '';
  data.forEach((ele) => {
    genre += `<div class="details__genre-item">
                <p class="details__genre-item-name">${ele}</p>
              </div>`;
  });

  return genre;
};

export default function displayMovie(root, data) {
  const rootElm = root;
  rootElm.innerHTML = '';
  rootElm.innerHTML = `<div class="header">
          <div class="hero">
            <div class="hero__poster">
              <div
                class="hero__poster-img"
                data-src-url="${data.image}"
              >
                <img
                  src="${data.image}"
                  alt="${data.title}"
                />
              </div>
            </div>
          </div>
          <div class="header-details">
            <h2 class="details__title">${data.title}</h2>

            <div class="details__genre">
            </div>
            <div class="details__info">
              <div class="info__container">
                <div class="info__title"><p>Release</p></div>
                <div class="info__detail"><p>${data.releaseDate}</p></div>
              </div>
              <div class="info__container">
                <div class="info__title"><p>Box Office</p></div>
                <div class="info__detail"><p>${data.collection}</p></div>
              </div>
              <div class="info__container">
                <div class="info__title"><p>Length</p></div>
                <div class="info__detail"><p>${data.runTime}</p></div>
              </div>
            </div>
            <div class="details__people">
              <h4 class="details__directors">${data.directors}</h4>
            </div>
          </div>
        </div>`;

  const genres = rootElm.querySelector('.details__genre');
  genres.innerHTML = getGenre(data.genres);
}
