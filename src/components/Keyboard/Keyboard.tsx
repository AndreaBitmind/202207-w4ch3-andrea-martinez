import Key from "../Key/Key";
import "./Keyboard.css";

const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <Key text="1" />
        <Key text="2" />
        <Key text="3" />
        <Key text="4" />
        <Key text="5" />
        <Key text="6" />
        <Key text="7" />
        <Key text="8" />
        <Key text="9" />
        <Key text="0" />
        <Key text="delete" isBig={true} />
      </ol>
    </div>
  );
};

export default Keyboard;
