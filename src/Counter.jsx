import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleEvent = () => {
    const updateCount = count + 1;
    setCount(updateCount);
  };

  const counterStyle = {
    border: "2px solid green",
  };

  return (
    <div style={counterStyle}>
      <h3>Count : {count}</h3>
      <button onClick={handleEvent}>Add</button>
    </div>
  );
}
