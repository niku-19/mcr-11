/* eslint-disable react/prop-types */
import { useMovieContext } from "../../Context/Movie.Context";
import styles from "./SelectInp.module.css";

const SelectInp = ({ data, label }) => {
  const { dispatch } = useMovieContext();

  const handleFilter = (e) => {
    console.log(e.target.value);
    dispatch({ type: "HANDLE__FILTER", payload: e });
  };

  return (
    <div>
      <select
        name={data[0]}
        id={data[0]}
        className={styles.select}
        onChange={(e) => handleFilter(e)}
      >
        {data?.map((eachData, i) => (
          <option key={i} value={`${label} ${eachData}`}>
            {eachData}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInp;
