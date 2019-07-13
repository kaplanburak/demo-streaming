import React from "react";
import { shallow } from "enzyme";
import Footer from "./index";

describe("Footer component", () => {
  it("should render", () => {
    const footer = shallow(<Footer />);
    expect(footer).toMatchSnapshot();
  });
});
