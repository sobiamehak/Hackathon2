import { defineType } from 'sanity';

export const orderSchema = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required().min(3).error('Customer Name is required and should have at least 3 characters.')
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email().error('Please enter a valid email address.')
    },
    {
      name: 'address',
      title: 'Shipping Address',
      type: 'string',
      validation: Rule => Rule.required().min(10).error('Shipping address is required and should be at least 10 characters.')
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'productId',
              title: 'Product ID',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: Rule => Rule.required().min(1).error('Quantity must be at least 1.')
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1).error('At least one item must be added to the order.')
    },
    {
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
      validation: Rule => Rule.required().min(0).error('Total amount must be a positive number.')
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Paid', value: 'paid' },
          { title: 'Pending', value: 'pending' },
          { title: 'Failed', value: 'failed' }
        ]
      },
      validation: Rule => Rule.required().error('Payment status is required.')
    }
  ]
});
