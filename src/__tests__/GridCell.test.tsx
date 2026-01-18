import { render, screen } from "@testing-library/react";
import GridCell from "../components/GridCell";

beforeAll(() => {
  HTMLElement.prototype.getBoundingClientRect = function () {
    return {
      width: 100,
      height: 50,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
      toJSON: () => {},
    };
  };
});

test("renders GridCell with correct uuId and dimensions", () => {
  render(<GridCell uuId={42} cols={4} />);
  // Check if uuId is displayed on screen
  expect(screen.getByText("42")).toBeInTheDocument();
  // Check that the span shows the test dimensions
  expect(screen.getByText("100x50")).toBeInTheDocument();
});
