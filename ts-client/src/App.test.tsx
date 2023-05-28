import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders correctly", () => {
    render(<App />);
    const appElement = screen.getByTestId(/app/i);
    expect(appElement).toBeInTheDocument();
  });
});
