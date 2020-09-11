import React, {useState} from 'react';

const Login = () => {
    const [formData, setFormData] = useState()

    const onChangeHandler =(e)=>{
        setFormData({
            // ...formData,
            [e.target.name]: e.target.value
            
        })
    }
    return(
        <div>
            {console.log(formData)}
            <h1>Login</h1>
            username<input name="username" onChange={onChangeHandler} /><br />
            password<input name="password" onChange={onChangeHandler} /><br />
            <button>login</button>
        </div>
    )
}

export default Login;
