import { User } from "../../../src/entities/User.js";
import { createUserService } from "../../../src/services/CreateUser/index.js";
import { listUsersService } from "../../../src/services/ListUsers/index.js";
import { request } from "../../helpers.js";

describe("Usuarios routes", () => {
  let user: User;
  let userId: string;

  beforeAll(async () => {
    await createUserService.execute({
      nome: "Fulano da Silva",
      email: "fulano.silva@dominio.com",
      telefone: "21999998888",
      dataNascimento: "1978-01-23",
    });
    await createUserService.execute({
      nome: "Cicrano Souza",
      email: "cicrano.souza@dominio.com",
      telefone: "11979796565",
      dataNascimento: "1993-10-07",
    });

    user = (await listUsersService.execute())[0];
    userId = user.id || "";
  });

  describe("GET /usuarios - List all users", () => {
    it("should return an array of existing users", async () => {
      const res = await request.get("/usuarios").expect(200);
      expect(res.body?.length).toEqual(2);
    });
  });

  describe("GET /usuarios/:id - Get single user", () => {
    it("should return a single user with id", async () => {
      const res = await request.get(`/usuarios/${userId}`).expect(200);

      expect(res.body.id).toEqual(userId);
      expect(res.body.nome).toEqual(user.nome);
    });
    it("should return status 404 on wrong id", async () => {
      const wrongId = "99999999-9999-9999-9999-999999999999";
      const res = await request.get(`/usuarios/${wrongId}`).expect(404);
      expect(res.body.message).toEqual("Usuário não encontrado");
    });
  });

  describe("POST /usuarios - Create a user", () => {
    it("should return status 201 on success", async () => {
      const res = await request
        .post("/usuarios")
        .send({
          nome: "Jose Teste",
          email: "jose.teste@dominio.com",
          telefone: "21976543210",
          dataNascimento: "1988-08-22",
        })
        .set("Accept", "application/json")
        .expect(201);
      expect(res.text).toEqual("Usuário cadastrado com sucesso.");
    });
  });
});
