import {AuthenticatedUser} from "../../../domain/entities/RegistrationUser";
import {TodoList} from "../../../domain/entities/TodoList";

export interface ITodoListRepository {
    save(user: AuthenticatedUser, todoList: TodoList) : Promise<void>
    listUserTodosList(user: AuthenticatedUser) : Promise<TodoList[]>
}
