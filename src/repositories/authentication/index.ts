import { User } from "../../entities/User";
import { RegisterRequestModel, RegisterResponseModel } from "../../models/authentication/RegisterRequestMode";
import { BaseRepository } from "../base/BaseRepository";

export class AuthenticationRepository extends BaseRepository<User> {
  public async register(data: RegisterRequestModel): Promise<RegisterResponseModel | null> {
    const newUser = await this.create(data);

    if (newUser) {
      return newUser;
    }

    return null;
  }
}
