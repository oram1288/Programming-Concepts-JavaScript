import Header from "../Header";
import { render, screen } from "@testing-library/react";

test("Header + ! renders correctly", () => {
  render(<Header title="Welcome to Spark" />);
  const textElement = screen.getByText(/Welcome to Spark!/i);
  expect(textElement).toBeInTheDocument();
});
