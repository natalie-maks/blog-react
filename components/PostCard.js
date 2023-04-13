import React from "react";

const PostCard = ({ post }) => {
  return (
    <article>
      <img src={post.coverImage.url} className="w-24 h-24" />
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
    </article>
  );
};

export default PostCard;
