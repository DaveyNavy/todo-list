export class CheckListItem {
    description;
    completed;

    constructor(description, completed=false) {
        this.description = description;
        this.completed = completed;
    }

    getDescription() {
        return this.description;
    }

    isCompleted() {
        return this.completed;
    }

    setCompleted(val) {
        this.completed = val;
    }
}