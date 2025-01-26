import {  groq } from "next-sanity";

// export const allproduct = groq `
//      *[_type == "products"] 
//      `;

export const allproduct = groq`
 *[_type == "products"][0..7]{
    _id,
            title,
            "imageUrl": image.asset->url,
             products,
             price,
             description,
             slug
}
     
`;

     
  export   const  fourpro = groq ` *[_type == "products"][0..3]
  {
    _id,
            title,
            "imageUrl": image.asset->url,
             products,
             price,
             description,
             slug
}
     `
