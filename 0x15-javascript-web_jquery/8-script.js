// Fetches and lists the title for all movies by using this URL: https://swapi-api.alx-tools.com/api/films/?
/* global $ */
$(document).ready(function () {
  const apiUrl = 'https://swapi-api.alx-tools.com/api/films/?format=json';
  const listMovies = $('UL#list_movies');
  $.get(apiUrl, function (data) {
    const movies = data.results;
    movies.forEach(function (movie) {
      const title = movie.title;
      listMovies.append('<li>' + title + '</li>');
    });
  });
});
