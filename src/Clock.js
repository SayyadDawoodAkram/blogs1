import { useEffect, useState } from "react";


const Clock = () =>{

    const [timer,setTimer] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        setInterval(()=>{
            setTimer(new Date().toLocaleTimeString())
        },1000)
    },[]);
    return(<div>
        <h3>Time -{timer}</h3>
        
    </div>)
}

export default Clock;