
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Category {
  _id: string;
  title: string;
  image: string;
  products: string ; // If products is an array or string
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch categories from the API route
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data); // Set the fetched categories to the state
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <div className="text-center pt-20 sm:pt-24 md:pt-32 lg:pt-40 overflow-hidden">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          Top Categories
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 justify-center w-full pt-10">
        {loading ? (
          <p>Loading categories...</p>
        ) : categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category._id}
              className="relative rounded-lg overflow-hidden shadow-lg w-full h-[280px] sm:h-[350px] md:h-[424px]"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={300}
                height={300}
                layout="responsive"
              />
              <div className="absolute bottom-0 md:w-full w-[400px] h-[85px] bg-black bg-opacity-70 text-white px-4 py-4">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-sm text-gray-400">
                  {Array.isArray(category.products)
                    ? `${category.products.length} Products`
                    : category.products}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
