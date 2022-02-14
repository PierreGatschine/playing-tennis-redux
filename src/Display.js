import { useSelector } from "react-redux";
import { selectDisplayText } from "./selector";


export function Display() {
    const displayText = useSelector(selectDisplayText);
    return (<p className="display">{displayText}</p>);
    
}