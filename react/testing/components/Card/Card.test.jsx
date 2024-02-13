import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Card from "./Card";
import userEvent from "@testing-library/user-event";

describe("Card Component", () => {
  it("should render a heading based on props", () => {
    render(<Card heading="Card text" content="Card Content" />);
    const heading = screen.getByText(/card text/i);
    expect(heading).toBeInTheDocument();
  });

  it("should not show content by default", () => {
    render(<Card heading="This is my heading" content="This is my content" />);
    const content = screen.queryByText(/this is my content/i);
    expect(content).not.toBeInTheDocument();
  });

  it("should toggle card content when the button is clicked, content should be based on props", async () => {
    render(<Card heading="React testing" content="React Testing Library" />);
    const btn = screen.getByRole("button");
    const user = userEvent.setup();

    await user.click(btn);
    const content = screen.getByText(/react testing library/i);
    expect(content).toBeInTheDocument();
  });

  it("should toggle button text, Show more, Show less", async () => {
    render(<Card heading="Heading" content="Content" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent(/show more/i);
    const user = userEvent.setup();
    await user.click(btn);
    expect(btn).toHaveTextContent(/show less/i);
    await user.click(btn);
    expect(btn).toHaveTextContent(/show more/i);
  });
});
