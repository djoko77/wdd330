import { qs, onTouch } from "./utilities.js";
import Todo from './ToDos.js';


const todoList = new Todo();

console.log(todoList);
  
onTouch('.task-button', () => {
  addTodo();
})