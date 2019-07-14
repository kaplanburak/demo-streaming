import React from "react";
import { shallow } from "enzyme";
import { Movies } from "./index";

describe("Movies component", () => {
  const mockSetPageTitle = jest.fn();
  const mockGetMovies = jest.fn();

  it("should render", () => {
    let movies;
    beforeEach(() => {
      movies = shallow(
        <Movies
          setPageTitle={mockSetPageTitle}
          getMovies={mockGetMovies}
          list={[]}
          isLoading={false}
          gotError={false}
        />
      );
    });
    expect(movies).toMatchSnapshot();
  });

  it("should invoke functions once", () => {
    expect(mockSetPageTitle).toHaveBeenCalledWith("Popular Movies");
    expect(mockGetMovies.mock.calls.length).toBe(1);
  });
});
