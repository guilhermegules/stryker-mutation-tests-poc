import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Counter from "./Counter";

test("should increase value of the counter", () => {
  render(<Counter />);

  const plusButton = screen.getByText(/\+/i);

  const minusButton = screen.getByText(/-/i);

  const counterElement = screen.getByText(/\d/i);

  expect(plusButton).toBeInTheDocument();
  expect(minusButton).toBeInTheDocument();

  expect(counterElement.innerHTML).toBe("0");

  act(() => {
    plusButton.click();
  });

  expect(counterElement.innerHTML).toBe("1");

  act(() => {
    minusButton.click();
  });

  expect(counterElement.innerHTML).toBe("0");
});
