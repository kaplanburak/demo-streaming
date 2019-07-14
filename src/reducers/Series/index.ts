import actionTypes from "../../constants/ActionTypes";
import { ISeriesState, IAction } from "../../interfaces";

const initialState: ISeriesState = {
  isLoading: true,
  gotError: false,
  list: []
};

export default (state: ISeriesState = initialState, action: IAction): ISeriesState => {
  switch (action.type) {
    case actionTypes.series.GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.series.GET_LIST_SUCCESS:
      return {
        isLoading: false,
        gotError: false,
        list: action.payload
      };
    case actionTypes.series.GET_LIST_ERROR:
      return {
        isLoading: false,
        gotError: true,
        list: []
      };
    default:
      return state;
  }
};
