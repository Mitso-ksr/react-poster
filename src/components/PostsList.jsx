import { useState } from 'react'
import NewPost from './NewPost'
import Post from './Post'
import Modal from './Modal'
import styles from './PostList.module.css'

function PostsList({isPosting, handleHideModal}) {
  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor , setEnteredAuthor] = useState('')


  function handleBodyChange(e) {
      setEnteredBody(e.target.value)
  }

  function handleAuthorChange(e) {
      setEnteredAuthor(e.target.value)
  }


  return (
    <>
    {
      isPosting && 
      <Modal onClose = {handleHideModal}>
        <NewPost onBodyChange = {handleBodyChange} onAuthorChange = {handleAuthorChange} onClose={handleHideModal}/> 
      </Modal>
    }
      <ul className = {styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Amirkasra" body="This is his first post" />
      </ul>
    </>
  )
}

export default PostsList






