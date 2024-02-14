import {badRequest, ok} from "../../helpers/https";
import {UserSignOn} from "../../../../application/use-cases/UserSignOn";
import {HttpRequest} from "../../interfaces/HttpRequest";
import {BaseController} from "../BaseController";

export class UserSignOnController extends BaseController {
    constructor(private usecase: UserSignOn) {
        super();
    }

    async execute(request: HttpRequest<{email: string, password: string}, undefined, undefined>) {
        try {
            const result = await this.usecase.execute({email: request.body.email, password: request.body.password});
            return ok({token: result})
        } catch (e: any) {
            return badRequest(e);
        }
    }
}
