import express from "express";
import AuthController from "../../controllers/Auth";
import { BaseResponse, StatusCode } from "../../models/BaseResponse";
import { body } from "express-validator";
import { validate } from "../../helpers/baseValidator";

const router = express.Router();

router.post("/authentication/register", async (req, res) => {
  const controller = new AuthController();

  const user = await controller.register(req.body);

  return res.status(200).json(new BaseResponse(user, true, StatusCode.Success, null));
});

export default router;
