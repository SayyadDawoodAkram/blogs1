import { Component } from "react";

class DataCls extends Component
{
    userList = [
        {id:1,name:"dawood",email:"shaik@email.com",city:"bangalore"},
        {id:2,name:"sagar",email:"sagar@email.com",city:"bangalore"},
        {id:3,name:"vinod",email:"vinod@email.com",city:"hyderabad"},
        {id:4,name:"vishnu",email:"vishnu@email.com",city:"chennai"},
        {id:5,name:"shameer",email:"shameer@email.com",city:"tamilnadu"},
        {id:6,name:"mohan",email:"mohan@email.com",city:"hyderabad"}
       ];
       //how to sort of array on object;
       sortUserList = () => {
        return this.userList.sort((a,b) => (a.name > b.name) ? 1 :(b.name > a.name) ? -1 : 0)
       }
    render()
    {
        console.log(this.sortUserList())
        return(<div>
            <h2>users-{this.userList.length}</h2>
            this.userList.length > 0 ?
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>city</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {
                this.sortUserList().map((item,index) => <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.email}</td>
                    </tr>)
                }
            </tbody>
       </table> : <p>sorry no record found</p>   
        </div>)
    }
}

export default DataCls;