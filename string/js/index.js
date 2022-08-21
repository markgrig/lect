const str1 = 'Mark Grig';
console.log(`${str1} ${str1}`);

console.log('upper' , str1.toUpperCase()); // все верхние
console.log('lower' , str1.toLowerCase()); //все нижние

console.log('index0f' , str1.indexOf('r')); // первый индекс вхождения символа 
console.log('includes' , str1.includes('Mar'));// возвращает bool значение, если есть строка 

console.log('slice' , str1.slice(0,2)); // обрезать от 0 до 2 инедкса
console.log('substring' , str1.substring(3,4)); // обрезать от 3 до 4 индекса

console.log('replace' , str1.replace('M','D')); // заменить 1 строку
console.log('replaceAll' , str1.replaceAll('M','D')); // заменить все вхожения строк 

console.log('repeat' , str1.repeat(10)); // повторить строку 
console.log('split' , str1.split(" ")); // разделить

const userName = prompt("Как вас зовут?")
if ( userName !== null ) {
    alert('Вас зовут ' , userName.trim()); // вырезать пробелы в начале и в конце 
}

const userAge = prompt("Сколько вам лет?")
userAge == Number(userAge.trim())
if ( userAge !== NaN ) {
    alert(`Вас зовут ${userName} и вам ${userAge} лет`); // вырезать пробелы в начале и в конце 
}

