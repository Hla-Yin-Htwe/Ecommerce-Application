
import { tableSchema } from '@nozbe/watermelondb';

export const ProductSchema = tableSchema ({
    name: 'products',
    columns: [
        { name: 'title', type: 'string' },
        { name: 'price', type: 'number' },
        { name: 'description', type: 'string' },
        { name: 'images', type: 'string' }, 
        { name: 'category_id', type: 'string', isIndexed: true },
      ],
  
});

