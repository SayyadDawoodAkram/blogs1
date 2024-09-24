import { useState } from "react";
// how to post and data files in wathcing the react 18 video;
const Register = () => {

    const initialState = {
        username: '',
        email:'',
        password:'',
        cpassword:'',
        gender:'',
        hobbies:[],
        state:'',
        adress:'',
        terms:''
    }
    const [formData,setFormData] = useState(initialState);

    const [formErrors,setFormErrors] = useState({})

    const handleInputs = (event) => {
       
        if(event.target.name === "terms")
        {
            setFormData({
                ...formData,
                [event.target.name] : event.target.checked ? "yes" : " "
            })
        }
        else if(event.target.name === "hobbies")
        {
            let arr = formData.hobbies;

            let itemExists = arr.indexOf(event.target.value);
            if(itemExists === -1)
            {
                arr.push(event.target.value);
            }
            else
            {
                arr.splice(itemExists, 1);
            }

            setFormData({
                ...formData,
                hobbies:arr
            })
            
        }
        else
        {
            setFormData({
                ...formData,
                [event.target.name] : event.target.value
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateFormData())
        {
            console.log(formData)
        }
        
    }
    
    //form validation

    const validateFormData = () => {
        let isValid = true;
        let errors = {};

        if(formData.username === "")
        {
            isValid = false;
            errors.username = "username is required"
        }
        else{
            if(formData.username.length <= 3)
            {
                isValid = false;
                errors.username = " username should contains at least 3chars"
            }
            else if(!isNaN(formData.username))
            {
                isValid = false;
                errors.username = "username should never contains digits"
            }
        }

        //email validation

        if(formData.email === "")
        {
            isValid = false;
            errors.email = "email is required"
        }
        else
        {
            if(isEmail(formData.email))
            {
                isValid = false;
                errors.email = 'valid email is required'
            }
        }

        //password and confirm password validation

        if(formData.password === "") 
        {
            isValid = false;
            errors.password = 'password is required'
        }
        else
        {
            let pettern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,30}$/;
            if(!pettern.test(formData.password)){
                isValid = false;
                errors.password = 'password must contain at least six characters, at least one number and both lower and uppercase letters and special characters'
            }
        }

        if(formData.cpassword === "")
        {
            isValid = false;
            errors.cpassword = 'confirm password is required'
        }

        if(formData.password !== formData.cpassword)
        {
            isValid = false;
            errors.cpassword = 'password does not matched'
        }

       //multiple checkbox validation
       if(formData.hobbies.length <= 0)
       {
            isValid = false;
            errors.hobbies = "please select at least one hobby"
       }

       //terms validation
       if(formData.terms === "")
       {
        isValid = false;
        errors.terms ="please accepts terms and condition"
       }

        setFormErrors(errors)
        return isValid
    }
    
    const handleFocus = (event) => {
       setFormErrors({
        ...formErrors,
        [event.target.name] : ''
       })
    }

    const handleBlur = (event) => {
        if(event.target.name === "hobbies")
        {
            if(checkBox())
            {
                setFormErrors({
                    ...formErrors,
                    [event.target.name] : ''
                })
            }else(
                setFormErrors({
                    ...formErrors,
                    [event.target.name] : 'please select at least one hoby'
                })
            )
        }
        else if(event.target.value === "")
        {
            setFormErrors({
                ...formErrors,
                [event.target.name] : event.target.nameS+"is required"
               })
        }
    }

    const checkBox = () => {
        let check = false;
        var elements = document.getElementsByName("hobbies");
        console.log(elements)

        for(let item of elements)
        {
            if(item.checked)
            {
                check = true;
            }
        }
        return check
    }

    const isEmail = (val) => {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(val)){
          return true;
        }
    }
    
    const checkTerms = (event) =>{
        if(!event.target.checked)
        {
            setFormErrors({
                ...formErrors,
                terms: 'pleace accepts terms and condition'
            })
        }
    }
    return(<div>
        <h2>Register Form</h2>
        <form onSubmit={handleSubmit} autoComplete="off">{/*autoComplete="off"*/}
            <div className="formgroup">
                <label>Username</label>
                <input type="text" onFocus={handleFocus} onBlur={handleBlur} name="username" className="formcontrol" value={formData.username} onChange={handleInputs}/>
                {formErrors.username && <small className="error">{formErrors.username}</small>}
            </div>
            <div className="formgroup">
                <label>Email</label>
                <input type="text" name="email" className="formcontrol" value={formData.email} onChange={handleInputs}/>
                {formErrors.email && <small className="error">{formErrors.email}</small>}
            </div>
            <div className="fieldsBlock">
                <div className="formgroup fields">
                    <label>Password</label>
                    <input type="password" onFocus={handleFocus} onBlur={handleBlur} name="password" className="formcontrol" value={formData.password} onChange={handleInputs} />
                    {formErrors.password && <small className="error">{formErrors.password}</small>}
                </div>
                <div className="formgroup fields">
                    <label>Confirm Password</label>
                    <input type="password" onFocus={handleFocus} onBlur={handleBlur} name="cpassword" className="formcontrol" value={formData.cpassword} onChange={handleInputs}/>
                    {formErrors.cpassword && <small className="error">{formErrors.cpassword}</small>}
                </div>
            </div>
            <div className="formgroup">
                <label>Gender</label>
                <label><input type="radio" name="gender" value="male" onChange={handleInputs} />Male</label>
                <label><input type="radio" name="gender" value="female" onChange={handleInputs} />FeMale</label>
            </div>
            <div className="formgroup">
                <label>Hobbies</label>
                <label><input type="checkbox" onFocus={handleFocus} onBlur={handleBlur} name="hobbies" value="cooking" onChange={handleInputs}/>Cooking</label>
                <label><input type="checkbox" onFocus={handleFocus} onBlur={handleBlur} name="hobbies" value="eating" onChange={handleInputs}/>Eating</label>
                <label><input type="checkbox" onFocus={handleFocus} onBlur={handleBlur} name="hobbies" value="sleeping" onChange={handleInputs}/>Sleeping</label>
                <label><input type="checkbox" onFocus={handleFocus} onBlur={handleBlur} name="hobbies" value="reading" onChange={handleInputs}/>Reading</label>
                {formErrors.hobbies && <small className="error">{formErrors.hobbies}</small>}
            </div>
           <div className="formgroup">
            <label> Select your State</label>
            <select onChange={handleInputs} value={formData.state} name="state" className="formcontrol">
                <option value="">Select State</option>
                <option value="Ap">Ap</option>
                <option value="TS">TS</option>
                <option value="KA">KA</option>
                <option value="UP"> UP</option>
            </select>
           </div>
           <div className="formgroup">
                <label>Address </label>
                <textarea onChange={handleInputs} value={formData.adress}className="adress" name="adress"></textarea>
            </div>
            <div className="formgroup">
                <label>
                    <input onFocus={handleFocus} onClick={checkTerms} onChange={handleInputs} type="checkbox" name="terms" />
                    Please accepts terms and coditions
                </label>
                {formErrors.terms && <small className="error">{formErrors.terms}</small>}
                
            </div>
            <div className="formgroup">
                <input type="submit" value="Register" className="btn" />
            </div>
        </form>
    </div>)
}

export default Register;