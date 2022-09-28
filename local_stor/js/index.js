const myName = "Mark"

localStorage.setItem("myName" , myName.toString())
console.log(localStorage.getItem("myName"))

//удаление 

localStorage.removeItem("myName")
console.log(localStorage.getItem("myName"))

localStorage.setItem("myName" , myName.toString())
localStorage.clear()
console.log(localStorage.getItem("myName"))

//запись объектов

const developer = {
    name: "Марк",
    age: 21, 
}

localStorage.setItem( "developer", JSON.stringify( developer ))
console.log (  JSON.parse( localStorage.getItem( "developer") ));

