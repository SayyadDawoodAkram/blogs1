import axios from "axios";
import { useEffect, useState } from "react";

const FetchUser = () =>{

    const [users,setUsers] = useState([]);

    const[error,setError] = useState("");

    useEffect (()=>{
        
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUsers(res.data)
        }).catch((err)=>{
           setError(err.messages)
        })
        
        //const obj = new XMLHttpRequest();
        //obj.open("GET","https://jsonplaceholder.typicode.com/users",true)
        //obj.send();

        //obj.onreadystatechange = () => {
        //    if(obj.readyState === 4 && obj.status === 200)
        //    {
        //        //console.log(JSON.parse(obj.responseText))
        //        setUsers(JSON.parse(obj.responseText))
        //    }
       // }
    },[])
    
    return(<div>
    

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

export default FetchUser;