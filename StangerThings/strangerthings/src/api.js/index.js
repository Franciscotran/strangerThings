const BASE_URL = 'https://strangers-things.herokuapp.com/api/2110-FT-PT-WEB-PT'



export const getPosts = async(token)=>{

  
    const response = await fetch (`${BASE_URL}/posts`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      
    })
    const result = await response.json();
    const {data: {posts}}  = result
    return(posts)
    // else {
    // const response = await fetch (`${BASE_URL}/posts`)
    // const result = await response.json();
    // const {data:{posts}} = result
    // return(posts)
  
    // }
   
  
    
}


export const register = async (username, password) =>{

  const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })


  const data = await response.json();

  return data;

}      


export const login = async (username, password) =>{

  const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username,
        password
      }
    })
  })

  const data = await response.json();
  return data;

}




export const addPost = async (token, post) =>{

  try{
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      post
    })
  })

  const {data: {post:newPost}} = await response.json();
  console.log(newPost)
  return newPost;

}catch(error){
  console.error(error)
}

}



export const deletePost = async (token, id) => {
  try  {
    //401 => UNAUTHORIZED
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE", 
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('response', response);
  } catch (error) {
    console.error(error);
  }
}



   