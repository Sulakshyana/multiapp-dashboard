const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

// if (!todoInput || !addTaskButton || !todoList) return;

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((task) => addTaskToDom(task));
let currentTaskId = null;
let deletedTaskId = null;
addTaskButton.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  if (currentTaskId !== null) {
    tasks = tasks.map((task) => {
      if (`${task.id}` === currentTaskId) {
        // console.warn({ ...task, text: todoText });
        return { ...task, text: todoText };
      } else {
        return task;
      }
    });
    const li = todoList.querySelector(`li[id="${currentTaskId}"]`);
    // console.log({ tasks });
    if (li) li.querySelector("span").textContent = todoText;
    saveTodoData();

    addTaskButton.textContent = "Add todo";
    todoInput.value = "";
    currentTaskId = null;
  } else {
    const newTask = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    tasks.push(newTask);
    addTaskToDom(newTask);
    saveTodoData();
    todoInput.value = "";
  }
});

function addTaskToDom(task) {
  const li = document.createElement("li");
  li.id = task.id;
  //   li.className = todo.completed ? "completed" : "";

  const spanElement = document.createElement("span");
  spanElement.textContent = task.text;
  spanElement.classList.add("todo-list-text");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-todo-btn");

  const editTodoButton = document.createElement("button");
  editTodoButton.textContent = "Edit Task";
  editTodoButton.classList.add("edit-todo-btn");

  li.appendChild(spanElement);
  li.appendChild(deleteBtn);
  li.appendChild(editTodoButton);

  todoList.appendChild(li);
}

todoList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (event.target.classList.contains("delete-todo-btn")) {
    tasks = tasks.filter((task) => {
      console.log({ task, currentTaskId });
      return `${task.id}` !== li.id;
    });
    li.remove();
    if (currentTaskId === li.id) {
      addTaskButton.textContent = "Add Todo";
      currentTaskId = null;
    }
    saveTodoData();
  }
  if (event.target.classList.contains("edit-todo-btn")) {
    const span = li.querySelector("span");
    todoInput.value = span.textContent;
    currentTaskId = li.id;
    addTaskButton.textContent = "Edit Task";
  }
});

function saveTodoData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
