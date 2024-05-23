import NewPost from './NewPost'
import Post from './Post'
import Modal from './Modal'
import styles from './PostList.module.css'
import { useState } from 'react'

function PostsList({isPosting, handleHideModal}) {

    const [posts, setPosts] = useState([])

    function handleAddPost(postData) {
      setPosts((existingPosts) => [postData, ...existingPosts])
    }


  return (
    <>
    {
      isPosting && 
      <Modal onClose = {handleHideModal}>
        <NewPost onClose={handleHideModal} handleAddPost = {handleAddPost}/> 
      </Modal>
    }
      <ul className = {styles.posts}>
      {
        posts.length > 0 &&
          posts.map(post => 
            <Post key={post.body} author = {post.author} body={post.body} /> ) 
        }
      </ul>
      {
        posts.length === 0 &&             <div style={{textAlign: 'center', color: 'white'}} >
        <h2>There are no posts yet</h2>
        <p>Start Adding some!</p>
      </div>
      }
    </>
  )
}

export default PostsList






