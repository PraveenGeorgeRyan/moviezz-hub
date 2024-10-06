import React from "react";
import { useWatchlistStore } from "../store/watchlistStore";
import MovieCard from "../components/MovieCard";

const Watchlist: React.FC = () => {
  const { watchlist } = useWatchlistStore();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>
          Your watchlist is empty. Start adding movies from the search page!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isWatchlistPage={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
