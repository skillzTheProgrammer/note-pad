import React, {useState} from 'react'
import App from '../../App'

const Practice =()=>{
    const [formData, setFormData] = useState()

    const onChangeHandler =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
            
        })
    }

    const onRegisterHandler=()=>{
        if(formData === undefined){
            alert("form data no dey")
        }else{
            sessionStorage.setItem("user",JSON.stringify([formData]))
        }
    }

    return(
        <div>
            <h1>Register</h1>
            username<input name="username" onChange={onChangeHandler} /><br />
            password<input name="password" onChange={onChangeHandler} /><br />
            <button onClick={onRegisterHandler}>register</button>
        </div>
    )
}

export default Practice