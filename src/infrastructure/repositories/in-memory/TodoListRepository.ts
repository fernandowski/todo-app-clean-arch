import {v4 as uuidV4} from 'uuid';
import {AuthenticatedUser} from "../../../domain/entities/RegistrationUser";
import {ITodoListRepository} from "../../../application/interfaces/repository/ITodoListRepository";
import {TodoList} from "../../../domain/entities/TodoList";

class TodoListRepository implements ITodoListRepository {
    private todoList: TodoList [] = [];

    public async save(user: AuthenticatedUser, todoList: TodoList): Promise<void> {
        this.todoList.push({userId: user.id, name: todoList.name, id: uuidV4()});
    }

    public async listUserTodosList(user: AuthenticatedUser) : Promise<TodoList[]> {
        return this.todoList.filter((todoList: TodoList) => todoList.userId === user.id);
    }
}

export const todoListRepository = new TodoListRepository();
