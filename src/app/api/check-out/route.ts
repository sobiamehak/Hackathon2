
import { NextResponse } from "next/server";

import Stripe from "stripe";

// // Initialize Stripe
const stripe = new Stripe(
 "sk_test_51QnPEeFJoQH9ZyKCWqhC7Q3tshnZHhRx3RmBquXYasye8ubLv57CReJbELxgjRKtUtme4i9gfOiIzGNrDCg1nQXN00iZXBrXwJ",
  { apiVersion: "2025-01-27.acacia" }
);

const calculateOrderAmount = () => {
 return 1400;
  }

  // Calculate total amount dynamically

export async function POST() {


  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: "eur",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return NextResponse.json({ clientSecret:  paymentIntent.client_secret})
}
