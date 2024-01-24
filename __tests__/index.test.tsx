import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import formatDate from "../utils/formatDate";

describe("Home", () => {
  render(<Home />);

  it("renders header input", () => {
    const input = screen.getByPlaceholderText("Paste tweet link here");

    expect(input).toBeInTheDocument();
  });
});

describe("Utils", () => {
  const [time, date] = formatDate("2022-11-20T10:11:55.000Z");

  it("formats time", ()  =>  {
    expect(time).toBe("3:41");
  })

  it("formats date", () =>  {
    expect(date).toBe("20 Nov, 2022");
  })
})
