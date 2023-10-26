import { Product } from "./product.model";


export interface MarketList {
    id: string;
    userId: string;
    products: Product[];
    createdAt: string;
}