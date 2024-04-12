import About from "../About";
import { render, screen } from "@testing-library/react";

test("About renders correctly", () => {
  render(<About />);
  const H2Element = screen.getByText(/About/i);
  expect(H2Element).toBeInTheDocument();

  const textElement = screen.getByText(/Click the Button/i);
  expect(textElement).toBeInTheDocument();

  const PElement = screen.getByText(/products!/i);
  expect(PElement).toBeInTheDocument();
});
