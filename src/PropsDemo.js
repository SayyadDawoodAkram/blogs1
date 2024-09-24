import Test from "./Test"

const PropsDemo = (props) => {
    const {mylist, title, age, userinfo,data} = props
    
    return(<div>
        <h2>props demo-{age}</h2>
        <p>{title} : {mylist.join(" ")}</p>
       <Test subjects={mylist} age={age} title={title}/>    {/*data={props}*/}
       <h6>username {userinfo.firstname} and your city {userinfo.city}</h6>
       {
            data.length > 0 ? <div>
                {
                    data.map((item,index) => <p key={index}>{item.firstname} from {item.city}</p>)
                }
                </div> : <p>users not found</p>
       }
    </div>)
}
export default PropsDemo