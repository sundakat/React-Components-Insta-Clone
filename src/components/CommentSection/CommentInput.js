import React, { useState } from 'react';

const CommentInput = props => {
  const [newComment, setNewComment] = useState("")
  const handleChange = (e) => {
    setNewComment(e.target.value)
  }
  return (
    <form className="comment-form" onSubmit={e => props.submitComment(e, newComment)}>
      <input
        type="text"
        value={newComment}
        placeholder="Add comment... "
        onChange={e => handleChange(e)}
      />
    </form>
  );
};

export default CommentInput;
