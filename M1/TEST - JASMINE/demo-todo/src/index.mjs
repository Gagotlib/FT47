//? Con clases
class ToDoList {
    constructor() {
        this.todos = []
    }

    getTodos() { 
        return this.todos
    }

    addTodo = (todo) => {
        this.todos.push(todo)
    }
    deleteTodo() { 
        this.todos.pop()
    }

}

// const todos = new ToDoList()

// console.log(todos.getTodos())
// todos.addTodo("Trapear")
// console.log(todos.getTodos());

//? Con funciones constructoras

/* function ToDoList2() { 
    this.todos = []
}


ToDoList2.prototype.getTodos = function () { 
    return this.todos
}

ToDoList2.prototype.addTodo = function (el) {
    this.todos.push(el)
}

ToDoList2.prototype.deleteTodo = function () {
    this.todos.pop()
}

const todos = new ToDoList2()
console.log(todos)
todos.addTodo("Barrer")
console.log(todos.getTodos());
todos.deleteTodo()
console.log(todos.getTodos()); */

export default ToDoList;
// module.exports = toDoList; 


