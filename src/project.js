import { ToDoItem } from "./todo-item";

export class Project {
    name;
    taskList;


    constructor(name) {
        this.name = name;
        this.taskList = new Array();
    }

    addTask(task) {
        this.taskList.push(task);
    }

    removeTask(task) {
        this.taskList = this.taskList.filter((item) => {
            item != task;
        })
    }

    getTasks() {
        return this.taskList;
    }

    getTaskNames() {
        return this.taskList.map(item => item.getTitle());
    }

    getTasksOnDate(date) {
        return this.taskList.filter(item => {
            return item.getDate().getMonth() == date.getMonth() && item.getDate().getDate() == date.getDate();
        })
    }
}