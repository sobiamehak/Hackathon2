// import { client } from '@/sanity/lib/client';

// import { NextApiRequest, NextApiResponse } from 'next'; // Importing the correct types from Next.js

// // Handler function with correct types
// export default async function handler(
//   req: NextApiRequest, // Typing the request as NextApiRequest
//   res: NextApiResponse // Typing the response as NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     const { customerName, email, address, items, totalAmount, paymentStatus } = req.body;

//     try {
//       // Save the order data to Sanity
//       const order = await client.create({
//         _type: 'order',
//         customerName,
//         email,
//         address,
//         items,
//         totalAmount,
//         paymentStatus,
//       });

//       res.status(200).json({ message: 'Order saved successfully!', order });
//     } catch (error) {
//       console.error('Error saving order:', error);
//       res.status(500).json({ message: 'Failed to save order' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }

import { client } from '@/sanity/lib/client';

export async function POST(req: Request) {
  try {
    const { customerName, email, address, items, totalAmount, paymentStatus } = await req.json();

    // Save the order data to Sanity
    const order = await client.create({
      _type: 'order',
      customerName,
      email,
      address,
      items,
      totalAmount,
      paymentStatus,
    });

    return new Response(JSON.stringify({ message: 'Order saved successfully!', order }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error saving order:', error);
    return new Response(JSON.stringify({ message: 'Failed to save order' }), { status: 500 });
  }
}

// Optional: Handle method other than POST (like GET)
export async function GET() {
  return new Response(JSON.stringify({ message: 'Method not allowed for GET' }), {
    status: 405,
  });
}
