import { setPageTitle } from "./index";
import types from "../../constants/ActionTypes";

describe("App action", () => {
  it("should create an action to set page title", () => {
    const title = "text";
    const expectedAction = {
      type: types.app.SET_PAGE_TITLE,
      payload: title
    };

    expect(setPageTitle(title)).toEqual(expectedAction);
  });
});
