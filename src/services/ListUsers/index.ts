import Database from "../../repositories/implementations/Database.js";
import ListUsersController from "./ListUsersController.js";
import ListUsersService from "./ListUsersService.js";

const db = Database.getInstance();

const listUsersService = new ListUsersService(db);
const listUsersController = new ListUsersController(listUsersService);

export { listUsersController, listUsersService };
