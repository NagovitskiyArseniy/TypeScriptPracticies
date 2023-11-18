/*

document.addEventListener('click', (e) => {
    const coords = [e.posX, e.posY];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});


    MouseEvent не имеет posX и posY
    Для испраления необходимо посмотреть документацию MouseEvent и решить какие именно координаты нужны
    например clientX и clientY (x и y alias'ы для них соответсвенно)

*/

document.addEventListener('click', (e) => {
    const coords = [e.x, e.y];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});

