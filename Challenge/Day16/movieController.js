import { getMovieById, getMovies, addMovie } from './db';

export const home = (req, res) =>
  res.render('movies', { movies: getMovies(), pageTitle: 'Movies!' });

export const getMovieAdd = (req, res) => {
  res.render('upload', { pageTitle: 'Add Movie' });
};
export const postMovieAdd = (req, res) => {
  const {
    body: { title, synopsis, genres },
  } = req;

  let movie = {
    title: title.toString(),
    synopsis: synopsis.toString(),
    genres: genres.split(','),
  };
  addMovie(movie);
  res.redirect('/');
};

export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render('404', { pageTitle: 'Movie not found' });
  }
  return res.render('detail', { movie, pageTitle: 'Movie Detail' });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
