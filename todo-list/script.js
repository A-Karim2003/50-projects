"use strict";

const todoInput = document.getElementById("todoInput");
const todoListContainer = document.querySelector(".todo-list");

todoInput.addEventListener("change", (e) => addTodo(e.target.value));

//? Load initial data from local storage
(function () {
  let storedTodos = JSON.parse(localStorage.getItem("todoItems")) || [];
  const todos = document.querySelectorAll(".todo");

  //? Clear existing todo before adding new ones
  if (todos.length !== 0) {
    todos.forEach((todo) => (todo.style.display = " none"));
  }

  //? add todos to the DOM
  storedTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo");
    console.log(todo);
    if (todo.marked) li.classList.add("marked");
    li.textContent = todo.text;
    todoListContainer.append(li);
  });
})();

//? For left clicks to mark todo
todoListContainer.addEventListener("click", (e) => {
  const todo = e.target.closest(".todo");
  if (!todo) return;
  todo.classList.toggle("marked");

  //? Update localStorage when marked state changes
  updateMarkedState(todo);
});

//? For right clicks to delete todo
todoListContainer.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const todo = e.target.closest(".todo");
  console.log(isMarked(todo));

  DeleteFromStorage(todo);
  todo.style.display = "none";
});

function addTodo(text) {
  if (!text) return;

  //? Create todo
  const li = document.createElement("li");
  li.classList.add("todo");
  li.textContent = text;
  todoListContainer.append(li);
  saveTodo(text);
  //? Empty input
  todoInput.value = "";
}

/*
Every time a new todo is added, it retrieves the current list
from localStorage, adds the new item, and then saves it back
*/
function saveTodo(todoText) {
  //* This ensures new todos don’t overwrite old ones, but instead get appended.
  //? // Retrieves stored todos
  let todos = JSON.parse(localStorage.getItem("todoItems")) || [];
  todos.push({ text: todoText, marked: false });

  //? Saves back to localStorage
  localStorage.setItem("todoItems", JSON.stringify(todos));
}

function DeleteFromStorage(todoEl) {
  //? find index of deleted node from nodeList
  const todos = document.querySelectorAll(".todo");
  const indexOfTodo = Array.from(todos).findIndex((todo) => todo === todoEl);

  //? delete the text that matches the indexOfTodo in the array
  let storedTodos = JSON.parse(localStorage.getItem("todoItems")) || [];
  storedTodos.splice(indexOfTodo, 1);
  console.log(storedTodos);

  localStorage.setItem("todoItems", JSON.stringify(storedTodos));
}

function isMarked(todo) {
  return todo.classList.contains("marked");
}

function updateMarkedState(todoEl) {
  //? find index of clicked node from nodeList
  const todos = document.querySelectorAll(".todo");
  const indexOfTodo = Array.from(todos).findIndex((todo) => todo === todoEl);

  //? Get the todoItems from localStorage for updating
  let storedTodos = JSON.parse(localStorage.getItem("todoItems")) || [];
  storedTodos[indexOfTodo].marked = isMarked(todoEl);

  //? Save changed state back to localStorage
  localStorage.setItem("todoItems", JSON.stringify(storedTodos));
}
