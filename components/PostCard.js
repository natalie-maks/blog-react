import React from "react";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <article>
      <img src={post.coverImage.url} className="w-24 h-24" />
      <h3>
        <Link href={`/${post.categories[0].slug}/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>

      <div>
        <img src={post.author.photo.url} className="h-12 w-12" />
        <p>{post.author.name}</p>
      </div>
      <time>{moment(post.createdAt).format("MMM DD, YYYY")}</time>
    </article>
  );
};

export default PostCard;
