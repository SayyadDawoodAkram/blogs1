import axios from "axios";
import { useEffect, useReducer } from "react";
import loader from './images/loading.jpg'

const initialState = {
    usersList:[],
    status:'',
    errorMsg : ''
}

const fetchReducer = (state,action) =>{
    switch(action.type)
    {
        case 'fetch_request':
            return{
                status: 'loading',
                usersList : [],
                errorMsg:''
            }
        case 'fetch_success':
            return{
                status: 'success',
                usersList : action.payload,
                errorMsg:''
            }
        case 'fetch_fail':
            return{
                usersList: [],
                status: 'fail',
                errorMsg: action.payload
            }
        default :
            return state
    }
}

const FetchData = () => {

    const [data,dispatch] = useReducer(fetchReducer,initialState);

    useEffect(()=>{
        dispatch({type: 'fetch_request'})

        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        
        setTimeout(()=>{

            dispatch({type: 'fetch_success',payload: res.data})
        },3000)
      
        }).catch((err)=>{
            console.log(err)
            dispatch({type:'fetch_fail',payload: err.message})
        });
    },[])

    console.log(data)
    return(<div>
        <h2>Fetch users in data - {data.usersList.length}</h2>
        {
            data.status === "loading" && <img src={loader} height={30} width={30} alt="loading"/>
        }
        {
            data.errorMsg && <p>{data.errorMsg}</p>
        }
        {
            data.usersList.length > 0 ? <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>email</th>
                    <th>mobile</th>
                    <th>city</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.usersList.map((item,index) => <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.address.city}</td>
                    </tr>)
                }
            </tbody>
        </table>
        :null
        }
    </div>)
}

export default FetchData;