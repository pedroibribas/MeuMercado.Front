export function isObjectEmpty(object: Object): boolean {
    for (const prop in object) {
        if (Object.hasOwn(object, prop))
          return false;
    }
    return true;
}