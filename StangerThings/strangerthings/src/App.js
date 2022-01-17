import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Posts, Register, Login} from './components'



function App() {

  const [token, setToken] = useState('');
  console.log(token)


  useEffect(() => {
    //persistent login
    if(localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
   },[])


  



    return (
    <div className="App">
      <nav className='navBar'>
      {token && <h2>You're logged in</h2>}
        <Link to='/'> Home</Link>
        {!token&& <Link to='/Register'>   Register</Link>}
        {!token&&<Link to='/LogIn'>  Log In</Link>}
        {token && <button onClick={() => {
            setToken('');
            localStorage.removeItem('token');
          }}>Log Out</button>}


      </nav>
       <Routes>
       <Route path='/' element={<Posts token={token}  />}/>
        <Route path='/Register' element={<   Register />}/>
       <Route path= '/LogIn' element ={< Login token = {token} setToken = {setToken}/>}/>
       </Routes>
     
      
     
       </div>
     );
}

export default App;
