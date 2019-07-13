import React from "react";
import { shallow } from "enzyme";
import ProgramItem from "./index";

describe("ProgramItem component", () => {
  const programItem = shallow(<ProgramItem title={"test"} url="https://google.com" />);

  it("should render with props", () => {
    expect(programItem).toMatchSnapshot();
  });

  it("should have the url as image source", () => {
    expect(
      programItem
        .find("#poster")
        .childAt(0)
        .props().src
    ).toEqual("https://google.com");
  });
});
