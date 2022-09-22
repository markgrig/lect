//this - это указатель на текущий экземляр класса, обекта

const user = {
    name: "Mark" ,
    getName()  {
        return this.name
    }
}

console.log(user.getName());

// bind, call, apply - методы для передачи методов объекту :)

const user2 = {
    name: "Zofia"
}

//передача методов между объектами
const callName = user.getName.call(user2)
console.log( callName);


const getInfo = function( funname ) {
    console.log(`${this.name} - из функции ${funname}`);
}

getInfo.call(user, "call") // параметры в функцию call передаются через запятую 
getInfo.apply(user, [ "apply" ]) // параметры в фукнцию apply передаются в виде массива

const res = getInfo.bind(user, "bind") 
res() 

/*может происходить потеря контента
1 - если не использовать методы как функции 
2- если в методах использовать стрелочные функции 
( так как стрелочные функции не имеют this  ) */
