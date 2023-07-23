import { Request, Response, NextFunction } from "express";
import { AsyncRequestHandler } from "./interfaces";

const catchAsyncErr: (fn: AsyncRequestHandler) => AsyncRequestHandler =
  (fn) => (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch((err: Error) => next(err));

export default catchAsyncErr;
