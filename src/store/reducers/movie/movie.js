const initialState = {
  Movies: false,
  MovieLoading: false,
  MovieError: false,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        Movies: action.payload.data,
        MovieLoading: action.payload.loading,
        MovieError: action.payload.error,
      };
    default:
      return state;
  }
};

export default movies;
