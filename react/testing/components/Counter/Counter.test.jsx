import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter tests", () => {
  it("should render count of 0 when no Props are passed", () => {
    render(<Counter />);
    const count = screen.getByTitle("count");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("0");
  });

  it("should render the right initial value when a prop is passed", () => {
    render(<Counter initialValue={123} />);
    const count = screen.getByTitle(/count/i);
    expect(count).toHaveTextContent("123");
  });

  it("should increment the value when + button is clicked", async () => {
    render(<Counter initialValue={12} />);
    const incrementBtn = screen.getByText("+");
    expect(incrementBtn).toBeInTheDocument();
    const count = screen.getByTitle("count");
    const user = userEvent.setup();
    await user.click(incrementBtn);
    expect(count).toHaveTextContent(13);
    await user.click(incrementBtn);
    expect(count).toHaveTextContent(14);
  });

  it("should decrement count when decrement button is clicked and count is greater than zero", async () => {
    render(<Counter initialValue={56} />);
    const decrementBtn = screen.getByText("-");
    expect(decrementBtn).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(decrementBtn);
    const count = screen.getByTitle("count");
    expect(count).toHaveTextContent("55");
    await user.click(decrementBtn);
    expect(count).toHaveTextContent("54");
  });

  it("should disable the decrement button when count is zero", async () => {
    render(<Counter />);
    const count = screen.getByTitle(/count/i);
    const decrementBtn = screen.getByText("-");
    expect(decrementBtn).toHaveAttribute("disabled");
    const user = userEvent.setup();
    await user.click(decrementBtn);
    expect(count).toHaveTextContent("0");
    const incBtn = screen.getByText("+");
    await user.click(incBtn);
    expect(decrementBtn).not.toHaveAttribute("disabled");
  });

  it("should reset counter back to initial value when reset is clicked", async () => {
    render(<Counter initialValue={4} />);
    const count = screen.getByTitle("count");
    const incButton = screen.getByText("+");
    const user = userEvent.setup();
    await user.click(incButton);
    await user.click(incButton);
    await user.click(incButton);
    await user.click(incButton);
    expect(count).toHaveTextContent("8");
    const resetBtn = screen.getByText(/reset/i);
    await user.click(resetBtn);
    screen.debug();
    expect(count).toHaveTextContent("4");
  });
});
