/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Movie } from "../types";
const API_KEY = import.meta.env.VITE_REACT_APP_OMDB_API_KEY;
const API_URL = import.meta.env.VITE_REACT_APP_OMDB_API_URL;

export const searchMovies = async (searchTerm: string): Promise<Movie[]> => {
  try {
    // console.log("API_KEY", API_KEY);
    const response = await axios.get(API_URL, {
      params: {
        apikey: API_KEY,
        s: searchTerm,
        type: "movie",
      },
    });

    if (response.data.Response === "True") {
      return response.data.Search.map((movie: any) => ({
        imdbID: movie.imdbID,
        Title: movie.Title,
        Year: movie.Year,
        Poster: movie.Poster,
      }));
    } else {
      console.log("No movies found:", response.data.Error);
      return [];
    }
  } catch (error) {
    console.log("Error searching movies:", error);
    return [];
  }
};

export const getMovieDetails = async (
  imdbID: string
): Promise<Movie | null> => {
  try {
    // console.log("API_KEY", API_KEY);
    const response = await axios.get(API_URL, {
      params: {
        apikey: API_KEY,
        i: imdbID,
        plot: "full",
      },
    });

    if (response.data.Response === "True") {
      return {
        imdbID: response.data.imdbID,
        Title: response.data.Title,
        Year: response.data.Year,
        Poster: response.data.Poster,
        Plot: response.data.Plot,
        Director: response.data.Director,
        Actors: response.data.Actors,
        Genre: response.data.Genre,
        Runtime: response.data.Runtime,
      };
    } else {
      console.log("Movie details not found:", response.data.Error);
      return null;
    }
  } catch (error) {
    console.log("Error fetching movie details:", error);
    return null;
  }
};
