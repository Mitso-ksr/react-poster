import { useState } from 'react'
import classes from './NewPost.module.css'
import React from 'react'


function NewPost(props) {


  return (
    <form className={classes.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={props.onBodyChange} />
        </p>
        <p>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required  onChange={props.onAuthorChange}/>
        </p>
        <p className={classes.actions}>
            <button type='button' onClick = {props.onClose}>Cancel</button>
            <button>Submit</button>

        </p>

    </form>
  )
}

export default NewPost