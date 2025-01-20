import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    domains: ['cdn.sanity.io'],  // Add this domain to allow external images

    
  },
};


//  /** @type {import("next").Nextfonfig} */
// const nextConfig ={
//   images :{
//     domains: ["cdn.sanity.io"]

//   },
// };
// module.exports = nextConfig