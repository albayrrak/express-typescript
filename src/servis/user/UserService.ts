import { User } from "../../entities/User";
import { UserRequest } from "../../models/user/UserRequest";
import { UserRepository } from "../../repositories/user/User";
import { BaseService } from "../BaseService";

export class UserService extends BaseService<UserRequest> {
  constructor(repository: UserRepository) {
    super(repository);
  }

  async createUser(user: UserRequest): Promise<boolean> {
    const test = await this.create(user);
    return test;
  }
}
