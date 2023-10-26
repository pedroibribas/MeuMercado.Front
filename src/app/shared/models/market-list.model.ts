import { newUUID } from "../utils/uuid.utils";
import { MarketListDto } from "./market-list-dto.model";
import { Product } from "./product.model";


export class MarketList {
    public id: string;
    public userId: string;
    public products: Product[];
    public createdAt: string;

    constructor(dto: MarketListDto) {
        this.id = newUUID();
        this.userId = newUUID();
        this.createdAt = new Date().toString();
        this.products = dto.products ?? [];
    }
}