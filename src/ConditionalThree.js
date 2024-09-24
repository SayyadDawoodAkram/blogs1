import DataFun from "./DataFun";
import Welcome from "./Welcome";

const ConditionalThree = () =>{

    const islogin = true;
    return(<div>
        {
            islogin ? <Welcome /> : <DataFun />

        }
        {
            islogin ? <div>
                <h1>this is page sucess</h1>
                <p>this page is runned sucessfully</p>
            </div> :
            <div>
                <h2>this page error</h2>
                <p>this page not found</p>
            </div>
        }
    </div>)
}

export default ConditionalThree