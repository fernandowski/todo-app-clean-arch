import {Router} from "express";
import RouteHandler from "./route-handler";
import {addTodoListUseCase, authenticationMiddleware, listUserTodoList} from "../factories/compose";
import {middlewareHandler} from "../middleware/middleware-handler";
import {AddTodoListController} from "../../infrastructure/web/controllers/todo-list/AddTodoListController";
import {ListTodoListController} from "../../infrastructure/web/controllers/todo-list/ListTodoListController";

export default (router: Router) => {
    router.post(
        '/todos',
        middlewareHandler(authenticationMiddleware),
        RouteHandler(new AddTodoListController(addTodoListUseCase))
    );

    router.get(
        '/todos',
        middlewareHandler(authenticationMiddleware),
        RouteHandler(new ListTodoListController(listUserTodoList))
    );
}
