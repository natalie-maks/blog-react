import React from "react";
import { useRouter } from "next/router";

import { getPostDetails, getPosts } from "@/services";
import PostDetails from "@/components/PostDetails";
import Author from "@/components/Author";
import Comments from "@/components/Comments";
import CommentForm from "@/components/CommentForm";
import Aside from "@/components/Aside";
import Meta from "@/components/Meta";
import Loader from "@/components/Loader";

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

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

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const postPaths = posts.map((post) => {
    let path;
    post.categories.forEach((cat) => {
      path = { params: { categories: `${cat.slug}`, slug: `${post.slug}` } };
    });
    return path;
  });

  return {
    paths: [...postPaths],
    fallback: true,
  };
}
