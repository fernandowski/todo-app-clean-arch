import {Router} from "express";
import RouteHandler from "./route-handler";
import {UserRegistrationController} from "../../infrastructure/web/controllers/user/UserRegistrationController";
import {registerUserUseCase, signOnUserUseCase} from "../factories/compose";
import {UserSignOnController} from "../../infrastructure/web/controllers/user/UserSignOnController";

export default (router: Router) => {
    router.post('/users/register', RouteHandler(new UserRegistrationController(registerUserUseCase)));
    router.post('/users/signon', RouteHandler(new UserSignOnController(signOnUserUseCase)));
}
