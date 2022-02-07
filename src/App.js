import { Display } from "./Display"; 
import { PlayPauseButton } from "./PlayPauseButton";
import { PointScoreButton } from "./PointScoreButton";
import { ResetButton } from "./ResetButton";

function App() {
  return (
    <div>
      <Display />
      <div className="button-row">
        <PointScoreButton playerId="player1">Point joueur 1</PointScoreButton>
        <PointScoreButton playerId="player2">Point joueur 2</PointScoreButton>
      </div>
      <div className="button-row">
        <ResetButton />
        <PlayPauseButton />
      </div>
    </div>
  );
}

export default App;
