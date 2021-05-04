import React, { useEffect, useState, useRef } from "react";
import Engine from "./Engine";

const NotePlayer = () => {
  const audioRef = useRef(null);
  const [note, setNote] = useState("C");

  useEffect(() => {
    Engine.subscribeToNote((newNote) => {
      setNote(newNote);
    });
  }, []);

  return (
    <audio
      autoPlay
      ref={audioRef}
      src={encodeURIComponent(`${note}.wav`)}
      type="audio/wav"
    ></audio>
  );
};

export default NotePlayer;
