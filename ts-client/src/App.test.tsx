import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).not.toBeInTheDocument();
  });
});
