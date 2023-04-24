import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PostCard from "@/components/PostCard";
import Aside from "@/components/Aside";
import Meta from "@/components/Meta";
import Loader from "@/components/Loader";
import { getCategories, getCategoryPosts } from "@/services";

const CategoryPage = ({ posts, category }) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const router = useRouter();

  useEffect(() => {
    getCategories().then((result) => {
      let currCategory = result.find((el) => el.slug === category);
      setCurrentCategory(currCategory);
      setDescription(currCategory.description);
      setBanner(currCategory.coverImage.url);
    });
  }, [category]);

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Meta title={`${currentCategory.name} in Chicago`} description={description} />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 mt-16 px-4">
        <header className="w-full col-span-1 lg:col-span-12 mt-10 mb-8 text-center relative min-h-[256px] p-4 overflow-hidden flex items-center justify-center">
          <div className="lg:w-3/5 border-2 border-zinc-900 py-8 px-8 bg-white/70">
            <h1 className="text-3xl mb-4 uppercase font-semibold ">{currentCategory.name}</h1>
            <p className="text-lg">{description}</p>
          </div>
          <img
            src={banner}
            alt={currentCategory.name}
            height="200"
            width="300"
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[-1] opacity-80 h-auto w-auto min-w-full min-h-full"
          />
        </header>
        <main className="col-span-1 lg:col-span-9 lg:mr-12">
          <div>
            {posts.map((post) => {
              return <PostCard post={post} key={post.title} />;
            })}
          </div>
        </main>
        <Aside categories={currentCategory.slug} />
      </div>
    </>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
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
