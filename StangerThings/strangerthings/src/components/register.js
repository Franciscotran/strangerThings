import { useState, useEffect } from 'react';
import { register } from '../api.js';


const Register = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event)=>{
        event.preventDefault();

        const object = await register(username, password);
        console.log(object);
        
        if(object.data){
        const {data:{message}} = object
        setMessage(message);
        }else{
           const { error: {message}} = object
            setMessage(message);
        }

    }


     return (
        <form className="Register-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            {message?<h2>{message}</h2>:null}
            <input placeholder='Username' value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
            <input  type='Password' value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
            <button>Submit</button>
        </form>
    );
}

export default Register;
