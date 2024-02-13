import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
  it("should call the submit function passed as a prop whe ntsearch button is clicked", async () => {
    // create a mock function
    const myMockFunction = vi.fn(() => console.log("Search happens"));
    render(<SearchBar formSubmit={myMockFunction} />);
    const searchBtn = screen.getByRole("button");
    expect(searchBtn).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(searchBtn);
    expect(myMockFunction).toHaveBeenCalled();
  });

  it("should call the submit function with the value typed into the input", async () => {
    const myMock = vi.fn((value) =>
      console.log("Search happened with " + value)
    );
    render(<SearchBar formSubmit={myMock} />);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
    const user = userEvent.setup();
    await user.type(input, "nology");
    await user.click(btn);
    expect(myMock).toHaveBeenCalledOnce();
    console.log(myMock.mock.calls);
    expect(myMock.mock.calls[0][0]).toBe("nology");
  });

  it("should clear the input after form is submitted", async () => {
    const myMock = vi.fn((value) =>
      console.log("Search happened with " + value)
    );
    render(<SearchBar formSubmit={myMock} />);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();
    await user.type(input, "javascript");
    await user.click(btn);
    // console.log(myMock.mock.calls, "second mock call");
    expect(input).toHaveValue("");
  });

  it("should call submit with the right value multiple times", async () => {
    const myMock = vi.fn((value) =>
      console.log("Search happened with " + value)
    );
    render(<SearchBar formSubmit={myMock} />);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/search/i);
    const user = await userEvent.setup();
    await user.type(input, "hello");
    await user.click(btn);
    await user.type(input, "apple");
    await user.click(btn);
    expect(myMock).toHaveBeenCalledTimes(2);
    expect(myMock.mock.calls[0][0]).toBe("hello");
    expect(myMock.mock.calls[1][0]).toBe("apple");
  });
});
