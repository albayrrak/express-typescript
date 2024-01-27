import { ContextRunner, validationResult } from "express-validator";
import express from "express";
import { BaseResponse, StatusCode } from "../models/BaseResponse";

export const validate = (validations: ContextRunner[]) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    for (let validation of validations) {
      const result: any = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    console.log(errors);

    if (errors.isEmpty()) {
      return next();
    }
    const response = new BaseResponse(null, false, StatusCode.BadRequest, errors);

    res.status(400).json(response);
  };
};
