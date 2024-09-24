import { Component } from "react";

class PropsDemoCls extends Component
{
    render()
    {
        console.log(this.props)
       
        const{mylist,age,title,Data} = this.props
       return(<div>
        
        <h2>welcome to {age}</h2>
        <p>subjects : {mylist}</p>
        <h2>{title}</h2>
        <h4>data-{Data}</h4>
       </div>)
    }

}

export default PropsDemoCls;