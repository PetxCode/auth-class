import express, { Application } from "express";
import { mainApp } from "./mainApp";
import mongoose from "mongoose";
const app: Application = express();
mainApp(app);
const server = app.listen(2622, () => {
  console.log("");
  console.log("server is ready to rock");

  mongoose
    .connect("mongodb+srv://PeterPan:PeterPan@codelab.eqkgv.mongodb.net/test")
    .then(() => {
      console.log("connected");
    });
});

process.on("uncaughtException", (err: Error) => {
  console.log("shutting down");
  console.log(err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: Error) => {
  console.log("shutting down: unhandledRejection");
  console.log(reason);

  server.close(() => {
    process.exit(1);
  });
});
