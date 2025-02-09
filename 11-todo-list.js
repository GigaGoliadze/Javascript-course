/*steps:
1. Create array;
2. when clicking add, get text from textbox;
3. add to array
4.console.log the array*/

const todoList = [];
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
 
  todoList.push(name);
  console.log(todoList);
}
