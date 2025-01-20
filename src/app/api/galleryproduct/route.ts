// app/api/products/route.ts (or .js)
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await client.fetch(`
      *[_type == "products" && "gallery" in tags] {
        _id,
        title,
        "image": image.asset->url
      }
    `);

    console.log("Fetched gallery products:", data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new NextResponse('Error fetching data', { status: 500 });
  }
}
