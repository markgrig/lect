//promise all - метод для обработки нескольких асинхронных запросов 


//fulfild - eсли все будут успешны 
//rejected - eсли хотя бы один с ошибкой 


const url = "https://jsonplaceholder.typicode.com/todos"
const todosIds = [ 2, 4, 6, 8]
const createToolElement = ( text ) => {
    const todoElement = document.createElement("div")
    const todoListElement = document.createElement("li")
    todoListElement.textContent = text
    todoElement.append(todoListElement)
    return todoElement
}

const dataCont = document.querySelector(".list")

const getTodosById = ( ids ) => {
    const reqestArray = ids.map( ( id ) => fetch(`${url}/${id}`) )
    Promise.all(reqestArray)
        .then( (responses) => {
            const responsesDecode = responses.map( (response) => response.json())
            return Promise.all(responsesDecode)
        }
        )
        .then( (result) =>  {
            result.forEach(element => {
                const HtmlElement = createToolElement(element.title)
                dataCont.append(HtmlElement)
            })
        })
}

getTodosById(todosIds)