// Pegar as instâncias do elementos HTML
let ip_task = document.getElementById("ip_task");
let tasks_list = document.getElementById("tasks_list");
let tasks = Array();

function addTask() {
  let task_text = ip_task.value;
  if (task_text != "" && !tasks.includes(task_text)) {
    saveTask(task_text);
    addTaskInScreen(task_text);
  }
}

function saveTask(task) {
  tasks.push(task);
  localStorage.setItem("my_tasks", JSON.stringify(tasks));
}

function addTaskInScreen(task) {
  // Criação dos elementos HTML no DOM Virtual
  let divElement = document.createElement("div");
  let labelElement = document.createElement("label");
  let inputElement = document.createElement("input");

  // Configuração dos objetos HTML no DOM Virtual
  labelElement.textContent = task;
  labelElement.classList.add("form-check-label");
  inputElement.type = "checkbox";
  inputElement.classList.add("form-check-input", "mx-2");

  // Inserir os elementos HTML  no DOM Físico
  divElement.appendChild(inputElement);
  divElement.appendChild(labelElement);
  tasks_list.appendChild(divElement);

  // Prepara a ação de conclusão da tarefa
  inputElement.addEventListener("change", () => {
    let isCheck = inputElement.checked;
    let label = inputElement.parentElement.lastChild;
    if (isCheck) label.style = "text-decoration: line-through";
    else label.style = "text-decoration: none";
  });
}

window.onload = () => {
  let storage = localStorage.getItem("my_tasks");
  if (storage != null) {
    tasks = JSON.parse(storage);
    tasks.sort((a, b) => b.localeCompare(a));
    for (const task of tasks) {
      addTaskInScreen(task);
    }
  }
};
