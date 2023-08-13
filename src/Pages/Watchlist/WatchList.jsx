import Card from "../../Components/Card/Card";
import { useMovieContext } from "../../Context/Movie.Context";
import styles from "./Watchlist.module.css";
const WatchList = () => {
  const { movieData } = useMovieContext();
  return (
    <div className={styles.watchList__container}>
      <div className={styles.watchList__grid}>
        {movieData.watchList.length > 0 ? (
          movieData?.watchList?.map((eachMovie) => {
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

export default WatchList;
