import  { useState } from 'react';

const  postForm = ({post, setPost, handleSubmit}) => {


	  
	

	return <form className='addPost' onSubmit={handleSubmit} >
		<input value={post.title|| ''} placeholder='Tittle' onChange={(event) => {setPost({...post, title: event.target.value})}} />
		<input value={post.description|| ''} placeholder='Description' onChange={(event) => {setPost({...post, description: event.target.value})}} />
        <input value={post.price || ''} placeholder='Price' onChange={(event) => {setPost({...post, price: event.target.value})}} />
		<input value={post.willDeliver || ''} placeholder='Will deliver True or False' onChange={(event) => {setPost({...post, willDeliver: event.target.value})}} />
		<button>Submit</button>
	</form>
 
}

export default postForm;