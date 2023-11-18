function task5(num: number): number {
    return (+num.toString().split('').map(el => ((+el)**2).toString()).join(''));
}