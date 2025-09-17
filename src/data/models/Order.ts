import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class Order extends Model {
  static table = 'orders';

  @field('order_id') orderId!: string;
  @field('items') items!: string;
  @field('quantity') quantity!: number;
  @field('total') total!: number;
  @field('date') date!: string;
}
