export function csvTable(objectArray: {}[]) {
  let table = '';

  table += objectToCsvHeadingRow(objectArray[0]);

  for (let i = 0; i < objectArray.length; i++) {
    if (i === objectArray.length - 1) {
      table += objectToCsvEndingRow(objectArray[i]);
    } else {
      table += objectToCsvDefaultRow(objectArray[i]);
    }
  }

  return table;
}

function objectToCsvHeadingRow(object: IObject): string {
  return Object.keys(object).join(',') + '\r\n';
}

function objectToCsvDefaultRow(object: IObject): string {
  return Object.keys(object).map((key) => [object[key]]).join(',') + '\r\n';
}

function objectToCsvEndingRow(object: IObject): string {
  return Object.keys(object).map((key) => [object[key]]).join(',');
}

export function csvToObjectArray(fileContent: string): any[] {
  const result = [];
  const rows = fileContent.split('\r\n');
  let keys: string[] = [];

  for (let i = 0; i < rows.length; i++) {
    const cells: string[] = rows[i].split(',');

    const isHeadingRow: boolean = i === 0;

    if (isHeadingRow) {
      keys = cells;
    } else {
      result.push(createObject(keys, cells));
    }
  }
  return result;
}

function createObject(keys: string[], cells: any[]): {} {
  let newObject: { [index: string]: any } = { };

  for (let j = 0; j < cells.length; j++) {
    newObject[keys[j]] = cells[j];
  }

  return newObject;
}

interface IObject {
  [index: string]: any;
}