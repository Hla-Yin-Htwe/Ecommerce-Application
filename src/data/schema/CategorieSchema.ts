
import { tableSchema } from '@nozbe/watermelondb';

export const CategorieSchema = tableSchema ({
    name: 'categories',
    columns: [
      { name: 'name', type: 'string' },
      { name: 'image', type: 'string' },
    ],
  
});

