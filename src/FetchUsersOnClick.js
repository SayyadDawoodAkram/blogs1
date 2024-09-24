import axios from "axios";
import { useEffect, useState } from "react";

const FetchUsersOnClick = () =>{

    const [users,setUsers] = useState([]);

    const[error,setError] = useState("");

    const fetchusersData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUsers(res.data)
        }).catch((err)=>{
           setError(err.messages)
        })
    }

    useEffect(()=>{
        document.getElementById("btn").addEventListener("click",fetchusersData) //onClick={fetchusersData}
    })

    return(<div>
    
        <button id="btn" >loaded</button>

        <h2>counter Two</h2>
        <h4>users-{users.length}</h4>
        {
            error ? <p>{error}</p> : null
        }
        {
            users.length > 0 ? <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>username</td>
                        <td>email</td>
                        <td>City</td>
                        <td>Company name</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item,index) => <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                            <td>{item.company.name}</td>
                            <td>{item.phone}</td>
                        </tr>)                 
                    }
                </tbody>
            </table> : null
        }
    </div>)
}

export default FetchUsersOnClick;