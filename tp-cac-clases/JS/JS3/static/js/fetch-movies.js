const URLSERVER = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
  }
};

const renderTopRated = (movie) => {
  let html = `
      <div class="movie-item-v2">
        <div class="wrapper">
            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}" alt="" class="movie-item-img-v2">
        </div>
        <div class="movie-item-detail-v2">
            <p class="movie-item-detail-title-v2">${movie.title}</p>
            <p class="movie-item-detail-subtitle-v2">${movie.release_date} / ${movie.vote_average} ⭐</p>
        </div>
      </div>
  `
  return html;
}
