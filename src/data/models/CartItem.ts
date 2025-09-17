
import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';
export default class CartItem extends Model {
    static table:string = 'cart_items';

    @field('product_id') productId!: string
    @field('product_name') productName!: string
    @field('quantity') quantity!: number
    @field('price') price!: number
    @field('total') total!: number

    //  id: number;
    //     title: string;
    //     price: number;
    //     description: string;
    //     images: string[];
    //     category: CategoryType;
}