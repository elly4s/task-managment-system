enum TaskStatus {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETE = "COMPLETE"
}

class Task {
    private id: number
    private title: string
    private description?: string
    private dueDate?: Date
    private status: TaskStatus

    constructor(id: number, title: string, status: TaskStatus, description?: string, dueDate?: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }

    updateStatus(status: TaskStatus): void {
        this.status = status;
    }

    setDueDate(dueDate: Date): void {
        this.dueDate = dueDate;
    }

    displayTaskDetails(): void {
        console.log("Id of task: ", this.id);
        console.log("Title of task: ", this.title);
        if (this.description) console.log("Description of task: ", this.description);
        if (this.dueDate) console.log("Due Date of task: ", this.dueDate);
        console.log("Status of task: ", this.status);
    }

    getId() {
        return this.id;
    }

    isEqual(task: Task) {
        return this.id === task.getId()
    }

    //TODO - getters
    
}

export default Task;