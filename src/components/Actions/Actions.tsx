import "./Actions.css";
import Display from "../Display/Display";

const Actions = () => {
  return (
    <div className="actions">
      <Display />
      <a href="call" className="call">
        Call
      </a>
      <a href="hang_active" className="hang active">
        Hang
      </a>
    </div>
  );
};

export default Actions;
