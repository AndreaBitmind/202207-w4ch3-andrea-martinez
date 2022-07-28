import { createContext } from "react";

interface IPhoneContext {
  phoneNumber: string;
  isCalling: boolean;
}

const PhoneContext = createContext<IPhoneContext>({
  phoneNumber: "",
  isCalling: false,
});

export default PhoneContext;
