import { appSchema, tableSchema } from '@nozbe/watermelondb'
import { CategorieSchema } from './CategorieSchema'
import { ProductSchema } from './ProductSchema'
import { CartItemSchema } from './CartItemSchema'
import { OrderSchema } from './OrderSchema'

export default appSchema({
  version: 1,
  tables: [
    CategorieSchema,
    ProductSchema,
    CartItemSchema,
    OrderSchema,
    // tableSchema({
    //   name: 'categories',
    //   columns: [
    //     { name: 'name', type: 'string' },
    //     { name: 'image', type: 'string' },
    //   ],
    // }),
    // tableSchema({
    //   name: 'products',
    //   columns: [
    //     { name: 'title', type: 'string' },
    //     { name: 'price', type: 'number' },
    //     { name: 'description', type: 'string' },
    //     { name: 'images', type: 'string' }, // store as JSON string
    //     { name: 'category_id', type: 'string', isIndexed: true }, // foreign key
    //   ],
    // }),
  ],

})