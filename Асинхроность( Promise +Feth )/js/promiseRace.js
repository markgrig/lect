//promise all - метод для обработки нескольких асинхронных запросов, возвращает самый быстрый промис  

const promise1 = new Promise( (resolved) => {
    setTimeout( () => {
        resolved("сработал 1 промис")
    }, 500)
})

const promise2 = new Promise( (resolved) => {
    setTimeout( () => {
        resolved("сработал 2 промис")
    }, 500)
})

const promise3 = new Promise( (resolved) => {
    setTimeout( () => {
        resolved("сработал 3 промис")
    }, 500)
})

Promise.race([ promise1, promise2, promise3 ])
    .then( (succses) =>{
        console.log(succses)
    })
    .catch( (error) =>{
        console.log(error )
    })


