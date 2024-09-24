const DataFun = ()=>{

    const subjects = "React js";
    const page = 240;
    const user ={
        name:"dawood",
        age:23,
        state:"ap",
        email:"shaik @email.com"
    }
   const userList = [
    {id:1,name:"dawood",email:"shaik@email.com",city:"bangalore"},
    {id:2,name:"sagar",email:"sagar@email.com",city:"bangalore"},
    {id:3,name:"vinod",email:"vinod@email.com",city:"hyderabad"},
    {id:4,name:"vishnu",email:"vishnu@email.com",city:"chennai"},
    {id:5,name:"shameer",email:"shameer@email.com",city:"tamilnadu"},
    {id:6,name:"mohan",email:"mohan@email.com",city:"hyderabad"}
   ]
    return(<div>
        <h2>hello worlds</h2>
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
                userList.map((item,index) => <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.email}</td>
                    </tr>)
                }
            </tbody>
       </table>
        {/*<p>welcome to {subjects} to  your page {page}</p>
        <h2>{JSON.stringify(user)}</h2>
        <h3>subjects:{Subjects.sort().reverse().join(" ")}</h3>
        <h3>Age max:{Math.max(...Age)}and min :{Math.min(...Age)}</h3>
    <h5>welcome to {user.name} and your age {user.age} your state {user.state} and your email {user.email}</h5>*/}
    </div>)
}

export default DataFun;