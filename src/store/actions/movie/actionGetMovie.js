const axios = require('axios').default;

 const actionGetMovie = ({page}) => {
   console.log(page);
  return (dispatch) => {
    dispatch({
      type: "GET_MOVIES",
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });
    async function getMovies() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`);
        dispatch({
          type: "GET_MOVIES",
          payload: {
            loading: false,
            data: response.data.results,
            error: false,
          },
        });
      } catch (error) {
        dispatch({
          type: "GET_MOVIES",
          payload: {
            loading: false,
            data: false,
            error: error.message,
          },
        });
      }
    }
    return getMovies();
  };
};

export default actionGetMovie
