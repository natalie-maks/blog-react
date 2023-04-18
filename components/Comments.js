import React from "react";
import moment from "moment";

const Comments = ({ comments }) => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-6">Comments ({comments.length})</h2>
      {comments.map((comment) => (
        <div key={comment.createdAt} className="my-4">
          <address className="flex justify-between">
            <span className="font-semibold mb-1 not-italic">{comment.name}</span>
            <time className="opacity-60">{moment(comment.createdAt).format("MMM DD, YYYY")}</time>
          </address>
          <p className="text-lg">{comment.comment}</p>
        </div>
      ))}
    </section>
  );
};

export default Comments;
