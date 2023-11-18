function task3(str: string): string {
    return str.split(' ').map((word) => word.split('').map((el, i) => i==0 ? el.toUpperCase() : el).join('')).join(' ');
}