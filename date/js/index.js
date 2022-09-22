//date 

//текущая дата
const todayDate = new Date()
console.log(todayDate)

// 1- год , 2 - месяц, 3- день, 4 - часы, минуты , секунды, миллисекунды
const newDate = new Date( 2000 , 1 , 10 , 11 , 55)

//геттеры

console.log( "год" , newDate.getFullYear() ); //
console.log( "месяц" , newDate.getMonth() ); // 0 - январь, 11 - декабрь
console.log( "день" , newDate.getDate() );  // 0 - воскресенье 6 - суббота

// также поскольку Date - сlass , в нём предусмотрели и сеттеры

//текущая дата в милисекундах (можно использовать для посчёта времени работы программы) 
const todayDateInMilisecods =  Date.now() // или так -  new Date().getTime()
console.log(todayDateInMilisecods)


