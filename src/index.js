const form = document.getElementById('create-task-form');
const field = document.getElementById('new-task-description');
const tasks = document.getElementById('tasks');

function getNewTask() {
  const taskDesc = field.value;
  console.log("Task listed as: ", taskDesc);
  return taskDesc;
}

function addTask(taskDesc) {
  newTask = document.createElement('li');
  newTask.innerText = taskDesc;
  tasks.appendChild(newTask);
}

function submitTask(e) {
  e.preventDefault();
  const taskDesc = getNewTask();
  addTask(taskDesc);
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', submitTask);
});
