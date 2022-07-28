import "./Key.css";

interface KeyProps {
  text: string;
  isBig?: boolean;
}

const Key = ({ text, isBig }: KeyProps): JSX.Element => {
  return (
    <li>
      <button className={`key${isBig ? " big" : ""}`}>{text}</button>
    </li>
  );
};
export default Key;
