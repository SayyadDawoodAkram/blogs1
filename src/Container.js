import { useCallback, useState } from "react";
import Button from "./Button";
import Display from "./Display";
import Title from "./Title";


const Container = () => {

    const[age,setAge] = useState(34)

    const[salary,setSalary] = useState(20000)

    const incrementAge = useCallback( () => {
        setAge(age + 2 )
    },[age])

    const incrementSalary = useCallback(() =>{
        setSalary(salary + 100)
    },[salary])
    return(<div>
        
        <Title />

        <Display title="Age" value={age}/>

        <Button title="increment Age" action={incrementAge}/>

        <hr />

        <Display title="salary" value={salary} />

        <Button title="increment salary" action={incrementSalary} />
    </div>)
}

export default Container;