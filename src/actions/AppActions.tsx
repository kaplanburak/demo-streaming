import { ThunkAction } from "redux-thunk";
import actionTypes from "./ActionTypes";
import { TReduxState, IAction } from "../interfaces";

export const setPageTitle = (title: string): ThunkAction<IAction, TReduxState, null, IAction> => (dispatch): any => {
  const action = {
    type: actionTypes.app.SET_PAGE_TITLE,
    payload: title
  };

  dispatch(action);
};
