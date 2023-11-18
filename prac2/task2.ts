/*
const arr0 = [1, 2, 3] // number[]
*/
const arr1: number[] | any[] = [1, 2, 3, null]; 
const arr2: string[] | any[] = ['safety', '=', true]
const arr3: Array<string[] | number[]>= [
  [1, 2, 3, 4, 5],
  ['1', '2', '3', '4', '5'],
]
const arr4: any[] = [
  1, 2, true, 'str', undefined
] 


type Arr5 = {
    id: number,
    name: string
}
const arr5: Arr5[] = [
  {
    id: 1,
    name: 'Студент',
  },
  {
    id: 2,
    name: 'Наставник',
  }
]