import { Request, Response } from "express";
import {Task} from "../entity/Task";
import {createConnection, getRepository} from "typeorm";

export class TaskService {

    public getTasks = async(): Promise<Array<Task>> => {
        let tasks: Array<Task>;
        return createConnection().then(async() => {
            tasks = await getRepository(Task).find();
            return tasks;
        })
    }

    public writeTask = async(task: Task): Promise<void> => {
        let tasks: Task[];
        createConnection().then(async() => {
            tasks = await getRepository(Task).find();
            tasks.push(task);
            await getRepository(Task).save(tasks);
        })
    }

    public deleteTask = async(id: number): Promise<void> => {
        createConnection().then(async() => {
            const task: Task = await getRepository(Task).findOne(id);
            await getRepository(Task).delete(task);
        })
    }
}