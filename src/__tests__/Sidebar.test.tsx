import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../components/Sidebar";

// mock this so jst doesn't try render svg import
jest.mock("../icons", () => ({
  Burger: () => <svg data-testid="burgericon" />,
}));

test("Sidebar renders and interacts correctly", () => {
  const setRows = jest.fn();
  const setCols = jest.fn();

  render(<Sidebar rows={3} cols={4} setRows={setRows} setCols={setCols} />);

  // First test - Check initial collapse state
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(screen.getByText("Rows: 3")).toBeInTheDocument();
  expect(screen.getByText("Columns: 4")).toBeInTheDocument();

  // Second test - Toggle collapse state by button onClick
  fireEvent.click(button);
  const gridInputDiv = screen.getByText("Update Grid").parentElement;
  expect(gridInputDiv).toHaveClass("GridInput"); // Check the element has the GridInput class on applied on click

  // Third test - Does changing 'rows' input call state setter correctly
  const rowInput = screen.getByRole("slider", { name: /rows/i });
  fireEvent.change(rowInput, { target: { value: 5 } });
  expect(setRows).toHaveBeenCalledWith(5);

  // Fourth test - Does changing 'cols' input call state setter correctly
  const colInput = screen.getByRole("slider", { name: /columns/i });
  fireEvent.change(colInput, { target: { value: 3 } });
  expect(setCols).toHaveBeenCalledWith(3);
});
