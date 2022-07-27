import { createContext } from "react";

interface IPhoneContext {
  phoneNumbers: string;
  isCalling: boolean;
}

const PhoneContext = createContext<IPhoneContext>({
  phoneNumbers: "",
  isCalling: false,
});

export default PhoneContext;
