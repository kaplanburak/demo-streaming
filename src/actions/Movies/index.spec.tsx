import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getMovies } from "./index";
import types from "../../constants/ActionTypes";
import fetchMock from "fetch-mock";
import { IAction } from "../../interfaces";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("Movies action creators", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should create an action to get movies list", () => {
    fetchMock.getOnce("./sample.json", {
      body: {
        entries: [
          {
            title: "Title",
            programType: "movie",
            releaseYear: 2016
          }
        ]
      },
      headers: { "content-type": "application/json" }
    });

    const expectedActions: IAction[] = [
      { type: types.movies.GET_LIST_REQUEST },
      {
        type: types.movies.GET_LIST_SUCCESS,
        payload: [
          {
            title: "Title",
            programType: "movie",
            releaseYear: 2016
          }
        ]
      }
    ];

    const store = mockStore({});

    return store.dispatch(getMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
