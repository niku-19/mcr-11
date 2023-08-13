import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useMovieContext } from "../../Context/Movie.Context";

const Navbar = () => {
  const { dispatch } = useMovieContext();

  const handleSearch = (e) => {
    dispatch({ type: "HANDLE__SEARCH", payload: e });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.brand__name}>
          <NavLink to={"/"}>IMDB</NavLink>
        </h1>
        <NavLink to={"/search-movies"}>
          <div className={styles.search__box}>
            <input
              type="text"
              name="seacrch"
              id="search"
              placeholder="Search Movies by Title, Cast And director..."
              className={styles.inp}
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </NavLink>
        <ul className={styles.ul}>
          <li>
            <NavLink to={"/"}>Movies</NavLink>
          </li>
          <li>
            <NavLink to={"/watched-movies"}>Watch List</NavLink>
          </li>
          <li>
            <NavLink to={"/star-movies"}>Starred Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
