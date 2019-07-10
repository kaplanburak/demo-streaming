import actionTypes from "../actions/ActionTypes";
import { IMoviesReduxState, IAction } from "../interfaces";

const initialState: IMoviesReduxState = {
  isLoading: true,
  gotError: false,
  list: []
};

export default (state: IMoviesReduxState = initialState, action: IAction): IMoviesReduxState => {
  switch (action.type) {
    case actionTypes.movies.GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.movies.GET_LIST_RESPONSE:
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
