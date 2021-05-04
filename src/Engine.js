const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const Engine = () => {
  let ok = 0;
  let ko = 0;
  let note = null;

  let callback = null;
  let noteCallback = null;
  let statsCallback = null;

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

    statsCallback(ok / (ok + ko));
  };

  const subscribe = (cb) => (callback = cb);

  const subscribeToNote = (cb) => (noteCallback = cb);

  const subscribeToStats = (cb) => (statsCallback = cb);

  const randomNote = () => {
    const index = parseInt(Math.random() * 12);

    const newNote = notes[index];

    if (noteCallback !== null) {
      noteCallback(newNote);
    }

    return newNote;
  };

  note = randomNote();

  return { makeAGuess, subscribe, subscribeToNote, subscribeToStats };
};

export default Engine();
