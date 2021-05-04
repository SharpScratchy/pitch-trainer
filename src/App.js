import Piano from "./Piano";
import AnswerResult from "./AnswerResult";
import NotePlayer from "./NotePlayer";
import Stats from "./Stats";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Pitch Trainer</h1>
      <AnswerResult />
      <Piano />
      <Stats />
      <NotePlayer />
    </div>
  );
}

export default App;
