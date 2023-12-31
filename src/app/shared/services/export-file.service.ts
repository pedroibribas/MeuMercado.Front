import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { CsvHandler } from "../utils/csv-handler.utils";

@Injectable({
  providedIn: 'root'
})
export class ExportFileService {
  private fileContent = '';
  private fileExtension = '';
  private fileContentBlob?: Blob;

  constructor(
    private csvHandler: CsvHandler) {}

  public convertProductsToCsv(products: Product[]): this {
    this.fileContent = this.csvHandler.createCsvTable(products);
    this.fileExtension = 'csv';
    return this;
  }

  public toBlobUTF8_BOM(): this {
    this.fileContentBlob = new Blob(['\ufeff', this.fileContent]);
    return this;
  }

  public download(): void {
    const downloadElement: HTMLAnchorElement = document.createElement('a');
    downloadElement.download = this.getFileName();
    downloadElement.href = this.getDownloadUrlFromBlob();
    document.body.appendChild(downloadElement);
    downloadElement.click();
    document.body.removeChild(downloadElement);
  }

  private getFileName(): string {
    return `meu-mercado-produtos_${(new Date().toJSON().slice(0,10))}.${this.fileExtension}`;
  }

  private getDownloadUrlFromBlob() {
    if (typeof this.fileContentBlob === 'undefined')
      throw new Error(
        `Erro ao obter URL do Blob: o valor de Blob é ${this.fileContentBlob}`);
    
    return URL.createObjectURL(this.fileContentBlob);
  }
}