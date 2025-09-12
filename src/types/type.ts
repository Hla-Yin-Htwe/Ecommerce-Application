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

export interface DropdownType {
    label: string;
    value: string;
    code: string;
    level?: number;
    description?: string;
}
export interface CustomDropdownType {
    label: string;
    value: string;
    data: DropdownType[];
    onChange: (item: any) => void;
    resetValue: () => void;
    search?: boolean;
    disable?: boolean;
    startValue?: boolean;
}