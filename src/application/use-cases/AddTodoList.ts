import {AuthenticatedUser} from "../../domain/entities/RegistrationUser";
import {TodoList} from "../../domain/entities/TodoList";
import {ITodoListRepository} from "../interfaces/repository/ITodoListRepository";


export class AddTodoList {
    constructor(private todoListRepository: ITodoListRepository) {
    }

    async execute(user: AuthenticatedUser, todoList: TodoList): Promise<void> {

        if (todoList.name === '') throw new Error('A List Cannot have an empty name');

        await this.todoListRepository.save(user, todoList);
    }
}
