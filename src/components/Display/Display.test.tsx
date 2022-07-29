import { render, screen } from "@testing-library/react";
import PhoneContext from "../../store/context/PhoneContext";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When it receives a '23' from the context provider", () => {
    test("Then it should show a 23 inside", () => {
      const testData = {
        phoneNumber: "23",
        isCalling: false,
      };

      render(
        <PhoneContext.Provider value={testData}>
          <Display></Display>
        </PhoneContext.Provider>
      );

      const testDisplay = screen.getByText("23");

      expect(testDisplay).toBeInTheDocument();
    });
  });
});
