import { useReducer, useState } from "react"

const initialState = {
    counterOne: 20,
    counterTwo: 10
}

const reducerFun = (state,action) => {
    switch(action.type)
    {
        case 'increment':
            return{
                ...state,
                counterOne: state.counterOne + Number(action.payload)
            }
         case 'decrement':
             return{
                ...state,
                counterOne: state.counterOne - Number(action.payload)
            }
        case 'incrementTwo':
            return{
                ...state,
                counterTwo : state.counterTwo + Number(action.payload)
            }
        case 'decrementTwo':
            return{
                ...state,
                counterTwo : state.counterTwo - Number(action.payload)
            }
         case 'reset':
            return {
                ...state,
                counterOne : initialState.counterOne
            }
         case 'resetTwo':
            return {
                ...state,
                counterTwo : initialState.counterTwo
            }
        default:
            return state
    }
}
const ReducerDemoOne = () => {

    const[counter,dispatch] = useReducer(reducerFun,initialState)

   const [value,setValue] = useState(1)

    return(<div>
        <hr />
        <label>Entervalue</label>
        <input type="number" value={value} onChange={ (event) => setValue(event.target.value)}/>
        <h2>reducerdemoOne-{counter.counterOne}</h2>
        <button onClick={ () => dispatch({type:'increment',payload:value})}>Increment</button>
        <button onClick={ () => dispatch({type:'decrement',payload:value})}>Decrement</button>
        <button onClick={ () => dispatch({type:'reset'})}>Reset</button>

        <hr />
        <h3>counterTwo-{counter.counterTwo}</h3>
        <button onClick={ () => dispatch({type:'incrementTwo',payload:value})}>Increment</button>
        <button onClick={ () => dispatch({type:'decrementTwo',payload:value})}>Decrement</button>
        <button onClick={ () => dispatch({type:'resetTwo'})}>Reset</button>
    </div>)

}

export default ReducerDemoOne;