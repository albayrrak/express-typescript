import { Get, Post, Route, Body, Tags } from "tsoa";
import { Photo } from "../models/user";
import { AppDataSource } from "../config/database";
import { BaseResponse, StatusCode } from "../models/baseResponse";

@Route("ping")
@Tags("Ping")
export default class PingController {
  @Get("/")
  public async getMessage(): Promise<BaseResponse<Photo>> {
    const data = await AppDataSource.manager.find(Photo);

    const response = new BaseResponse(data, true, StatusCode.NotFound, "Success");

    return response;
  }

  @Post("/")
  public async createUser(@Body() body: Photo): Promise<BaseResponse<Photo>> {
    const photo = new Photo();

    photo.name = body.name;
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.isPublished = true;

    const data = await AppDataSource.manager.save(photo);
    return {
      data: data,
      success: true,
      statusCode: StatusCode.Success,
      message: "Success",
    };
  }
}
