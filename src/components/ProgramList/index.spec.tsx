import React from "react";
import { shallow } from "enzyme";
import ProgramList from "./index";

describe("ProgramList component", () => {
  it("should render", () => {
    const programList = shallow(<ProgramList programs={[]} />);
    expect(programList).toMatchSnapshot();
  });
});
