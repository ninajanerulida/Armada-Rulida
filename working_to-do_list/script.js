const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskText} <button class="delete-btn">Remove</button>`;

    // Delete task on button click
    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        taskItem.remove();
    });

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
