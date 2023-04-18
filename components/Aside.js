import React from "react";
import RecentPosts from "./RecentPosts";
import Categories from "./Categories";
import SocialMedia from "./SocialMedia";
import Newsletter from "./Newsletter";

const Aside = ({ categories, slug }) => {
  return (
    <aside className="col-span-1 lg:col-span-3">
      <div className="flex flex-col sm:flex-row lg:flex-col sm:space-x-8 lg:space-x-0">
        <RecentPosts categories={categories} slug={slug} />
        <Categories />
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-col sm:space-x-8 lg:space-x-0">
        <SocialMedia />
        <Newsletter />
      </div>
    </aside>
  );
};

export default Aside;
