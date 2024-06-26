import { render, screen } from "@testing-library/react";
import AddPeriod from "./AddPeriod";

describe("Period", () => {
  test("Add period renders correctly", () => {
    render(<AddPeriod />);
    const textElement = screen.getByText("Add Period");
    expect(textElement).toBeInTheDocument();
  });

  test.only("Add Period with name and Period", () => {
    render(<AddPeriod name="Alex" />);
    const textElement = screen.getByText("Hello Alex.");
    expect(textElement).toBeInTheDocument();
  });
});

describe("Testing describe", () => {
  test("Test1", () => {
    render(<AddPeriod />);
    const textElement = screen.getByText("Add Period");
    expect(textElement).toBeInTheDocument();
  });

  test.only("Test2", () => {
    render(<AddPeriod name="Alex" />);
    const textElement = screen.getByText("Hello Alex.");
    expect(textElement).toBeInTheDocument();
  });
});

// test("Add period renders correctly", () => {
//   render(<AddPeriod />);
//   const textElement = screen.getByText("Add Period");
//   expect(textElement).toBeInTheDocument();
// });

// test("Add Period with name and Period", () => {
//   render(<AddPeriod name="Alex" />);
//   const textElement = screen.getByText("Hello Alex.");
//   expect(textElement).toBeInTheDocument();
// });
