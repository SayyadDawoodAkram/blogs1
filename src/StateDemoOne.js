import { useState } from "react";

const StateDemoOne = () => {

    const [age,setAge] = useState(23)

    const incrementAge = () =>{
        setAge(age+1)
    }
    return(<div>
        <h2>state management</h2>
        <h3> Age : {age}</h3>
        <button onClick={incrementAge} >inc Age</button>
        <button onClick={() => setAge(age-1)} >dec Age</button>
    </div>)
}

export default StateDemoOne;