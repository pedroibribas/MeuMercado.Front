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