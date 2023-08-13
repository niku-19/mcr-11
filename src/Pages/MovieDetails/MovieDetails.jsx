import { useParams } from "react-router-dom";
import { useMovieContext } from "../../Context/Movie.Context";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { id } = useParams();
  const { movieData } = useMovieContext();

  const singleItem = movieData?.movieData?.find(
    (EachFilter) => EachFilter.id === +id
  );

  console.log("🚀 ~ file: MovieDetails.jsx:5 ~ MovieDetails ~ id:", singleItem);

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img
          src={singleItem?.imageURL}
          className={styles.img}
          alt={singleItem?.name}
        />
      </div>
      <div className={styles.card__details}>
        <h1>{singleItem?.title}</h1>
        <p className={styles.summary}>{singleItem?.summary}</p>
        <h2>Year: {singleItem.year}</h2>
        <h2>Rating: {singleItem.rating}</h2>
        <h2>Director: {singleItem.director}</h2>
        <h2>Writer: {singleItem.writer}</h2>
        <h2>
          Cast : {singleItem.cast[0]} , {singleItem.cast[1]}
        </h2>
      </div>
    </div>
  );
};

export default MovieDetails;
