function task4(str: string): string {
    const arr: string[] = str.split(' ').map((word) => word.split('').map((el, i) => i==0 ? el.toUpperCase() : el).join(''));
    arr.splice(arr[0].length, 1);
    return arr.join(' ');
}