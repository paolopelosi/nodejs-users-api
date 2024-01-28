import { User } from "../../entities/User.js";
import { IDatabase } from "../../repositories/IDatabase.js";

export default class ListUsersService {
  constructor(private userRepository: IDatabase) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getAll();
  }
}
