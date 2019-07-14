import reducer from "./index";
import { initialState } from "./index";
import types from "../../constants/ActionTypes";

describe("Movies reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(initialState);
  });

  it(`it should handle ${types.movies.GET_LIST_REQUEST}`, () => {
    expect(reducer(initialState, { type: types.movies.GET_LIST_REQUEST })).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it(`it should handle ${types.movies.GET_LIST_SUCCESS}`, () => {
    expect(reducer(initialState, { type: types.movies.GET_LIST_SUCCESS, payload: ["test"] })).toEqual({
      isLoading: false,
      gotError: false,
      list: ["test"]
    });
  });

  it(`it should handle ${types.movies.GET_LIST_ERROR}`, () => {
    expect(reducer(initialState, { type: types.movies.GET_LIST_ERROR })).toEqual({
      isLoading: false,
      gotError: true,
      list: []
    });
  });
});
