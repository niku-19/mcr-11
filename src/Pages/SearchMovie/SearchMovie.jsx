import Card from "../../Components/Card/Card";
import { useMovieContext } from "../../Context/Movie.Context";
import styles from "./SearchMovie.module.css";
const SearchMovie = () => {
  const { movieData } = useMovieContext();
  return (
    <div className={styles.search__container}>
      <div className={styles.searchLsting__grid}>
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

export default SearchMovie;
