import React, { useState, useEffect } from "react";

import Engine from "./Engine";
import "./AnswerResult.css";

const AnswerResult = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    Engine.subscribe(setResult);
  }, []);

  return <p className={`answer-result answer-result--${result}`}></p>;
};

export default AnswerResult;
