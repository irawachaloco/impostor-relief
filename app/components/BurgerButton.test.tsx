import { fireEvent, render, screen } from "@testing-library/react";
import BurgerButton from "./BurgerButton";

describe("Burger Button Component", () => {
  const handleToggle = jest.fn();

  it("Should render the burger icon when isOpen is false", () => {
    render(<BurgerButton handleMenuToggle={handleToggle} isOpen={false} />);

    const button = screen.getByRole("button", { name: /toggle menu/i });
    expect(button).toBeInTheDocument();

    expect(button.querySelector("svg")).toBeInTheDocument();
    expect(button.innerHTML).toMatch(/h-6 w-6 fill-current/);
  });

  it("Should render the close icon when isOpen is true", () => {
    render(<BurgerButton handleMenuToggle={handleToggle} isOpen={false} />);

    const button = screen.getByRole("button", { name: /toggle menu/i });
    expect(button).toBeInTheDocument();

    expect(button.querySelector("svg")).toBeInTheDocument();
    expect(button.innerHTML).toMatch(/h-6 w-6 fill-current/);
  });

  it("calls the handleMenuToggle when clicked", () => {
    const handleToggle = jest.fn();
    render(<BurgerButton handleMenuToggle={handleToggle} isOpen={false} />);

    const button = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(button);

    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
});
