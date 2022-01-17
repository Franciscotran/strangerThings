import  { useState } from 'react';
import PostForm from './Postform';
import { addPost, getPosts } from '../api.js'



const AddPosts = ({ setPosts, token, posts, post, setPost}) => {
  const blankPost = {location: '', description: '', price: '', willDeliver: ''};
  


  const handleAdd = async (event) => {
    try {
      event.preventDefault();
      const newPost = await addPost(token, post)
      
      //await fetchVacations();
      
      setPosts([...posts, newPost]);
      setPost(blankPost);
    } catch (error) {
      console.error(error);
    }
  }

  return <>
    <h2>Add posts</h2>
    <PostForm handleSubmit={handleAdd} post={post} setPost={setPost} blankPost={blankPost}/>
  </>
}

export default AddPosts;
