const url = "https://jsonplaceholder.typicode.com/todos"

const createToolElement = ( text ) => {
    const todoElement = document.createElement("div")
    const todoListElement = document.createElement("li")
    todoListElement.textContent = text
    todoElement.append(todoListElement)
    return todoElement
}
const toggleLoader = ( teg ) => {
    const loader = document.querySelector('.loader')
    const isHidden = loader.hasAttribute("hidden") 
    if (isHidden) {
        loader.removeAttribute("hidden")
    }
    else {
        loader.setAttribute("hidden", "")
    }
}
const dataCont = document.querySelector(".list")

const getAllTodos = () => {
    toggleLoader()
    
    const res = fetch(url, {
        method: 'GET'
    })
    
    res
    .then( (response) => {
        if ( !response.ok ){
            throw new Error("ошибка запроса") //новый оператор!   
        }
        return response.json()
    })
    /*.then( (response) => {
        return response.text()
    })*/
    .then( (todos) => {
        console.log(todos)
        todos.forEach(element => {
            dataCont.append(createToolElement(element.title))
        });
        
    })
    .catch( (errors) => {
        console.log(errors)
    })
    .finally(()=>{
        toggleLoader()
    })

   

}

getAllTodos()


  