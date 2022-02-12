import ls from './ls.js';
import utilities from './utilities.js';

// Display the task lists
listTodos();

// Event listeners and onclick
utilities.onTouch('#add-button', () => {
    newTodo();
    location.reload();
})
utilities.qs('#active')[0].onclick = filterTasks;
utilities.qs('#all')[0].onclick = filterTasks;
utilities.qs('#completed')[0].onclick = filterTasks;

// Initiate building of the object, appending the contents, and saving it to the local storage
function newTodo() {
    const todo = createTodo();
    const liContent = createTodoElement(todo);
    addToList(liContent);
    ls.writeToLS(todo);
}

// Grab the input from the user to create the object 
function createTodo() {
    let input = utilities.qs("#add-task")[0];
    let addTask = input.value;
    const newTask = {id: Date.now(), content: addTask, completed: false}
    // console.log(JSON.stringify(newTask));
    return newTask;
}

// Create the structure and content of the the li element
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

// Append the todo lists to the section where it should be add
// Also restore the styling of the input and removing the error message
function addToList(liContent) {
    utilities.qs('#tasks-lists')[0].appendChild(liContent);
    utilities.qs('#error-message')[0].innerHTML = "";
    utilities.qs('#add-task')[0].style.border = "1px solid black";
}

// Grab all the todos from the local storage and display it
function listTodos() {
    const todoList = ls.readFromLS();
    todoList.forEach(element => {
        const list = createTodoElement(element)
        addToList(list);
    })
}

// Get the target todo and delete it
function removeTask(target) {
    const targetButton = target.currentTarget;
    ls.removeFromLS(targetButton.getAttribute('data-id'));
    utilities.qs('#tasks-lists')[0].innerHTML = '';
    listTodos();
}

// Get the target todo and toggle it as complete
function taskCompletion(target) {
    const targetButton = target.currentTarget;
    ls.taskCompleted(targetButton.getAttribute('data-id'));
    utilities.qs('#tasks-lists')[0].innerHTML = '';
    listTodos();
}

// Filtering function to group the todos according to their status
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