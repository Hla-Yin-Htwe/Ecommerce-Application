import { tableSchema } from "@nozbe/watermelondb";

export const CartItemSchema = tableSchema ({
    name: 'cart_items',
      columns: [
        { name: 'product_id', type: 'string' },
        { name: 'product_name', type: 'string' },
        { name: 'quantity', type: 'number' },
        { name: 'price', type: 'number' },
        { name: 'total', type: 'number' },
      ],
    });