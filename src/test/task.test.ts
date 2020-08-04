import {Category} from "../entity/Category";
import {Task} from "../entity/Task";
import {TaskController} from "../controller/TaskController"
import {request, response} from "express";
import {TaskService} from "../service/TaskService";

const taskService = new TaskService();


describe('태스크 하나가 추가된다', () => {
    test('task one added to category', () => {
        const category: Category = new Category();
        const task: Task = new Task();
        category.addTask(task);
        expect(category.getTasks()[0]).not.toBeNull();
    })
})

describe('컨트롤러에서 태스크 하나가 추가되고, 이를 가져올 수 있다.', () => {
    test('task one added to category via TaskController.ts', async () => {
        const task: Task = new Task();
        await taskService.writeTask(task);
        const tasks: Array<Task> = await taskService.getTasks();
        expect(tasks[0]).not.toBeNull();
    })
})

describe('컨트롤러에서 태스크 하나가 삭제된다.', () => {
    test('task one deleted to category via TaskController.ts', async () => {
        const task: Task = new Task();
        await taskService.writeTask(task);
        const tasks: Array<Task> = await taskService.getTasks();
        expect(tasks[0]).not.toBeNull();

        await taskService.deleteTask(task.id);
        const tasksAfterDelete: Array<Task> = await taskService.getTasks();
        expect(tasks[0]).toBeNull();
    })
})