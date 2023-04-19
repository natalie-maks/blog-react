import { useState, useEffect } from "react";
import PostCard from "@/components/PostCard";
import Aside from "@/components/Aside";
import { getPosts, getCategories } from "../services";
import Link from "next/link";
import Image from "next/image";
import banner from "@/public/banner.jpg";

export default function Home({ posts }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 mt-16 px-4">
      <header className="w-full col-span-1 lg:col-span-12 mt-10 mb-8 text-center relative min-h-[256px] p-4 overflow-hidden flex items-center justify-center">
        <h1 className="text-3xl uppercase font-semibold border-2 border-zinc-900 py-4 px-8 bg-white/30">
          Welcome to Chicago
        </h1>
        <Image
          src={banner}
          alt="Welcome to Chicago"
          height="200"
          width="300"
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[-1] opacity-80 h-auto w-auto min-w-full min-h-full"
        />
      </header>
      <div className="col-span-1 lg:col-span-12 mb-12 border-t-2 border-zinc-900 pt-8 text-center flex space-x-8 overflow-x-auto">
        {categories.map((category) => (
          <Link
            key={category.slug}
            className="min-w-[288px] h-36 flex-none overflow-hidden relative flex items-center justify-center group"
            href={`/${category.slug}`}
          >
            <img
              src={category.coverImage.url}
              alt={category.name}
              height="200"
              width="300"
              className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[-1] opacity-80 group-hover:opacity-100"
            />
            <p className="uppercase text-lg font-semibold bg-yellow-300 py-2 px-4">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
      <main className="col-span-1 lg:col-span-9 lg:mr-12">
        <div>
          {posts.map((post) => {
            return <PostCard post={post} key={post.title} />;
          })}
        </div>
      </main>
      <Aside />
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
