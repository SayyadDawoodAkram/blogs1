import { useState } from "react";

const Counter = () => {

    const initialState = {
        counter: 19,
        countertwo: 20,
        subject:"reactjs",
        Address:{
            city:"bng",
            dno:83
        }
    }
    const [data,setData] = useState(initialState);

    const incrementCounte = () => {
        setData({
            ...data,
            counter:data.counter+1
        })
    }
    const updateCity = () => {
        setData({
            ...data,
            Address :{
                ...data.Address,
                city:"hyd",
                dno: 42
            }
        })
    }
    console.log(data)
    return(<div>
        <h2>counter ={data.counter}</h2>
        <button onClick={incrementCounte}>increment counter</button>
        <hr />
        <h2>counter ={data.countertwo}</h2>
        <button onClick={() => setData({...data,countertwo:data.countertwo+1})}> increment two</button>
        <hr />
        <h2>counter ={data.subject}</h2>
        <button onClick={()=>setData({...data,subject: "Javascript"})}>update</button>
        <hr />
        <h2> city :{data.Address.city},{data.Address.dno}</h2>
        <button onClick={updateCity}>updateCity</button>
    </div>)
}

export default Counter;