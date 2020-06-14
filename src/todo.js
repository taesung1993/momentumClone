const todoForm = document.getElementById("jsTodo");
const inputTodo = todoForm.querySelector("#todoInput");
const todoList = document.querySelector(".todo-list");

const TODOS = "TODOS";
let todos = [];

function loadedTodo() {
  const loadedTodo = localStorage.getItem(TODOS);
  if (loadedTodo !== null) {
    const parseTodo = JSON.parse(loadedTodo);
    parseTodo.forEach((item) => {
      paintTodos(item.content);
    });
  }
}

function localSaveTodos() {
  localStorage.setItem(TODOS, JSON.stringify(todos));
}

function localRemoveTodos(id) {
  todos = todos.filter((item) => item.id !== id);
  localStorage.setItem(TODOS, JSON.stringify(todos));
}

function handleRemove(event) {
  const li = event.path[1];
  todoList.removeChild(li);
  localRemoveTodos(li.id);
}

function paintTodos(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const removeBtn = document.createElement("button");
  const newId = `todos${todos.length + 1}`;

  removeBtn.innerText = "❌";
  removeBtn.addEventListener("click", handleRemove);

  span.innerText = text;
  li.id = newId;

  li.appendChild(span);
  li.appendChild(removeBtn);

  const todoObj = {
    content: text,
    id: newId,
  };

  todoList.appendChild(li);
  todos.push(todoObj);
  localSaveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const todo = inputTodo.value;
  inputTodo.value = "";
  paintTodos(todo);
}

function init() {
  loadedTodo();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
