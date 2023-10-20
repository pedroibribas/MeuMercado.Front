import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Product } from "src/app/market-list/shared/models/product";
import { AddProductModalService } from "./add-product-modal.service";
import { MarketList } from "src/app/market-list/shared/models/market-list";
import { AlertService } from "src/app/components/alert/alert.service";

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  providers: [AddProductModalService]
})
export class AddProductModalComponent implements OnInit {
  public newProductForm: FormGroup = this.buildForm();
  public typesOptions: string[] = [];
  public errors: string[] = [];

  @Input({ required: true })
    public marketList = { } as MarketList;
  @Input({ required: true })
    public isModalOpen = false;

  @Output()
    public closeModalEvent = new EventEmitter();
  @Output()
    public newProductEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private addProductModalService: AddProductModalService,
    private alertService: AlertService) { }

  ngOnInit(): void {
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

  private setTypesOptions() {
    this.typesOptions = this.addProductModalService
      .from(this.marketList)
      .getProductsTypes();
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

    newProduct.isSelected = true;
    newProduct.isPending = true;

    // this.addProductModalService
    //   .from(this.marketList)
    //   .store(newProduct);

    this.alertService.success(`${newProduct.name} adicionado.`);
    // this.newProductForm.reset();
    this.newProductEvent.emit();
  }

  public closeModal() {
    this.closeModalEvent.emit();
  }
}