import ls from './ls.js';
import utilities from './utilities.js';

// Display the task lists
listTodos();

utilities.onTouch('#add-button', () => {
    newTodo();
    location.reload();
})

// utilities.onTouch('#all', () => {
//     filterTasks(true);
// })
// utilities.onTouch('#active', () => {
//     filterTasks(true);
// })
// utilities.onTouch('#completed', () => {
//     filterTasks(true);
// })

document.querySelector('#active').onclick = filterTasks;
document.querySelector('#all').onclick = filterTasks;
document.querySelector('#completed').onclick = filterTasks;

function newTodo() {
    const todo = createTodo();
    const liContent = createTodoElement(todo);
    addToList(liContent);
    ls.writeToLS(todo);
}

function createTodo() {
    let input = utilities.qs("#add-task")[0];
    let addTask = input.value;
    // console.log(JSON.stringify(addTask));
    const newTask = {id: Date.now(), content: addTask, completed: false}
    return newTask;
}

function createTodoElement(todo) {
    if(todo.content == '') {
        utilities.qs('#error-message')[0].innerHTML = "Input is blank. Please enter a task";
        utilities.qs('#add-task')[0].style.border = "2px solid red"; 
    } 
    else {
        // Create the li contents
        const liContent = document.createElement('li');
        liContent.classList.add('single-todo');

        // Button to click if the task is completed
        const doneButton = document.createElement('button');
        doneButton.setAttribute('data-id', todo.id);
        doneButton.classList.add('checklist');
        doneButton.type = "checkbox"
        doneButton.innerHTML = '&#9633;';
        doneButton.onclick = taskCompletion;

        // The label of the task
        const taskName = document.createElement('label');
        taskName.innerText = todo.content;
        taskName.classList.add('task-name');
        if(todo.completed == true) {
            taskName.style.color = "#808080";
            taskName.style.setProperty('text-decoration', 'line-through');
            doneButton.innerHTML = '&#10003;';
        }

        // The X button to remove the task
        const removeButton = document.createElement('button');
        removeButton.setAttribute('data-id', todo.id);
        removeButton.classList.add('remove-button');
        removeButton.innerText = "X";
        removeButton.onclick = removeTask;

        // Combine all the contents
        liContent.appendChild(doneButton);
        liContent.appendChild(taskName);
        liContent.appendChild(removeButton);

        return liContent;
    }
}

function addToList(liContent) {
    utilities.qs('#tasks-lists')[0].appendChild(liContent);
    utilities.qs('#error-message')[0].innerHTML = "";
    utilities.qs('#add-task')[0].style.border = "1px solid black";
    // location.reload(); 
}

function listTodos() {
    const todoList = ls.readFromLS();
    todoList.forEach(element => {
        const list = createTodoElement(element)
        addToList(list);
    })
}

function removeTask(target) {
    const targetButton = target.currentTarget;
    ls.removeFromLS(targetButton.getAttribute('data-id'));
    utilities.qs('#tasks-lists')[0].innerHTML = '';
    listTodos();
}

function taskCompletion(target) {
    const targetButton = target.currentTarget;
    ls.taskCompleted(targetButton.getAttribute('data-id'));
    utilities.qs('#tasks-lists')[0].innerHTML = '';
    listTodos();
}

function filterTasks(data) {
    utilities.qs('#tasks-lists')[0].innerHTML = '';
    let filteredTasks = [];

    const allTasks = ls.readFromLS();

    if (data.currentTarget.id == 'completed') {
        filteredTasks = utilities.completed(allTasks);
    }
    else if (data.currentTarget.id == 'active') {
        filteredTasks = utilities.active(allTasks);
    }
    else if (data.currentTarget.id == 'all') {
        filteredTasks = allTasks;
    }

    filteredTasks.forEach(todo => {
        const lists = createTodoElement(todo)
        addToList(lists);
    })
}