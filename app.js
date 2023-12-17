document.addEventListener('DOMContentLoaded', () => {
    // Function to get the day of the week
    const getDayOfWeek = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        return daysOfWeek[today.getDay()];
    };

    // Function to fetch and display the daily task
    const displayDailyTask = async () => {
        const dayOfWeek = getDayOfWeek();
        const response = await fetch(`https://your-backend-api/tasks/${dayOfWeek}`);
        const data = await response.json();

        const taskDescriptionElement = document.getElementById('task-description');
        taskDescriptionElement.textContent = data.task;
    };

    // Function to fetch and display task history
    const displayTaskHistory = async () => {
        const response = await fetch('https://your-backend-api/tasks');
        const data = await response.json();

        const taskListElement = document.getElementById('task-list');
        data.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = `${task.day}: ${task.task}`;
            taskListElement.appendChild(listItem);
        });
    };

    // Call functions to display daily task and task history
    displayDailyTask();
    displayTaskHistory();
});
