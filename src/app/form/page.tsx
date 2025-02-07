"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/Checkout";
import { FaSpinner } from "react-icons/fa"; // Import a spinner icon from React Icons

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
    <section className="bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-900">
          Checkout
        </h1>

        {showForm && clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        ) : (
          <div className="flex justify-center items-center h-[60vh]">
            <div className="text-center">
              <FaSpinner className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
              <p className="text-lg text-gray-700 font-semibold">
                Loading checkout...
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}