export class Project {
    name;
    taskList;
    projectIndex;
    static index = 0;


    constructor(name) {
        this.name = name;
        this.taskList = new Array();
        this.projectIndex = Project.index;
        Project.index++;
    }

    getName() {
        return this.name;
    }
    
    addTask(task) {
        this.taskList.push(task);
    }

    removeTask(task) {
        this.taskList.splice(this.taskList.findIndex(e => e.getIndex() == task.getIndex()), 1);
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

    getIndex() {
        return this.projectIndex;
    }
}