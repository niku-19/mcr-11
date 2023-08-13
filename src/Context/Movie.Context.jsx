/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
import { INITIALSTATE, MovieReducer } from "../Reducer/MovieReducer";
import { movies } from "../Data/MovieData";
const MovieContext = createContext(null);

const MovieContextProvider = ({ children }) => {
  const [movieData, dispatch] = useReducer(MovieReducer, INITIALSTATE);
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("star", JSON.stringify([]));
    localStorage.setItem("watchList", JSON.stringify([]));
  }, []);
  return (
    <MovieContext.Provider value={{ movieData, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

export default MovieContextProvider;
