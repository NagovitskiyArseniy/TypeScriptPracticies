type Cat = {
    name: string,
    meow: () => string,
}

type Dog = {
    name: string,
    bark: () => string,
}

const cat: Cat = {
    name: 'Pushok',
    meow: () => 'meow!'
};

const dog: Dog = {
    name: 'Bobik',
    bark: () => 'bark!',
}

function whatDoesThePetSay(pet: Dog | Cat): string {
    let sound: string;

    sound = "nothing"


    // обычный тайпгард
    if ((pet as Cat).meow) { 
        sound = (pet as Cat).meow()
    }
    else if ((pet as Dog).bark) {
        sound = (pet as Dog).bark()
    }

    // пользовательский тайпгард
    if (isCat(pet)) { 
        sound = pet.meow()
    }
    else if (isDog(pet)) {
        sound = pet.bark()
    }

    // тайпгард через оператор in
    if ('meow' in pet) {
        sound = pet.meow()
    }
    else if ('bark' in pet) {
        sound = pet.bark()
    }

    return sound;
}

function isCat(cat: unknown): cat is Cat {
    return (cat as Cat).meow ? true: false;
}

function isDog(dog: unknown): dog is Dog {
    return (dog as Dog).bark ? true: false;
}


console.log(whatDoesThePetSay(cat))
console.log(whatDoesThePetSay(dog))
