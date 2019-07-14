import React from "react";
import { shallow } from "enzyme";
import Content from "./index";

describe("Content component", () => {
  it("should render", () => {
    const content = shallow(<Content list={[]} isLoading={false} gotError={false} />);
    expect(content).toMatchSnapshot();
  });
});
