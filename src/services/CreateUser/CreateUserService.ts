import { User, Usuario } from "../../entities/User.js";
import { IDatabase } from "../../repositories/IDatabase.js";

export default class CreateUserService {
  constructor(private userRepository: IDatabase) {}

  async execute(data: Usuario): Promise<void> {
    const user = new User(data);
    this.userRepository.put({ ...user });
  }
}
