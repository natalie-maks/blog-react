import React, { useState, useEffect } from "react";

import { getCategories } from "@/services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <section className="mt-8 w-full sm:w-1/2 lg:w-full">
      <h3 className="border-zinc-900 border-2 text-center font-semibold mb-2 p-2 bg-yellow-300">
        CATEGORIES
      </h3>
      <ul className="mt-6">
        {categories.map((category) => (
          <li
            key={category.slug}
            className="my-4 text-lg text-center font-semibold p-1 hover:bg-yellow-200 border-b-[1px] border-transparent	hover:border-zinc-900"
          >
            <Link className="w-full" href={`/${category.slug}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
