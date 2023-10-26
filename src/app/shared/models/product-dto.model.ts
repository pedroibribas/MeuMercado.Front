export class ProductDto {
  public name?: string;
  public brand?: string;
  public amount?: string;
  public type?: string;
  public isSelected?: boolean;
  public isPending?: boolean;

  constructor(init?: ProductDto) {
    this.name = init?.name;
    this.brand = init?.brand;
    this.amount = init?.amount;
    this.type = init?.type;
  }
}