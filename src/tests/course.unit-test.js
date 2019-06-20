import React from "react";
import { shallow } from "enzyme";
//components
import Course from "../components/Course";

const VALID_COURSE = "CS:201 Winter:2019";
const INVALID_COURSE = "Foo";

function renderCourse() {
  return shallow(<Course />);
}

function getCourseDisplayDetails(component) {
  return component.find(".detailItems");
}

function getMessage(component) {
  return component.find(".detailsText");
}

function getInput(component) {
  return component.find(".courseInput");
}

describe("Course App", () => {
  it("render course component", () => {
    const courseComponent = renderCourse();
    expect(courseComponent).toMatchSnapshot();
  });

  it("valid course", () => {
    const courseComponent = renderCourse();
    const input = getInput(courseComponent);
    input.simulate("change", { target: { value: VALID_COURSE } });
    const items = getCourseDisplayDetails(courseComponent);
    const message = getMessage(courseComponent);
    expect(items).toBeTruthy();
    expect(message).toBeFalsy();
  });

  it("invalid course", () => {
    const courseComponent = renderCourse();
    const input = getInput(courseComponent);
    input.simulate("change", { target: { value: INVALID_COURSE } });
    const items = getCourseDisplayDetails(courseComponent);
    const message = getMessage(courseComponent);
    expect(items).toBeFalsy();
    expect(message).toBeTruthy();
  });
});
