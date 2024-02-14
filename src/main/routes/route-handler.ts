import { Request, Response } from 'express';
import {HttpRequest} from "../../infrastructure/web/interfaces/HttpRequest";
import {BaseController} from "../../infrastructure/web/controllers/BaseController";
import {HttpResponse} from "../../infrastructure/web/interfaces/HttpResponse";

export default  (
    controller: BaseController,
) => async (req: Request, res: Response) => {

    const httpRequest: HttpRequest = {
        body: req.body,
        params: req.params,
        headers: req.headers,
        user: (req as any).user
    };
    const httpResponse : void | HttpResponse = await controller.execute(httpRequest);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
        res.status(httpResponse.statusCode).json({
            error: httpResponse.body?.message,
        });
    }
};
