import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component", () => {
  it("displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toBe(0);
  });

  it("increments the count when Increment button is clicked", () => {
    render(<Counter initialCount={0} />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    expect(Number(screen.getByTestId("count").textContent)).toBe(1);
  });

  it("decrements the count when Decrement button is clicked", () => {
    render(<Counter initialCount={5} />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(Number(screen.getByTestId("count").textContent)).toBe(4);
  });

  it("resets the count to 0 when Restart button is clicked", () => {
    render(<Counter initialCount={10} />);
    const restartButton = screen.getByText("Restart");
    fireEvent.click(restartButton);
    expect(Number(screen.getByTestId("count").textContent)).toBe(0);
  });

  it("switches the sign of the count when Switch Signs button is clicked", () => {
    render(<Counter initialCount={5} />);
    const switchSignsButton = screen.getByText("Switch Signs");
    fireEvent.click(switchSignsButton);
    expect(Number(screen.getByTestId("count").textContent)).toBe(-5);

    fireEvent.click(switchSignsButton);
    expect(Number(screen.getByTestId("count").textContent)).toBe(5);
  });
});