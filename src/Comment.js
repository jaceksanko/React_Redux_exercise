import React from 'react';

/* handleEditChange = e => {
    this.props.searchContacts(e.currentTarget.value);
  }; */

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, editComment, delComment}) => 
    <li>
        {text} <span>votes: {votes}</span> 
        <button onClick={() => thumbUpComment(id)}>Thumb up</button> 
        <button onClick={() => thumbDownComment(id)}>Thumb down</button>
        <button onClick={() => editComment(prompt('edit'), id)}>Edit</button>
        <button onClick={() => delComment(id)}>Delete</button>
    </li>;

export default Comment;