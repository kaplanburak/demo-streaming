import actionTypes from "./ActionTypes";

export const setPageTitle = title => dispatch => {
  const action = {
    type: actionTypes.app.SET_PAGE_TITLE,
    payload: title
  };

  dispatch(action);
};
