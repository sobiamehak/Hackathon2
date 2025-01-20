import { defineQuery } from "next-sanity";

export const allproduct = defineQuery(`
     *[_type == "product"] {
    _id,
    title,
    price,
    priceWithoutDiscount,
    category-> {
      _id,
      title
    },
    tags,
    badge,
    imageUrl,
    description,
    inventory
  }
`)