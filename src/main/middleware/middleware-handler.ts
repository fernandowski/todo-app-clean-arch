import { NextFunction, Request, Response } from 'express';
import {HttpRequest} from "../../infrastructure/web/interfaces/HttpRequest";
import {BaseController} from "../../infrastructure/web/controllers/BaseController";

export const middlewareHandler = (
    middleware: BaseController,
) => async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
        body: req.body,
        params: req.params,
        headers: req.headers,
    };
    const httpResponse = await middleware.execute(httpRequest);
    if (httpResponse.statusCode === 200) {
        Object.assign(req, httpResponse.body);
        next();
    } else {
        res.status(httpResponse.statusCode).json({
            error: httpResponse.body?.message,
        });
    }
};
