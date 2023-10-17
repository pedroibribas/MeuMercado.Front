import { Product } from "./product";

export interface MarketList {
    id: string;
    userId: string;
    products: Product[];
    createdAt: string;
}