// The required elements are obtained here

const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const Listoftasks = document.getElementById("Listsoftasks");
const NewlyAddedBtn = document.getElementById("NewlyAddedBtn");
const CompletedTasksBtn = document.getElementById("CompletedTasksBtn");
const DeletedTasksBtn = document.getElementById("DeletedTasksBtn");

// Arrays of the tasks
let tasks = [];

// Functions for displaying tasks
function DisplayTasks(tasks) {
    Listsoftasks.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskValue = document.createElement("li");
        taskValue.innerHTML = `
            <span>${task.task_text}</span>
            <span class="expire_date">${task.expire_date}</span>
            <button data-index="${index}" class="completed-btn">Completed</button>
            <button data-index="${index}" class="deleted-btn">Deleted</button>

        `;
        if (task.completed) {
            taskValue.classList.add(completed);
        }
        Listoftasks.appendChild(taskValue);
    });
}

// Function for adding new tasks
function AddTask() {
    const taskWord = taskInput.ariaValueMax.trim();
    const dueDate = dueDateInput.value;
    if (taskWord === "" || dueDate === "") {
        alert("Please enter both a task and a due date.");
        return;
    }

    const NewTask = {
        task_text: taskWord,
        due_date: dueDate,
        completed: false
    };

    tasks.push(NewTask);
    DisplayTasks(tasks);
    saveTasksToLocalStorage();
    taskInput.value = "";
    dueDateInput.value = "";

}

// Function to mark completed tasks
function CompletedTask() {
    const index = this.getAttribute("data-index");
    tasks[index].completed = !task[index].completed;
    DisplayTasks(tasks);
    saveTasksToLocalStorage();
}

// Function to delete task
function DeletedTask() {
    const index = this.getAttribute("data-index");
    tasks.splice(index, 1);
    DisplayTasks(tasks);
    saveTasksToLocalStorage();
}

// Function to filter the tasks as completed
function filterTasksAsCompleted(complete) {
    const filterTasks = tasks.filter(task => task.completed === complete);
    DisplayTasks(filterTasks);
}

// Function for saving tasks in local storage
function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function for loading tasks to local storage
function TakeTasksFromLocalStorage() {
    const ReservedTasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = ReservedTasks || [];
    DisplayTasks(tasks);
}

// Adding Event Listeners
document.getElementById("AddTask").addEventListener("click", AddTask);
document.getElementById("Listsoftasks").addEventListener("click", function(event) {
    if (event.target.classList.contains("complete-btn")) {
        CompletedTask.call(event.target);
    } else if (event.target.classList.contains("delete-btn")) {
        DeletedTask.call(event.target);
    }
});

NewlyAddedBtn.addEventListener("click", () => DisplayTasks(tasks));
CompletedTaskBtn.addEventListener("click", () => filterTasksAsCompleted(true));
DeletedTasksBtn.addEventListener("click", () => filterTasksAsCompleted(false));

//Loading tasks
TakeTasksFromLocalStorage();