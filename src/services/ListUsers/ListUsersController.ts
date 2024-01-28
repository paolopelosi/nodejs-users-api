import { Request, Response } from "express";
import ListUsersService from "./ListUsersService.js";

export default class ListUsersController {
  constructor(private listUsersService: ListUsersService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.listUsersService.execute();

      return res.status(200).send(users);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro inesperado.";

      return res.status(400).json({ message });
    }
  }
}
