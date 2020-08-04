import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Task} from "./Task";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @OneToMany(
        (type) => Task,
        (task) => task.category
    )
    tasks: Task[] = [];

    public addTask(task: Task): void {
        this.tasks.push(task);
    }

    public getTasks(): Task[] {
        return this.tasks;
    }
}