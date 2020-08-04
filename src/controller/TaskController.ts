import { Request, Response } from "express";
import {Task} from "../entity/Task";
import {getRepository} from "typeorm";
import {TaskService} from "../service/TaskService";

const taskService = new TaskService();

export class TaskController {

    public getTasks = async (req: Request, res: Response) => {
        try {
            const list = await taskService.getTasks();
            res.json(list);
        } catch (e) {
            res.send(404).json({
                message: e.message
            });
            throw new Error(e);
        }
    }

    // insert service
    public writeTask = async(task: Task, req: Request, res: Response) => {
        try {
            await taskService.writeTask(task);
        } catch(e) {
            res.send(500).json({
                message: e.message
            });
            throw new Error(e);
        }
    }

    // delete service
    public deleteTask = async(id: number, req: Request, res: Response) => {
        try {
            await taskService.deleteTask(id);
        } catch(e) {
            res.send(500).json({
                message: e.message
            });
            throw new Error(e);
        }
    }
}