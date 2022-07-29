import { useContext } from "react";
import PhoneContext from "../../store/context/PhoneContext";

const Info = (): JSX.Element => {
  const { isCalling } = useContext(PhoneContext);

  return (
    <span className="message">{`${
      isCalling ? "Is calling..." : "nobody is calling"
    }`}</span>
  );
};

export default Info;
