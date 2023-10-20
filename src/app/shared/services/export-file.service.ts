import { Injectable } from "@angular/core";
import { AlertService } from "src/app/components/alert/alert.service";
import { Product } from "src/app/market-list/shared/models/product";

@Injectable({
  providedIn: 'root'
})
export class ExportFileService {
  private fileContent = '';
  private fileExtension = '';
  private fileContentBlob?: Blob;

  constructor(
    private alertService: AlertService) { }

  public convertProductsToCsv(products: Product[]): this {
    let content = '';

    products.forEach((p) => {
      let line = `${p.id},${p.name},${p.brand},${p.type},${p.amount},${p.isSelected},${p.isPending}\r\n`;
      content += line;
    });

    this.fileContent = content;
    this.fileExtension = 'csv';
    return this;
  }

  public toBlobUTF8_BOM(): this {
    this.fileContentBlob = new Blob(['\ufeff', this.fileContent]);
    return this;
  }

  public download(): void {
    try {
      const downloadElement: HTMLAnchorElement = document.createElement('a');
      downloadElement.download = this.getFileName();
      downloadElement.href = this.getDownloadUrlFromBlob();
      document.body.appendChild(downloadElement);
      downloadElement.click();
      document.body.removeChild(downloadElement);
    } catch (err: any) {
      this.alertService.error(err);
    }
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