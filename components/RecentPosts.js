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
    <section>
      <h2>{slug ? "Related Posts" : "Recent Posts"}</h2>
      {recentPosts.map((post) => (
        <div key={post.title}>
          <img className="h-10 w-10" src={post.coverImage.url} />
          <p>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </p>
          <time>{moment(post.createdAt).format("MMM DD, YYYY")}</time>
        </div>
      ))}
    </section>
  );
};

export default RecentPosts;
