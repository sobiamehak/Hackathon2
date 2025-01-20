import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const data = await client.fetch(`*[_type == "products"] {
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
       "imageUrl": image.asset->url,
        description,
        inventory,
        tags,
        category->{
          _id,
          title,
          image
        }
      }
    `);

console.log("Fetched Products:", data); 
    return  NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return new NextResponse('Error fetching data', { status: 500 });
  }
}