import { useState } from "react";
import "./style.scss";

function Counter() {
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    } return
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className="container-counter">
      <div className="counter">
        <button className="action-btn btn-minus" onClick={() => handleDecrease()}>
          -
        </button>
        <div className="counter-number">{count}</div>
        <button className="action-btn btn-plus" onClick={() => handleIncrease()}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
