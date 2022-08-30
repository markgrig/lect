const object1 = {
    firstName: "Марк",
    twoName: "Григорьев"
}

//перебор устаревшее
for ( key in object1 ) {
    console.log( key, object1[key] );
}

//современные 
console.log( Object.keys(object1) );
console.log( Object.values(object1) );
console.log( Object.entries(object1) );

// key - любое, value - 
