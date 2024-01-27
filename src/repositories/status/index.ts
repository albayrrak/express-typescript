import { Status } from "../../entities/Status";
import { StatusRequestModel, StatusResponseModel } from "../../models/authentication/StatusResponseModel";
import { BaseRepository } from "../base/BaseRepository";

export class StatusRepository extends BaseRepository<Status> {
  public async createStatus(data: StatusRequestModel): Promise<StatusResponseModel | null> {
    const status = await this.create(data);

    if (status) {
      return status;
    }

    return null;
  }
}
