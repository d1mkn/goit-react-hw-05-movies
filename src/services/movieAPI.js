const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzc5YjU0M2FkZmRiNTI3NTRmNTM0Zjg4NzQwZWVhOSIsInN1YiI6IjY0NzM5NzZmZGQ3MzFiMmQ3YjY1ZDJmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6h-bjtxgs4nr94NSLdnPuJU9g--17ZpHDO_f_Ba8yfA',
  },
};

export async function getTrendingMovies() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    );
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(new Error(`There are no trending movies yet.`));
  } catch (err) {
    return console.error(err);
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(new Error(`An error occurred during the request.`));
  } catch (err) {
    return console.error(err);
  }
}

export async function getMovieCast(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&page=1`,
      options
    );
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(
      new Error(`There is no information about the cast of this movie yet.`)
    );
  } catch (err) {
    return console.error(err);
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    );
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(new Error(`No one has left a review yet.`));
  } catch (err) {
    return console.error(err);
  }
}

export async function searchMovieByWord(query) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1'`,
      options
    );
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(
      new Error(`Movies matching your search were not found.`)
    );
  } catch (err) {
    return console.error(err);
  }
}
