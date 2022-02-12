/**
* do a querySelector lookup @param {string} selector The selector passed to querySelector
* @return {element} The matching element or null if not found 
**/
function qs(selector) { 
  var element = document.querySelectorAll(selector);
  if (element != null) 
  return element;
  else {
    element = null
  }
}

/**
add a touchend event listener to an element for mobile with a click event 
fallback for desktops @param {string} elementSelector The selector 
for the element to attach the listener to
* @param {function} callback The callback function to run

*/
function onTouch(elementSelector, callback) { 
  var elements = qs(elementSelector);
  elements.forEach( element => {
  element.addEventListener('touchend', callback);
  element.addEventListener('click', callback);
});
}

function active(todos) {
  return todos.filter(todo => {
      return todo.completed == false;
  })
}

function completed(todos) {
  return todos.filter(todo => {
      return todo.completed == true;
  })
}

export default { qs, onTouch, active, completed }