import Key from "../Key/Key";
import "./Keyboard.css";

const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <Key />
      </ol>
    </div>
  );
};

export default Keyboard;
