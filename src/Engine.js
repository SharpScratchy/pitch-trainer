const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "B"];

const Engine = () => {
  let note = randomNote();
  let ok = 0;
  let ko = 0;

  const makeAGuess = (guessedNote) => {
    if (guessedNote === note) {
      ++ok;
    } else {
      ++ko;
    }

    note = randomNote();
  };

  const randomNote = () => {
    const index = parseInt(Math.random() * 12);

    return notes[index];
  };

  return { makeAGuess };
};

export default Engine();
