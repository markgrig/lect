// async await

const urlUser = "https://jsonplaceholder.typicode.com/users"

const urlTodos = "https://jsonplaceholder.typicode.com/todos"
//минусы промисов в том, что возникает вложенность fetch, которую неудобно читать

const getTodosForUserId = async () => {
    try {
        const responseUrlUser= await fetch(urlUser) //если вызов функции асинхронный идёт ожидание
        if (!responseUrlUser.ok) {
            throw new Error(`ошибка в urlUser = ${urlUser}`)
        }
        const users = await responseUrlUser.json()
        const firstUserID = users[0]?.id
        console.log('firstUserID',users)
        
        const responseUrlTodos = await fetch(`${urlTodos}/?userId=${firstUserID}`)
        if (!responseUrlTodos.ok) {
            throw new Error(`ошибка в urlTodos = ${urlTodos}`)
        }
        const todosForID = await responseUrlTodos.json()
        console.log(' todosForID', todosForID)

    } catch(errors) {
        console.log(errors)
    }
    finally{
        console.log("finaly");
    }
} 

const promise = getTodosForUserId()
console.log(promise); //без аsync возвращает undf, с async возвращает промис