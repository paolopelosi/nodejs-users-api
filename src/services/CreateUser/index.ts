import Database from "../../repositories/implementations/Database.js";
import CreateUserController from "./CreateUserController.js";
import CreateUserService from "./CreateUserService.js";

const db = Database.getInstance();

const createUserService = new CreateUserService(db);
const createUserController = new CreateUserController(createUserService);

export { createUserController, createUserService };
