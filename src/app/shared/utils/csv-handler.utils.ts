import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

interface IObject {
    [index: string]: any;
}

Injectable({
    providedIn: 'any'
})
export class CsvHandler {
    public createCsvTable(objectArray: {}[]): string {
        let table = '';

        table += this.objectToCsvHeadingRow(objectArray[0]);

        for (let i = 0; i < objectArray.length; i++) {
            if (i === objectArray.length - 1) {
                table += this.objectToCsvEndingRow(objectArray[i]);
            } else {
                table += this.objectToCsvDefaultRow(objectArray[i]);
            }
        }

        return table;
    }

    public csvToMarketListProducts(fileContent: string): Product[] {
        let products: Product[] = this.csvToObjectArray(fileContent);
        return this.ensureBooleanValues(products);
    }

    private csvToObjectArray(fileContent: string): any[] {
        const result = [];
        const rows = fileContent.split('\r\n');
        let keys: string[] = [];

        for (let i = 0; i < rows.length; i++) {
            const cells: string[] = rows[i].split(',');

            const isHeadingRow: boolean = i === 0;

            if (isHeadingRow) {
                keys = cells;
            } else {
                result.push(this.createObject(keys, cells));
            }
        }
        return result;
    }

    private objectToCsvHeadingRow(object: IObject): string {
        return Object.keys(object).join(',') + '\r\n';
    }

    private objectToCsvDefaultRow(object: IObject): string {
        return Object.keys(object).map((key) => [object[key]]).join(',') + '\r\n';
    }

    private objectToCsvEndingRow(object: IObject): string {
        return Object.keys(object).map((key) => [object[key]]).join(',');
    }

    private createObject(keys: string[], cells: any[]): {} {
        let newObject: { [index: string]: any } = {};

        for (let j = 0; j < cells.length; j++) {
            newObject[keys[j]] = cells[j];
        }

        return newObject;
    }

    /**
     * @description Assegura que os valores 'true' e 'false' sejam booleanos em vez de string,
     * para evitar problemas de interpretação de booleanos.
     */
    private ensureBooleanValues(products: Product[]): Product[] {
        products.forEach((p) => {
            p.isSelected = (String(p.isSelected).toLowerCase() === 'true');
            p.isPending = (String(p.isSelected).toLowerCase() === 'true');
        });
        return products;
    }
}