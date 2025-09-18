const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const todosList = document.getElementById("todos-list");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
const emptyState = document.querySelector(".empty-state");
const dateElement = document.getElementById("date");
const filters = document.querySelectorAll(".filter");

let todos = []
let currentFilter = 'all';

addTaskBtn.addEventListener("click", () =>{
 addTodo (taskInput.value);   
});
taskInput.addEventListener("keydown", (e) =>{
    if (e.key === "Enter") addTodo (taskInput.value);
        
});
clearCompletedBtn.addEventListener("click",clearCompleted)

// function clearCompleted()