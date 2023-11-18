function arrayDiff(a: any[], b: any[]): any[] {
    return a.filter((item) => b.indexOf(item) == -1)
}