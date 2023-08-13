/* eslint-disable react/prop-types */
import { useMovieContext } from "../../Context/Movie.Context";
import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ movieDatas }) => {
  const { dispatch } = useMovieContext();

  const handleAddToStar = (data) => {
    dispatch({ type: "HANDLE__ADD__TO__STAR", payload: data });
  };

  const handleAddWatchList = (data) => {
    dispatch({ type: "HANDLE__ADD__TO__watchList", payload: data });
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <NavLink to={`/movie/${movieDatas?.id}`}>
          <img src={movieDatas?.imageURL} className={styles.img} alt="" />
        </NavLink>
      </div>
      <NavLink to={`/movie/${movieDatas?.id}`}>
        <div className={styles.card__details}>
          <h1>{movieDatas?.title}</h1>
          <p>{movieDatas?.summary}</p>
        </div>
      </NavLink>
      <div className={styles.button__container}>
        <button
          className={styles.btn}
          onClick={() => handleAddToStar(movieDatas)}
        >
          star
        </button>
        <button
          className={styles.btn}
          onClick={() => handleAddWatchList(movieDatas)}
        >
          Add To Watchlist
        </button>
      </div>
    </div>
  );
};

export default Card;
