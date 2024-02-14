import {badRequest, ok} from "../../helpers/https";
import {RegisterUser} from "../../../../application/use-cases/RegisterUser";
import {RegistrationUser} from "../../../../domain/entities/RegistrationUser";
import {HttpRequest} from "../../interfaces/HttpRequest";
import {BaseController} from "../BaseController";
import {HttpResponse} from "../../interfaces/HttpResponse";

export class UserRegistrationController extends BaseController{
    constructor(private usecase: RegisterUser) {
        super()
    }

    async execute(request: HttpRequest<{email: string, password: string}, undefined, undefined>): Promise<HttpResponse> {
        try {
            const user : RegistrationUser = {email: request.body.email, password: request.body.password}
            await this.usecase.execute(user);
            return ok({status: 'ok'})
        } catch (e: any) {
            return badRequest(e);
        }
    }
}
