import React from "react";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <article className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 py-10 border-b-2 border-zinc-900">
      <img
        src={post.coverImage.url}
        alt={post.title}
        height="200"
        width="300"
        className="md:w-2/5 h-56 object-cover overflow-hidden"
      />

      <div className="flex flex-col space-y-4 md:space-y-0 justify-between md:w-3/5">
        <h3 className="text-xl font-semibold uppercase hover:underline underline-offset-4">
          <Link href={`/${post.categories[0].slug}/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>

        <div className="flex justify-between items-end">
          <time className="block text-right opacity-60 font-semibold uppercase">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </time>

          <div className="flex items-end space-x-4">
            <p className="opacity-60 font-semibold ">{post.author.name}</p>
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              height="32"
              width="32"
              className="h-8 w-8 object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
