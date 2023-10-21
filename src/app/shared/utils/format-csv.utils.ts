export function csvTable(objectArray: {}[]) {
  let table = '';

  for (let i = 0; i < objectArray.length; i++) {
    if (i === 0) {
      table += csvFirstRow(objectArray[0]);
    } else {
      table += csvDefaultRow(objectArray[i]);
    }
  }

  return table;
}

export function csvFirstRow(object: { [index: string]: any }) {
  let row = '';

  for (let key in object) {
    row += `${key};`;
  }

  return row += '\r\n';
}

export function csvDefaultRow(object: { [index: string]: any }) {
  let row = '';

  for (let key in object) {
    row += `${object[key]};`;
  }

  return row += '\r\n';
}

export function csvToObjectArray(fileContent: string): any[] {
  const result = [];
  
  const rows = fileContent.split('\r\n');
  rows.pop();

  let keys: string[] = [];

  for (let i = 0; i < rows.length; i++) {
    const cells: string[] = rows[i].split(';');
    cells.pop();

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