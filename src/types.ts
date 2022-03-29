export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
    plateSize: PlateSize;
    categoryList: PlateCategory[];
}

export enum PlateSize {
    INDIVIDUAL = "INDIVIDUAL",
    THREE_PEOPLE = "THREE_PEOPLE"
}

export enum PlateCategory {
    LOW_CARB = "LOW_CARB",    
    TRANS_FATS_FREE = "TRANS_FATS_FREE",
    LACTOSE_FREE = "LACTOSE_FREE",
    HIGH_PROTEIN = "HIGH_PROTEIN",    
    NO_GLUTEN = "NO_GLUTEN",    
    VEGAN = "VEGAN",
    VEGETARIAN = "VEGETARIAN" 
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

export type ProductId = {
    id: number;
}

export type OrderPayload = {
    products: ProductId[];
    total: number;
} & OrderLocationData;

export type UserData = {
    name: string;
    password: string;
    email: string;
    phone: string;
    document: string;
    address: UserAddress;
    active: boolean;
}

export type UserAddress = {
    state: string;
    city: string;
    district: string;
    street: string;
    number: string;
    numberAp: string | null;
    active: boolean;
    main: boolean;
    latitude: string;
    longitude: string;
}