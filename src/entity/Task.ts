import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    isDeleted: boolean;

    @ManyToOne(
        (type) => User,
        (user) => user.tasks
    )
    user: User;
}