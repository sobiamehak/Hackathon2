// pages/api/payment-intent.ts
import Stripe from 'stripe';
import { NextApiRequest, NextApiResponse } from 'next';

const stripe = new Stripe('your-secret-key', {

});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { amount } = req.body; // Amount should come from the frontend

      if (!amount) {
        return res.status(400).json({ error: 'Amount is required' });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount, // amount in cents
        currency: 'usd',
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
