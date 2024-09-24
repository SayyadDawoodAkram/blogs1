import { useState } from "react";

const StateDemo = () => {
    let[counter,setCounter] = useState(20);
    
    console.log("hello")
    const incrementValue = () => {
        setCounter(counter+1)
    }
    const decrementValue = () => {
        setCounter(counter-1)
    }
    const resetValue = () => {
        setCounter(20)
    }
    const incrementByFive = () =>{
        for(let i=1; i <= 5; i++)
        {
            setCounter((preveState) => preveState + 1)
        }
    }

    return(<div>
        <h1>this is useStatehook management</h1>
        <h3>State: {counter}</h3>
        <button onClick={incrementValue}>incement</button>
        <button onClick={resetValue}>Reset</button>
        <button onClick={decrementValue}>decement</button>
        <hr />
        <button onClick={incrementByFive}>decement</button>
    </div>)
}

export default StateDemo;