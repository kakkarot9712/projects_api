import { Request, Response, NextFunction } from "express";
import CustomError from "./customError";

export type ExpressErrorHandlerFn = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export interface AsyncRequestHandler {
  (req: Request, res: Response, next: NextFunction): Promise<any>;
}

export enum HttpCodes {
  SUCCESS = 200,
  CREATED = 201,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
}
