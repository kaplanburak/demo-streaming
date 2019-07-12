import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

it("Renders with page title", () => {
  const header = shallow(<Header />);
  expect(Header).toMatchSnapshot();
});
