import { useState } from "react";
import callStatusInterface from "../../types/interfaces";
import PhoneContext from "./PhoneContext";

const initialCallStatus: callStatusInterface = {
  phoneNumber: "",
  isCalling: false,
};

interface ICallContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CallContextProvider = ({
  children,
}: ICallContextProviderProps): JSX.Element => {
  const [phoneStatus] = useState(initialCallStatus);
  return (
    <PhoneContext.Provider value={phoneStatus}>
      {children}
    </PhoneContext.Provider>
  );
};

export default CallContextProvider;
