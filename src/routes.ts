import { Router } from "express";
import { createUserController } from "./services/CreateUser/index.js";
import { findUserController } from "./services/FindUser/index.js";
import { listUsersController } from "./services/ListUsers/index.js";

const routes: Router = Router();

routes.get("/usuarios", (req, res) => {
  listUsersController.handle(req, res);
});

routes.get("/usuarios/:id", (req, res) => {
  findUserController.handle(req, res);
});

routes.post("/usuarios", (req, res) => {
  createUserController.handle(req, res);
});

export default routes;
