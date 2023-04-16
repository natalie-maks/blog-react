import React from "react";

const Comments = ({ comments }) => {
  return (
    <div>
      Comments
      {comments.map((comment) => (
        <div key={comment.createdAt}>
          {comment.name}
          {comment.comment}
        </div>
      ))}
    </div>
  );
};

export default Comments;
