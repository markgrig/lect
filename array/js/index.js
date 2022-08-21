const salariesOfDevelopers = [ 100, 200, 300]

console.log('salariesOfDevelopers',salariesOfDevelopers);
console.log('salariesOfDevelopers.length',salariesOfDevelopers.length);

const newsalariesOfDevelopers1 = 5000
const newsalariesOfDevelopers2 = 100
//добавляет в конец
salariesOfDevelopers.push(newsalariesOfDevelopers1)
//Добавляет в начало
salariesOfDevelopers.unshift(newsalariesOfDevelopers2)
salariesOfDevelopers[2] = 1
console.log(salariesOfDevelopers[4]);
console.log('salariesOfDevelopers',salariesOfDevelopers);
//удаляет  элемент из начала
salariesOfDevelopers.shift()
//удаляет элемент из конца массива 
salariesOfDevelopers.pop()

console.log('salariesOfDevelopers',salariesOfDevelopers);

//итерации
const DeveloperName = [ 'Марк', "Миша", "Моисей" , "Саня", "Даня"]

//немодно так перебирать
for (let index = 0; index < DeveloperName.length; index++) {
    console.log(DeveloperName[index]); 
}

//круто так перебирать
DeveloperName.forEach( ( name, index, array ) => { 
    console.log(index, name);
})

//вырезить или заменить
const removedElement1 = DeveloperName.splice(0,1, "Mark")
console.log(removedElement1);
console.log(DeveloperName);

//сохранить часть массива в новый, не вырезая из исходного
const removedElement2 = DeveloperName.splice(0,1)
console.log(removedElement2);

//indexOf - ищет элемнт и возвращает индекс
//includes - ищет  существует ли элемент
//split - разрезает строку, формируя массив из разрезанных элементов 
//join - объеденение элементов массива в строки 
 console.log(DeveloperName.join( ", "));
 console.log(DeveloperName.reverse());

 const myCar = "BMW"
console.log(myCar.split().reverse().join());

//возвращает новые
const doubleSalariesOfDevelopers = salariesOfDevelopers.map( ( name, indexm, array ) => {
    return name*2
})

console.log(doubleSalariesOfDevelopers);
//фильтрует по условиям массив
const filterSalariesOfDevelopers = salariesOfDevelopers.filter( ( name, indexm, array ) => {
    return name % 100 === 0
})

 console.log(filterSalariesOfDevelopers);

 //находит первое занчение которое соответвуте условию
 const Salaries_500 = salariesOfDevelopers.find( name => { return name >= 50 } )
 console.log(Salaries_500);

  //находит первый индекс которое соответвуте условию
  const Salaries_index = salariesOfDevelopers.findIndex( salary => { return salary > 100 } )
  console.log(Salaries_index);

  //проверка условия на каждый из элементов возвращает boolean
  const Salaries_boolean = salariesOfDevelopers.some( salary => { return salary > 100 } )
  console.log(Salaries_boolean);

   //проверка условия на все элементы возвращает boolean
   const Salaries_boolean_all = salariesOfDevelopers.every( salary => { return salary > 100 } )
   console.log(Salaries_boolean_all);

   //кальлкуяция величин
   const salaryReduce = salariesOfDevelopers.reduce( ( acc, salary, index, array ) => {
    return acc  + salary
   }, 0) 
   console.log(salaryReduce);

   //сортировка
   salariesOfDevelopers.sort( (a , b) => { return a - b } )
   console.log(salariesOfDevelopers);

   //объединение массивов
   //cancat
   console.log(DeveloperName.concat(salariesOfDevelopers));
   //... (Спрет-оператор)
   console.log( [ ... DeveloperName, ... salariesOfDevelopers] );
   console.log( [ ... '123' ]);
   