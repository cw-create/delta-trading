import { useState, useEffect } from 'react'
import './updateButton.css'

const UpdateButton = (props) => {
    const [ ticker, setTicker ] = useState("")

    return (
        <div className="update-button">
            <input placeholder='Input company ticker...' onChange={(e) => setTicker(e.target.value)}></input>
            <button onClick={() => props.updateFunction(ticker)}>
                Update Ticker
            </button>
        </div>
    );
}

export default UpdateButton