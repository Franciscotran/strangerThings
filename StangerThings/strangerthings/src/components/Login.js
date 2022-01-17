import { useState, useEffect } from 'react';
import { login } from '../api.js';


const Login = ({setToken, token})=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event)=>{
        event.preventDefault();

        const object = await login(username, password);
        console.log(object);
        
        if(object.data){
        const {data:{message}} = object
        const {data: {token}} = object
        // setMessage(message);
        setToken(token)
        localStorage.setItem('token', token)

        
        }else{
           const { error: {message}} = object
            setMessage(message);
        }

    }


     return (
        <form className="Login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            {message?<h2>{message}</h2>:null}
            <input placeholder='Username' value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
            <input type="password" placeholder='Password' value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
            <button>Submit</button>
        </form>
    );
}

export default Login;
