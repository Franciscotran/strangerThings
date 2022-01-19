import { useState, useEffect } from 'react';
import { getPosts } from '../api.js';
import AddPosts from './AddPost'
import Singlepost from './Singlepost'

const Posts = ({token,posts,setPosts, setId, post, setPost})=>{

    
    
    

    const handdlePosts = async () =>{
        const newPosts = await getPosts(token)
        setPosts(newPosts)
    }
     

    
    useEffect(() => {
     handdlePosts()
     }, [token]);

     return <>
      
     {token && <AddPosts token = {token} posts={posts} setPosts ={setPosts} post={post} setPost={setPost}/>}
        <div className="Posts">
            {token && posts.length>0?posts.map(post=> {
                
                return(<Singlepost key={post._id} token={token} posts= {posts} setPosts= {setPosts} post={post} setPost={setPost} setId={setId}/>)
            }):""}
             {!token && posts.length>0?posts.map(post=> {
                return(<Singlepost key={post._id} token={token} posts= {posts} setPosts= {setPosts} post={post} setPost={setPost} setId={setId}/>)
            }):""}
          
            
        </div>
    

    </>
}




export default Posts;

