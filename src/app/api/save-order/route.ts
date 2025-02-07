import { client } from '@/sanity/lib/client';
import { SanityDocument } from '@sanity/client';

// Initialize Sanity client


export default async function handler(req: { method: string; body: { customerName: string; email: string; address: string; items: number; totalAmount: number; paymentStatus: string; }; }, res: { status: (arg0: number) => { (): unknown; new(): unknown; json: { (arg0: { message: string; order?: SanityDocument<{ _type: string; customerName: string; email: string; address: string; items: number; totalAmount: number; paymentStatus: string; }>; }): void; new(): string; }; }; }) {
  if (req.method === 'POST') {
    const { customerName, email, address, items, totalAmount, paymentStatus } = req.body;

    try {
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

      res.status(200).json({ message: 'Order saved successfully!', order });
    } catch (error) {
      console.error('Error saving order:', error);
      res.status(500).json({ message: 'Failed to save order' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
} 
