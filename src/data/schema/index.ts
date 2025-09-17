

import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import migrations from '../migration/migrations'
import CartItem from '../models/CartItem'
import schema from '../schema/schema'
import Order from '../models/Order'

const adapter = new SQLiteAdapter({
  schema,
  dbName:'ECOMMERCE_DB',
  migrations,

  jsi: true, /* Platform.OS === 'ios' */
  onSetUpError: error => {
  }
})

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [
    CartItem,
    Order,
    
  ],
})
export default database;

export const OrderCollection = database.get<Order>('orders');
export const CartItemCollection = database.get<CartItem>('cart_items');
