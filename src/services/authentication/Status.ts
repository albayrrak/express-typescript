import { StatusRequestModel, StatusResponseModel } from "../../models/authentication/StatusResponseModel";
import { StatusRepository } from "../../repositories/status";
import { BaseService } from "../BaseService";

export class StatusService extends BaseService<StatusRequestModel> {
  constructor(repository: StatusRepository) {
    super(repository);
  }

  async register(user: StatusRequestModel): Promise<StatusResponseModel> {
    const createStatus = await this.create(user);
    if (createStatus) {
      return createStatus;
    }

    throw new Error("User not created");
  }
}
