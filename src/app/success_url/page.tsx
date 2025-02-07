"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CompletePage from "../components/completpage";

// Initialize Stripe
const stripePromise = loadStripe("pk_test_51QnPEeFJoQH9ZyKCq3w6Pz6pzMu8SOzPHWuWsd0l0IZQrXwKow8uKQH8IapY3gl0b1UgUybSCEwTmhCVIPhSZOTp00uuVa4Az7");

export default function FormPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [showForm] = useState<boolean>(true);

  useEffect(() => {
    // Fetch the PaymentIntent clientSecret from the server
    fetch("/api/check-out", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }), // Replace with your cart items
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (

    <section>
    <div className="p-6 bg-gray-50 min-h-screen">
      {showForm && clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          < CompletePage />
        </Elements>
      ) : (
        <div className="flex justify-center items-center h-[60vh]">
        <div className="spinner border-t-2 border-indigo-600 border-solid w-6 h-6 mx-auto animate-spin  "></div>
      </div>
      )}
    </div>
    </section>
  );
}
