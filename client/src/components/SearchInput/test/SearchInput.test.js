import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../";

describe("SearchInput component", () => {
  test("should render with defaultProps", () => {
    render(<SearchInput />);
    const inputElement = screen.getByTestId("search-input");
    expect(inputElement).toBeInTheDocument();
  });

  test("should render with props", () => {
    const onChange = jest.fn();

    render(<SearchInput value="John" onChange={onChange} />);
    const inputElement = screen.getByTestId("search-input");
    expect(inputElement).toHaveAttribute("value", "John");
  });

  test("should calls onChange", () => {
    const onChange = jest.fn();

    render(<SearchInput value="" onChange={onChange} />);

    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "John" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
