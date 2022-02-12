import utilities from './utilities.js';

// Write the array object of task to the local storage
function writeToLS(todo) {
    const toDoList = readFromLS();
    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

// Remove the specific task from the local storage by using filter and then update it
function removeFromLS(id) {
    const toDoList = readFromLS();
    const updatedList = toDoList.filter(todo => todo.id != id)
    localStorage.setItem('toDoList', JSON.stringify(updatedList));
}

// Read from the local storage and count the tasks
function readFromLS() {
    const todoListText = localStorage.getItem('toDoList');
    let todoList = [];

    if(todoListText) {
    todoList = JSON.parse(todoListText);
    utilities.qs('#tasks-number')[0].innerText = todoList.filter(
        todo => todo.completed === false
    ).length;
    }
    else if (todoList == undefined || todoList == null){
        localStorage.clear();
        todoList = JSON.parse(todoListText);
    }
    return todoList;
}

// Update the status of the specific task to complete
function taskCompleted(id) {
    const toDoList = readFromLS();
    toDoList.forEach(todo => {
        if (todo.id == id) {
            if(todo.completed) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        }
    });
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

export default { writeToLS, removeFromLS, readFromLS, taskCompleted }