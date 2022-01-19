import { deletePost } from '../api.js';
import { useNavigate } from 'react-router-dom';

const SinglePost = ({post, token, posts, setPosts, setId}) => {
  const navigate = useNavigate();
  //children only goes one level
  //if multiple levels  are needed to do drilldown
  //use the useContext hook;
  
//   const navigate = useNavigate();
   let id = post._id
   
   
  
  // setId(id)

  const handleDelete = async () => {
    
    try {
      await deletePost(token, id); //the specific fetch call only updates the backend through a frontend event such as a click
      console.log( await deletePost)
      const newPosts = posts.filter((element) => {
        return element._id !== post._id;
      });
      setPosts(newPosts);

    } catch (error) {
      console.error(error);
    }
  };
  
  return <> 
       
        <div >

        <h3> Title: {post.title}</h3> 
        <div>Description: {post.description}</div> 
        <div>Location: {post.location}</div>
        <div>Price: {post.price}</div>
        <div> Will Deliver: {post.willDeliver}</div>
        {post.isAuthor == true? <button className='delete' onClick={handleDelete}>DELETE</button> : null}
        {token &&! post.isAuthor && <button onClick={() => {navigate(`/posts/${id}/messages`)}}>COMMENT</button>}
       
      </div>
      </>
    
}

export default SinglePost;