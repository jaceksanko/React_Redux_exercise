import React from 'react';
//import Comment from './Comment';
import Comment from './CommentContainer';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment {...comment} />)}</ul>

export default CommentsList