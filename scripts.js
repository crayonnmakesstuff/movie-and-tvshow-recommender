const genres = [
    {
      id: 'action',
      name: 'Action',
      movies: ['Fallout', 'Civil War', 'Dune', 'The Gentlemen', 'Godzilla X Kong: The New Empire'] // Add more movies
    },
    {
      id: 'comedy',
      name: 'Comedy',
      movies: ['The Sympathizer', 'Poor Things', 'Young Sheldon', 'The Fall Guy', 'Monk'] // Add more movies
    }
    // Add more genres
  ];
  
  function createMovieList(genreId) {
    const genreSection = document.getElementById(genreId);
    const movieList = document.createElement('ul');
    movieList.classList.add('movie-list');
  
    const genre = genres.find(genre => genre.id === genreId);
  
    genre.movies.forEach(movie => {
      const listItem = document.createElement('li');
      listItem.textContent = movie;
      movieList.appendChild(listItem);
    });
  
    genreSection.appendChild(movieList);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    genres.forEach(genre => {
      createMovieList(genre.id);
      const genreSection = document.getElementById(genre.id);
      genreSection.addEventListener('click', () => {
        window.location.href = `${genre.id}.html`;
      });
    });
  });
  