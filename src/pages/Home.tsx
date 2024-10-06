import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const randomMovies = await searchMovies("random");
      setMovies(randomMovies.slice(0, 8));
    };

    fetchMovies();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MoviezzHub</h1>
      <p className="text-xl mb-8">
        Browse movies, add them to watchlists, and share them with friends.
      </p>
      <div className="space-x-4">
        <Link
          to="/search"
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
        >
          Search Movies
        </Link>
        <Link
          to="/watchlist"
          className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
        >
          My Watchlist
        </Link>
      </div>
      <div className="mt-8">
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <motion.div
                key={movie.imdbID}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MovieCard movie={movie} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
