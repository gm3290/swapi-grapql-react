import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../";

const props = {
  totalCount: 100,
  page: 1,
  pageSize: 10,
  pageInfo: {
    endCursor: "endCursor",
    startCursor: "startCursor",
    hasPreviousPage: false,
    hasNextPage: true,
  },
  onNext: jest.fn(),
  onPrev: jest.fn(),
};

describe("Pagination component", () => {
  test("should render with defaultProps", () => {
    render(<Pagination {...props} />);
    const inputElement = screen.getByTestId("pagination-wrapper");
    expect(inputElement).toBeInTheDocument();
  });

  test("prev button be should disabled", () => {
    render(<Pagination {...props} />);
    const inputElement = screen.getByTestId("prev-button");
    expect(inputElement).toHaveAttribute("disabled");
  });

  test("prev button should be enabled", () => {
    render(
      <Pagination
        {...props}
        pageInfo={{ ...props.pageInfo, hasPreviousPage: true }}
        page={2}
      />
    );
    const inputElement = screen.getByTestId("prev-button");
    expect(inputElement).not.toHaveAttribute("disabled");
  });

  test("total page should be 10", () => {
    render(<Pagination {...props} />);
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  test("next button should enabled", () => {
    render(<Pagination {...props} />);
    expect(screen.getByTestId("next-button")).not.toHaveAttribute("disabled");
  });

  test("next button should disabled", () => {
    render(
      <Pagination
        {...props}
        pageInfo={{ ...props.pageInfo, hasNextPage: false }}
        page={props.totalCount / props.pageSize}
      />
    );
    expect(screen.getByTestId("next-button")).toHaveAttribute("disabled");
  });

  test("should call onNext with endCursor", () => {
    render(<Pagination {...props} />);

    fireEvent.click(screen.getByTestId("next-button"));
    expect(props.onNext).toHaveBeenCalledWith(props.pageInfo.endCursor);
  });

  test("should call onPrev with endCursor", () => {
    render(
      <Pagination
        {...props}
        pageInfo={{ ...props.pageInfo, hasPreviousPage: true }}
        page={2}
      />
    );

    fireEvent.click(screen.getByTestId("prev-button"));
    expect(props.onPrev).toHaveBeenCalledWith(props.pageInfo.startCursor);
  });
});
