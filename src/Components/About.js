import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../Redux/counterSlice";

const About = () => {

    const data = useSelector((state)=>state.counter);
    
    const dispatch = useDispatch();
    console.log(data);
    return(<React.Fragment>
        <Header />
            <section>
                <div className="container py-4">
                <h1>About page</h1>
                <h3>counter - {data}</h3>
                <button onClick={() => dispatch(incrementCounter())}>Increment</button>
                <button onClick={() => dispatch(decrementCounter())}>Increment</button>
                </div>
            </section>
        <Footer />
    </React.Fragment>)
}

export default About;