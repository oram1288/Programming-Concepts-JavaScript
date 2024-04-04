import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      name: "Application form", // or: level: 1 or 2 for h2
    });
    expect(pageHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const txtElement = screen.getByRole("textbox", { name: "Bio" });
    expect(txtElement).toBeInTheDocument();

    const locationElement = screen.getByRole("combobox");
    expect(locationElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
