export class CheckListItem {
    description;
    completed;

    constructor(description) {
        this.description = description;
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