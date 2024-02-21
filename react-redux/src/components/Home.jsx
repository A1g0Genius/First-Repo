import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost, getPost, getPostError, getPostStatus } from '../features/posts/postSlice'
import AddPost from '../components/AddPost'

const Home = () => {

  const posts = useSelector(getAllPost)
  const dispatch=useDispatch()
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

    useEffect(() => {
        if (postStatus===null) {
          dispatch(getPost())
          console.log(posts)
        }
    }, [postStatus])
  
  
  return (
    <div>
      <AddPost />
      {postStatus === "pending" ? <p>is Loading ...</p> :
        
          posts.map((post) => (
            <div key={post.id}>
            </div>
          ))
        }
    </div>
  )
}

export default Home