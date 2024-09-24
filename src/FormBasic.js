import { useState } from "react";

const FormBasic = () => {

    const [username,setUserName] = useState('');

    const [email,setEmail] = useState('');

    const [mobile,setMobile] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Name:",username);
        console.log("Mail:",email);
        console.log("Mobile",mobile)
        event.target.reset();
    }

   /* const handleUserName = (event) => {
        //console.log(event.target.value)
        setUserName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }*/


    return(<div>
        <h2> Form Basic</h2>
        <form onSubmit={handleSubmit}>
            <div className="formgroup">
                <label>UserName</label>
                <input type="text" className="formcontrol" onChange={(event) => { setUserName(event.target.value) }}/>
            </div>

            <div className="formgroup">
                <label>Email</label>
                <input type="text" className="formcontrol"  onChange={(event) => { setEmail(event.target.value) }} />
            </div>
            <div className="formgroup">
                <label>Mobile</label>
                <input type="text" className="formcontrol"  onChange={(event) => { setMobile(event.target.value) }} />
            </div>
            <div className="formgroup">
                <input type="submit" value="Register"/>
            </div>
        </form>
    </div>)
}

export default FormBasic;