import { Get, Post, Route, Body, Tags } from "tsoa";
import { AppDataSource } from "../config/database";
import { BaseResponse, StatusCode } from "../models/BaseResponse";
import { UserRequest } from "../models/user/UserRequest";
import { UserRepository } from "../repositories/user/User";
import { User } from "../entities/User";
import { UserService } from "../servis/user/UserService";

@Route("ping")
@Tags("Ping")
export default class PingController {
  @Post("create")
  public async createUser(@Body() body: UserRequest): Promise<BaseResponse<boolean>> {
    const useRepository = new UserService(new UserRepository(AppDataSource.manager, User));
    const createUser = await useRepository.createUser(body);
    console.log(createUser);

    const response = new BaseResponse<boolean>(true, true, StatusCode.Success, "User created successfully");
    return response;
  }

  @Post("update")
  public async updateUser(@Body() body: UserRequest): Promise<BaseResponse<boolean>> {
    const useRepository = new UserRepository(AppDataSource.manager, User);
    const createUser = await useRepository.updateUser(body.id ?? 0, body);
    console.log(createUser);

    const response = new BaseResponse<boolean>(true, true, StatusCode.Success, "User updated successfully");
    return response;
  }
}
