import React from "react";
import RecentPosts from "./RecentPosts";
import Categories from "./Categories";
import SocialMedia from "./SocialMedia";
import Newsletter from "./Newsletter";

const Aside = () => {
  return (
    <aside className="col-span-1 lg:col-span-3">
      <RecentPosts />
      <Categories />
      <SocialMedia />
      <Newsletter />
    </aside>
  );
};

export default Aside;
