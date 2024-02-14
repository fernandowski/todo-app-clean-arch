import {Router, Express} from "express";
import userRoutes from '../routes/user-router';
import todoListRoutes from '../routes/todo-list-router';

export default (app : Express) : void  => {
    const router = Router();
    app.use('/v1/api', router);
    userRoutes(router);
    todoListRoutes(router);
}
