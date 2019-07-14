import React from "react";
import { shallow } from "enzyme";
import { Series } from "./index";

describe("Movies component", () => {
  const mockSetPageTitle = jest.fn();
  const mockGetSeries = jest.fn();

  it("should render", () => {
    let series;
    beforeEach(() => {
      series = shallow(
        <Series
          setPageTitle={mockSetPageTitle}
          getSeries={mockGetSeries}
          list={[]}
          isLoading={false}
          gotError={false}
        />
      );
    });
    expect(series).toMatchSnapshot();
  });

  it("should invoke functions once", () => {
    expect(mockSetPageTitle).toHaveBeenCalledWith("Popular Series");
    expect(mockGetSeries.mock.calls.length).toBe(1);
  });
});
