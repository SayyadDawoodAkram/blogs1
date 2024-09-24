import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { decrementCounterOne, decrementCounterTwo, incrementCounterOne, incrementCounterTwo } from "../Redux/counterObjectSlice";

const Counters = () =>{

    const data = useSelector((state) => state.name);

    const dispatch = useDispatch();
    console.log(data)
    return(<>
    <Header />
        <div className="container py-4" >
        <h2>Counter - {data.counterOne}</h2>
        <button onClick={()=>dispatch(incrementCounterOne()) }>incrementCounterOne</button>
        <button onClick={()=>dispatch(decrementCounterOne()) }>decrementCounterOne</button>
        <hr />
        <h4>counterTwo - {data.counterTwo}</h4>
        <button onClick={()=>dispatch(incrementCounterTwo()) }>incrementCounterTwo</button>
        <button onClick={()=>dispatch(decrementCounterTwo()) }>decrementCounterTwo</button>
        </div>
    <Footer />
    </>)
}

export default Counters;