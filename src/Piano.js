import React from "react";

import "./Piano.css";
import Engine from "./Engine";

const Piano = () => {
  return (
    <div className="piano">
      <span
        className="piano__white"
        onClick={() => Engine.makeAGuess("C")}
      ></span>
      <span
        className="piano__black"
        onClick={() => Engine.makeAGuess("C#")}
      ></span>
      <span
        className="piano__white"
        onClick={() => Engine.makeAGuess("D")}
      ></span>
      <span
        className="piano__black"
        onClick={() => Engine.makeAGuess("D#")}
      ></span>
      <span
        className="piano__white"
        onClick={() => Engine.makeAGuess("E")}
      ></span>
      <span
        className="piano__white"
        onClick={() => Engine.makeAGuess("F")}
      ></span>
      <span
        className="piano__black"
        onClick={() => Engine.makeAGuess("F#")}
      ></span>
      <span
        className="piano__white"
        onClick={() => Engine.makeAGuess("G")}
      ></span>
      <span
        className="piano__black"
        onClick={() => Engine.makeAGuess("G#")}
      ></span>
      <span
        className="piano__white"
        onClick={() => Engine.makeAGuess("A")}
      ></span>
      <span
        className="piano__black"
        onClick={() => Engine.makeAGuess("A#")}
      ></span>
      <span
        className="piano__white"
        onClick={() => Engine.makeAGuess("B")}
      ></span>
    </div>
  );
};

export default Piano;
