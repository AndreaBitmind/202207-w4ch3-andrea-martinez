import PhoneContext from "../../store/context/PhoneContext";

export interface ICallContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CallContextProvider = ({
  children,
}: ICallContextProviderProps): JSX.Element => {
  return (
    <PhoneContext.Provider value={{ isCalling: false, phoneNumbers: "" }}>
      {children}
    </PhoneContext.Provider>
  );
};

export default CallContextProvider;
