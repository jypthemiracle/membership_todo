import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Category} from "./Category";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    isDeleted: boolean;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @ManyToOne(
        (type) => User,
        (user) => user.tasks
    )
    user: User;

    @ManyToOne(
        (type) => Category,
        (category) => category.tasks
    )
    category: Category;
}