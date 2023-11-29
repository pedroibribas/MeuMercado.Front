import { IObject } from "../models/object.interface";


export function getArrayFromObjectArrayByKey(source: IObject[], key: keyof IObject): any[] {
    const array: any[] = [];
    source.forEach((x) => {
        array.push(x[key]);
    });
    return array;
}


export function getUniquesArray(source: any[]): any[] {
    const unique: any[] = [];
    source.forEach((x) => {
        if (!unique.includes(x))
            unique.push(x);
    });
    return unique;
}


export function getArrayOfObjectArrayByKey(objArray: IObject[], key: keyof IObject): any[] {
    const arrayByKey: any[] = [];
    const uniques: any[] = [];

    objArray.forEach((x) => 
        arrayByKey.push(x[key]));

    arrayByKey.forEach((x) => 
        !uniques.includes(x) && uniques.push(x));

    return uniques;
}


export function getStringArrayOfObjectArrayByKey(objArray: IObject[], key: keyof IObject): any[] {
    const arrayByKey: any[] = [];
    const uniques: any[] = [];

    objArray.forEach((x) =>
        arrayByKey.push(x[key]));

    arrayByKey.forEach((x: string) => {
        x.toLowerCase();
        !uniques.includes(x) && uniques.push(x);
    });

    return uniques;
}