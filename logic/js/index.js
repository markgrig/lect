const userAge = 21
//И
if  ( userAge > 5 && userAge < 18) {
    console.log('Пользователь ходит в школу')
}
else {
    console.log('Пользоатель не ходит в школу')
}

const userLang = 'JavaScript'
const userExp = 2
if ( userLang == "JavaScript" && userExp > 1) {
    console.log("Пользователь может собеседоваться на разработчика")
}

const timeHour = 12
//Или
if ( timeHour < 8 || timeHour > 18 ) {
    console.log("Наш офис закрыт")
}
else{
    console.log("Наш офис открыт")
}

//одна строчка заменяет условие сверху
timeHour < 8 || timeHour > 18 ? console.log("Наш офис закрыт") : console.log("Наш офис открыт")

//определение с или 
//const myName = "Марк"
//const myName
let myName
const nickName = myName || "Noname"
console.log(nickName);

//let youName
const youName = "Софья"
if ( youName) {
    console.log("Переменная определена");
}
else {
    console.log("Переменнная не определена");
}

//оператор объеденения 

//ложные занчения c false, 0, "", Nan, undefuind, null
const firstOp = false || "first"
//ложные занчения с undefuind, null
const twoOp = false ?? "two"
console.log(firstOp, twoOp);


// for (let a of arr) {}- перебор массива такой 