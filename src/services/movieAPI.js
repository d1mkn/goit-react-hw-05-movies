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
    return await response.json();
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
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
}
