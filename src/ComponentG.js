import { useContext } from "react";
import { userContext } from "./App";

const ComponentG = () => {

    const user = useContext(userContext)
    return(<div>
        <h1>this component of g</h1>
        <h4>welcome to {user.firstname} from {user.city} </h4>
    </div>)
}

export default ComponentG;