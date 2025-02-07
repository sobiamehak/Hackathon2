// app/order-confirmation/page.tsx
import React from 'react';

const OrderConfirmation = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Order Confirmation</h1>
      <p className="text-xl text-center">Thank you for your order! Your order has been placed successfully.</p>
      <p className="text-center mt-4">You will receive an email confirmation shortly with your order details.</p>
    </div>
  );
};

export default OrderConfirmation;
