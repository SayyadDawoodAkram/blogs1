import { useMemo, useState } from "react";

const MemoDemo = () => {

    const [counterOne,setCounterOne] = useState(0);

    const [counterTwo,setCounterTwo] = useState(20);

    const isEven = useMemo( () => {
        let i = 0;
        while(i < 3000000000)
        {
            i++;
        }

        return counterOne % 2 === 0 ? "even" : "odd"
    },[counterOne])
    return(<div>
        <h2>counter One-{counterOne}-{isEven}</h2>
        <button onClick={()=>setCounterOne(counterOne + 1)}>IncrementOne</button>

        <h2>counter Two-{counterTwo}</h2>
        <button onClick={()=>setCounterTwo(counterTwo + 3)}>IncrementTwo</button>
    </div>)
}

export default MemoDemo;