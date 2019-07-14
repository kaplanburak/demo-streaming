import actionTypes from "../../constants/ActionTypes";
import { IMoviesState, IAction } from "../../interfaces";

const initialState: IMoviesState = {
  isLoading: true,
  gotError: false,
  list: []
};

export default (state: IMoviesState = initialState, action: IAction): IMoviesState => {
  switch (action.type) {
    case actionTypes.movies.GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.movies.GET_LIST_SUCCESS:
      return {
        isLoading: false,
        gotError: false,
        list: action.payload
      };
    case actionTypes.movies.GET_LIST_ERROR:
      return {
        isLoading: false,
        gotError: true,
        list: []
      };
    default:
      return state;
  }
};
