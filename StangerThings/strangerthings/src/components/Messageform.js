import { useParams } from "react-router-dom";
import { useState } from "react";
import { addMessage, getPosts} from "../api.js";

const MessageForm = ({token, setPosts, post }) => {
    const paramsData = useParams();
    const [content, setContent] = useState('');

    let id = (paramsData._Id)

    console.log(paramsData._Id)
	
	

	const handleMessage = async (event) => {
		event.preventDefault();
		try {
			let response = await addMessage(token, id, content);
			const  newPosts = await getPosts(token);
			setPosts(newPosts);
            setContent('')
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