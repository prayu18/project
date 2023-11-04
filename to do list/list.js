// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.addEventListener("click", toggleTask);

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

// Function to toggle task completion
function toggleTask(event) {
    const taskItem = event.target;
    taskItem.classList.toggle("completed");
}

// Add event listeners
addButton.addEventListener("click", addTask);
