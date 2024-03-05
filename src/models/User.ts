import Task from './Task.ts'


class User {
    private id: number;
    private email: string;
    private name: string;
    private tasks: Task[];

    constructor(id: number, email: string, name: string, tasks: Task[]) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.tasks = [...tasks];
    }

    assignTask(taskToAssign: Task): void {
        let isExist = false;
        for (let task of this.tasks) {
            if (task.isEqual(taskToAssign)) {
                isExist = true;
            }
        }
        if (!isExist) {
            this.tasks = [...this.tasks, taskToAssign];
        }
    }

    viewTasks(): Task[] {
        return [...this.tasks];
    }

    //TODO - getters
}

export default User;