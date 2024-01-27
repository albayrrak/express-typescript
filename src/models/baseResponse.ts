export enum StatusCode {
  Success = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500,
}

export class BaseResponse<T> {
  data: T | T[] | null;
  success: boolean;
  statusCode: StatusCode;
  message: string;

  constructor(
    data: T | T[] | null,
    success: boolean,
    statusCode: StatusCode,
    message: any
  ) {
    this.data = data;
    this.success = success;
    this.statusCode = statusCode;
    this.message = message;
  }
}
