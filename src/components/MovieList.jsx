import React from "react";

function MovieList({ movies, onMovieSelect, hasSearched }) {
  console.log("Movies in MovieList:", movies); // Debug
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
              alt={movie.Title || "Movie Poster"}
            />
            <h3>{movie.Title || "No Title"}</h3>
            <p>{movie.Year || "No Year"}</p>
          </div>
        ))
      ) : (
        <div className="empty">
          {hasSearched
            ? "No movies found. Try a different search term!"
            : "Search for the movie"}
        </div>
      )}
    </div>
  );
}

export default MovieList;
