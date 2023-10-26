import { newUUID } from '../utils/uuid.utils';
import { ProductDto } from './product-dto.model';


export class Product {
  public id: string;
  public name: string;
  public brand: string;
  public amount: string;
  public type: string;
  public isSelected: boolean;
  public isPending: boolean;

  constructor(data: ProductDto) {
    this.id = newUUID();
    this.isSelected = true;
    this.isPending = true;
    this.name = data.name ?? '';
    this.brand = data.brand ?? '';
    this.amount = data.amount ?? '';
    this.type = data.type ?? '';
  }
}