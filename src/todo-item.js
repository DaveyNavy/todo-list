export class ToDoItem {
    title;
    projectName;
    description;
    date;
    priority;
    checklist;
    completed;

    constructor(title, projectName, description, date, priority, checklist, completed=false) {
        this.title = title;
        this.projectName = projectName;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.checklist = checklist;
        this.completed = completed;
    }

    getTitle() {
        return this.title;
    }
    
    setTitle(title) {
        this.title = title;
    }

    getProjectName() {
        return this.projectName;
    }
    
    setProjectName(projectName) {
        this.projectName = projectName;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getDate() {
        return this.date;
    }
    
    setDate(date) {
        this.date = date;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getChecklist() {
        return this.checklist;
    }

    setChecklist(checklist) {
        this.checklist = checklist;
    }

    isCompleted() {
        return this.completed;
    }

    setCompleted(val) {
        this.completed = val;
    }
}