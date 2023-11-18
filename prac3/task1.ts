type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
};

function getHouse(): House {
    const house: House = {
        street: 'Pushkina',
        apartmentCount: 76,
        buildInfo: {
            year: 1996,
            material: 'rocks',
        }
    };

    house.buildInfo.year = 1990
    
    return house;
}
/*

    Ошибка происходит изза того, что мы пытаемся обратиться к объекту undefined, который ничего в себе не хранит.
    Лучше сначала инициализировать переменную, и после при необходимости менять данные.

*/
function handleHouse(): void {
    const house: House = getHouse();

    console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
    console.log(`build in ${house.buildInfo .year}, build from ${house.buildInfo.material} `);
}

handleHouse();