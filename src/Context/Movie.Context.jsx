/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { INITIALSTATE, MovieReducer } from "../Reducer/MovieReducer";

const MovieContext = createContext(null);

const MovieContextProvider = ({ children }) => {
  const [movieData, dispatch] = useReducer(MovieReducer, INITIALSTATE);
  console.log(
    "🚀 ~ file: Movie.Context.jsx:10 ~ MovieContextProvider ~ movieData:",
    movieData
  );
  return (
    <MovieContext.Provider value={{ movieData, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

export default MovieContextProvider;
