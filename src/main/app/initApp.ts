import express, { Express } from 'express';
import initMiddleware from "./initMiddleware";
import initRoutes from "./initRoutes";


export default  () : Express => {
    const app = express();
    initMiddleware(app);
    initRoutes(app);
    return app;
}
