import Task from './Task.ts'
import User from './User.ts'

class TaskManager {
    private tasks: Task[];
    private users: User[];

    constructor(tasks: Task[], users: User[]) {
        this.tasks = [...tasks];
        this.users = [...users]; 
    }

    addTask(task: Task) :void {
        this.tasks = [...this.tasks, task];
    }

    removeTask(taskToRemove: Task) {
        for (let task of this.tasks) {
            if (task.isEqual(taskToRemove)) {
                let idxToRemove = this.tasks.indexOf(task);
                this.tasks.splice(idxToRemove, 1);
            }
        }
        return [...this.tasks];
    }

    assignTaskToUser(task: Task, user: User) :void {
        user.assignTask(task);
    }

    viewAllTasks() :Task[] {
        return [...this.tasks];
    }

    viewTasksPerUser (user: User) {
        return user.viewTasks();
    }
}