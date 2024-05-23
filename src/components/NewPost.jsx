import {useState } from 'react'
import classes from './NewPost.module.css'
import React from 'react'


function NewPost({onClose, handleAddPost}) {

  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor , setEnteredAuthor] = useState('')

  function handleBodyChange(e) {
      setEnteredBody(e.target.value)
  }

  function handleAuthorChange(e) {
      setEnteredAuthor(e.target.value)
  }

  function handleSubmitForm(event){
    event.preventDefault();
    const postData = {
      body: enteredAuthor,
      author: enteredAuthor
    }
    handleAddPost(postData)
    onClose();
  }
  


  return (
    <form className={classes.form} onSubmit={handleSubmitForm} >
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={handleBodyChange} />
        </p>
        <p>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required  onChange={handleAuthorChange}/>
        </p>  
        <p className={classes.actions}>
            <button type='button' onClick = {onClose}>Cancel</button>
            <button >Submit</button>

        </p>

    </form>
  )
}

export default NewPost