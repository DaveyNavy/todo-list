import { ToDoItem } from "./todo-item";

export class Project {
    taskList;

    constructor() {
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
}