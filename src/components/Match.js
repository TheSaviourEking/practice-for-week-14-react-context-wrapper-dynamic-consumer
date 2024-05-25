import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
    const [match, setMatch] = useState(false);
    const { sign: { name, match: signMatch } } = useContext(HoroscopeContext);

    return (
        <>
            <button onClick={() => setMatch((prevMatch) => !prevMatch)}>{match ? 'Hide Match' : 'Show Match'}</button>
            {match && name ? <div style={{ marginTop: '2em' }}>{signMatch}</div> : ''}
        </>
    )
}

export default Match;
