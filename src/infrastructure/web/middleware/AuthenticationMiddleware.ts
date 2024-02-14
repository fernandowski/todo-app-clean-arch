import {HttpRequest} from "../interfaces/HttpRequest";
import {HttpResponse} from "../interfaces/HttpResponse";
import {badRequest, ok} from "../helpers/https";
import {IJWT} from "../../../application/interfaces/adapters/IJWT";
import {BaseController} from "../controllers/BaseController";

export class AuthenticationMiddleware extends BaseController {
     constructor( private crypto: IJWT) {
         super()
     }

     async execute(httpRequest : HttpRequest) : Promise<HttpResponse> {
         const authorizationHeader : string = httpRequest.headers?.authorization;
         const [,jwt]  = authorizationHeader.split(' ');
         const decoded = await this.crypto.verify(jwt);

         if (decoded === null) {
             return badRequest(new Error('Unauthorized'));
         }
         return ok({user: decoded});
     }
}
