import { Body, Post, Route, Tags } from "tsoa";
import { AppliedForRole, CurrentStatus, RegisterRequestModel, RegisterResponseModel } from "../models/authentication/RegisterRequestMode";
import { BaseResponse, StatusCode } from "../models/BaseResponse";
import { AuthenticationService } from "../services/authentication/Authentication";
import { AuthenticationRepository } from "../repositories/authentication";
import { AppDataSource } from "../config/Database";
import { User } from "../entities/User";
import { StatusService } from "../services/authentication/Status";
import { StatusRepository } from "../repositories/status";
import { Status } from "../entities/Status";

import { validate } from "class-validator";

@Route("authentication")
@Tags("Authentication")
export default class AuthController {
  @Post("register")
  public async register(@Body() data: RegisterRequestModel): Promise<RegisterResponseModel | null> {
    const userService = new AuthenticationService(new AuthenticationRepository(AppDataSource.manager, User));
    const statusService = new StatusService(new StatusRepository(AppDataSource.manager, Status));
    // let userModel = new User();
    // userModel.email = data.email;

    // const errors = await validate(userModel);

    const status = await statusService.create({
      currentStatus: data.status?.currentStatus ?? CurrentStatus.Passive,
      appliedForCategory: data.status?.appliedForCategory ?? "",
      appliedForRole: data.status?.appliedForRole ?? AppliedForRole.Default,
    });

    const newUser = await userService.create({
      ...data,
      status: status,
    });

    try {
      return newUser;
    } catch (error) {
      throw new Error("test");
    }

    // const response = new BaseResponse<boolean>(true, true, StatusCode.Success, "User created successfully");
    // return response;
  }
}
