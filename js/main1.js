// import helper functions and Todos into main.js
import { qs, onTouch } from "./utilities.js";
import Todos from './Todos.js';

// // create an instance of the class
//  const myTask = new Todos();

//  myTask.listTodos();


// document.querySelector(".task-button").addEventListener("click", function() {
//     myTask.addTodo();
//     console.log("click successful")
// })

const controller = {

    load() {
      this.todoList = new Todos();
      let that = this;
      window.addEventListener('load', () => {
        that.todoList.loadList();
        that.todoList.listTodos();
      });
      onTouch('.task-button', () => {
        that.todoList.addTodo();
      });
      // qs('form')[0].addEventListener('submit', (event) => {
      //     event.preventDefault();
      //     that.todoList.addTodo();
      // });
    }
  }



// const controller = {
//   //on load grab the array and insert it into the page
//   load() {
//     this.todoList = new Todos();
//     let that = this;
//     window.addEventListener('load', () => {
//       that.todoList.loadList();
//       that.todoList.listTodos();
//     });
//     onTouch('#add-task', () => {
//       that.todoList.addTodo();
//     });
//     qs('form')[0].addEventListener('submit', (event) => {
//         event.preventDefault();
//         that.todoList.addTodo();
//     });
//   }
// }

 controller.load();

//  todoList = new Todos();