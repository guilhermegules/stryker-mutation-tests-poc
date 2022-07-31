import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Counter from "./Counter";

test("should increase and decrease the value of the counter", () => {
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

test("should set the counter value to 0 when counter is bigger than 10", () => {
  render(<Counter />);

  const plusButton = screen.getByText(/\+/i);

  const counterElement = screen.getByText(/\d/i);

  expect(plusButton).toBeInTheDocument();

  expect(counterElement.innerHTML).toBe("0");

  act(() => {
    Array.from({ length: 12 }).forEach(() => {
      plusButton.click();
    });
  });

  expect(counterElement.innerHTML).toBe("0");
});
