import { Component } from "react";

class First extends Component
{
    title = "welcome to first class component";
    price = 1700;
    discount = 20;
    
    render()
    {
        // this render method inside declared a variables are (var,let,const)
        let name = "dawood akram ";

       
        return(
            <section>
                <h1>{new Date().toLocaleString()}</h1>
                <h5>{name}</h5>         {/*the variables this keyword not used */}
                <h3>price:{this.price}</h3>
                <h3>discount:{this.discount}</h3>
                <h4>After discount{this.discount}% you have to pay {this.price -(this.price*this.discount /100)}</h4>
                <p>{this.title}</p>
                <h1>this is a First component</h1>
                <p>this is a First peragraph</p>
            </section>
        )
    }
}

export default First;