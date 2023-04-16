import React, { useState, useEffect } from "react";

import { getCategories } from "@/services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div>
      <h3>Categories</h3>

      {categories.map((category) => (
        <Link key={category.slug} href={`/${category.slug}`}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
