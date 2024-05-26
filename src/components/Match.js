import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
    const [match, setMatch] = useState(false);
    const { sign } = useContext(HoroscopeContext);

    return (
        <>
            <button onClick={() => setMatch(prevMatch => !prevMatch)}>
                {match ? 'Hide Match' : 'Show Match'}
            </button>
            <div style={{ paddingTop: '1rem' }}>{match && sign.match}</div>
        </>
    )
}

export default Match;
