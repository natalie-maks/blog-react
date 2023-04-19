import React from "react";

import { getPostDetails } from "@/services";
import PostDetails from "@/components/PostDetails";
import Author from "@/components/Author";
import Comments from "@/components/Comments";
import CommentForm from "@/components/CommentForm";
import Aside from "@/components/Aside";
import Meta from "@/components/Meta";

const Post = ({ post }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 mt-16 px-4">
      <Meta title={`${post.title} - in Chicago`} description={post.excerpt} />
      <main className="col-span-1 lg:col-span-9 lg:mr-12">
        <PostDetails post={post} />
        <Author author={post.author} />
        <CommentForm slug={post.slug} />
        <Comments comments={post.comments} />
      </main>
      <Aside slug={post.slug} categories={post.categories.map((category) => category.slug)} />
    </div>
  );
};

export default Post;

export async function getServerSideProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}
