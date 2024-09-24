import { useReducer } from "react";

const initialState = 10;

const reducerFun = (state,action) => {
    switch(action.type)
    {
        case 'increment':
            return state = state + action.value            //state + 1
        case 'decrement':
            return state = state - action.value            //state - 1
        case 'reset':
            return state = initialState
        default:
            return state;
    }
    
}

const ReducerDemo = () => {

    const [counter,dispatch] = useReducer(reducerFun,initialState)

    return(<div>
        <h2>ReducerDemo in react</h2>
        <h4>Reducer-{counter}</h4>

        <button onClick={ () => dispatch({type:"increment",value:2})}> Increment</button>
        <button onClick={ () => dispatch({type:"decrement",value:4})}> Decrement</button>
        <button onClick={ () => dispatch({type:"reset"})}> Reset</button>
        

        {/*<button onClick={ () => dispatch("increment")}> Increment</button>
        <button onClick={ () => dispatch("decrement")}> Decrement</button>
        <button onClick={ () => dispatch("reset")}> Reset</button>*/}
    </div>)
}

export default ReducerDemo;