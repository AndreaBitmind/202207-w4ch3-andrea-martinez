import { createContext } from "react";

interface IcontextPhone {
  phoneNumbers: number[];
  isCalling: boolean;
}

const contextPhone = createContext<IcontextPhone>({
  phoneNumbers: [],
  isCalling: false,
});

export default contextPhone;
