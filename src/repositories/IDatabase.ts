import { User, Usuario } from "../entities/User.js";

export interface IDatabase {
  getAll(): User[];
  getOne(id: string): Usuario | undefined;
  put(data: Record<string, string>): void;
}
