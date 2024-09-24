const EventDemo = () => {

    const someAction = (event) =>{
        //alert("your program is runned")
        console.log(event.target)
    }
    return(<div>
        <h2> Events in react   </h2>
        <button onClick={someAction}>click me</button>
    </div>)
}

export default EventDemo;