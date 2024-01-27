import "reflect-metadata";
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { AppDataSource } from "./config/Database";

import AuthRoute from "./routes/authentication";
const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(AuthRoute);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
