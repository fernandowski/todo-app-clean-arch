import {badRequest, ok} from "../../helpers/https";
import {HttpRequest} from "../../interfaces/HttpRequest";
import {BaseController} from "../BaseController";
import {HttpResponse} from "../../interfaces/HttpResponse";
import {AddTodoList} from "../../../../application/use-cases/AddTodoList";
import {AuthenticatedUser} from "../../../../domain/entities/RegistrationUser";
import {TodoList} from "../../../../domain/entities/TodoList";

export class AddTodoListController extends BaseController {
    constructor(private useCase: AddTodoList) {
        super()
    }

    async execute(request: HttpRequest<{name: string}, undefined, undefined>): Promise<HttpResponse> {
        try {
            const authenticatedUser : AuthenticatedUser = {id: request.user.id, email: request.user.email};
            const todoList : TodoList = {name: request.body.name};
            await this.useCase.execute(authenticatedUser, todoList);
            return ok({status: 'ok'})
        } catch (e: any) {
            return badRequest(e);
        }
    }
}
