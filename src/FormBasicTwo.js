import { useState } from "react";

const FormBasicTwo = () => {

    const initialState = {
        username:'',
        email:'',
        password:'',
        mobile:''
    };

    const [formData,setFormData] = useState(initialState);

    const [formErrors,setFormErrors] = useState({});

    const handleInputs = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateFormData())
        {
            console.log("sending data to server",formData)
        }
    }

    const validateFormData = () => {
        let isValid = true;
        let errors = {};

        if(formData.username === "")
        {
            isValid = false;
            errors.username = "username is required"
        }

        if(formData.email === "")
        {
            isValid = false;
            errors.email = "email is required"
        }
        if(formData.password === "")
        {
            isValid = false;
            errors.password = "password is required"
        }
        if(formData.mobile === "")
        {
            isValid = false;
            errors.mobile = "mobile is required"
        }
        setFormErrors(errors)

        return isValid
    }
    console.log(formErrors)
    return(<div>
        <h2>form basic two </h2>
        <form onSubmit={ handleSubmit }>
            <div className="formgroup">
                <label>Username</label>
                <input type="text" name="username" className="formcontrol" value={formData.username} onChange={handleInputs} />
                {formErrors.username && <small className="error">{formErrors.username}</small>}
            </div>
            <div className="formgroup">
                <label>Email</label>
                <input type="text" name="email" className="formcontrol" value={formData.email} onChange={handleInputs} />
                {formErrors.email && <small className="error">{formErrors.email}</small>}

            </div>
            <div className="formgroup">
                <label>Password</label>
                <input type="password" name="password" className="formcontrol" value={formData.password} onChange={handleInputs} />
                {formErrors.password && <small className="error">{formErrors.password}</small>}

            </div>
            <div className="formgroup">
                <label>Mobile</label>
                <input type="text" name="mobile" className="formcontrol" value={formData.mobile} onChange={handleInputs} />
                {formErrors.mobile && <small className="error">{formErrors.mobile}</small>}

            </div>
            <div className="formgroup">
                <input type="submit" value="Register" className="btn"/>
            </div>
        </form>
    </div>)
}

export default FormBasicTwo;