import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setfours] = useState(0);

  const button1 = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };

  const button2 = () => {
    const updateRuns = runs + 4;
    const updateFours = fours + 1;
    setfours(updateFours);
    setRuns(updateRuns);
  };

  const button3 = () => {
    const updateRuns = runs + 6;
    const updateSixes = sixes + 1;
    setSixes(updateSixes);
    setRuns(updateRuns);
  };

  const batsmanStyle = {
    marginLeft: "20px",
    marginBottom: "20px",
  };

  return (
    <div>
      <h3>Player : Bangladeshi Betsman</h3>

      {runs >= 50 && <p>Your score : 50</p>}
      {runs >= 100 && <p>Your score : 100</p>}

      <h2>Six Count : {sixes}</h2>
      <h2>Four Count : {fours}</h2>

      <h1>Score : {runs}</h1>
      <button onClick={button1} style={batsmanStyle}>
        Single
      </button>
      <button onClick={button2} style={batsmanStyle}>
        Four
      </button>
      <button onClick={button3} style={batsmanStyle}>
        Six
      </button>
    </div>
  );
}
