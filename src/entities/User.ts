import { randomUUID } from "crypto";

export interface Usuario {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
}

export interface User extends Usuario {}

export class User {
  public readonly id: string;

  constructor(data: Usuario, id?: string) {
    Object.assign(this, data);
    this.id = id || randomUUID();
  }
}
