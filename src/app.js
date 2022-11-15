import express from "express";
import bodyParser from "body-parser";

import appRouter from "./routes";
import database from "./config/database";

const createApp = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(appRouter);

  app.database = database;
  
  await app.database.connect();

  return app;
};

export default createApp;