import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";

import { getSimilarPosts, getRecentPosts } from "../services";

const RecentPosts = ({ categories, slug }) => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRecentPosts(result));
    } else {
      getRecentPosts().then((result) => setRecentPosts(result));
    }
  }, []);

  return (
    <section className="mt-8 w-full sm:w-1/2 lg:w-full">
      <h3 className="border-zinc-900 border-2 text-center font-semibold mb-2 p-2 bg-yellow-300">
        {slug ? "RELATED POSTS" : "RECENT POSTS"}
      </h3>
      {recentPosts.map((post) => (
        <div key={post.title} className="flex space-x-4 items-center my-6">
          <img className="h-14 w-14 object-cover" src={post.coverImage.url} />
          <p className="font-sm font-semibold leading-5">
            <Link href={`/${post.categories[0].slug}/${post.slug}`}>{post.title}</Link>
          </p>
        </div>
      ))}
    </section>
  );
};

export default RecentPosts;
