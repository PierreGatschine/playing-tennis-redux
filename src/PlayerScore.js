import { useSelector } from "react-redux";
import { selectPlayerHasAdvantage, selectPlayerScore, selectPointBeforeWin } from "./selector";


export function PlayerScore({playerId, playerName}) {

    const score = useSelector(selectPlayerScore(playerId));
    const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId));
    const pointsBeforeWin = useSelector(selectPointBeforeWin(playerId));

    return (
        <div className="player-score">
            <p>
                {playerName}
                {pointsBeforeWin === null ? "" : ` (${pointsBeforeWin} ${pointsBeforeWin > 1 ? "points du jeu" : "point du jeu"})`}
            </p>
            <p>{hasAdvantage ? "Advantage " : "" + score}</p>
        </div>
    );
}