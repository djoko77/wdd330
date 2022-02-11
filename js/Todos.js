// Import helper functions into Todos.js
import { readFromLS, writeToLS, removeFromLS } from "./ls.js";
import { qs, onTouch } from "./utilities.js";

var todoList = [];
// In the constructor you should set a variable with the element our todo list will be built in, and the key we will use to read/write from localStorage
export default class Todos {
    constructor() {

        this.list = [];
        this.key = 'list';
    
    }

    
	loadList() {
		let list = getTodos(this.key);
		if (list !== null) {
			this.list = list;
		}
		return this.list;
	}


 /* Add a method to the Todos class called addTodo. It should grab the input in the html where users enter the text of the task, then send that along with the key to a SaveTodo() function. Then update the display with the current list of tasks */  
   
        listTodos() {
            renderTodoList(this.list, qs('#tasks-lists')[0]);
        }

        completeTodo(todo) {
            const done = todo.find(todos => todo.completed == false)
        }

        removerTodo() {
            this.listTodos();
        }

        filterTodos(todo) {

            var completion = todo.filter( todos => 
                (todos.completed == true)) 
            }

        addTodo() {
                //   console.log("get here");
                
                    var element = qs("#add-task")[0];
                 
                    var task = element.value
                
            
                    //console.log(element.key)
                    
                    //console.log(JSON.stringify(todo));
            
            
                   // console.log(JSON.stringify(list));
                    //alert(JSON.stringify(list));
                    //saveTodo(timestamp, todo);
                    //saveTodo(this.key, list);
                    saveTodo(task, this.key);
                    //this.loadList();
                    this.listTodos();
        }
            

}

/** build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in 
LS @param {string} task The text of the task to be saved.

// A todo should look like this: { id : timestamp, content: string, completed: bool }
*/
function saveTodo(task, key) { 

    var timestamp = Date.now();

    var todo = {
        id: timestamp,
        content: task,
        completed: false
    }

    // console.log(JSON.stringify(todo))
    //var list = [];
    //list = getTodos(key);
    todoList.push(todo);

    //console.log(JSON.stringify(todo));
    writeToLS(key, todoList)
}

//In the Todos.js module, but not in the Todos class create the following function
/**
 * check the contents of todoList, a local variable containing a list of ToDos. 
 * If it is null then pull the list of todos from localstorage, update the local variable,
 *  and return it
 * @param  {string} key The key under which the value is stored under in LS
  * @return {array}     The value as an array of objects
 */
function getTodos(key) { 

    
    var todoList = readFromLS(key)
	return todoList ? todoList : [];
}

/** foreach todo in list, build a li element for the todo, and append it to element
@param {array} list The list of tasks to render to HTML 
@param {element} element The DOM element to insert our list elements into.

*/
function renderTodoList(list, element) { 
   //console.log(JSON.stringify(list));
    element.innerHTML = '';

    list.forEach((task) => {
        const listTask = document.createElement("li");
        listTask.classList.add('single-todo');
        listTask.id = task.id;
        listTask.innerHTML =  `
        <input type="checkbox">
        <label for="dos">${task.content}</label>
        <button>X</button>`;
        element.appendChild(listTask);

    });
}




