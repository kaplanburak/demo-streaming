import React from "react";
import { shallow } from "enzyme";
import { Home } from "./index";

describe("Home component", () => {
  const mockSetPageTitle = jest.fn();

  it("should render", () => {
    let home;
    beforeEach(() => {
      home = shallow(<Home setPageTitle={mockSetPageTitle} />);
    });
    expect(home).toMatchSnapshot();
  });

  it("should invoke setPageTitle()", () => {
    expect(mockSetPageTitle.mock.calls.length).toBe(1);
  });
});
