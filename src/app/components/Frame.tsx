

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  image: string }; // Structure for the image object in Sanity


const Frame = () => {
  const [galleryImages, setGalleryImages] = useState<Product[]>([]); // Store fetched gallery products
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch gallery products from Sanity on component mount
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        // Fetch data from Sanity (fetch only 5 images)
        const query = '*[_type == "products"][1..4]{_id, title, "image": image.asset->url}'; // Adjust the query to limit results to 5 images
        const data = await client.fetch(query);

        // Debug: Check what data is fetched
        console.log("Fetched data:", data);

        // Set state with the fetched gallery images
        setGalleryImages(data);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      } finally {
        setLoading(false); // Stop loading after fetch
      }
    };

    fetchGalleryImages();
  }, []);

  // Debug: Check gallery images
  console.log("Gallery Images:", galleryImages);

  return (
    <div className="w-full flex my-10 px-4 flex-col md:flex-row overflow-hidden">
      {/* Left div (Main image) */}
      <div className="w-full md:w-1/2">
        <Image
          src="Image3.svg" // Static image (You can replace this with dynamic if needed)
          alt="Main Image"
          width={638}
          height={638}
          className="w-full mb-4 h-auto"
        />
      </div>

      {/* Right div - Gallery images fetched from Sanity */}
      <div className="w-full md:w-1/2 grid grid-cols-1 gap-2 sm:grid-cols-1 lg:grid-cols-2 ml-2">
        {loading ? (
          <p>Loading gallery images...</p>
        ) : (
          galleryImages.length > 0 ? (
            galleryImages.map((product) => (
              <div key={product._id}>
                {/* Make sure image URL is valid */}

                
                <Image
                  src={product.image} // Sanity image URL
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            ))
          ) : (
            <p>No images found</p>
          )
        )}
      </div>
    </div>
  );
};

export default Frame;
