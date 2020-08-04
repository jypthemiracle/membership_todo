import {Category} from "../entity/Category";
import {Task} from "../entity/Task";

describe('태스크 하나가 추가된다', () => {
    test('task one added to category', () => {
        const category: Category = new Category();
        const task: Task = new Task();
        category.addTask(task);
        expect(category.getTasks()[0]).not.toBeNull();
    })
})