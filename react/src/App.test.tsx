import { render, screen } from "@testing-library/react";
import App from "./App";

test("should renders plus and minus buttons", () => {
  render(<App />);
  const plusButton = screen.getByText(/\+/i);
  const minusButton = screen.getByText(/-/i);
  expect(plusButton).toBeInTheDocument();
  expect(minusButton).toBeInTheDocument();
});
