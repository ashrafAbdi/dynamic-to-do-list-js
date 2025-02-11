document.addEventListener('DOMContentLoaded', function() {
    // Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        // Get the tasks from Local Storage (if any)
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Populate the task list from stored tasks
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // False indicates we don’t need to save the task again
        });
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add an event listener to the remove button to remove the task
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);

            // Update tasks array and Local Storage when a task is removed
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText); // Remove the task from the array
            localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save the updated tasks to Local Storage
        });

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // If saving is enabled, update Local Storage with the new task
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated task list to Local Storage
        }
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        // Check if input is not empty, then add the task
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = ''; // Clear input field after adding task
        } else {
            alert('Please enter a task!');
        }
    });

    // Add event listener for the "Enter" key press to add a task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();

            // Check if input is not empty, then add the task
            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = ''; // Clear input field after adding task
            } else {
                alert('Please enter a task!');
            }
        }
    });

    // Load tasks from Local Storage when the page is loaded
    loadTasks();
});
