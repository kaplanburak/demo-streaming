import actionTypes from "../../constants/ActionTypes";
import { IAction } from "../../interfaces";

export const setPageTitle = (title: string): IAction => {
  return {
    type: actionTypes.app.SET_PAGE_TITLE,
    payload: title
  };
};
