import React from "react";

import { getPosts, getPostDetails } from "@/services";
import RecentPosts from "@/components/RecentPosts";
import Categories from "@/components/Categories";
import PostDetails from "@/components/PostDetails";
import Author from "@/components/Author";
import Comments from "@/components/Comments";
import CommentForm from "@/components/CommentForm";

const Post = ({ post }) => {
  return (
    <div>
      <PostDetails post={post} />
      <Author author={post.author} />
      <CommentForm slug={post.slug} />
      <Comments comments={post.comments} />
      <RecentPosts slug={post.slug} categories={post.categories.map((category) => category.slug)} />
      <Categories />
    </div>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
