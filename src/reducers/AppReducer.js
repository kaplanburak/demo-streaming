import actionTypes from "../actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.app.SET_PAGE_TITLE:
      return {
        pageTitle: action.payload
      };
    default:
      return state;
  }
};
