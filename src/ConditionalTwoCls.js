import { Component } from "react";

class ConditionalTwoCls extends Component
{

    subject = [ "html","css","reactjs","Angular","jqury"];
    render()
    {
        if(this.subject.length > 0)
        {
            return(<div>
                <ul>
                    {
                        this.subject.map((item,index) => <li key = {index}>{item}</li>)
                    }
                </ul>
            </div>)
        }
        else
        {
            return <div>subject not found in data</div>
        }
    }
}

export default ConditionalTwoCls