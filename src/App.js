import React from 'react';
import './App.css';
import CommentsListContainers from './CommentsListContainer';
import CommentInputContainers from './CommentInputContainer';


const App = () => {
    return (
      <div className="App">
        <h2>Add comment</h2><CommentInputContainers />
        <CommentsListContainers />
      </div>
    );
}

export default App;
