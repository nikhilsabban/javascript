"use strict";
let tasks = [];
let Choice;
do {
    Choice = prompt("TO-DO_List\n" +
        "1.Add Task\n" +
        "2.Show Task\n" +
        "3.Complete Task\n" +
        "4.Delete Task\n" +
        "5.Exit\n" +
        "Enter your Choice");
    switch (Choice) {
        case "1":
            let taskName = prompt("Enter Task..");
            tasks.push({
                task: taskName,
                completed: false
            });
            alert("Task is added ");
            break;
        case "2":
            let result = "Task List \n\n";
            for (let i = 0; i < tasks.length; i++) {
                result += (i + 1) + "." + tasks[i].task + "-" +
                    (tasks[i].completed ? "Completed" : "Pending..") + "\n";
            }
            alert(result);
            break;
        case "3":
            let completedTask = prompt("Enter task name to complete:");
            for (let task of tasks) {
                if (task.task === completedTask) {
                    task.completed = true;
                    alert("Task is completed");
                }
            }
            break;
        case "4":
            let deletedTask = prompt("Enter task Name to delete:");
            tasks = tasks.filter(task => task.task != deletedTask);
            alert("Task is deleted");
            break;
        case "5":
            alert("Program ended");
            break;
        default:
            alert("Invalid Choice");
    }
} while (Choice != "5");
