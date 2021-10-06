export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
    plateSize: PlateSize | string;
    categoryList: string[] | PlateCategory[];
}

export enum PlateSize {
"INDIVIDUAL",
    "THREE_PEOPLE"
}

export enum PlateCategory {
    LOW_CARB = "Low Carb",    
    TRANS_FATS_FREE = "Sem Gorduras Trans",
    LACTOSE_FREE = "Sem Lactose",
    HIGH_PROTEIN = "Rico em Proteína",    
    NO_GLUTEN = "Sem Glúten",    
    VEGAN = "Vegano",
    VEGETARIAN = "Vegetariano" 
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

type ProductId = {
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
    whatsapp: string;
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
    numberAp: string;
    active: boolean;
    main: boolean;
}