function areEqual(a: object, b: object): boolean {
    return Object.keys(a).length === Object.keys(b).length ? false : Object.keys(a).every((key) => Object.keys(b).indexOf(key) !== -1 && a[key] === b[key]);
}