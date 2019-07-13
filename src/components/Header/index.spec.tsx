import React from "react";
import { shallow } from "enzyme";
import { Header } from "./index";

describe("Header component", () => {
  it("should render with page title", () => {
    const header = shallow(<Header pageTitle={"Test Title"} />);
    expect(header).toMatchSnapshot();
  });
});
