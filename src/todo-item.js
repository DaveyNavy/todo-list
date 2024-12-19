export class ToDoItem {
    title;
    description;
    dueDate;
    priority;
    checklist;

    constructor(title, description, dueDate, priority, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
    }

    getTitle() {
        return this.title;
    }
    
    setTitle(title) {
        this.title = title;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getDueDate() {
        return this.dueDate;
    }
    
    setDueDate(dueDate) {
        this.dueDate = dueDate;
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
}