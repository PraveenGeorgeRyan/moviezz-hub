import create from "zustand";
import { persist } from "zustand/middleware";
import { Movie } from "../types";

interface WatchlistState {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (imdbID: string) => void;
  isInWatchlist: (imdbID: string) => boolean;
}

export const useWatchlistStore = create<WatchlistState>()(
  persist(
    (set, get) => ({
      watchlist: [],
      addToWatchlist: (movie: Movie) =>
        set((state) => ({ watchlist: [...state.watchlist, movie] })),
      removeFromWatchlist: (imdbID: string) =>
        set((state) => ({
          watchlist: state.watchlist.filter((m) => m.imdbID !== imdbID),
        })),
      isInWatchlist: (imdbID: string) =>
        get().watchlist.some((m) => m.imdbID === imdbID),
    }),
    {
      name: "watchlist-storage",
    }
  )
);
