import React from "react";
import { Plus, Check, X, Info } from "lucide-react";
import { useWatchlistStore } from "../store/watchlistStore";
import { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
  isWatchlistPage?: boolean; // New prop to indicate if it's the watchlist page
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  isWatchlistPage = false,
}) => {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } =
    useWatchlistStore();

  const toggleWatchlist = () => {
    if (isInWatchlist(movie.imdbID)) {
      removeFromWatchlist(movie.imdbID);
    } else {
      addToWatchlist(movie);
    }
  };

  const truncateTitle = (title: string, maxLength: number) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {truncateTitle(movie.Title, 30)}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{movie.Year}</p>
        <div className="flex justify-between">
          <button
            onClick={toggleWatchlist}
            className={`flex items-center px-3 py-1 rounded-md ${
              isWatchlistPage
                ? "bg-red-600 text-white"
                : isInWatchlist(movie.imdbID)
                ? "bg-green-500 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {isInWatchlist(movie.imdbID) ? (
              isWatchlistPage ? (
                <>
                  <X size={16} className="mr-1" /> Remove
                </>
              ) : (
                <>
                  <Check size={16} className="mr-1" /> Added
                </>
              )
            ) : (
              <>
                <Plus size={16} className="mr-1" /> Add to Watchlist
              </>
            )}
          </button>
          <button className="flex items-center px-3 py-1 bg-gray-200 rounded-md">
            <Info size={16} className="mr-1" /> Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
