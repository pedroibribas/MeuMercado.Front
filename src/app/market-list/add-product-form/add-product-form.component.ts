import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

import { getArrayOfObjectArrayByKey } from "src/app/shared/utils/array.utils";
import { AlertService } from "src/app/components/alert/alert.service";
import { MarketListStore } from "src/app/market-list/shared/services/stores/market-list.store";
import { ViewedProductsStore } from "../shared/services/stores/viewed-products.store";
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
    private alertService: AlertService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.marketListStoreSubscription = this.marketListStore.load()
      .subscribe((l) => {
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
      amount: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  get name() { return this.form.get('name'); }
  get type() { return this.form.get('type'); }
  get amount() { return this.form.get('amount'); }


  public updateTypeFieldBySelectedProductType(event: Event): void {
    const selectElement = event.currentTarget as HTMLSelectElement;
    this.type?.setValue(selectElement.value);
  }

  public submit(): void {
    if (this.setInvalidation())
      return;

    const newProduct: Product = this.getNewProductByFormData();
    this.productsDto.push(newProduct);

    this.updateModuleData();

    this.alertService.success(
      `${newProduct.name} adicionado.`);

    this.form.reset();
  }

  private setInvalidation(): boolean {
    if (this.form.invalid) {
      return true;
    }
    return false;
  }

  private getNewProductByFormData(): Product {
    const formData = this.form.getRawValue() as Product
    return new Product({
      name: formData.name,
      brand: "",
      type: formData.type,
      amount: formData.amount
    });
  }

  private updateModuleData(): void {
    this.marketListStore
      .setField('products', this.productsDto)
      .updateLocalStorage();
    this.viewedProductsStore
      .setState(this.productsDto);
  }

  protected returnPage() {
    this.location.back();
  }

}