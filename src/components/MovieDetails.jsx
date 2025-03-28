import React from "react";

function MovieDetails({ movie, onBack }) {
  return (
    <div className="movie-details">
      <button onClick={onBack}>Back to Search</button>
      <div className="details-content">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300"
          }
          alt={movie.Title}
        />
        <div className="details-text">
          <h2>
            {movie.Title} ({movie.Year})
          </h2>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}/10
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
