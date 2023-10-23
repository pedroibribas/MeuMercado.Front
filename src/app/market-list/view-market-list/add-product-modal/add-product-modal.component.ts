import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';

import { Product } from "src/app/shared/models/product";
import { AlertService } from "src/app/components/alert/alert.service";

import { MarketListStore } from "../../shared/stores/market-list.store";

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html'
})
export class AddProductModalComponent implements OnInit {
  public newProductForm: FormGroup = this.buildForm();
  private products: Product[] = [];
  public productTypeOptions: string[] = [];
  public errors: string[] = [];

  @Input({ required: true })
    public isModalOpen = false;

  @Output()
    public closeModalEvent = new EventEmitter();
    
  constructor(
    private formBuilder: FormBuilder,
    private marketListStore: MarketListStore,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.setProducts();
    this.setTypesOptions();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  get name() { return this.newProductForm.get('name'); }
  get brand() { return this.newProductForm.get('brand'); }
  get type() { return this.newProductForm.get('type'); }

  private setProducts(): void {
    this.marketListStore
      .load()
      .subscribe((l) => this.products = l.products)
      .unsubscribe();
  }

  private setTypesOptions() {
    this.products.forEach((p) => {
      if (!this.productTypeOptions.includes(p.type))
        this.productTypeOptions.push(p.type);
    });
  }

  public updateTypeFieldBySelectedOption(event: Event): void {
    const selectElement = event.currentTarget as HTMLSelectElement;
    this.type?.setValue(selectElement.value);
  }

  public addNewProduct(): void {
    if (this.newProductForm.invalid) {
      this.errors.push('Erro ao adicionar novo produto na lista.');
    }

    const newProduct = this.newProductForm.getRawValue() as Product;
    newProduct.id = uuidv4();
    newProduct.isSelected = true;
    newProduct.isPending = true;
    this.products.push(newProduct);

    this.marketListStore
      .setField('products', this.products)
      .updateLocalStorage();
      
    this.alertService.success(`${newProduct.name} adicionado.`);
    this.newProductForm.reset();
  }

  public closeModal() {
    this.closeModalEvent.emit();
  }
}