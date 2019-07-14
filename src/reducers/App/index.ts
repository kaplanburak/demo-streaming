import actionTypes from "../../constants/ActionTypes";
import { IAction, IAppState } from "../../interfaces";

const initialState: IAppState = {
  pageTitle: ""
};

export default (state: IAppState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.app.SET_PAGE_TITLE:
      return {
        pageTitle: action.payload
      };
    default:
      return state;
  }
};
