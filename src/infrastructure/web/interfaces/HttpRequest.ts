import {AuthenticatedUser} from "../../../domain/entities/RegistrationUser";

export type HttpRequest<TBody = any, TParams = any, THeaders = any> = {
  body?: TBody;
  params?: TParams;
  headers?: THeaders;
  user?: AuthenticatedUser
};
