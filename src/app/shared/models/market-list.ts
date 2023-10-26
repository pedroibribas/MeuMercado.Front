import { Product } from "./product.interface";

export interface MarketList {
    id: string;
    userId: string;
    products: Product[];
    createdAt: string;
}