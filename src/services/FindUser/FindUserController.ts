import { Request, Response } from "express";
import FindUserService from "./FindUserService.js";

export default class FindUserController {
  constructor(private findUserService: FindUserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const user = await this.findUserService.execute(id);

      if (user) return res.status(200).send(user);
      return res.status(404).json({ message: "Usuário não encontrado" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro inesperado.";

      return res.status(400).json({ message });
    }
  }
}
