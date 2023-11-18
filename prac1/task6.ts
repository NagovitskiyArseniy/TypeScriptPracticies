function task6(num: number): number {
  while (num >= 10) {
      num = (+num.toString().split('').reduce((res, cur) => ((+res) + (+cur)).toString()));
  }
  return num;
}

/*
    Почему-то если оставить (+res) + (+cur) без toString(), редактор говорит что нельзя так делать, но все работает 
*/