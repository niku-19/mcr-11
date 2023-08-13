/* eslint-disable react/prop-types */
import { useMovieContext } from "../../Context/Movie.Context";
import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ movieDatas }) => {
  const { dispatch, movieData } = useMovieContext();

  const handleAddToStar = (data) => {
    dispatch({ type: "HANDLE__ADD__TO__STAR", payload: data });
  };

  const handleAddWatchList = (data) => {
    dispatch({ type: "HANDLE__ADD__TO__watchList", payload: data });
  };

  const handleRemoveToStar = (data) => {
    dispatch({ type: "HANDLE__REMOVE__TO__STAR", payload: data });
  };
  const handleRemoveWatchList = (data) => {
    dispatch({ type: "HANDLE__REMOVE__TO__WATCHLIST", payload: data });
  };

  const isAlreadyStar = movieData?.star?.some(
    (Eachmovie) => Eachmovie.id === movieDatas.id
  );
  const isAlreadyWatchList = movieData?.watchList?.some(
    (Eachmovie) => Eachmovie.id === movieDatas.id
  );
  console.log("🚀 ~ file: Card.jsx:20 ~ Card ~ isAlreadyStar:", isAlreadyStar);

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
          onClick={
            !isAlreadyStar
              ? () => handleAddToStar(movieDatas)
              : () => handleRemoveToStar(movieDatas)
          }
        >
          {isAlreadyStar ? "started" : "star"}
        </button>
        <button
          className={styles.btn}
          onClick={
            isAlreadyWatchList
              ? () => handleRemoveWatchList(movieDatas)
              : () => handleAddWatchList(movieDatas)
          }
        >
          {isAlreadyWatchList ? "Added To WatchList" : "Add To WatchList"}
        </button>
      </div>
    </div>
  );
};

export default Card;
