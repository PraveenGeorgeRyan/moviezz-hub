import React, { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import { searchMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchTerm) {
      const delayDebounceFn = setTimeout(() => {
        handleSearch();
      }, 300);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchTerm]);

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      setIsLoading(true);
      setError(null);
      try {
        const results = await searchMovies(searchTerm);
        setMovies(results);
        if (results.length === 0) {
          setError("No movies found. Try a different search term.");
        }
      } catch (err) {
        setError(
          "An error occurred while searching for movies. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      setMovies([]);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search Movies</h1>
      <div className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies... (e.g., John Wick)"
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            onClick={handleSearch}
            className="bg-red-600 text-white p-2 rounded-r-md hover:bg-red-700 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Searching..." : <SearchIcon size={24} />}
          </button>
        </div>
      </div>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {isLoading && (
        <p className="text-gray-600 mb-4">Searching for movies...</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
