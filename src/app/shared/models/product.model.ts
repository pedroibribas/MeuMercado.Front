import { v4 as uuidv4 } from 'uuid';


export class Product {
  protected id: string;
  public name: string;
  public brand: string;
  public amount: string;
  public type: string;
  protected isSelected: boolean;
  protected isPending: boolean;

  constructor(data: { name: string, brand: string, amount: string, type: string }) {
    this.id = uuidv4();
    this.isSelected = true;
    this.isPending = true;
    this.name = data.name;
    this.brand = data.brand;
    this.amount = data.amount;
    this.type = data.type;
  }
}