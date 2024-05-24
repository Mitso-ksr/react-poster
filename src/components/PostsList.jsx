import NewPost from './NewPost'
import Post from './Post'
import Modal from './Modal'
import styles from './PostList.module.css'
import { useEffect, useState } from 'react'

function PostsList({isPosting, handleHideModal}) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
      async function fetchPosts() {
        const response = await fetch('http://localhost:8080/posts')
        const resData = await response.json()
        setPosts(resData.posts)
      }
      fetchPosts();
    }, [])

    function handleAddPost(postData) {
      fetch('http://localhost:8080/posts', {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'Application/json'
        }
      })
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






