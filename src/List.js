import { useState } from "react"

const List = () => {

    const initialState = [
        {id:1,name:"dawood",email:"dawood@email.com",salary:13000,city:"benglore",Age:21},
        {id:2,name:"dawood",email:"dawood@email.com",salary:13000,city:"benglore",Age:24},
        {id:3,name:"dawood",email:"dawood@email.com",salary:13000,city:"benglore",Age:21},
        {id:4,name:"dawood",email:"dawood@email.com",salary:13000,city:"benglore",Age:23},
    ]
    const [userList,setUserList] = useState(initialState)

        const deleteuser = (id) => {
            const remainingItem = userList.filter((item) => {
                return item.id !== id
            })
            setUserList(remainingItem)
        }

        const updateSalary = (id) => {
            const updateUsers = userList.map((item) => {
                if(item.id === id)
                {
                    return{...item,salary: item.salary + 500}
                }
                return item
            });
            setUserList(updateUsers)
          }
        const updateAge = (id) => {
            const remainAge = userList.map((item) => {
                if(item.id === id)
                {
                    return{...item,Age: item.Age + 1}
                }
                return item
            });
            setUserList(remainAge)
        }
        
    return(<div>
        <h4>user list in array of object</h4>
        <h1>userList</h1>
        {
            userList.length > 0 ? <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>salary</th>
                        <th>city</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((item,index) => <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.salary}</td>
                            <td>{item.city}</td>
                            <td>{item.Age}</td>
                            <td>
                                <button onClick={ () => deleteuser(item.id)}>Delete</button>
                                <button onClick={ () => updateSalary(item.id)}>salary</button>
                                <button onClick={ () => updateAge(item.id)}>Age</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table> : <p>user not found</p>
        }
    </div>)
}
export default List