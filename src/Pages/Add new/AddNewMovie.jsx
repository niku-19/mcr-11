import { useState } from "react";
import { useMovieContext } from "../../Context/Movie.Context";
import styles from "./addNewMovie.module.css";
const AddNewMovie = () => {
  const { dispatch } = useMovieContext();
  const [addProductData, setAddProductData] = useState({
    id: Math.floor(Math.random() * 999999) + 1,
    title: " ",
    year: 1990,
    genre: "",
    rating: 9,
    director: "",
    writer: "",
    cast: "",
    summary: "",
    imageURL:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
  });

  const addProductandler = (e) => {
    e.preventDefault();
    dispatch({ type: "HANDLE__ADD__NEW__PRODUCT", payload: addProductData });
  };

  return (
    <div className={styles.container}>
      <h1>Add New Product</h1>
      <form action="#" onSubmit={(e) => addProductandler(e)}>
        <div className={styles.name__box}>
          <label htmlFor="name">Title: </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Product Name"
            name="name"
            id="name"
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.Des__box}>
          <label htmlFor="des">summary: </label>
          <textarea
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                summary: e.target.value,
              })
            }
            name="des"
            id="des"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className={styles.price__box}>
          <label htmlFor="price">Year: </label>
          <input
            className={styles.input}
            type="number"
            name="price"
            id="price"
            value={addProductData.price}
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                year: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.stock__box}>
          <label htmlFor="stock">Rating: </label>
          <input
            className={styles.input}
            type="number"
            name="stock"
            id="stock"
            value={addProductData.stock}
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                rating: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.sku__box}>
          <label htmlFor="sku">Genere: </label>
          <input
            className={styles.input}
            type="text"
            name="sku"
            id="sku"
            placeholder="please typw with one space"
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                genre: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.supplier__box}>
          <label htmlFor="supplier">Director: </label>
          <input
            className={styles.input}
            type="text"
            name="supplier"
            id="supplier"
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                director: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.supplier__box}>
          <label htmlFor="supplier">cast: </label>
          <input
            className={styles.input}
            type="text"
            name="supplier"
            id="supplier"
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                cast: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.supplier__box}>
          <label htmlFor="supplier">writer: </label>
          <input
            className={styles.input}
            type="text"
            name="supplier"
            id="supplier"
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                writer: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.image__box}>
          <label htmlFor="image">Image URL: </label>
          <input
            className={styles.input}
            type="text"
            name="image"
            id="image"
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                imageUrl: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className={styles.btn}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewMovie;
