import { BaseRepository } from "../base/BaseRepository";
import { UserRequest } from "../../models/user/UserRequest";

export class UserRepository extends BaseRepository<UserRequest> {
  async createUser(user: UserRequest): Promise<boolean> {
    const test = await this.create(user);

    return test;
  }

  async updateUser(id: number, user: UserRequest): Promise<boolean> {
    const test = await this.update(id, user);

    return test;
  }
}
