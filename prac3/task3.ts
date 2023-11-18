enum Directions {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}

// const Directions = ['Up', 'Down', 'Left', 'Right'];

type Player = {
    x: number,
    y: number,
    move: (direcion: Directions, amount: number) => void,
}


const player: Player = {
    x: 0,
    y: 0,
    move: function (direction: Directions, amount: number) {
        switch (direction) {
            case Directions.Up:
                this.y += amount;
                break;
            case Directions.Down:
                this.y -= amount;
                break;
            case Directions.Left:
                this.x -= amount;
                break;
            case Directions.Right:
                this.x += amount;
                break;
            default:
                break;
        }
    }
}

player.move(Directions.Up, 1);
player.move(Directions.Down, 2);
player.move(Directions.Left, 2);
player.move(Directions.Right, 3);

console.log(player.x === 1); // true
console.log(player.y === -1); // true

/*

    Код стал более читабельным, теперь достаточно сложно ошибиться при передаче данных в функцию, передав какуюто неверную строчку.

*/