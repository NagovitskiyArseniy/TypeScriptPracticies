/*

const actor = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Machachkala',
    hasOskar: false,
    filmsCount: 10,
    age: '14',
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actor) => {
    return actor.age + 20;
}
console.log(howOldWillBeActorAfterTwentyYears(actor));

*/

/*
    Причина возникновения ошибки в том, что мы не знаем точно какой тип данных используется для ключа в коллекции,
    Typescript для исправления предлагает объявить свой кастомный тип данных, в котором явно укажем тип ключа в коллекции
*/

type ActorType = {
    name: string,
    firstName: string,
    country: string,
    city: string,
    hasOskar: boolean,
    filmsCount: number,
    age: number,
    languages: string[]
}

const actor: ActorType = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Machachkala',
    hasOskar: false,
    filmsCount: 10,
    age: 14, // если мы так и оставим это поле с типо string, редактор кода (в моем случае VS Code) подскажет, что тип поля не соответсвует типу прописанному в ActorType
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actor) => {
    return actor.age + 20;
}
console.log(howOldWillBeActorAfterTwentyYears(actor));
