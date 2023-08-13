import { Routes, Route } from "react-router-dom";
import MovieListingPage from "./Pages/MovieListing/MovieListingPage";
import Navbar from "./Components/Navbar/Navbar";
import SearchMovie from "./Pages/SearchMovie/SearchMovie";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import StarredMovies from "./Pages/Starred/StarredMovies";
import WatchList from "./Pages/Watchlist/WatchList";
import AddNewMovie from "./Pages/Add new/AddNewMovie";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieListingPage />} />
        <Route path="/search-movies" element={<SearchMovie />} />
        <Route path="/star-movies" element={<StarredMovies />} />
        <Route path="/watched-movies" element={<WatchList />} />
        <Route path="/add-new-movie" element={<AddNewMovie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
