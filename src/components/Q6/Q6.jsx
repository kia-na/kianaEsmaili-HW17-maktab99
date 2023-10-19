import React, { useState } from "react";
import "./Q6.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="container">
        <span className="plus" onClick={() => setCounter(counter + 1)}>
          +
        </span>
        <span className="number">{counter}</span>
        <span className="minus" onClick={() => setCounter(counter - 1)}>
          -
        </span>{" "}
      </div>
      <div className="reset" onClick={() => setCounter(0)}>
        Reset
      </div>
    </>
  );
}

export default Counter;
