import { Request, Response } from "express";
import CreateUserService from "./CreateUserService.js";

export default class CreateUserController {
  private createUserService: CreateUserService;

  constructor(createUserService: CreateUserService) {
    this.createUserService = createUserService;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, email, telefone, dataNascimento } = req.body;

    try {
      await this.createUserService.execute({
        nome,
        email,
        telefone,
        dataNascimento,
      });

      return res.status(201).send();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro inesperado.";

      return res.status(400).json({ message });
    }
  }
}
