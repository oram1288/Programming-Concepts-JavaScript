import Header from "../Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  test.only("Header + ! renders correctly", () => {
    render(<Header title="Welcome to Spark" />);
    const textElement = screen.getByText("Welcome to Spark!");
    expect(textElement).toBeInTheDocument();
  });

  test("Header renders correctly", () => {
    render(<Header />);
    const textElement = screen.getByText("Electronic Superstore");
    expect(textElement).toBeInTheDocument();
  });
});
