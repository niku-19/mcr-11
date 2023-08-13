const INITIALSTATE = {
  movieData: JSON.parse(localStorage.getItem("movies")),
  updatedMovieData: JSON.parse(localStorage.getItem("movies")),
  appliedFiter: [],
  star: JSON.parse(localStorage.getItem("star")),
  watchList: JSON.parse(localStorage.getItem("watchList")),
};

const MovieReducer = (state, { type, payload }) => {
  switch (type) {
    case "HANDLE__FILTER": {
      const term = payload.target.value;
      const key = term.split(" ");
      console.log("🚀 ~ file: MovieReducer.js:12 ~ MovieReducer ~ key:", key);

      if (key[1].includes("All"))
        return {
          ...state,
          updatedMovieData: state.movieData,
          appliedFiter: state.movieData,
        };

      if (key[0].includes("genre")) {
        const result = state.movieData?.filter((eachFilter) =>
          eachFilter[key[0]].includes(key[1])
        );
        return {
          ...state,
          updatedMovieData: result,
          appliedFiter: result,
        };
      } else if (key[0].includes("year")) {
        const result = state.appliedFiter?.filter(
          (eachFilter) => eachFilter[key[0]] === Number(parseInt(key[1]))
        );
        return {
          ...state,
          updatedMovieData: result,
        };
      } else if (key[0].includes("rating")) {
        const result = state.appliedFiter?.filter(
          (eachFilter) => eachFilter[key[0]] === Number(parseInt(key[1]))
        );
        return {
          ...state,
          updatedMovieData: result,
        };
      }
      return {
        ...state,
        updatedMovieData: state.movieData,
      };
    }

    case "HANDLE__SEARCH": {
      const result = state.movieData?.filter((eachfilter) =>
        eachfilter.title
          .toLowerCase()
          .includes(payload.target.value.toLowerCase())
      );

      return {
        ...state,
        updatedMovieData: result,
        appliedFiter: result,
      };
    }
    case "HANDLE__ADD__TO__STAR": {
      const result = [...state.star, payload];
      localStorage.setItem("star", JSON.stringify(result));
      return {
        ...state,
        star: result,
      };
    }
    case "HANDLE__ADD__TO__watchList": {
      const result = [...state.watchList, payload];
      localStorage.setItem("watchList", JSON.stringify(result));
      return {
        ...state,
        watchList: result,
      };
    }

    case "HANDLE__ADD__NEW__PRODUCT": {
      localStorage.removeItem("movies");
      const result = [
        ...state.movieData,
        {
          id: 1,
          title: payload?.title,
          year: payload?.year,
          genre: [payload?.genre.split("")],
          rating: payload?.rating,
          director: payload.director,
          writer: payload?.writer,
          summary: payload?.summary,
          supplier: payload?.supplier,
          delivered: Number(payload?.delivered),
          imageURL: payload?.imageURL,
        },
      ];

      localStorage.setItem("movies", JSON.stringify(result));

      return {
        ...state,
        movieData: result,
        updatedMovieData: result,
      };
    }

    default:
      return state;
  }
};

export { INITIALSTATE, MovieReducer };