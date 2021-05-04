import React, { useEffect, useState } from "react";
import Engine from "./Engine";
import "./Stats.css";

const Stats = () => {
  const [winRate, setWinRate] = useState(0);

  useEffect(() => {
    Engine.subscribeToStats(setWinRate);
  }, []);

  return <h3 className="stats">{(winRate * 100).toFixed(2)}%</h3>;
};

export default Stats;
