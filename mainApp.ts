import express, { Application, Request, Response } from "express";
import cors from "cors";
import ejs from "ejs";
import mongoose from "mongoose";
import company from "./router/companyRouter";

const data = {
  name: "Peter",
  matID: 33445,
  color: "red",
};

export const mainApp = (app: Application) => {
  app
    .set("view engine", "ejs")
    .use(express.json())
    .use(express.static("public"))
    .use(express.static(`${__dirname} ./public/css`))
    .use(express.static(`${__dirname} ./public/asset`))
    .use(cors())
    .use("/api/company", company)
    .get("/view", (req: Request, res: Response) => {
      res.render("index", { data });
    })
    .get("/", (req: Request, res: Response) => {
      res.json({ message: "Done" });
    });
};
