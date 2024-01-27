import { RegisterRequestModel, RegisterResponseModel } from "../../models/authentication/RegisterRequestMode";
import { AuthenticationRepository } from "../../repositories/authentication";
import { BaseService } from "../BaseService";

export class AuthenticationService extends BaseService<RegisterRequestModel> {
  constructor(repository: AuthenticationRepository) {
    super(repository);
  }

  async register(user: RegisterRequestModel): Promise<RegisterResponseModel> {
    const newUser = await this.create(user);
    if (newUser) {
      return newUser;
    }

    throw new Error("User not created");
  }
}
