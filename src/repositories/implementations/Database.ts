import { User, Usuario } from "../../entities/User.js";
import { IDatabase } from "../IDatabase.js";

export default class Database implements IDatabase {
  private users: User[] = [];

  private static instance: Database;

  getAll() {
    return this.users;
  }

  getOne(id: string): Usuario | undefined {
    return this.users.find((user) => user.id === id);
  }

  put(data: Record<string, string>): void {
    const { id, nome, email, telefone, dataNascimento } = data;
    this.users.push({ id, nome, email, telefone, dataNascimento });
  }

  static getInstance(): Database {
    if (this.instance !== undefined) {
      return this.instance;
    }
    this.instance = new Database();
    return this.instance;
  }
}
