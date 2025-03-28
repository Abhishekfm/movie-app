import { useState } from "react";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "9bd74b1f"; // Replace with your OMDb API key

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    setLoading(true);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setSelectedMovie(null);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  const getMovieDetails = async (imdbID) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Search App</h1>
        <form onSubmit={searchMovies}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a movie..."
          />
          <button type="submit">Search</button>
        </form>
      </header>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          onBack={() => setSelectedMovie(null)}
        />
      ) : (
        <MovieList movies={movies} onMovieSelect={getMovieDetails} />
      )}
    </div>
  );
}

export default App;
