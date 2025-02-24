


document.getElementById("todoForm").addEventListener("submit", handleSubmit)
document.getElementById("deleteAll").addEventListener("click", handleDeleteAll)
const todoListDiv = document.getElementById("todos")

if (!localStorage.getItem("todos")) {
    let todos = []
    localStorage.setItem("todos", JSON.stringify(todos))
    todoListDiv.innerHTML = "<h3>No Todos available</h3>"
} else {
    renderTodos()
}

function handleSubmit(e) {
    e.preventDefault()
    const title = document.getElementById("title").value
    const task = document.getElementById("task").value
    document.getElementById("todoForm").reset()

    const todo = { title, task }
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTodos()
}

function renderTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (!todos.length) {
        todoListDiv.innerHTML = "<h3>No Todos available</h3>"
        return
    }
    todoListDiv.innerHTML = ""
    todos.forEach(function (todo) {
        const todoDiv = document.createElement("li")
        todoDiv.innerHTML = `
            <h3 id="ye">${todo.title}</h3>
            <p id="yye">${todo.task}</p>
            <button type="button" id="button1">Completed</button>
        `
        todoListDiv.appendChild(todoDiv)
    })
}

function handleDeleteAll() {
    localStorage.clear("todos")
    let todos = []
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTodos()
}

let button1= document.getElementById("button1");
button1.addEventListener("click", function() {
    document.getElementById("ye").style.color = "red";
    document.getElementById("yye").style.color = "red";
});

