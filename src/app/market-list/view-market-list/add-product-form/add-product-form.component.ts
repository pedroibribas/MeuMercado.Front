import { Component, OnDestroy, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { v4 as uuidv4 } from 'uuid';

import { getArrayOfObjectArrayByKey } from "src/app/shared/utils/array.utils";
import { Product } from "src/app/shared/models/product";
import { AlertService } from "src/app/components/alert/alert.service";
import { MarketListStore } from "src/app/market-list/shared/stores/market-list.store";



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
    private alertService: AlertService
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
    if (this.form.invalid) {
      return;
    }

    const newProduct = this.form.getRawValue() as Product;
    newProduct.id = uuidv4();
    newProduct.isSelected = true;
    newProduct.isPending = true;
    this.productsDto.push(newProduct);

    this.marketListStore
      .setField('products', this.productsDto)
      .updateLocalStorage();
      
    this.alertService.success(`${newProduct.name} adicionado.`);
    this.form.reset();
  }
}