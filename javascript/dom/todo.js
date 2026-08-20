document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-todo");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", addTodo);
  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTodo();
  });

  function addTodo() {
    if (todoInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = todoInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = "";
  }
});
