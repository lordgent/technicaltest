const initialState = {
  GenreMovies: false,
  GenreMovieLoading: false,
  GenreMovieError: false,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case "GET_GENRE_MOVIES":
      return {
        ...state,
        GenreMovies: action.payload.data,
        GenreMovieLoading: action.payload.loading,
        GenreMovieError: action.payload.error,
      };
    default:
      return state;
  }
};

export default movies;
