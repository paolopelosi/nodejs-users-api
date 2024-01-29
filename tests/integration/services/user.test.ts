import { User, Usuario } from "../../../src/entities/User.js";
import { createUserService } from "../../../src/services/CreateUser/index.js";
import { findUserService } from "../../../src/services/FindUser/index.js";
import { listUsersService } from "../../../src/services/ListUsers/index.js";

let mockUser: Usuario;
let users: User[] = [];
let userId: string;

beforeAll(async () => {
  mockUser = {
    nome: "Fulano da Silva",
    email: "fulano.silva@dominio.com",
    telefone: "21999998888",
    dataNascimento: "1978-01-23",
  };
  await createUserService.execute(mockUser);
  await createUserService.execute({ ...mockUser, nome: "Cicrano Souza" });
  users = await listUsersService.execute();
  userId = users[0].id;
});

describe("FindUserService", () => {
  it("should return user by id", async () => {
    const res = await findUserService.execute(userId);
    expect(res).toBeDefined();
    expect(res?.nome).toEqual(mockUser.nome);
    expect(res?.email).toEqual(mockUser.email);
    expect(res?.telefone).toEqual(mockUser.telefone);
    expect(res?.dataNascimento).toEqual(mockUser.dataNascimento);
  });
  it("should return undefined on wrong id", async () => {
    const wrongId = "99999999-9999-9999-9999-999999999999";
    const res = await findUserService.execute(wrongId);
    expect(res).toBeUndefined();
  });
});

describe("ListUsersService", () => {
  it("should return array with existing users", async () => {
    const res = await listUsersService.execute();
    expect(res.length).toEqual(2);
  });
});
