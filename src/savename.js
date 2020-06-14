const form = document.getElementById("jsNameForm");
const input = form.querySelector("input");
const greeting = document.querySelector(".greeting");
const formTodo = document.querySelector(".todo-form");
const todoUl = document.querySelector(".todo-list");

const currentUser = "currentUser";

function saveNameLocal() {
  const name = input.value;
  localStorage.setItem(currentUser, name);
}

function handleSubmit(event) {
  event.preventDefault();
  saveNameLocal();
  paintGreeting();
}

function paintGreeting() {
  const getName = localStorage.getItem(currentUser);
  if (getName !== null) {
    form.classList.add("hidden");
    formTodo.classList.remove("hidden");
    todoUl.classList.remove("hidden");
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello, ${getName}`;
  }
}

function init() {
  paintGreeting();
  form.addEventListener("submit", handleSubmit);
}

init();
