import Card from "../../Components/Card/Card";
import Sort from "../../Components/Sort/Sort";
import { useMovieContext } from "../../Context/Movie.Context";
import styles from "./MovieListing.module.css";
const MovieListingPage = () => {
  const { movieData } = useMovieContext();

  return (
    <div className={styles.movieLisint__container}>
      <Sort />
      <div className={styles.movieListing__grid}>
        {movieData.updatedMovieData.length > 0 ? (
          movieData?.updatedMovieData?.map((eachMovie) => {
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

export default MovieListingPage;
