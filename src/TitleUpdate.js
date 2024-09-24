import { useEffect, useState } from "react";

const TitleUpdate = () => {

    const[counter,setCounter] = useState(0);

    useEffect(()=>{
        document.tltle = 'you Clicked'+counter+"times"; 

        document.querySelector(".btn").style.cssText = 'background-color: red padding:10px 20px; border:2px solid blue;' ;
    },[counter])
    return(<div>
        <h3>Titleupdate</h3>
        <button className="btn" onClick={() => setCounter(counter + 1)}>you clicked {counter} times</button>
    </div>)
}

export default TitleUpdate;