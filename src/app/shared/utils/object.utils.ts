export function isObjectEmpty(obj: Object): boolean {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop))
          return false;
    }
    return true;
}