// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task input value and trim any excess spaces
        const taskText = taskInput.value.trim();

        // If the input is not empty, proceed with adding the task
        if (taskText !== "") {
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
            });

            // Append the remove button to the list item
            li.appendChild(removeButton);

            // Append the list item to the task list
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = '';
        } else {
            // Alert if the input is empty
            alert('Please enter a task!');
        }
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener for the "Enter" key press to add a task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
