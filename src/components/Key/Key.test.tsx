import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a button component", () => {
  describe("When it receives a number 5", () => {
    test("Then it should show a button with '5' inside", () => {
      const buttonText = "5";

      render(<Key text={buttonText} />);

      const button = screen.queryByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
