import React, { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  const handleSubtractOne = () => {
    setCount(count - 1);
  };
  const handleAddOne = () => {
    setCount(count + 1);
  };

  return (
    <div className="div-contador">
      <button onClick={handleSubtractOne}>-1</button>
      <p>{count}</p>
      <button onClick={handleAddOne}>+1</button>
    </div>
  );
}

export default Contador;
