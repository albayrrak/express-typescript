import express from "express";
import PingController from "../controllers/ping";
import { body } from "express-validator";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.post("/ping", async (req, res) => {
  const controller = new PingController();
  const response = await controller.createUser(req.body);
  return res.send(response);
});

export default router;
