import { Component, OnDestroy, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

import { getArrayOfObjectArrayByKey } from "src/app/shared/utils/array.utils";
import { AlertService } from "src/app/components/alert/alert.service";
import { MarketListStore } from "src/app/market-list/shared/services/stores/market-list.store";
import { ViewedProductsStore } from "../../shared/services/stores/viewed-products.store";
import { Product } from "src/app/shared/models/product.model";


@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html'
})
export class AddProductFormComponent implements OnInit, OnDestroy {

  protected form: FormGroup = this.buildForm();
  protected productTypesOptions: string[] = [];
  private productsDto: Product[] = [];
  private marketListStoreSubscription!: Subscription;
    
  constructor(
    private formBuilder: FormBuilder,
    private marketListStore: MarketListStore,
    private viewedProductsStore: ViewedProductsStore,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.marketListStoreSubscription = this.marketListStore.load()
      .subscribe((l) => {
debugger
        this.productsDto = l.products ?? [];
        this.productTypesOptions = getArrayOfObjectArrayByKey(this.productsDto, 'type');
      });
  }
  
  ngOnDestroy(): void {
    this.marketListStoreSubscription.unsubscribe();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  get name() { return this.form.get('name'); }
  get brand() { return this.form.get('brand'); }
  get type() { return this.form.get('type'); }


  public updateTypeFieldBySelectedProductType(event: Event): void {
    const selectElement = event.currentTarget as HTMLSelectElement;
    this.type?.setValue(selectElement.value);
  }

  public submit(): void {
    if (this.setInvalidation())
      return;

    const newProduct: Product = this.getNewProduct(
      this.form.getRawValue() as Product);
debugger
    this.productsDto.push(newProduct);

    this.setMarketListStore();
      
    this.alertService.success(
      `${newProduct} adicionado.`);

    this.form.reset();
  }

  private setInvalidation(): boolean {
    if (this.form.invalid) {
      return true;
    }
    return false;
  }

  private getNewProduct(formData: Product): Product {
    return new Product({
      name: formData.name,
      brand: formData.brand,
      type: formData.type,
      amount: ""
    });
  }

  private setMarketListStore(): void {
    this.marketListStore
      .setField('products', this.productsDto)
      .updateLocalStorage();
  }
  
  private setViewedProductsStore(): void {
    this.viewedProductsStore
      .setState(this.productsDto);
  }
}