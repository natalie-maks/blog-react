import React, { useState, useEffect } from "react";

import { getCategories } from "@/services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <section className="mt-12">
      <h3 className="border-black border-2 text-center font-semibold my-2 p-2 bg-yellow-300">
        CATEGORIES
      </h3>
      <ul className="mt-6">
        {categories.map((category) => (
          <li className="my-4 text-lg text-center font-semibold p-1 hover:bg-yellow-200 border-b-[1px] border-transparent	 hover:border-black">
            <Link className=" w-full" key={category.slug} href={`/${category.slug}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
