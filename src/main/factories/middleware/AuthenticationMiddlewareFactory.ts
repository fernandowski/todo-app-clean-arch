
import {IJWT} from "../../../application/interfaces/adapters/IJWT";
import {BaseController} from "../../../infrastructure/web/controllers/BaseController";
import {AuthenticationMiddleware} from "../../../infrastructure/web/middleware/AuthenticationMiddleware";

export class AuthenticationMiddlewareFactory {
    public static compose(jwt : IJWT) : BaseController {
        return new  AuthenticationMiddleware(jwt);
    }
}
