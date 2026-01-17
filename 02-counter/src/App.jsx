import { useState } from "react";

function CounterApp() {
  const [counter, setCounter] = useState(10);

  const add = () => {
    setCounter(counter + 1);
  };

  const remove = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter-container">
      <h2>Welcome to Counter App</h2>

      <h3 className="counter-value">
        Counter Value: <span>{counter}</span>
      </h3>

      <div className="counter-actions">
        <button onClick={add}>Add</button>
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );
}

export default CounterApp;
