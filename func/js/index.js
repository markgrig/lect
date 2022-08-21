//function diclaration, вызывается и до, и после определения 
function Animal_1( animalName ) {
        console.log(`Животное ${animalName} было покормленно`);
}

Animal_1("Лев")

//function expretion, только после определения 
const Animal_2 = function( animalName ) {
    console.log(`Животное ${animalName} было покормленно`);
}

Animal_2("Львица")

// Стрелочная функция, только после определения 
const Animal_3 = ( animalName ) => {
    console.log(`Животное ${animalName}, было покормленно`);
}

Animal_3("Львёнок")

/*
const multiplayByFive = ( val ) => {
    return val*5
}
*/

const multiplayByFive = ( val ) => val*5

console.log(multiplayByFive(100))