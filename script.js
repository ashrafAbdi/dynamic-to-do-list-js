// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-button'); // "Add Task" button
    const taskInput = document.getElementById('task-input'); // Input field for tasks
    const taskList = document.getElementById('task-list'); // Unordered list for tasks
  
    // Step 3: Create the addTask Function
    function addTask() {
      // Retrieve and trim the value from the task input field
      const taskText = taskInput.value.trim();
  
      // Check if the input is empty
      if (taskText === "") {
        alert("Please enter a task!"); // Prompt the user to enter a task
        return; // Exit the function if the input is empty
      }
  
      // Step 4: Task Creation and Removal
      // Create a new <li> element
      const li = document.createElement('li');
      li.textContent = taskText; // Set the text content to the task input
  
      // Create a "Remove" button
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove"; // Set button text
      removeButton.className = "remove-btn"; // Add a class for styling
  
      // Add an onclick event to the remove button
      removeButton.onclick = function () {
        taskList.removeChild(li); // Remove the <li> when the button is clicked
      };
  
      // Append the remove button to the <li>
      li.appendChild(removeButton);
  
      // Append the <li> to the task list
      taskList.appendChild(li);
  
      // Clear the task input field
      taskInput.value = "";
    }
  
    // Step 5: Attach Event Listeners
    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);
  
    // Add task when the "Enter" key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask(); // Call the addTask function
      }
    });
  });