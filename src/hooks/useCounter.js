import { useState } from "react"

export const useCounter = (initialState = 10) => {
    
    console.log('se monto el custom hook useCounter');

    const [state, setstate] = useState(initialState);

    const increment = (factor = 1) => {
        setstate(state + factor);
    }

    const decrement = (factor = 1) => {
        setstate(state - factor);
    }

    const reset = () => {
        setstate( initialState);
    }

    return {
        state,
        increment,
        decrement,
        reset
    };
}