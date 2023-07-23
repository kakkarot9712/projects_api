import { ExpressErrorHandlerFn } from "./interfaces";

export const errorHandler: ExpressErrorHandlerFn = (err, _, res, __) => {
  if (err.name === "CastError") {
    return res.status(400).json({
      status: "failed",
      message: "provided id is invalid!",
    });
  }
  if (err.name === "ValidationError") {
    return res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
  if (err.name === "TokenExpiredError") {
    return res.status(401).json({
      status: "failed",
      message: "jwt token is expired! Login again to get new token",
    });
  }
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      status: "failed",
      message: "jwt token is corrupted! re-login and get new token",
    });
  }
  const status = err.status ? err.status : 500;
  res.status(status).json({
    status: "failed",
    message: err.message,
  });
};
