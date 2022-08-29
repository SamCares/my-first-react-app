import React, { useState } from "react";


function Counter() {
    //State
    const [counter, setCounter] = useState(0);

    //Handle increment
    const handleIncrement = (event) => {
        event.preventDefault();
        setCounter(prev => prev + 1);
    }

    //Handle decrement
    const handleDecrement = (event) => {
        event.preventDefault();
        setCounter(prev => prev - 1);
    }
    return (
        <div className="counter-container">
            <div className="counter-label">{counter}</div>
            <button className="action-btn" onClick={handleIncrement}>
                Increment
            </button>
            <button className="action-btn" onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    )
}

export default Counter;