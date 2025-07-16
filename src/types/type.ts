export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: CategoryType;
}



interface category{
    id: number;
    name: string;
    image: string;
}
export interface CategoryType{
    id: number;
    name: string;
    image: string;
}

