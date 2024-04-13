import ProductList from "../ProductList";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  test("renders correctly", () => {
    render(<ProductList />);

    const pageHeading = screen.getByRole("heading", { name: "Product List" });
    expect(pageHeading).toBeInTheDocument();

    const locationElement = screen.getByRole("link", { class: "btn" });
    expect(locationElement).toBeInTheDocument();
  });
});
