// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)
  const submitComment = (e, newComment) => {
    e.preventDefault();
    let comment = {
      username: 'Frances Hampton',
      text: newComment
    }
    setComments([...comments, comment])
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(comment => {
        return <Comment comment={comment} />
      })}
      <CommentInput submitComment={submitComment}/>
    </div>
  );
};

export default CommentSection;
