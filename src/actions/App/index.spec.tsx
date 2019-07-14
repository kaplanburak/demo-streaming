import { setPageTitle } from "./index";
import types from "../../constants/ActionTypes";
import { IAction } from "../../interfaces";

describe("App action creators", () => {
  it("should create an action to set page title", () => {
    const title: string = "text";
    const expectedAction: IAction = {
      type: types.app.SET_PAGE_TITLE,
      payload: title
    };

    expect(setPageTitle(title)).toEqual(expectedAction);
  });
});
