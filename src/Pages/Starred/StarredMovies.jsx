import Card from "../../Components/Card/Card";
import { useMovieContext } from "../../Context/Movie.Context";
import styles from "./StarredMovie.module.css";
const StarredMovies = () => {
  const { movieData } = useMovieContext();
  return (
    <div className={styles.starred__container}>
      <div className={styles.starred__grid}>
        {movieData.star.length > 0 ? (
          movieData?.star?.map((eachMovie) => {
            return <Card key={eachMovie.id} movieDatas={eachMovie} />;
          })
        ) : (
          <div className={styles.noData__container}>
            <h1 className={styles.noData}>N0 Data</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default StarredMovies;
