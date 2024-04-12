import Header from "../Header";
import { render, screen } from "@testing-library/react";

test("Header renders correctly", () => {
  render(<Header />);
  const textElement = screen.getByText("Electronic Superstore");
  expect(textElement).toBeInTheDocument();
});
