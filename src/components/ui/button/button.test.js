import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Check props button", () => {
  it("Button props with text", () => {
    const tree = renderer.create(<Button text={"Test"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Button props without text", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Button is disabled", () => {
    const tree = renderer.create(<Button disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Button is loading", () => {
    const tree = renderer.create(<Button isLoader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Button onClick", () => {
    window.alert = jest.fn();

    render(
      <Button
        onClick={() => {
          window.alert("Click");
        }}
        text={"Test text"}
      />
    );

    const button = screen.getByText("Test text");
    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith("Click");
  });
});
