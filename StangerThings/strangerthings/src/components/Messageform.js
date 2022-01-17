
import { useState } from "react";
import { addMessage, getPosts} from "../api.js";

const MessageForm = ({token, setPosts, id}) => {

    const [content, setContent] = useState('');

    console.log(id)
	
	

	const handleMessage = async (event) => {
		event.preventDefault();
		try {
			let response = await addMessage(token, id, content);
			const  newPosts = await getPosts(token);
			setPosts(newPosts);
            console.log(response)
		}	catch (error) {
			console.error(error);
		}
	}

	return (
		<form onSubmit={handleMessage}>
			<h2>Message Form</h2>
            
			<label htmlFor="comment-input">Message: </label>
			<input value={content} onChange={(event)=> { setContent(event.target.value)}} id="comment-input"/>
			<button>subbmit</button>
		</form>
	)
}

export default MessageForm;