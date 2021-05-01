const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "B"];

const Engine = () => {
  let note = null;
  let ok = 0;
  let ko = 0;
  let callback = null;

  const makeAGuess = (guessedNote) => {
    if (guessedNote === note) {
      ++ok;
      callback("ok");
    } else {
      ++ko;
      callback("ko");
    }

    note = randomNote();
    console.log(note);
  };

  const subscribe = (cb) => (callback = cb);

  const randomNote = () => {
    const index = parseInt(Math.random() * 12);

    return notes[index];
  };

  note = randomNote();

  return { makeAGuess, subscribe };
};

export default Engine();
