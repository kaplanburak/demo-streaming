import reducer from "./index";
import types from "../../constants/ActionTypes";

describe("App reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual({ pageTitle: "" });
  });

  it("should return the page title", () => {
    expect(
      reducer(
        {},
        {
          type: types.app.SET_PAGE_TITLE,
          payload: "test"
        }
      )
    ).toEqual({
      pageTitle: "test"
    });
  });
});
