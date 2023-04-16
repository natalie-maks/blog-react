import React from "react";
import PostCard from "@/components/PostCard";
import { getCategories, getCategoryPosts } from "@/services";

import RecentPosts from "@/components/RecentPosts";
import Categories from "@/components/Categories";

const CategoryPage = ({ posts }) => {
  return (
    <div>
      CategoryPage
      <div>
        {posts.map((post) => {
          return <PostCard post={post} key={post.title} />;
        })}
      </div>
      <RecentPosts />
      <Categories />
    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  const posts = (await getCategoryPosts(params.categories)) || [];

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();

  return {
    paths: categories.map((cat) => {
      let categories = cat.slug;

      return `/${categories}`;
    }),
    fallback: true,
  };
}
