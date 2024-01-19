import { DataSource } from "typeorm";
import { Photo } from "../models/user";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "15681568",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Photo],
  subscribers: [],
  migrations: [],
});
