import { validationResult, ValidationChain } from "express-validator";
import { Request, Response, NextFunction } from "express";

class BaseValidator<T> {
  private validators: ValidationChain[];

  constructor(validators: ValidationChain[]) {
    this.validators = validators;
  }

  validate(req: Request, res: Response, next: NextFunction): void {
    Promise.all(this.validators.map((validator) => validator.run(req)))
      .then(() => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
          next();
        } else {
          const errorMessages = errors.array().map((error) => error.msg);
          const errorMessage = errorMessages.join(", ");
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

export default BaseValidator;
