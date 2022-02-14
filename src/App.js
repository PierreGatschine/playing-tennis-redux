import { Display } from "./Display"; 
import { PlayerPoints } from "./PlayerPoints";
import { PlayerScore } from "./PlayerScore";
import { PlayPauseButton } from "./PlayPauseButton";
import { PointScoreButton } from "./PointScoreButton";
import { ResetButton } from "./ResetButton";

function App() {
  return (
    <div>
      <PlayerPoints playerId="player1" playerName="Roger Federer"/>
      <PlayerPoints playerId="player2" playerName="Rafael Nadal"/>
      <Display />
      <PlayerScore playerId="player1" playerName="Roger Federer"/>
      <PlayerScore playerId="player2" playerName="Rafael Nadal"/>
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
