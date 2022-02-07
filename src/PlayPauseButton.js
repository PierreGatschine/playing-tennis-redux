import { useDispatch } from "react-redux";
import { playPause } from './store'


export function PlayPauseButton() {
    const dipatch = useDispatch();
    return (
        <button className="button"
            onClick={() => dipatch(playPause())
        }
        >
            Pause / Reprendre
        </button>
    );
};


