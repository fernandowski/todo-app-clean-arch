import {registrationUserRepository} from "../../infrastructure/repositories/in-memory/RegistrationUserRepository";
import {PasswordHasher} from "../../infrastructure/adapters/PasswordHasher";
import {UserFactory} from "./Usecase/UserFactory";
import {Auth} from "../../infrastructure/adapters/Auth";
import {AuthenticationMiddlewareFactory} from "./middleware/AuthenticationMiddlewareFactory";
import {AddTodoListFactory} from "./Usecase/AddTodoListFactory";
import {todoListRepository} from "../../infrastructure/repositories/in-memory/TodoListRepository";
import {ListTodoListFactory} from "./Usecase/ListTodoListFactory";

const passwordHasher = new PasswordHasher();
const auth = new Auth();

export const registerUserUseCase = UserFactory.composeRegisterUserUseCase(registrationUserRepository, passwordHasher);
export const signOnUserUseCase = UserFactory.composeSignOnUserUseCase(registrationUserRepository, passwordHasher, auth);

export const authenticationMiddleware = AuthenticationMiddlewareFactory.compose(auth);

export const addTodoListUseCase = AddTodoListFactory.compose(todoListRepository);
export const listUserTodoList = ListTodoListFactory.compose(todoListRepository);
