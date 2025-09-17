// import { Model } from '@nozbe/watermelondb';
// import { field, relation } from '@nozbe/watermelondb/decorators';
// import Category from './Category';

// export default class Product extends Model {
//   static table = 'products';

//   @field('title') title!: string;
//   @field('price') price!: number;
//   @field('description') description!: string;
//   @field('images') images!: string; // store JSON string

//   @relation('categories', 'category_id') category!: Category;

//   get imagesArray(): string[] {
//     try {
//       return JSON.parse(this.images);
//     } catch {
//       return [];
//     }
//   }
// }
