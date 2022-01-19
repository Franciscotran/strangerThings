import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Posts, Register, Login, Messageform} from './components'



function App() {

  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  


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
        <Link className='navchild' to='/posts'> Home</Link>
        {!token&& <Link className='navchild' to='/Register'>Register</Link>}
        {!token&&<Link className='navchild' to='/LogIn'>  Log In</Link>}
        {token && <button className="navChild" onClick={() => {
            setToken('');
            localStorage.removeItem('token');
          }}>Log Out</button>}


      </nav>
       <Routes>
       <Route path='/posts' element={<Posts token={token} posts={posts} setPosts={setPosts} post={post} setPost={setPost} />}/>
       <Route path='/Register' element={<   Register />}/>
       <Route path= '/LogIn' element ={< Login token = {token} setToken = {setToken}/>}/>
       <Route path= '/posts/:_Id/messages' element={<Messageform token={token} posts={posts} setPosts={setPosts} post={post} />} />
       </Routes>
     
      
     
       </div>
     );
}

export default App;
