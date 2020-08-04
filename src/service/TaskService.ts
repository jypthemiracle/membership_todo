import { Request, Response } from "express";
import {Task} from "../entity/Task";
import {getRepository} from "typeorm";

export class TaskService {

    public getTasks = async(): Promise<Array<Task>> => {
        return await getRepository(Task).find();
    }

    public writeTask = async(task: Task): Promise<void> => {
        const list: Task[] = await getRepository(Task).find();
        list.push(task);
        await getRepository(Task).save(list);
    }

    public deleteTask = async(id: number): Promise<void> => {
        const task: Task = await getRepository(Task).findOne(id);
        await getRepository(Task).delete(task);
    }
}