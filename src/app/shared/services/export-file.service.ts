import { Injectable } from "@angular/core";
import { Product } from "src/app/shared/models/product";
import { csvTable } from "../utils/format-csv.utils";

@Injectable({
  providedIn: 'root'
})
export class ExportFileService {
  private fileContent = '';
  private fileExtension = '';
  private fileContentBlob?: Blob;

  public convertProductsToCsv(products: Product[]): this {
    this.fileContent = csvTable(products);
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