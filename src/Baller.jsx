import { useState } from "react";

export default function Baller() {
  const [balls, setBalls] = useState(6);
//   const [balls1, setBalls1] = useState(6);

  const btn1 = () => {
    const newBall = balls - 1;
    if(balls === 0) return;
    setBalls(newBall);
  };
  const btn2 = () => {
    if(balls !== 0) {
        alert("No-ball! Ball count does not decrease.")
    }
    return;
  }


  const ballerStyle = {
    marginLeft : "20px"
  }

  const ball = 6;
  return (
    <div>
      <h3>Player : Bangla Baller</h3>
      <h1>And the Rest : {balls}</h1>
      <h2>Total Ball : {ball}</h2>
      <button style={ballerStyle} onClick={btn1}>He bowled a ball</button>
      <button style={ballerStyle} onClick={btn2}>No-ball</button>
    </div>
  );
}
