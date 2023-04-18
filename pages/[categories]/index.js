import React, { useState, useEffect } from "react";
import PostCard from "@/components/PostCard";
import Aside from "@/components/Aside";
import { getCategories, getCategoryPosts } from "@/services";

const CategoryPage = ({ posts, category }) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getCategories().then((result) => {
      let currCategory = result.find((el) => el.slug === category);
      setCurrentCategory(currCategory.name);
      setDescription(currCategory.description);
    });
  }, [category]);

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 mt-16 px-4">
        <header className="col-span-12  mt-10 mb-12 border-2 border-black p-2 text-center">
          <div className="py-10 border-[3px] border-yellow-300">
            <h1 className="mb-4 text-3xl uppercase font-semibold">{currentCategory}</h1>
            <p className="text-lg">{description}</p>
          </div>
        </header>
        <main className="col-span-1 lg:col-span-9 lg:mr-12">
          <div>
            {posts.map((post) => {
              return <PostCard post={post} key={post.title} />;
            })}
          </div>
        </main>
        <Aside />
      </div>
    </>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  console.log(params);
  const posts = (await getCategoryPosts(params.categories)) || [];
  const category = params.categories;
  return {
    props: { posts, category },
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
