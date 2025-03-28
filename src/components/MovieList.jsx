import React from "react";

function MovieList({ movies, onMovieSelect }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="movie-card"
            onClick={() => onMovieSelect(movie.imdbID)}
          >
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/150"
              }
              alt={movie.Title}
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))
      ) : (
        <div className="empty">
          No movies found. Try a different search term!
        </div>
      )}
    </div>
  );
}

export default MovieList;
