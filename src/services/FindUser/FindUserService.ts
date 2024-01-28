import { Usuario } from "../../entities/User.js";
import { IDatabase } from "../../repositories/IDatabase.js";

export default class FindUserService {
  constructor(private userRepository: IDatabase) {}

  async execute(id: string): Promise<Usuario | undefined> {
    return this.userRepository.getOne(id);
  }
}
