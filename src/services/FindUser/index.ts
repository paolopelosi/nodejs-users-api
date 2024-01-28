import Database from "../../repositories/implementations/Database.js";
import FindUserController from "./FindUserController.js";
import FindUserService from "./FindUserService.js";

const db = Database.getInstance();

const findUserService = new FindUserService(db);
const findUserController = new FindUserController(findUserService);

export { findUserController, findUserService };
