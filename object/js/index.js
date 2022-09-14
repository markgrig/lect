const object1 = {
    firstName: "Марк",
    twoName: "Григорьев"
}

const object2 = {
    1: "Марк",
    2: "Григорьев"
}

//Использование точечной нотации:
// obj.key3 = "value3" 
//Использование обозначения в квадратных скобках:
// obj["key3"] = "value3"; 
//delete thisIsObject[key]; 
//перебор устаревшее
for ( key in object1 ) {
    console.log( key, object1[key] );
}

//современные (cоздаёт массив) 
console.log( Object.keys(object1) );
console.log( Object.values(object1) );
console.log( Object.entries(object1) );

// key - любое, value - 

//in 
console.log( "firstName" in object1 );

//объеденение обектов спрет оператор 

const object3 = {
    ...object1 , 
    ...object2 
}

//опциональняа цепочка ?.

const object4 =  {
    ...object1 ,
    new_key: {
         ...object2 
    } 
}

if ( !(object4?.new_key?.name)) {
    console.log( 'опциональная цепочка работает!');
}
