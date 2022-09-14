//Синхронный код
const a = 5

console.log("Начало");
for (let index = 0; index <= a; index++) {
    console.log(index);

}console.log("Конец");

//Пример ассинхронного кода 
const developer = {
    name: "Mark",
    isJSDev: true``
}
 
//SeTimeout
//setTimeout( ( )=> {console.log(a); } , 2000 )

//setInterval( () => { console.log("Интервал 1 с");}, 1000)

/*promise ( resolve - функция которая вызывается, если промис был воплнен успешно )
 reject - функция, которая вызывается, если промис был выполнен с ошибкой 
Статусы промиса: pending - ожидание, fullfellded - выполнен успешно, rejected - выполнение промиса с ошибкой */

const promise = new Promise( (resolve, reject ) => {
    if ( developer.isJSDev) {
        setTimeout( () => {
            resolve(`${developer.name} разработчик JS`);
        }, 3000 )
    }
    else {
        reject( `${developer.name} не является разработчиком JS`)
    }
})

console.log(promise);

//then - обработка успешного выполнения, сath - обработка ошибок 
promise.then((sucsessMessege) => {
    console.log(sucsessMessege);
    })
    .catch( (errorMessage) => {
        console.log(errorMessage);
    })
    .finally( () => {
        console.log("промис закончил");
    })
