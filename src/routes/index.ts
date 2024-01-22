import express from "express";
import PingController from "../controllers/Ping";
import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../config/database";

const router = express.Router();

router.post("/ping/create", async (req, res) => {
  const controller = new PingController();
  const test = await controller.createUser(req.body);

  return res.json(test);
});

router.post("/ping/update", async (req, res) => {
  const controller = new PingController();
  const test = await controller.updateUser(req.body);

  return res.json(test);
});

export default router;
