import SelectInp from "../Select input/SelectInp";
import { NavLink } from "react-router-dom";
import styles from "./Sort.module.css";
const Sort = () => {
  const genereData = [
    "All",
    "Drama",
    "Crime",
    "Action",
    "Adventure",
    "Fantasy",
    "Romance",
    "Sci-Fi",
    "Biography",
  ];

  const releaseYear = [
    "All",
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
    2023,
  ];

  const rating = ["All", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.sort__container}>
      <h1>Movies</h1>
      <SelectInp data={genereData} label={"genre"} />
      <SelectInp data={releaseYear} label={"year"} />
      <SelectInp data={rating} label={"rating"} />
      <NavLink to={"/add-new-movie"}>
        <button className={styles.btn}>Add New Movie</button>
      </NavLink>
    </div>
  );
};

export default Sort;
