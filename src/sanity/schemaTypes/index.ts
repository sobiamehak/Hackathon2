import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import { categorySchema } from './categories'
import { orderSchema } from './customer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema , categorySchema,orderSchema],
}
