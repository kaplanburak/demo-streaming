import React from "react";
import { shallow } from "enzyme";
import ProgramType from "./index";

describe("ProgramType component", () => {
  const programType = shallow(<ProgramType typeName={"Programs"} />);

  it("should render", () => {
    expect(programType).toMatchSnapshot();
  });

  it("should show title on card", () => {
    expect(
      programType
        .find("#card")
        .childAt(1)
        .text()
    ).toEqual("PROGRAMS");
  });

  it("should show title below the card", () => {
    expect(
      programType
        .find("#title")
        .childAt(0)
        .text()
    ).toEqual("Popular Programs");
  });
});
